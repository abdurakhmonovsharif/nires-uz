import { Router } from "@/router";
import { HistoryProvider, QueryProvider, ThemeProvider } from "./providers";
import { history } from "@/utils";
import { I18nextProvider } from "react-i18next";
import { useMediaQuery } from "@/hooks";
import { HelmetProvider } from "react-helmet-async";
import { HydrationProvider } from "react-hydration-provider";
import { i18n } from "@/libs";
import { useAppStore } from "@/store";
import { useEffect } from "react";
import { Loading } from "@/components";

function App() {
  const { mobileLg } = useMediaQuery();
  const { loading, setLoading } = useAppStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <Loading allScreen />;
  }

  return (
    <>
      {!mobileLg && <div id="sfc5j65nhsmrncshbncr4sauq8mrp4jtw9q"></div>}

      <HydrationProvider>
        <QueryProvider>
          <I18nextProvider i18n={i18n}>
            <HelmetProvider>
              <HistoryProvider history={history}>
                <ThemeProvider>
                  <Router />
                </ThemeProvider>
              </HistoryProvider>
            </HelmetProvider>
          </I18nextProvider>
        </QueryProvider>
      </HydrationProvider>
    </>
  );
}

export default App;
