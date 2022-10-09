import {Nav} from "../components/Nav"
import {useState} from 'react'
import { Recommendation } from '../components/Recommendation'


export const App = () => {
    const [recommendedCrypto, setRecommendedCrypto] = useState(false)

    const getRecommendation = async () => {
        setRecommendedCrypto(true)
    }

    return (
        <div className='flex justify-center items-center h-screen bg-primary'>
            <Nav />
            <div className="flex flex-col justify-center items-center w-full h-1/2 mx-64 text-tprimary font-semibold">
                <p className="text-4xl font-bold mb-8">Speak to the algorithm</p>
                <div className="flex flex-col justify-center items-center bg-dark rounded-lg p-5 h-72">
                    <div className="relative flex flex-row bg-light rounded-lg w-128 h-28 pt-3 px-8 hover:outline outline-1">
                        <div>
                            <label for="broker">Select your exchange</label>
                            <select id="broker" className="bg-gray-100 rounded-md p-2 border border-gray-200 
                                focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary 
                                focus:border-transparent transition ease-linear text-black mt-2 w-40">
                                <option>MooMoo</option>
                                <option>Tiger</option>
                            </select>
                        </div>
                        <div>
                            <label for="exchangeId">Input your exchange ID</label>
                            <input id="exchangeId" className="bg-gray-100 rounded-md p-2 border border-gray-200 
                                focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent 
                                    transition ease-linear text-black mt-2" type="numeric"></input> 
                        </div>
                    </div>
                    <button className="absolute flex justify-center items-center rounded-lg  bg-secondary w-56 h-8 z-40 py-3 hover:outline outline-1" onClick={getRecommendation}>
                        Get recommendation  
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 stroke-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                        </svg>
                    </button>
                    <div className="flex justify-center items-center bg-light rounded-lg w-128 h-28 px-8 mt-2
                        hover:outline outline-1">
                        {recommendedCrypto ? <Recommendation /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
  };