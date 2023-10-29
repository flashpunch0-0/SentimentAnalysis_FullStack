// import * as React from 'react';
// import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

// // const data = [
// //     { value: 5, label: 'A' },
// //     { value: 10, label: 'B' },
// //     { value: 15, label: 'C' },
// //     { value: 20, label: 'D' },
// // ];

// const size = {
//     width: 400,
//     height: 400,
// };

// export default function PieArcLabel({ selectedValues }) {
//     const pieChartStyles = {
//         // Add custom styles for the PieChart component
//         '& .MuiPieArc-label': {
//             fill: 'white',
//             fontWeight: 'bold',
//             // Add any other styling you want
//         },
//     };
//     return (
//         <PieChart
//             series={[
//                 {
//                     arcLabel: (item) => `${item.label} (${item.value})`,
//                     arcLabelMinAngle: 45,
//                     // data,
//                     data: selectedValues,
//                 },
//             ]}
//             sx={{
//                 [`& .${pieArcLabelClasses.root}`]: {
//                     fill: 'white',
//                     fontWeight: '400',

//                 },
//             }}
//             {...size}
//         />
//     );
// }

import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const size = {
    width: 400,
    height: 400,
};
const colors = ['teal', 'magenta', 'gold'];

export default function PieArcLabel({ selectedValues }) {
    const pieChartStyles = {
        // Add custom styles for the PieChart component
        '& .MuiPieArc-label': {
            fill: 'white',
            fontWeight: 'bold',
            // Add any other styling you want
        },
    };

    return (
        <PieChart
            series={[
                {
                    arcLabel: (item) => `${item.label} (${item.value})`,
                    arcLabelMinAngle: 45,
                    data: selectedValues.map((item, index) => ({
                        ...item,
                        color: colors[index % colors.length],
                    })),
                },
            ]}
            sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                    fill: 'white',
                    fontWeight: '400',
                },
            }}
            {...size}
        />
    );
}
