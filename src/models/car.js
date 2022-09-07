const Car = function (name, acceleration, topSpeed, breaking, cornering, score, id){
    this.name = name
    this.acceleration = acceleration
    this.topSpeed = topSpeed
    this.breaking = breaking
    this.cornering = cornering
    this.score = score
    this.id = id
}


Car.prototype.get_points = function (char){
    const avgSpeedAccel = (parseInt(this.acceleration) + parseInt(this.topSpeed))/2
    const avgBrakCorn = (parseInt(this.breaking) + parseInt(this.cornering))/2
    if (avgSpeedAccel > avgBrakCorn){
        if (char === "0"){
            this.score ++
        }else if (char === "1"){
            this.score --
        }
    }
    if (avgSpeedAccel < avgBrakCorn){
        if (char === "0"){
            this.score --
        }else if (char === "1"){
            this.score ++
        }
    }
    
};

Car.prototype.race = function (raceObject){
    this.score = 0
    for (char of raceObject.trackRoute){
        this.get_points(char)
    }
    return this.score
};

module.exports = Car

