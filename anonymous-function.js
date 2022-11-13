let u = { a:1, b:2 };
let v = { a:3, b:4 };

(function (x,y) { // “begin local block”
    let tempA = x.a;
    let tempB = x.b; // local variables x.a=y.a; x.b=y.b;
    y.a = tempA; // copy x.a to y.a
    y.b = tempB // copy x.b to y.b
}) (u,v);

console.dir(u);
console.dir(v);
// Side effects on u,v because objects are passed by reference
