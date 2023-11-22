'use strict';

/*
### Milestone 1

Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:

- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.


YYYY-MM-DD HH:MM:SS
2023-11-22 12:24:50

11-22-2023
23-11-2023

*/

const users = [
  {
    firstName: 'Gaetano',
    lastName: 'Frascolla',
    photo: 'path',
  },
  {
    name: 'Elisa',
    photo: 'path',
  },
  {
    name: 'Kevin',
    photo: 'path',
  },
];

const posts = [
  {
    postId: 1,
    author: 0, //gaetano
    date: '11-22-2023',
    content: 'Lorem ipsum',
    img: {
      path: 'path',
      alt: 'title',
    },
    likes: 1,
  },
  {
    postId: 2,
    author: 1, //elisa
    date: '11-15-2023',
    content: 'Lorem ipsum',
    img: {
      path: 'path',
      alt: 'title',
    },
    likes: 80,
  },
  {
    postId: 3,
    author: 2, //kevin
    date: '10-20-2023',
    content: 'Lorem ipsum',
    img: {
      path: 'path',
      alt: 'title',
    },
    likes: 47,
  },
];
