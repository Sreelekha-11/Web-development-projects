const numbers = document.querySelectorAll(".number");
const circles = document.querySelectorAll("svg circle");

const targets = [100, 85, 60];
const radius = 70;
const circumference = 2 * Math.PI * radius;
const GAP_PERCENT = 0.5;

circles.forEach((circle, index) => {
    let counter = 0;
    let target = targets[index];

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    let interval = setInterval(() => {
        if (counter >= target) {
            clearInterval(interval);
        } else {
            counter++;
            numbers[index].innerHTML = counter + "%";

            let visiblePercent;

            if (target === 100) {
                visiblePercent = counter;
            } else {
                visiblePercent = (counter * (100 - GAP_PERCENT)) / 100;
            }

            let offset =
                circumference - (circumference * visiblePercent) / 100;

            circle.style.strokeDashoffset = offset;
        }
    }, 25);
});
