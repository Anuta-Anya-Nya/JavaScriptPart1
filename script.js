setTimeout(() => console.log('settimeout'), 1);
console.log('10');
console.log('12');
console.log('11');
setTimeout(() => console.log('settimeout2'), 0);
console.log('11');
console.log('11');
console.log('13');