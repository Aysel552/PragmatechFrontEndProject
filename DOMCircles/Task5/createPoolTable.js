function createPoolTable() {
    let container = document.querySelector('.container')
    let body = document.querySelector = ('body')
    let circle = document.createElement('div')
    

    circle.className = 'top'
    container.appendChild(circle)
    circle.style.width = '30px'
    circle.style.height = '30px'
    circle.style.backgroundColor = 'white'
    circle.style.borderRadius = '50%'
    circle.style.display = 'flex'
    circle.style.justifyContent = 'center'
    circle.style.alignItems = 'center'
    circle.style.position = 'absolute';

    let randomX = Math.random() * 1000;
    let randomY = Math.random() * 1000;
    circle.style.top = `${randomY}px`;
    circle.style.left = `${randomX}px`;
    document.querySelector('body').appendChild(circle);


    let circleOne = document.createElement('div')
    container.appendChild(circleOne)
    circleOne.className('topOne')
    circleOne.style.width = '30px'
    circleOne.style.height = '30px'
    circleOne.style.backgroundColor = 'black'
    circleOne.style.borderRadius = '50%'
    circleOne.style.display = 'flex'
    circleOne.style.justifyContent = 'center'
    circleOne.style.alignItems = 'center'
    circleOne.textContent = '1'
    circleOne.style.position = 'absolute';

    let randomA = Math.random() * 1000;
    let randomB = Math.random() * 1000;
    circleOne.style.top = `${randomB}px`;
    circleOne.style.left = `${randomA}px`;
    document.querySelector('body').appendChild(circleOne);




    
    


}


createPoolTable()

