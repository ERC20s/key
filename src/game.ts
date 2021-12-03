import utils from '../node_modules/decentraland-ecs-utils/index'
import * as RestrictedActions from '@decentraland/RestrictedActions'
import { movePlayerTo } from '@decentraland/RestrictedActions'
import { joinSocketServer } from './wsConnection'

import { World } from './world'
import { UNO } from './uno'

export let sceneStarted = false
export let world: World
export let uno: UNO

const imageTexture = new Texture('images/UI_Guestbook.png')
const image2 = new Texture('images/image2.png')
const image3 = new Texture('images/submit.png')
const image4 = new Texture('images/card.png')
const image5 = new Texture('images/close.png')
const image6 = new Texture('images/cards.png')
const canvas = new UICanvas()

async function setUpScene() {
  let socket: WebSocket = await joinSocketServer()

  world = new World(
    new Transform({ position: new Vector3(0, 0, 0) }),
    socket
  )

  uno = new UNO(
    0,
    new Transform({ position: new Vector3(40, 0, 20) }),
    socket,
    world
  )

}

let uiArea = new Entity()
uiArea.addComponent(
  new Transform({
    position: new Vector3(16, 0, 16),
  })
)
engine.addEntity(uiArea)

uiArea.addComponent(
  new utils.TriggerComponent(
    new utils.TriggerBoxShape(new Vector3(32, 32, 32), Vector3.Zero()),
    {
      onCameraEnter: () => {
        if (!sceneStarted) {
          log('scene started')
          setUpScene()
          sceneStarted = true
        }
      },
      onCameraExit: () => {
      },
    }
  )
)



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

const NextButton5 = new UIImage(canvas, imageTexture)
NextButton5.width = 76
NextButton5.height = 76
NextButton5.hAlign = "right"
NextButton5.vAlign = "bottom"
NextButton5.positionY = 328
NextButton5.positionX = 10
NextButton5.sourceWidth = 75
NextButton5.sourceHeight = 75
NextButton5.visible = false

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
sname4.value = "VideoSwap"
sname4.width = 76
sname4.height = 76
sname4.hAlign = "right"
sname4.vAlign = "bottom"
sname4.positionY = 338
sname4.positionX = -120
sname4.fontSize = 25
sname4.color = Color4.Black()
sname4.visible = false

const dotuser = new UIText(canvas)
dotuser.value = "DOT ADDRESS not saved"
dotuser.width = 0
dotuser.height = 0
dotuser.hAlign = "center"
dotuser.vAlign = "top"
dotuser.fontSize = 25
dotuser.color = Color4.Blue()
dotuser.visible = false
const Polkaexplainer = new UIImage(canvas, image2)
Polkaexplainer.width = 500
Polkaexplainer.height = 500
Polkaexplainer.hAlign = "left"
Polkaexplainer.vAlign = "top"
Polkaexplainer.positionY = 10
Polkaexplainer.positionX = 200
Polkaexplainer.sourceWidth = 1000
Polkaexplainer.sourceHeight = 1000
Polkaexplainer.visible = false

const Polkaclose = new UIImage(canvas, imageTexture)
Polkaclose.width = 76
Polkaclose.height = 76
Polkaclose.hAlign = "left"
Polkaclose.vAlign = "top"
Polkaclose.positionY = 10
Polkaclose.positionX = 200
Polkaclose.sourceWidth = 75
Polkaclose.sourceHeight = 75
Polkaclose.visible = false

const Polkago = new UIImage(canvas, imageTexture)
Polkago.width = 40
Polkago.height = 40
Polkago.hAlign = "left"
Polkago.vAlign = "top"
Polkago.positionY = -60
Polkago.positionX = 500
Polkago.sourceWidth = 75
Polkago.sourceHeight = 75
Polkago.visible = false



const textInput = new UIInputText(canvas)
textInput.width = "720"
textInput.height = "33px"
textInput.vAlign = "top"
textInput.hAlign = "left"
textInput.fontSize = 22
textInput.placeholder = "Paste your polkadat address here!"
textInput.placeholderColor = Color4.Blue()
textInput.positionY = "-215px"
textInput.positionX = "210"
textInput.visible = false



const Submitbutton = new UIImage(canvas, image3)
Submitbutton.width = 500
Submitbutton.height = 76
Submitbutton.hAlign = "left"
Submitbutton.vAlign = "top"
Submitbutton.positionY = -280
Submitbutton.positionX = 220
Submitbutton.sourceWidth = 500
Submitbutton.sourceHeight = 75
Submitbutton.visible = false

    export function showInput(titleText: string, inputNameText: string, placeHolder: string, onTextSubmit: (text: string) => void): void {
        textInput.visible = true
        textInput.placeholder = "placeHolder"
        textInput.isPointerBlocker = true
        textInput.onTextSubmit = new OnTextSubmit(({ text }) => {
        })
    }

var namee;

export const text = new UIText(textInput)
textInput.onTextSubmit = new OnTextSubmit((x) => {
  text.value = "Welcome " + x.text + ", click sign to submit your entry! "
  text.width = "100%"
  text.height = "20px"
  textInput.height = "63px"
  text.vAlign = "top"
  text.hAlign = "left"
  dotuser.value = "welcome " + x.text
  Submitbutton.visible = true


})

Submitbutton.onClick = new OnClick(() => {
  Polkaexplainer.visible = true
  Polkago.visible = false
  Submitbutton.visible = true
  textInput.visible = true
  dotuser.visible = true

}
)


Polkaclose.onClick = new OnClick(() => {
  Polkaexplainer.visible = true
  Submitbutton.visible = true
  textInput.visible = true
  Polkago.visible = true
  dotuser.visible = true
  }
)



Polkago.onClick = new OnClick(() => {
  openExternalURL("https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/accounts")
  }
)



NextButton0.onClick = new OnClick(() => {
  sname.value = "MusicBox"
  inventoryContainer.height = 75
  NextButton0.visible = false
  NextButton1.visible = true
  NextButton2.visible = false
  NextButton3.visible = false
  NextButton4.visible = false
  NextButton5.visible = false
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
  { src: 'sounds/hipho.mp3', name: 'Hiphop' },
  { src: 'sounds/hous.mp3', name: 'House' }
]

let buttonArray: IEntity[] = []

for (let i = 0; i < songs.length; i++) {

  let song = new AudioClip(songs[i].src)
  let audioSource = new AudioSource(song)
  audioSource.playing = false
  const key = new Entity();
  engine.addEntity(key);
  key.addComponent(audioSource)
  key.addComponent(new GLTFShape("models/key.glb"));
  key.addComponent(new Transform({ position: new Vector3(0, 22, 0)}));

  key.addComponent(
    new OnPointerDown(() => {
      openExternalURL("https://medium.com/we-are-talisman")
    },
      { hoverText: "We are talisman !",
      distance: 40, }
  )
  )
  buttonArray[i] = new Entity()

  // buttonArray[i].setParent(world.wall)
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

moon.addComponent(new Transform({ position: new Vector3(2, 22, 2), rotation: Quaternion.Euler(0, 180, 0) }));
moon.addComponent(
  new OnPointerDown(
    (_e) => {
      RestrictedActions.movePlayerTo({ x: 170, y: 88, z: 50 }, { x: 178, y: 88, z: 50 })
    },
    { hoverText: "To the moon!",
    distance: 150,  }
  )
)

moon.addComponent(new GLTFShape("models/moon.gltf"))

const moon2 = new Entity()
engine.addEntity(moon2)

moon2.addComponent(new Transform({ position: new Vector3(2, 44, 2), rotation: Quaternion.Euler(0, 180, 180) }));
moon2.addComponent(
  new OnPointerDown(
    (_e) => {
      RestrictedActions.movePlayerTo({ x: 60, y: 1, z: 40 }, { x: 55, y: 1, z: 40 })
    },
    { hoverText: "To the moon!",
    distance: 150,  }
  )
)

moon2.addComponent(new GLTFShape("models/moon.gltf"))

let p = 0

const a2 = new Entity();
engine.addEntity(a2);
a2.addComponent(new GLTFShape("models/polkadot.glb"));
a2.addComponent(new Transform({ position: new Vector3(2, 0, 66), scale: new Vector3(3, 3, 3), rotation: Quaternion.Euler(0, 90, 0) }));

a2.addComponent(
  new OnPointerDown(() => {
    a2.removeComponent(GLTFShape)
    a25.addComponent(new GLTFShape("models/polkadot.glb"))
    p = p + 1;
    if (p > 5)
{
        moon.addComponent(new GLTFShape("models/moon.gltf"))
}
  },
    { hoverText: "To the moon!",
    distance: 50, }
)
)

const a25 = new Entity();
engine.addEntity(a25);

a25.addComponent(new Transform({ position: new Vector3(2, 0, 2), scale: new Vector3(3, 3, 3), rotation: Quaternion.Euler(0, 90, 0) }));

a25.addComponent(
  new OnPointerDown(() => {
    a25.removeComponent(GLTFShape)
    a2.addComponent(new GLTFShape("models/polkadot.glb"))
    p++;
  },
    { hoverText: "???",
    distance: 50, }
)
)

NextButton4.onClick = new OnClick(() => {
  sname4.value = "VideoPlay"
  NextButton4.visible = false
  NextButton5.visible = true
myVideoTexture.playing = !myVideoTexture.playing
  }
)

NextButton5.onClick = new OnClick(() => {
  sname4.value = "VideoPause"
  NextButton4.visible = true
  NextButton5.visible = false
myVideoTexture.playing = !myVideoTexture.playing

  }
)

const myVideoClip = new VideoClip("https://dclstreams.com/hosted/live/butter/index.m3u8")

const myVideoTexture = new VideoTexture(myVideoClip)
myVideoTexture.playing = true
// #3
const myMaterial = new BasicMaterial()
myMaterial.texture = myVideoTexture

// #4
const screen = new Entity()
screen.addComponent(new PlaneShape())
screen.addComponent(
  new Transform({
    position: new Vector3(2, 16, 40), scale: new Vector3(48, 32, 22), rotation: Quaternion.Euler(0, 90, 0) ,
  })
)
screen.addComponent(myMaterial)
screen.addComponent(
  new OnPointerDown(
    (_e) => {
      myVideoTexture.playing = !myVideoTexture.playing
    },
    { hoverText: "Click to play/pause. 'U' to close the UI.",
    distance: 80,  }
  )
)
engine.addEntity(screen)

const tv = new Entity();
tv.addComponent(new BoxShape())
tv.addComponent(
  new Transform({
    position: new Vector3(3, 1, 40), scale: new Vector3(2, 1, 10), rotation: Quaternion.Euler(0, 0, 0) ,
  })
)
const myMaterial3 = new Material()
myMaterial3.albedoColor = Color3.Red()
tv.addComponent(myMaterial3)
tv.addComponent(
  new OnPointerDown(
    (_e) => {
      screen.removeComponent(Transform)
      screen.setParent(Attachable.AVATAR)
      closetv.getComponent(PlaneShape).visible = true
      screen.addComponent(
        new Transform({
          position: new Vector3(0, 0.875, 0.2),
          scale: new Vector3(0.3, 0.2, 0.3),
          rotation: Quaternion.Euler(0, 180, 0)

        })
      )

    },
    { hoverText: "Pick up screen! Hit 'V' to view in 1st person.",
    distance: 80,  }
  )
)
engine.addEntity(tv)

const closetv = new Entity()

closetv.addComponent(new PlaneShape())

closetv.addComponent(
  new Transform({
    position: new Vector3(0, 0.65, 0.2),
    scale: new Vector3(0.2, 0.2, 0.2),
    rotation: Quaternion.Euler(0, 180, 0)
  })
)

closetv.addComponent(myMaterial3)
closetv.addComponent(
  new OnPointerDown(
    (_e) => {
      closetv.getComponent(PlaneShape).visible = false
      screen.removeComponent(Transform)
      screen.setParent(null)
      screen.addComponent(
        new Transform({
          position: new Vector3(2, 16, 40), scale: new Vector3(48, 32, 22), rotation: Quaternion.Euler(0, 90, 0)
        })
      )
    },
    { hoverText: "Drop screen!",
    distance: 2,  }
  )
)

closetv.getComponent(PlaneShape).visible = false

engine.addEntity(closetv)
closetv.setParent(Attachable.AVATAR)
// let test2 = "https://video-weaver.vie02.hls.ttvnw.net/v1/playlist/CqYFM77FA7Cfi2a7XkwB-jBEoV9PJs6JEG1Vhazmge-k2teiMfCAl-0yghtP7VrUUKS_smRMCL2FHFRfZL_QLTaMTCSUVUBLMeJZK4wXLOuRb0fDwW3mw62-QYQShgV_JPCUR1dsIIyGONZdZzMpzYWo9LAWYyuxh2rzG1WDCACq_ocTwEouquDnDfHSpOVJNroFzomzS2Bj4-Vpbj9A-fmUMMHHJdmL0VnQNa8diwvVrLGf155VaFmaix4zL92TuImcPsI3VFJjNEVBFyTN-kw4vw19SceWilQ0ZwQh73q1pybbK7lpInARnIQLQQVtlWUoWX3VPVBXz98MYii1RrF4TEa1FKi1vExghP6EAh3t4flrwt9kp_AJgMz0c7Epo39N3_1OHzi1GiBaissiuzFybVoaFh7tIghW01tUb8T-7MgGjOY0OgsbATogqQzTYmSA2pSWJfK2Zy6zfiEDA-5xadgn6uK9v31yKutVc0e4nBpiMUQwryIlivZsSQLCRfdpXqKiHh7YBuCF4pUAPHzvh4tRrBiQqWhmyIEHrlxYjbA5eITonk1_O638pv6oeHUCsGMdAXPxJiXx9kgwUMVHkHHdEzw-wMm2wdUpCVjJl-tnRZyiiESU08_T9kQROIFBGTn6k2QgQ29YO_osmZw8dZJGO2NaR5F5CvXFypbkHcr_B9WNuOlU5s0ZDf_RBQzOa0q4n_X_S3wqz9UJKvXU2S6lXL7gR3cQtGwnHZixXWw9t9-cWWRyhKLSjl4k3zqXLsxpavhBiEkOQAljpfvyTa21sqK8Fz-RdNQBYMFMubyvR5hkb1FhgDMjAQ_4-G2CFRV45fv0Z3tVBRd8dvgVYGgnqGwFTnvafdnzm4Dre6EWpqR3GQ6opyRUdurwM5aplh_K1ztPGgyT5LWz7UdHTZ1zWR0gASoJdXMtd2VzdC0yMKcC.m3u8"
// let myVideoClip2 = new VideoClip(test2
// // chaturbate "https://edge242.stream.highwebmedia.com/live\u002Dedge/amlst:projektmelody\u002Dsd\u002D48b68b605fcb762743310b510b427589a69ddf3e36d6aac16de19ea6454219b5_trns_h264/playlist.m3u8"
// // "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
// )
// // https://edge4\u002Dalb.stream.highwebmedia.com/live\u002Dhls/amlst:butterry\u002Dsd\u002De5a9c610b2e83d06ff5040838bea35c72ea32368cbf1a262a6f1124f171c417f_trns_h264/playlist.m3u8
// // #2
// const myVideoTexture2 = new VideoTexture(myVideoClip2)
// myVideoTexture2.playing = false
// // #3
// const myMaterial2 = new BasicMaterial()
// myMaterial2.texture = myVideoTexture2
//
// // #4
// const screen2 = new Entity()
// screen2.addComponent(new PlaneShape())
// screen2.addComponent(
//   new Transform({
//     position: new Vector3(2, 16, 40), scale: new Vector3(48, 32, 22), rotation: Quaternion.Euler(0, 90, 0) ,
//   })
// )
// screen2.addComponent(myMaterial)
// screen2.addComponent(
//   new OnPointerDown(
//     (_e) => {
//       myVideoTexture.playing = !myVideoTexture.playing
//     },
//     { hoverText: "PLAY VIDEO!",
//     distance: 80,  }
//   )
// )
//
// engine.addEntity(screen2)

const polka = new Entity();
engine.addEntity(polka);
polka.addComponent(new GLTFShape("models/polka.glb"));
polka.addComponent(new Transform({ position: new Vector3(40, 5, 40), scale: new Vector3(3, 3, 1), rotation: Quaternion.Euler(0, 90, 0) }));

polka.addComponent(
  new OnPointerDown(() => {

    Polkaexplainer.visible = false
    Submitbutton.visible = false
    textInput.visible = false
    Polkago.visible = false
    Polkaclose.visible = false
  },
    { hoverText: "Click here to get started!",
    distance: 90, }
)
)


const unocenter = new Entity();
unocenter.addComponent(new GLTFShape("models/center.glb"));
unocenter.addComponent(new Transform({ position: new Vector3(40, 0, 20) }));
unocenter.addComponent(
  new OnPointerDown(() => {

  },
    { hoverText: "Click to pick up a card",
    distance: 50, }
)
)
engine.addEntity(unocenter);
unocenter.getComponent(GLTFShape).visible = false

const unocard = new Entity();
engine.addEntity(unocard);
unocard.addComponent(new GLTFShape("models/card.glb"));
unocard.addComponent(new Transform({ position: new Vector3(42, 0.9, 20), rotation: Quaternion.Euler(0, 0, 90) }));
unocard.addComponent(
  new OnPointerDown(() => {
    unocards.visible = true
    unoclose.visible = true
  },
    { hoverText: "Your cards",
    distance: 50, }
)
)

const unocard2 = new Entity();
engine.addEntity(unocard2);
unocard2.addComponent(new GLTFShape("models/card.glb"));
unocard2.addComponent(new Transform({ position: new Vector3(40, 0.9, 22), rotation: Quaternion.Euler(0, 90, 90) }));
unocard2.addComponent(
  new OnPointerDown(() => {

  },
    { hoverText: "(2 cards)",
    distance: 50, }
)
)

const unocard3 = new Entity();
engine.addEntity(unocard3);
unocard3.addComponent(new GLTFShape("models/card.glb"));
unocard3.addComponent(new Transform({ position: new Vector3(38, 0.9, 20), rotation: Quaternion.Euler(0, 0, 90) }));
unocard3.addComponent(
  new OnPointerDown(() => {

  },
    { hoverText: "(3 cards)",
    distance: 50, }
)
)

const unotable = new UIImage(canvas, image4)
unotable.width = 1145
unotable.height = 650
unotable.hAlign = "left"
unotable.vAlign = "top"
unotable.positionY = 10
unotable.positionX = 200
unotable.sourceWidth = 1145
unotable.sourceHeight = 650
unotable.visible = false

const unocards = new UIImage(canvas, image6)
unocards.width = 407
unocards.height = 142
unocards.hAlign = "left"
unocards.vAlign = "bottom"
unocards.positionY = 10
unocards.positionX = 400
unocards.sourceWidth = 407
unocards.sourceHeight = 142
unocards.visible = false

unocards.onClick = new OnClick(() => {
  unocards.visible = false
  }
)

const unoclose = new UIImage(canvas, image5)
unoclose.width = 76
unoclose.height = 76
unoclose.hAlign = "left"
unoclose.vAlign = "bottom"
unoclose.positionY = 10
unoclose.positionX = 300
unoclose.sourceWidth = 75
unoclose.sourceHeight = 75
unoclose.visible = false

unoclose.onClick = new OnClick(() => {
  unoclose.visible = false
  unocards.visible = false
  }
)

const machine = new Entity();
engine.addEntity(machine);
machine.addComponent(new GLTFShape("models/vmn1.glb"));
machine.addComponent(new Transform({ position: new Vector3(62.5, 0, 52), scale: new Vector3(1, 1, 1), rotation: Quaternion.Euler(0, 270, 0) }));

machine.addComponent(
  new OnPointerDown(() => {
            openExternalURL('https://apps.standard.tech/trade')
  },
    { hoverText: "To the DEX!",
    distance: 50, }
)
)



const art1 = new Entity()
const shapeComponent1 = new NFTShape(
  "ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/514617"
)
art1.addComponent(shapeComponent1)
art1.addComponent(
  new Transform({
    position: new Vector3(220, 22, 40), scale: new Vector3(20, 20, 20), rotation: Quaternion.Euler(0, 90, 0)
  })
)
art1.addComponent(
  new OnPointerDown(() => {
        openNFTDialog(
          "ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/514617",
          "Sup bro!"
    )
  },
    { hoverText: "Sup!",
    distance: 50, }
)
)
engine.addEntity(art1)

const art2 = new Entity()
const shapeComponent2 = new NFTShape(
  "ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/515837"
)
art2.addComponent(shapeComponent2)
art2.addComponent(
  new Transform({
    position: new Vector3(184, 22, 4), scale: new Vector3(20, 20, 20), rotation: Quaternion.Euler(0, 180, 0)
  })
)
art2.addComponent(
  new OnPointerDown(() => {
        openNFTDialog(
          "ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/515837",
          "Sup bro!"
    )
  },
    { hoverText: "Sup!",
    distance: 50, }
)
)
engine.addEntity(art2)

const art3 = new Entity()
const shapeComponent3 = new NFTShape(
  "ethereum://0x60f80121c31a0d46b5279700f9df786054aa5ee5/885407"
)
art3.addComponent(shapeComponent3)
art3.addComponent(
  new Transform({
    position: new Vector3(184, 22, 76), scale: new Vector3(20, 20, 20), rotation: Quaternion.Euler(0, 0, 0)
  })
)
art3.addComponent(
  new OnPointerDown(() => {
        openNFTDialog(
          "ethereum://0x60f80121c31a0d46b5279700f9df786054aa5ee5/885407",
          "Sup bro!"
    )
  },
    { hoverText: "Sup!",
    distance: 50, }
)
)
engine.addEntity(art3)

const art4 = new Entity()
const shapeComponent4 = new NFTShape(
  "ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/515830"
)
art4.addComponent(shapeComponent4)
art4.addComponent(
  new Transform({
    position: new Vector3(148, 22, 40), scale: new Vector3(20, 20, 20), rotation: Quaternion.Euler(0, 270, 0)
  })
)
art4.addComponent(
  new OnPointerDown(() => {
        openNFTDialog(
          "ethereum://0xd07dc4262bcdbf85190c01c996b4c06a461d2430/515830",
          "Sup bro!"
    )
  },
    { hoverText: "Sup!",
    distance: 50, }
)
)
engine.addEntity(art4)

const nft1 = new Entity()
const shapeComponen1 = new NFTShape(
  "ethereum://0x2a187453064356c898cae034eaed119e1663acb8/22373925882915919619496009708338558626378207558949455286532190530141407025761"
)
nft1.addComponent(shapeComponen1)
nft1.addComponent(
  new Transform({
    position: new Vector3(220, 54, 40), scale: new Vector3(20, 20, 20), rotation: Quaternion.Euler(0, 90, 0)
  })
)
nft1.addComponent(
  new OnPointerDown(() => {
        openNFTDialog(
          "ethereum://0x2a187453064356c898cae034eaed119e1663acb8/22373925882915919619496009708338558626378207558949455286532190530141407025761"
    )
  },
    { hoverText: "WWW.DCL.ETH!",
    distance: 50, }
)
)
engine.addEntity(nft1)

const nft2 = new Entity()
const shapeComponen2 = new NFTShape(
  "ethereum://0x2a187453064356c898cae034eaed119e1663acb8/30538060810248286337197368324767358068684471101195312913479801860464099390851"
)
nft2.addComponent(shapeComponen2)
nft2.addComponent(
  new Transform({
    position: new Vector3(184, 54, 4), scale: new Vector3(20, 20, 20), rotation: Quaternion.Euler(0, 180, 0)
  })
)
nft2.addComponent(
  new OnPointerDown(() => {
        openNFTDialog(
          "ethereum://0x2a187453064356c898cae034eaed119e1663acb8/30538060810248286337197368324767358068684471101195312913479801860464099390851"
    )
  },
    { hoverText: "360!",
    distance: 50, }
)
)
engine.addEntity(nft2)

const nft3 = new Entity()
const shapeComponen3 = new NFTShape(
  "ethereum://0x2a187453064356c898cae034eaed119e1663acb8/2296137122236012602773389216365011483172108331892633386099895240950329372009"
)
nft3.addComponent(shapeComponen3)
nft3.addComponent(
  new Transform({
    position: new Vector3(184, 54, 76), scale: new Vector3(20, 20, 20), rotation: Quaternion.Euler(0, 0, 0)
  })
)
nft3.addComponent(
  new OnPointerDown(() => {
        openNFTDialog(
          "ethereum://0x2a187453064356c898cae034eaed119e1663acb8/2296137122236012602773389216365011483172108331892633386099895240950329372009",
          "Sup bro!"
    )
  },
    { hoverText: "Gov!",
    distance: 50, }
)
)
engine.addEntity(nft3)

const nft4 = new Entity()
const shapeComponen4 = new NFTShape(
  "ethereum://0x2a187453064356c898cae034eaed119e1663acb8/111408104801650988245763821523320138181560109939728249419324308590678131031398"
)
nft4.addComponent(shapeComponen4)
nft4.addComponent(
  new Transform({
    position: new Vector3(148, 54, 40), scale: new Vector3(20, 20, 20), rotation: Quaternion.Euler(0, 270, 0)
  })
)
nft4.addComponent(
  new OnPointerDown(() => {
        openNFTDialog(
          "ethereum://0x2a187453064356c898cae034eaed119e1663acb8/111408104801650988245763821523320138181560109939728249419324308590678131031398",
          "Sup bro!"
    )
  },
    { hoverText: "sup!",
    distance: 50, }
)
)
engine.addEntity(nft4)
