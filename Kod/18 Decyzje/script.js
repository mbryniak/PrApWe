let names = ['Adam', 'Jan', 'Marek'];

for (let name of names) {
    console.log(name);
}


let liczba = 5;
console.log('liczba to ' + liczba);

function CzyParzysta() {
    if (liczba % 2 === 0) {
        console.log('liczba' + liczba + ' jest parzysta');
    } else {
        console.log('liczba ' + liczba + ' jest nieparzysta')
    }
};

CzyParzysta(liczba);


let i;
function CzyParzystaWZakresie() {

    for (i = 3; i < 100; i += 3) {
        console.log(i);
    }
}

CzyParzystaWZakresie(i);

