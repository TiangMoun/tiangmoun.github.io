let but = 1;

document.getElementById('click').addEventListener('click', function () {
    event.stopPropagation();
    let a = document.getElementById("click")

    var styleA = document.querySelector('.a');
    var styleB = document.querySelector('.b');
    var styleSidenav = document.querySelector('.sidenav');


    if (but == 1) {
        a.innerHTML = ">>"
        but = 0;
        document.getElementById("dve").style.display = "none";
        styleA.style.width = '2%';
        styleB.style.width = '98%';
        styleSidenav.style.width = '2%';

    }
    else {
        but = 1
        a.innerHTML = "<<"
        document.getElementById("dve").style.display = "block";
        styleA.style.width = '10%';
        styleB.style.width = '90%';
        styleSidenav.style.width = '10%';
    }

}, true)

