var x=5
if (x>2){
    console.log(x+"valuleis greater than two");
}else{
    console.log(x+"value leses than two")
}

var input = document.getElementById('input_id');

var button= document.getElementById('btn_id');

var text = document.getElementById('text_id');


button.onclick = function(){
    var value = parseInt(input.value);

    if(value>10){
        text.inerHTML = 'input value is greater'
    }
    else if(value<10){
        text.inerHTML
    }
    else if(value === 10){
        text.innerHTML
    }
}

var input1= document.querySelector('#input1_id');
var input2= document.querySelector('#input2_id');
var btn2= document.querySelector('#btn2_id');
var ans=document.querySelector('answer');

btn2.addEventListener("click",function(){
    var num1= parseint(input1.value) || 0;
      var num2= parseint(input1.value) || 0;

      ans.innerHTML="total"+(num1+num2)
})