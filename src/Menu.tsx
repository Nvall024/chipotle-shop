import React from 'react';
import { Box, Grid, Typography, Checkbox } from '@mui/material';
import { riceMenu, proteinMenu, toppingsMenu } from './lib/MenuItems';

function Menu() {

  

  return (
    <Grid item container direction='column' sx={{ backgroundColor: "white", width:"700px", p:"2rem"}}>
        <Grid item sx={{py:"1rem"}}>
          <Typography variant='h5' sx={{color:"#AB2218"}}>Welcome to Chipotle</Typography>
        </Grid>
        <Grid item sx={{py:"1rem"}}>
          <Typography>Menu Items</Typography>
        </Grid>
        <Grid item container direction="row">
          <Grid item direction="column" sx={{flexGrow: 1}}>
            <Typography sx={{ml:"1rem"}}>Protein</Typography>
             {proteinMenu.map((item: string) => 
             <Grid item sx={{border: "0.25px solid", m:"1rem", p:"1rem"}}>
              <Checkbox/>
              <Typography>{item}</Typography>
             </Grid>
             )}
           </Grid>
          <Grid item direction="column" sx={{flexGrow: 1}}>
            <Typography sx={{ml:"1rem"}}>Rice</Typography>
            {riceMenu.map((item: string) => 
            <Box sx={{border: "0.25px solid", m:"1rem", p:"1rem"}}>
              <Typography>{item}</Typography>
             </Box>
            )}
          </Grid>
           <Grid item direction="column" sx={{flexGrow: 1}}>
            <Typography sx={{ml:"1rem"}}>Toppings</Typography>
             {toppingsMenu.map((item: string) => 
             <Box sx={{border: "0.25px solid", m:"1rem", p:"1rem"}}>
              <Typography>{item}</Typography>
             </Box>
             )}
           </Grid>
        </Grid>
     </Grid>
    
  );
}

export default Menu;