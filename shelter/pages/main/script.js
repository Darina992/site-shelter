const donationLink = document.querySelector(".donation-link");
const body = document.querySelector('body');
const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger-menu');
const logo = document.querySelector('.logo');
const blackout = document.querySelector('.blackout');
const popup = document.querySelector('.pop-up');
const ourFriendsConteiner = document.querySelector('.our-friends-conteiner');
const sliderButtonPrev = document.querySelector('.button-prev');
const sliderButtonNext = document.querySelector('.button-next');

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
//prevent donation link
donationLink.addEventListener("click",function (event) {
  event.preventDefault();
})

//burger menu open
body.addEventListener("click",function (event) {
  if(event.target.closest(".burger-menu")  || event.target.closest("main") && header.classList.contains('open')
    || header.classList.contains('open') && event.target.closest("li")){
    if(header.classList.contains('open')){
      header.classList.add("close");
      header.classList.remove("open");
      blackout.classList.remove("blackout-show");
      document.body.style.overflow = "";

    } else{
      header.classList.remove("close");
      header.classList.add("open");
      blackout.classList.add("blackout-show");
      document.body.style.overflow = "hidden";
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


//slider
let sliderPets = [];
let nextPets = [];
function findInitialPets(){
  const ourFriendsItems = Array.from(document.querySelectorAll('.our-friends-item'));
  console.log(ourFriendsItems);
  if(window.innerWidth < 1280 && window.innerWidth >= 768){
    console.log(document.querySelector('.our-friends-item:last-child'));
    document.querySelector('.our-friends-item:last-child').remove();
    ourFriendsItems.pop();
  } else if (window.innerWidth < 768){
    ourFriendsItems[0].remove();
    ourFriendsItems[2].remove();
    ourFriendsItems.pop();
    ourFriendsItems.shift();
    
  }
  console.log(ourFriendsItems);
  ourFriendsItems.forEach((item, i) => {
    let ourFriendsName = item.querySelector('.our-friends-name');
    console.log(ourFriendsName.textContent);
    for(let i = 0; i < 8; i++){
      if(pets[i].name === ourFriendsName.textContent){
        sliderPets.push(i)
      }
    }
  });
  console.log(sliderPets);
}
function createElements(str){
  let divConteiner = document.createElement('div');
  divConteiner.id = `${str}-conteiner`;
  divConteiner.classList.add('our-friends-items');
  for (let i = 0; i < sliderPets.length; i++) {
    let div = document.createElement('div');
    div.classList.add('our-friends-item');
    let img = document.createElement('img');
    let p = document.createElement('p');
    p.classList.add('our-friends-name');
    let button = document.createElement('button');
    button.classList.add('our-friends-learn');
    button.textContent = "Learn more";
    div.append(img,p,button);
    divConteiner.append(div);
  }
  if(str === "left"){
    document.querySelector('.our-friends-conteiner').prepend(divConteiner);
  } else {
    document.querySelector('.our-friends-conteiner').append(divConteiner);
  }

}
function createRightLeftElements() {
  if(!document.querySelector('#right-conteiner')){
    createElements('right');
  }
  if (!document.querySelector('#left-conteiner')) {
    createElements('left');
  }
}
findInitialPets();
createRightLeftElements();

let leftElements = document.querySelector('#left-conteiner');
let rightElements = document.querySelector('#right-conteiner');

const moveLeft = () => {
  fillnextElements('left');
  ourFriendsConteiner.classList.add("transition-left");
  sliderButtonPrev.removeEventListener("click", moveLeft);
  sliderButtonNext.removeEventListener("click", moveRight);
};

const moveRight = () => {
  fillnextElements('right');
  ourFriendsConteiner.classList.add("transition-right");
  sliderButtonPrev.removeEventListener("click", moveLeft);
  sliderButtonNext.removeEventListener("click", moveRight);
};

sliderButtonPrev.addEventListener("click", moveLeft);
sliderButtonNext.addEventListener("click", moveRight);

ourFriendsConteiner.addEventListener("animationend", (animationEvent) => {
  let changedItem;
  if (animationEvent.animationName === "move-left") {
    ourFriendsConteiner.classList.remove("transition-left");
    changedItem = sliderButtonPrev;
    document.querySelector("#active-conteiner").innerHTML = leftElements.innerHTML;
  } else {
    ourFriendsConteiner.classList.remove("transition-right");
    changedItem = sliderButtonNext;
    document.querySelector("#active-conteiner").innerHTML = rightElements.innerHTML;
  }

  changedItem.innerHTML = "";

  let ourFriendsItems = Array.from(document.querySelectorAll('#active-conteiner .our-friends-item'));
  ourFriendsItems.forEach((item, i) => {
    let ourFriendsName = item.querySelector('.our-friends-name');
    console.log(ourFriendsName.textContent);
    for(let i = 0; i < 8; i++){
      if(pets[i].name === ourFriendsName.textContent){
        sliderPets.push(i)
      }
    }
  });
  console.log(sliderPets);

  sliderButtonPrev.addEventListener("click", moveLeft);
  sliderButtonNext.addEventListener("click", moveRight);
})

function randomInteger(min, max) {
 let rand = min + Math.random() * (max - min);
 return Math.round(rand);
 }
function checkNumber(x){
   for (let i = 0; i < sliderPets.length; i++) {
     if(x === sliderPets[i]){
       return false
     }
   }
   for (let i = 0; i < nextPets.length; i++) {
     if(x === nextPets[i]){
       return false
     }
   }
   return true
 }
function fillnextElements(str) {
   while(nextPets.length !== sliderPets.length){
     let x = randomInteger(0,7);
     console.log(x);
     if(checkNumber(x)){
       nextPets.push(x)
     }
   }
   console.log(sliderPets);
   console.log(nextPets);

   Array.from(document.querySelectorAll(`#${str}-conteiner .our-friends-item`)).forEach((item, i) => {
     let ourFriendsName = item.querySelector('.our-friends-name');
     let ourFriendsImg = item.querySelector('.our-friends-item img');
     item.dataset.name = `${pets[nextPets[i]].name}`;
     ourFriendsName.textContent = `${pets[nextPets[i]].name}`;
     ourFriendsImg.src = `${pets[nextPets[i]].img}`;
     ourFriendsImg.alt = `${pets[nextPets[i]].name}`;
   });
   nextPets = [];
   sliderPets = [];
 }
