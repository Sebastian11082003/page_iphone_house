"use client";

import { BadgeCheck, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { BENEFITS } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  "badge-check": BadgeCheck,
  sparkles: Sparkles,
};

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="mesh-hero grid-pattern relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-surface-darker/40" />

      <div className="relative mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Beneficios"
            title="Más que una venta, una experiencia"
            description="En iPhone House no solo vendemos equipos. Te acompañamos para que tu primer Apple sea inolvidable."
            dark
          />
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-5 md:grid-cols-3">
          {BENEFITS.map((benefit, index) => {
            const Icon = ICONS[benefit.icon] ?? ShieldCheck;
            return (
              <StaggerItem key={benefit.title}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-brand-500/30 hover:bg-white/8">
                  <div className="card-shine pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    <span className="text-xs font-bold tracking-widest text-brand-400/80">
                      0{index + 1}
                    </span>
                    <div className="mt-4 inline-flex size-12 items-center justify-center rounded-2xl bg-brand-600/20 text-brand-400 ring-1 ring-brand-500/20 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-white/55">
                      {benefit.description}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
