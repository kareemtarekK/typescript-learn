// anonmous function
let add = function (num1:number,num2:number){
    return num1 + num2;
}
console.log(add(10,20));
// arrow function
let add2 = (n1 : number , n2 : number) :number => n1 + n2;
console.log(add2(15,15));
// type alias  اسم مسعار لنوع البيانات
type st = string;
let myName : st = "kareem";
myName = "osama";
console.log(myName);   // osama
type stAndNum = (string | number);
let all : stAndNum = "welcome";
all = 10;
console.log(all);   // 10
// advanced type alias
type buttons = {
    up: string,
    down : string,
    right : string,
    left : string
}
type last = buttons & {
    five : number
}
function getActions(btns: last){
    console.log(btns.right);
    console.log(btns.up);
    console.log(btns.left);
    console.log(btns.down);
    console.log(btns.five);
}
getActions({up: 'it is up',down : 'it is down' , right : 'it is right',left: 'it is left', five : 100});
// literal type to custom type
type nums = 0 | 1 | -1;
function Know(a:number,b:number): nums{
    if(a === b){
       return 0;
    } else if(a > b){
        return 1;
    } else{
        return -1;
    }
}
console.log(Know(15,15));   // 0
console.log(Know(15,5));    // 1
console.log(Know(15,30));   // -1
// let v : nums = 9  // error 
// tuple 
/*
tuple is a sort of array , has more features like know how many element in it 
,know position of each item and its inedx, can spesify datatype
*/
let tup : [string , number , boolean] = ["kareem" , 10 , true];
let [n , num , bool ] = tup;
console.log(n);
console.log(num);
console.log(bool);
tup.push("osama");
console.log(tup);
console.log(tup.length);
///////////
// void and never
/*
void is used with function that has not return a value but it can 
never is used with function that has never return not return absoultly
*/
function Msg(m : string) : void{
    console.log(m);
    return;
}
// console.log(Msg("hello my frined"));
// function  throwError(e : string) {
//     throw new Error(e);
//     // return "false";    allowunreachablecode = false
// }
// console.log(throwError("failed"));
// console.log('test');
// function infiniteLoop()  {
//    while(true){
//     console.log('done');
//    }
//     // return 0;          // allowunreachablecode = false
// }
// console.log(infiniteLoop());
// console.log('test');
// Enum => Enumrations
/*
enumration is a set of anemd constatnt that related to each other
based on numeric begginning in 0
you can assign it 
it has 3 types 
1- numeric
2- string
3- hetrogenous [number + string]
enum can refer to another enum
enum can refer to same enum
enum can use calculations
enum can use functions
*/
/*
const kids = 15;
const easy = 9;
const medium = 6;
const hard = 3;
you can do the same idea by better way using Enum
*/
// enum level {
//     kids = 15,
//     easy = 9,
//     medium = 6,
//     hard = 3
// }
let lvl : String = "easy";
// if(lvl === "easy"){
//     console.log(`the level is ${lvl} and the number of level is ${level.easy}`);
// }
function getNumber(){
    return 3;
}
enum help{
    five = 3
}
enum level {
    kids = help.five,
    easy = 9,
    medium = 9 - 3,
    hard = getNumber()
}
let lvl2 : string = "hard";
if(lvl2 === "hard"){
    console.log(`the level is ${lvl2} and number of level is ${level.hard}`);
}
// type assertions 
// sometimes compiler does not know all information you do
// in typescript after doing assertions compiler does not any checking about type
// let img = document.getElementById('img') as HTMLImageElement;   // way using as
// let img = <HTMLImageElement> document.getElementById('img');      // another way using <> operator
// console.log(img.src);

let statement : unknown = "welcome"; 
let statementNumber : number =( statement as string ).length;
console.log(statementNumber);

// let data : any = 100;
// console.log((<string> data).repeat(3)); // error at run time not compile
//////////////////////////
// union and intersection
/*
1- union type is used by | "or"
2- intersection type is used by & "and" => compine several type into one
*/
// union ......
let strnum : (string | number | boolean) = 1000;
// intersection ......
type Several = {
    first : string,
    second : number,
    third : boolean,
    fourth : null,
    fifth : object
}
type allTypes = Several & {
    seventh : "string"
}
type A = {
    ten : string
}
type types = Several & A ;
function Action(btns : types){
    console.log(btns.first);
    console.log(btns.second);
    console.log(btns.third);
    console.log(btns.fourth);
    console.log(btns.fifth);
    console.log(btns.ten);
}
Action({first : "hello" , second : 1000 , third : true , fourth : null , fifth : {a:"A"} , ten : "100"});