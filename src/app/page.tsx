import About from "./aboutus/page";
import Bottom from "./components/bottom";
import Nav from "./components/nav";
import FAQ from "./faq/page";
import Homepagee from "./home/page";
import Participate from "./participate/page";
import Polymaze from "./polymaze/page";
import Testimonies from "./testimonies/page";

export default function Home() {
  return (

    <div className="flex flex-col min-h-screen">
      {/* Main content fills available space */}
      <main className="flex-grow">
<Nav />
      <Homepagee/>
      < Polymaze/>
      <Participate/>
      <Testimonies/>
      <FAQ/>
      <About/>      </main>

      {/* Footer sticks to bottom even on short pages */}
      <Bottom />
    </div>

  );
}
