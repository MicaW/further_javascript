var list = new List();
list.addNote('This is the first note')
list.addNote('This is the second note')
var listView = new NoteListView(list);

function listViewInstantiatesWithList() {
  assert.isTrue(listView._noteList === list);
}

listViewInstantiatesWithList()

function listViewReturnsHTML() {
  assert.isTrue(
    listView.returnHTML() === '<ul><li><div>This is the first note</div></li><li><div>This is the second note</div></li></ul>'
  );
}

listViewReturnsHTML()
