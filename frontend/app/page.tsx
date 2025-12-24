import Hero from "@/components/layout/Hero/Hero";
import EditorsPicks from "@/components/layout/News/EditorsPicks";
import MoreNewsSection from "@/components/layout/News/MoreNews";
import RawListNews from "@/components/layout/News/RowListNews";
import TwoPartNews from "@/components/layout/News/TwoPartNews";
import NewsFooter from "@/components/layout/Others/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <RawListNews />
      <TwoPartNews />
      <EditorsPicks/>
      <MoreNewsSection/>
    </div>

  );
}
