// function showmessage(){
//     alert("Hello World")
// }
// showmessage();
function sum(number1,number2){
    return number1+number2
}
console.log(sum(24,5))
var arrowFunction = () => alert("hello")

arrowFunction();

var arrowFunction = name => alert('hello ${name}');

arrowFunction("enes");

function dsFunction(){
    var localVar="digital school";

    alert(localVar);
}

dsFunction()

var car={
    name:"toyota",
    year:"2027",
    color:"red",
    km:"00",
    startEngine: function(){
        alert("vrom");
    }
}

car.startEngine()

var computer = new Object();

computer.name = "lenovo";
computer.ram = "lenovo";
computer.cpu = "lenovo";
computer.gpu = "lenovo";
computer.type=function(){
    return this.name+','+this.CPU+','+this.Ram+','this.GPUL
};

alert(computer.GPU);
console.log(computer.GPU);

delete computer.GPU;
function Computer(name,cpu,ram,gpu){
    this.name=name;
    this.cpu=cou;
    this.Ram=ram;
    this.GPU=gpu;
}
varcomputer1=new Computer("mackebook")
varcomputer2=new Computer("mackebook")