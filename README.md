# Claude Canvas MCP

A Model Context Protocol (MCP) server that enables Claude to interact with Canvas LMS. This server provides tools for managing courses, announcements, assignments, students, and more through the Canvas API.

## Features

- List active courses and their details
- Retrieve course modules, pages, and content
- View assignments, quizzes, and discussions
- Access student enrollment information
- Post announcements and comments
- View submission details and grades
- Upload and download files
- Manage rubrics and grades

## Prerequisites

- Node.js (v16 or higher)
- A Canvas API token
- Canvas instance URL (defaults to "http://canvas.docker/")
- Claude Desktop application

## Installation

1. Clone this repository and install dependencies:

```bash
git clone https://github.com/johnnyrobot/claude-canvas-mcp.git
cd claude-canvas-mcp
npm install
```

2. Build the TypeScript project:

```bash
npm run build
```

3. Configure your environment variables:

```bash
# Copy the example environment file
cp .env.example .env

# Edit the .env file with your Canvas information
nano .env
```

## Claude Desktop Integration

1. Open Claude Desktop's configuration file:

**MacOS**:

```bash
code ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

**Windows**:

```bash
code %AppData%\Claude\claude_desktop_config.json
```

2. Add the Canvas MCP server configuration:

```json
{
  "mcpServers": {
    "canvas": {
      "command": "node",
      "args": [
        "/path/to/claude-canvas-mcp/build/index.js"
      ],
      "env": {
        "CANVAS_API_TOKEN": "your_token_here",
        "CANVAS_DOMAIN": "http://canvas.docker/"
      }
    }
  }
}
```

3. Restart Claude Desktop to apply changes

## Available Tools

### list-courses

Lists all active courses for the authenticated user
- No required parameters
- Returns course names, IDs, and term information

### get-course

Gets detailed information about a specific course
- Required parameters:
  - courseId: string

### list-modules

Lists all modules in a course
- Required parameters:
  - courseId: string

### list-module-items

Lists all items in a module
- Required parameters:
  - courseId: string
  - moduleId: string

### list-assignments

Gets all assignments in a course
- Required parameters:
  - courseId: string
- Optional parameters:
  - includeContent: boolean (default: false)

### get-assignment

Gets detailed information about an assignment
- Required parameters:
  - courseId: string
  - assignmentId: string

### list-students

Gets a complete list of students enrolled in a course
- Required parameters:
  - courseId: string
- Optional parameters:
  - includeEmail: boolean (default: false)

### post-announcement

Posts an announcement to a specific course
- Required parameters:
  - courseId: string
  - title: string
  - message: string

### list-submissions

Gets all student submissions for an assignment
- Required parameters:
  - courseId: string
  - assignmentId: string

### get-submission

Gets a specific student's submission for an assignment
- Required parameters:
  - courseId: string
  - assignmentId: string
  - studentId: string

### post-submission-comment

Posts a comment on a student's submission
- Required parameters:
  - courseId: string
  - assignmentId: string
  - studentId: string
  - comment: string

### list-files

Lists files in a course
- Required parameters:
  - courseId: string
- Optional parameters:
  - folderId: string

### upload-file

Uploads a file to a course
- Required parameters:
  - courseId: string
  - fileName: string
  - fileContent: string
- Optional parameters:
  - folderId: string

## License

MIT License
