import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { CONTACT, SITE, SOCIAL } from "@/lib/constants";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.18 8.18 0 0 0 4.78 1.52V6.82a4.85 4.85 0 0 1-1.01-.13z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { href: SOCIAL.instagram, label: "Instagram", icon: InstagramIcon },
  { href: SOCIAL.facebook, label: "Facebook", icon: FacebookIcon },
  { href: SOCIAL.tiktok, label: "TikTok", icon: TikTokIcon },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-surface-darker px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt={SITE.name}
                width={36}
                height={36}
                className="rounded-full ring-2 ring-white/10"
              />
              <p className="text-lg font-bold text-white">{SITE.name}</p>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              {SITE.description}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contacto</p>
            <ul className="mt-5 space-y-3.5 text-sm text-white/50">
              <li>
                <a
                  href={`tel:+57${CONTACT.phone}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-brand-400"
                >
                  <Phone className="size-4 shrink-0" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-brand-400"
                >
                  <Mail className="size-4 shrink-0" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>
                  {CONTACT.city}, {CONTACT.region} — Venta virtual con entrega
                  presencial
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Síguenos</p>
            <div className="mt-5 flex gap-3">
              {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all hover:border-brand-500/40 hover:bg-brand-600/20 hover:text-brand-400"
                >
                  <Icon className="size-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/8 pt-8 text-center text-xs text-white/30">
          © {year} {SITE.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
