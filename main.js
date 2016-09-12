var entity = document.getElementById('test-entity');

// Try setting the position...
entity.setAttribute('position', {x: 1, y: 2, z: 3});

// ... But inspecting the DOM, it doesn't appear to be set.

// Also tried:
//testEntity.setAttribute('position', '1 2 3');
// And:
//testEntity.setAttribute('position', new THREE.Vector3(1, 2, 3);
