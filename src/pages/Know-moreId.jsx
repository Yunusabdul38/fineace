import { useParams } from "react-router-dom";
import NavigationBar from "../components/navigation";
import Footer from "../components/footer";
import { data as content } from "../service/data";
import Hero from "../components/Hero";

export default function KnowMoreId() {
  const { id } = useParams();
  const data = content.find((cont) => cont.title == id.replaceAll("-", " "));
  return (
    <>
      <NavigationBar />
      <Hero heroText={data.title} btn="no-btn"/>
      <section className="md:max-w-5xl md:px-20 px-5 mx-auto grid gap-5 font-LexendDeca">
        <h1 className="text-2xl">{data.header}</h1>
        <h2 className="text-xl capitalize text-orangeText">key points</h2>
        <div className="grid gap-4">
            {data.paragraph.map((details,index)=><p key={index}>{details}</p>)}
        </div>
        <h2 className="text-xl capitalize text-orangeText">conclusion</h2>
        <p>{data.conclution}</p>
      </section>
      <Footer />
    </>
  );
}
