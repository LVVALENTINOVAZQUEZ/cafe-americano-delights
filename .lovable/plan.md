# Plan: Sitio web para Café Americano

## Objetivo
Construir un sitio web de una sola página/estructura de rutas para la cafetería **Café Americano**, con navegación clara y secciones: Inicio, Menú, Horario de funcionamiento y Sobre Café Americano.

## Decisiones de diseño
- **Tono visual:** cálido, acogedor y minimalista, inspirado en café y madera, con tipografía limpia.
- **Estructura de rutas:** secciones principales como rutas independientes (mejor SEO y compartición):
  - `/` → Inicio / bienvenida
  - `/menu` → Menú de bebidas y alimentos
  - `/horario` → Horario de funcionamiento
  - `/sobre` → Sobre Café Americano
- **Navegación:** menú fijo en la parte superior, accesible desde todas las rutas.
- **Metadatos:** títulos y descripciones únicos por ruta; metadatos raíz actualizados para Café Americano.

## Pasos de implementación

1. **Actualizar `src/routes/__root.tsx`**
   - Cambiar metadatos raíz (title, description, og, twitter) a "Café Americano".
   - Añadir un encabezado compartido con logo/nombre y menú de navegación (`Link` de TanStack Router).
   - Añadir un pie de página sencillo.
   - Mantener `<Outlet />` y los componentes de error/not-found existentes.

2. **Crear/actualizar rutas de contenido**
   - `src/routes/index.tsx`: reemplazar el placeholder por una página de inicio con hero, breve mensaje de bienvenida y enlaces a las secciones.
   - `src/routes/menu.tsx`: menú con categorías (cafés, bebidas frías, postres, etc.) y precios representativos.
   - `src/routes/horario.tsx`: tabla o lista de días y horarios de apertura.
   - `src/routes/sobre.tsx`: historia, misión y valores de Café Americano.

3. **Ajustar el sistema de diseño en `src/styles.css`**
   - Personalizar tokens de color para un tema cafetería (tonos café, crema, madera) manteniendo el formato `oklch` y la estructura de variables.
   - Preservar el modo oscuro.

4. **Verificación**
   - Ejecutar el build de desarrollo para confirmar que las rutas se generan correctamente.
   - Revisar la vista previa para validar navegación, contenido y estilos.

## Alcance fuera de este plan
- No se incluye backend ni persistencia: es un sitio estático de presentación.
- No se añaden funcionalidades de pedidos, reservas ni autenticación.
