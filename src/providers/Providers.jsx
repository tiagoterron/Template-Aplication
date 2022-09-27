import Web3Modal from "web3modal";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import React, { useEffect, useState } from 'react';
import { networkParams } from '../networks/Networks';

import { toHex, truncateAddress } from '../utils/functions.js';



const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "Web 3 Modal Demo", // Required
      infuraId: "e8ca118121d84863b1c8c877f07f9f4e" // Required unless you provide a JSON RPC url; see `rpc` below
    }
  },
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: "e8ca118121d84863b1c8c877f07f9f4e", // required
      bridge: "http://192.178.110:3000"
    }
  }
};


const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  disableInjectedProvider: false,
  providerOptions // required
});


    // const [provider, setProvider] = useState();
    // const [library, setLibrary] = useState();
    // const [account, setAccount] = useState();
    // const [signature, setSignature] = useState("");
    // const [error, setError] = useState("");
    // const [chainId, setChainId] = useState();
    // const [network, setNetwork] = useState();
    // const [message, setMessage] = useState("");
    // const [signedMessage, setSignedMessage] = useState("");
    // const [verified, setVerified] = useState();

    export const connectWallet = async () => {
        try {
          const provider = await web3Modal.connect();
          const library = new ethers.providers.Web3Provider(provider);
          const accounts = await library.listAccounts();
          const network = await library.getNetwork();
          console.log(library)
          // setProvider(provider);
          // setLibrary(library);
          // if (accounts) setAccount(accounts[0]);
          // setChainId(network.chainId);
        } catch (error) {
          // setError(error);
        }
      };

    // const handleNetwork = (e) => {
    //     const id = e.target.value;
    //     setNetwork(Number(id));
    //   };
    
    //   const handleInput = (e) => {
    //     const msg = e.target.value;
    //     setMessage(msg);
    //   };
    
    //   const switchNetwork = async () => {
    //     try {
    //       await library.provider.request({
    //         method: "wallet_switchEthereumChain",
    //         params: [{ chainId: toHex(network) }]
    //       });
    //     } catch (switchError) {
    //       if (switchError.code === 4902) {
    //         try {
    //           await library.provider.request({
    //             method: "wallet_addEthereumChain",
    //             params: [networkParams[toHex(network)]]
    //           });
    //         } catch (error) {
    //           setError(error);
    //         }
    //       }
    //     }
    //   };

    //   const signMessage = async () => {
    //     if (!library) return;
    //     try {
    //       const signature = await library.provider.request({
    //         method: "personal_sign",
    //         params: [message, account]
    //       });
    //       setSignedMessage(message);
    //       setSignature(signature);
    //     } catch (error) {
    //       setError(error);
    //     }
    //   };
    
    //   const verifyMessage = async () => {
    //     if (!library) return;
    //     try {
    //       const verify = await library.provider.request({
    //         method: "personal_ecRecover",
    //         params: [signedMessage, signature]
    //       });
    //       setVerified(verify === account.toLowerCase());
    //     } catch (error) {
    //       setError(error);
    //     }
    //   };
    
    //   const refreshState = () => {
    //     setAccount();
    //     setChainId();
    //     setNetwork("");
    //     setMessage("");
    //     setSignature("");
    //     setVerified(undefined);
    //   };
    
    //   const disconnect = async () => {
    //     await web3Modal.clearCachedProvider();
    //     refreshState();
    //   };

    //   useEffect(() => {
    //     if (web3Modal.cachedProvider) {
    //       connectWallet();
    //     }
    //   }, []);
    
    //   useEffect(() => {
    //     if (provider?.on) {
    //       const handleAccountsChanged = (accounts) => {
    //         console.log("accountsChanged", accounts);
    //         if (accounts) setAccount(accounts[0]);
    //       };
    
    //       const handleChainChanged = (_hexChainId) => {
    //         setChainId(_hexChainId);
    //       };
    
    //       const handleDisconnect = () => {
    //         console.log("disconnect", error);
    //         disconnect();
    //       };
    
    //       provider.on("accountsChanged", handleAccountsChanged);
    //       provider.on("chainChanged", handleChainChanged);
    //       provider.on("disconnect", handleDisconnect);
    
    //       return () => {
    //         if (provider.removeListener) {
    //           provider.removeListener("accountsChanged", handleAccountsChanged);
    //           provider.removeListener("chainChanged", handleChainChanged);
    //           provider.removeListener("disconnect", handleDisconnect);
    //         }
    //       };
    //     }
    //   }, [provider]);

 