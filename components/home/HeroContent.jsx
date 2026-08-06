import Button from "@/components/ui/Button";
import { hero } from "@/data/home";

export default function HeroContent() {
  return (
    <div className="max-w-xl">
      <p className="mb-5 uppercase tracking-[0.3em] text-[#F04A23]">
        {hero.tag}
      </p>

      <h1 className="heading-font text-6xl leading-none uppercase md:text-8xl lg:text-[120px]">
        {hero.title}
      </h1>

      <p className="mt-8 text-lg leading-8 text-gray-300">
        {hero.description}
      </p>

      <div className="mt-10">
        <Button>{hero.button}</Button>
      </div>
    </div>
  );
}