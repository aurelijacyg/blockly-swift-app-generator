import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['component_card'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("CARD");
    this.appendDummyInput();
    this.appendValueInput("photo_url")
      .setCheck(null)
      .appendField("Photo URL");
    this.appendValueInput("category_name")
      .setCheck(null)
      .appendField("Category name");
    this.appendValueInput("heading")
      .setCheck(null)
      .appendField("Heading");
    this.appendValueInput("label")
      .setCheck(null)
      .appendField("Label");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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

  var code = '...;\n';

  return code;
};

/*

var code = `CardModel(
                id: ${random_id},
                imageURL: ${value_photo_url},
                category: ${value_category_name},
                heading: ${value_heading},
                label: ${value_label}
              ),`;

*/