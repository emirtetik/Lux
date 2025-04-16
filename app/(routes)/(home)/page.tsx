import RecentProduct from "@/components/recent";
import Hero from "./_components/Hero";
import { SectionOne } from "./_components/Section/SectionOne";
import { SectionTwo } from "./_components/Section/SectionTwo";
import SectionThree from "./_components/Section/SectionThree";
import SectionFive from "./_components/Section/SectionFive";
import { SectionFour } from "./_components/Section/SectionFour";

export default function Home() {
  return (
    <div className="min-h-screen  gap-16">
      <main className="flex flex-col gap-[32px] row-start-2">
        <div>
          <Hero />

          <div className="min-h-34" />
          <SectionOne />

          <div className="mt-34" />

          <SectionTwo />
          
          <div className="mt-34" />

          <SectionThree />
          
          <div className="mt-34" />

          <SectionFour />

          
          <div className="mt-20" />
          <SectionFive/>
          <div className="min-h-34" />
          <RecentProduct />
        </div>
      </main>
    </div>
  );
}
