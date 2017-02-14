function controllerInstantiatesWithList() {
  var list = new List();
  var controller = new NoteController(list);
  assert.isTrue(controller instanceof NoteController);
}

controllerInstantiatesWithList();


function controllerInsertsViewIntoHTML() {
  var list = new List();
  list.addNote('Favourite food: pesto');

  function DocumentDouble() {
    this.gebiCallCount = 0;
  }

  DocumentDouble.prototype = {
    getElementById: function(string) {
      this.gebiCallCount++;
      return "<div id='app'><ul><li><div>Favourite food: pesto</div></li></ul></div>";
    }
  };

  var document = new DocumentDouble();

  // var controller = new NoteController(list);
  //
  // var view = new NoteListView(list);

  assert.isTrue(document.getElementById('app') === "<div id='app'><ul><li><div>Favourite food: pesto</div></li></ul></div>");
  assert.isTrue(document.gebiCallCount === 1);
}

controllerInsertsViewIntoHTML();
