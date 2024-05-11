import LoginForm from "@/components/auth/LoginForm";
import SocialLogin from "@/components/auth/SocialLogin";
import Link from "next/link";

const LoginPage = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign in</h4>

        <LoginForm />
        <div className="text-center text-sm text-gray-500 mb-4">
          <Link href="/register" className="underline">
            Register
          </Link>{" "}
          new Account
        </div>
        <SocialLogin />
      </div>
    </section>
  );
};

export default LoginPage;
