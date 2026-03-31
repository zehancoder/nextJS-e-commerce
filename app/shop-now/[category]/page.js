import FilterSide from "@/components/filter/FilterSide";
import Client from "./Client";

function page({ params }) {
  return (
    <div className=" max-w-[1800px] px-2 py-12 bg-[#FFFAF3] mx-auto">
      <Client params={params} />
    </div>
  );
}

export default page;
