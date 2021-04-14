let app = require("express")();
let http = require("http").Server(app);     //to load the library we have to run port number using http module
let io = require("socket.io")(http);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/app.html");
});

io.on("connection", (socket) => {
    console.log("Client connected to application...");

    socket.on("details", (details) => {
        console.log(details);
    })

    // socket.on("name", (name) => {
    //     console.log("Hello " + name + ", \n");
    // });
    // socket.on("msg", (msg) => {
    //   console.log("Your message is: " + msg);
    // });
});


http.listen(9090, () => console.log("Server running on port number 9090"));
