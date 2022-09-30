import { Button, Card, CardContent, Grid } from '@mui/material';
import React from 'react';
import data from "./data.json";

const Chinastate = () => {

    return (
        <Grid container spacing={3}> 
            { data.map((item,ind)=>{
                return(
                <Grid item xs={12}> 
                    <Card >
                        <CardContent class='mapdata'>
                            <h1>{item.state} </h1>
                            <h1>{item.population} </h1>
                            <Button > View City222 </Button>
                        </CardContent>
                    </Card>
                </Grid>
                
                )
            }) }
            </Grid>
    );
};

export default Chinastate;