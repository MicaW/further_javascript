(function(exports) {

  function NoteListView(noteList) {
    this._noteList = noteList
  };

   NoteListView.prototype.returnHTML = function() {
     var listItemsHTML = ''
     this._noteList.notes().forEach(function(item) {
       listItemsHTML += '<li><div>' + item.text() + '</div></li>';
     })
     return '<ul>' + listItemsHTML + '</ul>'
  };

  exports.NoteListView = NoteListView;
  exports.NoteListView.returnHTML = NoteListView.returnHTML;
})(this);
