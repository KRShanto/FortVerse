import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-[#0a0d11] px-20 py-5">
      <h1 className="text-3xl font-bold italic">
        Fort
        <span className="text-[#00BFFC]">Verse</span>
      </h1>

      <div className="flex items-center gap-5 text-xl">
        <Link href="/about">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/more">More</Link>
      </div>

      <button className="text-mainColor border-mainColor border px-5">
        Button
      </button>
    </nav>
  );
}
