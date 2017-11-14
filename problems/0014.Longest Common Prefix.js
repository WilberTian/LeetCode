/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) {
    	return '';
    }

    var result = [],
    	maxLen = strs[0].length,
    	stop = false;

    
	for(var j = 0; j < maxLen; j++) {
		if (stop) break;

		result[j] = strs[0][j];

		for(var i = 1; i < strs.length; i++) {
			if(strs[i].length <= j || strs[i][j] !== result[j]) {
				result.pop();
				stop = true;
				break;
			}
		}
	}

	return result.join('');
};



console.log(longestCommonPrefix(['aca', 'cba']));
console.log(longestCommonPrefix(['asdf', 'as', '']));
console.log(longestCommonPrefix(['aaa', 'aa', 'aaa']));