import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['paper_view_screen'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("PAPER VIEW SCREEN");
    this.appendDummyInput();
    this.appendValueInput("title")
      .setCheck(null)
      .appendField("Title");
    this.appendValueInput("title_color")
      .setCheck(null)
      .appendField("Title color");
    this.appendValueInput("body")
      .setCheck(null)
      .appendField("Body");
    this.appendValueInput("body_color")
      .setCheck(null)
      .appendField("Body color");
    this.appendValueInput("photo")
      .setCheck(null)
      .appendField("Photo");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Generator stub:

Blockly.JavaScript['paper_view_screen'] = function (block) {
  var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC);
  var value_title_color = Blockly.JavaScript.valueToCode(block, 'title_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_body = Blockly.JavaScript.valueToCode(block, 'body', Blockly.JavaScript.ORDER_ATOMIC);
  var value_body_color = Blockly.JavaScript.valueToCode(block, 'body_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_photo = Blockly.JavaScript.valueToCode(block, 'photo', Blockly.JavaScript.ORDER_ATOMIC);

  // Assemble JavaScript into code variable.
  var code = '...';

  return [code, Blockly.JavaScript.ORDER_NONE];
};


/*

// Generator stub:
Blockly.JavaScript['destination_content'] = function(block) {
  var text_titletext = block.getFieldValue('titleText');
  var dropdown_titlecolordropdown = block.getFieldValue('titleColorDropdown');
  var text_bodytext = block.getFieldValue('bodyText');
  var dropdown_bodycolordropdown = block.getFieldValue('bodyColorDropdown');
  var value_contentimage = Blockly.JavaScript.valueToCode(block, 'contentImage', Blockly.JavaScript.ORDER_ATOMIC);


  // Assemble JavaScript into code variable.
  var code = 'ContentDetail(\ntitleText: "' + text_titletext + '",\nbodyText: "' + text_bodytext + '",\ntitleColor: Color.' + dropdown_titlecolordropdown +
    ',\nbodyTextColor: Color.' + dropdown_bodycolordropdown + ',\nimage: ImageData' + value_contentimage + ')\n';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

*/