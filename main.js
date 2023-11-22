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

/* base dati utenti */
const users = [
  {
    firstName: 'Gaetano',
    lastName: 'Frascolla',
    photo: 'https://unsplash.it/300/300?image=15',
  },
  {
    firstName: 'Elisa',
    lastName: 'Chiappini',
    photo: 'https://unsplash.it/300/300?image=20',
  },
  {
    firstName: 'Kevin',
    lastName: 'Bochensky Badellino',
    photo: 'https://unsplash.it/300/300?image=30',
  },
];

/* base dati posts */
const posts = [
  {
    postId: 1,
    author: 0, //gaetano
    date: '11-22-2023',
    content: 'Lorem ipsum 1',
    img: {
      path: 'https://unsplash.it/600/300?image=15',
      alt: 'title',
    },
    likes: 1,
  },
  {
    postId: 2,
    author: 1, //elisa
    date: '11-15-2023',
    content: 'Lorem ipsum 2',
    img: {
      path: 'https://unsplash.it/600/300?image=21',
      alt: 'title',
    },
    likes: 80,
  },
  {
    postId: 3,
    author: 2, //kevin
    date: '10-20-2023',
    content: 'Lorem ipsum 3',
    img: {
      path: 'https://unsplash.it/600/300?image=40',
      alt: 'title',
    },
    likes: 47,
  },
];

/*
### Milestone 2

Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

1. template literal - 8
2. create Element - 6
3. clone da html - 9,5
4. framework - 10

*/

const template = document.getElementById('post-social-element');
const postsContainer = document.getElementById('container');

// console.log(template);
posts.forEach((post) => {
  const currentElement = template.content.cloneNode(true);

  const { author, date, content: description, img, likes, postId } = post;

  console.log(img);

  // const newObj = {...post, content: 'prova'}

  const { firstName, lastName, photo } = users[author];

  //elaborazione del post
  //profile pic
  currentElement.querySelector('.profile-pic').src = photo;
  //nome autore
  currentElement.querySelector(
    '.post-meta__author'
  ).innerText = `${firstName} ${lastName}`;
  //data post
  currentElement.querySelector('.post-meta__time').innerText = date;
  //content
  currentElement.querySelector('.post__text').innerHTML = description;
  //img
  currentElement.querySelector('.post__image > img').src = img.path;
  //img
  const likeCounter = currentElement.querySelector('.js-likes-counter');
  likeCounter.id = `like-counter-${postId}`;
  likeCounter.innerText = likes;
  postsContainer.append(currentElement);
});
