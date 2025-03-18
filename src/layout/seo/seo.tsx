import React from "react";
import { Helmet } from "react-helmet-async";
import { seoConfig } from "@/constants";
import { TSeoProps } from "@/types";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useTheme } from "antd-style";

export const Seo: React.FC<TSeoProps> = ({
  children,
  metaTitle = seoConfig.metaData.title,
  metaDescription = seoConfig.metaData.description,
  metaKeyword = seoConfig.metaData.keyword,
  ogImage = seoConfig.metaData.ogImage,
  ogType = seoConfig.metaData.ogType,
  faviconPath = seoConfig.faviconPath,
  locale = seoConfig.metaData.locale,
  alternates,
}) => {
  const {
    i18n: { language: lng },
  } = useTranslation();
  const { pathname } = useLocation();
  const origin = window.location.origin;
  const { colorPrimary } = useTheme();

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: lng,
          "xml:lang": lng,
          prefix: "og: https://ogp.me/ns#",
        }}
        defaultTitle="NIRES - Milliy Ilmiy-Tadqiqot Instituti"
        prioritizeSeoTags={true}
      >
        <link rel="canonical" href={`${origin}${pathname}`} />
        {alternates &&
          alternates.map(({ href, hrefLang }, idx) => (
            <link
              rel="alternate"
              href={`${origin}${href}`}
              hrefLang={hrefLang}
              key={idx}
            />
          ))}
        <title>{metaTitle}</title>

        {/* apple touch icon */}
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/${faviconPath}/apple-touch-icon.png`}
        />
        <meta name="apple-mobile-web-app-title" content="Scoring Trust" />

        {/* icon */}
        <link rel="manifest" href={`/${faviconPath}/site.webmanifest`} />
        <meta name="msapplication-TileColor" content={colorPrimary} />

        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keywords" content={metaKeyword} />
        <meta name="author" content={seoConfig.metaData.author} />
        <meta name="description" content={metaDescription} />

        <meta property="og:title" name="og:title" content={metaTitle} />
        <meta
          property="og:description"
          name="og:description"
          content={metaDescription}
        />
        <meta
          property="og:image"
          name="og:image"
          content={`https://scoringtrust.uz${ogImage}`}
        />
        <meta property="og:locale" name="og:locale" content={locale} />
        <meta
          property="og:locale:alternate"
          name="og:locale:alternate"
          content={"ru_RU"}
        />
        <meta
          property="og:locale:alternate"
          name="og:locale:alternate"
          content={"en_US"}
        />
        <meta property="og:type" name="og:type" content={ogType} />
        <meta property="og:site_name" name="og:site_name" content={metaTitle} />
        <meta
          property="og:url"
          name="og:url"
          content={`${origin}${pathname}`}
        />

        <meta name="twitter:title" content={metaTitle} />
        <meta
          name="twitter:image"
          content={`https://scoringtrust.uz${ogImage}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={metaDescription} />

        {/*{hasChat && (*/}
        {/*  // <script async src={getChatWidgetSrc(lng)} id="chat-script"></script>*/}
        {/*)}*/}
      </Helmet>
      <>{children}</>
    </>
  );
};
