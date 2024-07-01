"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Please input bot command: \n", function (command) {
    var commandSet = /(W\d+|R)/g;
    var commands = command.match(commandSet);
    console.log(commands);
    var x = 0;
    var y = 0;
    var direction = 'N';
    function turnRight() {
        if (direction === 'N') {
            direction = 'E';
        }
        else if (direction === 'E') {
            direction = 'S';
        }
        else if (direction === 'S') {
            direction = 'W';
        }
        else if (direction === 'S') {
            direction = 'N';
        }
    }
    function turnLeft() {
        if (direction === 'N') {
            direction = 'W';
        }
        else if (direction === 'W') {
            direction = 'S';
        }
        else if (direction === 'S') {
            direction = 'E';
        }
        else if (direction === 'E') {
            direction = 'N';
        }
    }
    function moveForward(steps) {
        if (direction === 'N') {
            y += steps;
        }
        else if (direction === 'E') {
            x += steps;
        }
        else if (direction === 'S') {
            y -= steps;
        }
        else if (direction === 'W') {
            x -= steps;
        }
    }
    if (commands instanceof Array) {
        commands.forEach(function (cmd) {
            switch (true) {
                case cmd === 'R':
                    turnRight();
                    break;
                case cmd === 'L':
                    turnLeft();
                    break;
                case cmd.startsWith('W'):
                    var steps = parseInt(cmd.substring(1));
                    moveForward(steps);
                    console.log(x, y);
                    break;
                default:
                    break;
            }
        });
        console.log("X: ".concat(x, " Y: ").concat(y, " Direction: ").concat(direction));
    }
    rl.close();
});
