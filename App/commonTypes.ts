export type Restaurant = {
  name: string,
  thumbnail: string,
  address: Address,
  priceRating: number,
  starRating?: number,
  reviews: ReviewProps[],
  description: string,
}

type Address = {
  line1: string,
  line2: string,
}

export type ReviewProps = {
  starRating: number,
  bodyText: string,
}
