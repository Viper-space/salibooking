import express from "express";
import bodyParser from 'body-parser';

//svaka express aplikacija pocinje ovako
const app = express();

var number = 1;

//navodi se koristenje bodyParser koristi se za razne JSON stvari
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//ovako se pise osnovni api, imate res.json za json podatke i res.send za samo jedan podatak.
//na ovaj princip se radi citav backend, podatci se salju i primaju za obradu ovdje
app.get("/test", function (req, res) {
    number++;
    res.json({
        value: number,
        text: "some bs"
    })
});



//naglasava na kojem portu se slusa server
app.listen(5000, function () {
    console.log("SERVER STARTED ON localhost:5000");
})
