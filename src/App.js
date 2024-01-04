import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {

  const [intrest, setIntrest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [isprinciple, setIsprinciple] = useState(true)
  const [israte, setIsrate] = useState(true)
  const [isyear, setIsyear] = useState(true)

  const getValidate = (e) => {
    const { name, value } = e.target
    /*     console.log(name, value); */
    /* console.log(!!value.match(/^[0-9]+$/)); */// to convert into boolearn
    if (!!value.match(/^[0-9]+$/)) {
      if (name === 'principle') {
        setPrinciple(value)
        setIsprinciple(true)
      }
      else if (name === 'rate') {
        setRate(value)
        setIsrate(true)
      }
      else {
        setYear(value)
        setIsyear(true)

      }
    }
    else {
      if (name === 'principle') {
        setPrinciple(value)
        setIsprinciple(false)
      }
      else if (name === 'rate') {
        setRate(value)
        setIsrate(false)
      }
      else {
        setYear(value)
        setIsyear(false)
      }

    }




  }

  const handleCalculate = (e) => {
    e.preventDefault()
    if (!principle || !rate || !year) {
      alert('Please fill all the fields')
    }
    else {
      // alert('submited')
      setIntrest(principle * rate * year / 100)
    }
  }




  const handleReaset = (e) => {
    setIntrest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)

  }



  return (
    <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div className='bg-light p-5 rounded'>
        <h1>simple intrest App!</h1>
        <p>Calculate simple intrest Easily</p>

        <div className='d-flex justify-content-center align-items-center w-100 p-3 flex-column rounded mt-4 bg-warning shadow '>
          <h1>₹{''}{intrest}</h1>
          <p>total simple intrest</p>
        </div>

        <form className='mt-4'>
          <div className='mb-3'>
            <TextField name='principle' value={principle || ""} onChange={(e) => getValidate(e)} className='w-100' id="outlined-basic" label="₹ Priciple Amount" variant="outlined" />
          </div>
          {!isprinciple && <div>
            <p className='text-danger fw-bolder'>invalid input</p>
          </div>}

          <div className='mb-3'>
            <TextField name='rate' value={rate || ""} onChange={(e) => getValidate(e)} className='w-100' id="outlined-basic" label="Rate of Intrest (p.a)" variant="outlined" />
          </div>
          {!israte && <div>
            <p className='text-danger fw-bolder'>invalid input</p>
          </div>}


          <div className='mb-3'>
            <TextField name='year' value={year || ""} onChange={(e) => getValidate(e)} className='w-100' id="outlined-basic" label="Year (yr)" variant="outlined" />
          </div>

          {!isyear && <div>
            <p className='text-danger fw-bolder'>invalid input</p>
          </div>}

          <Stack direction="row" spacing={2}>
            <Button onClick={handleCalculate} disabled={isprinciple && israte && isyear ? false : true} className='bg-success' style={{ width: '200px', height: '50px' }} variant="contained">Calculate</Button>
            <Button onClick={handleReaset} style={{ width: '200px', height: '50px' }} variant="outlined">reset</Button>

          </Stack>

        </form>
      </div>
    </div>
  );
}

export default App;