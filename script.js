let select = document.querySelectorAll(".img");
let msg = document.querySelector(".msg");
let reset = document.querySelector(".restart"); 

let yourscore = 0;
let compscore = 0;

//------------------------------------------------------------------//
const restart = reset.addEventListener("click", ()=>{
    msg.style.backgroundColor = "transparent";
    msg.innerHTML="Play your Move👆"
    you.innerText = 0;
    comp.innerText = 0;
});
//-----------------------------------------------------------------//
let you = document.querySelector(".you")
let comp = document.querySelector(".comp")

const comchoice = () => {
    const options = ["rock", "paper", "scissor"]
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}

const playgame = (userchoice) => {
    console.log("user choice =", userchoice); //if u remove it then no change is occur 
    const computerChoice = comchoice();
    console.log("computer choice =", computerChoice); //if u remove it then 

    if (userchoice === computerChoice) {
        msg.innerHTML = "Its Draw!, try again🥱🥱";
        msg.style.backgroundColor = "yellow";
        msg.style.transition = "all ease-out 0.1s";
    }
    else {
        if (userchoice === "rock") {
            if (computerChoice === "scissor") {
                msg.innerHTML =`You WIN!🥳 Your ${userchoice} beats ${computerChoice}`;
                msg.style.backgroundColor = "#70e000";
                yourscore++;
                you.innerText = yourscore;
            }
            else {
                msg.innerHTML = `You LOST😭🤧 ${computerChoice} beats your ${userchoice}`;
                msg.style.backgroundColor = "red";
                compscore++;
                comp.innerText = compscore;
            }
        }
        else if (userchoice === "scissor") {
            if (computerChoice === "paper") {
                msg.innerHTML = `You WIN!🥳 Your ${userchoice} beats ${computerChoice}`;
                yourscore++;
                you.innerText = yourscore;
                msg.style.backgroundColor = "#70e000";
            }
            else {
                msg.innerHTML = `You LOST😭🤧 ${computerChoice} beats your ${userchoice}`;
                msg.style.backgroundColor = "red";
                compscore++;
                comp.innerText = compscore;
            };
        }
        else {
            if (computerChoice === "rock") {
                msg.innerHTML = `You WIN!🥳 Your ${userchoice} beats ${computerChoice}`;
                yourscore++;
                you.innerText = yourscore;
                msg.style.backgroundColor = "#70e000";
            }
            else {
                msg.innerHTML = `You LOST😭🤧 ${computerChoice} beats your ${userchoice}`;
                msg.style.backgroundColor = "red";
                compscore++;
                comp.innerText = compscore;
            }
        }
    }
};

//-----------------------------------------------------------------//
select.forEach((img) => {
    img.addEventListener("click", () => {
        let userchoice = img.getAttribute("id");
        playgame(userchoice);
    });
}); 