import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
    res.json({ message: "Hello, TypeScript + Node.js Server is Running! 🚀" });
}
