export interface ICharecter {
  id: number;
  name: string;
  series: [];
  description: string;
  category: string;
  thumbnail: string;
  rating: { rate: number; count: number };
  /// ...
}