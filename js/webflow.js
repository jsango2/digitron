
//elementi htmla
var ispisDoli = document.getElementById("ispis-doli");
var ispisGori = document.getElementById("ispis-gori");
var ukupniIzraz;
var zavrsenIzracun;
const Ctipka = document.getElementById("c-tipka");
const plusMinusTipka = document.getElementById("plus-minus-tipka");

const tipkaNazad = document.getElementById("tipka-nazad");
const tipkaTocka = document.getElementById("tipka-tocka");
const tipkaJednako = document.getElementById("tipka-jednako");
const operatorIspisGore = document.getElementById("operator-ispis");
const brojevi = document.getElementsByClassName('broj');


//klik na broj i ispis na ekranu
for (let k=0; k<brojevi.length; k++){
    brojevi[k].addEventListener('click', ispisBrojeva)
}
function ispisBrojeva(broj){
if(zavrsenIzracun){
    reset();
    zavrsenIzracun = false;
}
    if(ispisDoli.innerText === '0'){
    ispisDoli.innerText = '';}
    var odabrani = broj.target.innerText;
    ispisDoli.innerText += odabrani;
}
//klik na operator i odabir pa ispis na ekranu
const operator = document.getElementsByClassName('operator');
for (let k=0; k<operator.length; k++){
    operator[k].addEventListener('click', odabirOperatora)
}
function odabirOperatora(op){
    if(ispisDoli.innerText !== '0'){
    aktivniOperator = op.target.innerText;
    operatorIspisGore.innerText = aktivniOperator;
    ispisGori.innerText = ispisDoli.innerText;
    ispisDoli.innerText ='';}
}
// stisak znaka =   Zamjena X u * radi eval()
tipkaJednako.addEventListener('click', izracun)
function izracun(){
    if (aktivniOperator === 'X'){
        aktivniOperator = '*';
    }
    ukupniIzraz = ispisGori.innerText + aktivniOperator + ispisDoli.innerText;
    ispisDoli.innerText = eval(ukupniIzraz);
    ispisGori.innerText ='';
    operatorIspisGore.innerText ='';
    zavrsenIzracun = true;
}

//funkcija C tipke
Ctipka.addEventListener('click', reset)

function reset(){
    ispisDoli.innerText ='0';
    ispisGori.innerText ='';
    operatorIspisGore.innerText ='';
}

// funkcija tipke za nazad
tipkaNazad.addEventListener('click', brisiZadnjiBroj)

function brisiZadnjiBroj(){
    
    ispisDoli.innerText = ispisDoli.innerText.slice(0,-1);
    if(ispisDoli.innerText === ''){
        ispisDoli.innerText = '0';
    }
}


//decimalna točka

tipkaTocka.addEventListener('click', napisiTocku)

function napisiTocku(){
        if(!ispisDoli.innerText.includes('.')){
        ispisDoli.innerText += '.';
    }
}

