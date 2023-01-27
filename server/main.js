const app = require('./app')
const PORT = 5000

// if we run app.js the server will start listening for requests!
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`))
