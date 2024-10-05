import PodcastCard from "@/components/PodcastCard";
import { podcastData } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-2 flex flex-col gap-9">
      <section className="ml-12 flex flex-col gap-5">
        <h1
          className="feef-title text-[5rem] text-yellow-400  font-extrabold 
        ml-40
        titleContainer
        "
        >
          bioma pampa
        </h1>
        <Link href={"/narrative"}>
          <Image
            src={"/images/tuca-oficial.png"}
            width={148}
            height={148}
            alt="Mascote Tuca"
            className="mascot-container"
          />
        </Link>
        {/* <div className="feature_grid mx-auto mt-4 mb-2">
          <Narrative />
        </div> */}
        <div className="feature_grid ml-40 imageContainer">
          {podcastData.map(({ id, imgURL, description, title, href }) => (
            <Link href={href} key={id}>
              <PodcastCard
                key={id}
                imgURL={imgURL}
                title={title}
                description={description}
                podcastId={id}
              />
            </Link>
          ))}
        </div>

        {/* <div className="feature_grid mx-auto mt-4 mb-2">
          <Link href={"/quiz"}>Quiz</Link>
        </div> */}
      </section>
    </div>
  );
}
