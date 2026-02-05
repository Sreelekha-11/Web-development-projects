
const noteText = document.getElementById("noteText");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesList = document.getElementById("notesList");

//let notes = [];

addNoteBtn.addEventListener("click", function () {
    const text = noteText.value;

    if (text === "") {
        return;
    }

    const noteDiv = document.createElement("div");
    noteDiv.className = "note";

    const p = document.createElement("p");
    p.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    deleteBtn.addEventListener("click", function () {
        notesList.removeChild(noteDiv);
    });

    noteDiv.appendChild(p);
    noteDiv.appendChild(deleteBtn);
    notesList.appendChild(noteDiv);

    noteText.value = "";
});

