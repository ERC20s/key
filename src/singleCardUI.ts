import utils from '../node_modules/decentraland-ecs-utils/index'
import * as RestrictedActions from '@decentraland/RestrictedActions'
import { movePlayerTo } from '@decentraland/RestrictedActions'

// DeckImage is 2389*2049
// Single card w=171px h=256

const CARD_IMG_WIDTH = 170.64
const CARD_IMG_HEIGHT = 256
const CARD_TEXTURE = new Texture('images/card_deck.png')

const CARD_UI_WIDTH = '80px'
const CARD_UI_HEIGHT = '120px'

export class SingleCardUI extends UIImage {
  
  id: number

  constructor(id: number, parent: UICanvas) {
    super(parent, CARD_TEXTURE)
    log(id % 8)
    log(14 - Math.floor(id / 8))
    this.id = id
    this.sourceTop = CARD_IMG_HEIGHT * (id % 8)
    this.sourceLeft = CARD_IMG_WIDTH * (13 - Math.floor(id / 8))
    this.sourceWidth = CARD_IMG_WIDTH
    this.sourceHeight = CARD_IMG_HEIGHT
    this.width = CARD_UI_WIDTH
    this.height = CARD_UI_HEIGHT
  }

  calculateLeft(id: number) {
    return CARD_IMG_WIDTH * (14 - id / 8)
  }

  calculateTop(id: number) {
    return CARD_IMG_HEIGHT * (id % 8 - 1)
  }
}