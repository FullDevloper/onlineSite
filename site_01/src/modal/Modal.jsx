import * as React from 'react';
import { Box,Typography,Modal, Stack, Button } from '@mui/material';
// import { useSelector } from '../redux/store';
const style = {
    position: 'absolute',
    top:310,
    left:730,

    transform: 'translate(-50%, -50%)',
    width: "80%",
    height:"90%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    display:'flex',
    p: 4,
  };
  const Modale =({open,handleClose,data,img}) =>{
    // const {learn}= useSelector((state)=>state.learn)
    console.log(data);
// React.useEffect(()=>{

//   return()=>
//   {
    
//   }
// },[open,data])
  
    return (
      <div>

        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>

          <Box style={{}}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
   
            <h1>{ data && data.LearnName}</h1>
             
         
             </Typography>
             <Stack paddingTop={2}>
             <img src={img} alt='' style={{width:"70%",height:"auto"}}/>
             </Stack>
       
          </Box>
      
          <Box>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 3 }}>
          {data && data.LearnDescription}
        </Typography>
         <Button>Худалдаж авах</Button>
          </Box>
       
          </Box>
        </Modal>
      </div>
    );
  }
  export default Modale