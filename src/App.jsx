import { useRef } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";

export default function App() {
  const signupRef = useRef(null);

  const handleGetStarted = () => {
    const el = document.getElementById("features");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="font-extrabold text-lg tracking-tight">
            real.social
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#how" className="text-gray-600 hover:text-gray-900">Ablauf</a>
            <a href="#signup" className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700">Anmelden</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero onGetStarted={handleGetStarted} />
        <Features />
        <div id="how">
          <HowItWorks />
        </div>
        <CTA />

        {/* Simple sign-up form stub (frontend only for now) */}
        <section id="signup" ref={signupRef} className="py-20 bg-gray-50">
          <div className="mx-auto max-w-2xl px-6">
            <h3 className="text-2xl font-bold">Interesse? Zugang anfragen</h3>
            <p className="mt-2 text-gray-600">Wir melden uns mit nächsten Schritten und dem Beta-Zugang.</p>
            <form className="mt-6 grid gap-4">
              <div className="grid gap-1">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                <input id="name" type="text" required className="rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Max Mustermann" />
              </div>
              <div className="grid gap-1">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">E-Mail</label>
                <input id="email" type="email" required className="rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="du@example.com" />
              </div>
              <div className="grid gap-1">
                <label htmlFor="role" className="text-sm font-medium text-gray-700">Ich bin</label>
                <select id="role" className="rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                  <option>Gastgeber (Restaurant/Hotel/...)</option>
                  <option>Gast/Besucher</option>
                </select>
              </div>
              <button type="button" className="mt-2 rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700 self-start">
                Absenden
              </button>
              <p className="text-sm text-gray-500">Hinweis: In dieser Vorschau wird noch kein Konto angelegt.</p>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-gray-600">
          © {new Date().getFullYear()} real.social – Echte Erlebnisse. Echte Vorteile.
        </div>
      </footer>
    </div>
  );
}
