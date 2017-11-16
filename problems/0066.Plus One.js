/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	var carry = 1,
		len = digits.length,
		temp,
		i = 0;

	while(i < len) {
		while((len - 1 - i) >= 0) {
			temp = digits[len - 1 - i] + carry;
			carry = parseInt(temp / 10);
			digits[len - 1 - i] = temp % 10;

			if(carry === 0) {
				i = len;
			}

			i++;
		}
	}  

	if(carry === 0) {
		return digits;
	}

	digits.unshift(carry);

	return digits;
};


console.log(plusOne([1, 2]));
console.log(plusOne([1]));
console.log(plusOne([9]));

console.log(plusOne([9, 9]));