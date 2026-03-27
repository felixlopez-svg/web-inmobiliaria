import { ArrowRight, MapPin, TrendingUp, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SECCIÓN HERO */}
      <section className="relative px-4 pt-32 pb-20 overflow-hidden flex-grow flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-zinc-950 -z-10"></div>
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight text-zinc-100">
            Vende tu propiedad en <span className="text-amber-500">Tenerife</span> al máximo precio.
          </h1>
          <p className="text-xl text-zinc-400 mb-12 max-w-3xl mx-auto font-medium">
            No busco compradores, protejo a vendedores. Especialista en la Zona Norte y Metropolitana.
          </p>
          <div className="flex justify-center">
            <a href="/valoracion" className="px-8 py-4 bg-amber-500 text-zinc-950 font-bold rounded-lg text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_30px_-5px_rgba(245,158,11,0.4)]">
              Valorar mi casa gratis <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE BENEFICIOS RÁPIDOS */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <MapPin className="w-8 h-8 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Especialista Local</h3>
            <p className="text-zinc-400 text-sm">Conocimiento real de La Laguna, Santa Cruz y el Norte de la isla.</p>
          </div>
          <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <TrendingUp className="w-8 h-8 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Máximo Precio</h3>
            <p className="text-zinc-400 text-sm">Estrategias de marketing para que no malvendas tu propiedad.</p>
          </div>
          <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <ShieldCheck className="w-8 h-8 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Seguridad Total</h3>
            <p className="text-zinc-400 text-sm">Filtro de compradores y gestión integral hasta la notaría.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
