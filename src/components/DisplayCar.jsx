const DisplayCar = ({car}) => {
        return (

            <>
    <li>
        <h3>Car name: {car.name}</h3>
        <ul>
            <p>acceleration: {car.acceleration}</p>
            <p>top speed: {car.topSpeed}</p>
            <p>Cornering: {car.cornering}</p>
            <p>Breaking: {car.breaking}</p>
        </ul>
    </li>
        </>
            )};

export default DisplayCar