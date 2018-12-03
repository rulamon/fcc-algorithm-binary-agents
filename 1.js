const binaryToAscii = (str)=>{
	let binaryArr = str.split("");
	let conversionArr = [128, 64, 32, 16, 8, 4, 2, 1];
	return binaryArr.map((val, index)=> val * conversionArr[index]).reduce((acc, val)=> acc + val);
}
function binaryAgent(str) {
	let arr = str.split(" ").map(x => binaryToAscii(x)).map(x => String.fromCharCode(x)).join("")
	return arr;
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
