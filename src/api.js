export async function getAllTrends() {
  return [
    {
      title: "YOASOBI",
      category: "music",
      video: "https://www.youtube.com/embed/x8VYWazR5mE",
      summary: "今話題の楽曲",
      reasons: ["TikTokバズ", "海外人気"],
      prediction: "急上昇",
      views: 1000,
      sns: 500,
      score: 1500
    },
    {
      title: "話題の映画",
      category: "movie",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      summary: "新作映画",
      reasons: ["主演俳優人気"],
      prediction: "ヒット",
      views: 800,
      sns: 300,
      score: 1100
    }
  ];
}
