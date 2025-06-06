const client = require('../lib/client');

describe('Searchlight MCP Client', () => {
  test('exports package name and version', () => {
    expect(client.name).toBe('@searchlight/mcp-client');
    expect(client.version).toBe('1.0.0');
  });
});