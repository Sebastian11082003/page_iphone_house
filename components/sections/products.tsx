"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Headphones,
  RefreshCw,
  Smartphone,
  Store,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { PRODUCTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  store: Store,
  "refresh-cw": RefreshCw,
  headphones: Headphones,
};

const CARD_ACCENTS = [
  "from-brand-500/10 to-transparent",
  "from-brand-400/10 to-transparent",
  "from-brand-600/10 to-transparent",
  "from-brand-300/10 to-transparent",
];

export function Products() {
  return (
    <section id="productos" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Categorías"
            title="Encuentra tu Apple ideal"
            description="Desde iPhones sellados hasta accesorios originales. Todos importados con los más altos estándares de calidad."
          />
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {PRODUCTS.map((product, index) => {
            const Icon = ICONS[product.icon] ?? Smartphone;
            const isFeatured = index === 0;

            return (
              <StaggerItem
                key={product.id}
                className={cn(isFeatured && "sm:col-span-2")}
              >
                <article
                  className={cn(
                    "group relative overflow-hidden rounded-3xl border border-border/80 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-100/40 sm:p-8",
                    isFeatured && "lg:flex lg:items-center lg:gap-8"
                  )}
                >
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                      CARD_ACCENTS[index]
                    )}
                  />

                  <div
                    className={cn(
                      "relative mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600",
                      isFeatured && "lg:mb-0 lg:size-16 lg:shrink-0"
                    )}
                  >
                    <Icon className="size-7" aria-hidden="true" />
                  </div>

                  <div className="relative flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                        {product.title}
                      </h3>
                      <ArrowUpRight className="size-5 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600 group-hover:opacity-100" />
                    </div>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {product.description}
                    </p>
                    <Link
                      href="#contacto"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 opacity-0 transition-all duration-300 group-hover:opacity-100"
                    >
                      Cotizar este producto
                      <ArrowUpRight className="size-3.5" />
                    </Link>
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
