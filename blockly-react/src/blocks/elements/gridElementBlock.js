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
  var code = '...;\n';
  return code;
};

/*


// Generator stub:
Blockly.JavaScript['grid_element'] = function(block) {
  var text_text = block.getFieldValue('Text');
  var dropdown_textcolordropdown = block.getFieldValue('textColorDropdown');
  var number_cornerradius = block.getFieldValue('cornerRadius');
  var dropdown_backgrounddropdown = block.getFieldValue('backgroundDropdown');
  var value_destination = Blockly.JavaScript.valueToCode(block, 'Destination', Blockly.JavaScript.ORDER_ATOMIC);

  var random_id = Math.floor(Math.random() * 1000);

  if (value_destination.includes('ContentDetail')) {
    var additionalCode = 'Destination.content'
  } else {
    var additionalCode = 'Destination.photos'
  }

  // Assemble JavaScript into code variable.
  var code = 'GridConfigData(\nid: ' + random_id + ',\ntext: "' + text_text + '",\nbackgroundColor: Color.' + dropdown_backgrounddropdown
    + ',\ncornerRadius: ' + number_cornerradius + ',\ntextColor: Color.' + dropdown_textcolordropdown + ',\ndestination: ' + additionalCode + value_destination + '\n),\n\n';
  return code;


*/