

// export function createProfils() {
//     const profilsContainer = document.querySelector('.profils_container');
  
//     const profilsDiv = document.createElement('div');
//     profilsDiv.classList.add('profils');
  

  
//     profilsContainer.onclick = () => {
//       window.location.href = 'account.html';
//     };
  
//     const allDiv = document.createElement('div');
//     allDiv.classList.add('All');
  
//     const grayText2 = document.createElement('p');
//     grayText2.classList.add('gray');
//     grayText2.innerHTML = '<span>Suggestions For You</span>';
//     allDiv.append(grayText2);
  
//     const seeAllText = document.createElement('p');
//     seeAllText.innerHTML = '<b>See All</b>';
//     allDiv.append(seeAllText);
  
//     profilsDiv.append(allDiv);
  
//     for (let i = 0; i < 10; i++) {
//       const smallProfilDiv = document.createElement('div');
//       smallProfilDiv.classList.add('small_profil');
  
//       const button2 = document.createElement('button');
//       button2.classList.add('small');
//       smallProfilDiv.append(button2);
  
//       const smallBoxDiv = document.createElement('div');
//       smallBoxDiv.classList.add('small_box');
//       smallProfilDiv.append(smallBoxDiv);
  
//       const nicknameText2 = document.createElement('p');
//       nicknameText2.innerHTML = '<b>nickname</b>';
//       smallBoxDiv.append(nicknameText2);
  
//       const greyText2 = document.createElement('p');
//       greyText2.classList.add('grey');
//       greyText2.innerHTML = '<span>Suggestions For You</span>';
//       smallBoxDiv.append(greyText2);
  
//       const blueText2 = document.createElement('p');
//       blueText2.classList.add('blue');
//       blueText2.textContent = 'Follow';
//       smallProfilDiv.append(blueText2);
  
//       profilsDiv.append(smallProfilDiv);
//     }
  
//     if (profilsContainer) {
//       profilsContainer.append(profilsDiv);
//     }
//   }
  