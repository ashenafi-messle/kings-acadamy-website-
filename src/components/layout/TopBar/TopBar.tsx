import Link from "next/link";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { site } from "@/src/constants/site";

export function TopBar() {
  return (
    <div className="h-10 bg-footer text-white">
      <div className="container-x flex h-full items-center justify-between text-xs">
        <div className="hidden items-center gap-4 sm:flex">
          <div className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-white/90" />
            <a href={`tel:${site.contact.phone}`} className="hover:underline">
              {site.contact.phone}
            </a>
          </div>
          <div className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4 text-white/90" />
            <a href={`mailto:${site.contact.email}`} className="hover:underline">
              {site.contact.email}
            </a>
          </div>
          <div className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-white/90" />
            <span className="text-white/90">{site.contact.location}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="rounded-md p-1 transition hover:bg-white/10"
          >
            <Globe className="h-4 w-4" />
          </a>
          <a
            href="https://telegram.org"
            aria-label="Telegram"
            className="rounded-md p-1 transition hover:bg-white/10 hidden sm:inline-flex"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M21 3L3 10l5 2 2 5 11-14z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="rounded-md p-1 transition hover:bg-white/10"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="rounded-md p-1 transition hover:bg-white/10 hidden md:inline-flex"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8.5 11.5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="8.5" cy="8.5" r="0.9" fill="currentColor" />
              <path d="M12.5 16.5v-3c0-1 .8-1.5 1.7-1.5 1 0 1.8.6 1.8 1.8v2.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
