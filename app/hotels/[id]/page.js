import Gallary from "@/components/details/Gallary";
import Overview from "@/components/details/Overview";
import Summary from "@/components/details/Summary";

const HotelsDetailsPage = () => {
  return (
    <>
      <div>
        <Summary />

        <Gallary />

        <Overview />
      </div>
    </>
  );
};

export default HotelsDetailsPage;
