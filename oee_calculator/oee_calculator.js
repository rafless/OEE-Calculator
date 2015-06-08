var oeeCalculator = {
    /*
    This object is a calculator for Overall Equipment Effectiveness or OEE
    Samuel Soriano
    Last update Jun 5
    */

    // The first step is to declare all the variables needed
    "shiftLength" : "shiftLengthValue",
    "shortBrakes": "shortBrakesValue",
    "mealBrake": "mealBrakeValue",
    "downtime": "downtimeValue",
    "idealRunRate": "idealRunRateValue",
    "totalPieces": "totalPiecesValue",
    "rejectPieces": "rejectPiecesValue",

    // New variables for the different maths
    "plannedProductionTime": "plannedProductionTimeValue",
    "operatingTime": "operatingTimeValue",
    "goodPieces": "goodPiecesValue",

    // Calculate Planned Production Time [ shift length -  breaks]
    "calculatePlannedProductionTime": function(shortBrakes, mealBrake, shiftLength){
        var breaks = this.shortBrakesValue + this.mealBrakeValue;
        var plannedProductionTime = this.shiftLengthValue - breaks;
        return plannedProductionTime;
},


    // Calculate Operating Time [ Planned Production Time - Down Time ]
    "calculateOperatingTime": function(plannedProductionTime, downtime){
        var operatingTime = this.plannedProductionTimeValue - this.downtimeValue;
        return operatingTime;
},


    // Calculate good pieces [ Total Pieces - Reject Pieces ]
    "calculateGoodPieces": function(totalPieces, rejectPieces){
    var goodPieces = this.totalPiecesValue - this.rejectPiecesValue;
    return goodPieces;
}




};
