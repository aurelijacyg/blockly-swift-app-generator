import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['app_block'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("MY APP");
    this.appendDummyInput();
    this.appendValueInput("header")
      .setCheck("String")
      .appendField("Name");
    this.appendValueInput("header_color")
      .setCheck("Color")
      .appendField("Navigation bar text color");
    this.appendValueInput("nav_bar_color")
      .setCheck("Color")
      .appendField("Navigation bar color");
    this.appendValueInput("background")
      .setCheck("FunctionMakeBackground")
      .appendField("App background color");
    this.appendDummyInput();
    this.appendDummyInput()
      .appendField("Tabs");
    this.appendStatementInput("screens")
      .setCheck("Tab");
    this.setColour(230);
    this.setTooltip("Come up with an app idea and name.");
    this.setHelpUrl("");
  }
};

// Generator stub:

Blockly.JavaScript['app_block'] = function (block) {
  var value_header = Blockly.JavaScript.valueToCode(block, 'header', Blockly.JavaScript.ORDER_ATOMIC);
  var value_header_color = Blockly.JavaScript.valueToCode(block, 'header_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_nav_bar_color = Blockly.JavaScript.valueToCode(block, 'nav_bar_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_background = Blockly.JavaScript.valueToCode(block, 'background', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_screens = Blockly.JavaScript.statementToCode(block, 'screens');

  // Assemble JavaScript into code variable.

  var code = `struct AppConfiguration {
    let data = TabsModel(
      header: ${value_header},
      headerColor: ${value_header_color},
      navigationBarColor: ${value_nav_bar_color},
      screenBackground: ${value_background},
      tabs: 
        [
          ${statements_screens}
        ]
      )
  }`;

  return code;
};