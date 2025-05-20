// import OpenAI from "openai";

// const openai = new OpenAI({
//   baseURL: "https://openrouter.ai/api/v1",
//   apiKey: process.env.EXPO_PUBLIC_OPENROUTER_API_KEY,
// });

// const AIMODELNAME="google/gemini-2.0-flash-exp:free"

// export const CalculateCaloriesAI = async (PROMPT) =>
//   await openai.chat.completions.create({
//     model: AIMODELNAME,
//     messages: [{ role: "user", content: PROMPT }],
//   response_format: 'json_object'
//   });

// // console.log(CalculateCalories.choices[0].message);
// services/AIModel.js
const AIMODELNAME = "google/gemini-2.0-flash-001";

export const CalculateCaloriesAI = async (PROMPT) => {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: AIMODELNAME,
        messages: [{ role: "user", content: PROMPT }],
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error(data);
    throw new Error(data?.error?.message || "AI API call failed");
  }

  return data;
};

// export const GenerateRecipeOptions = async (PROMPT) =>
//   await openai.chat.completions.create({
//     model: AIMODELNAME,
//     messages: [{ role: "user", content: PROMPT }],
//     response_format: "json_object",
//   });

export const GenerateRecipeOptionsAiModel = async (PROMPT) => {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: AIMODELNAME,
        messages: [{ role: "user", content: PROMPT }],
        response_format: "json_object",
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error(data);
    throw new Error(data?.error?.message || "AI API call failed");
  }

  if (data?.error?.code === 429) {
    throw new Error(
      "Model is currently rate-limited. Please try again in a few minutes."
    );
  }

  return data;
};
