import { TableColumnsType } from "antd";

export interface ITable {
  title: string;
  viewAllLink?: string;
  data?: any;
  columns?: any;
  filterComponent?: JSX.Element;
}
