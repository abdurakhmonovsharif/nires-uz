import { useMediaQuery as useResponsive } from "react-responsive";

export const useMediaQuery = () => {
  const isDesktopLg = useResponsive({ query: "(max-width: 1440px)" });
  const isDesktop = useResponsive({ query: "(min-width: 1024px)" });
  const max1100 = useResponsive({ query: "(max-width: 1100px)" });
  const isDesktopXs = useResponsive({ query: "(max-width: 1280px)" });
  const from1000 = useResponsive({ query: "(min-width: 1000.99px)" });
  const isTablet = useResponsive({
    query: "(min-width: 600px) and (max-width: 1023.98px)",
  });
  const isTabletLg = useResponsive({ query: "(max-width: 1000px)" });
  const max900 = useResponsive({ query: "(max-width: 900px)" });
  const isTabletXs = useResponsive({ query: "(max-width: 768px)" });
  const isMobileLG = useResponsive({ query: "(max-width: 599.98px)" });
  const isMobile = useResponsive({ query: "(max-width: 424.99px)" });
  const isMobileXs = useResponsive({ query: "(max-width: 350.99px)" });

  return {
    desktop: isDesktop,
    desktopLg: isDesktopLg,
    max1100: max1100,
    desktopXs: isDesktopXs,
    tablet: isTablet,
    tabletLg: isTabletLg,
    tabletXs: isTabletXs,
    mobileLg: isMobileLG,
    mobile: isMobile,
    mobileXs: isMobileXs,
    from1000: from1000,
    max900,
  };
};
