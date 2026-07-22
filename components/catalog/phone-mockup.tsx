import { cn } from "@/lib/utils";

type PhoneMockupProps = {
  colorLabel: string;
  bodyColor: string;
  frameColor: string;
  series?: "pro" | "standard";
  className?: string;
};

/**
 * Representación visual del iPhone según color.
 * Se reemplaza automáticamente si el ítem tiene `image` real.
 */
export function PhoneMockup({
  colorLabel,
  bodyColor,
  frameColor,
  series = "standard",
  className,
}: PhoneMockupProps) {
  const isPro = series === "pro";

  return (
    <div
      className={cn(
        "relative mx-auto flex h-44 w-full items-end justify-center",
        className
      )}
      role="img"
      aria-label={`Vista del equipo en color ${colorLabel}`}
    >
      <div
        className="absolute inset-x-8 bottom-0 h-24 rounded-full opacity-50 blur-2xl"
        style={{ backgroundColor: bodyColor }}
      />

      <div
        className="relative h-40 w-[5.25rem] rounded-[1.35rem] p-[3px] shadow-2xl"
        style={{
          background: `linear-gradient(160deg, ${frameColor} 0%, ${bodyColor} 45%, ${frameColor} 100%)`,
          boxShadow: `0 20px 40px -12px ${frameColor}99, inset 0 1px 0 rgba(255,255,255,0.25)`,
        }}
      >
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[1.15rem] bg-black">
          {/* Dynamic Island / notch */}
          <div className="absolute left-1/2 top-2 z-10 h-3.5 w-14 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10" />

          {/* Screen content */}
          <div
            className="flex flex-1 flex-col justify-between p-2.5 pt-8"
            style={{
              background: `linear-gradient(180deg, ${bodyColor}33 0%, #0a0a0a 55%, #000 100%)`,
            }}
          >
            <div className="space-y-1.5 px-0.5">
              <div className="h-1 w-8 rounded-full bg-white/25" />
              <div className="h-1 w-12 rounded-full bg-white/15" />
              <div className="mt-3 grid grid-cols-2 gap-1">
                <div className="aspect-square rounded-md bg-white/10" />
                <div className="aspect-square rounded-md bg-white/10" />
                <div className="aspect-square rounded-md bg-white/10" />
                <div className="aspect-square rounded-md bg-white/10" />
              </div>
            </div>
            <div className="mx-auto mb-1 h-0.5 w-8 rounded-full bg-white/30" />
          </div>

          {/* Camera bump hint for Pro */}
          {isPro && (
            <div
              className="absolute -right-0.5 top-10 h-10 w-1 rounded-l-sm opacity-80"
              style={{ backgroundColor: frameColor }}
              aria-hidden
            />
          )}
        </div>
      </div>
    </div>
  );
}
