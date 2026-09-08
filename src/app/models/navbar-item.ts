import { MatButtonAppearance } from '@angular/material/button';

export interface NavItem {
  label: string;
  link: string;
  icon?: string;
  tooltip?: string;
  buttonType?: MatButtonAppearance;
}
