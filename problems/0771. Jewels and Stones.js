/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
	var total = 0;

	for (var i = 0; i < J.length; i++) {
		for(var j = 0; j < S.length; j++) {
			if (J[i] === S[j]) {
				total++;
			}
		}
	}  

	return total;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'));
console.log(numJewelsInStones('z', 'ZZ'));