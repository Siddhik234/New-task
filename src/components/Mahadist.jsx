import { Button, Card, CardContent, Grid } from '@mui/material';
import React from 'react';
import data from "./dist.json"

const Mahadist = () => {

    return (
        <Grid container spacing={3}> 
            { data.map((item)=>{
                return(
                <Grid item xs={12}> 
                    <Card >
                        <CardContent class='mapdata'>
                            <h1> {item.Hingoli} </h1>
                            <Button> View City222 </Button>
                            <h1> {item.Nanded} </h1>
                            <Button > View City222 </Button>
                            <h1> {item.Pune} </h1>
                            <Button > View City222 </Button>
                        </CardContent>
                    </Card>
                </Grid>
                
                )
            }) }
            </Grid>
    );
};

export default  Mahadist;