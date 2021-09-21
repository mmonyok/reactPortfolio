import React from 'react';
import Manage from '../../assets/images/manageMeNow.jpg';
import Snaccidental from '../../assets/images/snaccidentalRecipe.jpg';
import Budget from '../../assets/images/budgetTracker.jpg';
import Fitness from '../../assets/images/fitnessTracker.jpg';
import Tech from '../../assets/images/techBlog.jpg';
import Weather from '../../assets/images/weatherDashboard.jpg';
import Projects from './components/Projects';

const projects = [
  {
    name: 'Manage Me Now',
    application: 'https://manage-me-now.herokuapp.com/',
    github: 'https://github.com/mmonyok/Manage-Me-Now',
    image: Manage,
  },
  {
    name: 'Snaccidental Recipe',
    application: 'https://mmonyok.github.io/snaccidental-recipe/',
    github: 'https://github.com/mmonyok/snaccidental-recipe',
    image: Snaccidental
  },
  {
    name: 'Budget Tracker',
    application: 'https://budget-tracker-mmonyok.herokuapp.com/',
    github: 'https://github.com/mmonyok/budgetTracker',
    image: Budget
  },
  {
    name: 'Fitness Tracker',
    application: 'https://fitness-tracker-mmonyok.herokuapp.com/',
    github: 'https://github.com/mmonyok/fitnessTracker',
    image: Fitness
  },
  {
    name: 'Tech Blog',
    application: 'https://tech-blog-mmonyok.herokuapp.com/',
    github: 'https://github.com/mmonyok/TechBlog',
    image: Tech
  },
  {
    name: 'Weather Dashboard',
    application: 'https://mmonyok.github.io/06-HW-weatherDashboard/',
    github: 'https://github.com/mmonyok/06-HW-weatherDashboard',
    image: Weather
  }
];

export default function Portfolio() {
  return (
    <div>
      <h1 className="ms-4 mt-2">Portfolio Page</h1>
      <Projects projects={projects} />
    </div>
  );
};