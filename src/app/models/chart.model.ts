import {ChartDataSets, ChartOptions, ChartPluginsOptions, ChartType, PositionType} from 'chart.js';
import {Label} from 'ng2-charts';

export interface Chart {
  title: string;
  data: ChartDataSets[];
  labels: Label[];
  dataColors?: string[];
  legend?: boolean;
  plugins?: ChartPluginsOptions;
  options?: ChartOptions;
  colors?: {}[];
  type?: ChartType;
}

export type LineChart = Chart & {
  aspectRatioOff?: boolean;
};

export type PieChart = Chart & {
  showLegend?: boolean;
  legendPosition?: PositionType;
  displayDataInChart?: boolean;
  data: number[];
};

export type BarChart = Chart & {
  showLegend?: boolean;
  legendPosition?: PositionType;
  displayDataInChart?: boolean;
  horizontal?: boolean;
};
