export interface DataTableItem {
  aggregate_date: string;
  active_carrier: number;
  active_client: number;
  assigned_count: number;
  order_count: number;
  margin_abs: number;
  margin_abs_per_order: number;
  margin_perc: number;
  revenue: number;
  revenue_assigned: number;
  revenue_per_order: number;
}

export interface Statistics {
  data_table: DataTableItem[];
  histograms: {
    time_margin_perc: any[];
    time_order_count: any[];
    time_revenue: any[];
  };
  kpis: any;
  scalars: {
    active_carrier: number;
    active_client: number;
    total_revenue: number;
    total_margin: number;
    total_order_count: number;
    total_assigned_count: number;
    new_carrier: number;
    new_client: number;
  };
}
