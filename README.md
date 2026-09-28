# Dalia Ulloa Nutrición Clínica — versión 1

Landing basada en el mockup aprobado y su referencia de Instagram. Next.js, React y Tailwind; CSS específico en `src/app/landing.css`.

## Vista previa

```sh
npm install
npm run dev -- --webpack
```

Abrir http://localhost:3000. Para verificar producción: `npm run build -- --webpack`, seguido de `npm start`.

## Edición

- Contenido y estructura: `src/app/page.tsx`.
- Menú de escritorio y móvil: `src/components/site-header.tsx`.
- Contacto centralizado: `src/lib/site.ts`.
- Estilos responsive: `src/app/landing.css`.
- Logos originales: `public/marca/`; favicon de la flor maestra.
- Fuentes locales y licencias: `src/app/fonts/` (Prata y Source Sans 3).
- Imágenes finales V1: `public/images/v1/`.
- Prompts y procedencia: `image-prompts.json` y `portrait-prompt.json`. Las imágenes se generaron mediante la herramienta integrada image_gen y se optimizaron a WebP. El retrato es una recreación ilustrativa con IA basada en referencias de Dalia; el escenario no documenta el consultorio real.

## Decisiones de la V1

- Se respeta la composición del mockup sin marco de computadora.
- Los logos maestros sustituyen el símbolo ilustrativo del mockup.
- No se utilizan las fotografías adjuntas como imágenes finales.
- Dirección confirmada por el cliente: Pedro Moreno #1501, Col. Constitución, Navojoa, Sonora.
- WhatsApp es la acción principal; Instagram, teléfono y correo complementan el contacto.
- No se muestran testimonios inventados ni se simula un sistema de reservas. WhatsApp abre el mensaje de solicitud de consulta.
- Prata y Source Sans 3 corresponden a los archivos maestros entregados.
- Sin publicación externa. `robots` está en noindex durante revisión. Antes de publicar: configurar `NEXT_PUBLIC_SITE_URL` con el dominio real y habilitar indexación en `src/app/layout.tsx`.

El código y los activos necesarios están en la raíz de este repositorio. Incluye la versión aprobada y los ajustes de retrato, distribución y efectos de interacción.
