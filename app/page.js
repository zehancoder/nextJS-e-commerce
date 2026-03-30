import MainPage from "@/components/landing/MainPage";
import ViewProduct from "@/components/productView/ViewProduct";

export default function Home() {
  return (
    <>
      <div className="max-w-[1800px] mx-auto relative">
       <MainPage/>
       <ViewProduct/>
      </div>
    </>
  );
}
