// We need to calculate the area of a given rectangle.
// The given program takes the width and length as input.
// Complete the area function, which takes the length and width as arguments, to calculate and return the area.
// Then call the function for the given inputs.

// Input Example
// 7
// 4

// Output Example
// 28

let width = parseInt(readLine(),10);
let length = parseInt(readLine(),10);

//Complete the function
function area(x,y){
    return x*y;
}

//call the function
console.log(area(length, width));