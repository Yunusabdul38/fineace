import Card from "../components/Card";
import { data } from "../service/data";

export default function KnowMore() {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
     {data.map((data,index)=><Card key={index} name={data.title} type="know-more"/>)}   
    </div>
  )
}
