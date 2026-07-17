import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menú — Café Americano" },
      { name: "description", content: "Explora el menú de Café Americano: cafés calientes, bebidas frías, postres y acompañamientos." },
      { property: "og:title", content: "Menú — Café Americano" },
      { property: "og:description", content: "Explora el menú de Café Americano: cafés calientes, bebidas frías, postres y acompañamientos." },
    ],
  }),
  component: MenuPage,
});

const menuCategories = [
  {
    title: "Cafés calientes",
    items: [
      { name: "Espresso", description: "Intenso y aromático, servido solo.", price: "$3.50" },
      { name: "Americano", description: "Espresso con agua caliente, suave y equilibrado.", price: "$3.75" },
      { name: "Cappuccino", description: "Espresso, leche vaporizada y espuma de leche.", price: "$4.50" },
      { name: "Latte", description: "Espresso con abundante leche vaporizada.", price: "$4.75" },
      { name: "Mocha", description: "Espresso con chocolate y leche vaporizada.", price: "$5.00" },
      { name: "Macchiato", description: "Espresso con un toque de espuma de leche.", price: "$4.25" },
    ],
  },
  {
    title: "Bebidas frías",
    items: [
      { name: "Cold Brew", description: "Café infusionado en frío durante 18 horas.", price: "$4.50" },
      { name: "Iced Latte", description: "Espresso frío con leche y hielo.", price: "$5.00" },
      { name: "Frappé", description: "Café batido con hielo, opción de sabores.", price: "$5.50" },
      { name: "Té helado", description: "Té negro o verde servido con hielo y limón.", price: "$3.75" },
    ],
  },
  {
    title: "Postres y acompañamientos",
    items: [
      { name: "Croissant", description: "Mantequilla, hojaldrado y recién horneado.", price: "$3.25" },
      { name: "Tarta de cheesecake", description: "Con frutos rojos y base de galleta.", price: "$5.25" },
      { name: "Brownie", description: "Chocolate intenso, opción con nueces.", price: "$4.00" },
      { name: "Galleta de chispas", description: "Crujiente por fuera, suave por dentro.", price: "$2.75" },
      { name: "Tostada de aguacate", description: "Pan artesanal, aguacate y semillas.", price: "$6.50" },
    ],
  },
];

function MenuPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">Nuestra selección</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-foreground sm:text-5xl">Menú</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Cada bebida y cada bocado están preparados con ingredientes de calidad y mucho cariño.
        </p>
      </div>

      <div className="mt-14 space-y-14">
        {menuCategories.map((category) => (
          <section key={category.title}>
            <h2 className="border-b border-border/50 pb-3 font-display text-2xl font-semibold text-foreground">
              {category.title}
            </h2>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col justify-between rounded-xl border border-border/50 bg-card p-5 shadow-sm"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold text-card-foreground">{item.name}</h3>
                      <span className="whitespace-nowrap font-medium text-primary">{item.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
