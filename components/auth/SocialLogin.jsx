import Image from "next/image";

export default function SocialLogin() {
  return (
    <>
      <div>
        <div className="text-center text-xs text-gray-500">or Signup with</div>
        <div className="flex gap-4">
          <button className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
            <Image src="/fb.png" width={30} height={50} alt="fb" />
            <span>Facebook</span>
          </button>
          <button className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
            <Image src="/google.png" width={30} height={50} alt="google" />
            <span>Google</span>
          </button>
        </div>
      </div>
    </>
  );
}
