function toString(list){
    var result = "[";
    for(var i=0; i < list.length; i++){
        result += list[i].name + ",";
    }
    result += "]";
    return result;
}

function searchBFS(graph, start, end){
    var queue = [];
    var node = graph.nodes[start];
    queue.push(node);
    var closeList = [];

    while(queue.length != 0){
        console.log(toString(queue));
        var current = queue.shift();
        console.log(current.name);
        if(current.name == end){
            break;
        }

        for(var name in current.connect){
            var childNode = graph.nodes[name];

            if(closeList.indexOf(name) >= 0)
                continue;

            closeList.push(childNode.name);

             queue.push(childNode);
        }
       
    }
}