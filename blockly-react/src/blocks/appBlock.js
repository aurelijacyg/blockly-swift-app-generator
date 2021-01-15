import * as Blockly from 'blockly/core';

// Block Definition:
Blockly.Blocks['app'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("APP");
    this.appendDummyInput()
        .appendField("Name")
        .appendField(new Blockly.FieldTextInput(""), "appName");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setColour(230);
 this.setTooltip("Come up with an app idea and name.");
 this.setHelpUrl("");
  }
};

// Generator stub:
Blockly.JavaScript['app'] = function(block) {
  var text_appname = block.getFieldValue('appName');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');

  // Assemble JavaScript into code variable.
  var code = `let appName=${text_appname}\n${statements_name}`;
  return code;
};