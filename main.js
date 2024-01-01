/*main.js*/

function updateCountDown(){
  const currentYear = new Date();
  const newYear = new Date(2025, 0, 1, 0, 0, 0); // January 1, 2025

  const timeDiff = newYear - currentYear;

  const d = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // days
  const h = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // hours
  const m = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)); // minutes
  const s = Math.floor((timeDiff % (1000 * 60)) / 1000); // secondes

  const countDownText = `${d}d ${h}h ${m}m ${s}s `;

  document.getElementById("time").innerHTML = countDownText;

}

// Update function each 1 second 
  setInterval(updateCountDown,1000)

// Initial call to set the initial countdown
  updateCountDown();


// unfinished work
/*function updateProgressBar(){
  const currentYear = new Date();
  var yearStart = new Date(currentYear.getFullYear(), 0, 1); // January 1st of the current year
  var yearEnd = new Date(currentYear.getFullYear() + 1, 0, 1); // December 31th of the current year
  var progress = ((currentYear - yearStart) / (yearEnd - yearStart)) * 100;

  document.getElementById("progress").style.width = progress + "%";
  document.getElementById("percentage").innerText = progress.toFixed(2) + "%";
}

  setInterval(updateProgressBar, 1000);    

// Initial call to update the progress bar
  updateProgressBar(); */