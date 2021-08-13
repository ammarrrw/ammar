const Hapi = require("@hapi/hapi")

const init = async () => {
    const server = Hapi.server({
        host : "localhost",
        port : 5000,
    })

    server.route([{
        path : "/",
        method : "GET",
        handler: (r, h) => {
            return "<b>ammar</b>";
            }
   
    },
    {
        path : "/menu",
        method : "GET",
        handler: (r, h) => {
            return "halo";
            }
   
    }])

    await server.start()
    console.log("ammar")
}

init()