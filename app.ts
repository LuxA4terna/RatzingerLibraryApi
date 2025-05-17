import express from "express";

const app = express();

app.listen(8080, () => {
    console.log("Serviço rodando na porta 8080...");
});