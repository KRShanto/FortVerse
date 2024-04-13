import { Iceberg, K2D } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/../public/hero.png";

const iceberg = Iceberg({ weight: "400", subsets: ["latin"] });
const k2d = K2D({ weight: "800", subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="flex p-20">
      {/* Left-hand side */}
      <div className="w-[40%]">
        {/* Title */}
        <h2 className="text-6xl font-bold">
          <span style={iceberg.style}>Unlock Your Potential with</span>{" "}
          <span className="font-bold italic" style={k2d.style}>
            Fort
            <span className="text-[#00BFFC]">Verse</span>
          </span>
        </h2>

        {/* Links */}
        <div className="mt-14 flex gap-5">
          <Link
            href="/learn"
            className="text-mainColor border-mainColor border px-5 py-1"
          >
            Learn More
          </Link>
          <Link
            href="/register"
            className="text-mainColor border-mainColor border px-5 py-1"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Right-hand side */}
      <div className="w-[60%]">
        <Image
          src={HeroImage}
          alt="Hero Image"
          className="mx-auto"
          height={200}
        />
        {/* Quote */}
        <blockquote className="mt-5 text-2xl">
          &rdquo;At FortVerse, we offer a wide range of services to help your
          business thrive. From graphic design to web app development,
          we&apos;ve got you covered.&rdquo;
        </blockquote>
      </div>
    </div>
  );
}
