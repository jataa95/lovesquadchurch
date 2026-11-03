import SectionTitle from "@/components/ui/SectionTitle";
import { loveSpots } from "@/data/lovespots";

export default function LoveSpotsHeader() {
  return <SectionTitle top={loveSpots.titleTop} accent={loveSpots.titleBottom} />;
}
