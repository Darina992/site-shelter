const body = document.querySelector('body');
const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger-menu');
const logo = document.querySelector('.logo');
const blackout = document.querySelector('.blackout');
const popup = document.querySelector('.pop-up');
const ourFriendsConteiner = document.querySelector('.our-friends-conteiner');
const buttonStart = document.querySelector('.button-start');
const buttonPrev = document.querySelector('.button-prev');
const buttonNow = document.querySelector('.button-now');
const buttonNext = document.querySelector('.button-next');
const buttonEnd = document.querySelector('.button-end');
const ourFriendsItems = Array.from(document.querySelectorAll('.our-friends-item'))


const pets = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/pets-sophia.jpg",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/pets-scarlet.jpg",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/pets-timmy.jpg",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/pets-freddie.jpg",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/pets-charly.jpg",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];

//burger menu open
body.addEventListener("click",function (event) {
  if(event.target.closest(".burger-menu")  || event.target.closest("main") && header.classList.contains('open')
    || header.classList.contains('open') && event.target.closest("li")){
    if(header.classList.contains('open')){
      header.classList.add("close");
      header.classList.remove("open");
      blackout.classList.remove("blackout-show");
      // Когда  окно скрыто...
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    } else{
      header.classList.remove("close");
      header.classList.add("open");
      blackout.classList.add("blackout-show");
      // Запрет прокрутки
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
    }
  }
});

//modal window
ourFriendsConteiner.addEventListener("click",function (event) {
  if(event.target.closest(".our-friends-item")){
    let petName = event.target.closest(".our-friends-item").dataset.name;
    popup.classList.add("show");
    blackout.classList.add("blackout-show");
    fillPopup(petName);
    document.body.style.overflow = "hidden";
    }
    const buttonCloseModel = document.querySelector('.button-close-modal');
    buttonCloseModel.addEventListener("click",function () {
      popup.classList.remove("show");
      blackout.classList.remove("blackout-show");
      document.body.style.overflow = "";
    })
    blackout.addEventListener("click",function () {
      popup.classList.remove("show");
      blackout.classList.remove("blackout-show");
      document.body.style.overflow = "";
    })


})
function fillPopup(name) {
  let popupImage = document.querySelector('.pop-up-img img');
  let popupName = document.querySelector('.pop-up-name');
  let popupBreed = document.querySelector('.pop-up-breed');
  let popupDescription = document.querySelector('.pop-up-description');
  let popupAge = document.querySelector('.pop-up-age');
  let popupInoculations = document.querySelector('.pop-up-inoculations');
  let popupDiseases = document.querySelector('.pop-up-diseases');
  let popupParasites = document.querySelector('.pop-up-parasites');
  pets.forEach((item) => {
    if(item.name === name){
      popupImage.src = `${item.img}`;
      popupImage.alt = `${item.name}`;
      popupName.textContent = `${item.name}`;
      popupBreed.textContent = `${item.type} - ${item.breed}`;
      popupDescription.textContent = `${item.description}`;
      popupAge.innerHTML = `<span class="dark-color-font"><b>Age:</b> ${item.age}</span>`;
      popupInoculations.innerHTML = `<span class="dark-color-font"><b>Inoculations:</b> ${item.inoculations}</span>`;
      popupDiseases.innerHTML = `<span class="dark-color-font"><b>Diseases:</b> ${item.diseases}</span>`;
      popupParasites.innerHTML = `<span class="dark-color-font"><b>Parasites:</b> ${item.parasites}</span>`;
    }
  });

}
popup.addEventListener("mouseout",function(event){
  const buttonCloseModel = document.querySelector('.button-close-modal');
  buttonCloseModel.style.backgroundColor = "#F1CDB3";//
})
popup.addEventListener("mouseover",function(event){
  const buttonCloseModel = document.querySelector('.button-close-modal');
  buttonCloseModel.style.backgroundColor = "";
})


//pagination
let pages = [];
let petsArrayForPages = [];
function createPetsPages() {
  /*let petsNewArray = [];

  function shuffle(array) {
    return array.slice().sort(() => Math.random() - 0.5);
  }
  for (let i = 0; i < 6; i++) {
    petsNewArray.push(...shuffle(pets));
  }
  console.log(petsNewArray)
  function sliceIntoChunks(arr, chunkSize) {
     const res = [];
     for (let i = 0; i < arr.length; i += chunkSize) {
     const chunk = arr.slice(i, i + chunkSize);
     res.push(chunk);
     }
     return res;
  }

  if(window.innerWidth >= 1280){
    petsPages = sliceIntoChunks(petsNewArray,8);
    console.log(petsPages)
  } else if(window.innerWidth < 1280 && window.innerWidth >= 768){
    petsPages = sliceIntoChunks(petsNewArray,6);
    console.log(petsPages)
  } else {
    petsPages = sliceIntoChunks(petsNewArray,3);
    console.log(petsPages)
  }*/
  let petsPages = [];
  function shuffle(array) {
    return array.slice().sort(() => Math.random() - 0.5);
  }
  if(window.innerWidth >= 1280){
    for (let i = 0; i < 6; i++) {
      petsPages.push(shuffle(pets));
    }
  } else if(window.innerWidth < 1280 && window.innerWidth >= 768){
    for (let i = 0; i < 8; i++) {
      let arr = shuffle(pets);
      for (let i = 0; i < 2; i++) {
        arr.pop()
      }
      petsPages.push(arr);
    }
  } else {
    for (let i = 0; i < 16; i++) {
      let arr = shuffle(pets);
      for (let i = 0; i < 13; i++) {
        arr.pop()
      }
      petsPages.push(arr);
    }
  }
  console.log(petsPages);

  return petsPages
}
(function buildPages(){
  petsArrayForPages = createPetsPages();
  console.log(petsArrayForPages)
  if(petsArrayForPages.length === 16){
    pages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    ourFriendsItems.length = 3;
    console.log(ourFriendsItems);

  } else if(petsArrayForPages.length === 8){
    pages = [1,2,3,4,5,6,7,8];
    ourFriendsItems.length = 6;
    console.log(ourFriendsItems);

  } else if(petsArrayForPages.length === 6){
    pages = [1,2,3,4,5,6];
    ourFriendsItems.length = 8;
    console.log(ourFriendsItems);
  }
})()

console.log(pages);
console.log(petsArrayForPages);
console.log(ourFriendsItems);
function fillPetsItemContent(n) {
  ourFriendsItems.forEach((item, i) => {
    let ourFriendsName = item.querySelector('.our-friends-name');
    let ourFriendsImg = item.querySelector('.our-friends-img');
    ourFriendsName.textContent = `${petsArrayForPages[n - 1][i].name}`;
    ourFriendsImg.src = `${petsArrayForPages[n - 1][i].img}`;
    item.dataset.name = `${petsArrayForPages[n - 1][i].name}`;
  });
}
function nextPage() {
  let nowPage = buttonNow.textContent;
  nowPage = +nowPage + 1;
  if(nowPage === pages.length){
    buttonNext.setAttribute("disabled","disabled");
    buttonEnd.setAttribute("disabled","disabled");
  } else if(nowPage === 2){
    buttonPrev.removeAttribute('disabled');
    buttonStart.removeAttribute('disabled');
  }
  buttonNow.textContent = `${nowPage}`;
  fillPetsItemContent(nowPage);
}
function endPage(){
  let nowPage = pages.length;
  buttonNow.textContent = `${nowPage}`;
  fillPetsItemContent(nowPage);
  buttonNext.setAttribute("disabled","disabled");
  buttonEnd.setAttribute("disabled","disabled");
  buttonPrev.removeAttribute('disabled');
  buttonStart.removeAttribute('disabled');
}
function startPage() {
  let nowPage = pages[0];
  buttonNow.textContent = `${nowPage}`;
  fillPetsItemContent(nowPage);
  buttonPrev.setAttribute("disabled","disabled");
  buttonStart.setAttribute("disabled","disabled");
  if(buttonNext.hasAttribute("disabled") || buttonEnd.hasAttribute("disabled")){
    buttonNext.removeAttribute('disabled');
    buttonEnd.removeAttribute('disabled');
  }
}
function prevPage() {
  let nowPage = buttonNow.textContent;
  nowPage = +nowPage - 1;
  if(nowPage === 1){
    buttonPrev.setAttribute("disabled","disabled");
    buttonStart.setAttribute("disabled","disabled");
  } else if(nowPage === pages.length - 1){
    buttonNext.removeAttribute('disabled');
    buttonEnd.removeAttribute('disabled');
  }
  buttonNow.textContent = `${nowPage}`;
  fillPetsItemContent(nowPage);
}
buttonNext.addEventListener("click",nextPage);
buttonEnd.addEventListener("click",endPage);
buttonPrev.addEventListener("click",prevPage);
buttonStart.addEventListener("click",startPage);

window.addEventListener("DOMContentLoaded",fillPetsItemContent(1));
