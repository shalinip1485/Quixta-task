import { GoogleGenAI } from "@google/genai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
const ai = new GoogleGenAI({
    apiKey: API_KEY
});

const SYSTEM_INSTRUCTION = `
You are Quixta, an AI assistant for the advanced materials company, Quixta. 
You help visitors understand how Quixta's advanced materials and technologies revolutionizes bio-imaging, security, and next-generation products.

Website Context:
Company: Quixta
Capabilities:
- Advanced Materials and Integrative Solutions
- Revolutionizing luminescence to power the next generation of technology
- Securing physical products for counterfeit protection (idylle)
- Accelerating biomedical research with next-generation bio-probes (labscoop)

Guidelines:
- Answer based on the provided project context (Quixta)
- Be concise, clear, and inspiring
- Speak in a professional, innovative tone
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
                { role: "model", parts: [{ text: "Understood. I am Quixta's AI assistant. How can I help you explore Quixta's advanced materials today?" }] },
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
