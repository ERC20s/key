import utils from '../node_modules/decentraland-ecs-utils/index'
import * as RestrictedActions from '@decentraland/RestrictedActions'
import { movePlayerTo } from '@decentraland/RestrictedActions'
import { World } from './world'
import { world } from './game'


export class UNO extends Entity {
  
  id: number
  socket: WebSocket
  
  table = new Entity()

  isPlaying: boolean
  
  constructor(id: number, transform: Transform, socket: WebSocket, world: World) {
    super()
    this.id = id
    this.socket = socket
    this.isPlaying = false

    engine.addEntity(this)
    this.addComponent(transform)
    this.initTable()
  }
  
  initTable() {
    this.table.addComponent(new GLTFShape("models/table.glb"));
    this.table.addComponent(
      new OnPointerDown(() => {
        this.isPlaying = true
        world.setUiVisibility(true)
      }, { 
        hoverText: "Click to start",
        distance: 50, })
    )
    this.table.setParent(this)


  }
}