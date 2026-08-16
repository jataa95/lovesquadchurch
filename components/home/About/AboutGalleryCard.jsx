import Image from "next/image";

export default function AboutGalleryCard({ image }) {
  return (
    <div
      className="
        relative
        w-[640px]
        h-[555px]
        shrink-0
        overflow-hidden
      "
    >
      <Image src={image} alt="About" fill className="object-cover" />
    </div>
  );
}
