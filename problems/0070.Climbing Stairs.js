/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var a = 1,
    	b = 1,
    	temp = 0;

    while(n--) {
    	a = a + b;

    	temp = b;
    	b = a;
    	a = temp;
    }

    return a;
};


console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));
console.log(climbStairs(42));
console.log(climbStairs(43));
console.log(climbStairs(44));