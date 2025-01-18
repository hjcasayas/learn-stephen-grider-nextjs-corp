import homeImg from "/public/home.jpg";
import { Hero } from "@/components/hero";

export default function HomePage() {
  return (
    <Hero
      image={homeImg}
      alt="Car Factory"
      title="Professional Cloud Hosting"
    />
  );
}
