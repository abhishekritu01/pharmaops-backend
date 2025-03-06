import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
    const { url } = req;

    if (url === "/home") {
        return res.json({ message: "Welcome to the Home Page! 🏠" });
    }

    if (url === "/about") {
        return res.json({ message: "This is the About Page! ℹ️" });
    }

    return res.status(404).json({ error: "Route not found" });
}