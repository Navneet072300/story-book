const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "create kids story on description for 5-8 Years kids, Educational story, and all images in Paper cut style: story of boy and Magic School, give me 5 chapter, With detailed image text prompt for each of chapter and image prompt for story cover book with story name, all in JSON field format\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "storyTitle": "The Boy Who Found the Floating School",\n  "coverImagePrompt": {\n     "text": "A whimsical paper-cut illustration for a children\'s book cover. The title \'The Boy Who Found the Floating School\' is displayed in a playful font at the top. Below, a young boy with messy brown hair and a bright blue backpack stands in a field of vibrant, stylized paper-cut flowers. Above him, a schoolhouse with a clock tower floats gently in the sky, supported by paper-cut clouds. The schoolhouse is painted in bright, cheerful colors with paper-cut windows and doors. The overall style should be bright, cheerful, and have a layered paper-cut appearance with visible texture lines.",\n        "style": "Paper cut, whimsical, vibrant, layered"\n  },\n  "chapters": [\n    {\n      "chapterNumber": 1,\n      "chapterTitle": "The Unexpected Invitation",\n      "chapterText": "Toby was a boy who loved to explore. One sunny morning, while chasing a particularly bouncy butterfly, he stumbled upon a hidden path he’d never seen before. The path led him to a sparkly, oversized envelope lying in the grass. It was addressed to ‘Toby, Explorer of Curious Things.’ Inside was a paper-cut map, leading to a school… floating in the sky!",\n      "imagePrompt": {\n        "text": "Paper-cut illustration of a young boy, Toby, with messy brown hair and a blue backpack, standing in a vibrant green field with stylized, paper-cut flowers. He\'s holding an oversized, sparkly envelope with a paper-cut map sticking out of it. The background should show a winding path and hints of trees and a blue sky above.",\n        "style": "Paper cut, bright, layered, whimsical, slightly tilted perspective to emphasize the path"\n      }\n    },\n    {\n      "chapterNumber": 2,\n      "chapterTitle": "Climbing the Cloud Ladder",\n      "chapterText": "Following the map, Toby reached a fluffy white cloud, where a long, paper-cut ladder magically appeared. He carefully climbed, feeling a little bit nervous but mostly excited. As he climbed, he saw birds made of colorful paper-cut shapes fly past and the world below get smaller and smaller. The ladder was bouncy, like walking on marshmallows!",\n      "imagePrompt": {\n        "text": "Paper-cut illustration of a young boy, Toby, climbing a long, white paper-cut ladder that seems to lead into a fluffy cloud. The ladder should look bouncy. Paper-cut birds of different colors and shapes are flying around him. Below, stylized paper-cut fields and houses are visible, becoming smaller as the view goes up. The background should be a bright blue sky.",\n        "style": "Paper cut, perspective to show the height, vibrant, layered, whimsical"\n      }\n    },\n    {\n      "chapterNumber": 3,\n      "chapterTitle": "Inside the Floating School",\n      "chapterText": "Toby finally reached the floating school. It was even more amazing than he imagined! The walls were painted in all the colors of the rainbow, and the classrooms were filled with peculiar things. One classroom had floating bubbles filled with numbers, another had plants that talked, and another had paper-cut planets orbiting a tiny, shining sun. He even saw paper-cut squirrels learning how to sing!",\n      "imagePrompt": {\n         "text": "Paper-cut illustration of the inside of a vibrant, magical school. Classrooms are visible, each unique: one with floating bubbles containing numbers, one with talking paper-cut plants, and another with paper-cut planets orbiting a small, bright sun. A group of paper-cut squirrels sits in a corner, singing. The style is bright, colorful, and playful with a layered paper-cut aesthetic.",\n        "style": "Paper cut, detailed, vibrant, whimsical, layered, slightly chaotic to show the fun"\n      }\n    },\n    {\n      "chapterNumber": 4,\n      "chapterTitle": "Learning is Magic",\n       "chapterText": "Toby joined a class where they were mixing colors to create paper-cut animals. He learned that red and yellow made orange, and blue and yellow made green. Then, they used numbers to help the paper-cut animals build houses out of paper-cut blocks! Toby had never had so much fun learning. He discovered that magic wasn\'t just tricks; it was everywhere!",\n        "imagePrompt": {\n           "text": "Paper-cut illustration of a classroom where children, including Toby, are mixing paints to create paper-cut animals. Paper-cut animals are scattered around. Some children are using paper-cut number blocks to build little houses for the paper animals. The scene is bright and colorful, with an emphasis on the process of mixing colors and using numbers. It should have a playful, layered paper-cut look.",\n          "style": "Paper cut, bright, process focused, educational, layered, whimsical"\n        }\n    },\n     {\n      "chapterNumber": 5,\n      "chapterTitle": "Back Down the Cloud and Home",\n      "chapterText": "As the sun began to set, Toby knew it was time to go home. He said goodbye to his new paper-cut friends and slid down the bouncy cloud ladder. He landed softly back in the field, his heart full of joy and new knowledge. He knew that even though he was back on solid ground, he would never forget his day at the floating school. And who knows, maybe he\'d find another invitation someday soon!",\n      "imagePrompt": {\n        "text": "Paper-cut illustration of Toby sliding down the bouncy cloud ladder back to the ground. He is waving goodbye. The floating school and clouds are still visible in the sky. Below, stylized paper-cut fields and trees are present. The scene should convey a sense of return and anticipation for future adventures. The style is bright, slightly melancholic with a sense of wonder, and has a layered paper-cut look.",\n        "style": "Paper cut, bright, peaceful, whimsical, layered, perspective showing the ladder and ground"\n      }\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});
