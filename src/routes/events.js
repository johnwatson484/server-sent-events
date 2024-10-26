import { Readable } from 'stream'

const routes = [{
  method: 'GET',
  path: '/events',
  handler: (request, h) => {
    const rs = Readable()

    rs._read = () => {
      for (let i = 0; i < 20; i++) {
        rs.push(JSON.stringify({ number: i }))
      }
      rs.push(null)
    }

    return h.event(rs)
  },
}]

export default routes
