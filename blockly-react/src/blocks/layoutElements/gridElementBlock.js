import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['element_grid_item'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("GRID ELEMENT");
    this.appendDummyInput();
    this.appendValueInput("text")
      .setCheck(null)
      .appendField("Text ?");
    this.appendValueInput("text_color")
      .setCheck(null)
      .appendField("Text color ?");
    this.appendValueInput("icon")
      .setCheck(null)
      .appendField("Icon ?");
    this.appendValueInput("corner_radius")
      .setCheck(null)
      .appendField("Element corner radius (CGFloat)");
    this.appendValueInput("background_color")
      .setCheck(null)
      .appendField("Background color");
    this.appendValueInput("background_color_gradient")
      .setCheck(null)
      .appendField("Background gradient color ?");
    this.appendDummyInput();
    this.appendValueInput("route_to")
      .setCheck(null)
      .appendField("On Click ?");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Layout element (grid)");
    this.setHelpUrl("");
  }
};

// Generator stub:

Blockly.JavaScript['element_grid_item'] = function (block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
  var value_text_color = Blockly.JavaScript.valueToCode(block, 'text_color', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
  var value_icon = Blockly.JavaScript.valueToCode(block, 'icon', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
  var value_corner_radius = Blockly.JavaScript.valueToCode(block, 'corner_radius', Blockly.JavaScript.ORDER_ATOMIC);
  var value_background_color = Blockly.JavaScript.valueToCode(block, 'background_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_background_color_gradient = Blockly.JavaScript.valueToCode(block, 'background_color_gradient', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
  var value_route_to = Blockly.JavaScript.valueToCode(block, 'route_to', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';

  // Assemble JavaScript into code variable.

  var code = `GridItemModel(
    text: ${value_text},
    icon: ${value_icon},
    backgroundColor: ${value_background_color},
    backgroundGradientColor: ${value_background_color_gradient},
    cornerRadius: ${value_corner_radius},
    textColor: ${value_text_color},
    routeTo: ${value_route_to}
  ),`;

  return code;
};