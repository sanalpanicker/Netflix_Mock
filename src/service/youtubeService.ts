interface YouTubeService {
  youTubeKey: string | undefined;
}

class YouTubeService implements YouTubeService {
  constructor() {
    this.youTubeKey = process.env.YOUTUBE_API_KEY;
  }

  public async getVideo(query: string) {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${query}&key=${this.youTubeKey}`
    );
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const videoData = await res.json();
    return videoData.items;
  }
}

export default new YouTubeService();
