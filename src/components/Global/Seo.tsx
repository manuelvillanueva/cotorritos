import React from "react";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
export const Seo = ({ title, description, pathname, children }: any) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    // image,
    siteUrl,
  } = useSiteMetadata();
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    // image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  };
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {/* <meta name="image" content={seo.image} /> */}
      <meta name="og:card" content="summary_large_image" />
      <meta name="og:title" content={seo.title} />
      <meta name="og:url" content={seo.url} />
      <meta name="og:description" content={seo.description} />
      {/* <meta name="og:image" content={seo.image} /> */}
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {children}
    </>
  );
};
