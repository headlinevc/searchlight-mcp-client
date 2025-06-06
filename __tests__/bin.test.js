const fs = require('fs');
const path = require('path');

describe('Searchlight MCP Binary', () => {
  test('bin script exists and is executable', () => {
    const binPath = path.join(__dirname, '../bin/searchlight-mcp');
    expect(fs.existsSync(binPath)).toBe(true);
    
    const content = fs.readFileSync(binPath, 'utf8');
    expect(content).toContain('#!/usr/bin/env node');
    expect(content).toContain('SearchlightMCPClient');
  });
});