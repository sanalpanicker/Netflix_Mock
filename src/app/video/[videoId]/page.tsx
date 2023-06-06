import VideoModal from "./videoModal";
import NavBar from "@/components/NavBar";
import YouTubeService from "@/service/youtubeService";
import styles from "./video.module.css";

const getVideoData = async (id) => {
  console.log(id);
  const videoDataArray = await YouTubeService.getVideoDetailsById(id);
  const post = await videoDataArray.json();
  // console.log(post);
  return post;
};

export const generateStaticParams = async () => {
  console.log("in generateStaticParams");
  const listOfVideos = ["mYfJxlgR2jw", "4zH5iYM4wJo", "KCPEHsAViiQ"];
  const paths = listOfVideos.map((videoId) => ({
    params: { videoId },
  }));
  return paths;
};

const Video = async ({ params }) => {
  const videoData = await getVideoData(params.videoId);

  return (
    <div className={styles.container}>
      <NavBar />
      <VideoModal video={videoData} />
    </div>
  );
};

export default Video;
