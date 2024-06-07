document.addEventListener('DOMContentLoaded', function() {
    const scene = document.getElementById('container');
    const counter = document.getElementById('counter');

    let i = 1;
    for(i;i<=35;i++) {
        const hourglassDiv = document.createElement('div');
        hourglassDiv.className = 'hourglass-container';
  
        const hourglassTopDiv = document.createElement('div');
        hourglassTopDiv.className = 'hourglass';
        hourglassTopDiv.style.animation = `rotateGlass ${2 ** i}s infinite linear`;

        const sandDiv = document.createElement('div');
        sandDiv.id = `sand-${i}`
        var styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = `#sand-${i}:before {animation: dropsand ${2 ** i}s infinite linear;}`;

        hourglassTopDiv.appendChild(sandDiv)
        hourglassDiv.appendChild(hourglassTopDiv)


        let shelf = document.querySelector('.hourglasses-' + (Math.ceil(i / 5)));
        shelf.appendChild(hourglassDiv)
    }


    const displayHourglassTurns = () => {
        // Get the current date and time
        const now = new Date();
    
        // Create a new Date object for the start of today (midnight)
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
        // Calculate the difference in milliseconds
        const differenceInMilliseconds = now - startOfDay;
    
        // Convert milliseconds to seconds
        const secondsPassedToday = Math.floor(differenceInMilliseconds / 1000);
            
        let flips = 0;
        for(let j = 1;j<=i;j++) {
            flips += Math.floor(secondsPassedToday / ((2 ** j)/2))
        }

        counter.innerHTML = `The hourglasses have been flipped ${flips} times today.`
    }
    
    displayHourglassTurns()
    setInterval(displayHourglassTurns, 200);
});


