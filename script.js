//Select elements
let count = 0;
let value = document.getElementById("value");
let btns = document.querySelectorAll(".btn");

//Change body BG color
document.body.style.backgroundColor = '#e6dcdc';

//Loop through all btns
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        //Get a specific clicked btn and its class
        const btnClass = e.currentTarget.classList;

        //Check if the btn has a specific class and update count according to it
        if(btnClass.contains("decrease")) {
            count--;
        }
        else if(btnClass.contains("increase")) {
            count++;
        }
        else{
            count = 0;
        }

        //Change number color according to its value (+ / -)
        //Also, change body BG color according to value
        if(count > 0) {
            value.style.color = 'green';
            document.body.style.backgroundColor = '#c7ffc8';
        }
        else if(count < 0) {
            value.style.color = '#d6170d';
            document.body.style.backgroundColor = '#f78b8b';
        }
        else {
            value.style.color = '#333'
            document.body.style.backgroundColor = '#e6dcdc';
        }

        //Update value (span) according to count
        value.textContent = count;
        
    })
})
