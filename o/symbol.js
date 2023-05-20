const firstNane = Symbol();
const lastName = Symbol();

// const Persion={};
// Persion[firstNane] ="andika"
// Persion[lastName] ="prasetyo"

// console.info(Persion);
// console.info(Persion[firstNane]);
// console.info(Persion[lastName]);

const Persion={};
Persion[Symbol.for("firstNane")] ="andika"
Persion[Symbol.for("lastName")] ="prasetyo"

console.info(Persion);
console.info(Persion[Symbol.for("firstNane")]);
console.info(Persion[Symbol.for("lastName")]);
