import { Skip, SkipApiResponse } from "./skipModules";

export async function fetchAvailableSkips(): Promise<Skip[]> {
    const response = await fetch(
      'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'
    );
  
    if (!response.ok) {
      throw new Error('Failed to fetch skip data');
    }
  
    const data: SkipApiResponse[] = await response.json();
  
    const mappedData: Skip[] = data.map((item) => ({
      id: item.id,
      size: item.size,
      hirePeriodDays: item.hire_period_days,
      totalPrice: item.price_before_vat + item.vat,
      allowedOnRoad: item.allowed_on_road,
      allowsHeavyWaste: item.allows_heavy_waste,
      label: item.size,
      pricePerWeek: item.per_tonne_cost,
      forbidden: item.allowed_on_road
    }));
  
    return mappedData;
}
