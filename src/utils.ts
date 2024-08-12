import { differenceInDays } from "date-fns";

export function pluralize(text: string, num: number): string {
  return num == 1 ? text : text + "s";
}

export function formatPrice(price: number): string {
  return `$${price / 100}`;
}

export function isNewShoe(releaseDate:number) {
  return differenceInDays(new Date(), releaseDate) < 30;
}
