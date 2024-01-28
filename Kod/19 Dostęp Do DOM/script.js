window.onload = function () {
// Pojedyńczy element po ID
//    document.getElementById('box-one'.style.border = '3px solid red');


    // pojedyńczy element za pomocą selektora
    // document.querySelector('#box-one').style.border = '3px solid red';

    // document.querySelector('.boxes').style.border = '3px solid red';

    /*Wiele elemnetó po nawie klasy */

    // let arr= document.getElementsByClassName('boxes');
    //

    // Wiele elementów po nazwie znacznika
    let arr =document.getElementsByTagName('div');
//
//
//
//
//     for (let Element of arr) {
//         element.style.border = '3px solid red';
//     }
//
//

    let element = document.getElementById('box-two')
    element.style.border = '3px solid red';
    element.parentNode.style.border = '3px solid blue';






};