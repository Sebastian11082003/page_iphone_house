"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function CtaBanner() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <FadeIn>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 px-8 py-14 text-center sm:px-16 sm:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(1_0_0/0.12),transparent_50%)]" />
          <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-white/5 blur-2xl" />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              ¿Listo para tu Apple?
            </p>
            <h2 className="mx-auto mt-4 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Cotiza hoy y recibe respuesta en minutos
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base text-white/70">
              Completa el formulario y te contactamos por WhatsApp con precio,
              disponibilidad y opciones de pago.
            </p>
            <Link href="#contacto" className="mt-8 inline-block">
              <Button
                size="lg"
                className="h-12 gap-2 rounded-full bg-white px-8 text-base font-semibold text-brand-700 shadow-xl hover:bg-white/90"
              >
                Empezar ahora
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
