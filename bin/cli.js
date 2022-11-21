#!/usr/bin/env node

// import statements
import {roll} from "lib/roll.js";
import minimist from 'minimist';

// parse command line arguments
const args = minimist(process.argv.slice(2))

let sides = args.sides;
let dice = args.dice;
let rolls = args.rolls;
if(sides < 0 || dice < 0 || rolls < 0){
    console.log("Please enter positive numbers");
    process.exit(1);
}
let returnedObject = roll(sides, dice, rolls);
console.log(returnedObject);
process.exit(0);