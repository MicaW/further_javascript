// single note view takes a note upon instantiation
var note = new Note("This is my note")
var singleNote = new SingleNote(note)

function singleNoteView() {
  assert.isTrue(singleNote._note._text === "This is my note");
}

singleNoteView()
console.log("singleNoteView")

// returnSingleNote returns a string of html for the note
  function returnSingleNoteHTML() {
    assert.isTrue(singleNote.returnSingleNote() === "<div>This is my note</div>");
  }

returnSingleNoteHTML()
console.log("returnSingleNoteHTML")
