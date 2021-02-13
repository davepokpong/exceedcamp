app = document.getElementById("app");
const cache = []


setInterval(() => {
    fetch("158.108.182.14:50004/check")
    .then(data => data.json())
    .then(datas => {
        datas.forEach(data => {
            console.log(datas)
        });
    });
}, 5000);