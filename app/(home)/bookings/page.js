import { auth } from "@/auth";
import PastBookings from "@/components/profile/PastBookings";
import ProfileInfo from "@/components/profile/ProfileInfo";
import UpcommingBookings from "@/components/profile/UpcommingBookings";
import { redirect } from "next/navigation";

export default async function BookingsPage() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

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
