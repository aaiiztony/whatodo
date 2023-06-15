import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsName,
  } from 'wagmi'

const WalletConnect = ({setConnected}:{setConnected:(connect:boolean)=>void}) => {
  //wagmi hooks to check if the user is connected or not, and destructure the address of the user
    const { address, connector, isConnected } = useAccount();
    const { data: ensName } = useEnsName({ address });
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
    const { disconnect } = useDisconnect();
  
    if (isConnected) {
      return (
        <div className='flex flex-col gap-4'>
          <div>Connected to {connector?connector.name:'Not Found'}</div>
          <div>{ensName ? `${ensName} (${address})` : address}</div>
          <button className='outline rounded-sm' onClick={()=>disconnect()}>Disconnect</button>
          <button className='outline rounded-sm bg-blue-300 text-black' onClick={()=>setConnected(true)}>Homepage</button>
        </div>
      )
    }
  
    return (
      <div>
        {connectors.map((connector) => (
          <button 
          className='outline rounded-sm py-2 px-4'
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            {`Connect to ${connector.name}`}
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