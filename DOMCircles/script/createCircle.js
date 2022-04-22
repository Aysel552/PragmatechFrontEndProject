

function createCircle(selector, radius, backgroundColor) {
    let main = document.querySelector('.main');
    let circle = document.createElement('div');
    main.className = `${selector}`;
    circle.className = 'circle'
    main.appendChild(circle)
    circle.style.width = `${radius * 2}px`
    circle.style.height = `${radius * 2}px`
    circle.style.backgroundColor = `${backgroundColor}`
    circle.style.borderRadius = '50%'
    circle.style.border = '3px solid yellow'
}





createCircle('glow', 200, 'green')