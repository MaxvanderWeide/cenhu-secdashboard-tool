import {ChartOptions, ChartPluginsOptions, ChartType, PositionType} from 'chart.js';

export interface PieChart {
  title: string;
  data: number[];
  labels: string[];
  dataColors?: string[];
  showLegend: boolean;
  legendPosition?: PositionType;
  displayDataInChart: boolean;
  options?: ChartOptions;
  type?: ChartType;
  plugins?: ChartPluginsOptions;
  colors?: {};
}
