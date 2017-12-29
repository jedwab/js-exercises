function getTriangleArea(a, h) {
	if ((a <= 0) || (h <= 0)) {
 		return('Nieprawidłowe dane');
 	}
 	return a*h/2;
 }
console.log(getTriangleArea(10, 6));
 
var triangleArea = getTriangleArea(10, 15);
console.log(triangleArea);
 
var triangleArea = getTriangleArea(6, 6);
console.log(triangleArea);
 
var triangleArea = getTriangleArea(11, 8);
console.log(triangleArea);
 
var triangleArea = getTriangleArea(0, 8);
console.log(triangleArea); 