// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase());

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var words=sentence.split(" ");
var newSentence="";
for(let i=0;i<words.length;i++){
	let part1=words[i].slice(0,1);
	let part2=words[i].slice(1);
	part1=part1.toUpperCase();
	words[i]=part1+part2;
	newSentence=newSentence+words[i];
	if(i!==(words.length-1)){
		newSentence=newSentence+" ";
	}
}
console.log(newSentence);

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
var num= money.replace(/[^0-9]/ig,"");

console.log(num);