import About from "./aboutus/page";
import Nav from "./components/nav";
import FAQ from "./faq/page";
import Homepagee from "./home/page";
import Participate from "./participate/page";
import Polymaze from "./polymaze/page";
import Testimonies from "./testimonies/page";

export default function Home() {
  return (
    <div className="bg-black">
      <Nav />
      <Homepagee />
      < Polymaze/>
      <Participate/>
      <Testimonies/>
      <FAQ/>
      <About/>
    </div>
  );
}
