
function myfunction() {    
    var inp1, inp2, inp3, inp4, inp5, inp6, inp7, inp8, inp9;
    inp1 = document.getElementById("inp1").value;
    inp2 = document.getElementById("inp2").value;
    inp3 = document.getElementById("inp3").value;
    inp4 = document.getElementById("inp4").value;
    inp5 = document.getElementById("inp5").value;
    inp6 = document.getElementById("inp6").value;
    inp7 = document.getElementById("inp7").value;
    inp8 = document.getElementById("inp8").value;
    inp9 = document.getElementById("inp9").value;  
    
    if (( inp1 == 'X') && (inp2 == 'X') && ( inp3 == 'X')) {
        document.getElementById('result2').style.display="block"
        document.getElementById('result2').innerHTML = "Winner Player X ";
        document.getElementById('main2').style.opacity=".2";
        document.getElementById("inp1").style.backgroundColor = "#03FFCD "
        document.getElementById("inp2").style.backgroundColor = "#03FFCD "
        document.getElementById("inp3").style.backgroundColor = "#03FFCD ";
        var box1=document.querySelectorAll('#inp4,#inp5,#inp6,#inp7,#inp8,#inp9');
        box1.forEach((element) => {
            element.disabled = true;
          });
        document.getElementById("print").style.display="none";               
    }
    else if ((inp1 == 'X') && (inp4 == 'X') && (inp7 == 'X')) {
        document.getElementById('result2').style.display="block"
        document.getElementById('result2').innerHTML = "Winner Player X ";
        document.getElementById('main2').style.opacity=".2";
        document.getElementById("inp1").style.backgroundColor = "#03FFCD "
        document.getElementById("inp4").style.backgroundColor = "#03FFCD "
        document.getElementById("inp7").style.backgroundColor = "#03FFCD "
        var box2=document.querySelectorAll('#inp2,#inp3,#inp5,#inp6,#inp8,#inp9');
        box2.forEach((element) => {
            element.disabled = true;
          });
        document.getElementById("print").style.display="none";
    }
    else if ((inp7 == 'X') && (inp8 == 'X') && ( inp9 == 'X')) {
        document.getElementById('result2').style.display="block"
        document.getElementById('result2').innerHTML = "Winner Player X ";
        document.getElementById('main2').style.opacity=".2";
        document.getElementById("inp7").style.backgroundColor = "#03FFCD "
        document.getElementById("inp8").style.backgroundColor = "#03FFCD "
        document.getElementById("inp9").style.backgroundColor = "#03FFCD "
        var box3=document.querySelectorAll('#inp1,#inp2,#inp3,#inp4,#inp5,#inp6');
        box3.forEach((element) => {
            element.disabled = true;
          });
        document.getElementById("print").style.display="none";       
    }
    else if ((inp3 == 'X') && (inp6 == 'X') && ( inp9 == 'X')) {
        document.getElementById('result2').style.display="block"
        document.getElementById('result2').innerHTML = "Winner Player X ";
        document.getElementById('main2').style.opacity=".2";
        document.getElementById("inp3").style.backgroundColor = "#03FFCD "
        document.getElementById("inp6").style.backgroundColor = "#03FFCD "
        document.getElementById("inp9").style.backgroundColor = "#03FFCD "
        var box4=document.querySelectorAll('#inp1,#inp2,#inp4,#inp5,#inp7,#inp8');
        box4.forEach((element) => {
            element.disabled = true;
          });
        document.getElementById("print").style.display="none";       
    }
    else if ((inp1 == 'X') && (inp5 == 'X') && ( inp9 == 'X')) {
        document.getElementById('result2').style.display="block"
        document.getElementById('result2').innerHTML = "Winner Player X ";
        document.getElementById('main2').style.opacity=".2";
        document.getElementById("inp1").style.backgroundColor = "#03FFCD "
        document.getElementById("inp5").style.backgroundColor = "#03FFCD "
        document.getElementById("inp9").style.backgroundColor = "#03FFCD "
        var box5=document.querySelectorAll('#inp2,#inp3,#inp4,#inp6,#inp7,#inp8');
        box5.forEach((element) => {
            element.disabled = true;
          });
        document.getElementById("print").style.display="none";      
    }
    else if ((inp3 == 'X') && (inp5 == 'X') && ( inp7 == 'X')) {
        document.getElementById('result2').style.display="block"
        document.getElementById('result2').innerHTML = "Winner Player X ";
        document.getElementById('main2').style.opacity=".2";
        document.getElementById("inp3").style.backgroundColor = "#03FFCD "
        document.getElementById("inp5").style.backgroundColor = "#03FFCD "
        document.getElementById("inp7").style.backgroundColor = "#03FFCD "
        var box6=document.querySelectorAll('#inp1,#inp2,#inp4,#inp6,#inp8,#inp9');
        box6.forEach((element) => {
            element.disabled = true;
          });
        document.getElementById("print").style.display="none";       
    }
    else if ((inp2 == 'X') && (inp5 == 'X') && (inp8 == 'X')) {
        document.getElementById('result2').style.display="block"
        document.getElementById('result2').innerHTML = "Winner Player X ";
        document.getElementById('main2').style.opacity=".2";
        document.getElementById("inp2").style.backgroundColor = "#03FFCD "
        document.getElementById("inp5").style.backgroundColor = "#03FFCD "
        document.getElementById("inp8").style.backgroundColor = "#03FFCD "
        var box7=document.querySelectorAll('#inp1,#inp3,#inp4,#inp6,#inp7,#inp9');
        box7.forEach((element) => {
            element.disabled = true;
          });
        document.getElementById("print").style.display="none";      
    }
    else if ((inp4 == 'X') && (inp5 == 'X') && (inp6 == 'X')) {
        document.getElementById('result2').style.display="block"
        document.getElementById('result2').innerHTML = "Winner Player X ";
        document.getElementById('main2').style.opacity=".2";
        document.getElementById("inp4").style.backgroundColor = "#03FFCD "
        document.getElementById("inp5").style.backgroundColor = "#03FFCD "
        document.getElementById("inp6").style.backgroundColor = "#03FFCD "
        var box8=document.querySelectorAll('#inp1,#inp2,#inp3,#inp7,#inp8,#inp9');
        box8.forEach((element) => {
            element.disabled = true;
          });
        document.getElementById("print").style.display="none";        
    }
 
    // Checking of Player O
    
    else if ((inp1 == 'O') && (inp2 == 'O') && (inp3 == 'O')) {
        document.getElementById('result2').style.display="block"
        document.getElementById('result2').innerHTML = "Winner Player O ";
        document.getElementById('main2').style.opacity=".2";
        document.getElementById("inp1").style.backgroundColor = "#03FFCD "
        document.getElementById("inp2").style.backgroundColor = "#03FFCD "
        document.getElementById("inp3").style.backgroundColor = "#03FFCD "
        var box9=document.querySelectorAll('#inp4,#inp5,#inp6,#inp7,#inp8,#inp9');
        box9.forEach((element) => {
            element.disabled = true;
          });
        document.getElementById("print").style.display="none";        
    }
    else if ((inp1 == 'O') && (inp4 == 'O') && (inp7 == 'O')) {
        document.getElementById('result2').style.display="block"
        document.getElementById('result2').innerHTML = "Winner Player O ";
        document.getElementById('main2').style.opacity=".2";
        document.getElementById("inp1").style.backgroundColor = "#03FFCD "
        document.getElementById("inp4").style.backgroundColor = "#03FFCD "
        document.getElementById("inp7").style.backgroundColor = "#03FFCD "
        var box10=document.querySelectorAll('#inp2,#inp3,#inp5,#inp6,#inp8,#inp9');
        box10.forEach((element) => {
            element.disabled = true;
          });
        document.getElementById("print").style.display="none";       
    }
    else if ((inp7 == 'O') && (inp8 == 'O') && (inp9 == 'O')) {
        document.getElementById('result2').style.display="block"
        document.getElementById('result2').innerHTML = "Winner Player O ";
        document.getElementById('main2').style.opacity=".2";
        document.getElementById("inp7").style.backgroundColor = "#03FFCD "
        document.getElementById("inp8").style.backgroundColor = "#03FFCD "
        document.getElementById("inp9").style.backgroundColor = "#03FFCD "
        var box11=document.querySelectorAll('#inp1,#inp2,#inp3,#inp4,#inp5,#inp6');
        box11.forEach((element) => {
            element.disabled = true;
          });
        document.getElementById("print").style.display="none";        
    }
    else if ((inp3 == 'O') && (inp6 == 'O') && ( inp9 == 'O')) {
        document.getElementById('result2').style.display="block"
        document.getElementById('result2').innerHTML = "Winner Player O ";
        document.getElementById('main2').style.opacity=".2";
        document.getElementById("inp3").style.backgroundColor = "#03FFCD "
        document.getElementById("inp6").style.backgroundColor = "#03FFCD "
        document.getElementById("inp9").style.backgroundColor = "#03FFCD "
        var box12=document.querySelectorAll('#inp1,#inp2,#inp4,#inp5,#inp7,#inp8');
        box12.forEach((element) => {
            element.disabled = true;
          });
        document.getElementById("print").style.display="none";        
    }
    else if (( inp1 == 'O') && (inp5 == 'O') && (inp9 == 'O')) {
        document.getElementById('result2').style.display="block"
        document.getElementById('result2').innerHTML = "Winner Player O ";
        document.getElementById('main2').style.opacity=".2";
        document.getElementById("inp1").style.backgroundColor = "#03FFCD "
        document.getElementById("inp5").style.backgroundColor = "#03FFCD "
        document.getElementById("inp9").style.backgroundColor = "#03FFCD "
        var box13=document.querySelectorAll('#inp2,#inp3,#inp4,#inp6,#inp7,#inp8');
        box13.forEach((element) => {
            element.disabled = true;
          });
        document.getElementById("print").style.display="none";      
    }
    else if (( inp3 == 'O') && (inp5 == 'O') && (inp7 == 'O')) {
        document.getElementById('result2').style.display="block"
        document.getElementById('result2').innerHTML = "Winner Player O ";
        document.getElementById('main2').style.opacity=".2";
        document.getElementById("inp3").style.backgroundColor = "#03FFCD "
        document.getElementById("inp5").style.backgroundColor = "#03FFCD "
        document.getElementById("inp7").style.backgroundColor = "#03FFCD "
        var box14=document.querySelectorAll('#inp1,#inp2,#inp4,#inp6,#inp8,#inp9');
        box14.forEach((element) => {
            element.disabled = true;
          });
        document.getElementById("print").style.display="none";        
    }
    else if ((inp2 == 'O') && (inp5 == 'O') && ( inp8 == 'O')) {
        document.getElementById('result2').style.display="block"
        document.getElementById('result2').innerHTML = "Winner Player O ";
        document.getElementById('main2').style.opacity=".2";
        document.getElementById("inp2").style.backgroundColor = "#03FFCD "
        document.getElementById("inp5").style.backgroundColor = "#03FFCD "
        document.getElementById("inp8").style.backgroundColor = "#03FFCD "
        var box15=document.querySelectorAll('#inp1,#inp3,#inp4,#inp6,#inp7,#inp9');
        box15.forEach((element) => {
            element.disabled = true;
          });
        document.getElementById("print").style.display="none";       
    }
    else if ((inp4 == 'O') && (inp5 == 'O') && (inp6 == 'O')) {
        document.getElementById('result2').style.display="block"
        document.getElementById('result2').innerHTML = "Winner Player O ";
        document.getElementById('main2').style.opacity=".2";
        document.getElementById("inp4").style.backgroundColor = "#03FFCD "
        document.getElementById("inp5").style.backgroundColor = "#03FFCD "
        document.getElementById("inp6").style.backgroundColor = "#03FFCD "
        var box16=document.querySelectorAll('#inp1,#inp2,#inp3,#inp7,#inp8,#inp9');
        box16.forEach((element) => {
            element.disabled = true;
          });
        document.getElementById("print").style.display="none";        
    }    

    else if ((inp1 == 'X' || inp1 == 'O') && (inp2 == 'X' ||inp2 == 'O') && (inp3 == 'X' || inp3 == 'O') &&
             (inp4 == 'X' || inp4 == 'O') && (inp5 == 'X' ||inp5 == 'O') && (inp6 == 'X' || inp6 == 'O') &&
             (inp7 == 'X' || inp7 == 'O') && (inp8 == 'X' ||inp8 == 'O') && (inp9 == 'X' || inp9 == 'O'))
              {
                document.getElementById('result2').style.display="block"
                document.getElementById('result2').innerHTML = "Match Tie ";
                document.getElementById('main2').style.opacity=".2";
                document.getElementById("print").style.display="none";  
    }
    else {
        if (flag == 1) {
            document.getElementById('print').innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print').innerHTML = "Player O Turn";
        }
    }
}
 
// reset game
function reset() {
    location.reload();  
}
 
flag = 1;
function myfunc1() {
    if (flag == 1) {
        document.getElementById("inp1").style.color = "red"
        document.getElementById("inp1").value= "X";
        document.getElementById("inp1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("inp1").style.color = "yellow"
        document.getElementById("inp1").value= "O";
        document.getElementById("inp1").disabled = true;
        flag = 1;
    }
}
 
function myfunc2() {
    if (flag == 1) {
        document.getElementById("inp2").style.color = "red"
        document.getElementById("inp2").value = "X";
        document.getElementById("inp2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("inp2").style.color = "yellow"
        document.getElementById("inp2").value = "O";
        document.getElementById("inp2").disabled = true;
        flag = 1;
    }
}
 
function myfunc3() {
    if (flag == 1) {
        document.getElementById("inp3").style.color = "red"
        document.getElementById("inp3").value = "X";
        document.getElementById("inp3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("inp3").style.color = "yellow"
        document.getElementById("inp3").value = "O";
        document.getElementById("inp3").disabled = true;
        flag = 1;
    }
}
 
function myfunc4() {
    if (flag == 1) {
        document.getElementById("inp4").style.color = "red"
        document.getElementById("inp4").value = "X";
        document.getElementById("inp4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("inp4").style.color = "yellow"
        document.getElementById("inp4").value = "O";
        document.getElementById("inp4").disabled = true;
        flag = 1;
    }
}
 
function myfunc5() {
    if (flag == 1) {
        document.getElementById("inp5").style.color = "red"
        document.getElementById("inp5").value = "X";
        document.getElementById("inp5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("inp5").style.color = "yellow"
        document.getElementById("inp5").value = "O";
        document.getElementById("inp5").disabled = true;
        flag = 1;
    }
}
 
function myfunc6() {
    if (flag == 1) {
        document.getElementById("inp6").style.color = "red"
        document.getElementById("inp6").value = "X";
        document.getElementById("inp6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("inp6").style.color = "yellow"
        document.getElementById("inp6").value = "O";
        document.getElementById("inp6").disabled = true;
        flag = 1;
    }
}
 
function myfunc7() {
    if (flag == 1) {
        document.getElementById("inp7").style.color = "red"
        document.getElementById("inp7").value = "X";
        document.getElementById("inp7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("inp7").style.color = "yellow"
        document.getElementById("inp7").value = "O";
        document.getElementById("inp7").disabled = true;
        flag = 1;
    }
}
 
function myfunc8() {
    if (flag == 1) {
        document.getElementById("inp8").style.color = "red"
        document.getElementById("inp8").value = "X";
        document.getElementById("inp8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("inp8").style.color = "yellow"
        document.getElementById("inp8").value = "O";
        document.getElementById("inp8").disabled = true;
        flag = 1;
    }
}
 
function myfunc9() {
    if (flag == 1) {
        document.getElementById("inp9").style.color = "red"
        document.getElementById("inp9").value = "X";
        document.getElementById("inp9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("inp9").style.color = "yellow"
        document.getElementById("inp9").value = "O";
        document.getElementById("inp9").disabled = true;
        flag = 1;
    }
}