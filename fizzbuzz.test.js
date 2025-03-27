const fizzBuzz = require("./fizzbuzz")

test('Multiples of 3 and 5' ,()=>{
    expect (fizzBuzz(15));
});

test('Multiples of 3' ,()=>{
    expect (fizzBuzz(6));
});

test('Multiples of 5' ,()=>{
    expect (fizzBuzz(25));
});
