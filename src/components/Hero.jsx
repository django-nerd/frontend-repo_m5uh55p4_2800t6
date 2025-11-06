import { Rocket, ShieldCheck, Share2, BadgePercent } from "lucide-react";

export default function Hero({ onGetStarted }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-600 via-indigo-600/90 to-indigo-700 text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium ring-1 ring-white/20">
            <ShieldCheck className="h-4 w-4" />
            Vertrauensbasierte Social-Posts ohne Bots
          </span>

          <h1 className="mt-6 font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl">
            Die Social-Plattform für echte Gäste und starke Gastgeber
          </h1>
          <p className="mt-5 max-w-2xl text-white/90 text-lg">
            Restaurants, Hotels und Freizeit-Anbieter erstellen ihr Profil.
            Gäste teilen echte Erlebnisse, Menü-Auswahlen oder Übernachtungen –
            plattformübergreifend und mit kontrollierter Vergünstigung.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onGetStarted}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-indigo-700 shadow hover:shadow-lg transition active:scale-[0.99]"
            >
              <Rocket className="h-5 w-5" />
              Jetzt starten
            </button>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/20 hover:bg-white/15 transition"
            >
              <Share2 className="h-5 w-5" />
              Wie es funktioniert
            </a>
          </div>

          <dl className="mt-12 grid w-full grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/20">
              <dt className="text-sm text-white/80">Plattform-Share</dt>
              <dd className="mt-1 flex items-center gap-2 text-xl font-semibold">
                <Share2 className="h-5 w-5" /> Multiplattform
              </dd>
            </div>
            <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/20">
              <dt className="text-sm text-white/80">Rabatte</dt>
              <dd className="mt-1 flex items-center gap-2 text-xl font-semibold">
                <BadgePercent className="h-5 w-5" /> Flexibel
              </dd>
            </div>
            <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/20">
              <dt className="text-sm text-white/80">Moderation</dt>
              <dd className="mt-1 flex items-center gap-2 text-xl font-semibold">
                <ShieldCheck className="h-5 w-5" /> Host-gesteuert
              </dd>
            </div>
            <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/20">
              <dt className="text-sm text-white/80">Echtheit</dt>
              <dd className="mt-1 flex items-center gap-2 text-xl font-semibold">
                <ShieldCheck className="h-5 w-5" /> Anti-Bot
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
