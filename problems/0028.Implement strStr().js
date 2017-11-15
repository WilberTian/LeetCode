/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length > haystack.length) {
    	return -1;
    }

    if(haystack === needle) {
    	return 0;
    }

    var found = -1;
    for(var i = 0; i < (haystack.length - needle.length + 1); i++) {
    	if(haystack.substr(i, needle.length) === needle) {
    		return i;
    	}
    }

    return found;
};




console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
console.log(strStr('hello', 'lo'));