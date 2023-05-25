import Banner from "@/components/Banner";
import youtubeService from "@/service/youtubeService";
import SectionCards from "@/components/Card/section-card";
import NavBar from "@/components/NavBar";

async function getData(query: string) {
  let data = {};
  try {
    const data = await youtubeService.getVideo(query);
    console.log(data);
    return data;
  } catch (e) {}
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
}

const Home = async () => {
  const disneyData = getData("disney");
  const travelData = getData("travel");
  const technologyData = getData("technology");
  const malayalamMovies = getData("malayalam movie song 2021");

  const [disney, travel, technology, movie] = await Promise.all([
    disneyData,
    travelData,
    technologyData,
    malayalamMovies,
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
      <SectionCards videos={disney} title={"Disney"} size={"large"} />
      <SectionCards videos={travel} title={"Travel"} size={"small"} />
      <SectionCards videos={technology} title={"Technology"} size={"medium"} />
      <SectionCards videos={movie} title={"Malayalam Movies"} size={"large"} />
    </>
  );
};

export default Home;
