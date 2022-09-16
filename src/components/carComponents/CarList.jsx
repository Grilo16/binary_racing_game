import DisplayCar from "./DisplayCar";

const CarList = ({cars, selectCar}) => {
    const displayCarHtml = cars.map((car)=>{
        return (
                <DisplayCar selectCar={selectCar} car={car} key={car.id}/>
            )
    });
    return (
        <ul className="select-car-list">
        {displayCarHtml}
        </ul>
        )
};

export default CarList