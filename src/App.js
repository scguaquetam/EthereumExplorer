import { Alchemy, Network } from 'alchemy-sdk';
import React, { useEffect, useState } from 'react';

import './App.css';
import Header from './components/Header';
import LastBlockInfo from './components/LastBlockInfo';
import SearchTx from './components/SearchTx';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState(null);
  const [blockInfo, setBlockInfo] = useState(null);
  useEffect(() => {
    getBlockNumber();
  }, []);
  const getBlockNumber = async () => {
    try {
      const blockNumber = await alchemy.core.getBlockNumber();
      console.log(blockNumber);
      setBlockNumber(blockNumber);
      const blockInfo = await alchemy.core.getBlock(blockNumber);
      console.log(blockInfo);
      setBlockInfo(blockInfo);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className='container'>
      <Header />
      <SearchTx/>
      <LastBlockInfo
        blockInfo={blockInfo}
      />
    </div>
  )
}

export default App;
