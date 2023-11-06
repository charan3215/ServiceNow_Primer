class student
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    getName()
    {
        console.log(this.name);
    }
}
let s1=new student("sai charan",10);
let s2=new student("Mallesh",15);
let s3=new student("kumar",20)
let s4=new student("vinay",25)
let s5=new student("ram",30);

let arr=[s1.age,s2.age,s3.age,s4.age,s5.age];
const greatorAge=arr.filter((age)=>
{
    return age>=20;
})
console.log(greatorAge);
