import { IncomingMessage, ServerResponse } from 'http'

export default (request: IncomingMessage, response: ServerResponse) => {
  response.writeHead(200, {
    'Content-Type': 'text/css; charset=utf-8',
    'Cache-Control': 'no-store'
  })
  response.end(`document.querySelector('#js-not-cached').textContent = "${new Date().toISOString()}";`, 'utf8')
}
