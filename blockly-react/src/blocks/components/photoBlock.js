import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['component_photo'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("PHOTO")
      .appendField(new Blockly.FieldImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyxFs3Ujjg8mBGCb1FIfVPb_e1teRB1Hw-7w&usqp=CAU", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput();
    this.appendValueInput("photo_url")
      .setCheck(null)
      .appendField("URL");
    this.appendValueInput("width")
      .setCheck(null)
      .appendField("Width (CGFloat) ?");
    this.appendValueInput("height")
      .setCheck(null)
      .appendField("Height (CGFloat) ?");
    this.appendValueInput("shape")
      .setCheck(null)
      .appendField("Shape");
    this.setOutput(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Generator stub:

Blockly.JavaScript['component_photo'] = function (block) {
  var value_photo_url = Blockly.JavaScript.valueToCode(block, 'photo_url', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var value_shape = Blockly.JavaScript.valueToCode(block, 'shape', Blockly.JavaScript.ORDER_ATOMIC);

  // Assemble JavaScript into code variable.

  var code = `PhotoModel(
    URL: ${value_photo_url},
    shape: ${value_shape},
    width: ${value_width},
    height: ${value_height}
  )`;

  // Change ORDER_NONE to the correct strength.

  return [code, Blockly.JavaScript.ORDER_NONE];
};