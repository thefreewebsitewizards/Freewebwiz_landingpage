import React, { useLayoutEffect, useRef, useState, useCallback, useEffect } from "react";
import { gsap } from "gsap";

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = "Logo",
  items,
  className = "",
  ease = "power3.out",
  baseColor = "#fff",
  menuColor,
  buttonBgColor,
  buttonTextColor,
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  // Removed unused mousePosition state
  const [glowIntensity, setGlowIntensity] = useState(0);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 280;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const isExtraSmall = window.matchMedia("(max-width: 475px)").matches;
    
    if (isMobile) {
      const contentEl = navEl.querySelector(".card-nav-content") as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;
        const wasOverflow = contentEl.style.overflow;

        contentEl.style.visibility = "visible";
        contentEl.style.pointerEvents = "auto";
        contentEl.style.position = "static";
        contentEl.style.height = "auto";
        contentEl.style.overflow = "visible";

        // Force reflow to get accurate height measurement
        void contentEl.offsetHeight;

        const topBar = isExtraSmall ? 56 : 60;
        const padding = isExtraSmall ? 16 : 20; // Increased padding for better visibility
        const contentHeight = contentEl.scrollHeight;
        const extraBuffer = 8; // Additional buffer to ensure full visibility

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;
        contentEl.style.overflow = wasOverflow;

        return topBar + contentHeight + padding + extraBuffer;
      }
    }
    return 280; // Increased default height for desktop
  };

  const createTimeline = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return null;

    const isExtraSmall = window.matchMedia("(max-width: 475px)").matches;
    const initialHeight = isExtraSmall ? 56 : 60;
    
    gsap.set(navEl, { height: initialHeight, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 30, opacity: 0, scale: 0.95 }); // Reduced initial offset and added scale

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.5, // Slightly longer for smoother animation
      ease: "power2.out", // Smoother easing
    });

    tl.to(
      cardsRef.current,
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 0.6, // Longer duration for smoother card animation
        ease: "back.out(1.2)", // Bouncy easing for more polished feel
        stagger: 0.06 // Slightly faster stagger
      },
      "-=0.2" // More overlap for smoother transition
    );

    return tl;
  }, []);

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items, createTimeline]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded, createTimeline]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  const handleSmoothScroll = (targetId: string) => {
    // Close menu first on mobile
    if (isExpanded) {
      toggleMenu();
    }
    
    // Add a small delay to ensure lazy-loaded sections are rendered
    setTimeout(() => {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Calculate distance from cursor to navbar border
  const calculateProximity = useCallback((mouseX: number, mouseY: number) => {
    if (!navRef.current) return;
    
    const rect = navRef.current.getBoundingClientRect();
    const proximityThreshold = 100; // Distance in pixels to start effect
    
    // Calculate distance to each border
    const distanceToTop = Math.abs(mouseY - rect.top);
    const distanceToBottom = Math.abs(mouseY - rect.bottom);
    const distanceToLeft = Math.abs(mouseX - rect.left);
    const distanceToRight = Math.abs(mouseX - rect.right);
    
    // Find minimum distance to any border
    const minDistance = Math.min(distanceToTop, distanceToBottom, distanceToLeft, distanceToRight);
    
    // Calculate intensity (1 = at border, 0 = at threshold distance)
    const intensity = Math.max(0, 1 - (minDistance / proximityThreshold));
    
    // Determine closest border position for glow placement
    let glowX = mouseX;
    let glowY = mouseY;
    
    if (minDistance === distanceToTop) glowY = rect.top;
    else if (minDistance === distanceToBottom) glowY = rect.bottom;
    else if (minDistance === distanceToLeft) glowX = rect.left;
    else if (minDistance === distanceToRight) glowX = rect.right;
    
    setGlowIntensity(intensity);
    setGlowPosition({ x: glowX, y: glowY });
  }, []);

  // Mouse move handler with throttling
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    calculateProximity(mouseX, mouseY);
  }, [calculateProximity]);

  // Add mouse tracking effect
  useEffect(() => {
    let rafId: number;
    
    const throttledMouseMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleMouseMove(e);
        rafId = 0;
      });
    };
    
    document.addEventListener('mousemove', throttledMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', throttledMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [handleMouseMove]);

  return (
    <div
      className={`card-nav-container fixed left-1/2 -translate-x-1/2 w-[95%] xs:w-[90%] max-w-[800px] z-[999] top-3 xs:top-4 ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? "open" : ""} block h-[56px] xs:h-[60px] p-0 rounded-lg xs:rounded-xl shadow-lg backdrop-blur-xl border border-white/20 relative overflow-hidden will-change-[height] transition-all duration-300`}
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          boxShadow: glowIntensity > 0 
            ? `0 0 ${20 * glowIntensity}px rgba(139, 92, 246, ${0.3 * glowIntensity}), 0 0 ${40 * glowIntensity}px rgba(139, 92, 246, ${0.1 * glowIntensity})` 
            : 'none'
        }}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[56px] xs:h-[60px] flex items-center justify-between px-4 xs:px-6 z-[2]">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? "open" : ""} group h-full flex flex-col items-center justify-center cursor-pointer gap-[5px] xs:gap-[6px] order-2 md:order-none min-w-[44px] touch-manipulation`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            tabIndex={0}
            style={{ color: menuColor || "#fff" }}
          >
          {/* Proximity glow effect */}
          <div 
            className="absolute inset-0 pointer-events-none rounded-lg xs:rounded-xl transition-opacity duration-200"
            style={{
              opacity: glowIntensity,
              background: `radial-gradient(circle at ${glowPosition.x - (navRef.current?.getBoundingClientRect().left || 0)}px ${glowPosition.y - (navRef.current?.getBoundingClientRect().top || 0)}px, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 30%, transparent 70%)`
            }}
          />
            <div
              className={`hamburger-line w-[26px] xs:w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? "translate-y-[3.5px] xs:translate-y-[4px] rotate-45" : ""
              } group-hover:opacity-75 group-active:opacity-60`}
            />
            <div
              className={`hamburger-line w-[26px] xs:w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? "-translate-y-[3.5px] xs:-translate-y-[4px] -rotate-45" : ""
              } group-hover:opacity-75 group-active:opacity-60`}
            />
          </div>

          <div className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none">
            <img src={logo} alt={logoAlt} className="logo h-[56px] xs:h-[60px] sm:h-[64px] md:h-[68px] lg:h-[72px] xl:h-[76px] w-auto object-contain transition-all duration-300 hover:scale-105" />
          </div>

          <button
            type="button"
            onClick={() => handleSmoothScroll('#ready')}
            className="cursor-target card-nav-cta-button hidden md:inline-flex items-center justify-center border-0 rounded-[calc(0.75rem-0.2rem)] px-6 py-2.5 h-auto font-semibold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95 relative overflow-hidden group"
            style={{ 
              background: buttonBgColor?.includes('gradient') ? buttonBgColor : `linear-gradient(135deg, ${buttonBgColor || '#8B5CF6'}, #3B82F6)`,
              backgroundColor: buttonBgColor?.includes('gradient') ? undefined : buttonBgColor,
              color: buttonTextColor 
            }}
          >
            <span className="relative z-10 font-bold tracking-wide">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
          </button>
        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[56px] xs:top-[60px] bottom-0 p-3 xs:p-4 flex flex-col items-stretch gap-3 xs:gap-4 justify-start z-[1] ${
            isExpanded
              ? "visible pointer-events-auto"
              : "invisible pointer-events-none"
          } md:flex-row md:items-end md:gap-[16px]`}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col gap-2 p-[10px_12px] xs:p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[56px] xs:min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%] touch-manipulation"
              ref={setCardRef(idx)}
              style={{ 
                background: item.bgColor.includes('gradient') ? item.bgColor : item.bgColor, 
                backgroundColor: item.bgColor.includes('gradient') ? undefined : item.bgColor,
                color: item.textColor 
              }}
            >
              <div className="nav-card-label font-normal tracking-[-0.5px] text-[16px] xs:text-[18px] md:text-[22px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
                {item.links?.map((lnk, i) => (
                  <button
                    key={`${lnk.label}-${i}`}
                    className="cursor-target nav-card-link inline-flex items-center gap-[4px] xs:gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 active:opacity-60 text-[14px] xs:text-[15px] md:text-[16px] touch-manipulation min-h-[44px] xs:min-h-auto py-1 xs:py-0 bg-transparent border-0 text-left w-full relative z-10"
                    onClick={() => handleSmoothScroll(lnk.href)}
                    aria-label={lnk.ariaLabel}
                  >
                    <svg className="nav-card-link-icon shrink-0 w-3 xs:w-4 h-3 xs:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                    {lnk.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;