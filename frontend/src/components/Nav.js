import {ConnectButton} from '@rainbow-me/rainbowkit';

export const Nav = () => {
    return (
      <div className="fixed w-full top-0 flex flex-row justify-between items-center px-36 pt-8">
        <div className='text-tprimary'>
          App Name
        </div>
        <ConnectButton accountStatus="address" chainStatus="name" showBalance={false}/>
      </div>
    );
  };