import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";
import "../styles/Items.css";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import items from "../assets/blogs.jpg";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { fontSize } from '@mui/system';

import { useSearchParams } from "react-router-dom";
import Axios from 'axios';

const Items = () => {
  const [open, setOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [ethAmount, setEthAmount] = useState("");
  const [paymentDone, setPaymentDone] = useState(false);
  const [store, setStore] = useState("");

  const [searchParams] = useSearchParams();
  console.log(searchParams.get('id')); 

  const getStore = async () => {
    await Axios.post('https://anyhelper.herokuapp.com/stores/get-store',{id : searchParams.get('id')}
    ).then((res) => {
      console.log(res);
      setStore(res.data);
      setWalletAddress(res.data.walletAddress)
    }).catch((e) => {
      console.log(e);
    })
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPaymentDone(false);
  };

  const handlePay = async () => {    
    try {
      if(!window.ethereum) 
        throw new Error("No crypto wallet found. Please install it.");

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(walletAddress);
      const tx = await signer.sendTransaction({
        to: walletAddress,
        value: ethers.utils.parseEther(ethAmount)
      })
      console.log("Payment done: " + JSON.stringify(tx));
      setPaymentDone(true);
    } catch(e) {
      console.log(e.message);      
    }    
  };

  useEffect(() => {
    getStore();
  }, []) 
  

  return (
    <>    
      {/* Dialog Box */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Send ETH Payment</DialogTitle>
        <DialogContent>          
          { paymentDone == false && 
              <div class="payment-not-done">
                <DialogContentText>
                  Enter the Wallet Address the ETH Amount you want to send
                </DialogContentText>          
                <TextField
                  autoFocus
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  margin="dense"
                  id="address"
                  label="Wallet Address"
                  type="text"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  autoFocus
                  onChange={(e) => setEthAmount(e.target.value)}
                  margin="dense"
                  id="amount"
                  label="Amount"
                  type="amount"
                  fullWidth
                  variant="standard"
                />         
              </div>
          }
          { paymentDone && 
              <div class="payment-done">
                <DialogContentText>
                  The payment has been initiated
                </DialogContentText>          
                <Button onClick={handleClose}>
                  Ok
                </Button>
              </div>
          }          
        </DialogContent>
        <DialogActions>
          { paymentDone == false && <Button onClick={handleClose}>Cancel</Button> }
          { paymentDone == false && <Button onClick={handlePay}>Pay</Button> }
        </DialogActions>
      </Dialog>

      {/* Main UI */}
      <Navbar />
      <div className="items">
        <h1>List of Plumbing Items </h1>
        <div className="items_list">
            <div className="row">
              {store.items?.map((item) => {
                return (
                  <div className="col-lg-2 mb-2">
                  <div className="items_card">
                      <img src={items} alt="" className="items_image" />
                      <div className="items_carddetails">
                          <h5 className="items_para">{item}</h5>  
                          <button className="items_service_button" onClick={handleClickOpen}>Buy</button>                            
                      </div>                  
                  </div>
              </div>
                )
              })}
            
            </div>
        </div>
        
      </div>
      <Footer />
    </>
  )
}

export default Items
