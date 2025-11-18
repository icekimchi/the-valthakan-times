import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/people/Daniel-Alexander/pfbid0vxyTWx8qxw7rFzSa5S2WfkBPaaRxA5s9QxFS7NnznoEPTTYcV5gjtJhT17gW2wtyl/?mibextid=PtKPJ9", icon: FaFacebookF },
  { name: "Instagram", href: "https://www.instagram.com/dalecsander99/", icon: FaInstagram },
  { name: "TikTok", href: "https://www.tiktok.com/@dalecsander", icon: FaTiktok },
  { name: "YouTube", href: "https://www.youtube.com/@dalecsander", icon: FaYoutube },
  { name: "Discord", href: "https://www.patreon.com/cw/ValthakanLiteraryUniverse?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink", icon: FaDiscord },
];

type SocialLinksProps = {
  className?: string;
};

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((s) => {
        const Icon = s.icon;
        return (
          <Link
            key={s.name}
            href={s.href}
            aria-label={s.name}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-md bg-[color:var(--color-card-stroke)]
              text-[color:var(--color-indigo-500)]
              hover:bg-[color:var(--color-blue-600)]
              transition-colors
            "
          >
            <Icon className="text-lg" />
          </Link>
        );
      })}
    </div>
  );
}
