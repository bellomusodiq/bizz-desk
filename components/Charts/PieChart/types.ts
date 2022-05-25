export interface IPieChart {
  data: any;
  title: string;
  value: string;
  percentage: number;
  isNaira?: boolean;
  colors?: string[];
  caption?: string[];
  isFilter?: boolean;
  rightLegend?: boolean;
  customHeader?: JSX.Element;
}
