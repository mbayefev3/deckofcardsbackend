const { PORT = 5001 } = process.env
const app = require("./app")

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})