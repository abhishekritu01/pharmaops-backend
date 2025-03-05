import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, TypeScript + Node.js Server is Running! 🚀");
});


app.get("/api", (req: Request, res: Response) => {
    res.json({ message: "Hello, TypeScript + Node.js Server is Running! 🚀" });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
