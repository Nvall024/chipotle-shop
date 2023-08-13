import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { riceMenu, proteinMenu, toppingsMenu } from './lib/MenuItems';

function Menu() {
  return (
    <Grid item container direction='column' sx={{ backgroundColor: "white", flexGrow: 2}}>
        <Grid item sx={{mt:"2rem"}}>
          <Typography variant='h2' sx={{color:"#AB2218"}}>Welcome to Chipotle</Typography>
          <Typography>Menu Items</Typography>
        </Grid>
        <Grid item container direction="row">
          <Grid item direction="column" sx={{flexGrow: 1, ml:"2rem"}}>
            <Typography sx={{ml:"1rem"}}>Protein</Typography>
             {proteinMenu.map((item: string) => 
             <Box sx={{border: "0.25px solid", m:"1rem", p:"1rem"}}>
              <Typography>{item}</Typography>
             </Box>
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
           <Grid item direction="column" sx={{flexGrow: 1, mr:"2rem"}}>
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