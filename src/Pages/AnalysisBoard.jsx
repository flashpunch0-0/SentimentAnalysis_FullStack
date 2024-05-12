import React, { useState } from 'react'
import { useEffect } from "react";
import axios from "axios";
import Pie from "../Components/MainDashboardComponents/Pie"
import CardComponent from "../Components/AnalysisBoradComponents/CardComponent"
import { Box, Grid, Container, Card, Paper, Select, MenuItem, CardContent, Typography, styled } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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

const AnalysisBoard = () => {
    // const classes = useStyles();
    const [objects, setObjects] = useState("");
    const [selectedObject, setSelectedObject] = useState(null);
    const [selectedValues, setSelectedValues] = useState([]);
    const [jsonData, setJsonData] = useState({});
    const [hoveredObject, setHoveredObject] = useState(null);

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

    // const handleMouseEnter = (selectedId) => {
    //     const selected = objects.find(obj => obj._id === selectedId);
    //     setHoveredObject(selected);
    //     if (selected) {
    //         const data = [
    //             { value: selected.content["Positive %"], label: 'Positive' },
    //             { value: selected.content["Negative %"], label: 'Negative' },
    //             { value: selected.content[["Neutral %"]], label: 'Neutral' },
    //         ];
    //         const carddata = {
    //             Positive: selected.content["Positive %"],
    //             Negative: selected.content["Negative %"],
    //             Neutral: selected.content[["Neutral %"]],
    //             User: selected.content.User,
    //             NotSpamProbability: selected.content['Not Spam Probability'],
    //             TwwetDate: selected.content['Tweet Date'].split('T')[0],
    //         };
    //         setSelectedValues(data);
    //         setJsonData(carddata);
    //     }
    // };
    const handleSelectChange = (selectId) => {
        // const selectedId = event.target.value;
        const selected = objects.find(obj => obj._id === selectId);
        setSelectedObject(selected);
        if (selected) {
            const data = [
                { value: selected.content["Positive %"], label: 'Positive' },
                { value: selected.content["Negative %"], label: 'Negative' },
                { value: selected.content[["Neutral %"]], label: 'Neutral' },
                // Add more properties as needed
            ];


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
    const handleMouseLeave = () => {
        setHoveredObject(null);
    };

    // return (

    //     // <Grid >
    //     //     <Grid container spacing={2}>
    //     //         {/* Left Part: Select Option */}
    //     //         <Grid item xs={12} sm={6}>
    //     //             <select onChange={handleSelectChange}>
    //     //                 <option value="">Select an object</option>
    //     //                 {objects &&
    //     //                     objects.map((obj) => (
    //     //                         <option key={obj._id} value={obj._id}>
    //     //                             {obj.content.Text}
    //     //                         </option>
    //     //                     ))}
    //     //             </select>
    //     //         </Grid>

    //     //         {/* Right Part: PieChart and CardComponent */}
    //     //         <Grid item xs={12} sm={6}>
    //     //             {selectedObject && (
    //     //                 <Box mb={5}>
    //     //                     {/* <h3>Positive Percentage is:</h3>
    //     //                     <p>{selectedObject.content.Positive}</p> */}
    //     //                     <Pie selectedValues={selectedValues} />
    //     //                 </Box>
    //     //             )}
    //     //             <CardComponent />
    //     //         </Grid>
    //     //     </Grid>
    //     // </Grid>
    //     <Container maxWidth="lg">

    //         {/* above is menuitema */}

    //         {/* <Box display="flex" justifyContent="space-between"> */}
    //         {/* Left Part: Select Option */}
    //         {/* <div>
    //             <select onChange={handleSelectChange}>

    //                 <option value="">Select an object</option>
    //                 {objects &&
    //                     objects.map((obj) => (
    //                         <option key={obj._id} value={obj._id}>
    //                             {obj.content.Text}
    //                         </option>
    //                     ))}

    //             </select>
    //         </div> */}
    //         <Container maxWidth="lg">
    //             <Card variant="outlined">
    //                 <Grid container>
    //                     <Grid item xs={12} sm={12}>
    //                         <Paper className="left-box">
    //                             {/* <Select onChange={handleSelectChange} fullWidth>
    //                                 <MenuItem value="">Select an object</MenuItem>
    //                                 {objects &&
    //                                     objects.map((obj) => (
    //                                         <MenuItem key={obj._id} value={obj._id}>
    //                                             {obj.content.Text}
    //                                         </MenuItem>
    //                                     ))}
    //                             </Select> */}
    //                             <Select
    //                                 // value={objects.content.Text}// You should have a state variable to manage the value
    //                                 value={selectedObject ? selectedObject._id : ''}
    //                                 // onChange={(e) => handleSelectChange(e.target.value)}
    //                                 onChange={handleSelectChange}
    //                                 fullWidth
    //                             >
    //                                 <MenuItem value="">
    //                                     Select an object
    //                                 </MenuItem>
    //                                 {objects &&
    //                                     objects.map((obj) => (
    //                                         <MenuItem key={obj._id} value={obj._id}>
    //                                             {obj.content.Text}
    //                                         </MenuItem>
    //                                     ))}
    //                             </Select>
    //                         </Paper>
    //                     </Grid>
    //                 </Grid>
    //             </Card>
    //         </Container>




    //         {/* Right Part: PieChart and CardComponent */}
    //         {/* <Container> */}
    //         {selectedObject && (
    //             <Box container mt={5} maxWidth="lg"  >
    //                 <Grid container spacing={1} mt={5} sx={{ display: "flex", justifyContent: "center", background: "white" }} >
    //                     <Grid item xs={12} sm={3} md={6} >
    //                         <Paper className="left-box">
    //                             <Pie selectedValues={selectedValues} />
    //                         </Paper>
    //                     </Grid>
    //                     <Grid item xs={12} sm={3} md={6} >
    //                         <Paper className="right-box">
    //                             {/* <CardComponent jsonData={jsonData} /> */}
    //                             <Typography variant="body2" color="#FF5301">
    //                                 {(jsonData.Neutral * 100).toFixed(2)}
    //                             </Typography>
    //                             <Typography variant="body2" color="#FF5301">
    //                                 {(jsonData.Negative * 100).toFixed(2)}
    //                             </Typography>
    //                             <Typography variant="body2" color="#FF5301">
    //                                 {(jsonData.Positive * 100).toFixed(2)}
    //                             </Typography>
    //                             <Typography variant="body2" color="#FF5301">
    //                                 {jsonData.User}
    //                             </Typography>
    //                             <Typography variant="body2" color="#FF5301">
    //                                 {jsonData.NotSpamProbability}
    //                             </Typography>
    //                             <Typography variant="body2" color="#FF5301">
    //                                 {jsonData.TwwetDate}
    //                             </Typography>
    //                         </Paper>
    //                     </Grid>
    //                 </Grid>
    //                 {/* <Pie selectedValues={selectedValues} /> */}
    //                 {/* <CardComponent jsonData={jsonData} /> */}
    //             </Box>
    //         )}

    //         {/* </Container> */}


    //         {/* </Box> */}
    //     </Container>
    // );


    // return (
    //     <Grid container spacing={2}>
    //         {/* Left Part: List of Objects */}
    //         <Grid item xs={12} sm={6}>
    //             {/* <Paper>
    //                 <Select
    //                     value={selectedObject ? selectedObject._id : ''}
    //                     onChange={handleSelectChange}
    //                     fullWidth
    //                 >
    //                     <MenuItem value="">
    //                         Select an object
    //                     </MenuItem>
    //                     {objects.map((obj) => (
    //                         <MenuItem key={obj._id} value={obj._id}>
    //                             {obj.content.Text}
    //                         </MenuItem>
    //                     ))}
    //                 </Select>
    //             </Paper> */}
    //             <Paper>
    //                 {objects.map((obj) => (
    //                     <Typography
    //                         key={obj._id}
    //                         onMouseEnter={() => handleSelectChange(obj._id)}
    //                         onMouseLeave={handleMouseLeave}
    //                     >
    //                         {obj.content.Text}
    //                     </Typography>
    //                 ))}
    //             </Paper>
    //         </Grid>

    //         {/* Right Part: Details of Selected Object */}
    //         <Grid item xs={12} sm={6}>
    //             <Paper>
    //                 {selectedObject && (
    //                     <>
    //                         <Pie selectedValues={selectedValues} />
    //                         <Typography variant="body2" color="#FF5301">
    //                             {(jsonData.Neutral * 100).toFixed(2)}
    //                         </Typography>
    //                         <Typography variant="body2" color="#FF5301">
    //                             {(jsonData.Negative * 100).toFixed(2)}
    //                         </Typography>
    //                         <Typography variant="body2" color="#FF5301">
    //                             {(jsonData.Positive * 100).toFixed(2)}
    //                         </Typography>
    //                         <Typography variant="body2" color="#FF5301">
    //                             {jsonData.User}
    //                         </Typography>
    //                         <Typography variant="body2" color="#FF5301">
    //                             {jsonData.NotSpamProbability}
    //                         </Typography>
    //                         <Typography variant="body2" color="#FF5301">
    //                             {jsonData.TwwetDate}
    //                         </Typography>
    //                     </>
    //                 )}
    //             </Paper>
    //         </Grid>
    //     </Grid>
    // );



    return (
        <Grid container spacing={2}>
            {/* Left Part: List of Objects */}
            {objects.length > 0 && (
                <Grid item xs={12} sm={6}>
                    <Paper>
                        <StyledContainer>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>

                                        <TableCell align="left">ID</TableCell>
                                        <TableCell>Text</TableCell>
                                    </TableRow>
                                </TableHead>
                                {objects.map((obj, index) => (
                                    // <Typography
                                    //     key={obj._id}
                                    //     // className={`${classes.hoverEffect} ${classes.typography}`}
                                    //     onMouseEnter={() => handleSelectChange(obj._id)}
                                    //     onMouseLeave={handleMouseLeave}
                                    // >
                                    //     {index + 1}.{obj.content.Text}
                                    // </Typography>

                                    <TableBody>

                                        <TableRow key={obj._id} onMouseEnter={() => handleSelectChange(obj._id)}
                                            onMouseLeave={handleMouseLeave}>

                                            <TableCell align="left">{index + 1}</TableCell>
                                            <TableCell>{obj.content.Text}</TableCell>

                                        </TableRow>

                                    </TableBody>

                                ))}
                            </Table>
                        </StyledContainer>
                    </Paper>
                </Grid>
            )}

            {/* Right Part: CardComponent */}
            {/* <Grid item xs={12} sm={6}>

                <Paper>
                    {selectedObject && (
                        <>

                            <Pie selectedValues={selectedValues} />
                            <Typography variant="body2" color="#FF5301">
                                {"Neutrality % :"}
                                {(jsonData.Neutral * 100).toFixed(2)}
                            </Typography>
                            <Typography variant="body2" color="#FF5301">
                                {"Negative % :"}
                                {(jsonData.Negative * 100).toFixed(2)}
                            </Typography>
                            <Typography variant="body2" color="#FF5301">
                                {"Positivity % :"}
                                {(jsonData.Positive * 100).toFixed(2)}

                            </Typography>
                            <Typography variant="body2" color="#FF5301">
                                {"Username  : "}
                                {jsonData.User}
                            </Typography>
                            <Typography variant="body2" color="#FF5301">
                                {"NotSpamProbability % :"}
                                {jsonData.NotSpamProbability}
                            </Typography>
                            <Typography variant="body2" color="#FF5301">
                                {"Date :"}
                                {jsonData.TwwetDate}
                            </Typography>
                        </>
                    )}
                </Paper>
            </Grid> */}


            {/*  */}
            {/*  */}
            <Grid item xs={12} sm={6}>

                <Paper>

                    {selectedObject && (
                        <>

                            <Pie selectedValues={selectedValues} />


                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Neutrality %</TableCell>
                                        <TableCell>Negative %</TableCell>
                                        <TableCell>Positivity %</TableCell>
                                        <TableCell>Username</TableCell>
                                        <TableCell>NotSpamProbability %</TableCell>
                                        <TableCell align="right">Tweet Date</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <br />
                                    <br />

                                    <TableRow key={jsonData.id}>

                                        <TableCell>{(jsonData.Neutral * 100).toFixed(2)}</TableCell>
                                        <TableCell> {(jsonData.Negative * 100).toFixed(2)}</TableCell>
                                        <TableCell> {(jsonData.Positive * 100).toFixed(2)}</TableCell>
                                        <TableCell>{jsonData.User}</TableCell>
                                        <TableCell> {(jsonData.NotSpamProbability * 100).toFixed(2)}</TableCell>
                                        {/* <TableCell>{jsonData.NotSpamProbability}</TableCell> */}
                                        <TableCell align="right">{`${jsonData.TwwetDate}`}</TableCell>
                                    </TableRow>

                                </TableBody>
                            </Table>
                        </>
                    )}
                </Paper>
            </Grid>
        </Grid>
    );
}

export default AnalysisBoard
