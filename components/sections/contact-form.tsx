"use client";

import { MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { type FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import {
  CONTACT,
  PAYMENT_METHODS,
  PAYMENT_NOTE,
  PROCESS_STEPS,
} from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [device, setDevice] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!name.trim() || !phone.trim() || !device.trim() || !paymentMethod) {
      setError("Por favor completa todos los campos obligatorios.");
      return;
    }

    const url = buildWhatsAppUrl({
      name: name.trim(),
      phone: phone.trim(),
      device: device.trim(),
      paymentMethod,
      message: message.trim() || undefined,
    });

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contacto" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Contacto"
            title="Solicita tu cotización"
            description="Cuéntanos qué equipo te interesa y cómo deseas pagar. Te contactaremos por WhatsApp para cerrar tu compra."
          />
        </FadeIn>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <FadeIn delay={0.1} className="flex flex-col justify-center">
            <div className="space-y-6">
              {PROCESS_STEPS.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-sm font-bold text-brand-600 ring-1 ring-brand-100">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-muted/40 p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-600" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Venta 100% virtual
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {CONTACT.locationNote}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border/80 bg-card p-6 shadow-xl shadow-black/5 sm:p-8"
              noValidate
            >
              <div className="space-y-5">
                <Field label="Nombre completo" htmlFor="name" required>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className={inputClass}
                    autoComplete="name"
                    required
                  />
                </Field>

                <Field label="Teléfono de contacto" htmlFor="phone" required>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="300 123 4567"
                    className={inputClass}
                    autoComplete="tel"
                    required
                  />
                </Field>

                <Field
                  label="¿Qué equipo te interesa?"
                  htmlFor="device"
                  required
                >
                  <input
                    id="device"
                    type="text"
                    value={device}
                    onChange={(e) => setDevice(e.target.value)}
                    placeholder="Ej: iPhone 15 Pro Max 256GB"
                    className={inputClass}
                    required
                  />
                </Field>

                <Field label="Forma de pago" htmlFor="paymentMethod" required>
                  <select
                    id="paymentMethod"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className={inputClass}
                    required
                  >
                    <option value="">Selecciona una opción</option>
                    {PAYMENT_METHODS.map((method) => (
                      <option key={method.value} value={method.value}>
                        {method.label}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Mensaje adicional (opcional)" htmlFor="message">
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Color preferido, capacidad, accesorios, etc."
                    rows={3}
                    className={inputClass}
                  />
                </Field>
              </div>

              <p className="mt-4 rounded-xl bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
                {PAYMENT_NOTE}
              </p>

              {error && (
                <p
                  className="mt-4 text-sm font-medium text-destructive"
                  role="alert"
                >
                  {error}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                className="mt-6 h-12 w-full gap-2 rounded-full bg-brand-600 text-base font-semibold shadow-lg shadow-brand-600/25 hover:bg-brand-500"
              >
                <Send className="size-4" />
                Enviar por WhatsApp
              </Button>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <span>o escríbenos directo</span>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#25D366] transition-opacity hover:opacity-80"
                >
                  <MessageCircle className="size-4" />
                  {CONTACT.phoneDisplay}
                </a>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-semibold text-foreground"
      >
        {label}
        {required && <span className="text-brand-600"> *</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all focus:border-brand-400 focus:ring-4 focus:ring-brand-100";
