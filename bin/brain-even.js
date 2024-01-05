#!/usr/bin/env node
import { questionAnswer } from "../src/even.js";
import { getName } from "../src/cli.js";

console.log('Welcome to the Brain Games!');
getName();
questionAnswer();
