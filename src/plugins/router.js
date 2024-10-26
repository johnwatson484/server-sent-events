import home from '../routes/home.js'
import assets from '../routes/assets.js'
import health from '../routes/health.js'
import events from '../routes/events.js'

const plugin = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route([].concat(
        home,
        assets,
        health,
        events
      ))
    },
  },
}

export default plugin
