$(function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  elemekFormazasa1();
  esemenyKezeles1();
  esemenyKezeles2();
  esemenyKezeles3();
});


function elemekElerese1() {
  console.log("1. feladat");
  const SECTIONCIM = $('section h2').eq(0).text()
  console.log(SECTIONCIM)

}
function elemekElerese2() {
    console.log("2. feladat");
    const IDE = $('#ide')
    IDE.append(`<p>Jó reggelt!</p>`)
    console.log(IDE)
}
function elemekElerese3() {
    console.log("3. feladat");
    const IDE = $('.ide')
    IDE.append(`<p>Jó reggelt!</p>`)
    console.log(IDE)
}

function elemekElerese4(){
    console.log("4. feladat");
    const LISTA = $('.lista')
    let txt = "";
    txt += `<ul>`
    for (let index = 0; index < 5; index++) {
        txt += (`<li>${Math.floor(Math.random()*21)+10}</li>`)
    }
    txt += `</ul>`
    LISTA.append(txt);
    console.log(LISTA)
}

function elemekFormazasa1(){
    const LISTA = $('.lista')
    LISTA.addClass('formazott')
}

function esemenyKezeles1(){
    const LISTA = $('.lista')
    LISTA.on("click", function(){
        const FLISTA = $(".formazott.lista").html()
        const KATTINTASUTAN = $(".kattintasutan")
        KATTINTASUTAN.append(FLISTA)
        console.log('oasugfjsf')
    })
}

function esemenyKezeles2(){
    const FELADAT = $('.feladat')
    FELADAT.append(`<button>OK</button>`)
    const FELADATGOMB = $('.feladat button')
    FELADATGOMB.on('click', function(){
        FELADAT.append(`<img src="R.jpg" alt="">`)
        esemenyKezeles3()
    })
}

function esemenyKezeles3(){
    const FELADATKEP = $('.feladat img')
    FELADATKEP.on("mouseenter", function(){
        console.log('Nagyobb')
        const IMG = $('img').css('height', '700px', 'width', '700px')
    })
    FELADATKEP.on("mouseleave", function(){
        console.log('Eredeti')
        const IMG = $('img').css('height', 'unset', 'width', 'unset')
    })
}