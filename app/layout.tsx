import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vender Piso en Tenerife | Asesor Inmobiliario Experto',
  description: 'Descubre cuánto vale tu propiedad en Tenerife y maximiza tus beneficios. Especialista en la Zona Norte y Metropolitana.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className="bg-zinc-950 text-zinc-50 antialiased min-h-screen">
        <main>{children}</main>
        <footer className="border-t border-zinc-900 py-8 text-center text-sm text-zinc-500">
          <p>© 2026 Asesor Inmobiliario Tenerife. Asociado a Century 21.</p>
        </footer>
      </body>
    </html>
  );
}
