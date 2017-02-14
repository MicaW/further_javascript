(function(exports) {

  function NoteController(noteList) {
    this._noteList = noteList
  };

  NoteController.prototype.getHTML = function(noteListView) {
    var myNotes = noteListView.returnHTML()
    var elem = document.getElementById('app');
    elem.innerHTML = myNotes;
  };

  exports.NoteController = NoteController;
  exports.NoteController.getHTML = NoteController.getHTML;
})(this);
