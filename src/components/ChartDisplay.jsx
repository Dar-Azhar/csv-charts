import React from "react";
import { useSelector } from "react-redux";
import { Chart } from "react-google-charts";
import { Button } from "./Button";


const ChartDisplay = ({ chartType, setChartSelected }) => {
    const data = useSelector((state) => state.csvData.data);
    if (!data || data.length === 0) {
        return <p className="text-center text-gray-500">No data available</p>;
    }

    // Preparing data for the chart
    const chartData = [
        [Object.keys(data[0])[0], Object.keys(data[0])[1]], // Header row: Label and Value
        ...data.map((row) => [String(row[Object.keys(data[0])[0]]), parseInt(row[Object.keys(data[0])[1]], 10)]), // Data rows
    ];



    const handleBackClick = () => {
        setChartSelected(false)
    }

    return (
        <div className="flex flex-col items-center mt-20">
            <div className="flex gap-5 items-center justify-center">
                <h2 className=" font-bold text-3xl text-center ">{chartType}</h2>
                <Button handleClick = {handleBackClick} text='Back' />
            </div>
            <Chart
                chartType={chartType}
                data={chartData}
                width="100%"
                height="400px"
            />

        </div>
    );
};

export default ChartDisplay;
