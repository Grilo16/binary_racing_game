// import Race from "./race"
import Car from "car"

const dataRace = {
    name: "Ducky Race",
    trackRoute : "00000011110110001011",
    id: 0,
}

const dataCar = {
    name: "Toyota Supra", 
    acceleration: "9",
    topSpeed: "6",
    breaking: "2",
    cornering: "4",
    score: 0,
    id : 1
}

// const race = new Race(...Object.values(dataRace))
const car = new Car(...Object.values(dataCar))
car.race(race)
