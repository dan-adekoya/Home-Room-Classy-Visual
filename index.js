//OTHER
document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('ul').classList.toggle('open')
    document.querySelector('.container').classList.toggle('open')
    document.querySelector('body').classList.toggle('open')
})
document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('ul').classList.toggle('open')
    document.querySelector('.container').classList.toggle('open')
    document.querySelector('body').classList.toggle('open')
})


//GSAP
let tl =  gsap.timeline({defaults: {ease: "expo.out"}})

tl.from('.slider2 h1', 1, {
    y: '-100%',
    delay: .8
})
tl.to('.slider', 2, {
    y: '-100%',
    delay: 1
})
tl.to('.slider2', 2, {
    y: '-100%'
}, "-=1.7")
tl.from('.main', 1, {
    x: '-100%',
}, '-=1.4')
tl.from('.evv', .7, {
    y: "-100%",
})
tl.to('.bg', .2, {
    background: "black"
})
tl.from('.arrows, .arrows2', 1, {
    opacity: 0
})