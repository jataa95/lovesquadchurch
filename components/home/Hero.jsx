import { hero } from "@/data/home";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-[#111111] text-white">
      <Container className="py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <p className="mb-5 uppercase tracking-[0.3em] text-[#F04A23]">
              {hero.tag}
            </p>

            <h1 className="heading-font text-6xl leading-none uppercase md:text-8xl lg:text-[120px]">
              {hero.title}
            </h1>

            <p className="mt-8 max-w-lg leading-8 text-gray-300">
              {hero.description}
            </p>

            <div className="mt-10">
              <Button>{hero.button}</Button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div className="overflow-hidden rounded-3xl bg-[#1E1E1E]">
              <div className="flex h-[420px] items-center justify-center bg-gray-700 text-white">
                Placeholder Image
              </div>

              <div className="p-8">
                <p className="text-xs uppercase tracking-widest text-orange-500">
                  Latest Message
                </p>

                <h3 className="heading-font mt-3 text-3xl">
                  {hero.latestMessage.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {hero.latestMessage.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}