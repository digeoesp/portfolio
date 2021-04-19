import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Diego Espinoza', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Diego Espinoza',
  subtitle: "I'm a software developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1cIVVLxcalvb8AZwULxg9G6YQPkV5__B4/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Kcal',
    info: 'Web application that allows users to input their calorie goal for the day, enter food items, select food from their food log.Users will select food from their personal food log and the appropriate amount will be subtracted from their calorie goal for the day.Pythons datetime handles the new instance of the user to have a new calorie goal daily. ',
    info2: 'Technologies used: Python, Django',
    url: 'https://k-cal.herokuapp.com/',
    repo: 'https://github.com/digeoesp/Kcal', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Meals on Wheel',
    info: 'A social app that allows members to upload their favorite food trucks and a description of what they enjoy eating; it also shares the city and name of food trucks for other members to check out. Members will have access to personal accounts where they can add and remove posts.',
    info2: 'Technologies used: Javascript, ExpressJS, Sequelize, PostgresQL, BCrypt, Cloudinary',
    url: 'https://meals-with-chill.herokuapp.com/',
    repo: 'https://github.com/digeoesp/Meals-on-wheels', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Tail Wag',
    info: 'Fullstack application where users are able to enter their zip code to search for dogs or cats that are currently available for adoption near their area. Utilizing PetFinder Api we are able to grab current and up to date data across the U.S and Canada',
    info2: 'Technologies used: React, CSS, Express, MongoDB, Mongoose',
    url: '',
    repo: 'https://github.com/digeoesp/mern-auth-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Number Guessing Game',
    info: 'A single player game against the computer. The player attempts to guess the random number generated by the computer within a certain amount of tries. Contains difficulty setting between hard and easy, Input field, Submit button; Displays correct or incorrect answer, and Displays if the guess is too high or low.',
    info2: 'Technologies used: HTML, CSS, JavaScript ',
    url: 'https://digeoesp.github.io/Number-Guessing-Game/',
    repo: 'https://github.com/digeoesp/Number-Guessing-Game', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: 'Email',
  email: 'diegoespinoza475@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/diego_crypto',
    },
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/diego-espinoza1/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/digeoesp',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
