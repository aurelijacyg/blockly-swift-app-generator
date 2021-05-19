import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['component_photo'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("PHOTO")
      .appendField(new Blockly.FieldImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyxFs3Ujjg8mBGCb1FIfVPb_e1teRB1Hw-7w&usqp=CAU", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput();
    this.appendValueInput("photo_url")
      .setCheck("Url")
      .appendField("URL");
    this.appendValueInput("width")
      .setCheck("CGFloat")
      .appendField("Width (CGFloat) ?");
    this.appendValueInput("height")
      .setCheck("CGFloat")
      .appendField("Height (CGFloat) ?");
    this.appendValueInput("shape")
      .setCheck("TypeShape")
      .appendField("Shape ?");
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setOutput(true, 'Component');
  }
};

// Generator stub:

Blockly.JavaScript['component_photo'] = function (block) {
  var value_photo_url = Blockly.JavaScript.valueToCode(block, 'photo_url', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
  var value_shape = Blockly.JavaScript.valueToCode(block, 'shape', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';

  // Assemble JavaScript into code variable.

  var code = `PhotoModel(
    URL: ${value_photo_url},
    shape: ${value_shape},
    width: ${value_width},
    height: ${value_height}
  )`;

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};