import { configureChains, createConfig } from 'wagmi'
import {polygon} from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
 
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygon],
  [publicProvider()],
)
export const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
})