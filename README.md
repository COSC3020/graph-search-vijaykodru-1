# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the start to the target (not
the list of nodes that you looked at during the search). If start and target are
the same, it should return a list with only that node. If there is no path from
the start to the target, it should return an empty list. Start with the template
I provided in `code.js` and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The worst case time complexity for the code implmented is $\Theta(V + E)$. This is also the same runtime complexity for the code in detecting cycles exercise. This is because the code iterates over V number of vertices until all of them are visited which is represented by $O(V)$ and it iterates over every edge of that vertice to find the path which is represented by $O(E)$. In total we get a worst case runtime complexity of $\Theta(V + E)$

## Bonus

Implement and analyze breadth-first search.


References:

This code is soley inspried by the algorithm I did in detecting cycles which is also a DFS. However I had to change it where the function returns the path rather than saying if cycle exists or not.

I took ChatGPT's help to come up with the last 2 test cases. However the idea of using Adjacent matrix came from my detecting cycles exercise.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice