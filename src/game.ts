import utils from '../node_modules/decentraland-ecs-utils/index'
import * as RestrictedActions from '@decentraland/RestrictedActions'
import { movePlayerTo } from '@decentraland/RestrictedActions'

const imageTexture = new Texture('images/UI_Guestbook.png')
const canvas = new UICanvas()

const inventoryContainer = new UIContainerStack(canvas)
inventoryContainer.adaptWidth = true
inventoryContainer.adaptHeight = true
inventoryContainer.width = 200
inventoryContainer.height = 75
inventoryContainer.positionY = 100
inventoryContainer.positionX = 0
inventoryContainer.color = Color4.Yellow()
inventoryContainer.hAlign = "right"
inventoryContainer.vAlign = "bottom"
inventoryContainer.stackOrientation = UIStackOrientation.VERTICAL
inventoryContainer.opacity = 0.1

const NextButton0 = new UIImage(canvas, imageTexture)
NextButton0.width = 76
NextButton0.height = 76
NextButton0.hAlign = "right"
NextButton0.vAlign = "bottom"
NextButton0.positionY = 100
NextButton0.positionX = 10
NextButton0.sourceWidth = 75
NextButton0.sourceHeight = 75
NextButton0.visible = false

const NextButton1 = new UIImage(canvas, imageTexture)
NextButton1.width = 76
NextButton1.height = 76
NextButton1.hAlign = "right"
NextButton1.vAlign = "bottom"
NextButton1.positionY = 100
NextButton1.positionX = 10
NextButton1.sourceWidth = 75
NextButton1.sourceHeight = 75
NextButton1.visible = true

const NextButton2 = new UIImage(canvas, imageTexture)
NextButton2.width = 76
NextButton2.height = 76
NextButton2.hAlign = "right"
NextButton2.vAlign = "bottom"
NextButton2.positionY = 176
NextButton2.positionX = 10
NextButton2.sourceWidth = 75
NextButton2.sourceHeight = 75
NextButton2.visible = false

const NextButton3 = new UIImage(canvas, imageTexture)
NextButton3.width = 76
NextButton3.height = 76
NextButton3.hAlign = "right"
NextButton3.vAlign = "bottom"
NextButton3.positionY = 252
NextButton3.positionX = 10
NextButton3.sourceWidth = 75
NextButton3.sourceHeight = 75
NextButton3.visible = false

const NextButton4 = new UIImage(canvas, imageTexture)
NextButton4.width = 76
NextButton4.height = 76
NextButton4.hAlign = "right"
NextButton4.vAlign = "bottom"
NextButton4.positionY = 328
NextButton4.positionX = 10
NextButton4.sourceWidth = 75
NextButton4.sourceHeight = 75
NextButton4.visible = false

const sname = new UIText(canvas)
sname.value = "Sound"
sname.width = 76
sname.height = 76
sname.hAlign = "right"
sname.vAlign = "bottom"
sname.positionY = 110
sname.positionX = -120
sname.fontSize = 25
sname.color = Color4.Black()

const sname2 = new UIText(canvas)
sname2.value = "House"
sname2.width = 76
sname2.height = 76
sname2.hAlign = "right"
sname2.vAlign = "bottom"
sname2.positionY = 186
sname2.positionX = -120
sname2.fontSize = 25
sname2.color = Color4.Black()
sname2.visible = false

const sname3 = new UIText(canvas)
sname3.value = "Hiphop"
sname3.width = 76
sname3.height = 76
sname3.hAlign = "right"
sname3.vAlign = "bottom"
sname3.positionY = 262
sname3.positionX = -120
sname3.fontSize = 25
sname3.color = Color4.Black()
sname3.visible = false

const sname4 = new UIText(canvas)
sname4.value = "Musicbox"
sname4.width = 76
sname4.height = 76
sname4.hAlign = "right"
sname4.vAlign = "bottom"
sname4.positionY = 338
sname4.positionX = -120
sname4.fontSize = 25
sname4.color = Color4.Black()
sname4.visible = false

NextButton0.onClick = new OnClick(() => {
  sname.value = "MusicBox"
  inventoryContainer.height = 75
  NextButton0.visible = false
  NextButton1.visible = true
  NextButton2.visible = false
  NextButton3.visible = false
  NextButton4.visible = false
  sname2.visible = false
  sname3.visible = false
  sname4.visible = false
  }
)

NextButton1.onClick = new OnClick(() => {
  sname.value = "close"
  inventoryContainer.height = 306
  NextButton0.visible = true
  NextButton1.visible = false
  NextButton2.visible = true
  NextButton3.visible = true
  NextButton4.visible = true
  sname2.visible = true
  sname3.visible = true
  sname4.visible = true
  }
)



const songs: { src: string; name: string }[] = [
  { src: 'sounds/hiphop.mp3', name: 'Hiphop' },
  { src: 'sounds/house.mp3', name: 'House' }
]

const wall = new Entity();
engine.addEntity(wall);
wall.addComponent(new GLTFShape("models/walls3.glb"));
wall.addComponent(new Transform({ position: new Vector3(0, 0, 0) }));


let buttonArray: IEntity[] = []

for (let i = 0; i < songs.length; i++) {

  let song = new AudioClip(songs[i].src)
  let audioSource = new AudioSource(song)
  audioSource.playing = false
  const key = new Entity();
  engine.addEntity(key);
  key.addComponent(audioSource)
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
  buttonArray[i] = new Entity()

  buttonArray[i].setParent(wall)
  buttonArray[i].addComponent(
    new utils.ToggleComponent(utils.ToggleState.Off, value => {
      if (value == utils.ToggleState.On) {
        buttonArray[i].getComponent(AudioSource).playing = true
      } else {
        if (buttonArray[i].getComponent(AudioSource).playing) {
          buttonArray[i].getComponent(AudioSource).playing = false
        }
      }
    })
  )

  buttonArray[i].addComponent(audioSource)

  engine.addEntity(buttonArray[i])
  NextButton2.onClick = new OnClick(() => {
    sname2.value = "Playing.."
    sname3.value = songs[i-1].name
    pressButton(i)
    }
  )

  NextButton3.onClick = new OnClick(() => {
    sname2.value = songs[i].name
    sname3.value = "Playing.."
    pressButton(i-1)
    }
  )
  const spin2 = new Entity();
  engine.addEntity(spin2);
  spin2.addComponent(audioSource)
  spin2.addComponent(new GLTFShape("models/astar.glb"));
  spin2.addComponent(new Transform({ position: new Vector3(41, 0, 42.25), scale: new Vector3(4, 4, 4) }));

  spin2.addComponent(
    new OnPointerDown(() => {
      openExternalURL("https://crowdloan.astar.network/?referral=1Hi73C8EuTjhJ2MsSppYH2qTbQFbJHrG9E9cUhzorYZHZ97#stake-dot")
    },
      { hoverText: "Lock 5 DOT on astar network to get an NFT",
      distance: 50, }
  )
  )

}

function pressButton(i: number) {
  buttonArray[i].getComponent(utils.ToggleComponent).toggle()
  for (let j = 0; j < songs.length; j++) {
    if (j != i) {
      buttonArray[j]
        .getComponent(utils.ToggleComponent)
        .set(utils.ToggleState.Off)
    }
  }
}


const moon = new Entity()
engine.addEntity(moon)
moon.addComponent(new GLTFShape("models/moon.gltf"))
moon.addComponent(new Transform({ position: new Vector3(5, 5, 5), rotation: Quaternion.Euler(0, 0, 0) }));
moon.addComponent(
  new OnPointerDown(
    (_e) => {
      RestrictedActions.movePlayerTo({ x: 22, y: 599, z: 22 }, { x: 1, y: 1, z: 1 })
    },
    { hoverText: "To the moon!",
    distance: 150,  }
  )
)
