
// the note instantiates with a string of text stored within a text property on the note an return the note text when requested
function newNoteTest() {
  var newNote = new Note("string of text");
  assert.isTrue(newNote.text() === "string of text");
};
newNoteTest();
console.log("newNoteTest")
