let counter = document.getElementById("text");


let a = 0;
if (getCookie("counter") != "0") {
    a = Number(getCookie("counter"));
    console.count("7867")

}


for (let i = 1; i < 2; i++) {

    if (getCookie("p" + i) != "0") {
        let TP = document.getElementById("p" + i);
        TP.innerHTML = Number(getCookie("p" + i))
    }

}



function game() {

    document.cookie = "counter= " + a;

    for (let i = 1; i < 2; i++) {
        let TP = document.getElementById("p" + i);
        a += Number(TP.innerHTML);
        document.cookie = "p" + i + "=" + TP.innerHTML;

    }
    console.debug(444)

    counter.innerHTML = a / 100;




    requestAnimationFrame(game);
}
game()



function p1() {
    let P = document.getElementById("p1");
    let PB = document.getElementById("p1b");
    if (a / 1000 >= Number(P.innerHTML)) {
        a -= Number(P.innerHTML) * 1000;
        P.innerHTML = Number(P.innerHTML) + 1;
        PB.innerHTML = "+p1 (" + P.innerHTML + ")"

    }
}

function getCookie(cookiename) {
    const strCookie = document.cookie;
    const cookieList = strCookie.split('; ');

    for (let i = 0; i < cookieList.length; i++) {

        const arr = cookieList[i].split('=');

        if (arr[0].trim() === cookiename) {


            return arr[1];
        }
    }


    return "0";
}