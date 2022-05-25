export interface IScrollableCard {
  title?: string;
  columns: any;
  data: any;
  menu: JSX.Element;
  selected: string;
  link?: string;
  notScrollable?: boolean;
}
