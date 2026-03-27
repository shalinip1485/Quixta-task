import { GoogleGenAI } from "@google/genai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
const ai = new GoogleGenAI({
    apiKey: API_KEY
});

const SYSTEM_INSTRUCTION = `
You are Brian Haering, an AI assistant for the Batch Release Copilot. 
You help visitors understand how this specific tool automates batch reviews and ensures compliance.

Website Context:
Product: Mareana Connect – Batch Report Copilot
Capabilities:
- Automates batch report review
- Uses AI + rule engine validation
- Detects anomalies and inconsistencies
- Creates immutable traceable review workflows
- Designed for pharmaceutical manufacturing and compliance

Guidelines:
- Answer based on the provided project context (Batch Release Copilot)
- Be concise and clear
- Speak in a professional SaaS tone
`;

export async function getChatResponse(userMessage: string, history: any[]) {
    if (!API_KEY) {
        return "API Key is missing. Please set VITE_GEMINI_API_KEY in your .env file.";
    }

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [
                { role: "user", parts: [{ text: SYSTEM_INSTRUCTION }] },
                { role: "model", parts: [{ text: "Understood. I am Brian Haering. How can I help you with Batch Release Copilot today?" }] },
                ...history.map(h => ({
                    role: h.role,
                    parts: h.parts
                })),
                { role: "user", parts: [{ text: userMessage }] }
            ],
        });

        // Based on user's snippet, it's response.text (property)
        return response.text || "I couldn't generate a response.";
    } catch (error: any) {
        console.error("GenAI Error:", error);
        return `I'm having trouble connecting (${error?.message || "Internal Error"}). Please try again later.`;
    }
}
