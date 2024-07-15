import { useEffect, useState } from 'react';
import { Statistics } from '../types/statistics';

/**
 * Fetches and sets statistics data after a delay.
 *
 * @return {Statistics | null} The fetched statistics data
 */
const useStatistics = () => {
  const [data, setData] = useState<Statistics | null>(null);

  useEffect(() => {
    // Simulating a delay to fetch data
    setTimeout(() => {
      // Expanded mock data with more days
      const mockData: Statistics = {
        data_table: [
          {
            aggregate_date: '2023-06-28',
            active_carrier: 120,
            active_client: 300,
            assigned_count: 180,
            order_count: 250,
            margin_abs: 5000,
            margin_abs_per_order: 20,
            margin_perc: 15,
            revenue: 100000,
            revenue_assigned: 80000,
            revenue_per_order: 400,
          },
          {
            aggregate_date: '2023-06-27',
            active_carrier: 115,
            active_client: 295,
            assigned_count: 175,
            order_count: 245,
            margin_abs: 4800,
            margin_abs_per_order: 19.6,
            margin_perc: 14.8,
            revenue: 96000,
            revenue_assigned: 76000,
            revenue_per_order: 390,
          },
          {
            aggregate_date: '2023-06-26',
            active_carrier: 110,
            active_client: 290,
            assigned_count: 170,
            order_count: 240,
            margin_abs: 4600,
            margin_abs_per_order: 19.2,
            margin_perc: 14.5,
            revenue: 92000,
            revenue_assigned: 72000,
            revenue_per_order: 380,
          },
          {
            aggregate_date: '2023-06-25',
            active_carrier: 105,
            active_client: 285,
            assigned_count: 165,
            order_count: 235,
            margin_abs: 4400,
            margin_abs_per_order: 18.8,
            margin_perc: 14.2,
            revenue: 88000,
            revenue_assigned: 68000,
            revenue_per_order: 370,
          },
          {
            aggregate_date: '2023-06-24',
            active_carrier: 100,
            active_client: 280,
            assigned_count: 160,
            order_count: 230,
            margin_abs: 4200,
            margin_abs_per_order: 18.4,
            margin_perc: 13.9,
            revenue: 84000,
            revenue_assigned: 64000,
            revenue_per_order: 360,
          },
        ],
        histograms: {
          time_margin_perc: [],
          time_order_count: [],
          time_revenue: [],
        },
        kpis: {
          active_carrier: 120,
          active_client: 300,
          assigned_count: 180,
          order_count: 250,
          margin_abs: 5000,
          margin_abs_per_order: 20,
          margin_perc: 15,
          revenue: 100000,
          revenue_assigned: 80000,
        },
        scalars: {
          active_carrier: 120,
          active_client: 300,
          total_revenue: 100000,
          total_margin: 5000,
          total_order_count: 250,
          total_assigned_count: 180,
          new_carrier: 5,
          new_client: 10,
        },
      };
      setData(mockData);
    }, 1000);
  }, []);

  return data;
};

export default useStatistics;
