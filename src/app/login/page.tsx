import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import { PrimaryButton } from "@/components/PrimaryButton";

export default function Login(){
    return (
        <section className="py-45">
            <div
                className="
                pointer-events-none
                absolute inset-0
                bg-[url('/sparkling.png')]
                bg-cover bg-center bg-no-repeat
                opacity-50
                "
            />
            <div className="self-stretch flex flex-col justify-start items-center gap-25">
                <div className="flex items-center gap-3 w-[300px] h-[60px]">
                    <img
                        src="/crone_logo.png"
                        width={60}
                        height={60}
                        className="object-contain flex-shrink-0"
                    />

                    <img
                        src="/valthakan_logo.svg"
                        width={240}
                        height={40}
                        className="object-contain flex-shrink-0"
                    />
                </div>
                <div className="w-96 flex flex-col justicy-start items-start gap-5">
                    <SearchBar/>
                    <Link href="/" className="w-full">
                        <PrimaryButton text="Login" showLeftIcon={false} showRightIcon={false} />
                    </Link>
                    <p className="w-full pt-10 text-center text-white font-['Eczar']">
                        Create Your New Account ➜
                    </p>
                </div>
            </div>
        </section>
    );
}