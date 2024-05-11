import HotelList from "@/components/hotels/HotelList";
import Filter from "@/components/search/Filter";
import Search from "@/components/search/Search";

const HotelsListPage = () => {
  return (
    <>
      <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
        <div className="container items-center py-12 ">
          <Search fromList={true} />
        </div>
      </section>

      <section class="py-12">
        <div class="container grid grid-cols-12">
          <Filter />

          <HotelList />
        </div>
      </section>
    </>
  );
};

export default HotelsListPage;
