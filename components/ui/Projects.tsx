"use client"
import { useRef } from "react"
import IntroSection from "./IntroSection";
import WorkSection from "./WorkSection";
import ThoughtsSection from "./ThoughtsSection";

export default function Projects() {
  const sectionsRef = useRef(new Map<string, HTMLElement>());

  const setSectionRef = (id: string) => (element: HTMLElement | null) => {
    if (element) {
      sectionsRef.current.set(id, element);
    } else {
      sectionsRef.current.delete(id);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <IntroSection />

        <WorkSection  />

        <ThoughtsSection />
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
