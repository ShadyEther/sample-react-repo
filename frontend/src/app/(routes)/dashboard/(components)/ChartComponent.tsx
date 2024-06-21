import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

function ChartComponent() {
    return (
        <>
            <PieChart
                series={[
                    {
                        data: [{ value: 10 }, 
                            { value: 150 }, 
                            { value: 450 }, 
                            { value: 350 }, 
                            { value: 250 }, 
                            { value: 130 }, 
                            { value: 60 }, 
                            { value: 500 }, 
                            { value: 120 }, 
                            { value: 200 }],
                        innerRadius: 30,
                        outerRadius: 100,
                        paddingAngle: 5,
                        cornerRadius: 5,
                        startAngle: -90,
                        endAngle: 180,
                        cx: 150,
                        cy: 150,
                    }
                ]}
            />

        </>
    )
}

export default ChartComponent