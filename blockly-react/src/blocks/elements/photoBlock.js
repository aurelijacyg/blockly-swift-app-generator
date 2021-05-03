import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['photo'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("PHOTO")
      .appendField(new Blockly.FieldImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyxFs3Ujjg8mBGCb1FIfVPb_e1teRB1Hw-7w&usqp=CAU", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput();
    this.appendValueInput("photo_url")
      .setCheck(null)
      .appendField("URL");
    this.appendDummyInput()
      .appendField("Width")
      .appendField(new Blockly.FieldNumber(250, 100, 1000), "width")
      .appendField("Height")
      .appendField(new Blockly.FieldNumber(250, 100, 1000), "height");
    this.appendDummyInput()
      .appendField("Type")
      .appendField(new Blockly.FieldDropdown([["rounded", "rounded"], ["rectangle", "rectangle"]]), "photo_type");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Generator stub:

Blockly.JavaScript['photo'] = function (block) {
  var value_photo_url = Blockly.JavaScript.valueToCode(block, 'photo_url', Blockly.JavaScript.ORDER_ATOMIC);
  var number_width = block.getFieldValue('width');
  var number_height = block.getFieldValue('height');
  var dropdown_photo_type = block.getFieldValue('photo_type');

  // Assemble JavaScript into code variable.
  var code = '...';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

/*

// Generator stub:
Blockly.JavaScript['image'] = function(block) {
  var text_imageurl = block.getFieldValue('imageURL');
  var number_width = block.getFieldValue('width');
  var number_height = block.getFieldValue('height');
  var dropdown_imagetype = block.getFieldValue('imageType');

  if (dropdown_imagetype === 'rounded') {
    var isImageRouded = true
  } else {
    var isImageRouded = false
  }

  // Assemble JavaScript into code variable.
  var code = 'URL: "' + text_imageurl + '",\nwidth: ' + number_width + ',\nheight: ' + number_height + ',\nisRounded: ' + isImageRouded + '\n';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

*/