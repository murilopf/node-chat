import express from "express"

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "Olá NLW 05"
    })
})

app.post("/", (request, response) => {
    return response.json({
        message: "Usuário salvo com sucesso!"
    })
})

app.listen(8000, () => console.log("Server ins running on port 8000..."))