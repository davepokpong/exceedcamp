app = document.getElementById("app");
const cache = []


setInterval(() => {
    fetch("http://158.108.182.0:4321/app/exceed_backend/exceed_backend/g12/view/1", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    .then(data => data.json())
    .then(datas => {
        datas.forEach(data => {
            console.log(datas)
        });
    });
}, 5000);