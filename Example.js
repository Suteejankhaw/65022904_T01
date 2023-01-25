NameTxt =document.getElementById('NameTxt').value;
SurTxt =document.getElementById('SurTxt').value;
function NameChange(val){
    NameTxt =document.getElementById('NameTxt').value;
}
function SurChange(val){
    SurTxt =document.getElementById('SurTxt').value;
}
function FocusBox(NameTxt){
    NameTxt.style.background = "yellow";
}
function BlurBox(NameTxt){
    NameTxt.style.background = "white";
}
function selectBirthday() {
    var birthday = document.getElementById("birthday").value;
    console.log(birthday)
}
const selected = document.getElementById('menu');
const selectedTxt = document.getElementById('Selected');

menu.addEventListener('change',DataDisplay);

function DataDisplay(){
    Data = document.getElementById('Display');
    console.log(NameTxt)
    if(NameTxt == ""){
        Data.innerText= "InsertName";
    }else
        Data.innerText = NameTxt ;
}
