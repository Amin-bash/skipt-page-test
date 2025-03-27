export interface Skip {
  pricePerWeek: number | null;
  id: number;
  size: number;
  hirePeriodDays: number;
  totalPrice: number;
  allowedOnRoad: boolean;
  allowsHeavyWaste: boolean;
  label: number,
  forbidden: boolean;
}


export interface SkipApiResponse {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: null;
  forbidden: boolean;
  created_at: Date;
  updated_at: Date;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}
