import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['screen_paper_view'] = {
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
    this.appendValueInput("is_tabbar_hidden")
      .setCheck(null)
      .appendField("Is tabbar hidden ?");
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

Blockly.JavaScript['screen_paper_view'] = function (block) {
  var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC);
  var value_title_color = Blockly.JavaScript.valueToCode(block, 'title_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_body = Blockly.JavaScript.valueToCode(block, 'body', Blockly.JavaScript.ORDER_ATOMIC);
  var value_body_color = Blockly.JavaScript.valueToCode(block, 'body_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_is_tabbar_hidden = Blockly.JavaScript.valueToCode(block, 'is_tabbar_hidden', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
  var value_photo = Blockly.JavaScript.valueToCode(block, 'photo', Blockly.JavaScript.ORDER_ATOMIC);

  // Assemble JavaScript into code variable.

  var code = `Screen.paper(
    PaperModel(
      title: ${value_title},
      body: ${value_body},
      titleColor: ${value_title_color},
      bodyColor: ${value_body_color},
      isTabBarHidden: ${value_is_tabbar_hidden},
      photo: ${value_photo}
    )
  )`;
  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};