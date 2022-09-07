import DisplayCar from "./DisplayCar";

const CarList = ({cars}) => {
    const displayCarHtml = cars.map((car)=>{
        return (
                <DisplayCar car={car} key={car.id}/>
            )
    });
    

    return displayCarHtml
};

export default CarList