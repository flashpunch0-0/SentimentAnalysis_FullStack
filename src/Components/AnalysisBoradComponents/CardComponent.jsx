import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'; // Import the Paper component
import { Box, Container } from '@mui/material';


const CardComponent = () => {
    return (

        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={3} > {/* Add Paper with elevation */}
                    <Card >
                        <CardHeader title="Card 1" />
                        <CardContent>
                            <Typography variant="body2" color="#FF5301">
                                This is the content for Card 1.
                            </Typography>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={3}>
                    <Card>
                        <CardHeader title="Card 2" />
                        <CardContent>
                            <Typography variant="body2" color="#FF5301">
                                This is the content for Card 2.
                            </Typography>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={3}>
                    <Card>
                        <CardHeader title="Card 3" />
                        <CardContent>
                            <Typography variant="body2" color="#FF5301">
                                This is the content for Card 3.
                            </Typography>
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>

        </Grid>

    );
};

export default CardComponent;
