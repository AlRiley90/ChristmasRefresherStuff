
function showMultiplicationTable(num){
    for(var i = 1; i<=10; i++){
        console.log(num + " * " + i + " = "+ num*i)
    }
}
showMultiplicationTable(5);

function isEvenOrOdd(){

    for(var i = 1; i<=10; i++){
    var randomNumber = Math.floor(Math.random() * (200 - 20 + 1) + 20);
        if(randomNumber % 2 === 0){
            console.log(randomNumber + " is even");
        }else if(randomNumber % 2 === 1){
            console.log(randomNumber + " is odd");
        }
    }
}

isEvenOrOdd();