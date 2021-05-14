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

  var code = `Routing.paper(
    PaperView(
      titleText: ${value_title},
      bodyText: ${value_body},
      titleColor: ${value_title_color},
      bodyTextColor: ${value_body_color},
      photo: ${value_photo}
    )
  )`;

  return [code, Blockly.JavaScript.ORDER_NONE];
};