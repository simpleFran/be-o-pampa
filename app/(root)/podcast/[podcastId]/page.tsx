import React from "react";

const PodcastDetails = ({ params }: { params: { podcastId: string } }) => {
  return (
  <p className="shct-h1-title">Podcast Details for {params.podcastId}</p>
  )
};

export default PodcastDetails;
