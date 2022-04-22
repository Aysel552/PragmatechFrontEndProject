

function randomCirclePlacement() {

    let body = document.querySelector('body');
    let circle = document.createElement('circle');
    circle.className = 'main'
    body.appendChild(circle)
    circle.style.width = '50px'
    circle.style.height = '50px'
    circle.style.backgroundColor = 'green'
    circle.style.borderRadius = '50%'
    circle.style.position = 'absolute'

    let randomX = Math.random() * 1000;
    let randomY = Math.random() * 1000;
    circle.style.top = `${randomY}px`;
    circle.style.left = `${randomX}px`;
    document.querySelector('body').appendChild(circle);
}

randomCirclePlacement()