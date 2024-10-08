package com.example.backend;

import com.example.backend.common.UserRepository;
import com.example.backend.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.transaction.annotation.Transactional;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest(properties = "spring.config.location=classpath:/application.properties")
@AutoConfigureMockMvc
@Transactional
class BackendApplicationTests {


	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@BeforeEach
	void setUp() {
		userRepository.deleteAll();
		User user = new User();
		user.setUsername("testuser");
		user.setPassword(passwordEncoder.encode("password"));
		userRepository.save(user);
	}

	@Test
	void testGetUsers() throws Exception {
		mockMvc.perform(get("/api/users"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$", hasSize(1)))
				.andExpect(jsonPath("$[0].username", is("testuser")));
	}

	@Test
	void testCreateUser() throws Exception {
		String newUserJson = "{\"username\":\"newuser\",\"password\":\"newpassword\"}";

		mockMvc.perform(post("/api/createuser")
						.contentType(MediaType.APPLICATION_JSON)
						.content(newUserJson))
				.andExpect(status().isCreated())
				.andExpect(jsonPath("$.username", is("newuser")));
	}

	@Test
	void testCheckUser() throws Exception {
		mockMvc.perform(get("/api/checkuser")
						.param("username", "testuser"))
				.andExpect(status().isOk())
				.andExpect(content().string("true"));
	}

	@Test
	void testCheckUserNotFound() throws Exception {
		mockMvc.perform(get("/api/checkuser")
						.param("username", "nonexistentuser"))
				.andExpect(status().isOk())
				.andExpect(content().string("false"));
	}

	@Test
	void testLoginUser() throws Exception {
		String loginJson = "{\"username\":\"testuser\",\"password\":\"password\"}";

		MvcResult result = mockMvc.perform(post("/api/login")
						.contentType(MediaType.APPLICATION_JSON)
						.content(loginJson))
				.andExpect(status().isOk())
				.andReturn();

		String responseContent = result.getResponse().getContentAsString();
		assertTrue(responseContent.contains("dummy-token"));
	}

	@Test
	void testLoginUserInvalidCredentials() throws Exception {
		String loginJson = "{\"username\":\"testuser\",\"password\":\"wrongpassword\"}";

		mockMvc.perform(post("/api/login")
						.contentType(MediaType.APPLICATION_JSON)
						.content(loginJson))
				.andExpect(status().isBadRequest())
				.andExpect(jsonPath("$.error", is("Invalid username or password")));
	}
}