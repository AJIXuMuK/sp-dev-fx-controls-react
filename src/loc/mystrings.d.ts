declare interface IControlStrings {
  PeoplePickerGroupNotFound: string;
  ListViewFilterLabel: string;

  PeoplePickerSearchText: string;
  peoplePickerComponentTooltipMessage: string;
  peoplePickerComponentErrorMessage: string;
  peoplePickerSuggestionsHeaderText: string;
  genericNoResultsFoundText: string;
  peoplePickerLoadingText: string;


  SiteBreadcrumbLabel: string;
  ListViewGroupEmptyLabel: string;
  WebPartTitlePlaceholder: string;
  WebPartTitleLabel: string;
  DateTime: { [key: string]: string };
  SendEmailTo: string;
  StartChatWith: string;
  Contact: string;
  UpdateProfile: string;

  // Taxonomy picker
  TaxonomyPickerNoTerms: string;
  TaxonomyPickerExpandTitle: string;
  TaxonomyPickerMenuTermSet: string;
  TaxonomyPickerInLabel: string;
  TaxonomyPickerTermSetLabel: string;

  ListItemPickerSelectValue: string;

  //Maps
  mapsErrorMessage: string;
  mapsLoadingText: string;
  mapsSearchButtonText: string;
  mapsTitlePrefix: string;

  // DatePicker labels
  DatePickerMonthLongJanuary: string;
  DatePickerMonthShortJanuary: string;
  DatePickerMonthLongFebruary: string;
  DatePickerMonthShortFebruary: string;
  DatePickerMonthLongMarch: string;
  DatePickerMonthShortMarch: string;
  DatePickerMonthLongApril: string;
  DatePickerMonthShortApril: string;
  DatePickerMonthLongMay: string;
  DatePickerMonthShortMay: string;
  DatePickerMonthLongJune: string;
  DatePickerMonthShortJune: string;
  DatePickerMonthLongJuly: string;
  DatePickerMonthShortJuly: string;
  DatePickerMonthLongAugust: string;
  DatePickerMonthShortAugust: string;
  DatePickerMonthLongSeptember: string;
  DatePickerMonthShortSeptember: string;
  DatePickerMonthLongOctober: string;
  DatePickerMonthShortOctober: string;
  DatePickerMonthLongNovember: string;
  DatePickerMonthShortNovember: string;
  DatePickerMonthLongDecember: string;
  DatePickerMonthShortDecember: string;
  DatePickerDayLongSunday: string;
  DatePickerDayShortSunday: string;
  DatePickerDayLongMonday: string;
  DatePickerDayShortMonday: string;
  DatePickerDayLongTuesday: string;
  DatePickerDayShortTuesday: string;
  DatePickerDayLongWednesday: string;
  DatePickerDayShortWednesday: string;
  DatePickerDayLongThursday: string;
  DatePickerDayShortThursday: string;
  DatePickerDayLongFriday: string;
  DatePickerDayShortFriday: string;
  DatePickerDayLongSaturday: string;
  DatePickerDayShortSaturday: string;

  DatePickerGoToToday: string;
  DateTimePickerDate: string;
  DateTimePickerTime: string;
}

declare module 'ControlStrings' {
  const strings: IControlStrings;
  export = strings;
}
