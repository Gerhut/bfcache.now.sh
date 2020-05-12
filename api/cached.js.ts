import { IncomingMessage, ServerResponse } from 'http'

export default (request: IncomingMessage, response: ServerResponse) => {
  response.writeHead(200, {
    'Content-Type': 'application/javascript; charset=utf-8',
  })
  response.end(`document.querySelector('#js-cached').textContent = "${new Date().toISOString()}";`, 'utf8')
}
