(function(exports) {

  function SingleNote(note) {
    this._note = note
  };

  SingleNote.prototype.returnSingleNote = function() {
    var noteHTML = "<div>" + this._note._text + "</div>"
    return noteHTML
  }

  exports.SingleNote = SingleNote;
})(this);
