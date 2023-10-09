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

 createWeb3Modal({
    wagmiConfig, projectId, chains,
})

