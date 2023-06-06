interface YouTubeService {
  youTubeKey: string | undefined;
}

class YouTubeService implements YouTubeService {
  static #youTubeKey = process.env.YOUTUBE_API_KEY;

  static async getPopularVideos() {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${
        YouTubeService.#youTubeKey
      }`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const videoData = await res.json();
    return videoData.items;
  }

  static async getVideoDetailsById(videoId: string) {
    const videoDataArray = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${
        YouTubeService.#youTubeKey
      }`
    );
    return videoDataArray;
  }

  static async getVideo(query: string) {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${query}&key=${
        YouTubeService.#youTubeKey
      }`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const videoData = await res.json();
    return videoData.items;
  }
}

export default YouTubeService;
