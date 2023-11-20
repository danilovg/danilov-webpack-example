const obj1 = {
    hello: "hello"
}

const obj2 = {
    by: "by"
}

const objSpred = {...obj1, ...obj2};

const objApply = this.apply(obj1, obj2);

console.log(objSpred, objApply);

const goDog = () => {
    console.log("go dog");
}

goDog();

const array = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];

console.log(array.findLast(n => n.value % 2 === 1))
console.log(array.findLastIndex(n => n.value === 42))