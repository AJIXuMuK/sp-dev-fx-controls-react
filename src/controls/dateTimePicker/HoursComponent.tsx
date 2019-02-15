import * as React from 'react';
import { IHoursComponentProps, TimeConvention } from './IDateTimePicker';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/components/Dropdown';

/**
 * Hours component, this renders the hours dropdown
 */
export default class HoursComponent extends React.Component<IHoursComponentProps, {}> {

  private _hours: IDropdownOption[];

  constructor(props: IHoursComponentProps) {
    super(props);

    this._initHoursOptions();
  }

  public render(): JSX.Element {

    return (
      <Dropdown
        disabled={this.props.disabled}
        label=''
        options={this._hours}
        onChanged={this.props.onChange}
        dropdownWidth={110} />
    );
  }

  private _initHoursOptions() {
    let hours: IDropdownOption[] = [];
    for (let i = 0; i < 24; i++) {
      let digit: string;
      if (this.props.timeConvention === TimeConvention.Hours24) {
        // 24 hours time convention
        if (i < 10) {
          digit = '0' + i;
        } else {
          digit = i.toString();
        }
      } else {
        // 12 hours time convention
        if (i === 0) {
          digit = '12 am';
        } else if (i < 12) {
          digit = i + ' am';
        } else {
          if (i === 12) {
            digit = '12 pm';
          } else {
            digit = (i % 12) + ' pm';
          }
        }
      }

      let selected: boolean = false;
      if (i === this.props.value) {
        selected = true;
      }

      hours.push({ key: i, text: digit, isSelected: selected });
    }

    this._hours = hours;
  }
}