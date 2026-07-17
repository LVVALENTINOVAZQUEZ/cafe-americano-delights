import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/horario")({
  head: () => ({
    meta: [
      { title: "Horario — Café Americano" },
      { name: "description", content: "Consulta el horario de funcionamiento y la ubicación de Café Americano." },
      { property: "og:title", content: "Horario — Café Americano" },
      { property: "og:description", content: "Consulta el horario de funcionamiento y la ubicación de Café Americano." },
    ],
  }),
  component: HorarioPage,
});

const schedule = [
  { day: "Lunes", hours: "7:00 a.m. — 9:00 p.m.", status: "Abierto" },
  { day: "Martes", hours: "7:00 a.m. — 9:00 p.m.", status: "Abierto" },
  { day: "Miércoles", hours: "7:00 a.m. — 9:00 p.m.", status: "Abierto" },
  { day: "Jueves", hours: "7:00 a.m. — 9:00 p.m.", status: "Abierto" },
  { day: "Viernes", hours: "7:00 a.m. — 10:00 p.m.", status: "Abierto" },
  { day: "Sábado", hours: "8:00 a.m. — 10:00 p.m.", status: "Abierto" },
  { day: "Domingo", hours: "8:00 a.m. — 8:00 p.m.", status: "Abierto" },
];

function HorarioPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">Siempre listos para ti</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-foreground sm:text-5xl">Horario de funcionamiento</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Pasa cuando quieras. Tenemos el café caliente y la mesa lista para recibirte.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Schedule card */}
        <section className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-primary">
              <Clock className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="font-display text-2xl font-semibold text-card-foreground">Horario</h2>
          </div>
          <ul className="mt-6 space-y-3">
            {schedule.map((item) => (
              <li
                key={item.day}
                className="flex items-center justify-between border-b border-border/30 pb-3 last:border-0 last:pb-0"
              >
                <span className="font-medium text-card-foreground">{item.day}</span>
                <span className="text-sm text-muted-foreground">{item.hours}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Location card */}
        <section className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-primary">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="font-display text-2xl font-semibold text-card-foreground">Ubicación</h2>
          </div>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              <strong className="text-card-foreground">Café Americano</strong><br />
              Calle Principal 123<br />
              Ciudad, CP 12345
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>+1 234 567 890</span>
            </p>
          </div>
          <div className="mt-6 aspect-video overflow-hidden rounded-xl bg-muted">
            <div className="flex h-full w-full items-center justify-center bg-muted/50 text-sm text-muted-foreground">
              Mapa de ubicación
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
