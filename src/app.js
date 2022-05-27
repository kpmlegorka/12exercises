import data from './data.js'
const container = document.querySelector('.slide-container')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
// if length is 1 hide buttons
if (data.length === 1) {
  nextBtn.style.display = 'none'
  prevBtn.style.display = 'none'
}
// if length is 2, add copies of slides
let people = [...data]
if (data.length === 2) {
  people = [...data, ...data]
}
container.innerHTML = people
  .map((person, slideIndex) => {
    const { img, name, job, text } = person
    let position = 'next'
    if (slideIndex === 0) {
      position = 'active'
    }
    if (slideIndex === people.length - 1) {
      position = 'last'
    }
    if (data.length <= 1) {
      position = 'active'
    }
    return `<article class="slide ${position}">
        <img src=${img} class="img" alt="${name}"/>
  <h4>${name}</h4>
  <p class="title">${job}</p>
  <p class="text">
   ${text}
  </p>
  
  
  
 </article>`
  })
  .join('')

const startSlider = (type) => {
  // get all three slides active,last next
  const active = document.querySelector('.active')
  const last = document.querySelector('.last')
  let next = active.nextElementSibling
  if (!next) {
    next = container.firstElementChild
  }
  active.classList.remove('active')
  last.classList.remove('last')
  next.classList.remove('next')

  if (type === 'prev') {
    active.classList.add('next')
    last.classList.add('active')
    next = last.previousElementSibling
    if (!next) {
      next = container.lastElementChild
    }
    next.classList.remove('next')
    next.classList.add('last')
    return
  }
  active.classList.add('last')
  last.classList.add('next')
  next.classList.add('active')
}
nextBtn.addEventListener('click', () => {
  startSlider()
})
prevBtn.addEventListener('click', () => {
  startSlider('prev')
})



let buttonRun30 = document.getElementById("button30")
let buttonRun60 = document.getElementById("button60")
let timerShow = document.getElementById("timer");
let timeMinut;
buttonRun30.addEventListener('click', function() {
  timeMinut = 30;
  play1();
	setTimeout(timerz, 3500);
})
buttonRun60.addEventListener('click', function() {
  timeMinut = 60;
	play1();
	setTimeout(timerz, 3500);
})
function play1() {
	document.getElementById("wave").innerHTML = "<audio src=\"/mp3/start.mp3\" autoplay></audio>"
	}
function play2() {
	document.getElementById("wave").innerHTML = "<audio src=\"/mp3/end.mp3\" autoplay></audio>"
	}
function timerz(){
  let circle = document.querySelector( '.circle_animation' ).style;
  circle.strokeDashoffset = 0;
  let finalOffset = 452.38934;
  let seconds = timeMinut;
  let step = finalOffset/seconds;
	let timer = setInterval(function () {
    let i = seconds - timeMinut + 1;
    if (timeMinut <= 0) {
        clearInterval(timer);
        play2();
        timerShow.innerHTML = "";
    } else {
        let strTimer = `${timeMinut}`;
        timerShow.innerHTML = strTimer;
        circle.strokeDashoffset = step * i;
    }
    --timeMinut;
  }, 1000);
}


