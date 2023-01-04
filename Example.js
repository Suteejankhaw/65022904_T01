let randNum =Math.floor(Math.random()*101);
total = 0;
function GN(){
    const Guess_Number = document.getElementById('G_N').value;
    if (Guess_Number == randNum){
        alert("ถูกต้อง ค่าที่ถูกต้องคือ : "+ randNum +"คุณทายไปทั้งหมด :"+(total+1)+" ครั้ง")
    }
    else if(Guess_Number > randNum){
        alert("มากกว่า")
    }
    else if(Guess_Number < randNum){
        alert("น้อยกว่า")
    }else{
        None ;
    }
    total += 1;
}