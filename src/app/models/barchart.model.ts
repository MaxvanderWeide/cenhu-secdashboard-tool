import {ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';

export interface BarChart {
  title: string;
  data: ChartDataSets[];
  labels: Label[];
  dataColors: string[];
  horizontal: boolean;
}
