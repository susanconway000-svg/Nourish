export type Product = {
  slug: string;
  name: string;
  description: string;
  /** Price shown on the site, e.g. "$29" */
  priceDisplay: string;
  /** Price Stripe actually charges, in whole cents (e.g. 2900 = $29.00) */
  priceInCents: number;
  currency: string;
  /** Where the buyer's file lives once they've paid. Swap for your real file link. */
  downloadUrl: string;
};

// Edit this list to add, rename, or re-price what you sell.
// Everything here is a placeholder for you to replace with your real offering.
export const products: Product[] = [
  {
    slug: "offering-one",
    name: "[OFFERING NAME]",
    description: "[One or two lines describing what she receives.]",
    priceDisplay: "[PRICE]",
    priceInCents: 2900,
    currency: "usd",
    downloadUrl: "https://example.com/replace-with-your-file-link.pdf",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
