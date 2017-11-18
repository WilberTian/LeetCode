/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var result = [],
    	carry = 0,
    	temp = 0;

 	var aLen = a.length - 1,
 		bLen = b.length - 1;

 	while(aLen >= 0 || bLen >= 0) {
 		if(aLen < 0) {
 			result.unshift((parseInt(b[bLen]) + carry) % 2);
 			carry = parseInt((parseInt(b[bLen]) + carry) / 2);
 		} else if(bLen < 0) {
 			result.unshift((parseInt(a[aLen]) + carry) % 2);
 			carry = parseInt((parseInt(a[aLen]) + carry) / 2);
 		} else {
 			result.unshift((parseInt(a[aLen]) + parseInt(b[bLen]) + carry) % 2);
 			carry = parseInt((parseInt(a[aLen]) + parseInt(b[bLen]) + carry) / 2);
 		}

 		aLen--;
 		bLen--;
 	}

 	if(carry === 1) {
 		result.unshift(carry);
 	}

 	return result.join('');
};


console.log(addBinary('11', '1'));