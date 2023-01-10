let latteral = document.querySelector('#latteral')
let btn = document.querySelector('#btn1')
//
 btn.addEventListener('click', function (e){
    evenement = ""
    for (const a of gridVierge.children) {
        a.style.backgroundColor = "white"
        
    }
   
     
    
})
let table = ["red","orange"," #E9D66B","yellow","#FF8C00", "#50C878", "green","	#8B0000","#9ACEEB","#7FFF00","	#E4D00A",
    "blue", "#ED9121", "#A67B5B", "#B5A642","#FF007F", "#FF2052","#8DB600","lightgray","black", "white"]


let evenement = ""

table.forEach(element => {
    
    let div1 = document.createElement('div')
    div1.setAttribute("style","background-color:"+element+";border:1px black solid")
    latteral.appendChild(div1)
    div1.addEventListener('click', function (e){
        evenement = e.target.style.backgroundColor
        

    })
});

let i = 1440
let gridVierge = document.querySelector('#grilleVierge')

for (let index = 0; index < i; index++) {
    //console.log("welcome");
    let Case = document.createElement('div')
    Case.style.width = "10px"
    Case.style.height = "25px"
    Case.style.backgroundColor = "white"
    gridVierge.appendChild(Case);
    Case.addEventListener('click', function (e){
        e.target.style.backgroundColor = evenement
    })


    
}



