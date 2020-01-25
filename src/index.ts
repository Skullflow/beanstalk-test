import express from 'express';

const app = express();

const port = process.env.PORT || 8080

app.get("*", (req, res, next) => {
    res.status(200).send("Hello there!")
})


app.listen(port, () => {
    console.log(`App is listening at port ${port}`)
})