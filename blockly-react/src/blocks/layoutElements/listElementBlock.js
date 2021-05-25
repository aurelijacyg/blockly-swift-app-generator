import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['element_list_item'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("LIST ELEMENT");
    this.appendDummyInput();
    this.appendValueInput("text")
      .setCheck("String")
      .appendField("Text");
    this.appendValueInput("text_color")
      .setCheck("Color")
      .appendField("Text color");
    this.appendValueInput("background_color")
      .setCheck("Color")
      .appendField("Backround color");
    this.appendValueInput("background_color_gradient")
      .setCheck("Color")
      .appendField("Background gradient color ?");
    this.appendValueInput("icon")
      .setCheck("Icon")
      .appendField("Icon ?");
    this.appendDummyInput();
    this.appendValueInput("route_to")
      .setCheck("Screen")
      .appendField("On Click ?");
    this.setInputsInline(false);
    this.setPreviousStatement(true, 'ListElement');
    this.setNextStatement(true, 'ListElement');
    this.setColour(290);
    this.setTooltip("Layout element (list)");
    this.setHelpUrl("");
  }
};

// Generator stub:

Blockly.JavaScript['element_list_item'] = function (block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC) || '';
  var value_text_color = Blockly.JavaScript.valueToCode(block, 'text_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_background_color = Blockly.JavaScript.valueToCode(block, 'background_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_background_color_gradient = Blockly.JavaScript.valueToCode(block, 'background_color_gradient', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
  var value_icon = Blockly.JavaScript.valueToCode(block, 'icon', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
  var value_route_to = Blockly.JavaScript.valueToCode(block, 'route_to', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';

  // Assemble JavaScript into code variable.

  var code = `ListItemModel(
    text: ${value_text},
    backgroundColor: ${value_background_color},
    backgroundGradientColor: ${value_background_color_gradient},
    textColor: ${value_text_color},
    icon: ${value_icon},
    routeTo: ${value_route_to}
  )`;

  return code;
};