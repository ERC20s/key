const wall = new Entity();
engine.addEntity(wall);
wall.addComponent(new GLTFShape("models/walls2.glb"));
wall.addComponent(new Transform({ position: new Vector3(0, 0, 0) }));
