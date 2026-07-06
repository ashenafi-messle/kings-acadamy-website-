import Hero from "@/src/components/home/Hero/Hero";
import { Achievements } from "@/src/components/home/Achievements/Achievements";
import { Facilities } from "@/src/components/home/Facilities/Facilities";
import { Programs } from "@/src/components/home/Programs/Programs";
import { Statistics } from "@/src/components/home/Statistics/Statistics";
import { StudentLife } from "@/src/components/home/StudentLife/StudentLife";
import { WhyChooseUs } from "@/src/components/home/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Statistics />
      <WhyChooseUs />
      <Programs />
      <Facilities />
      <StudentLife />
      <Achievements />
    </main>
  );
}
