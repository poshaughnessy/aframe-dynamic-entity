var entity1 = document.getElementById('test-entity');

// Try setting the position...
entity1.setAttribute('position', {x: -2, y: 2, z: -3});

// ... But inspecting the DOM, it doesn't appear to be set.

// Also tried:
//testEntity.setAttribute('position', '1 2 3');
// And:
//testEntity.setAttribute('position', new THREE.Vector3(1, 2, 3);

// Ah... But even though it doesn't show in the DOM, it is apparently set OK:
console.log('position', entity1.object3D.position);

// OK cool, let's try adding an image inside it then
var image1 = document.createElement('a-image');
image1.setAttribute('src', 'walrus.jpg');
image1.setAttribute('width', 1);
image1.setAttribute('height', 1);

entity1.appendChild(image1);

// That worked! OK, now to try adding one inside a <div>

var container = document.createElement('div');
var entity2 = document.createElement('a-entity');

entity2.setAttribute('position', {x: 2, y: 2, z: -3});

var image2 = document.createElement('a-image');

image2.setAttribute('src', 'xkcd.png');
image2.setAttribute('width', 1);
image2.setAttribute('height', 1);

entity2.appendChild(image2);
container.appendChild(entity2);

var scene = document.querySelector('a-scene');
scene.appendChild(container);

// Yeah this one doesn't show up...
