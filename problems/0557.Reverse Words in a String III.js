/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var words = s.split(' ');


    words = words.map(function(word) {
    	return reverseItem(word);
    })

    return words.join(' ');
};

var reverseItem = function(s) {
	var chars = s.split('');
	chars.reverse();
	return chars.join('');
};




var str = "Let's take LeetCode contest"
console.log(reverseWords(str));

