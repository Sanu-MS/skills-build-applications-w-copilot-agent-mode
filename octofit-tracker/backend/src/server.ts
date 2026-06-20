import 'dotenv/config'

import app from './app'
import { connectDatabase } from './config/database'

const port = Number(process.env.PORT ?? 8000)

function getBaseUrl() {
  const codespaceName = process.env.CODESPACE_NAME

  return codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000'
}

async function startServer() {
  await connectDatabase()
  const baseUrl = getBaseUrl()

  app.listen(port, () => {
    console.log(`OctoFit Tracker API listening at ${baseUrl} on port ${port}`)
  })
}

startServer().catch((error: unknown) => {
  console.error('Failed to start OctoFit Tracker API', error)
  process.exit(1)
})