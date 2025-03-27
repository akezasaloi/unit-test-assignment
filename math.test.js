const { add, subtract, multiply, divide } = require("./math");

test("add 4+5 equals to 9",()=>{
    expect (add(4, 5)).toBe(9);
});

test("substract 24-12 equals to 12" ,()=>{
    expect (subtract(24, 12)).toBe(12);
});

test("multiply 10*10 equals 100",()=>{
    expect (multiply(10, 10)).toBe(100);
});

test("divide 9/0 equals 0" ,()=>{
    expect (divide(9, 0)).toBe(0);
});