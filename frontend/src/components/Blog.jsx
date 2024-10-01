import React from 'react'
import { FaLeaf, FaAppleAlt, FaCarrot } from 'react-icons/fa'
import VideoBackground from './VideoBackground'
import BackButton from './BackButton'

function Blog() {
  return (
    <VideoBackground videoSrc="src/videos/3015488-hd_1920_1080_24fps.mp4">
      <BackButton />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
         <div className="max-w-3xl bg-white bg-opacity-70 rounded-lg shadow-xl p-8 text-gray-800"> 
          <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">Healthy Eating: Your Path to Wellness</h1>
          
          
          <p className="text-gray-800 mb-4">
            Eating a balanced, nutritious diet is one of the most important things you can do for your health. It can help you maintain a healthy weight, reduce your risk of chronic diseases, and promote your overall well-being.
          </p>
          
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Key Principles of Healthy Eating</h2>
          
          <ul className="list-none space-y-2 mb-6">
            <li className="flex items-center">
              <FaLeaf className="text-green-500 mr-2" />
              <span>Eat plenty of fruits and vegetables</span>
            </li>
            <li className="flex items-center">
              <FaAppleAlt className="text-red-500 mr-2" />
              <span>Choose whole grains over refined grains</span>
            </li>
            <li className="flex items-center">
              <FaCarrot className="text-orange-500 mr-2" />
              <span>Limit processed foods and added sugars</span>
            </li>
          </ul>
          
          <p className="text-gray-800 mb-4">
            Remember, healthy eating doesn't have to be complicated. Start with small changes and gradually build healthier habits over time. Your body will thank you!
          </p>
          
          <div className="text-center mt-8">
            <a href="https://www.health.com/" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-red px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
              Read More Health Tips
            </a>
          </div>
        </div>
       </div> 
    </VideoBackground>
  )
}

export default Blog
