  import scaleImg from "/public/scale.jpg";
import { Hero } from "@/components/hero";

export default function ScalePage() {
  return (
    <Hero
      image={scaleImg}
      alt="Steel Factory"
      title="Scale your app to infinity."
    />
  );
}
