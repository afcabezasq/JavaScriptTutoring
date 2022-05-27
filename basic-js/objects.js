var myCar = {
    brand: "Kia",
    model: "Forte",
    year: 2020,
    carDeatils: function(){
        console.log(`Car ${this.model} ${this.year}`);
    }


};



function car(brand,model,year){
    this.brand = brand,
    this.model = model,
    this.year = year
}
myCar = new car("Mercedes","M",2012);


