import * as Blockly from 'blockly/core';

// Block Definition:
Blockly.Blocks['destination_photos'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PHOTO GALLERY SCREEN");
    this.appendDummyInput()
        .appendField("Gallery name (one word)")
        .appendField(new Blockly.FieldTextInput("default"), "galleryName");
    this.appendDummyInput()
        .appendField("Screen title")
        .appendField(new Blockly.FieldTextInput("screen"), "navigationBarTextTitle");
    this.appendDummyInput()
        .appendField("Category color")
        .appendField(new Blockly.FieldDropdown([["primary","primary"], ["secondary","secondary"], ["purple","purple"], ["pink","pink"], ["blue","blue"], ["green","green"], ["red","red"], ["orange","orange"], ["yellow","yellow"]]), "categoryColor");
    this.appendDummyInput()
        .appendField("Heading color")
        .appendField(new Blockly.FieldDropdown([["primary","primary"], ["secondary","secondary"], ["purple","purple"], ["pink","pink"], ["blue","blue"], ["green","green"], ["red","red"], ["orange","orange"], ["yellow","yellow"]]), "headingColor");
    this.appendDummyInput()
        .appendField("Label color")
        .appendField(new Blockly.FieldDropdown([["primary","primary"], ["secondary","secondary"], ["purple","purple"], ["pink","pink"], ["blue","blue"], ["green","green"], ["red","red"], ["orange","orange"], ["yellow","yellow"]]), "labelColor");
    this.appendDummyInput();
    this.appendStatementInput("photoGallery")
        .setCheck(null)
        .appendField("Photos");
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Generator stub:
Blockly.JavaScript['destination_photos'] = function(block) {
  var text_galleryname = block.getFieldValue('galleryName');
  var text_navigationbartexttitle = block.getFieldValue('navigationBarTextTitle');
  var dropdown_categorycolor = block.getFieldValue('categoryColor');
  var dropdown_headingcolor = block.getFieldValue('headingColor');
  var dropdown_labelcolor = block.getFieldValue('labelColor');
  var statements_photogallery = Blockly.JavaScript.statementToCode(block, 'photoGallery');

  // Assemble JavaScript into code variable.
  var code = 'ContentPhotos(\ncategoryColor: Color.' + dropdown_categorycolor + ',\nheadingColor: Color.' + dropdown_headingcolor + 
    ',\ninfoTextColor: Color.' + dropdown_labelcolor + ',\nnavigationBarTextTitle: ' + "'" + text_navigationbartexttitle + "'" + ',\nphotosArray: [\n' + statements_photogallery + ']\n\n)';

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};