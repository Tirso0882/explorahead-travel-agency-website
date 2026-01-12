"use client";

import { useEffect } from "react";

export function RemoveNextjsPortal() {
  useEffect(() => {
    const removePortal = () => {
      const portal = document.querySelector("nextjs-portal");
      if (portal) {
        portal.remove();
      }
    };

    // Remove immediately
    removePortal();

    // Watch for new portals being added
    const observer = new MutationObserver(removePortal);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}












