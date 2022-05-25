export interface ISummaryItem {
  percentage: number;
  totalCount: number | string;
  title: string;
  subTotal?: string;
  isNaira?: boolean;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}
