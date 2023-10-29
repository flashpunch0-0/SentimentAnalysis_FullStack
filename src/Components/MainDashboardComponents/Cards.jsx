import React from 'react';
import { Card, CardContent, Typography, Grid, Paper } from '@mui/material';

const styles = {
    cardContainer: {
        display: 'flex',
        justifyContent: 'space-around',

    },
    card: {
        minWidth: 250,
        maxWidth: 300,

        borderRadius: 16,
        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
        margin: '16px',
        minHeight: 150, // Set the desired minimum height
        maxHeight: 160, // Set the desired maximum height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    cardContent: {
        padding: '16px',
        color: "white",
        textAlign: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: '10px',
        margin: "2px 2px -2px 2px"
    },
};

const Cards = () => {
    return (
        <Grid container spacing={2} style={styles.cardContainer}>
            <Grid item>
                <Card style={{ ...styles.card, backgroundColor: '#7DA0FA' }} >
                    <CardContent style={styles.cardContent}>
                        <Typography variant="h6" style={styles.title}>
                            Uploaded Files
                        </Typography>
                        <CardContent>

                            <Typography variant="h5">
                                25% increase
                            </Typography>
                            <Typography variant="body6">
                                from previous quarter
                            </Typography>
                        </CardContent>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card style={{ ...styles.card, backgroundColor: '#7978e9' }}>
                    <CardContent style={styles.cardContent}>
                        <Typography variant="h6" style={styles.title}>
                            Processed Files
                        </Typography>
                        <CardContent>

                            <Typography variant="h5">
                                15% increase
                            </Typography>
                            <Typography variant="body6">
                                from previous quarter
                            </Typography></CardContent>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card style={{ ...styles.card, backgroundColor: '#4b49ac' }}>
                    <CardContent style={styles.cardContent}>
                        <Typography variant="h6" style={styles.title}>
                            Transcription Files
                        </Typography>
                        <CardContent>

                            <Typography variant="h5">
                                20% increase
                            </Typography>
                            <Typography variant="body6">
                                from previous quarter
                            </Typography>
                        </CardContent>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card style={{ ...styles.card, backgroundColor: '#F3797E' }}>
                    <CardContent style={styles.cardContent}>
                        <Typography variant="h6" style={styles.title}>
                            Transcription Files Time
                        </Typography>
                        <CardContent>

                            <Typography variant="h5">
                                in seconds
                            </Typography></CardContent>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Cards;
