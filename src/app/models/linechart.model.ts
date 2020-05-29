import {ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';

export interface LineChart {
  title: string;
  data: ChartDataSets[];
  labels: Label[];
  dataColors: string[];
}
