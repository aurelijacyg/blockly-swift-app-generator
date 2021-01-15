import React from 'react';
import * as Blockly from 'blockly/core';

// import BlocklyReactField from './BlocklyReactField';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class ImageField extends BlocklyReactField {

  static fromJson(options) {
    //eturn new ReactDateField(new Date(options['date']));
    console.log(options['name']);
  }

  fromXml(fieldElement) {
    console.log(fieldElement.textContent)
  }

  render() {
  }
}

Blockly.fieldRegistry.register('field_react_date', ReactDateField);

export default ImageField;