import BookRow from "./BookRow";
import CompanyRow from "./CompanyRow";
import { PrimaryButton } from "./PrimaryButton";

export default async function CollaborateList() {
  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-[1106px] grid grid-cols-12 gap-[22px] px-5">

        {/* Title & Description */}
        <div className="col-span-12 md:col-span-8 md:col-start-3 flex flex-col items-center gap-4">
          <h1 className="text-center text-white heading-sp-h1 leading-[68px] [text-shadow:_0px_0px_40px_rgb(147_112_219_/_0.50)]">
            As Seen in{" "}
            <span className="block md:inline">The Valthakan Times</span>
          </h1>

          <p className="text-center text-base font-normal font-['Eczar'] leading-6 text-[color:var(--color-blue-gray-400)]">
            Collaborations that shaped our stories,
            <span className="block md:inline"> and yours could be next.</span>
          </p>
        </div>

        {/* Content */}
        <div className="col-span-12 md:col-span-8 md:col-start-3 mt-8 flex flex-col gap-8">
          <BookRow />
          <CompanyRow />

          <a href="/about#social-section" className="inline-block w-full">
            <PrimaryButton
              text="Learn More"
              showLeftIcon={false}
              showRightIcon
            />
          </a>
        </div>

      </div>
    </section>
  );
}
