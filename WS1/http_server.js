let http = require('http')

http.createServer((request,response) => {
	response.writeHead(200, {'Content-Type': 'text/html'})
	response.write(`
	<table>
	<style>
	table {
		font-family: arial, sans-serif;
		border-collapse: collapse;
		width: 100%;
	  }
	  
	  td, th {
		border: 1px solid #dddddd;
		text-align: left;
		padding: 8px;
	  }
	  
	  tr:nth-child(even) {
		background-color: #dddddd;
	  }
	</style>
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
  </table>`)
	response.end('heippa kaikki\n')
}).listen(8081)
console.log('server running: http://127.0.0.1:8081')