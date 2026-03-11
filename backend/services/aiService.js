import Groq from "groq-sdk";

export const generateSummary = async (data) => {
  const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });

  const prompt = `
You are a senior sales analyst.

Analyze the following sales dataset and produce a short executive report including:

• Key revenue insights
• Best performing region
• Product category trends
• Overall performance summary

Dataset:
${JSON.stringify(data)}
`;

  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "llama-3.3-70b-versatile",
  });

  return completion.choices[0].message.content;
};
