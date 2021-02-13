app = document.getElementById("app");
const cache2 = [{
    "slot": 1,
    "state": 0,
    "time": "2021-02-13T08:32:53.448Z"
},
{
    "slot": 2,
    "state": 1,
    "time": "0"
},
{
    "slot": 3,
    "state": 0,
    "time": "2021-02-13T09:07:02.069Z"
},
{
    "slot": 4,
    "state": 0,
    "time": "0"
}]

const cache = [{}]
var link = document.createElement('index.css');

// var rec1 = document.getElementsByID("rec").s;
// var rec2 = document.getElementsByID("rec");

fetch("https://exceed12.cpsk-club.xyz/check", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
})
.then(data => data.json())
.then(data => {cache.push(data);console.log(data)})


setInterval(() => {
    cache.forEach(x =>{
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
    });

    cache.forEach(timeSlice =>{
        console.log(timeSlice.time.slice(11,19));
        var h = Number(timeSlice.time.slice(11,13));
        console.log(h);
        var m = Number(timeSlice.time.slice(14,16));
        console.log(m);
        var s = Number(timeSlice.time.slice(17,19));
        console.log(s);
    })
}, 2000);


