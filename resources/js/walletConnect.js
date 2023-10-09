import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi'

import { mainnet, arbitrum } from '@wagmi/core/chains'

// 1. Define constants
const projectId = '7b2a1c2e578aa48b367120a5c13c7364'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
const modal = createWeb3Modal({ wagmiConfig, projectId, chains })


//main.js
import { watchAccount, disconnect, getAccount } from '@wagmi/core'

function connect() {
  if (getAccount().isConnected) {
    disconnect()
  } else {
    modal.open()
  }
}

const btnEl = document.getElementById('btn')
const userEl = document.getElementById('user')

btnEl.addEventListener('click', connect)

// listening for account changes
watchAccount(account => {
  userEl.innerText = account.address ?? ''
  if (account.isConnected) {
    btnEl.innerText = 'Disconnect'
  } else {
    btnEl.innerText = 'Connect'
  }
})
