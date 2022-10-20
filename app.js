const express = require("express");
const app = express();
const port = 5000;

//rutas
app.get("/api", (req, res) => {
  return res.status(200).json({ msg: "bienvenido al api" });
});


app.get("/suma/:num1/:num2", (req, res) => {
  let result = parseInt(req.params.num1) + parseInt(req.params.num2);
  console.log(req.params);

  return res.status(200).json({ result: result });


});
app.get('/suma', (req, res) => {
  // /suma?num1=25&&num2=25
  let result = parseInt(req.query.num1) + parseInt(req.query.num2) //NaN
  console.log(req.query)

  return res.status(200).json({result: result})

})
app.get('/division', (req, res) => {
  // /suma?num1=25&&num2=25
  let result = parseFloat(req.query.num1) / parseFloat(req.query.num2) //NaN
  console.log(req.query)

  return res.status(200).json({result: result})

})
app.listen(port, () => console.log(`escuchando el puerto ${port}`));

