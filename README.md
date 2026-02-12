# Web-Development-Projects

# Project 1:  Form Validation (HTML, CSS, JS)

A frontend mini project that validates user input in a form using client-side logic.
It ensures correct data entry by displaying error messages and preventing invalid submissions.

## Algorithm
1. Display the form with required input fields.
2. When the user clicks the submit button, capture all input values.
3. Check whether each required field is empty.
4. Validate the email format using predefined rules.
5. Validate the password based on minimum length and conditions.
6. If any input is invalid, display an appropriate error message.
7. Prevent form submission until all inputs are valid.
   
<img width="50%" height="260" alt="Screenshot (53)" src="https://github.com/user-attachments/assets/3dcbc408-170f-479a-91df-fff13c574a9e" /> <img width="40%" height="328" alt="login" src="https://github.com/user-attachments/assets/75531438-f18f-472a-b8ff-f731959dca74" />


# Project 2:  Search & Filter  (HTML, CSS, JS)
This project demonstrates a basic search and filter functionality using JavaScript.
It dynamically updates the displayed items based on user input.

## Algorithm
1. Read the text entered in the search box.  
2. Compare the text with each list item.  
3. Show matching items and hide others.  
4. Display “No results found” if no match exists.  
5. Show all items when the search box is empty.

<img width="45%" height="387" alt="Screenshot (54)" src="https://github.com/user-attachments/assets/1ee2f5fc-385f-4b7d-a692-7a07dc889cba" /> <img width="45%" height="350" alt="Screenshot (55)" src="https://github.com/user-attachments/assets/12b80b27-61f8-4a41-9760-1dca9a48a8cc" />

# Project 3: Todo App (HTML, CSS, JS)
It is a simple Todo application built using JavaScript to practice DOM manipulation and event handling.

## Algorithm
1. Get references to the input field, add button, and task list from the DOM.
2. Listen for a click event on the **Add** button.
3. When the button is clicked:
   - Read the value entered in the input field.
   - If the input is empty, stop the process.
4. Create a new list item (`li`) and add the task text to it.
5. Add a click event to the task to toggle its completed state.
6. Create a delete button for the task.
7. Add a click event to the delete button to remove the task from the list.
8. Append the task item to the task list.
9. Clear the input field after adding the task.


<img width="45%" height="645" alt="Screenshot (58)" src="https://github.com/user-attachments/assets/0f1403c6-6c14-477c-aa1c-dbef5d143e73" /> <img width="45%" height="645" alt="Screenshot (59)" src="https://github.com/user-attachments/assets/bd363db6-8be6-4a31-a8e1-9df94a5a1fcd" />

# Project 4: Notes App (HTML, CSS, JS)
A simple Notes App that allows users to add and delete notes dynamically using JavaScript.  
This project focuses on understanding DOM manipulation, event handling, and basic UI interactions.

## Algorithm
1. Get the required input field, button, and notes container elements from the HTML.
2. Wait for the user to click the Add Note button.
3. Read the text entered by the user in the text area.
4. Check if the input is empty and stop the process if no text is provided.
5. Create a new note element with the entered text and a delete button.
6. Display the note on the page and allow it to be removed when the delete button is clicked.
   

<img width="45%" height="644" alt="Screenshot (64)" src="https://github.com/user-attachments/assets/9e38b1e5-5738-416f-b9ca-93d3efe996b7" /> <img width="45%" height="643" alt="Screenshot (63)" src="https://github.com/user-attachments/assets/082a6ddb-f97a-4dbd-9aa8-51bf05f66f36" />

# Project 5: Image Gallery (HTML, CSS, JS)
This project displays images in a grid layout and allows users to preview images in a larger view using a modal popup.

## Algorithm
1. Create a container to display all images in a grid layout.
2. Select all gallery images and modal elements using JavaScript.
3. Attach click event listeners to each image.
4. When an image is clicked, open the modal and display the selected image in large view.
5. Display a dark overlay behind the modal to focus user attention.
6. Attach a click event to the close button to hide the modal.
7. Return the user to the gallery view when the modal is closed.

<img width="45%" height="623" alt="Screenshot (76)" src="https://github.com/user-attachments/assets/b6a704b5-88ab-43e9-bd97-e44bc86ae43c" /> <img width="45%" height="623" alt="Screenshot (78)" src="https://github.com/user-attachments/assets/06288640-7566-4d4e-a52c-6514ed269b99" />

 # Project 6: Calculator (HTML, CSS, JS)
 The project is designed to strengthen problem-solving skills and improve understanding of JavaScript event handling and expression evaluation.

## Algorithm

1. Select the calculator display element from the DOM to show user input and results.
2. Append numbers to the display when number buttons are clicked.
3. Append operators to the display when operator buttons are clicked.
4. Insert opening or closing brackets using a toggle mechanism.
5. Evaluate the complete mathematical expression when the equals button is clicked.
6. Display the calculated result or show an error message for invalid expressions.

### Link : https://calc-git-main-sreelekha-11s-projects.vercel.app/

<img width="45%" height="643" alt="Screenshot (73)" src="https://github.com/user-attachments/assets/64af8805-cb0c-4c07-8518-402c85fef40f" /> <img width="45%" height="643" alt="Screenshot (74)" src="https://github.com/user-attachments/assets/db7607a2-f874-4d0b-9a87-5414bf3aa12a" />

 # Project 7: Stopwatch (React + Tailwind CSS)
A simple and interactive stopwatch application built using React and Tailwind CSS.  

##  Algorithm 

1. Initialize a state variable to store total elapsed time in seconds.
2. Initialize another state variable to track whether the stopwatch is running.
3. When the Start button is clicked, set the running state to true.
4. Use `setInterval` inside `useEffect` to increment time every second while running.
5. Clear the interval when the stopwatch is stopped or the component re-renders.
6. Reset the time and stop the stopwatch when the Reset button is clicked.

 ### Link : https://stopwatch-a3ya6twue-sreelekha-11s-projects.vercel.app/
 
<img width="40%" height="645" alt="Screenshot (85)" src="https://github.com/user-attachments/assets/c93ae7a2-8f2d-4b0c-bc6e-e4206ac7cc83" /> <img width="43%" height="626" alt="Screenshot (84)" src="https://github.com/user-attachments/assets/1f8b5cc3-f380-4dd6-9560-1ff7a1b245a0" />

# Project 8:  Password Strength Indicator  (HTML, CSS, JS)
This project provides real-time feedback on password strength based on the length of the entered password.

##  Algorithm

1. Get references to the password input field and message elements.
2. Listen for user input events on the password field.
3. Check if the password field is empty or not.
4. If the password length is less than 4, mark it as **Weak**.
5. If the password length is between 4 and 7, mark it as **Medium**.
6. If the password length is 8 or more, mark it as **Strong** and update styles accordingly.
  
<img width="45%" height="634" alt="Screenshot (88)" src="https://github.com/user-attachments/assets/f4929c5f-1a24-425e-9450-e3d4bbda502f" /> <img width="45%" height="636" alt="Screenshot (89)" src="https://github.com/user-attachments/assets/09681dc3-7326-47ee-94f2-b87950386fae" />

# Project 9: Text to Speech Converter  (HTML, CSS, JS)
This application allows users to type text, select a voice, and listen to the spoken output in the browser.

## Algorithm

1. Create a speech object using `SpeechSynthesisUtterance`.
2. Fetch all available voices from the browser using the Speech Synthesis API.
3. Populate the voice dropdown with the available voices.
4. Update the speech voice when the user selects a different option.
5. Read the text entered in the textarea when the button is clicked.
6. Use `speechSynthesis.speak()` to convert the text into spoken audio.

### Link : https://text-to-voice-five-silk.vercel.app/
<img width="45%" height="644" alt="Screenshot (90)" src="https://github.com/user-attachments/assets/bf9f9d9c-11ea-48b5-8544-c334552b46bd" /> <img width="45%" height="643" alt="Screenshot (91)" src="https://github.com/user-attachments/assets/ced11aaa-ef7b-4f24-8ab6-1a1ecf853a17" />

# Project 10: Circular Progress Bar  (HTML, CSS, JS)
Designed and implemented an interactive SVG-based circular progress bar with smooth animation using JavaScript.

## Algorithm

1. Get all the percentage text elements and SVG circle elements from the HTML.
2. Store the target percentage values for each progress bar.
3. Calculate the circle circumference using the formula 2 × π × radius.
4. Initialize each circle by setting its stroke-dasharray and stroke-dashoffset to the full circumference.
5. Start an animation that increases a counter from 0 to the target value while updating the percentage text.
6. Convert the percentage into stroke offset and apply it to the circle to visually display the progress, then stop the animation when the target is reached.

 <img width="45%" height="630" alt="Screenshot (94)" src="https://github.com/user-attachments/assets/95ded03b-dd83-4533-bf9f-ea0ac18b8619" />


## Author
Sreelekha ThippiReddy🎓
