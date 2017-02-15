(function(exports) {

  function NoteController(noteList) {
    this._noteList = noteList;
    noteList.addNote('Favourite drink: seltzer');
    var view = new NoteListView(noteList);
  }

  NoteController.prototype.getHTML = function(noteListView) {
    var myNotes = noteListView.returnHTML();
    this.elem = document.getElementById('app');
    this.elem.innerHTML = myNotes;
  };

  exports.NoteController = NoteController;
  exports.NoteController.getHTML = NoteController.getHTML;
})(this);


var noteList = new List();
var controller = new NoteController(noteList);
controller.getHTML(view);
