import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-semibold">Café Americano</h3>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Café de especialidad, ambiente acogedor y el mejor sabor de la ciudad.
            </p>
          </div>
          <div>
            <h4 className="font-display text-base font-semibold">Visítanos</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>Calle Principal 123, Ciudad</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>Lun - Dom: 7:00 - 21:00</span>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-display text-base font-semibold">Horario</h4>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              <li className="flex justify-between gap-4"><span>Lunes - Viernes</span><span>7:00 - 21:00</span></li>
              <li className="flex justify-between gap-4"><span>Sábado</span><span>8:00 - 22:00</span></li>
              <li className="flex justify-between gap-4"><span>Domingo</span><span>8:00 - 20:00</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Café Americano. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
