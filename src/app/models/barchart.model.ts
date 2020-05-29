import {ChartDataSets, ChartOptions, ChartPluginsOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';

export interface BarChart {
  title: string;
  data: ChartDataSets[];
  labels: Label[];
  dataColors: string[];
  horizontal: boolean;
  legend: boolean;
  plugins?: ChartPluginsOptions;
  options?: ChartOptions;
  colors?: {}[];
  type?: ChartType;
}
