export interface ISalesSummary {
  current_sales: number;
  previous_sales: number;
}

export interface IRegisteredFarmer {
  current_new_account: number;
  previous_new_account: number;
  current_total_account: number;
  previous_total_account: number;
}

export interface IMarketplaceTopProducts {
  product_id: number;
  product_name: string;
  product_price: number;
  product_unit: string;
  product_quantity: number;
  product_sales: number;
}

export interface ITradingPostTopCrops {
  crop_id: number;
  crop_name: string;
  crop_price: number;
  crop_volume: number;
  crop_sales: number;
}

export interface ITopTransactionValue {
  user_id: number;
  total_transactions: number;
  first_name: string;
  last_name: string;
  email: string;
  user_img: string;
}
