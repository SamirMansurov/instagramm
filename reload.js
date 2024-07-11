// export function reload() {
//     const apiUrl = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=12';
  
//     const storesDiv = document.querySelector('.stores');
//     storesDiv.innerHTML = '';
  
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => {
//         data.forEach(photo => {
//           const storyDiv = document.createElement('div');
//           storyDiv.classList.add('story');
  
//           const button = document.createElement('button');
  
//           const nicknameParagraph = document.createElement('p');
//           nicknameParagraph.textContent = 'nickname';
  
//           const image = document.createElement('img');
//           image.src = photo.url;
//           image.alt = 'Photo';
  
//           storyDiv.append(button);
//           storyDiv.append(nicknameParagraph);
//           storyDiv.append(image);
  
//           storesDiv.append(storyDiv);
//         });
//       })
//       .catch(error => {
      
//       });
//   }