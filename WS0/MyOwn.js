// For loop from 0-100
// console.log(i)
for (let i = 0; i <= 100; i++) {
  console.log(i);
}

// lopuksi kirjoita node ja oma kansio niin ilmestyy !

// tehtävä 6. Tehdään simppeli serveru

var http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200, {
      "Contect-Type": "application/xhtml+xml; charset=utf-8",
    });
    response.write('<html lang="fi">'); //( aloitus siis)
    response.write(
      '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">'
    );
    response.write("<h1>Mites tämä toimiii??</h1>");
    response.end("</html>"); // tää on sit loppu vastaus siihe tekstiin
  })
  .listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
