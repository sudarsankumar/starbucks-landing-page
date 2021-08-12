function imgSlider(anything)
{
    document.querySelector('.starbucks').src = anything
}
function changeCircleColor(color)
{
    const circle = document.querySelector('.circle')
    const span = document.querySelector('span')
    const a = document.querySelector('.text-box a')
    circle.style.background = color
    span.style.color = color
    a.style.background = color
}
function toggleMenu()
{
    var menu = document.querySelector('.toggle')
    var navMenu = document.querySelector('.nav-menu')
    menu.classList.toggle('active')
    navMenu.classList.toggle('active')
}