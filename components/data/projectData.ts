import datcord from '../../public/datcord.png';
import lookr from '../../public/lookr.png';
import battleship from '../../public/battleship.png';
import switcher1 from '../../public/switcher1.png';
import todo1 from '../../public/todo1.png';
import { projectType } from '../types/projectTypes';

export const projectdata: projectType[] = [
  {
    title: 'Datcord',
    description: 'A One Server Discord Clone',
    tags: ['Fullstack', 'ReactJS', 'styled-components', 'Firebase', 'Jest'],
    image: datcord,
    repo: 'https://github.com/bananabread08/datcord',
    live: 'https://bananabread08.github.io/datcord',
  },
  {
    title: 'Lookr',
    description: "A Where's Waldo-like Photo-Tagging App",
    tags: ['Fullstack', 'ReactJS', 'styled-components', 'Firebase'],
    image: lookr,
    repo: 'https://github.com/bananabread08/photo-tagging-app',
    live: 'https://photo-tagging-app-1fd39.web.app/#/',
  },
  {
    title: 'Battleship',
    description: 'The Classic Battleship game.',
    tags: ['Frontend', 'JavaScript', 'HTML', 'CSS', 'Jest'],
    image: battleship,
    repo: 'https://github.com/bananabread08/battleship-vanilla',
    live: 'https://bananabread08.github.io/battleship-vanilla/',
  },
  {
    title: 'Shopping Cart',
    description: 'An E-Commerce Site for online shopping. ',
    tags: ['Frontend', 'ReactJS', 'TypeScript', 'Jest', 'ReactTesting'],
    image: switcher1,
    repo: 'https://github.com/bananabread08/shopping-cart',
    live: 'https://bananabread08.github.io/shopping-cart/',
  },
  {
    title: "Todon't: A Todo-List",
    description: 'A Task Management App.',
    tags: ['Frontend', 'TypeScript', 'HTML', 'CSS'],
    image: todo1,
    repo: 'https://github.com/bananabread08/todolist',
    live: 'https://bananabread08.github.io/todolist/',
  },
  // {
  //   title: 'This Portfolio Site',
  //   description: 'My Portfolio',
  //   tags: ['Frontend', 'React', 'styled-components'],
  //   image: myportfolio,
  //   repo: 'https://github.com/bananabread08/portfolio',
  //   live: 'https://bananabread08.github.io/portfolio/',
  // },
];
