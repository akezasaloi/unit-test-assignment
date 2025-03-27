const isValidEmail = require("./emailValidator")

test('akezasaloi@gmail.com' ,()=>{
    expect (isValidEmail('akezasaloi@gmail.com')).toBe(true);
});