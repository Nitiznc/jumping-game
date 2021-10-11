score = 0;
document.onkeydown = function (e) {
    console.log("key:", e.keyCode);
    if (e.keyCode == 38) {
        boy = document.querySelector('.boy');
        boy.classList.add('animatedboy');
        setTimeout(() => {
            console.log("hello")
            boy.classList.remove('animatedboy');
        }, 500);
    }
    if (e.keyCode == 39) {
        boy = document.querySelector('.boy');
        boyX = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
        boy.style.left = boyX + 200 + "px";
    }
    if (e.keyCode == 37) {
        boy = document.querySelector('.boy');
        boyX = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
        boy.style.left = (boyX - 112) + "px";
    }
}

setInterval(() => {
    boy = document.querySelector('.boy');
    car = document.querySelector('.car');
    gameover = document.querySelector('.gameover');

    bx = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
    by = parseInt(window.getComputedStyle(boy, null).getPropertyValue('top'));

    cx = parseInt(window.getComputedStyle(car, null).getPropertyValue('left'));
    cy = parseInt(window.getComputedStyle(car, null).getPropertyValue('top'));

    offsetX = Math.abs(bx - cx);
    offsetY = Math.abs(by - cy);
    if (offsetX < 113 && offsetY < 55) {
        gameover.style.visibility = 'visible';
        car.classList.remove('animatedcar')
    }
    else if (offsetX < 140 && cross) {
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            animationdur = parseFloat(window.getComputedStyle(car, null).getPropertyValue('animation-duration'));
            newanimationdur = animationdur - 0.01;
            car.style.animationDuration = newanimationdur + 's';
        }, 2000);
    }
}, 100);


