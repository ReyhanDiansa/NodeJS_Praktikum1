const express = require("express"); // memanggil library express js
const bodyParser = require("body-parser"); // memanggil library bodyparser
const cors = require("cors"); // memanggil library cors
const app = express();

app.use(bodyParser.json());
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}));
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

app.get("/test", (req,res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
    message: "Ini end-point pertama ku",
//    6 Job Sheet Node JS – Pengenalan REST API
    method: req.method,
    code: res.statusCode
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
   })
   

// endpoint "/profil/nama/umur" dengan method GET
app.get("/profil/:name/:age", (req,res) => {
    // 7 Job Sheet Node JS – Pengenalan REST API
     // :name dan :age → diberikan titik dua didepan menunjukkan "name"
    // dan "age"
     // bersifat dinamis yang dapat diganti nilai nya saat melakukan requ
    // est
     // menampung data yang dikirimkan
     let name = req.params.name // mengambil nilai pada parameter name
     let age = req.params.age // mengambil nilai pada parameter age
     // membuat objek yang berisi data yang akan dijadikan response
     // response berisi data nama dan umur sesuai dengan nilai parameter
     let response = {
     nama: "haii " + name,
     umur: age
     }
     // memberikan response dengan format JSON yang berisi objek di atas
     res.json(response)
    })
    


// end-point "/bujur_sangkar" dengan method POST
app.post("/bujur_sangkar", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe nume
//    rik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang da
//    ri body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
    panjang: panjang,
    lebar: lebar,
    luas: luas,
    keliling: keliling
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
   })
   

   
   //kubus
   app.post("/kubus", (req,res) => {
      let sisi = Number(req.body.sisi)
        let volume = sisi * sisi * sisi
        let luasper= 6 * sisi * sisi

        let response = {
            sisi: sisi,
            volume: volume,
            luas_Permukaan: luasper
            }

            res.json(response)
   });


   //tabung
   app.get("/tabung/:jari/:tinggi", (req,res) => {

    let jari= req.params.jari
    let tinggi= req.params.tinggi
    let volume = Math.PI * jari * jari * tinggi
      let luasper= 2 * Math.PI * jari * (jari + tinggi)

      let response = {
          jari_jari: jari,
          volume: volume,
          luas_Permukaan: luasper,
          }

          res.json(response)
 });


     //kerucut
     app.post("/kerucut", (req,res) => {
        let jari = Number(req.body.jari)
        let tinggi = Number(req.body.tinggi)
        let garis = Number(req.body.garis)
          let volume = 1/3 * Math.PI * jari * jari * tinggi
          let luasper= Math.PI*jari *(garis+jari)
  
          let response = {
              jari_jari: jari,
              tinggi: tinggi,
              garis: garis,
              volume: volume,
              luas_Permukaan: luasper,
              }
  
              res.json(response)
     });


     //bola
     app.post("/bola", (req,res) => {
        let jari = Number(req.body.jari)

          let volume = (4/3) * Math.PI*jari*jari*jari
          let luasper= 4 * Math.PI * jari * jari
  
          let response = {
              jari_jari: jari,
              volume: volume,
              luas_Permukaan: luasper,
              }
  
              res.json(response)
     });


      //celcius
   app.get("/convert/celcius/:celcius", (req,res) => {

    let celcius= Number(req.params.celcius)
    let Fahren= 9/5 * celcius +32
    let ream = 4/5 * celcius
      let kel= celcius + 273

      let response = {
          celcius: celcius,
          result:{
          Fahreinhet: Fahren,
          Reamur: ream,
          Kelvin: kel
          }}

          res.json(response)
 });


//reamur
app.get("/convert/reamur/:reamur", (req,res) => {

    let reamur= Number(req.params.reamur)
    let Fahren= 9/4 * reamur + 32
    let celc = 5/4 * reamur
      let kel= 5/4 * reamur + 273

      let response = {
          reamur: reamur,
          result:{
          Fahrenheit: Fahren,
          Celcius: celc,
          Kelvin: kel
          }}

          res.json(response)
 });


 //Kelfin
app.get("/convert/kelvin/:kelvin", (req,res) => {

    let kelvin= Number(req.params.kelvin)
    let Fahren= 9/5*(kelvin-273)+32
    let celc = kelvin-273
      let ream= 4/5 * (kelvin-273)

      let response = {
          kelvin: kelvin,
          result:{
          Fahrenheit: Fahren,
          Celcius: celc,
          Reamur: ream
          }}

          res.json(response)
 });


//Fahreinhet
app.get("/convert/fahrenheit/:fahrenheit", (req,res) => {
    let fahrenheit= Number(req.params.fahrenheit)
    let kel= 5/9 * (fahrenheit-32)+273
    let celc = 5/9 * (fahrenheit-32)
      let ream= 4/9 * (fahrenheit-32)

      let response = {
          fahrenheit: fahrenheit,
          result:{
          Kelvin: kel,
          Celcius: celc,
          Reamur: ream
          }}

          res.json(response)
 });


   app.listen(8000, () => {
    console.log("Server run on port 8000");
   })



//Biner
app.get("/convert/biner/:biner", (req,res) => {
    let biner= Number(req.params.biner)
    let dec= parseInt(biner, 2)
    let oct= parseInt(biner, 2).toString(8)
    let hexa= parseInt(biner, 2).toString(16)

      let response = {
          biner : biner,
          result:{
          decimal: dec,
          hexa: hexa,
          octal: oct,
          }}

          res.json(response)
 });
 

 //Hexa
 app.get("/convert/hexa/:hexa", (req,res) => {

     let hexa= req.params.hexa
     let dec= parseInt(hexa, 16)
     let oct= parseInt(hexa, 16).toString(8)
     let bin= parseInt(hexa, 16).toString(2)

 
       let response = {
           hexa : hexa,
           result:{
           decimal: dec,
           octal: oct,
           biner: bin,

           }}
 
           res.json(response)
  });


//Octal
app.get("/convert/octal/:octal", (req,res) => {

    let octal= req.params.octal
    let dec= parseInt(octal, 8)
    let bin= parseInt(octal, 8).toString(2)
    let hex= parseInt(octal, 8).toString(16)


      let response = {
          octal : octal,
          result:{
          decimal: dec,
          biner: bin,
          Hexa: hex,
          }}

          res.json(response)
 });


 //Decimal
app.get("/convert/decimal/:decimal", (req,res) => {

    let decimal= Number(req.params.decimal)
    let biner= decimal.toString(2)
    let oct= decimal.toString(8)
    let hexa= decimal.toString(16)


      let response = {
          decimal: decimal,
          result:{
          biner: biner,
          octal: oct,
          hexa:hexa
          }}

          res.json(response)
 });


//BMI
app.post("/bmi", (req,res) => {
    let tinggi = Number(req.body.tinggi)
    let berat = Number(req.body.berat)
    let hasil = berat / (tinggi * tinggi)
    let status =''

    if(hasil<18.5){
        status="kekurangan berat badan"
    }else if(hasil >=18.5 && hasil <=24.9){
        status="normal(ideal)"
    }else if(hasil >=25 && hasil <=29.9){
        status="Kelebihan Berat Badan"
    }else if(hasil >=30){
        status="Kegemukan (obesitas)"
    }

      let response = {
          tinggi : tinggi,
          berat: berat,
          bmi: hasil,
          status:status
          }

          res.json(response)
 });


 //Ganjil-Genap
 app.get("/ganjilgenap/:angka", (req,res) => {

    let angka= Number(req.params.angka)
    let hasil=''

    if(angka %2 == 0){
        hasil ="Angka Anda genap"
    }else{
        hasil="Angka Anda ganjil"
    }

      let response = {
        angka_anda:angka,
        status:hasil
          }

          res.json(response)
        });