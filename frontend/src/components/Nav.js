import {ConnectButton} from '@rainbow-me/rainbowkit';
import { Link } from 'react-router-dom';
import logo from '../assets/MASH.png'

export const Nav = () => {
    return (
      <div className="fixed w-full top-0 flex flex-row justify-between items-center px-44 pt-8">
        <Link to="/">
          <div className='text-tprimary text-2xl font-bold'>
            {/* M<b className="text-blue-500">3</b>SH */}
            <img src={logo} alt="yo" className='w-52'></img>
          </div>
        </Link>
        
        <ConnectButton accountStatus="address" chainStatus="name" showBalance={false}/>
      </div>
    );
  };