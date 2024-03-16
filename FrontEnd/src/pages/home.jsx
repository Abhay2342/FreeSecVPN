import React from 'react'
import '../styles/home.css'
function home() {
  return (
    <>
    <div className='HomePage'>
    <div className='LeftFloat'>
        <h2>Free and Secure VPN by</h2>
        <h1>FreeSecVPN</h1>
    </div>
    <div className='RightFloat'>
        <h2>Connect to a VPN server</h2>
        <h3>Connect to a VPN server and browse the internet securely and anonymously.</h3>
        <button>Connect</button>
    </div>
    </div>
    </>
  )
}

export default home
