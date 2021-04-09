const { Printer } = require("escpos");


const  impresora =  document.getElementById("Printer").value;
const server = document.getElementById("server").value
const text = document.getElementById("text").value;
const print = document.querySelector(state-on);

print.addEventListener('click', (e) =>{

    console.log(e.target);

    if(e.target.classList.contains(state-on)){
    
    axios.post(`${server}/print`, { "text": text })
      .then(function (response) {
        alert(response.data.status)
      })
      .catch(function (error) {
        alert(error)
      });
        };
    

    })