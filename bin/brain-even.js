#!/usr/bin/env node

import { getName } from '../src/cli.js';
import { getGame } from '../src/index.js';

console.log('Welcome to the Brain Games!');
getName();
getGame();
