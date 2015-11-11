/**
 * Created by Sazz on 11/11/2015.
 */

//function Place (id, lat, long, name, sName){
//    this.placeID = id;
//    this.lattitude = lat;
//    this.longitude = long;
//    this.placeName = name;
//    this.placeCode = sName;
//};

//var places = new Array();
//
//var a = new Place(0, 59.3294, 18.0686, "Stockholm", "STO");
//places.push(a);
//a = new Place(1, 57.7000, 11.9667, "Gothenburg", "GOT");
//places.push(a);
//


var places = [
    {
        placeID: 0,
        lattitude: 59.3294,
        longitude: 18.0686,
        placeName: "Stockholm",
        placeCode: "STO"
    },
    {
        placeID: 1,
        lattitude: 57.7000,
        longitude: 11.9667,
        placeName: "Gothenburg",
        placeCode: "GOT"
    },
    {
        placeID: 2,
        lattitude: 26.1333,
        longitude: 80.1500,
        placeName: "Fort Lauderdale",
        placeCode: "FTL"
    },
    {
        placeID: 3,
        lattitude: 28.4158,
        longitude: 81.2989,
        placeName: "Orlando",
        placeCode: "ORL"
    },
    {
        placeID: 4,
        lattitude: 32.0167,
        longitude: 81.1167,
        placeName: "Savannah",
        placeCode: "SVH"
    },
    {
        placeID: 5,
        lattitude: 51.9167,
        longitude: 4.5000,
        placeName: "Rotterdam",
        placeCode: "ROT"
    },
];

for(var i=0; i<places.length; i++){
    console.log("Place ID : " + places[i].placeID);
    console.log("Place Name : " + places[i].placeName);
}



