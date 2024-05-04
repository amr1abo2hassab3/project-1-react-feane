
import Landing from "../components/Landing/Landing";
import HeroMenu from "../components/heroMenu/HeroMenu";
import Sec1 from "../components/sec1/sec1";
import Sec2 from "../components/sec2/sec2";
import Sec3 from "../components/sec3/sec3";
import Sec4 from "../components/sec4/sec4";

function Home(){
    return (
      <div>
        <Landing />
        <HeroMenu />
        <Sec1 />
        <Sec2 />
        <Sec3 />
        <Sec4 />
      </div>
    );
}

export default Home ;