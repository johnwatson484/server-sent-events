const routes = [{
  method: 'GET',
  path: '/events',
  handler: (request, h) => {
    const response = h.event({ data: 0 })

    for (let i = 1; i < 20; i++) {
      console.log('Sending event:', i)
      h.event({ data: i })
    }

    return response
  },
}]

export default routes
