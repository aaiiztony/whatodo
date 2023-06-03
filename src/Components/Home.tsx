import { WalletOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { NoteContainer } from "."
const Home = () => {
  return (
    <div className='w-full h-full'>
      <div className="flex justify-between items-center m-2">
        <div className="ml-6 mt-3">
          <span>Section</span>
          <div className="h-[1px] bg-[#3772FF]"/>
        </div>
        <Button type="ghost" className="outline-none flex justify-center items-center h-9 mr-2" style={{ backgroundColor: '#191B20', borderRadius: '12px' }} ghost>
          <WalletOutlined className="pr-2" style={{ color: "#3772FF" }} />
          <p className="pr-5 text-white">0.2 $XYZ</p>
          <div className="px-2 rounded-[8px] h-3/4 flex justify-center items-center text-center text-blue-600 bg-[#A3E3FF]">Tier 1</div>
        </Button>
      </div>
      <div className="h-1" style={{ backgroundColor: '#242731' }} />
      <NoteContainer />
    </div>
  )
}

export default Home