#!/usr/bin/env npx tsx --

import assert from 'assert';
import { readFile } from 'fs/promises';

const file = await readFile('input.txt', 'utf8');
const set1: number[] = [];
const set2: number[] = [];
for (const line of file.trim().split('\n')) {
    const [num1, num2] = line.split(/ +/).map(Number);
    assert(num1 !== undefined);
    assert(num2 !== undefined);
    set1.push(num1);
    set2.push(num2);
}
set1.sort();
set2.sort();
let distance = 0;
for (let i = 0; i < set1.length; i++) {
    distance += Math.abs(set1[i]! - set2[i]!);
}
console.log(distance);
