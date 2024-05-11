import PastBookings from "@/components/profile/PastBookings";
import ProfileInfo from "@/components/profile/ProfileInfo";
import UpcommingBookings from "@/components/profile/UpcommingBookings";

export default function BookingsPage() {
  return (
    <>
      <div>
        <section className="mt-[100px]">
          <div className="container">
            <ProfileInfo />
          </div>
        </section>
        <section>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <PastBookings />

              <UpcommingBookings />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
