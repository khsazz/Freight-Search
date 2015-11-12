/**
 * Created by Sazz on 11/10/2015.
 */

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
        longitude: -80.1500,
        placeName: "Fort Lauderdale",
        placeCode: "FTL"
    },
    {
        placeID: 3,
        lattitude: 28.4158,
        longitude: -81.2989,
        placeName: "Orlando",
        placeCode: "ORL"
    },
    {
        placeID: 4,
        lattitude: 32.0167,
        longitude: -81.1167,
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

function getPlacebyID(ID){
    for(var i=0; i<places.length; i++){
        if(places[i].placeID === ID){
            return places[i];
        }
    }
};


function Path(destination, cost, time, desc, source){
    this.sourcePlaceID = source;
    this.destPlaceID = destination;
    this.cost = cost;
    this.time= time;
    this.description = desc;
};

var adj_list = [ [ new Path(1, 430, 1, "Road Transport", 0), new Path(5, 1430, 3, "Road Transport", 0)],
                 [new Path(2, 1623, 22, "Ocean Freight", 1), new Path(4, 1765, 23, "Ocean Freight", 1), new Path(0, 430, 1, "Road Transport", 1)],
                    [new Path(3, 600, 1, "Road Transport", 2), new Path(1, 1623, 22, "Ocean Freight", 2), new Path(5, 1623, 18, "Ocean Freight", 2)],
                    [new Path(2, 600, 1, "Road Transport", 3), new Path(4, 600, 1, "Road Transport", 3)],
                    [new Path(3, 600, 1, "Road Transport", 4), new Path(1, 1765, 23, "Ocean Freight", 4)],
                        [new Path(2, 1623, 18, "Ocean Freight", 5) , new Path(0, 1430, 3, "Road Transport", 5)]];



var visited =[false, false, false, false, false, false, false];
var target = 0;
var stack = [];
var start = 0;
var possiblePaths = new Array();
var a = new Array();

var allUniquePaths = new Array();
var uniquePaths = new Array();



function extractPath(element, index, array) {
    a.push(element);
}


function dfs(currentNode){
    if(currentNode === target){
        stack.forEach(extractPath);
        a.push(target);
        possiblePaths.push(a);
        a = new Array();
    }
    else{
        visited[currentNode] = true;
        stack.push(currentNode);

        for(var i=0; i<adj_list[currentNode].length; i++){

            if( visited[adj_list[currentNode][i].destPlaceID ] === false){

                dfs(adj_list[currentNode][i].destPlaceID);
            }

        }
        visited[currentNode] = false;
        stack.pop();
    }
};

//dfs(3);

function generatePaths(){
    for(var i = 0; i<possiblePaths.length; i++){
        for(var j=0; j<possiblePaths[i].length-1; j++){
            var s=possiblePaths[i][j];
            var g=possiblePaths[i][j+1];
            for(var k =0; k<adj_list[s].length; k++){
                if(adj_list[s][k].destPlaceID === g){
                    uniquePaths.push(adj_list[s][k]);
                }
            }
        }
        allUniquePaths.push(uniquePaths);
        uniquePaths = new Array();
    }
};

//generatePaths();

function logAllPaths(){
    for(var i=0; i< allUniquePaths.length; i++){
        console.log("Path "+ (i+1));
        for(var j=0; j<allUniquePaths[i].length; j++){

            var a = allUniquePaths[i][j].sourcePlaceID;
            var b = allUniquePaths[i][j].destPlaceID;
            console.log(places[a].placeCode+" -> "+places[b].placeCode);
        }
    }
}

function findPath(source, destination){
    var s = false; var d= false;
    for( var i =0; i< places.length; i++){
        if(!s){
            if(places[i].placeCode === source){
                s= true;
                start = places[i].placeID;
            }
        }
        if(!d){
            if(places[i].placeCode === destination){
                d= true;
                target = places[i].placeID;
            }
        }
    }
    if(s && d){
        dfs(start);
        generatePaths();
        //logAllPaths();
        return allUniquePaths;
    }
    else{
        //console.log("Source or Destination not available");
        alert("Source or Destination not available");
        return false;
    }
}

function getMapRoutes(){
    return possiblePaths;
}

//findPath( "STO", "ORL");




