import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/"
      className="flex items-center space-x-3 h-full">
      <img
        src="/crone_logo.png"
        alt="The Valthakan Logo"
        width={40}
        height={40}
        className="object-contain"
      />

      <img
        src="/valthakan_logo.svg"
        alt="The Valthakan Logo"
        width={170}
        height={20}
        className="object-contain"
      />
     
    </Link>
  );
}
