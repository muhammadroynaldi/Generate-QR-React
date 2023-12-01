import './App.css'
import { useState } from 'react'
import QRCode from 'qrcode.react'
// import logoUdinus from './assets/Logo-Udinus.png'

function App() {
  const [inputText, setInputText] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    setShowQRCode(false); // Hide QR code when text changes
  };

  const generateQRCode = () => {
    if (inputText.trim() !== '') {
      setShowQRCode(true); // Show QR code on button click
    } else {
      alert('Please enter url to generate a QR code.');
    }
  };

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='bg-blue-400 backdrop-blur-2xl p-5 flex flex-col items-center justify-center rounded-xl shadow-md'>
        <div className='w-28 h-28 my-5'>
          <img src="/src/assets/Logo-Udinus.png" alt="" />
        </div>
        <div className='mb-2'>
          <h1 className='text-xl font-bold'>Generate QR Code Mahasiswa</h1>
        </div>
        <div className='mb-2'>
          {/* <label htmlFor="textInput" className='m-2 text-lg'>Enter URL :</label> */}
          <input
            type="text"
            id="textInput"
            name="textInput"
            value={inputText}
            onChange={handleInputChange}
            className='rounded-lg p-2 w-full mb-2'
            placeholder='Enter URL'
          />
          <p className='text-slate-500'>Example : https://dinus.ac.id/mahasiswa/A1X.20XX.XXXXX</p>
        </div>
        <button className='bg-blue-200 rounded-xl p-2 mb-3 text-lg font-semibold hover:bg-blue-500' onClick={generateQRCode}>Generate</button>
        {showQRCode && inputText && (
          <QRCode value={inputText} size={200} />
        )}
        {!showQRCode && inputText && <p className='text-red-500'>Please click the button to generate a QR code.</p>}
      </div>
    </div>
  );
}

export default App
