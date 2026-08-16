import { Play } from "lucide-react";

export default function VideoCard({
  label,
  title,
  subtitle,
  image,
}) {
  return (
    <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#1B1B1B] shadow-2xl">
      {/* Image Area */}
      <div className="relative h-[420px] overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#3B3B3B] via-[#222222] to-[#111111]" />

            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-[length:18px_18px]" />

            <div className="absolute inset-0 flex items-center justify-center">
              <button className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F04A23] text-white transition hover:scale-110">
                <Play fill="white" size={30} className="ml-1" />
              </button>
            </div>

            <p className="absolute bottom-6 w-full text-center text-xs uppercase tracking-[0.35em] text-white/40">
              Placeholder Image
            </p>
          </>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4 p-8">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#F04A23]">
          {label}
        </p>

        <h3 className="heading-font text-3xl leading-tight">
          {title}
        </h3>

        <p className="text-gray-400">
          {subtitle}
        </p>
      </div>
    </div>
  );
}