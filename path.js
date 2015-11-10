/**
 * Created by Sazz on 11/10/2015.
 */

//console.log("ok");

function Path(place, cost, time, desc){
    this.place = place;
    this.cost = cost;
    this.time= time;
    this.desc = desc;
};

var adj_list = [ [new Path(1, 0, 0, "m")],
                 [new Path(2, 0, 0, "m")],
                    [new Path(3, 0, 0, "m"), new Path(4, 0, 0, "m")],
                    [new Path(5, 0, 0, "m")],
                    [new Path(5, 0, 0, "m")] ];



var visited =[false, false, false, false, false];
var target = 5;
var stack = [];
var start = 0;

stack.push(adj_list[1][0]);
stack.push(adj_list[2][0]);
stack.push(adj_list[3][0]);
stack.push(adj_list[4][0]);
//stack.pop();
//console.log(stack);

function dfs(currentNode){
    if(currentNode === target){
        for(var i=0; i<=stack.length; i++){
            var a = stack.pop();
            console.log(a.place);
        }
    }
};
dfs(5);

