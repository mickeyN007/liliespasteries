/* eslint-disable @typescript-eslint/no-explicit-any */
// global.d.ts
export type ProductType = {
  name: string;
  productImg: string;
  price?: string;
  to: string;
  type?: string;
}

export interface ProductSearchParams {
  searchTerm: string;
  sortBy: keyof Book;
  sortOrder: number;
}