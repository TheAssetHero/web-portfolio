import { LocalizedText } from "@/lib/localization";

const s = (text: string): LocalizedText => ({ en: text, es: text });

export const uiCopy = {
  hero: {
    viewChannel: s("VIEW CHANNEL"),
    contact: s("CONTACT"),
  },

  profileHub: {
    categoryIndex: s("Category Index"),
    fieldsTitle: s("Cinematic fields and technical direction."),
    fieldsDescription: s(
      "Open category views for editorial notes, releases, reels and technical previews without leaving the current experience."
    ),
    editorialContent: s("Editorial Content"),
    editorialDescription: s(
      "Select a category to open a cinematic editorial view with releases, project cards, reels and technical notes."
    ),
  },

  brand: {
    dossier: s("Editorial Dossier"),
    heading: s("Who is behind The Asset Hero?"),
    teaser: s(
      "Creative technology, visual direction and cinematic systems behind the brand."
    ),
    enter: s("Enter"),
    creativeTechnology: s("Creative Technology"),
    statement: s(
      "Creating high-end visuals, realtime experiences and cinematic technology for modern production."
    ),
    note: s(
      "Studio-focused direction across realtime visuals, cinematic tools and modern production systems. This panel stays intentionally minimal so the work remains the primary signal."
    ),
    closeAria: s("Close brand profile modal"),
  },

  contact: {
    label: s("Contact"),
    title: s("Start a cinematic collaboration."),
    description: s(
      "Share the shape of your project and I will follow up with the next step."
    ),
    namePlaceholder: s("Your name"),
    emailPlaceholder: s("Email address"),
    messagePlaceholder: s("Tell me about the world you want to build"),
    send: s("Send"),
    subjectPrefix: s("Portfolio inquiry from"),
    nameLabel: s("Name"),
    emailLabel: s("Email"),
    messageLabel: s("Message"),
    closeAria: s("Close contact modal"),
  },

  categoryModal: {
    editorialFeature: s("Editorial Feature"),
    featuredProject: s("Featured Project"),
    featuredProjects: s("Featured Projects"),
    editorialNote: s("Editorial Note"),
    featuredDirection: s("Featured Direction"),
    editorialSuffix: s(
      "Each category opens as a focused digital editorial view, combining reels, article-style notes and release-ready previews."
    ),
    closeAria: s("Close category modal"),
    closeDetailAria: s("Close featured detail panel"),
    detailLabel: s("Featured Detail"),
    detailInfo: s("Project Summary"),
    play: s("Watch"),
    open: s("Open"),
    video: s("Video"),
    reel: s("Reel"),
    preview: s("Preview"),
  },

  language: {
    label: s("Language"),
  },
} satisfies Record<string, Record<string, LocalizedText>>;
