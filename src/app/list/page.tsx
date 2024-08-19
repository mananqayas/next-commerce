import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image";

const page = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className=" hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center text-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on Selected Products
          </h1>
          <button className="rounded-3xl bg-manan text-white w-max px-5 text-sm py-3">
            BUY NOW
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      <Filter />
      {/* Product list */}
      <h1 className="text-xl font-semibold">Shoes For You!</h1>
      <ProductList />
    </div>
  );
};
export default page;
