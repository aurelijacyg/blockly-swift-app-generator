import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['destination_content'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("INFO SCREEN");
    this.appendDummyInput()
        .appendField("Title")
        .appendField(new Blockly.FieldTextInput("title"), "titleText")
        .appendField("Title color")
        .appendField(new Blockly.FieldDropdown([["black","black"], ["white","white"], ["gray","gray"], ["blue","blue"], ["green","green"], ["red","red"], ["yellow","yellow"], ["orange","orange"], ["purple","purple"], ["pink","pink"]]), "titleColorDropdown");
    this.appendDummyInput()
        .appendField("Body")
        .appendField(new Blockly.FieldTextInput("body"), "bodyText");
    this.appendDummyInput()
        .appendField("Body color")
        .appendField(new Blockly.FieldDropdown([["black","black"], ["white","white"], ["gray","gray"], ["blue","blue"], ["green","green"], ["red","red"], ["yellow","yellow"], ["orange","orange"], ["purple","purple"], ["pink","pink"]]), "bodyColorDropdown");
    this.appendValueInput("contentImage")
        .setCheck(null)
        .appendField("Image");
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Generator stub:
Blockly.JavaScript['destination_content'] = function(block) {
  var text_titletext = block.getFieldValue('titleText');
  var dropdown_titlecolordropdown = block.getFieldValue('titleColorDropdown');
  var text_bodytext = block.getFieldValue('bodyText');
  var dropdown_bodycolordropdown = block.getFieldValue('bodyColorDropdown');
  var value_contentimage = Blockly.JavaScript.valueToCode(block, 'contentImage', Blockly.JavaScript.ORDER_ATOMIC);


  // Assemble JavaScript into code variable.
  var code = 'ContentDetail(\ntitleText: ' + "'" + text_titletext + "'" + ',\nbodyText: ' + "'" + text_bodytext + "'" + ',\ntitleColor: Color.' + dropdown_titlecolordropdown +
    ',\nbodyTextColor: Color.' + dropdown_bodycolordropdown + ',\nimage: ImageData' + value_contentimage + ')\n';


  // Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};