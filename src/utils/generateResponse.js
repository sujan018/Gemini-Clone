import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);

const getResponse = async (prompt) => {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // const prompt = "Write a story about a magic backpack."

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    // console.log(text);
    return text;
}

export default getResponse;

// run();

const temp = [
    "explain gemini in heading", `**Gemini: The Twins**

    **Symbol:** Twins
    
    **Element:** Air
    
    **Ruling Planet:** Mercury
    
    **Astrological Traits:**
    
    * **Mutable Sign:** Adaptable, flexible, and curious
    * **Dual Sign:** Represents both light and dark, good and bad
    * **Intellectual:** Intelligent, communicative, and analytical
    
    **Personality Characteristics:**
    
    * **Communication Skills:** Excellent verbal and written communication abilities
    * **Intellect:** Curious, inquisitive, and always seeking knowledge
    * **Charisma:** Charming, witty, and sociable
    * **Flexibility:** Adapts easily to changing situations and perspectives
    * **Ambivalence:** Can be indecisive or have conflicting emotions
    * **Flightiness:** Can sometimes be scattered or lack focus
    
    **Strengths:**
    
    * Intelligence
    * Communication
    * Adaptability
    * Open-mindedness
    * Curiosity
    
    **Weaknesses:**
    
    * Indecisiveness
    * Superficiality
    * Flightiness
    * Gossip
    * Nervousness
    
    **Relationships and Compatibility:**
    
    * **Compatible Signs:** Libra and Aquarius
    * **Challenges:** Pisces and Virgo
    * **Seek:** Intellectual stimulation and communication
    * **Avoid:** Relationships that are too structured or limiting
    
    **Career and Vocations:**
    
    * Communication professions (e.g., journalism, writing, public relations)
    * Education and research
    * Sales and marketing
    * Entrepreneurship
    * Technology`
]