import { IncomingMessage, ServerResponse } from 'http'

export default (request: IncomingMessage, response: ServerResponse) => {
  response.writeHead(200, {
    'Content-Type': 'text/css; charset=utf-8',
    'Cache-Control': 'no-cache, no-store, must-revalidate'
  })
  response.end(`#css-not-cached:before { content: "${new Date().toISOString()}"; }`, 'utf8')
}