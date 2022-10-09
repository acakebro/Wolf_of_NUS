import {Nav} from "../components/Nav"
import {Link} from "react-router-dom"

export const Home = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-primary'>
            <Nav/>
            <div className='flex flex-col justify-center items-center text-tprimary'>
            <p className=' text-5xl font-bold pb-3'>Your Gateway to
                <b className="text-secondary"> Web 3.0</b></p>
            <p className="text-tsecondary text-lg mb-6">Get recommended cryptocurrencies 
                based on your traditional web2 portfolio</p>
            <Link to="recommend" className="">
                <button className="rounded-lg bg-secondary font-bold px-3 py-1 text-xl">Get Started</button>
            </Link>
            </div>
        </div>
    );
  };