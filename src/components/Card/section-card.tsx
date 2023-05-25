import Card from "@/components/Card";
import Link from "next/link";
import clsx from "classnames";
import styles from "./section-card.module.css";

const SectionCards = (props) => {
  const { title, videos = [], size, shouldWrap = false, shouldScale } = props;
  console.log(videos);
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={clsx(styles.cardWrapper, shouldWrap && styles.wrap)}>
        {videos.map((video, idx) => {
          return (
            <Link href={`/video/${video.id.videoId}`} key={video.id.videoId}>
              <Card
                id={idx}
                imgUrl={video.snippet.thumbnails.high.url}
                size={size}
                shouldScale={shouldScale}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SectionCards;
