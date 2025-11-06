import { ShieldCheck, Share2, BadgePercent, CheckCircle2, Building2 } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "KI-gestützte Echtheitsprüfung",
    desc: "Automatische Erkennung und Minimierung von Bot- und Fake-Posts – für echtes Vertrauen.",
  },
  {
    icon: Share2,
    title: "Multi-Plattform Sharing",
    desc: "Posts direkt zu Instagram, Facebook, X und mehr teilen – aus einer Oberfläche.",
  },
  {
    icon: BadgePercent,
    title: "Flexible Vergünstigungen",
    desc: "Gastgeber definieren Regeln: Prozente, fixe Beträge oder personalisierte Angebote.",
  },
  {
    icon: Building2,
    title: "Branchen-Profile",
    desc: "Restaurants, Hotels und Anbieter erstellen verifizierte Profile mit Mediathek.",
  },
  {
    icon: CheckCircle2,
    title: "Moderations-Workflow",
    desc: "Hosts prüfen Posts vor Veröffentlichung und geben sie mit einem Klick frei.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Alles, was ihr braucht</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Von verifizierten Gastgeber-Profilen bis zur KI-gestützten Qualitätskontrolle –
            die Plattform ist auf echte Erlebnisse ausgelegt.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
