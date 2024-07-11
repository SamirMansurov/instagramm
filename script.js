function reload() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=12';

    const storesDiv = document.querySelector('.stores');
    storesDiv.innerHTML = '';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(photo => {
                const storyDiv = document.createElement('div');
                storyDiv.classList.add('story');

                const button = document.createElement('button');

                const nicknameParagraph = document.createElement('p');
                nicknameParagraph.textContent = 'nickname';

                const image = document.createElement('img');
                image.src = photo.url;
                image.alt = 'Photo';

                storyDiv.append(button);
                storyDiv.append(nicknameParagraph);
                storyDiv.append(image);

                storesDiv.append(storyDiv);
            });
        })
  
           
        };


reload();


const container = document.querySelector('#container');


for (let i = 1; i <= 100; i++) {

  const bigBox = document.createElement('div');
  bigBox.classList.add('big_box');

  
  const nicknameDiv = document.createElement('div');
  nicknameDiv.classList.add('nickname');


  const button = document.createElement('button');
  button.classList.add('button');
  nicknameDiv.append(button);

  const nicknameBox = document.createElement('div');
  nicknameBox.classList.add('nickname_box');
  nicknameDiv.append(nicknameBox);


  const nicknameText = document.createElement('p');
  nicknameText.innerHTML = '<b>nickname</b>';
  nicknameBox.append(nicknameText);

  const locationText = document.createElement('p');
  locationText.textContent = 'City, Country';
  nicknameBox.append(locationText);


  const pointsDiv = document.createElement('div');
  pointsDiv.classList.add('points');
  nicknameDiv.append(pointsDiv);


  const pointsButton = document.createElement('button');
  pointsDiv.append(pointsButton);

  
  bigBox.append(nicknameDiv);


  const grayBox = document.createElement('div');
  grayBox.classList.add('gray_box');
  fetch('https://jsonplaceholder.typicode.com/photos/' + i)
    .then(response => response.json())
    .then(data => {
      grayBox.style.backgroundImage = `url(${data.url})`;
    })
    .catch(error => {
      console.error('Error fetching image:', error);
      grayBox.textContent = 'Failed to load image';
    });

  bigBox.append(grayBox);


  const buttonBox = document.createElement('div');
  buttonBox.classList.add('button_box');


  const btnDiv = document.createElement('div');
  btnDiv.classList.add('btn');

 
  const heartButton = document.createElement('button');
  heartButton.innerHTML = '<i class="fa-regular fa-heart"></i>';
  btnDiv.append(heartButton);

  const commentButton = document.createElement('button');
  commentButton.classList.add('open_modal');
  commentButton.innerHTML = '<i class="fa-regular fa-comment"></i>';
  btnDiv.append(commentButton);

  const telegramButton = document.createElement('button');
  telegramButton.innerHTML = '<i class="fa-brands fa-telegram"></i>';
  btnDiv.append(telegramButton);

  buttonBox.append(btnDiv);

 
  const bookmarkButton = document.createElement('button');
  bookmarkButton.innerHTML = '<i class="fa-sharp fa-regular fa-bookmark"></i>';
  buttonBox.append(bookmarkButton);

  bigBox.append(buttonBox);


  const textBox = document.createElement('div');
  textBox.classList.add('text_box');

  
  const likesText = document.createElement('p');
  likesText.innerHTML = '<b>8,888 likes</b>';
  textBox.append(likesText);

  const mainText = document.createElement('p');
  mainText.classList.add('neme');
  mainText.innerHTML = '<b>nickname </b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis... <span>more</span>';
  textBox.append(mainText);

  const commentsText = document.createElement('p');
  commentsText.classList.add('grayy');
  commentsText.textContent = 'View all 33 comments';
  textBox.append(commentsText);

  const likeText1 = document.createElement('p');
  likeText1.classList.add('like');
  likeText1.innerHTML = 'nickname Lorem ipsum dolor sit amet <button><i class="fa-regular fa-heart"></i></button>';
  textBox.append(likeText1);

  const likeText2 = document.createElement('p');
  likeText2.classList.add('like');
  likeText2.innerHTML = 'nickname Lorem ipsum dolor sit amet <button><i class="fa-regular fa-heart"></i></button>';
  textBox.append(likeText2);

  const timeText = document.createElement('p');
  timeText.textContent = '1 hour ago';
  textBox.append(timeText);

  bigBox.append(textBox);


  const hrLine = document.createElement('hr');
  bigBox.append(hrLine);


  const postDiv = document.createElement('div');
  postDiv.classList.add('post');


  const smileButton = document.createElement('button');
  smileButton.innerHTML = '<i class="fa-regular fa-face-smile"></i>';
  postDiv.append(smileButton);


  const commentInput = document.createElement('input');
  commentInput.setAttribute('type', 'text');
  commentInput.setAttribute('placeholder', 'Add a comment..');
  postDiv.append(commentInput);


  const postText = document.createElement('p');
  postText.classList.add('blue');
  postText.innerHTML = '<b>Post</b>';
  postDiv.append(postText);

  bigBox.append(postDiv);

  
  if (container) {
    container.append(bigBox);
  } else {
    
    break;
  }
}




const profilsContainer = document.querySelector('.profils_container');

const profilsDiv = document.createElement('div');
profilsDiv.classList.add('profils');

const profilDiv = document.createElement('div');
profilDiv.classList.add('profil');

const button1 = document.createElement('button');
profilDiv.append(button1);

const textDiv1 = document.createElement('div');
textDiv1.classList.add('text');
profilDiv.append(textDiv1);

const nicknameText1 = document.createElement('p');
nicknameText1.innerHTML = '<b>nickname</b>';
textDiv1.append(nicknameText1);

const greyText1 = document.createElement('p');
greyText1.classList.add('grey');
greyText1.innerHTML = '<span>.Name Surmane</span>';
textDiv1.append(greyText1);

const blueText1 = document.createElement('p');
blueText1.classList.add('blue');
blueText1.textContent = 'Switch';
profilDiv.append(blueText1);


profilsDiv.append(profilDiv);


profilsContainer.onclick= () =>{

  window.location.href = 'account.html';
};


const allDiv = document.createElement('div');
allDiv.classList.add('All');


const grayText2 = document.createElement('p');
grayText2.classList.add('gray');
grayText2.innerHTML = '<span>Suggestions For You</span>';
allDiv.append(grayText2);

const seeAllText = document.createElement('p');
seeAllText.innerHTML = '<b>See All</b>';
allDiv.append(seeAllText);


profilsDiv.append(allDiv);


for (let i = 0; i < 10; i++) {
  const smallProfilDiv = document.createElement('div');
  smallProfilDiv.classList.add('small_profil');


  const button2 = document.createElement('button');
  button2.classList.add('small');
  smallProfilDiv.append(button2);


  const smallBoxDiv = document.createElement('div');
  smallBoxDiv.classList.add('small_box');
  smallProfilDiv.append(smallBoxDiv);


  const nicknameText2 = document.createElement('p');
  nicknameText2.innerHTML = '<b>nickname</b>';
  smallBoxDiv.append(nicknameText2);

  const greyText2 = document.createElement('p');
  greyText2.classList.add('grey');
  greyText2.innerHTML = '<span>Suggestions For You</span>';
  smallBoxDiv.append(greyText2);

  const blueText2 = document.createElement('p');
  blueText2.classList.add('blue');
  blueText2.textContent = 'Follow';
  smallProfilDiv.append(blueText2);


  profilsDiv.append(smallProfilDiv);
}

if (profilsContainer) {
  profilsContainer.append(profilsDiv);
} 


// import { reload } from './reload.js';
// import { populateContainer } from './populate.js';
// import { createProfils } from './profils.js';

// // Вызываем функции из каждого модуля
// reload();
// populateContainer();
// createProfils();





