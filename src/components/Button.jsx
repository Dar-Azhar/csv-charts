import React from 'react'

export const Button = ({handleClick, text}) => {
    return (
        <button
            onClick={handleClick}
            className="px-10 py-2.5 rounded-lg border-none bg-[#ff5033] text-white text-base font-medium cursor-pointer text-center uppercase transition ease-in duration-200 hover:bg-[#e64023]"
        >
            {text}
        </button>
    )
}
