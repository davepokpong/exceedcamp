app = document.getElementById("app");
const cache2 = [{
    "slot": 1,
    "state": 0,
    "time": 0
},
{
    "slot": 2,
    "state": 1,
    "time": 0
},
{
    "slot": 3,
    "state": 1,
    "time": 0
},
{
    "slot": 4,
    "state": 0,
    "time": 0
}]

const cache = []
var link = document.createElement('index.css');

// var rec1 = document.getElementsByID("rec").s;
// var rec2 = document.getElementsByID("rec");

fetch("https://exceed12.cpsk-club.xyz", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
})
.then(data => data.json())
.then(data => console.log(data))

cache2.forEach(x =>{
    if(x.state == '1'){
        console.log(x.slot);
        // $('rec1').css('background-color','green')}
        document.getElementById(x.slot).style.backgroundColor="#EE4A52"
    }    
    if(x.state == '0'){
        console.log(x.slot);
        // $('rec1').css('background-color','green')}
        document.getElementById(x.slot).style.backgroundColor="#57C9AE"
    }
})
