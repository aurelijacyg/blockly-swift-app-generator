import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['app'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("MY APP");
    this.appendDummyInput()
      .appendField("Name")
      .appendField(new Blockly.FieldTextInput(""), "app_name");
    this.appendStatementInput("screens")
      .setCheck(null);
    this.setColour(230);
    this.setTooltip("Come up with an app idea and name.");
    this.setHelpUrl("");
  }
};

// Generator stub:

Blockly.JavaScript['app'] = function (block) {
  var text_app_name = block.getFieldValue('app_name');
  var statements_screens = Blockly.JavaScript.statementToCode(block, 'screens');

  // Assemble JavaScript into code variable.
  var code = `let appName="${text_app_name}"\n${statements_screens}`;
  
  return code;
};