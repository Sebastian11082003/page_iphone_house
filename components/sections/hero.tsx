"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { CONTACT, SITE, TRUST_STATS } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="inicio"
      className="mesh-hero grid-pattern relative flex min-h-screen flex-col overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface-darker" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm"
            >
              <MapPin className="size-3.5 text-brand-400" />
              Importados desde EEUU · {CONTACT.city}, {CONTACT.region}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4rem]"
            >
              Tu primer Apple,{" "}
              <span className="text-gradient">con confianza</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg"
            >
              iPhones nuevos, de exhibición y de segunda mano, más accesorios
              Apple originales. Seguridad, confiabilidad y la mejor experiencia
              de compra en {CONTACT.city}.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <Link href="#contacto" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="h-12 w-full gap-2 rounded-full bg-brand-600 px-8 text-base font-semibold shadow-xl shadow-brand-600/30 hover:bg-brand-500 sm:w-auto"
                >
                  Solicitar cotización
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
              <Link href="#catalogo" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 w-full rounded-full border-white/20 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 sm:w-auto"
                >
                  Ver disponibilidad
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              {TRUST_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3 backdrop-blur-sm"
                >
                  <p className="text-lg font-bold text-brand-400">{stat.value}</p>
                  <p className="text-xs text-white/50">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border border-dashed border-brand-500/20"
              />
              <div className="absolute inset-0 rounded-full bg-brand-500/20 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <Image
                  src="/images/logo.png"
                  alt={`Logo de ${SITE.name}`}
                  width={280}
                  height={280}
                  priority
                  className="rounded-2xl"
                />
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 top-8 flex items-center gap-2 rounded-2xl border border-white/10 bg-surface-darker/90 px-4 py-2.5 shadow-xl backdrop-blur-md sm:-left-8"
              >
                <Shield className="size-4 text-brand-400" />
                <span className="text-xs font-semibold text-white">
                  100% verificados
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-2 bottom-12 flex items-center gap-2 rounded-2xl border border-white/10 bg-surface-darker/90 px-4 py-2.5 shadow-xl backdrop-blur-md sm:-right-6"
              >
                <Sparkles className="size-4 text-brand-400" />
                <span className="text-xs font-semibold text-white">
                  Experiencia Apple
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
