var http = require("http");

http
  .createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    const axios = require("axios");

    axios
      .get("https://api.zapper.fi/v1/transactions?address=0xdac17f958d2ee523a2206206994597c13d831ec7&network=ethereum&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241")
      .then((res) => {
        const headerDate =
          res.headers && res.headers.date
            ? res.headers.date
            : "no response date";
        console.log("Status Code:", res.status);
        console.log("Date in Response header:", headerDate);

        const users = res.data;

        // for (user of users) {
        //   console.log(`Got user with id: ${user.id}, name: ${user.name}`);
        // }
        response.end(JSON.stringify(users));
      })
      .catch((err) => {
        console.log("Error: ", err.message);
      });

    //response.writeHead(200, { "Content-Type": "text/plain" });

    // Send the response body as "Hello World"
    
  })
  .listen(8081);

// Console will print the message
console.log("Server running at http://127.0.0.1:8081/");
