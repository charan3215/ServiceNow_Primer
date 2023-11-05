class student
{
    constructor()
    {
        this.Name=String(prompt());
        this.Age=parseInt(prompt());
        this.Grade=String(prompt());
    }

    displayInfo=(Name,Age,Grade)=>
    {
        console.log(`Studet's name is ${this.Name},Age is ${this.Age} , Grade is ${this.Grade}`)

    }
}
let st=new student();
console.log(st.Name);
console.log(st.Age);
console.log(st.Grade);
st.displayInfo();

//write arrow function 
const sum=((a,b)=>{
    let s=a+b;
    console.log(s);
    
})
a=parseInt(prompt());
b=parseInt(prompt());

sum(a,b);

//print the location of string
let str="I am enjoying my training";
let s1 =str.split(" ");

console.log(s1.indexOf("my"));

console.log(str.indexOf("m"));
console.log(str.lastIndexOf("m"));

// extract complete string from index 0 to 4 from the string"I am enjoying my training"
let s=str.slice(0,4);
console.log(s);

replace
console.log(str.replace("training","journey"));

// print all charcters of string
for(let i=0;i<str.length;i++)
{
    console.log(str.charAt(i));
}

//store string="a,b,c" into an array
let std="a,b,c";
console.log(std);
console.log(std.split());

//remove white spaces
// var str1=" abc";
// console.log(str1);
// console.log(str1.trim());//removed white spaces here


//concat() function

var s3="virat";
var s2="kohli";
console.log(s3+" "+s2);//without using concat()
console.log(s3.concat(' ',s2));//with using concat()


