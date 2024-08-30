
function  abcd(val){

    console.log(val());
}

console.log(abcd(()=>{console.log("hiiii");}));

var a=[5,56675,89,89,8]
a.forEach((a)=>{console.log(a+1);})


function biscuiut(name){
    this.name=name,
    this.color="red",
    this.taste="sweet"
}

var twentytwenty= new biscuiut(2020);
var goodday= new biscuiut("gold");
console.log(twentytwenty);
delete goodday.taste
console.log(goodday);

var ans =(function (){
    var ivatteval= 156;

    return {
        getter: function (){
            return ivatteval;
        },
        setter: function(val){
            ivatteval= val;
        }
    }

})()
console.log(ans.getter());

var net ={
     name:()=>{
        console.log(this);
    }
    
    
    }
console.log(net.name());
let btn = document.getElementById("submit")
btn.addEventListener("click",function (){
    this.style.color="red";   
})