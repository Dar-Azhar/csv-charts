import React from 'react';

const Card = ({ eachBtn, setChartSelected, setChartType }) => {

    const handleClick = (index) => {
        setChartSelected(true);
        if (index === 1) {
            setChartType("LineChart");
        } else if (index === 2) {
            setChartType('PieChart');
        } else {
            setChartType('BarChart');
        }
    };

    return (
        <button
            className="flex flex-col shadow-custom-19 hover:shadow-custom-18 px-12 rounded-lg py-5 cursor-pointer items-center gap-2 transition-shadow duration-300"
            key={eachBtn.id}
            onClick={() => handleClick(eachBtn.id)}
        >
            <img src={eachBtn.img} alt={eachBtn.text} className="w-10" />
            <span>
                {eachBtn.text}
            </span>
        </button>
    );
};

export default Card;
