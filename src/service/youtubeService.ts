interface YouTubeService {
  youTubeKey: string | undefined;
}

class YouTubeService implements YouTubeService {
  static #youTubeKey = process.env.YOUTUBE_API_KEY;

  static async getPopularVideos() {
    // console.log("called me");
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${
        YouTubeService.#youTubeKey
      }`
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const videoData = await res.json();
    // console.log(videoData);
    return videoData.items;
  }

  static async getVideo(query: string) {
    // console.log("called me");
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${query}&key=${
        YouTubeService.#youTubeKey
      }`
    );
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const videoData = await res.json();
    // console.log(videoData);
    return videoData.items;
  }
}

export default YouTubeService;
