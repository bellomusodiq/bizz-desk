export type LinkItemProps = {
  icon?: string;
  title: string;
  path?: string;
  onClick?: () => void;
  active?: boolean;
};

export interface ISideNav {
  show?: boolean;
  closeSideNav?: () => void;
}
