// imports
const server = require('./server.js')

// port
const PORT = process.env.PORT || 8000;

// server
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT} `)
})
