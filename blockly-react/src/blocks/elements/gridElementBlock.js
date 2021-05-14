import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['grid_element'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("GRID ELEMENT");
    this.appendDummyInput();
    this.appendValueInput("text")
      .setCheck(null)
      .appendField("Text");
    this.appendValueInput("text_color")
      .setCheck(null)
      .appendField("Text color");
    this.appendDummyInput()
      .appendField("Element corner radius")
      .appendField(new Blockly.FieldNumber(10, 0, 100), "corner_radius");
    this.appendValueInput("background_color")
      .setCheck(null)
      .appendField("Background color");
    this.appendDummyInput();
    this.appendValueInput("route_to")
      .setCheck(null)
      .appendField("On Click");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("Layout element (grid)");
  }
};

// Generator stub:

Blockly.JavaScript['grid_element'] = function (block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text_color = Blockly.JavaScript.valueToCode(block, 'text_color', Blockly.JavaScript.ORDER_ATOMIC);
  var number_corner_radius = block.getFieldValue('corner_radius');
  var value_background_color = Blockly.JavaScript.valueToCode(block, 'background_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_route_to = Blockly.JavaScript.valueToCode(block, 'route_to', Blockly.JavaScript.ORDER_ATOMIC);

  // Assemble JavaScript into code variable.
  var random_id = Math.floor(Math.random() * 1000);

  var code = `GridItemModel(
                id: ${random_id},
                text: ${value_text},
                backgroundColor: ${value_background_color},
                cornerRadius: ${number_corner_radius},
                textColor: ${value_text_color},
                routeTo: ${value_route_to}
              ),\n`;
  return code;
};