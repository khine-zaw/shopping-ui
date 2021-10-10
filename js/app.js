let header = document.querySelector(".header");
let scroll = document.querySelector(".scroll")

let headerControl = new Waypoint({
    element: document.getElementById("feature"),
    handler: function(direction) {
        if(direction == "down"){
            header.classList.add("shadow")
            header.classList.add("animate__slideInDown")
        }else{
            header.classList.remove("shadow")
            header.classList.remove("animate__slideInDown")
        }
        
    },
    offset: '168%'
})

let control = new Waypoint({
    element: document.getElementById("feature"),
    handler: function(direction) {
        if(direction == "down"){
            scroll.style.display = "block"
            scroll.classList.add("animate__flip")
        }else{
           scroll.style.display ="none"
           scroll.classList.remove("animate__flip")
        }
        
    },
    offset: '75%'
})

ScrollReveal({
    origin : "top",
    distance : "30px",
    duration : 1500,
    reset: true
}).reveal(".content",{
    interval : 300
});