import RecentProduct from "@/components/recent";
import Hero from "./_components/Hero";
import SectionOne from "./_components/Section/SectionOne";
import SectionTwo from "./_components/Section/SectionTwo";

export default function Home() {
  return (
    <div className="  min-h-screen p-8 gap-16 ">
      <main className="flex flex-col gap-[32px] row-start-2 ">
        <div>
          <Hero />

          <div className="min-h-24"></div>
          <SectionOne />
          <SectionTwo />
          <div className="min-h-24"></div>

          <RecentProduct />
        </div>
      </main>
    </div>
  );
}
