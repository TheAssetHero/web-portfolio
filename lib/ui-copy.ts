import { LocalizedText } from "@/lib/localization";

const s = (text: string): LocalizedText => ({ en: text, es: text });

export const uiCopy = {
  // ============================================================================
  // HERO
  // - Botón principal
  // - Botón de contacto
  // ============================================================================
  hero: {
    viewChannel: s("VER CANAL"),
    contact: s("CONTACTO"),
  },

  // ============================================================================
  // SECCIÓN EDITORIAL / CATEGORÍAS
  // ============================================================================
  profileHub: {
    categoryIndex: s("Índice de categorías"),
    fieldsTitle: s("Campos cinematográficos y dirección técnica."),
    fieldsDescription: s(
      "Abre vistas de categoría para notas editoriales, lanzamientos, reels y avances técnicos sin salir de la experiencia actual."
    ),
    editorialContent: s("Contenido editorial"),
    editorialDescription: s(
      "Selecciona una categoría para abrir una vista editorial cinematográfica con lanzamientos, proyectos, reels y notas técnicas."
    ),
  },

  // ============================================================================
  // SECCIÓN DE MARCA / PERFIL
  // ============================================================================
  brand: {
    dossier: s("Dossier editorial"),
    heading: s("¿Quién está detrás de The Asset Hero?"),
    teaser: s(
      "Tecnología creativa, dirección visual y sistemas cinematográficos detrás de la marca."
    ),
    enter: s("Entrar"),
    creativeTechnology: s("Tecnología creativa"),
    statement: s(
      "Creando visuales de alto nivel, experiencias en tiempo real y tecnología cinematográfica para la producción moderna."
    ),
    note: s(
      "Dirección enfocada en estudio a través de visuales en tiempo real, herramientas cinematográficas y sistemas de producción modernos. Este panel se mantiene intencionalmente sobrio para que el trabajo siga siendo la señal principal."
    ),
    closeAria: s("Cerrar modal de perfil de marca"),
  },

  // ============================================================================
  // MODAL DE CONTACTO
  // ============================================================================
  contact: {
    label: s("Contacto"),
    title: s("Inicia una colaboración cinematográfica."),
    description: s(
      "Comparte la forma de tu proyecto y te daré seguimiento con el siguiente paso."
    ),
    namePlaceholder: s("Tu nombre"),
    emailPlaceholder: s("Correo electrónico"),
    messagePlaceholder: s("Cuéntame sobre el mundo que quieres construir"),
    send: s("Enviar"),
    subjectPrefix: s("Consulta de portafolio de"),
    nameLabel: s("Nombre"),
    emailLabel: s("Correo"),
    messageLabel: s("Mensaje"),
    closeAria: s("Cerrar modal de contacto"),
  },

  // ============================================================================
  // MODALES DE CATEGORÍA / DETALLES
  // ============================================================================
  categoryModal: {
    editorialFeature: s("Destacado editorial"),
    featuredProject: s("Proyecto destacado"),
    featuredProjects: s("Proyectos destacados"),
    editorialNote: s("Nota editorial"),
    featuredDirection: s("Dirección destacada"),
    editorialSuffix: s(
      "Cada categoría se abre como un despliegue editorial digital, combinando reels, notas de estilo artículo y avances listos para lanzamiento dentro de una vista cinematográfica enfocada."
    ),
    closeAria: s("Cerrar modal de categoría"),
    closeDetailAria: s("Cerrar panel de detalle destacado"),
    detailLabel: s("Detalle destacado"),
    detailInfo: s("Resumen del proyecto"),
    play: s("Ver"),
    open: s("Abrir"),
    video: s("Video"),
    reel: s("Reel"),
    preview: s("Vista previa"),
  },

  // ============================================================================
  // SELECTOR DE IDIOMA
  // - Se conserva la estructura por si se reactiva visualmente más adelante.
  // ============================================================================
  language: {
    label: s("Idioma"),
  },
} satisfies Record<string, Record<string, LocalizedText>>;
