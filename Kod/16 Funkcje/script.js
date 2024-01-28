function simpleFunction(){
    console.log('Wywołanie funkcji sumplfunction');
}

simpleFunction()

function reWriteIt(text){
    console.log('text')
}

reWriteIt('Jakiś text');

function suOfTwo(a,b){
    let sum = a +b;
    console.log(a + "+" + b + ' = ' + sum);

}

suOfTwo(2,1)

function functionWithReturn(){
    return  'Jakiś zwrócony tekst';
}


function showReturned(){
    console.log(functionWithReturn())
}

showReturned()
//
// function f(p1,p2){
//     console.log('Dwa parametry' + p1 + ''+p2);
// }
// function f(1,2)

