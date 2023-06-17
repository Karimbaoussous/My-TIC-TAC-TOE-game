                             //First
var result = confirm("Are you a GitHub user");
const body = document.getElementsByTagName("body")[0];
const container = document.createElement("div");
const img = document.createElement("img");
var X = 'url("Images/X.png")';
var O = 'url("Images/O.png")';
var c = 0;
const audio = new Audio('./Sounds/pageflip.mp3');
img.src = "./Images/angry.png";

if (result) {
    // User clicked OK
    alert("Enjoy the game . . .");
} else {
    // User clicked Cancel
    alert("Go away :(  ");
    container.textContent = "GOOOOOOOOOOOOO awaaaaaaaaaaaaaaaaay .. :( = ";
    container.appendChild(img);
    body.innerHTML = '';
    body.appendChild(container);
}

                                // The game
const block = document.querySelector(".child");
const blocks = document.querySelectorAll(".child");
const teamGreen = document.getElementsByClassName("teamGreen")[0];
const teamBlue = document.getElementsByClassName("teamBlue")[0];
const threeRow = document.getElementsByClassName("container")[0];
console.log(threeRow);
blocks.forEach(function(block) {
    
    block.addEventListener("click", function() {
        
if(c<=8){
       this.textContent = "";
        audio.play();
       
        setTimeout(() => {
            audio.pause();
        }, 650);

        // Team colors . . .
            if(teamGreen.style.opacity == 0)
            {teamGreen.style.opacity = 1;teamBlue.style.opacity = 0; }
            else if(teamGreen.style.opacity == 1){teamGreen.style.opacity = 0;
                teamBlue.style.opacity = 1; }
            
        // O or X flipping
            this.style.backgroundImage = X;
            if (this.style.backgroundImage === 'url("Images/X.png")') {
            X = 'url("Images/O.png")';
            } 
            else{
                X = 'url("Images/X.png")';
            }

        // Compteur final
            c++;


}
        // The winning part
            if(threeRow.block.style.backgroundImage === 'url("Images/X.png")' || threeRow.block.style.backgroundImage === 'url("Images/O.png")'){
                threeRow.block.style.opacity = 0.5;
            }

});
});


