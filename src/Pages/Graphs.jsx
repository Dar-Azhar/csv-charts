import React, { useState } from 'react'
import lineChart from '../images/line-chart.png'
import barChart from '../images/growth.png'
import pieChart from '../images/pie-chart.png'
import ChartDisplay from '../components/ChartDisplay'
import Card from '../components/ChartCard'

export const Graphs = () => {
    const [chartSelected, setChartSelected] = useState(false)
    const [chartType, setChartType] = useState("");
    const toggleBtns = [
        {
            id: 1,
            text: 'Line Chart',
            img: lineChart,
        },
        {
            id: 2,
            text: 'Pie Chart',
            img: pieChart,
        },
        {
            id: 3,
            text: 'Bar Chart',
            img: barChart
        },
    ];
  

    return (<>
        {chartSelected ? <ChartDisplay setChartSelected= {setChartSelected} chartType={chartType} /> :

            <div className="flex flex-col items-center p-4 h-screen justify-center gap-3">
                <h1 className="text-3xl">Select Chart Type</h1>
                <div className="Wrapper flex  rounded-lg p-10 gap-10">
                    <div className="flex gap-24">
                        {toggleBtns.map((eachBtn) => (
                            <Card key={eachBtn.id} eachBtn ={eachBtn} setChartType = {setChartType} setChartSelected = {setChartSelected} />

                        ))}
                    </div>
                </div>
            </div>
        }
    </>
    
    )
}
