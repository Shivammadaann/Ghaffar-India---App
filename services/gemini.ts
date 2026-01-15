
import { GoogleGenAI, Type } from "@google/genai";
import { PRODUCTS } from "../data";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIShopperResponse = async (userQuery: string, history: { role: 'user' | 'model', text: string }[]) => {
  const productContext = JSON.stringify(PRODUCTS.map(p => ({
    name: p.name,
    category: p.category,
    price: p.price,
    description: p.description
  })));

  const systemInstruction = `
    You are the "Ghaffar India Assistant", a friendly AI personal shopper. 
    Your goal is to help customers find premium mobile cases, lighters, and 3D printed items.
    
    Our Current Inventory Context:
    ${productContext}
    
    Guidelines:
    1. Be concise, polite, and helpful.
    2. Suggest specific products from our list based on user needs.
    3. If they ask for something we don't have, suggest the closest alternative or offer to help find something similar in our catalog.
    4. Mention that we have premium cases starting at ₹599.
    5. Encourage them to explore "New Arrivals".
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: userQuery }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    return response.text || "I'm here to help you find the best accessories! What are you looking for today?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a little trouble connecting to my shopping database. How else can I assist you?";
  }
};
