import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/src/constants/site";
import { useLanguage } from "@/src/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function TopBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#5FA8D3] text-slate-900">
      <div className="container mx-auto flex h-10 items-center justify-between gap-4 px-4 text-xs sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-5 text-slate-900/80">
          <div className="inline-flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-accent" />
            <a href={`tel:${site.contact.phone}`} className="transition hover:text-slate-950">
              {site.contact.phone}
            </a>
          </div>
          <div className="inline-flex items-center gap-2">
            <Mail className="h-3.5 w-3.5 text-accent" />
            <a href={`mailto:${site.contact.email}`} className="transition hover:text-accent">
              {site.contact.email}
            </a>
          </div>
          <div className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            <span>{site.contact.location}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden font-semibold text-slate-950 sm:block">{t("topBar.tagline")}</div>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
