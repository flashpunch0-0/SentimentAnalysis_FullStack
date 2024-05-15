import React, { useState } from 'react'
import { useEffect } from "react";
import axios from "axios";
import Pie from "../Components/MainDashboardComponents/Pie"
import CardComponent from "../Components/AnalysisBoradComponents/CardComponent"
import { Box, Grid, Container, Card, Paper, Select, MenuItem, CardContent, Typography, styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import './list.css';
// import { Grid } from '@mui/material';
const StyledContainer = styled('div')({
    maxHeight: '650px', // Set the max height for the container
    overflowY: 'auto', // Enable vertical scrolling
});

const HoverTypography = styled(Typography)({
    cursor: 'pointer',
    '&:hover': {
        background: '#f0f0f0',
    },
});

const List = () => {
    const [objects, setObjects] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/products")
            .then((response) => {
                setObjects(response.data);
            })
            .catch((error) => console.error(error));
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 20 },
        { field: 'text', headerName: 'Text', width: 300 },
        { field: 'user', headerName: 'User', width: 150 },
        { field: 'tweetDate', headerName: 'Tweet Date', width: 110 },
        { field: 'highestLabel', headerName: 'Highest Label', width: 100 },
        { field: 'highestSpamProbability', headerName: 'Highest Spam Probability', width: 100 },
        { field: 'negativePercentage', headerName: 'Negative %', width: 100 },
        { field: 'neutralPercentage', headerName: 'Neutral %', width: 100 },
        { field: 'notSpamProbability', headerName: 'Not Spam Probability', width: 100 },
        { field: 'positivePercentage', headerName: 'Positive %', width: 100 },
        { field: 'spamProbability', headerName: 'Spam Probability', width: 100 },
        { field: 'spamRemark', headerName: 'Spam Remark', width: 120 },
    ]

    const rows = objects.map((item, index) => ({
        id: index + 1,
        text: item.content.Text,
        user: item.content.User,
        tweetDate: item.content['Tweet Date'],
        highestLabel: item.content['Highest Label'],
        highestSpamProbability: item.content['Highest Spam Probability'],
        negativePercentage: item.content['Negative %'],
        neutralPercentage: item.content['Neutral %'],
        notSpamProbability: item.content['Not Spam Probability'],
        positivePercentage: item.content['Positive %'],
        spamProbability: item.content['Spam Probability'],
        spamRemark: item.content['Spam Remark'],
    }));




    return (
        <Grid container spacing={2} justifyContent="center" p={2} >
            <Grid item xs={12} style={{ maxWidth: '100%' }}>
                <div style={{ height: 600, width: '100%', backgroundColor: "white" }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={7}
                        rowsPerPageOptions={[7, 9]}

                    // checkboxSelection
                    // disableSelectionOnClick
                    />
                </div>
            </Grid>
        </Grid>
    );
}

export default List
