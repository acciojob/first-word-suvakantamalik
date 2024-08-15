function firstWord(s) {
  // your code here
	let firstWordAns = "";
	let i=0;
	s = s.trim();
	while (i < s.length) {
		let char = s[i];
		if(char === " "){
			return firstWordAns;
		}
		else{
			firstWordAns = `${firstWordAns}${char}`;
			i++;
		}
	}
	return firstWordAns;
}
// Do not change the code below

const s = prompt("Enter String:");


alert(firstWord(s));
