
var noteList = new List()

noteList.addNote('Favourite drink: seltzer')

var controller = new NoteController(noteList)
var view = new NoteListView(noteList)

controller.getHTML(view)
