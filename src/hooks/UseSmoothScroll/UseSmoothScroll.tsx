import { useEffect } from "react";

export const UseSmoothScroll = () => {
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest('a[href^="#"]');
      if (anchor) {
        event.preventDefault();

        const targetId = anchor.getAttribute("href");
        const targetElement = targetId && document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    // Adiciona o evento de clique aos links de âncora
    document.addEventListener("click", handleAnchorClick);

    // Limpa o evento ao desmontar o componente
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);
};
