# Key

NODEJS 8+

npm install -g decentraland

git clone https://github.com/ERC20s/key

cd /key

dcl start

# Tasks

Link wss to the scene with: https://decentraland.org/blog/tutorials/servers-part-3/

Create a place to store data between players like: https://www.nginx.com/blog/websocket-nginx/

Then add some game logic for UNO! https://www.youtube.com/watch?v=sWoSZmHsCls&t=46s

![How it would work](https://github.com/ERC20s/key/blob/main/howitworks.png)

Convert all users ethereum key to EVM.

<details>
<summary>Get ethereum address with</summary>

<pre>
import { getUserPublicKey } from "@decentraland/Identity"

const publicKeyRequest = executeTask(async () => {
  const publicKey = await getUserPublicKey()
  log(publicKey)
  return publicKey
})
</pre>
<br>
Then convert the getUserPublicKey to an EVM address with https://github.com/polkadot-js/common/blob/9fc57a23e898a52afda1ea21c077481bcafa5a49/packages/util-crypto/src/address/addressToEvm.spec.ts
<br><br>
</details>
