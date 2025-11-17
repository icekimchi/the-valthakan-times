import Link from "next/link";

export default function Logo() {
    return (
      <>
        <div className="flex items-center space-x-3">
          <img
            src="/crone_logo.png"
            alt="The Valthakan Logo"
            className="h-[45px] w-[45px] object-contain"
          />
          <Link href="/" className="text-white text-3xl font-['Italianno']">The Valthakan</Link>
        </div>
      </>
    );
}