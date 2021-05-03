import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['card'] = {
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
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Generator stub:

Blockly.JavaScript['card'] = function (block) {
  var value_photo_url = Blockly.JavaScript.valueToCode(block, 'photo_url', Blockly.JavaScript.ORDER_ATOMIC);
  var value_category_name = Blockly.JavaScript.valueToCode(block, 'category_name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_heading = Blockly.JavaScript.valueToCode(block, 'heading', Blockly.JavaScript.ORDER_ATOMIC);
  var value_label = Blockly.JavaScript.valueToCode(block, 'label', Blockly.JavaScript.ORDER_ATOMIC);

  // Assemble JavaScript into code variable.
  var code = '...;\n';

  return code;
};

/*

// Generator stub:
Blockly.JavaScript['photo'] = function(block) {
  var text_imageurl = block.getFieldValue('imageURL');
  var text_category = block.getFieldValue('category');
  var text_heading = block.getFieldValue('heading');
  var text_label = block.getFieldValue('label');

  var random_id = Math.floor(Math.random() * 1000);

  // Assemble JavaScript into code variable.
  var code = 'PhotoData(\nid: ' + random_id + ',\nimageURL: "' + text_imageurl + '",\ncategory: "' + text_category + '",\nheading: "' + text_heading + '",\ninfoText: "' + text_label + '"\n),\n';
  return code;
};

*/