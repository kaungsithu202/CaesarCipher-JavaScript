// let cipher = function (plainText, key) {
// 	let pT = plainText.charCodeAt();
// 	let k = pT + key;
// 	let result = String.fromCharCode(k);
// 	return result;
// };

// let finalValue = cipher("H", 1);
// console.log(finalValue);

// let code = (("H".charCodeAt(0) - 65 + 1) % 26) + 65;
// console.log(code);

const caesarCipher = (string, key) => {
	let result = "",
		code;
	for (let i = 0; i < string.length; i++) {
		string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90;
		//Capital Letter 65
		code = ((string.charCodeAt(i) - 65 + key) % 26) + 65;
		result += String.fromCharCode(code);
	}
	return result;
};
console.log(caesarCipher("HELLO", 1));
console.log(caesarCipher("HELLO", 2));
console.log(caesarCipher("HELLO", 13));
