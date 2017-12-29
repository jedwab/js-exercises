var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
dinosaur.toUpperCase();

var textAfter = text.replace('Velociraptor', dinosaur.toUpperCase());

var halfText = textAfter.length/2;

var expectedText = textAfter.slice(0, halfText);
console.log(expectedText);




