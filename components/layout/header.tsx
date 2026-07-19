"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-surface-darker/80 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6">
        <Link
          href="#inicio"
          className="group flex items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-brand-500/30 blur-md transition-all group-hover:bg-brand-400/40" />
            <Image
              src="/images/logo.png"
              alt={SITE.name}
              width={40}
              height={40}
              className="relative rounded-full ring-2 ring-white/10"
            />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            {SITE.name}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Principal"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="#contacto">
            <Button
              size="lg"
              className="h-10 gap-2 rounded-full bg-brand-600 px-5 text-sm font-semibold shadow-lg shadow-brand-600/30 hover:bg-brand-500"
            >
              Cotizar ahora
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-xl text-white/80 transition-colors hover:bg-white/10 md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-surface-darker/95 backdrop-blur-xl md:hidden",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Móvil">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="#contacto" onClick={() => setMobileOpen(false)}>
            <Button className="mt-2 h-11 w-full rounded-full bg-brand-600 font-semibold">
              Cotizar ahora
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
