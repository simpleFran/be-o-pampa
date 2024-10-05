import Image from "next/image";
import React from "react";

const PodcastCard = ({
  podcastId,
  description,
  imgURL: imgUrl,
  title,
  
}: {
  imgURL: string;
  podcastId: number;
  description: string;
  title: string;
  
}) => {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <Image
          src={imgUrl}
          width={128}
          height={128}
          alt={title}
          className="object-fit rounded-full border-green-2 border-y-2"
        />
        <div className="flex flex-col">
          <h1 className="truncate font-extrabold feef-h1 text-[1.5rem] text-white-1">
            {title}
          </h1>
          {/* <h2 className="text-[1.2rem]  truncate font-bold capitalize text-white-1">{description}</h2> */}
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
