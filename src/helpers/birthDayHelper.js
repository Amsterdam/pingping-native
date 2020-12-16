import React from 'react';
import {Picker} from '@react-native-community/picker';

export function getDays() {
  const days = [];
  for (let index = 1; index < 32; index++) {
    const value = index.toString();
    days.push(<Picker.Item label={value} value={value} key={value} />);
  }
  return days;
}

export function getMonths() {
  const months = [
    {label: 'januari', value: '1'},
    {label: 'februari', value: '2'},
    {label: 'maart', value: '3'},
    {label: 'april', value: '4'},
    {label: 'mei', value: '5'},
    {label: 'juni', value: '6'},
    {label: 'juli', value: '7'},
    {label: 'augustus', value: '8'},
    {label: 'september', value: '9'},
    {label: 'oktober', value: '10'},
    {label: 'november', value: '11'},
    {label: 'december', value: '12'},
  ];
  return months;
}

export function getYears() {
  const years = [];
  for (let index = 1994; index < 2020; index++) {
    const value = index.toString();
    years.push(<Picker.Item label={value} value={value} key={value} />);
  }
  return years;
}
