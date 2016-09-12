var entity = document.getElementById('test-entity');

// Try setting the position...
entity.setAttribute('position', {x: 1, y: 2, z: 3});

// ... But inspecting the DOM, it doesn't appear to be set.

// Also tried:
//testEntity.setAttribute('position', '1 2 3');
// And:
//testEntity.setAttribute('position', new THREE.Vector3(1, 2, 3);

// Ah... But even though it doesn't show in the DOM, it is apparently set OK:
console.log('position', entity.object3D.position);
