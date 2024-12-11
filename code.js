function depthFirstSearch(graph, startNode, targetNode) {
    // Depth First Search helper function
    function dfs(node, visited, path) {
        visited[node] = true;  // Track visited nodes
        path.push(node);       // Add current node to the path

        // If we've found the target node, return true
        if (node === targetNode) {
            return true;
        }

        // Explore all adjacent nodes (neighbors)
        for (let i = 0; i < (graph[node] || []).length; i++) {
            let neighbor = graph[node][i];
            // If neighbor hasn't been visited, recurse
            if (!visited[neighbor]) {
                if (dfs(neighbor, visited, path)) {
                    return true;  // If target found, return true
                }
            }
        }

        // Remove the node from path if no solution
        path.pop();
        return false;
    }

    // Array to track visited nodes
    let visited = {};
    let path = [];

    // Run DFS starting from the startNode
    if (dfs(startNode, visited, path)) {
        return path;  // Return the path if target was found
    }

    return [];  // Return empty list if no path exists
}