import * as Blockly from 'blockly/core';

// Block Definition:
Blockly.Blocks['photo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GALLERY PHOTO");
    this.appendDummyInput()
        .appendField("URL")
        .appendField(new Blockly.FieldTextInput("https://www..."), "imageURL");
    this.appendDummyInput()
        .appendField("Category")
        .appendField(new Blockly.FieldTextInput("category"), "category");
    this.appendDummyInput()
        .appendField("Heading")
        .appendField(new Blockly.FieldTextInput("heading"), "heading");
    this.appendDummyInput()
        .appendField("Label")
        .appendField(new Blockly.FieldTextInput("label"), "label");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

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