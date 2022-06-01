export interface ISettingsLayout {
  children: any;
  current?: string;
  setCurrent: (current: string) => void;
}

export interface ISettingsItem {
  title: string;
  icon?: string;
  active?: boolean;
  onClick: () => void;
}
