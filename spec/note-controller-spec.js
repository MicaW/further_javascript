function controllerInstantiatesWithList() {
  var list = new List();
  var controller = new NoteController(list);
  assert.isTrue(controller instanceof NoteController);
}
 controllerInstantiatesWithList();
console.log("controllerInstantiatesWithList")
