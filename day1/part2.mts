#!/usr/bin/env npx tsx --

import assert from 'assert';
import { readFile } from 'fs/promises';
import lodash from 'lodash';

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
const counted = lodash.countBy(set2);
console.log(set1.reduce((similarity,num) => similarity + (num * (counted[num] ?? 0)), 0));
