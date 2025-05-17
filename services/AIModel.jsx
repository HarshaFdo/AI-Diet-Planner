// import OpenAI from "openai";

// const openai = new OpenAI({
//   baseURL: "https://openrouter.ai/api/v1",
//   apiKey: process.env.EXPO_PUBLIC_OPENROUTER_API_KEY,
// });

// export const CalculateCaloriesAI = async (PROMPT) =>
//   await openai.chat.completions.create({
//     model: "google/gemini-2.0-flash-exp:free",
//     messages: [{ role: "user", content: PROMPT }],
//   });

// // console.log(CalculateCalories.choices[0].message);
// services/AIModel.js

export const CalculateCaloriesAI = async (PROMPT) => {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.EXPO_PUBLIC_OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemini-2.0-flash-exp:free",
      messages: [{ role: "user", content: PROMPT }],
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error(data);
    throw new Error(data?.error?.message || "AI API call failed");
  }

  return data;
};

