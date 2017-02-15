var list = new List();
list.addNote('This is the first note')
list.addNote('This is the second note')

var listView = new NoteListView(list);

function listViewInstantiatesWithList() {
  assert.isTrue(listView._noteList === list);
}
listViewInstantiatesWithList()
console.log("listViewInstantiatesWithList")

function listViewReturnsHTML() {
  assert.isTrue(
    listView.returnHTML() === '<ul><li><div>This is the first no</div></li><li><div>This is the second n</div></li></ul>'
  )
}

listViewReturnsHTML()
console.log("listViewReturnsHTML")

function viewFirstTwentyChars() {
  html = listView.returnHTML()
  assert.isTrue(html === "<ul><li><div>This is the first no</div></li><li><div>This is the second n</div></li></ul>")
}
viewFirstTwentyChars()
console.log("viewFirstTwentyChars")

// listView._noteList.notes().forEach(function(item) {
//   console.log(item.text().length)
//   length = item.text().length;
// })
// assert.isTrue(length <= 20)
