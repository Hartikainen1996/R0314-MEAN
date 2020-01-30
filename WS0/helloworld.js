var http = require("http");
http.createServer(function (request, response) {

response.writeHead(200, {'Content-Type': 'text/html'});

if (request.url === "/"){

    response.write(`<style>
    table, th, td {
      border: 1px solid black;
      border-collapse: collapse;
      </style>
      <table style="width:25%">
    <tr>
      <th>Name</th>
      <th>Address</th> 
      <th>City</th>
    </tr>
    <tr>
      <td>Pekka</td>
      <td>Kisakuja 1</td>
      <td>Espoo</td>
    </tr>
    <tr>
      <td>Matias</td>
      <td>Kisakuja 3</td>
      <td>Helsinki</td>
    </tr>
    </table>`);
}
else if (request.url ==="/homepage"){
response.write("<h1>This is homepage<h1>");
}
else if (request.url ==="/secondpage"){
    response.write("<h2>This is second page<h2>");
}

else if (request.url ==="/thirdpage"){
    response.write("<h3>This is third page<h3>");
}








response.end();

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');