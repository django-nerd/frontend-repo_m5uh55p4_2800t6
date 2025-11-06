import { UserPlus, Building2, PencilLine, Send, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "1. Registrieren",
    desc: "Gäste und Gastgeber melden sich in wenigen Schritten an.",
  },
  {
    icon: Building2,
    title: "2. Profil anlegen",
    desc: "Gastgeber erstellen ein verifiziertes Profil mit Angeboten und Regeln.",
  },
  {
    icon: PencilLine,
    title: "3. Erlebnis posten",
    desc: "Gäste teilen Menüwahl, Aufenthalt oder Aktivitäten mit Fotos/Videos.",
  },
  {
    icon: Send,
    title: "4. Multiplattform teilen",
    desc: "Mit einem Klick zu Instagram, Facebook und Co. posten.",
  },
  {
    icon: ShieldCheck,
    title: "5. Freigabe & Vorteil",
    desc: "Gastgeber prüfen, geben frei und gewähren die definierte Vergünstigung.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">So funktioniert's</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Ein klarer, geprüfter Ablauf sorgt für echte Inhalte und faire Vorteile.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(({ icon: Icon, title, desc }) => (
            <li key={title} className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
