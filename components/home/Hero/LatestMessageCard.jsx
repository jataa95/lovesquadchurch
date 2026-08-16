import VideoCard from "@/components/ui/VideoCard";
import { hero } from "@/data/hero";

export default function LatestMessageCard() {
  return (
    <VideoCard
      label="Latest Message"
      title={hero.latestMessage.title}
      subtitle={hero.latestMessage.subtitle}
      image=""
    />
  );
}