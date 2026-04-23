var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('teksti_id');

button.onclick = function(){
    text.innerHTML = input.value;
}

var text="the best school in the world!";
var result = text.search("Digital School");
document.getElementById('result1').innerHTML= result;


var text="the best school in the world!";
var result = text.search(/Digital Schoo/);
document.getElementById('result2').innerHTML= result;


var text="the best school in the world!";
var result = text.search(/Digital School/,"Another school");
document.getElementById('result3').innerHTML= result;


var text ="abcdef";
var regex = new RegExp('abc');
document.getElementById("result4").innerHTML = regex.test(text);





var text = "my school is the best in the world";
var regex=/school/g;
document.getElementById("result5").innerHTML = text.match(regex);


var text="the best school in the world!";
var regex=/i/g;
document.getElementById('result6').innerHTML=text.match(regex);


var text="the best school in the world!";
var regex=/[0-9]/g
document.getElementById('result7').innerHTML=text.match(regex);


var text="the best school in the world!";
var regex=/(top|best|school)/g;
document.getElementById('result8').innerHTML=text.match(regex);



var text="the best school in the world!";
var regex=/\d/g;
document.getElementById('result9').innerHTML=text.match(regex);


var text="the best school in the world!";
var regex=/\s/g;
document.getElementById('result11').innerHTML=text.match(regex);

var text="the best school in the world!";
var regex=/e+/g;
document.getElementById('result12').innerHTML=text.match(regex)


var text="the best school in the world!";
var regex=/so*/g;
document.getElementById('result13').innerHTML=text.match(regex)



var text="the best school in the world!";
var regex=/0{3,5}/g;
document.getElementById('result16').innerHTML=text.match(regex)


var text="the best school in the world!";
var regex=/hi?/g;
document.getElementById('result14').innerHTML=text.match(regex)



var text="the best school in the world!";
var regex=/end$/g;
document.getElementById('result17').innerHTML=text.match(regex)



var text="the best school in the world!";
var regex=/^cat/g;
document.getElementById('result18').innerHTML=text.match(regex)