import { createFileRoute } from "@tanstack/react-router";
import { Heart, Leaf, Users } from "lucide-react";
import cafeAbout from "@/assets/cafe-about.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Café Americano" },
      { name: "description", content: "Conoce la historia, misión y valores de Café Americano. Más que café, una experiencia hecha en casa." },
      { property: "og:title", content: "Sobre — Café Americano" },
      { property: "og:description", content: "Conoce la historia, misión y valores de Café Americano. Más que café, una experiencia hecha en casa." },
    ],
  }),
  component: SobrePage,
});

const values = [
  {
    icon: Heart,
    title: "Pasión por el café",
    description: "Cada grano es seleccionado y tostado con dedicación para ofrecerte una taza memorable.",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    description: "Trabajamos con productores responsables y reducimos nuestro impacto ambiental día a día.",
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Creamos un espacio donde todos son bienvenidos: amigos, vecinos, viajeros y soñadores.",
  },
];

function SobrePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">Nuestra historia</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-foreground sm:text-5xl">Sobre Café Americano</h1>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={cafeAbout}
            alt="Barista preparando latte art en Café Americano"
            className="h-full w-full object-cover"
            width={1200}
            height={800}
            loading="lazy"
          />
        </div>
        <div className="space-y-6 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Café Americano nació en 2015 con una idea sencilla: crear un lugar donde el café de especialidad se encontrara con la calidez de casa. Desde entonces, hemos crecido junto a nuestra comunidad, siempre fieles a la calidad y al trato cercano.
          </p>
          <p className="leading-relaxed">
            Nuestros baristas no solo preparan café; preparan experiencias. Ya sea tu primera visita o tu rutina diaria, queremos que cada taza te haga sentir bienvenido.
          </p>
          <p className="leading-relaxed">
            Usamos granos de origen ético, leche local y recetas horneadas cada mañana. Porque creemos que los pequeños detalles hacen la gran diferencia.
          </p>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="text-center font-display text-3xl font-semibold text-foreground">Nuestros valores</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl border border-border/50 bg-card p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-primary">
                <value.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-card-foreground">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
