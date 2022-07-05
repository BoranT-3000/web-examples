
// while örneği 

// let testArr = [];
// let i = 0;
// while(i<10){
// 	testArr.push(i);
// 	i++;
// }
// console.log(testArr);


// for örneği

// var forArr = [];
// for(let i =0;i<10; i+=2){
// 	forArr.push(i**2);
// }
// console.log(forArr);

// forArr = [];
// for (let i=10;i>0;i-=2){
// 	forArr.push(i**2);
// }
// console.log(forArr);



function findTheCount(arr){
	let count = 0;
	let length = arr.length;
	if(length%2 == 0){
		for(let i = 0;i<length;i++)
		count+=arr[i];
	}else{
		count = length * arr[Math.round(arr.length -1)/2]; 	
	}
	return count;
}

let ourArr = [1,2,3,4,5,78];
console.log(findTheCount(ourArr));



function randomFraction(){
	return Math.floor(Math.random()* 100+1);
}

let randomArr = [];

for(var i =0;i<10;i++)
	randomArr.push(randomFraction());

console.log(randomArr);
console.log(findTheCount(randomArr));




function checkEqual(a,b) {
	return a === b ? true : false;
}
console.log(checkEqual(5,'5'));



function checkSign(num){
	return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(-54));


const boom = function() {
	return new Date();
}

const magic = () => {
	return new Date();
}

const shortMagic = () => new Date();

console.log(shortMagic())



const realNumberArray = [4,8,4.78,-78,-4,1,2.44,31.69,43,44,45,46];
const squareList = (arr) => {
	const squaredIntegers = arr.filter(num => Number.isInteger(num) 
	&& num> 0).map(x=>x*x);
	return squaredIntegers;
}
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


const sum =(function () {
	return function sum(...args){
		return args.reduce((a,b) => a+b,0);
	};
})();

console.log(sum(1,4,8,4,6,12));