// SEO utilities
export function generateCanonicalURL(pathname: string, site: URL | undefined): URL {
  return new URL(pathname, site);
}

export function generateImageURL(image: string, url: URL): URL {
  return new URL(image, url);
}