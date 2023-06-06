import Banner from "@/components/Banner";
import YouTubeService from "@/service/youtubeService";
import SectionCards from "@/components/Card/section-card";
import NavBar from "@/components/NavBar";

async function getData(query: string) {
  let data = {};
  try {
    const data = await YouTubeService.getVideo(query);
    // console.log(data);
    return data;
  } catch (e) {}
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
}

async function getPopularVideos() {
  let data = {};
  try {
    const data = await YouTubeService.getPopularVideos();
    // console.log(data);
    return data;
  } catch (e) {}
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors
}

const Home = async () => {
  const disneyData = getData("Frontend javascript");
  const travelData = getData("Engineering");
  const technologyData = getData("NextJS 13");
  const malayalamMovies = getData("AI and GPT");
  const popularVideos = getPopularVideos();

  const [disney, travel, technology, movie, popular] = await Promise.all([
    disneyData,
    travelData,
    technologyData,
    malayalamMovies,
    popularVideos,
  ]);

  return (
    <>
      <NavBar />
      <Banner
        title="Clifford the red Dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
        videoId=""
      />
      <SectionCards videos={popular} title={"Popular Videos"} size={"large"} />
      <SectionCards
        videos={disney}
        title={"Disney turning red"}
        size={"large"}
      />
      <SectionCards videos={travel} title={"Travel"} size={"small"} />
      <SectionCards videos={technology} title={"Technology"} size={"medium"} />
      <SectionCards videos={movie} title={"Malayalam Movies"} size={"large"} />
    </>
  );
};

export default Home;
