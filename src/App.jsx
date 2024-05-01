import { useState } from 'react'
import QRCode from 'react-qr-code'
import './App.css'


function App() {
  const [url, setUrl] = useState('')
  const [show,setShow] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(url){
      setShow(true)
    }
    
  }

  return (
    <>
      <div className='App' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'5px'}}>
        <h1>QR CODE GENERATOR</h1>
        <input className='input' type="url" name='url' value={url} onChange={(e)=>setUrl(e.target.value)} />
        <input className='input' type="submit" value="GENERATE QR CODE" onClick={handleSubmit} />
        {
          show && (
            <QRCode value={url}/>
          )
        }

        
      </div>
    </>
  )
}

export default App
