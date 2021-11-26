import { getUserData } from '@decentraland/Identity'
import { getCurrentRealm } from '@decentraland/EnvironmentAPI'

// how often the lastKicker player sends updates to server, in seconds
const updateInterval = 5

export let userData: any
export let alteredUserName: any

const local: boolean = false

const server = local
? 'ws://localhost:8081/'
: 'wss://64-225-45-232.nip.io/broadcast/'

export async function joinSocketServer() {
  log('About to get the user data')
  userData = await getUserData()
  alteredUserName = userData.displayName + Math.floor(Math.random() * 10000)
  
  let realm = await getCurrentRealm() // { displayName: 'pepito' } //
  
  log(`You are in the realm: `, realm.displayName)
  // connect to websockets server
  const socket = await new WebSocket(server)
  
  socket.onmessage = async function (event) {
    try {
      const msg = JSON.parse(event.data)
      log(msg)
      
      // ignore messages from the same player
      if (msg.data.user == alteredUserName) {
        log('ignoring own message')
        return
      }

    } catch (error) {
      log(error)
    }
  }

  socket.onerror = (res) => {
    log('wss ERR', res)
  }

  socket.onclose = (res) => {
    log('DISCONNECTED FROM SERVER', socket.readyState)
  }

  return socket  
}