// Silence specific injected logs (development only)
(function() {
    const origLog = console.log;
    console.log = function(...args) {
        try {
            if (args.length && typeof args[0] === 'string') {
                const s = args[0];
                if (s.includes('Initialized driver at:') || s.includes('chextloader') || s.includes('dc.services.visualstudio.com')) {
                    return; // drop the message
                }
            }
        } catch (e) { /* ignore */ }
        origLog.apply(console, args);
    };
})();


// let myAge = 24
// let humanDogRatio = 7 

// let myDog = myAge+humanDogRatio
// console.log(myDog)

// function myLogger(){
//     console.log(43)
// }

// myLogger()

//  function increment(){
//     console.log("The button was clicked!")
//  }

// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// let lap1 = 32
// let lap2 = 32
// let lap3 = 36

// function LogLapTime(){
//     let totalTime = lap1+lap2+lap3
//     console.log(totalTime)
// }

// LogLapTime()

// function that increments     

// let lapsCompleted = 0

// function incrementlab(){
//     lapsCompleted = lapsCompleted +1 
// }

// incrementlab()
// incrementlab()
// incrementlab()

// console.log(lapsCompleted)

//camel case
// let countEL = document.getElementById('count-el')

// let count = 0
// function increment(){
//     console.log("Clicked")
//     count +=1
//     countEL.innerText = count
// }


// let saveEL = document.getElementById('save-el')

// let count =0 
//  function increment(){
//     count +=1
//     document.getElementById('count-el').textContent = count
//  }



// function save(){
//     let countStr = count + "-"
//     saveEL.textContent += countStr
//     document.getElementById('count-el').textContent = 0 
//     count = 0
    

// }  
// save()

// let username = "per"
// console.log(username)

// let message = "you have three new notifications"

// let messageTOuser = message+ ","+ username + "!"

// console.log(message+ "," + username + "! ") 
//+ helps to concanate the String

// console.log(messageTOuser)

// let name = "awaz"
// let greeting = "Hi my name is"

// let mygreeting = greeting + " " +name 

// console.log(mygreeting)

// console.log(4+5)   //9
// console.log("2" + "4")  //24
// console.log("5" + 1) //51
// console.log(100+ "100") //100100

// \ escape character-- it tells its a part of the String

// let wish = "I'd love to see the show \"the lion king\"."
// console.log(wish)
  
//render a welcome message

// let welcomeEL = document.getElementById("welcome-el")

// let name = "Awaz"
// let greeting = "Welcome back"

// welcomeEL.innerText = greeting + " " + name +  " " +"Bhujel"

//  document.getElementById("count-el").innerText = 5
// temporarily ignore specific console messages
// let count = 0
// console.log(count)
// let myAge = 35

// console.log(myAge)

// let firstname = 'awaz'
// let lastname = 'bhujel'

// let greeting = 'hi There'

// // // let fullname = firstname + " " + lastname
// // function greetlinda(){
// //     console.log(greeting + ", "+ firstname + "!")
// // }
// // greetlinda()

// let mypoints = 3

// function add3points(){
//     mypoints +=3
// }

// function removepoints(){
//     mypoints -=1
// }

// add3points()
// add3points()
// add3points()

// console.log(mypoints)

// removepoints()
// removepoints()
// console.log(mypoints)

// console.log("2"+2)  //22
// console.log(11+7) //18
// console.log(6+"5") //65
// console.log("my points:" + 5+9) //my points:59
// console.log(2+2) //4
// console.log("11"+"14") //1114

// function purchase(){
//     document.getElementById("error").textContent = "Something went Wrong, Please try again"
// }

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1 
document.getElementById("num2-el").textContent = num2 

let sumEL = document.getElementById("sum-el")

function add(){
    let result = num1 + num2
    sumEL.textContent = "Sum:" + result
}

function sub(){
    let result = num1 - num2
    sumEL.textContent = "Subtract:" + result
}

function mul(){
    let result = num1 * num2
    sumEL.textContent = "Multiply:" + result
}


function divide(){
    let result = num1 / num2
    sumEL.textContent = "Divide:" + result
}

console.log("Js file updated")























// favouriteMovieGenre("Motivation");

// favoriteFruit("space");

// favouriteMode("dark");

// favouriteEdgeStyle("sharp");




// function setProp(prop, value) {
//     document.documentElement.style.setProperty(prop, value)
// }

// function favouriteEdgeStyle(style) {
//     setProp("--image", "var(--" + style + ")");
// }

// function favouriteMovieGenre(font) {
//     if (font) {
//         setProp("--font", "var(--" + font + ")");    
//     }
// }

// function favouriteMode(mode) {
//     if (mode === "light" || !mode) {
//         setProp('--background', "var(--light)");
//         setProp('--text', "var(--dark)");
//     } else if (mode === "dark") {
//         setProp('--background', "var(--dark)");
//         setProp('--text', "var(--light)");
//     }
// }

// function favouriteFruit(theme) {
//     if (theme === "pastel") {
//         setProp('--light', "#f2f6c3")
//         setProp('--dark', "#68c4af")
//     } else if (theme === "muted") {
//         setProp('--light', "#4c5b64")
//         setProp('--dark', "#45241c")
//     } else if (theme === "love") {
//         setProp('--light', "#f06836")
//         setProp('--dark', "#ba0001")
//     } else if (theme === "sky") {
//         setProp('--light', "#99ccff")
//         setProp('--dark', "#3366ff")
//     } else if (theme === "forrest") {
//         setProp('--light', "#91B247")
//         setProp('--dark', "#597C2B")
//     }  else if (theme === "shiny") {
//         setProp('--light', "#2e9afe")
//         setProp('--dark', "#02197c")
//     } else if (theme === "banana") {
//         setProp('--light', "#fbec5d")
//         setProp('--dark', "#6b3e26")
//     } else if (theme === "watermelon") {
//         setProp('--light', "#75b855")
//         setProp('--dark', "#ad3838")
//     } else if (theme === "tomato") {
//         setProp('--light', "#d62e2e")
//         setProp('--dark', "#600000")
//     } else if (theme === "avocado") {
//         setProp('--light', "#6b8c21")
//         setProp('--dark', "#704012")
//     } else if (theme === "orange") {
//         setProp('--light', "#ffca16")
//         setProp('--dark', "#f97300")
//     } else if (theme === "blueberry") {
//         setProp('--light', "#41a8f9")
//         setProp('--dark', "#064490")
//     } else  {
//         setProp('--light', "#f5f5f5")
//         setProp('--dark', "#222222")
//     } 
// }





