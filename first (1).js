function factFunction(a) {
    var z = 1;
    for (var i = 1; i <= a; i++) {
        z = z * i;
    }
    return z;
}

var result1 = factFunction(6);
var result2 = factFunction(20);
console.log(result2);
