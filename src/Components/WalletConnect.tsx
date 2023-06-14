import {
    useAccount,
    useConnect,
    useDisconnect,
    // useEnsAvatar,
    useEnsName,
  } from 'wagmi'

const WalletConnect = ({setConnected}:{setConnected:(connect:boolean)=>void}) => {
    const { address, connector, isConnected } = useAccount();
    const { data: ensName } = useEnsName({ address });
    // const { data: ensAvatar } = useEnsAvatar({ address });
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
    const { disconnect } = useDisconnect();
  
    if (isConnected) {
      return (
        <div>
          {/* <img src={ensAvatar} alt="ENS Avatar" /> */}
          <div>{ensName ? `${ensName} (${address})` : address}</div>
          <div>Connected to {connector?connector.name:'Not Found'}</div> <br />
          <button onClick={()=>disconnect}>Disconnect</button><br />
          <button onClick={()=>setConnected(true)}>Show Home</button>
        </div>
      )
    }
  
    return (
      <div>
        {connectors.map((connector) => (
          <button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            {connector.name}
            {!connector.ready && ' (unsupported)'}
            {isLoading &&
              connector.id === pendingConnector?.id &&
              ' (connecting)'}
          </button>
        ))}
  
        {error && <div>{error.message}</div>}
      </div>
    )
  }
 export default WalletConnect;