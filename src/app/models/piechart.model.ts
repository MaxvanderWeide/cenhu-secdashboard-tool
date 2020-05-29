import {ChartOptions, ChartPluginsOptions} from 'chart.js';

export interface PieChart {
  title: string;
  data: number[];
  labels: string[];
  dataColors: string[];
  showLegend: boolean;
  displayDataInChart: boolean;
  options?: ChartOptions;
  type?: string;
  plugins?: ChartPluginsOptions;
  colors?: {};
}
