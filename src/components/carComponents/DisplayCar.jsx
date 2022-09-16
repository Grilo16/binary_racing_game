const DisplayCar = ({car, selectCar}) => {
    const handleClick = function(){
        selectCar(car)
    };
        return (

    <li onClick={handleClick} className="select-car">
        <h2>Car name: {car.name}</h2>
        
            <h4>acceleration: {car.acceleration}</h4>
            <h4>top speed: {car.topSpeed}</h4>
            <h4>Cornering: {car.cornering}</h4>
            <h4>Breaking: {car.breaking}</h4>

    </li>
            )};

export default DisplayCar