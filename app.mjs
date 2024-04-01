import express from "express"

const app = express()

app.get('/', (req, res) => {
res.send(`
<html>
<head>
<style>
table {
  table-layout: fixed;
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  border: 0;
  margin: 0;
  color: rgb(0, 0, 0);
  font-family: sans-serif;
  font-size: 25rem;
  letter-spacing: 1px;
}

td {
  border: 30px solid rgb(0, 0, 255);
  text-align: center;
  font-weight: bold;
}
</style>
</head>
<body style="margin: 0;">
<table>
  <tbody>
    <tr>
      <td>${req.query.a[0]}</td>
      <td>${req.query.a[1]}</td>
      <td>${req.query.a[2]}</td>
      <td>${req.query.a[3]}</td>
    </tr>
    <tr>
      <td>${req.query.a[4]}</td>
      <td>${req.query.a[5]}</td>
      <td>${req.query.a[6]}</td>
      <td>${req.query.a[7]}</td>
    </tr>
    <tr>
      <td>${req.query.a[8]}</td>
      <td>${req.query.a[9]}</td>
      <td>${req.query.a[10]}</td>
      <td>${req.query.a[11]}</td>
    </tr>
    <tr>
      <td>${req.query.a[12]}</td>
      <td>${req.query.a[13]}</td>
      <td>${req.query.a[14]}</td>
      <td>${req.query.a[15]}</td>
    </tr>
  </tbody>
</table>
</body>
</html>
`)
})

app.listen(3000, () => {
    console.log("profile app listening on port 3000")
})