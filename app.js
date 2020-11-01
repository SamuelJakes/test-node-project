const http = require("http")

const hostname = "127.0.0.1"
const port = 3000

// req = request, has headers and request data
// res = response, has server's response details that need setting



// const server = http.createServer((req, res) => {
//     // 200 = successful response
//     res.statusCode = 200

//     //setting the content of the response
//     res.setHeader('Content-Type', 'text/plain')

//     // when we close the response we send the contents with it as an argument
//     res.end("Hello World!\n")
// })

// // Tell the server to start and give it the ip and port to run on
// server.listen(port, hostname, () => {
//     console.log(`Server is running at http://${hostname}:${port}/`)
// })