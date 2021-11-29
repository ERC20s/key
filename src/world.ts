import utils from '../node_modules/decentraland-ecs-utils/index'
import * as RestrictedActions from '@decentraland/RestrictedActions'
import { movePlayerTo } from '@decentraland/RestrictedActions'
import { SingleCardUI } from './singleCardUI'

export class World extends Entity {

  socket: WebSocket

  wall = new Entity()

  socialGithub = new Entity()
  socialDiscord = new Entity()
  socialTelegram = new Entity()

  polka = new Entity()

  uiCanvas = new UICanvas()
  playerCards: SingleCardUI[] = []

  uiElements: UIShape[] = []

  constructor(transform: Transform, socket: WebSocket) {
    super()
    this.socket = socket
    engine.addEntity(this)
    this.addComponent(transform)
    this.initUI()
    this.initWall()
    this.initSocial()
    this.initVideo()
    this.initExternal()

  }

  initUI() {
    this.uiElements.push(this.uiCanvas)
    for(let i = 0; i < 3; i++) {
      let randIndex = Math.floor(Math.random() * 1000) % 107
      log(randIndex)
      let card: SingleCardUI = new SingleCardUI( randIndex, this.uiCanvas)
      card.vAlign = "bottom"
      card.hAlign = "left"
      card.positionX = 10 + i * 50
      card.positionY = 10
      this.playerCards.push(card)
      this.uiElements.push(card)
    }
    this.setUiVisibility(false)
  }

  setUiVisibility (visible: boolean) {
    for(let i = 0; i < this.uiElements.length; i++) {
      this.uiElements[i].visible = visible
    }
  }

  initWall() {
    this.wall.addComponent(new GLTFShape("models/walls6.glb"))
    this.wall.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
    this.wall.setParent(this)
  }

  initSocial() {
    /** Github */
    this.socialGithub.addComponent(new GLTFShape("models/github.glb"))
    this.socialGithub.addComponent(new Transform({ position: new Vector3(30, 8, 78), scale: new Vector3(3, 3, 1), rotation: Quaternion.Euler(0, 0, 0) }))
    this.socialGithub.addComponent(
      new OnPointerDown(() => {
        openExternalURL('https://github.com/ERC20s/key')
      }, {
        hoverText: 'Check out our github',
        distance: 60
      })
      )
    this.socialGithub.setParent(this)

    this.socialDiscord.addComponent(new GLTFShape("models/discord.glb"))
    this.socialDiscord.addComponent(new Transform({ position: new Vector3(15, 8, 78), scale: new Vector3(3, 3, 1), rotation: Quaternion.Euler(0, 0, 0) }));
    this.socialDiscord.addComponent(
      new OnPointerDown(() => {
        openExternalURL('https://discord.gg/DdjsQpuEuH')
      }, {
        hoverText: 'Check out our discord community',
        distance: 60
      })
    )
    this.socialDiscord.setParent(this)

    this.socialTelegram.addComponent(new GLTFShape("models/telegram.glb"))
    this.socialTelegram.addComponent(new Transform({ position: new Vector3(45, 8, 78), scale: new Vector3(3, 3, 1), rotation: Quaternion.Euler(0, 0, 0) }));
    this.socialTelegram.addComponent(
      new OnPointerDown(() => {
        openExternalURL('https://t.me/unofficialASTAR')
      }, {
        hoverText: 'Check out our Telegram community',
        distance: 60
      })
    )
    this.socialTelegram.setParent(this)
  }

  initVideo() {

  }

  initPolka() {

  }

  initExternal() {
    const external1 = new Entity();
    const external2 = new Entity();
    const external3 = new Entity();
    external1.addComponent(new GLTFShape("models/astar2.glb"))
    external1.addComponent(new Transform({ position: new Vector3(15, 8, 2), scale: new Vector3(6, 6, 1), rotation: Quaternion.Euler(0, 0, 0) }))
    external1.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://crowdloan.astar.network/?referral=1Hi73C8EuTjhJ2MsSppYH2qTbQFbJHrG9E9cUhzorYZHZ97#/")
      }, {
        hoverText: "Lock DOT through ASTAR to get an NFT",
        distance: 60
      })
    )
    external1.setParent(this)

    external2.addComponent(new GLTFShape("models/acala.glb"))
    external2.addComponent(new Transform({ position: new Vector3(30, 8, 2), scale: new Vector3(6, 6, 1), rotation: Quaternion.Euler(0, 0, 0) }))
    external2.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://acala.network/acala/join-acala?ref=0x460d775411d658e708fefe35ad4f0ba2d59aef2e59a22e334bb2aad2e983f86e")
      }, {
        hoverText: "Acala won the first parachain slot!",
        distance: 60
      })
    )
    external2.setParent(this)

    external3.addComponent(new GLTFShape("models/moonbeam.glb"))
    external3.addComponent(new Transform({ position: new Vector3(45, 8, 2), scale: new Vector3(6, 6, 1), rotation: Quaternion.Euler(0, 0, 0) }))
    external3.addComponent(
      new OnPointerDown(() => {
        openExternalURL("https://crowdloan.parallel.fi/#/auction/contribute/polkadot/2004?referral=0xe409a59954c942fd4d6009c5042e112c63fa03e51fe644037c109eadafd258a2")
      }, {
        hoverText: "Moonbeam won the 2nd parachain slot!",
        distance: 60
      })
    )
    external3.setParent(this)


  }
}
