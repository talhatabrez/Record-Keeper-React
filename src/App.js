import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import Fields from './components/Fields';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


function App() {

  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
      setData([...data, {name, email}]) //here ... represents spread operator for implementing and not overriding the other values
      //name : name,
      //email : email
      //can also use name, email (shortcut)
      setName("");
      setMail(""); 
  }

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }

  return (
    <div className="App">
      <Header />
      <div className='form'>
        <Stack direction = "row" spacing = {2}>
          <TextField 
            value = {name} 
            onChange= {(event) => setName(event.target.value)} 
            id="outlined-basic" 
            label="Name" 
            variant="outlined" />
          <TextField 
            value = {email} 
            onChange= {(event) => setMail(event.target.value)} 
            id="outlined-basic" 
            label="Email" 
            variant="outlined" />
          <Button onClick={addData} color = "success" variant="contained">
            <CheckIcon />
          </Button>
        </Stack>

        <div className='data'>
          <div className='data_values'>
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Delete</h4>
          </div>
          {
            data.map((element, index) =>{
              return(
                <div key = "index" className='data_values'>
                  <h4>{element.name}</h4>
                  <h4>{element.email}</h4>
                  <Stack>
                      <Button onClick={() => removeItem(index)} variant = "contained" color = "error">
                        <RemoveCircleOutlineIcon />
                      </Button> 
                  </Stack>      
                </div>
              )
            })
          }
        </div> 
      </div>
    </div>
  );
}

export default App;
