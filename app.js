const express = require("express");
const app = express();
const port = 5000;

//rutas
/*  app.get("/api", (req, res) => {
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

}); */
app.get('/division', (req, res) => {
  // /suma?num1=25&&num2=25
  let result = parseFloat(req.query.num1) / parseFloat(req.query.num2) //NaN
  console.log(req.query)
  
  if(result === Infinity){
    return res.status(400).json({msg: `infinity`})
  }
   else{ return res.status(200).json({result: result})
   }

});
app.get("/api", (req, res) => {
  return res.status(200).json({ msg: "Hola, cómo estás, bienvenido al api! :D" });
});
app.get("/api/dollar", (req, res) => {
  const pesos = 4800
  let dolar = parseInt(req.query.num1) / parseInt(pesos)
  console.log(req.query)
  if(req.query.num1 <= 0){
    return res.status(200).json(`error de calculo`);
  }

  else {return res.status(200).json(`son ${dolar} dólares`);
  }
});
app.get("/api/bar", (req, res) => {
  let nombre = "Andrea"
  let edad = 18
  console.log(req.query)
  if(req.query.num1 < edad){
    return res.status(406).json(`${nombre}, tiene prohibido el ingreso, es menor de edad`);
  }

  else {return res.status(200).json(`${nombre}, puede ingresar es mayor de edad`);
  }
});
app.get("/api/master", (req, res) => {
  console.log(req.query)
  let num1 = req.query.num1
  let estado = true 

    for(let i = 2; i < num1; i++) {

        if (num1 % i == 0) {
            estado = false
        
    }

    if (estado){
      return res.status(200).json(`${num1}, es un número primo`);
        str2 =  'Primo'
    }else {
      return res.status(200).json(`${num1}, no es numero primo`);
        str2 =  'No es Primo'
    }
  }
  if( num1 % 2 === 0){
    return res.status(200).json(`${num1}, es un número par`);
  }

  else {return res.status(200).json(`${num1}, es número impar`);
  }
  

});


app.listen(port, () => console.log(`escuchando el puerto ${port}`));

