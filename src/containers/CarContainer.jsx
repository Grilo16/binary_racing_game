import CarList from "../components/carComponents/CarList";


const CarContainer = ({cars}) => {

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

export default CarContainer