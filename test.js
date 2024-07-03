// Import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound  } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    
    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One euro should 547.75 yens", function() {
    const dollars = fromDollarToYen(3.5);

    const expected = 3.5 * 156.5; 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(expected); 
})

test("From Yen to Pounds, should: 3.045 pounds", function() {
    const pounds = fromYenToPound(3.5);

    const expected = 3.5 * 0.87; 
    
    // This is the comparison for the unit test
     expect(pounds).toBe(expected); 
})