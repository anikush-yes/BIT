//logines reiksmes

console.log('---->')

let a = true;

console.log(a, '->', typeof a);


a = !a; //loginis not

console.log(a, '->', typeof a);

b = 5;
c = 'Labas';

d = 0;
e = '';

console.log(!!b);
console.log(!!c);
console.log(!!d);
console.log(!!e);


if (40 - 20 - 21) {
    console.log('nera nulio');

}
else {
    console.log('yra nulis');
}

// arba
// cconsole.log('true || true:', true || true);
console.log('true || false:', true || false);
console.log('false || true:', false || true);
console.log('false || false:', false || false);

// and

console.log('true && true:', true && true);
console.log('true && false:', true && false);
console.log('false && true:', false && true);
console.log('false && false:', false && false);

// true if between 3 and 7


const skaicius = 5;
 
if (skaicius >= 3 && skaicius <= 7) {
    console.log('true');
} else {
    console.log('false');
}
 
 
// 5 arba 7
 
if (skaicius == 5 || skaicius == 7) {
    console.log('true');
} else {
    console.log('false');
}


