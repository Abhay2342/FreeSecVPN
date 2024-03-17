import React from 'react'
import '../styles/home.css'
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function home() {
  return (
    <>
    <div className='Home'>
    <h3>Connect to a VPN server and browse the internet securely and anonymously.</h3>
    <div className='HomePage'>
    <div className='LeftFloat'>
        <h2>Free and Secure VPN by</h2>
        <h1>FreeSecVPN</h1>
    </div>
    <div className='RightFloat'>
        <h2>Connect to a VPN server</h2>
        <Button variant="outline-warning"  className="rounded-circle">Connect</Button>
        
      <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton id="tbg-radio-1" value={1}>
          India  (KOlKATA)
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2}>
          USA  (New York)
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3}>
          Germany  (Frankfurt)
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
    </div>
    </div>
    </>
  )
}

export default home
