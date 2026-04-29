#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

function fail(msg) {
  console.error(`ERROR: ${msg}`);
  process.exitCode = 1;
}

function listJsonFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listJsonFiles(p));
    else if (entry.isFile() && entry.name.toLowerCase().endsWith('.json')) out.push(p);
  }
  return out;
}

function validateLevel(lvl, file) {
  if (!lvl || typeof lvl !== 'object') return fail(`${file}: root must be object`);
  if (lvl.schemaVersion !== 1) return fail(`${file}: schemaVersion must be 1`);
  if (typeof lvl.id !== 'string' || !lvl.id) return fail(`${file}: id required`);
  if (!Number.isInteger(lvl.width) || !Number.isInteger(lvl.height)) return fail(`${file}: width/height required ints`);
  if (!Array.isArray(lvl.solution) || lvl.solution.length !== lvl.height) return fail(`${file}: solution must have height rows`);

  for (let r = 0; r < lvl.solution.length; r++) {
    const row = lvl.solution[r];
    if (typeof row !== 'string') return fail(`${file}: solution[${r}] must be string`);
    if (row.length !== lvl.width) return fail(`${file}: solution[${r}] length != width (${row.length} != ${lvl.width})`);
    if (!/^[01]+$/.test(row)) return fail(`${file}: solution[${r}] must contain only 0/1`);
  }
}

function main() {
  const targetDir = process.argv[2] || 'content/levels';
  if (!fs.existsSync(targetDir)) {
    fail(`dir not found: ${targetDir}`);
    process.exit(1);
  }

  const files = listJsonFiles(targetDir);
  if (files.length === 0) {
    console.log(`No .json level files found in ${targetDir}`);
    return;
  }

  const ids = new Map();
  for (const file of files) {
    let data;
    try {
      data = JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch (e) {
      fail(`${file}: invalid JSON (${e.message})`);
      continue;
    }

    const levels = Array.isArray(data) ? data : [data];
    for (const lvl of levels) {
      validateLevel(lvl, file);
      if (lvl && typeof lvl.id === 'string') {
        if (ids.has(lvl.id)) fail(`${file}: duplicate id '${lvl.id}' (also in ${ids.get(lvl.id)})`);
        else ids.set(lvl.id, file);
      }
    }
  }

  if (process.exitCode === 1) process.exit(1);
  console.log(`OK: validated ${files.length} file(s), ${ids.size} level id(s)`);
}

main();
