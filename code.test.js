const fs = require('fs');
const assert = require('assert');

// Read and evaluate the code.js file to get the depthFirstSearch function
eval(fs.readFileSync('code.js').toString());

const graph1 = {
    A: ['C', 'B'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: []
};
const expected1 = ['A', 'C', 'F'];
assert(depthFirstSearch(graph1, 'A', 'F').join(',') === expected1.join(','), 'Test 1 Failed');

const graph2 = {
    A: ['C', 'B'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: []
};
const expected2 = ['A', 'B', 'E'];
assert(depthFirstSearch(graph2, 'A', 'E').join(',') === expected2.join(','), 'Test 2 Failed');

const graph3 = {
    A: ['B', 'C'],
    B: ['A'],
    C: ['A']
};
const expected3 = ['A'];
assert(depthFirstSearch(graph3, 'A', 'A').join(',') === expected3.join(','), 'Test 3 Failed');

const graph4 = {
    A: ['B'],
    B: ['A']
};
const expected4 = [];
assert(depthFirstSearch(graph4, 'A', 'C').join(',') === expected4.join(','), 'Test 4 Failed');

const graph5 = {};
const expected5 = [];
assert(depthFirstSearch(graph5, 'A', 'B').join(',') === expected5.join(','), 'Test 5 Failed');

const graph6 = {
    A: ['B'],
    B: ['C'],
    C: ['D'],
    D: []
};
const expected6 = [];
assert(depthFirstSearch(graph6, 'A', 'E').join(',') === expected6.join(','), 'Test 6 Failed');

const graph7 = {
    A: ['B'],
    B: ['C'],
    C: ['A']
};
const expected7 = ['A', 'B', 'C'];
assert(depthFirstSearch(graph7, 'A', 'C').join(',') === expected7.join(','), 'Test 7 Failed');

const graph8 = {
    A: ['B'],
    B: ['C'],
    C: ['D'],
    D: []
};
const expected8 = ['A', 'B', 'C', 'D'];
assert(depthFirstSearch(graph8, 'A', 'D').join(',') === expected8.join(','), 'Test 8 Failed');

console.log('All tests passed!');
