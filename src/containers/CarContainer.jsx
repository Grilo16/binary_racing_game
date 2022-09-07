import CarList from "../components/CarList";


const DisplayCarContainer = () => {
    const cars = [
        {
            name: "Toyota Supra", 
            topSpeed: "6",
            acceleration: "9",
            cornering: "4",
            breaking: "2",
            score: 0,
            id : 1
        },
        {
            name: "Ford Mustang", 
            topSpeed: "3",
            acceleration: "2",
            cornering: "8",
            breaking: "9",
            score: 0,
            id : 2
        },
    ]


    return (
        <>
        <h2>this is gonna display a list of cars</h2>
        <hr />
        <ul>
        <CarList cars={cars}/>
        </ul>
        <hr />
        </>
    )
};

export default DisplayCarContainer