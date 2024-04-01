/*
const arr = [12,13,14,15]
const result = arr.filter((ele)=>ele%2===0)
console.log(result);

const great = [4,3,2,,1,5]
const r = great.filter((ele)=>ele>2)
console.log(r)

const a = [1,2,3,4,5]
const result1 = a.reduce((mut,cv)=>{
    return mut*i
},1)
console.log(result1);*/

const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function () {
    var data = request.response;
    var result = JSON.parse(data);
    console.log(result);



//1.  Get all the countries from Asia continent /region using Filter function
/*
    var res = result.filter((ele)=> ele.region==="Asia")
    var final = res.forEach((ele)=>console.log(ele.name.common))
*/

// 3.Print the following details name, capital, flag, using forEach function

/*
    var final = result.forEach((ele)=>console.log(ele.name ))
    var final1 = result.forEach((ele)=>console.log(ele.capital ))
    var final2 = result.forEach((ele)=>console.log(ele.flag ))
    

     var res1 = result.reduce((mu ,cv) => {

         return mu*i
     },1)
     console.log(result);*/

    // var res = result.filter((ele)=> ele.population > "20000000")
    // var final = res.forEach((ele)=>console.log(result))

    var res = result.filter((ele)=> ele.currencies ==="USD")
   // var final = res.forEach((ele)=>console.log(ele.name."United States dollar"))
    
}