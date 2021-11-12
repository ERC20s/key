




const wall = new Entity();
engine.addEntity(wall);
wall.addComponent(new GLTFShape("models/walls3.glb"));
wall.addComponent(new Transform({ position: new Vector3(0, 0, 0) }));

const key = new Entity();
engine.addEntity(key);
// key.addComponent(audioSource)
key.addComponent(new GLTFShape("models/key.glb"));
key.addComponent(new Transform({ position: new Vector3(0, 0, 0)}));

key.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://medium.com/we-are-talisman")
  },
    { hoverText: "We are talisman!",
    distance: 130, }
)
)
