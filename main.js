const modal = document.querySelector('.modal')
const modalBtn = document.querySelector('.head__btn')
const closeBtn = document.querySelector('.modal__close')
 
console.log(modal);
 console.log(modalBtn);
 console.log(closeBtn);

 modalBtn.addEventListener('click' , () => {
    modal.style.display = 'flex'
})
closeBtn.addEventListener('click' , () => {
    modal.style.display = 'none'
})

// slier
//sliddes
//dots

const sloderBlock = document.querySelector('.slider')
const slodes = document.querySelectorAll('.slides')
const dots = document.querySelectorAll('.dot')
let currentsSlide = 1
console.log(dots);

sloderBlock.addEventListener('click', (e) =>{
    slodes[currentsSlide].classList.remove('slides-active')
    dots[currentsSlide].classList.remove('dot-active')

    if (e.target.classList.contains('dot')) {
        dots.forEach((dot, index) => {
            if (e.target === dot) {
                currentsSlide = index
            }
        })
    }
    slodes[currentsSlide].classList.add('slides-active')
    dots[currentsSlide].classList.add('dot-active')
})
