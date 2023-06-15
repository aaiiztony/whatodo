import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import contractABI from '../contractABI.json';

const AddListToBlockchain = ({listName}:any) => {
    const { config } = usePrepareContractWrite({
        address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
        abi: contractABI,
        functionName: 'addList',
        args: [listName],
        enabled: Boolean(listName),
    })
    const { write, data } = useContractWrite(config);
    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })
  return (
    <div>
        <button className='m-2 border rounded-md w-max px-4 py-2 bg-blue-700 border-none' onClick={()=>write} disabled={ !write || isLoading }>
                    {isLoading ? 'Adding ListName...' : 'Secure in Blockchain'}
                </button>
                {isSuccess && (
                    <div>
                        Succesfully added Listname!
                        <div>
                            <a href={`https://mumbai.polyscan.com/tx/${data?.hash}`}>PolyScan Mumbai</a>
                        </div>
                    </div>
                )}
    </div>
  )
}

export default AddListToBlockchain
