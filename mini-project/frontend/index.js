app = document.getElementById("app");
const cache = [{
    "slot": 1,
    "state": 0,
    "time": 0
},
{
    "slot": 2,
    "state": 0,
    "time": 0
},
{
    "slot": 3,
    "state": 0,
    "time": 0
},
{
    "slot": 4,
    "state": 0,
    "time": 0
},
{
    "slot": 5,
    "state": 0,
    "time": "Sat, 13 Feb 2021 06:41:21 GMT"
}]


fetch("http://158.108.182.14:50004/check", {
    method: "GET",
})
.then(data => data.json())
.then(datas => {
    datas.forEach(([key, value]) => {
        console.log(`${key} ${value}`)
    });
});



// data.forEach(cache => {
//     console.log(`${key} ${value}`)
// })
