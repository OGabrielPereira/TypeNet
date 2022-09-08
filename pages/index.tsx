import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div >
      <div className='flex justify-center'>
        <h1 className=' text-3xl font-bold mt-10 text-white'>TypeNet</h1>
      </div>

      <div className="flex justify-center gap-2 mt-10">
          <input
            type="text"
            className="flex p-4 pl-6 w-60 text-sm rounded border text-white bg-black"
            placeholder="Endereço IP"
            />
          <select
            className="bg-black border text-white text-sm rounded flex justify-center items-center p-2.5"
            > 
            <option>CIDR</option>
            <option>/24</option>
            <option>/25</option>
            <option>/26</option>  
            <option>/27</option>
            <option>/28</option>
            <option>/29</option>
            <option>/30</option>
            <option>/31</option>


        </select>

      </div>
    </div>
  )
}

export default Home
