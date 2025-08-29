'use server';
/**
 * @fileOverview A chatbot flow that answers questions about Nidhi Maiti.
 *
 * - askChatbot - A function that handles chatbot queries.
 * - ChatbotInput - The input type for the askChatbot function.
 * - ChatbotOutput - The return type for the askChatbot function.
 */

import {ai} from '@/ai/genkit';
import {Bio} from '@/data/constants';
import {z} from 'genkit';

const ChatbotInputSchema = z.object({
  query: z.string().describe("The user's question about Nidhi Maiti."),
});
export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

export type ChatbotOutput = string;

/**
 * A non-AI fallback function to answer questions from the hardcoded Bio data.
 * This is used when a GenAI API key is not available.
 * @param query The user's question.
 * @returns A string response based on simple keyword matching.
 */
function getAnswerFromBio(query: string): string {
    const q = query.toLowerCase();

    if (q.includes('who is') || q.includes('about nidhi') || q.includes('describe her') || q.includes('who is nidhi maiti')) {
        return Bio.description;
    }

    if (q.includes('skill')) {
        const skillSummary = Bio.skills.map(category => {
            const skillNames = category.skills.map(skill => skill.name).join(', ');
            return `• ${category.title}: ${skillNames}`;
        }).join('\n');
        return `Nidhi has a diverse skill set across different domains. Here's a summary:\n\n${skillSummary}\n\nYou can find more details in the Skills section.`;
    }

    if (q.includes('project')) {
        const projectTitles = Bio.projects.map(p => p.title).join(', ');
        return `Nidhi's key projects include: ${projectTitles}. You can explore these in detail in the Projects section.`;
    }

    if (q.includes('experience')) {
        const experienceSummary = Bio.experience.map(exp => `• ${exp.role} at ${exp.company}`).join('\n');
        return `Here is a summary of Nidhi's work experience:\n\n${experienceSummary}\n\nFor more details, please visit the Experience section.`;
    }
    
    if (q.includes('education')) {
        const educationSummary = Bio.education.map(edu => `• ${edu.degree} from ${edu.school}`).join('\n');
        return `Here is Nidhi's educational background:\n\n${educationSummary}\n\nMore information is available in the Education section.`;
    }
    
    if (q.includes('contact') || q.includes('connect')) {
        return `You can connect with Nidhi on LinkedIn (${Bio.linkedin}). You can also send her a message using the contact form on this site.`;
    }

    if (q.includes('resume')) {
        return `You can view or download Nidhi's resume here: ${Bio.resume}`;
    }
    
    // A more generic fallback.
    return "I'm sorry, I can only answer specific questions about Nidhi's portfolio. Try asking about her skills, experience, projects, education, or how to contact her.";
}


export async function askChatbot(input: ChatbotInput): Promise<ChatbotOutput> {
  // If no API key is available, use the non-AI fallback.
  // This allows the chatbot to function without needing a GenAI provider.
  if (!process.env.GOOGLE_API_KEY) {
    return getAnswerFromBio(input.query);
  }
  // If an API key is found, use the Genkit flow.
  return chatbotFlow(input);
}

const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatbotInputSchema,
    outputSchema: z.string(),
  },
  async ({query}) => {
    // Stringify the Bio object to pass it as context.
    // We'll remove image data as it's not useful for a text-based model.
    const bioContext = JSON.stringify(Bio, (key, value) => {
        if (key === 'image' || key === 'img') {
            return undefined;
        }
        return value;
    });

    const prompt = `You are a helpful and friendly AI assistant for Nidhi Maiti's portfolio website.
Your goal is to answer questions about Nidhi's skills, experience, projects, and education.
You MUST use ONLY the information provided in the following JSON data to answer the user's questions.
Do not make up any information. If the answer is not in the provided data, say that you don't have that information.
Keep your answers concise, professional, and friendly.

Here is the information about Nidhi Maiti:
${bioContext}

User's question: "${query}"
`;

    const {output} = await ai.generate({
      prompt: prompt,
    });
    
    return output || "I'm sorry, I couldn't generate a response. Please try again.";
  }
);
