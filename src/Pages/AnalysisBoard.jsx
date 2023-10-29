import React, { useState } from 'react'
import { useEffect } from "react";
import axios from "axios";
import Pie from "../Components/MainDashboardComponents/Pie"
import CardComponent from "../Components/AnalysisBoradComponents/CardComponent"
import { Box, Grid, Container } from '@mui/material';
const AnalysisBoard = () => {
    const [objects, setObjects] = useState("");
    const [selectedObject, setSelectedObject] = useState(null);
    const [selectedValues, setSelectedValues] = useState([]);



    useEffect(() => {
        // Make a GET request to your backend to fetch data
        axios
            .get("http://localhost:3000/products")
            .then((response) => {
                console.log(response.data); // Log the fetched data to the console
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
                { value: selected.content.Positive, label: 'Positive' },
                { value: selected.content.Negative, label: 'Negative' },
                { value: selected.content.Neutral, label: 'Neutral' },
                // Add more properties as needed
            ];
            setSelectedValues(data);
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
            <Box display="flex" justifyContent="space-between">
                {/* Left Part: Select Option */}
                <div>
                    <select onChange={handleSelectChange}>
                        <option value="">Select an object</option>
                        {objects &&
                            objects.map((obj) => (
                                <option key={obj._id} value={obj._id}>
                                    {obj.content.Text}
                                </option>
                            ))}
                    </select>
                </div>

                {/* Right Part: PieChart and CardComponent */}
                <div>
                    {selectedObject && (
                        <Box mb={5}>
                            <Pie selectedValues={selectedValues} />
                        </Box>
                    )}
                    <CardComponent />
                </div>
            </Box>
        </Container>
    );

}

export default AnalysisBoard
