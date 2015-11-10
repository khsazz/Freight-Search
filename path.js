/**
 * Created by Sazz on 11/10/2015.
 */


function Path(destination, cost, time, desc, source){
    this.sourcePlaceID = source;
    this.destPlaceID = destination;
    this.cost = cost;
    this.time= time;
    this.description = desc;
};

var adj_list = [ [new Path(3, 0, 0, "m", 0)],
                 [new Path(3, 0, 0, "m", 1), new Path(4, 0, 0, "m", 1)],
                    [new Path(4, 0, 0, "m", 2) ],
                    [new Path(0, 0, 0, "m", 3), new Path(1, 0, 0, "m", 3), new Path(4, 0, 0, "m", 3)],
                    [new Path(1, 0, 0, "m", 4), new Path(2, 0, 0, "m", 4), new Path(3, 0, 0, "m", 4)] ];



var visited =[false, false, false, false, false, false];
var target = 2;
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

dfs(0);

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

generatePaths();

for(var i=0; i< allUniquePaths.length; i++){
    for(var j=0; j<allUniquePaths[i].length; j++){
        console.log(allUniquePaths[i][j].sourcePlaceID+" -> "+allUniquePaths[i][j].destPlaceID);
    }
}


