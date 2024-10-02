import React from "react";

interface Tprops {
    Name: string,
    RollNo: number,
    Day: string,
    Time: string
}

const Card = (props: Tprops) => {
    return (

        <div className="max-w-sm mx-auto bg-purple-500 text-white rounded-lg shadow-md p-6 mt-6 text-center font-bold">

            <h1 className="text-2xl font-bold mb-4">Name:{props.Name} </h1>
            <p className="text-lg">RollNo: {props.RollNo} </p>
            <p className="text-lg">Day: {props.Day} </p>
            <p className="text-lg">Time: {props.Time} </p>

        </div>




    );
};

export default Card