# Sample Jenkins Node.js Integration Repo

Simple Node.js project to demonstrate Jenkins Pipeline.

## What it does

- Has a \`sum\` function with a unit test.
- Uses Jest for testing.
- Pipeline installs, builds (placeholder), and tests.

## Setup

\`\`\`bash
npm ci
npm test
\`\`\`

## Jenkins

Pipeline is defined in \`Jenkinsfile\`. It runs:
1. checkout
2. install (\`npm ci\`)
3. build (\`npm run build\`)
4. test (\`npm test\`)
