const memeImages = [];

const imageUrls = [
  "/assets/memes/ml-model-training.jpeg",
  "/assets/memes/backenddev-doing-frontend.jpg",
  "/assets/memes/project-code.jpg",
  "/assets/memes/google-work.jpg",
  "/assets/memes/employee-experience.jpeg",
  "/assets/memes/dsa-cp-dev.jpeg",
  "/assets/memes/ml-training-data.jpg",
  "/assets/memes/coding-happiness.jpg",
  "/assets/memes/before-and-after-chatgpt.jpg",
  "/assets/memes/notion-todo.jpg",
  "/assets/memes/copying-code.jpg",
  "/assets/memes/chatgpt-programmer.jpg",
  "/assets/memes/code-showcase.jpg",
  "/assets/memes/coding-without-learning.jpg",
  "/assets/memes/debt.jpg",
  "/assets/memes/designers-developers.jpg",
  "/assets/memes/do-while-loop.jpg",
  "/assets/memes/devin.jpg",
  "/assets/memes/intern-commented-code.jpg",
  "/assets/memes/youtube-recommendation-meme.jpg",
  "/assets/memes/Google-search.jpg",
  "/assets/memes/no-idea-why-code-work.gif",
  "/assets/memes/nvidia.jpg",
  "/assets/memes/openai-microsoft-collab.jpg",
  "/assets/memes/software-project.jpg",
  "/assets/memes/startup-valuation.jpg",
  "/assets/memes/status-code.jpg",
  "/assets/memes/stopsign.jpg",
  "/assets/memes/useless-code.jpg",
  "/assets/memes/user-report-bug.jpg",
  "/assets/memes/windows-ubuntu.jpg",
  "/assets/memes/frontend-backend.jpeg",
  // "/assets/memes/memes-coding.jpg",
];

for(let i=0;i<imageUrls.length;i++){
  const image = {
    "id":i+1,
    "url":imageUrls[i]
  }
  memeImages.push(image);
}
export default memeImages;
