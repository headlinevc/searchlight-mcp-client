# Searchlight MCP Client

A Model Context Protocol (MCP) client for accessing Searchlight's company data and analytics platform. This client enables Claude Desktop and other MCP-compatible applications to interact with Searchlight's comprehensive database of startup and company information.

## Installation

### Via npm (Recommended for Production)

```bash
npm install -g @headlinevc/searchlight-mcp-client
```

### Via npx (No Installation Required)

```bash
npx @headlinevc/searchlight-mcp-client
```

## Setup

### 1. Get Your API Token

1. Log into your Searchlight account
2. Go to Settings → API Keys
3. Generate a new MCP token
4. Copy the token for use in configuration

### 2. Configure Claude Desktop

Add the following configuration to your Claude Desktop config file:

**Location of config file:**
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

**Configuration:**

```json
{
  "mcpServers": {
    "searchlight": {
      "command": "npx",
      "args": ["@headlinevc/searchlight-mcp-client"],
      "env": {
        "MCP_SERVER_URL": "https://searchlight.headline.com/api/mcp",
        "MCP_TOKEN": "your_token_here"
      }
    }
  }
}
```

### 3. Restart Claude Desktop

After updating the configuration file, restart Claude Desktop to load the new MCP server.

## Environment Variables

The client supports the following environment variables:

- `MCP_TOKEN` or `SEARCHLIGHT_API_TOKEN`: Your Searchlight API token (required)
- `MCP_SERVER_URL` or `SEARCHLIGHT_API_URL`: Searchlight MCP server URL (defaults to https://searchlight.headline.com/api/mcp)

## Local Development

For local development against a Searchlight development server:

```json
{
  "mcpServers": {
    "searchlight": {
      "command": "npx",
      "args": ["@headlinevc/searchlight-mcp-client"],
      "env": {
        "MCP_SERVER_URL": "http://localhost:3000/api/mcp",
        "MCP_TOKEN": "your_dev_token_here"
      }
    }
  }
}
```

## Troubleshooting

### Common Issues

1. **Authentication Error**: Ensure your MCP token is valid and not expired
2. **Connection Error**: Check that the MCP_SERVER_URL is correct
3. **Permission Error**: Verify your token has the necessary permissions

### Debug Mode

To see detailed logging, check the Claude Desktop logs or run the client directly:

```bash
echo '{"jsonrpc":"2.0","method":"tools/list","id":1}' | MCP_TOKEN=your_token npx @headlinevc/searchlight-mcp-client
```