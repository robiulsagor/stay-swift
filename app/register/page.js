import RegistrationForm from "@/components/auth/RegistrationForm";
import SocialLogin from "@/components/auth/SocialLogin";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <section class="h-screen grid place-items-center">
      <div class="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 class="font-bold text-2xl">Sign up</h4>

        <RegistrationForm />
        <div className="text-center text-sm text-gray-500 mb-4">
          <Link href="/login" className="underline">
            Login
          </Link>{" "}
          your Account
        </div>
        <SocialLogin />
      </div>
    </section>
  );
};

export default RegisterPage;
