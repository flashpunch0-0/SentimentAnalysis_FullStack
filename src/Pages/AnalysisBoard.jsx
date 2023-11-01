import React, { useState } from 'react'
import { useEffect } from "react";
import axios from "axios";
import Pie from "../Components/MainDashboardComponents/Pie"
import CardComponent from "../Components/AnalysisBoradComponents/CardComponent"
import { Box, Grid, Container, Card, Paper, Select, MenuItem, CardContent, Typography } from '@mui/material';



const AnalysisBoard = () => {
    const [objects, setObjects] = useState("");
    const [selectedObject, setSelectedObject] = useState(null);
    const [selectedValues, setSelectedValues] = useState([]);
    const [jsonData, setJsonData] = useState({});


    useEffect(() => {
        // Make a GET request to your backend to fetch data
        axios
            .get("http://localhost:3000/products")
            .then((response) => {
                // console.log(response.data); // Log the fetched data to the console
                setObjects(response.data)

            })
            .catch((error) => console.error(error));
    }, []);
    useEffect(() => {
        console.log(objects); // Log the updated state
    }, [objects]);

    const handleSelectChange = (event) => {
        const selectedId = event.target.value;
        const selected = objects.find(obj => obj._id === selectedId);
        setSelectedObject(selected);
        if (selected) {
            const data = [
                { value: selected.content["Positive %"], label: 'Positive' },
                { value: selected.content["Negative %"], label: 'Negative' },
                { value: selected.content[["Neutral %"]], label: 'Neutral' },
                // Add more properties as needed
            ];
            // const data = [
            //     { value: selected.content.Positive, label: 'Positive' },
            //     { value: selected.content.Negative, label: 'Negative' },
            //     { value: selected.content.Neutral, label: 'Neutral' },
            //     // Add more properties as needed
            // ];
            // Positive: { value: selected.content.Positive },
            //     Negative: { value: selected.content.Negative },
            //     Neutral: { value: selected.content.Neutral },
            const carddata = {

                // Positive: selected.content.Positive,
                Positive: selected.content["Positive %"],
                Negative: selected.content["Negative %"],
                Neutral: selected.content[["Neutral %"]],
                User: selected.content.User,
                NotSpamProbability: selected.content['Not Spam Probability'],
                TwwetDate: selected.content['Tweet Date'].split('T')[0],
                // Add more properties as needed
            };
            setSelectedValues(data);
            setJsonData(carddata);

            // You can now pass the data array to the Pie component
        }

    };


    return (

        // <Grid >
        //     <Grid container spacing={2}>
        //         {/* Left Part: Select Option */}
        //         <Grid item xs={12} sm={6}>
        //             <select onChange={handleSelectChange}>
        //                 <option value="">Select an object</option>
        //                 {objects &&
        //                     objects.map((obj) => (
        //                         <option key={obj._id} value={obj._id}>
        //                             {obj.content.Text}
        //                         </option>
        //                     ))}
        //             </select>
        //         </Grid>

        //         {/* Right Part: PieChart and CardComponent */}
        //         <Grid item xs={12} sm={6}>
        //             {selectedObject && (
        //                 <Box mb={5}>
        //                     {/* <h3>Positive Percentage is:</h3>
        //                     <p>{selectedObject.content.Positive}</p> */}
        //                     <Pie selectedValues={selectedValues} />
        //                 </Box>
        //             )}
        //             <CardComponent />
        //         </Grid>
        //     </Grid>
        // </Grid>
        <Container maxWidth="lg">

            {/* above is menuitema */}

            {/* <Box display="flex" justifyContent="space-between"> */}
            {/* Left Part: Select Option */}
            {/* <div>
                <select onChange={handleSelectChange}>

                    <option value="">Select an object</option>
                    {objects &&
                        objects.map((obj) => (
                            <option key={obj._id} value={obj._id}>
                                {obj.content.Text}
                            </option>
                        ))}

                </select>
            </div> */}
            <Container maxWidth="lg">
                <Card variant="outlined">
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                            <Paper className="left-box">
                                {/* <Select onChange={handleSelectChange} fullWidth>
                                    <MenuItem value="">Select an object</MenuItem>
                                    {objects &&
                                        objects.map((obj) => (
                                            <MenuItem key={obj._id} value={obj._id}>
                                                {obj.content.Text}
                                            </MenuItem>
                                        ))}
                                </Select> */}
                                <Select
                                    // value={objects.content.Text}// You should have a state variable to manage the value
                                    value={selectedObject ? selectedObject._id : ''}
                                    // onChange={(e) => handleSelectChange(e.target.value)}
                                    onChange={handleSelectChange}
                                    fullWidth
                                >
                                    <MenuItem value="">
                                        Select an object
                                    </MenuItem>
                                    {objects &&
                                        objects.map((obj) => (
                                            <MenuItem key={obj._id} value={obj._id}>
                                                {obj.content.Text}
                                            </MenuItem>
                                        ))}
                                </Select>
                            </Paper>
                        </Grid>
                    </Grid>
                </Card>
            </Container>




            {/* Right Part: PieChart and CardComponent */}
            {/* <Container> */}
            {selectedObject && (
                <Box container mt={5} maxWidth="lg"  >
                    <Grid container spacing={1} mt={5} sx={{ display: "flex", justifyContent: "center", background: "white" }} >
                        <Grid item xs={12} sm={3} md={6} >
                            <Paper className="left-box">
                                <Pie selectedValues={selectedValues} />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={3} md={6} >
                            <Paper className="right-box">
                                {/* <CardComponent jsonData={jsonData} /> */}
                                <Typography variant="body2" color="#FF5301">
                                    {(jsonData.Neutral * 100).toFixed(2)}
                                </Typography>
                                <Typography variant="body2" color="#FF5301">
                                    {(jsonData.Negative * 100).toFixed(2)}
                                </Typography>
                                <Typography variant="body2" color="#FF5301">
                                    {(jsonData.Positive * 100).toFixed(2)}
                                </Typography>
                                <Typography variant="body2" color="#FF5301">
                                    {jsonData.User}
                                </Typography>
                                <Typography variant="body2" color="#FF5301">
                                    {jsonData.NotSpamProbability}
                                </Typography>
                                <Typography variant="body2" color="#FF5301">
                                    {jsonData.TwwetDate}
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    {/* <Pie selectedValues={selectedValues} /> */}
                    {/* <CardComponent jsonData={jsonData} /> */}
                </Box>
            )}

            {/* </Container> */}


            {/* </Box> */}
        </Container>
    );

}

export default AnalysisBoard
