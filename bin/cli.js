#!/usr/bin/env node

// import statements
import {roll} from '../lib/roll.js';
import minimist from 'minimist';

// parse command line arguments
const args = minimist(process.argv.slice(2))

return(roll(args.sides, args.dice, args.rolls));