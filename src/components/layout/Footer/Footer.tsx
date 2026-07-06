"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Compass, Mail, Phone, MapPin, Video, Camera, Globe, MessageCircle } from "lucide-react";
import { useLanguage } from "@/src/lib/i18n";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Campus Life", href: "/campus-life" },
  { label: "Achievements", href: "/achievements" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const academicPrograms = [
  { label: "Kindergarten", href: "/academics" },
  { label: "Primary School", href: "/academics" },
  { label: "Secondary School", href: "/academics" },
  { label: "Preparatory School", href: "/academics" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/kingsacademy", icon: Globe, aria: "Facebook" },
  { label: "Instagram", href: "https://www.instagram.com/kingsacademy", icon: Camera, aria: "Instagram" },
  { label: "Telegram", href: "https://t.me/kingsacademy", icon: MessageCircle, aria: "Telegram" },
  { label: "YouTube", href: "https://www.youtube.com/kingsacademy", icon: Video, aria: "YouTube" },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-footer text-white" aria-labelledby="footer-heading">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="bg-[#0F172A]"
      >
        <div className="container-x mx-auto px-6 py-16 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-[#0B152C] p-10 shadow-[0_32px_90px_rgba(15,23,42,0.24)] sm:p-14">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#D4AF37]">{t("footer.heading")}</p>
              <h2 id="footer-heading" className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {t("footer.heading")}
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#CBD5E1] sm:text-lg">
                {t("footer.description")}
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-8 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(212,175,55,0.22)] transition duration-300 hover:bg-[#b38f33] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  aria-label="Contact Us"
                >
                  {t("footer.contactCta")}
                </Link>
                <Link
                  href="/campus-life"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  aria-label="Explore Our Campus"
                >
                  {t("footer.campusCta")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
        className="container-x mx-auto px-6 py-16 sm:px-8 lg:px-10"
      >
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr_1fr] xl:gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="relative h-18 w-18 overflow-hidden rounded-[1.25rem] border-2 border-[#D4AF37]/80 bg-[#FFF9E6] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
                <Image src="/images/logo/Gemini_Generated_Image_bto6u2bto6u2bto6.png" alt="Kings Academy Gondar logo" fill className="object-contain p-1.5" />
              </div>
              <div>
                <p className="text-lg font-semibold tracking-tight text-white">Kings Academy Gondar</p>
                <p className="mt-2 max-w-[20rem] text-sm leading-6 text-[#CBD5E1]">
                  {t("footer.brandDescription")}
                </p>
              </div>
            </div>
            <p className="max-w-lg text-sm leading-7 text-[#CBD5E1]">
              {t("footer.brandText")}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white">{t("footer.quickLinks")}</p>
            <ul className="mt-6 space-y-3 text-sm text-[#CBD5E1]">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-[#D4AF37] focus-visible:text-[#D4AF37] focus-visible:outline-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white">{t("footer.programs")}</p>
            <ul className="mt-6 space-y-3 text-sm text-[#CBD5E1]">
              {academicPrograms.map((program) => (
                <li key={program.label}>
                  <Link
                    href={program.href}
                    className="transition-colors hover:text-[#D4AF37] focus-visible:text-[#D4AF37] focus-visible:outline-none"
                  >
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-3xl border border-white/10 bg-[#0B152C] p-5 text-sm text-[#CBD5E1]">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <Clock className="h-4 w-4" />
                <p className="font-semibold uppercase tracking-[0.28em]">{t("footer.schoolHours")}</p>
              </div>
              <p className="mt-4 leading-7">
                {t("footer.schoolHoursValue")}
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white">{t("footer.contact")}</p>
            <div className="mt-6 space-y-4 text-sm text-[#CBD5E1]">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-[#D4AF37]" />
                <span>{t("footer.address")}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 text-[#D4AF37]" />
                <span>+251 XXX XXX XXX</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 text-[#D4AF37]" />
                <a
                  href="mailto:info@kingsacademy.edu.et"
                  className="transition-colors hover:text-[#D4AF37] focus-visible:text-[#D4AF37] focus-visible:outline-none"
                >
                  info@kingsacademy.edu.et
                </a>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white">{t("footer.followUs")}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.aria}
                      whileHover={{ y: -2 }}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#CBD5E1] transition duration-300 hover:bg-[#D4AF37] hover:text-[#081423] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="border-t border-[rgba(212,175,55,0.20)] py-8">
        <div className="container-x mx-auto flex flex-col gap-4 px-6 text-center text-sm text-[#CBD5E1] sm:px-8 lg:px-10 md:flex-row md:items-center md:justify-between md:text-left">
          <p className="font-medium text-white">© 2026 Kings Academy Gondar. All Rights Reserved.</p>
          <p className="text-[#D4AF37] uppercase tracking-[0.35em]">Excellence • Character • Leadership</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 md:mt-0 md:justify-end">
            <Link href="/privacy" className="transition-colors hover:text-[#D4AF37] focus-visible:text-[#D4AF37] focus-visible:outline-none">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-[#D4AF37] focus-visible:text-[#D4AF37] focus-visible:outline-none">
              Terms of Use
            </Link>
            <Link href="/sitemap" className="transition-colors hover:text-[#D4AF37] focus-visible:text-[#D4AF37] focus-visible:outline-none">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
