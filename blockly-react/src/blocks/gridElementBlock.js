import * as Blockly from 'blockly/core';

// Block Definition:
Blockly.Blocks['grid_element'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GRID ELEMENT");
    this.appendDummyInput()
        .appendField("Text")
        .appendField(new Blockly.FieldTextInput("Element text"), "Text")
        .appendField("Text color")
        .appendField(new Blockly.FieldDropdown([["black","black"], ["white","white"], ["gray","gray"], ["blue","blue"], ["green","green"], ["red","red"], ["yellow","yellow"], ["purple","purple"], ["pink","pink"], ["orange","orange"]]), "textColorDropdown");
    this.appendDummyInput()
        .appendField("Element corner radius")
        .appendField(new Blockly.FieldNumber(10, 0, 100), "cornerRadius");
    this.appendDummyInput()
        .appendField("Background color")
        .appendField(new Blockly.FieldDropdown([["black","black"], ["white","white"], ["gray","gray"], ["blue","blue"], ["green","green"], ["red","red"], ["yellow","yellow"], ["purple","purple"], ["pink","pink"], ["orange","orange"]]), "backgroundDropdown");
    this.appendDummyInput();
    this.appendValueInput("Destination")
        .setCheck(null)
        .appendField("On tap open");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("Layout element");
  }
};

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
};