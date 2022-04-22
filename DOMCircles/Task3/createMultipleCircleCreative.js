    let container = document.querySelector('.container')
let circleFigure = document.createElement('div');
container.appendChild(circleFigure)


function createMultipleCircleCreative(_selector, _circleCount, _radius, _backgroundColor) {

    for (let i = 0; i < `${_circleCount}`; i++){
    let circle = document.createElement('div')
    circleFigure.className = `${_selector}`;
        circle.className = 'circle';
        circleFigure.appendChild(circle)
        circle.style.width = `${_radius * 2/i}px`
        circle.style.height = `${_radius * 2/i}px`
        circle.style.backgroundColor = `${_backgroundColor}`
        circle.style.borderRadius = '50%'
        circle.style.border = '3px solid white'
        circleFigure.style.display = 'flex'
        circleFigure.style.justifyContent = 'center'
        circleFigure.style.alignItems = 'flex-end'
        circle.style.position = 'absolute'
        circleFigure.style.position = 'relative'
}
    
}

createMultipleCircleCreative('box', 5, 200, 'lightblue')
