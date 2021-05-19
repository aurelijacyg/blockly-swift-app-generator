import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['component_card'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("CARD");
    this.appendDummyInput();
    this.appendValueInput("photo_url")
      .setCheck("Url")
      .appendField("Photo URL");
    this.appendValueInput("category_name")
      .setCheck("String")
      .appendField("Category name");
    this.appendValueInput("heading")
      .setCheck("String")
      .appendField("Heading");
    this.appendValueInput("label")
      .setCheck("String")
      .appendField("Label");
    this.setInputsInline(false);
    this.setPreviousStatement(true, 'Component');
    this.setNextStatement(true, 'Component');
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Generator stub:

Blockly.JavaScript['component_card'] = function (block) {
  var value_photo_url = Blockly.JavaScript.valueToCode(block, 'photo_url', Blockly.JavaScript.ORDER_ATOMIC);
  var value_category_name = Blockly.JavaScript.valueToCode(block, 'category_name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_heading = Blockly.JavaScript.valueToCode(block, 'heading', Blockly.JavaScript.ORDER_ATOMIC);
  var value_label = Blockly.JavaScript.valueToCode(block, 'label', Blockly.JavaScript.ORDER_ATOMIC);

  // Assemble JavaScript into code variable.

  var code = `CardModel(
    photoURL: ${value_photo_url},
    category: ${value_category_name},
    heading: ${value_heading},
    label: ${value_label}
  )`;

  return code;
};