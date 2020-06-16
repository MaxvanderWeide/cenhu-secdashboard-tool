import {ChartDataSets, ChartOptions, ChartPluginsOptions, ChartType, PositionType} from 'chart.js';
import {Label} from 'ng2-charts';

export interface Chart {
  title: string;
  data: ChartDataSets[] | number[];
  labels: Label[];
  dataColors?: string[];
  legend?: boolean;
  plugins?: ChartPluginsOptions;
  options?: ChartOptions;
  colors?: {}[];
  type?: ChartType;
  aspectRatioOff?: boolean;
  horizontal?: boolean;
  showLegend?: boolean;
  legendPosition?: PositionType;
  displayDataInChart?: boolean;
}
