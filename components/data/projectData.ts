import datcord from '../../public/datcord.png';
import lookr from '../../public/lookr.png';
import battleship from '../../public/battleship.png';
import switcher1 from '../../public/switcher1.png';
import todo1 from '../../public/todo1.png';
import { projectType } from '../types/projectTypes';

export const projectdata: projectType[] = [
  {
    title: 'Datcord',
    summary: 'A One Server Discord Clone',
    description:
      'A Fullstack Real-time Messaging App with the core functionalities of Discord. Create channels and chat with realtime users. Made with ReactJS, react-router, and Firebase as Backend.',
    tags: ['Fullstack', 'ReactJS', 'styled-components', 'Firebase', 'Jest'],
    image: datcord,
    repo: 'https://github.com/bananabread08/datcord',
    live: 'https://bananabread08.github.io/datcord',
  },
  {
    title: 'Lookr',
    summary: "A Where's Waldo-like Photo-Tagging App",
    description:
      "A Web App implementation of the Where's Waldo game. Find 3 items from a given map/image as fast as possible. Submit your high scores and see if you belong to the Top 10! Made with ReactJS, styled-components, react-router, + Firebase as backend.",
    tags: ['Fullstack', 'ReactJS', 'styled-components', 'Firebase'],
    image: lookr,
    repo: 'https://github.com/bananabread08/photo-tagging-app',
    live: 'https://photo-tagging-app-1fd39.web.app/#/',
  },
  {
    title: 'Battleship',
    summary: 'The Classic Battleship game.',
    description:
      'A single player implementation of the classic Battleship game. Test Driven Development (TDD) methodology has been applied for involved modules/pure functions to be unit tested. Made with VanillaJS, HTML, CSS, and Jest for Testing.',
    tags: ['Frontend', 'JavaScript', 'HTML', 'CSS', 'Jest'],
    image: battleship,
    repo: 'https://github.com/bananabread08/battleship-vanilla',
    live: 'https://bananabread08.github.io/battleship-vanilla/',
  },
  {
    title: 'Shopping Cart',
    summary: 'An E-Commerce Site for online shopping. ',
    description:
      'A Frontend E-Commerce Site/App that captures the online shopping experience. Route to different pages: Home, Shop, and Cart. Add and remove items to/from your cart. Made with ReactJS, styled-components, and react-router.',
    tags: ['Frontend', 'ReactJS', 'TypeScript', 'Jest', 'ReactTesting'],
    image: switcher1,
    repo: 'https://github.com/bananabread08/shopping-cart',
    live: 'https://bananabread08.github.io/shopping-cart/',
  },
  {
    title: "Todon't: A Todo-List",
    summary: 'A Task Management App.',
    description:
      'My own take of the popular Todo-List app. Add Projects that serves as a container for your todo-lists. Add/delete todos from each list. Made with VanillaJS, HTML, and CSS.',
    tags: ['Frontend', 'TypeScript', 'HTML', 'CSS'],
    image: todo1,
    repo: 'https://github.com/bananabread08/todolist',
    live: 'https://bananabread08.github.io/todolist/',
  },
  // {
  //   title: 'This Portfolio Site',
  //   summary: 'My Portfolio',
  //   tags: ['Frontend', 'React', 'styled-components'],
  //   image: myportfolio,
  //   repo: 'https://github.com/bananabread08/portfolio',
  //   live: 'https://bananabread08.github.io/portfolio/',
  // },
];
