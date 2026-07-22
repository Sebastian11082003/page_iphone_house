"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Check, MessageCircle, Sparkles } from "lucide-react";

import { PhoneMockup } from "@/components/catalog/phone-mockup";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  AVAILABILITY_LABELS,
  CATALOG,
  CATALOG_FILTERS,
  CONDITION_LABELS,
  type CatalogAvailability,
  type CatalogCondition,
  type CatalogItem,
} from "@/lib/constants";
import { COLOR_SWATCHES, MODEL_SPECS } from "@/lib/catalog-specs";
import { cn } from "@/lib/utils";
import { buildCatalogWhatsAppUrl } from "@/lib/whatsapp";

type FilterId = (typeof CATALOG_FILTERS)[number]["id"];

function formatPrice(price: number | null): string {
  if (price === null) return "Consultar precio";
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);
}

function deviceLabel(item: CatalogItem): string {
  return `${item.model} ${item.storage} · ${item.color} · ${CONDITION_LABELS[item.condition]}`;
}

const AVAILABILITY_STYLES: Record<CatalogAvailability, string> = {
  disponible: "bg-emerald-500/15 text-emerald-400 ring-emerald-500/20",
  "pocas-unidades": "bg-amber-500/15 text-amber-400 ring-amber-500/20",
  "bajo-pedido": "bg-sky-500/15 text-sky-400 ring-sky-500/20",
  agotado: "bg-white/10 text-white/40 ring-white/10",
};

export function Catalog() {
  const [filter, setFilter] = useState<FilterId>("todos");

  const items = useMemo(() => {
    if (filter === "todos") return CATALOG;
    return CATALOG.filter((item) => item.condition === filter);
  }, [filter]);

  const availableCount = CATALOG.filter(
    (item) => item.availability !== "agotado"
  ).length;

  return (
    <section
      id="catalogo"
      className="mesh-hero grid-pattern relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-surface-darker/50" />

      <div className="relative mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Disponibilidad"
            title="Catálogo de iPhones"
            description={`Explora cada referencia con foto, características y beneficios. ${availableCount} opciones con stock o bajo pedido — confirma por WhatsApp.`}
            dark
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            className="mt-10 flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Filtrar por condición"
          >
            {CATALOG_FILTERS.map((option) => {
              const active = filter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(option.id)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold transition-all",
                    active
                      ? "bg-brand-600 text-white shadow-lg shadow-brand-600/30"
                      : "border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn key={item.id} delay={Math.min(index * 0.05, 0.3)}>
              <CatalogCard item={item} />
            </FadeIn>
          ))}
        </div>

        {items.length === 0 && (
          <p className="mt-12 text-center text-white/50">
            No hay equipos en esta categoría por ahora.
          </p>
        )}

        <FadeIn delay={0.2}>
          <p className="mt-10 text-center text-sm text-white/40">
            Las imágenes son referenciales. La disponibilidad cambia con
            frecuencia — escríbenos para confirmar tu equipo ideal.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function CatalogCard({ item }: { item: CatalogItem }) {
  const soldOut = item.availability === "agotado";
  const href = buildCatalogWhatsAppUrl(deviceLabel(item));
  const specs = MODEL_SPECS[item.model];
  const swatch = COLOR_SWATCHES[item.color] ?? {
    body: "#2c2c2e",
    frame: "#1c1c1e",
  };
  const features = specs?.features.slice(0, 4) ?? [];
  const benefits = specs?.benefits.slice(0, 3) ?? [];

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300",
        soldOut
          ? "opacity-60"
          : "hover:-translate-y-1 hover:border-brand-500/40 hover:bg-white/8"
      )}
    >
      <div className="card-shine pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Image / visual */}
      <div className="relative aspect-[4/3] overflow-hidden border-b border-white/8 bg-gradient-to-b from-white/5 to-transparent">
        <span
          className={cn(
            "absolute left-3 top-3 z-10 inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 backdrop-blur-md",
            AVAILABILITY_STYLES[item.availability]
          )}
        >
          {AVAILABILITY_LABELS[item.availability]}
        </span>

        <div className="absolute right-3 top-3 z-10 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[11px] font-semibold text-white/80 backdrop-blur-md">
          {CONDITION_LABELS[item.condition as CatalogCondition]}
        </div>

        {item.image ? (
          <Image
            src={item.image}
            alt={`${item.model} color ${item.color}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <PhoneMockup
            colorLabel={item.color}
            bodyColor={swatch.body}
            frameColor={swatch.frame}
            series={specs?.series}
            className="h-full pt-6"
          />
        )}
      </div>

      <div className="relative flex flex-1 flex-col p-5">
        <div className="flex items-start gap-3">
          <span
            className="mt-1 size-3.5 shrink-0 rounded-full ring-2 ring-white/20"
            style={{ backgroundColor: swatch.body }}
            title={item.color}
            aria-hidden
          />
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-bold text-white">{item.model}</h3>
            <p className="mt-1 text-sm text-white/55">
              {item.storage} · {item.color}
            </p>
            {item.note && (
              <p className="mt-1.5 text-xs text-brand-400">{item.note}</p>
            )}
          </div>
        </div>

        {features.length > 0 && (
          <div className="mt-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-white/35">
              Características
            </p>
            <ul className="mt-2 space-y-1.5">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-xs leading-snug text-white/65"
                >
                  <Check className="mt-0.5 size-3.5 shrink-0 text-brand-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {benefits.length > 0 && (
          <div className="mt-4 rounded-2xl border border-white/8 bg-white/4 p-3">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand-400">
              <Sparkles className="size-3" />
              Beneficios
            </p>
            <ul className="mt-2 space-y-1">
              {benefits.map((benefit) => (
                <li key={benefit} className="text-xs leading-snug text-white/60">
                  · {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/8 pt-4">
          <p className="text-sm font-semibold text-white">
            {formatPrice(item.price)}
          </p>
          {soldOut ? (
            <span className="text-xs font-medium text-white/30">
              No disponible
            </span>
          ) : (
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="h-9 gap-1.5 rounded-full bg-brand-600 px-3 text-xs font-semibold hover:bg-brand-500"
              >
                <MessageCircle className="size-3.5" />
                Cotizar
              </Button>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
