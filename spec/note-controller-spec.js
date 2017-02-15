function controllerInstantiatesWithList() {
  var list = new List();
  var controller = new NoteController(list);
  assert.isTrue(controller instanceof NoteController);
}

// controllerInstantiatesWithList();
//
// // function controllerInsertsViewIntoHTML() {
// //   var list = new List();
// //   list.addNote('Favourite food: pesto');
// //
// //   elementDouble = document.createElement("div")
// //   elementDouble.setAttribute
// //   assert.isTrue(elementDouble.innerHTML === "<div id='app'><ul><li><div>Favourite food: pesto</div></li></ul></div>");
// // }
//
// controllerInsertsViewIntoHTML();
