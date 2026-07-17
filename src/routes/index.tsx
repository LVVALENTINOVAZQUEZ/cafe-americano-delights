import { createFileRoute, Link } from "@tanstack/react-router";
import { Coffee, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import cafeHero from "@/assets/cafe-hero.jpg";
import cafeCounter from "@/assets/cafe-counter.png.asset.json";
import cafeCustomer from "@/assets/cafe-customer.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Café Americano — Café de especialidad" },
      { name: "description", content: "Bienvenido a Café Americano. Disfruta del mejor café de especialidad en un ambiente cálido y acogedor." },
      { property: "og:title", content: "Café Americano — Café de especialidad" },
      { property: "og:description", content: "Bienvenido a Café Americano. Disfruta del mejor café de especialidad en un ambiente cálido y acogedor." },
    ],
  }),
  component: HomePage,
});

const highlights = [
  {
    icon: Coffee,
    title: "Café de especialidad",
    description: "Granos seleccionados y tostados artesanalmente para una taza perfecta cada día.",
  },
  {
    icon: Clock,
    title: "Abierto temprano",
    description: "Empieza tu mañana con nosotros. Abrimos desde las 7:00 a.m. de lunes a viernes.",
  },
  {
    icon: MapPin,
    title: "Ubicación céntrica",
    description: "Estamos en el corazón de la ciudad, listos para recibirte con una sonrisa.",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cafeHero}
            alt="Interior acogedor de Café Americano con máquina de espresso y mesas de madera"
            className="h-full w-full object-cover"
            width={1920}
            height={1088}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        </div>

        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Desde 2015</p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-foreground sm:text-6xl lg:text-7xl">
              El sabor del café, <span className="text-primary">hecho en casa</span>.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              En Café Americano celebramos cada taza. Café de especialidad, postres recién horneados y un rincón acogedor esperan por ti.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link to="/menu">
                  Ver menú
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/sobre">Conócenos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border/50 bg-card p-6 shadow-sm transition-colors hover:border-primary/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-primary">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-card-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Espacio / Counter */}
      <section className="border-t border-border/50 bg-muted/20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={cafeCounter.url}
              alt="Barra de Café Americano con máquina de espresso y granos de café"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Nuestro espacio</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Un rincón donde el tiempo se detiene
            </h2>
            <p className="mt-4 text-muted-foreground">
              Luz natural, madera cálida y el aroma constante del café recién molido. Cada rincón está pensado para que te sientas como en casa.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 bg-muted/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
              ¿Listo para tu próxima taza?
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground lg:mx-0">
              Pasa por Café Americano y descubre por qué cada sorbo se siente como en casa.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button asChild variant="outline" size="lg">
                <Link to="/horario">Ver horario</Link>
              </Button>
              <Button asChild size="lg">
                <Link to="/menu">Explorar menú</Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={cafeCustomer.url}
              alt="Clienta sonriendo con un café para llevar en Café Americano"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
