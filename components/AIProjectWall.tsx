"use client";

import { useMemo, useState } from "react";

import AIProjectCard from "@/components/AIProjectCard";
import { useLanguage } from "@/components/LanguageProvider";
import ProjectMediaModal from "@/components/ProjectMediaModal";
import {
  aiProjectWallIntro,
  aiProjectWallItems,
  AIProjectWallItem,
} from "@/lib/ai-project-wall-content";
import { resolveText } from "@/lib/localization";
import { uiCopy } from "@/lib/ui-copy";

type AIProjectWallProps = {
  showHeader?: boolean;
};

export default function AIProjectWall({
  showHeader = true,
}: AIProjectWallProps) {
  const { language } = useLanguage();
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const projects = useMemo(
    () => aiProjectWallItems.filter((project) => project.enabled),
    []
  );

  const activeProject =
    activeProjectId == null
      ? null
      : projects.find((project) => project.id === activeProjectId) ?? null;

  return (
    <>
      <section className="space-y-6">
        {showHeader ? (
          <div className="max-w-3xl">
            <p className="text-[0.64rem] uppercase tracking-[0.32em] text-white/34">
              {resolveText(aiProjectWallIntro.title, language)}
            </p>
            <p className="mt-4 text-sm leading-7 text-white/46 sm:text-base">
              {resolveText(aiProjectWallIntro.subtitle, language)}
            </p>
          </div>
        ) : null}

        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <AIProjectCard
              key={project.id}
              project={project}
              language={language}
              onOpen={(selectedProject: AIProjectWallItem) =>
                setActiveProjectId(selectedProject.id)
              }
            />
          ))}
        </div>
      </section>

      {activeProject ? (
        <ProjectMediaModal
          title={resolveText(activeProject.title, language)}
          subtitle={resolveText(activeProject.type, language)}
          description={resolveText(activeProject.description, language)}
          videoUrl={activeProject.modalVideoUrl}
          embedTitle={
            activeProject.modalEmbedTitle
              ? resolveText(activeProject.modalEmbedTitle, language)
              : undefined
          }
          actions={activeProject.actions?.map((action) => ({
            label: resolveText(action.label, language),
            href: action.href,
            kind: action.kind,
          }))}
          isOpen={activeProject != null}
          onClose={() => setActiveProjectId(null)}
          closeAriaLabel={resolveText(
            uiCopy.categoryModal.closeDetailAria,
            language
          )}
        />
      ) : null}
    </>
  );
}
