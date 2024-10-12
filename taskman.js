let count = 0;  // To keep track of the number of tasks
const submitBtn = document.getElementById("submitBtn");
const timeBtn = document.getElementById("timeBtn");

timeBtn.addEventListener('click', () => {
    const taskInput = document.getElementById("taskInput").value.trim();
    const timeInput = parseInt(document.getElementById("timeInput").value.trim());

    if (taskInput && timeInput && timeInput > 0) {
        count += 1;

        // Create the task item with the task and countdown
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('div');
        const countdownSpan = document.createElement('span');

        taskItem.textContent = `${count}.) ${taskInput}`;
        countdownSpan.textContent = `(${timeInput}s)`;
        
        // Append the countdown and task item to the list
        taskItem.appendChild(countdownSpan);
        taskList.appendChild(taskItem);

        // Clear input fields
        document.getElementById("taskInput").value = "";
        document.getElementById("timeInput").value = "";

        // Start the countdown
        let timeLeft = timeInput;
        const interval = setInterval(() => {
            timeLeft--;
            countdownSpan.textContent = `(${timeLeft}s)`;

            if (timeLeft <= 0) {
                clearInterval(interval);  // Stop countdown
                taskItem.style.textDecoration = "line-through";  // Strikethrough
                countdownSpan.textContent = "(Time's up)";  // Update countdown text
            }
        }, 1000);  // Runs every second
    }
});
