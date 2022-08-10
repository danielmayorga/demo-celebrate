import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import confetti from 'canvas-confetti';
import { useEffect, useState } from 'react';

function NavBar(){
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            QR Code
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function App() {
  const [loginToken, setLoginToken] = useState("");

  useEffect(() =>{
    const params = new URLSearchParams(window.location.search);
    setLoginToken(params.get("loginToken")??"no login token");
  },[setLoginToken]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar/>
      <Box>
        <p style={{textAlign: "center"}}>Login Token - {loginToken}</p>
        <div style={{display: "flex", justifyContent: "center", alignItems:"center", minHeight: "50vh"}}>
          <div><Button variant="outlined" onClick={() => confetti()}>Celebrate</Button></div>
        </div>
      </Box>
    </Box>
  );
}

export default App;
