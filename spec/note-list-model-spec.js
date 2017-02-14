
// the list stores an array of notes. Has a method that returns the notes
function listHasArrayOfNotes() {
  var newList = new List();
  assert.isTrue(Array.isArray(newList.notes()));
}
listHasArrayOfNotes()



// list has a method that creates and stores a new single note
function listCanCreateAndStoreNotes() {
  var newList = new List();
  newList.addNote("This is my note");
  newList.addNote("This is my other note");
  console.log(newList._notes)
  assert.isTrue(newList.notes()[0].text() === 'This is my note');
  assert.isTrue(newList.notes()[1].text() === 'This is my other note');
};
listCanCreateAndStoreNotes()