import { useState, useEffect } from "react";

/**
 * Custom hook for locking body scroll
 * Useful for modals, sidebars, and overlays
 */
export function useBodyScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLocked]);
}

/**
 * Custom hook for getting current page info from menu items
 */
export function useCurrentPage(pathname: string, menuItems: Array<{ href: string; icon: string; title: string }>) {
  const currentPage = menuItems.find((item) => item.href === pathname);
  
  return {
    title: currentPage ? `${currentPage.icon} ${currentPage.title}` : "Java Learning",
    icon: currentPage?.icon || "☕",
    name: currentPage?.title || "Java Learning",
  };
}

/**
 * Custom hook for toggle state
 */
export function useToggle(initialState: boolean = false): [boolean, () => void, (value: boolean) => void] {
  const [state, setState] = useState(initialState);

  const toggle = () => setState((prev) => !prev);
  const setToggle = (value: boolean) => setState(value);

  return [state, toggle, setToggle];
}

/**
 * Custom hook for tracking page views
 */
export function usePageViews(pageName: string) {
  const [views, setViews] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Track view on mount
    const trackView = async () => {
      try {
        // Increment view count
        await fetch('/api/views', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ page: pageName }),
        });

        // Get updated count
        const response = await fetch(`/api/views?page=${encodeURIComponent(pageName)}`);
        const data = await response.json();
        setViews(data.views);
      } catch (error) {
        console.error('Failed to track view:', error);
      } finally {
        setLoading(false);
      }
    };

    trackView();
  }, [pageName]);

  return { views, loading };
}
