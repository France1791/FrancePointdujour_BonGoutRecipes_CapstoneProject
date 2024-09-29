import React from 'react';
import logo from '../images/Leonardo_Phoenix_A_vibrant_logo_for_BonGout_Recipes_a_recipe_a_3.jpg';

function Logo() {
  return (
    <div>
      <img src={logo} alt="Recipe App Logo" className="h-16 w-18 rounded-full" />
    </div>
  );
}

export default Logo;