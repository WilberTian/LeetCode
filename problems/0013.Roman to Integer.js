/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var mapper = {
    	'I': 1,
    	'V': 5,
    	'X': 10,
    	'L': 50,
    	'C': 100,
    	'D': 500,
    	'M': 1000
    },
    result = 0;

    for(var i = 0; i < s.length; i++) {
    	if ((i + 1) !== s.length) {
    		if (mapper[s[i]] >= mapper[s[i + 1]]) {
    			result += mapper[s[i]];
    		} else {
    			result -= mapper[s[i]];
    		}
    	} else {
    		result += mapper[s[i]];
    	}
    }

    return result;
};



console.log(romanToInt('DCXXI'));
console.log(romanToInt('MCMXCVI'));	// 1996