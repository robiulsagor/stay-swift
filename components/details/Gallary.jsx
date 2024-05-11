import Image from "next/image";

export default function Gallary() {
  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image
          src="/images/1.png"
          className="h-[400px]"
          alt="hotel gallary"
          width={400}
          height={300}
        />
        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          <Image
            src="/images/2.png"
            alt="hotel gallary"
            width={200}
            height={200}
          />
          <Image
            src="/images/3.png"
            alt="hotel gallary"
            width={200}
            height={200}
          />
          <Image
            src="/images/4.png"
            alt="hotel gallary"
            width={200}
            height={200}
          />
          <Image
            src="/images/5.png"
            alt="hotel gallary"
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}
