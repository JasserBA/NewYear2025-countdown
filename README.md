# Countdown to New Year 2025

This project features a simple countdown timer created using HTML, CSS, and JavaScript.

## Demo

[NewYear2025-countdown](https://jasserba.github.io/NewYear2025-countdown/)

## How it Works

### Creating a New Date Object in JavaScript

In the `main.js` file, the JavaScript function `updateCountDown` manages the countdown timer. The timer calculates the time remaining until January 1, 2025.

#### Step 1: Create Date Objects

```javascript

const currentYear = new Date();

const newYear = new Date(2025, 0, 1, 0, 0, 0); // January 1, 2025

```

Here, `new Date()` represents the current date and time, while `new Date(2025, 0, 1, 0, 0, 0)` represents January 1, 2025, at midnight.

#### Step 2: Calculate Time Difference

```javascript

const timeDiff = newYear - currentYear;

```

The variable `timeDiff` stores the time difference in milliseconds between the current date and January 1, 2025.

#### Step 3: Extract Days, Hours, Minutes, and Seconds

```javascript

const d = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // days

const h = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // hours

const m = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)); // minutes

const s = Math.floor((timeDiff % (1000 * 60)) / 1000); // seconds

```

These calculations determine the remaining days, hours, minutes, and seconds.

#### Step 4: Update HTML Content

```javascript

document.getElementById("time").innerHTML = `${d}d ${h}h ${m}m ${s}s `;

```

This line dynamically updates the HTML content of the element with the ID "time" to display the countdown.

#### Step 5: Set Interval and Initial Call

```javascript

setInterval(updateCountDown, 1000);

updateCountDown();

```

The `setInterval` function calls `updateCountDown` every second, ensuring continuous countdown updates. The initial call sets the initial countdown.

### HTML Structure

The HTML file (`index.html`) includes a `<div>` element with the ID "time" for displaying the countdown.

```html

<div id="time"></div>

```

This is where the countdown is dynamically updated using JavaScript.

Feel free to check out the [live demo](https://jasserba.github.io/NewYear2025-countdown/) of the New Year 2025 countdown!