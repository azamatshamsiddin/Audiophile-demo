console.log('hey!');
// const burger_mneu = document.getElementById('burger_mneu');
// const menu_container = document.getElementById('menu_container');

// burger_mneu.addEventListener('click', () => {
//     menu_container.classList.add('show');
// });

// let nav = false;

// let burger_menu = function () {
//   let getMenuConatiner = document.querySelector('.menu-container');
//   let getMenu = document.querySelector('.menu');

//   if (nav === false) {
//     getMenuConatiner.style.visibility = 'visible';
//     getMenu.style.height = '50%';

//     let arrayLength = getMenu.length;
//     for (let i=0; i< arrayLength; i++){
//       getMenu[i].style.height = '100%';
//     }
//     nav = true;
//   }

// }

function nav() {
  document.getElementById('menu_container').classList.toggle('show');
  document.getElementById('menu').classList.toggle('show');
}