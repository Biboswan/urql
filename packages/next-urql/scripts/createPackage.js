#!/usr/bin/env node

const { packPackage } = require('../../../scripts/actions/lib/commands');
const path = require('path');

const packageJson = path.join(__dirname, '../')
packPackage(packageJson)
