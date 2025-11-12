import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  serviceName: string;        // Service name (e.g., "Spotify")
  serviceSubtitle: string;    // Subtitle (e.g., "Valthakan on Air")
  backgroundImage: string;    // Background image URL
  serviceImage: string;       // Service logo/image URL
  serviceLink: string;
};

export default function ServiceCard({
  serviceName,
  serviceSubtitle,
  backgroundImage,
  serviceImage,
  serviceLink,
}: ServiceCardProps) {
  return (
    <article
      className="
        relative isolate
        w-full
        rounded-lg overflow-hidden
        border border-[1px] border-[color:var(--color-indigo-900)]
        bg-clip-padding
        shadow-indigo
        flex flex-col items-center
      "
      aria-label={`${serviceName}: ${serviceSubtitle}`}
    >
      <div
        className="
          absolute inset-0 -z-10 pointer-events-none
          bg-[linear-gradient(180deg,_var(--color-blue-gray-900)_40%,_var(--color-indigo-600)_100%)]
        "
      />
      
      {/* Background section with color overlay */}
      <Link
        href={serviceLink} target="_blank" rel="noopener noreferrer"
        className="relative self-stretch h-24 rounded-t-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Overlay with #120F2E at 50% opacity */}
        <div className="absolute inset-0 bg-[#120F2E]/50 rounded-t-lg" />
      </Link>
        

      {/* Main content */}
      <div className="px-6 pb-6 flex flex-col items-center gap-4 -mt-8">
        {/* Service image */}
        <Link href={serviceLink} target="_blank" rel="noopener noreferrer" 
          className="relative w-16 h-16 rounded-lg overflow-hidden ring-1 ring-white/10 bg-black/20">
          <Image
            src={serviceImage}
            alt={`${serviceName} logo`}
            width={64}
            height={64}
            className="object-cover w-16 h-16"
          />
        </Link>

        {/* Text info */}
        <header className="text-center space-y-1">
          <Link href={serviceLink} target="_blank" rel="noopener noreferrer">
            <h3 className="mt-3 text-white heading-sp-h3-eczar leading-snug font-semibold hover:underline">
              {serviceName}
            </h3>
          </Link>
          <p className="text-[color:var(--color-palette-white)] text-base font-regular font-['Eczar'] leading-6">
            {serviceSubtitle}
          </p>
        </header>
      </div>
    </article>
  );
}
