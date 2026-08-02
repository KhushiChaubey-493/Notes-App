const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".create-btn");

let notes = JSON.parse(localStorage.getItem("notes-app")) || [];

function saveNotes() {
  localStorage.setItem("notes-app", JSON.stringify(notes));
}

function formatDate(dateValue) {
  return new Date(dateValue).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function renderNotes() {
  notesContainer.innerHTML = "";

  if (notes.length === 0) {
    notesContainer.innerHTML = `
      <div class="empty-state">
        No notes yet. Create your first note.
      </div>
    `;
    return;
  }

  notes.forEach(note => {
    const noteElement = document.createElement("article");
    noteElement.className = "note";

    noteElement.innerHTML = `
      <div class="note-content" contenteditable="true" data-id="${note.id}"></div>
      <div class="note-footer">
        <span class="note-date">${formatDate(note.updatedAt)}</span>
        <button class="delete-btn" type="button" data-id="${note.id}">
          Delete
        </button>
      </div>
    `;

    const content = noteElement.querySelector(".note-content");
    content.textContent = note.text;

    notesContainer.appendChild(noteElement);
  });
}

function createNote() {
  const newNote = {
    id: Date.now().toString(),
    text: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  notes.unshift(newNote);
  saveNotes();
  renderNotes();

  const firstNote = document.querySelector(".note-content");
  firstNote.focus();
}

createBtn.addEventListener("click", createNote);

notesContainer.addEventListener("input", event => {
  if (!event.target.classList.contains("note-content")) return;

  const noteId = event.target.dataset.id;
  const note = notes.find(item => item.id === noteId);

  if (note) {
    note.text = event.target.textContent;
    note.updatedAt = new Date().toISOString();
    saveNotes();
  }
});

notesContainer.addEventListener("click", event => {
  if (!event.target.classList.contains("delete-btn")) return;

  const noteId = event.target.dataset.id;
  notes = notes.filter(note => note.id !== noteId);

  saveNotes();
  renderNotes();
});

notesContainer.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});

renderNotes();