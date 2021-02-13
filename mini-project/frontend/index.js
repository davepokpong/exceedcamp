app = document.getElementById("app");
const cache2 = [{
    "slot": 1,
    "state": 1,
    "time": 0
},
{
    "slot": 2,
    "state": 0,
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
},
{
    "slot": 5,
    "state": 1,
    "time": "Sat, 13 Feb 2021 06:41:21 GMT"
}]

const cache = []
var link = document.createElement('index.css');

rec1 = document.getElementById("rec1");
rec2 = document.getElementById("rec2")

// fetch("https://exceed12.cpsk-club.xyz/", {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
// })
// .then(data => data.json())
// .then(data => console.log(data))

cache2.forEach(x =>{
    if(x.state == '0'){
        console.log(x.slot)
        // $('rec1').css('background-color','green')}
        
})
