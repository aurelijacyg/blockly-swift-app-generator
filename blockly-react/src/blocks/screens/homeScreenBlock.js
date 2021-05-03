import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['home_screen'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("https://t4.ftcdn.net/jpg/01/87/04/55/360_F_187045571_1GPYu7GFoJzKuljKRaeowV20vskm3Hzv.jpg", 20, 20, { alt: "*", flipRtl: "FALSE" }))
      .appendField("HOME SCREEN:");
    this.appendDummyInput();
    this.appendValueInput("header")
      .setCheck(null)
      .appendField("Header");
    this.appendValueInput("subtitle")
      .setCheck(null)
      .appendField("Subtitle");
    this.appendValueInput("subtitle_color")
      .setCheck(null)
      .appendField("Subtitle text color");
    this.appendValueInput("photo_url")
      .setCheck(null)
      .appendField("Photo URL");
    this.appendDummyInput();
    this.appendValueInput("layout_type")
      .setCheck(null)
      .appendField("Layout Type");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip("Start with your home page");
    this.setHelpUrl("");
  }
};

// Generator stub:

Blockly.JavaScript['home_screen'] = function (block) {
  var value_header = Blockly.JavaScript.valueToCode(block, 'header', Blockly.JavaScript.ORDER_ATOMIC);
  var value_subtitle = Blockly.JavaScript.valueToCode(block, 'subtitle', Blockly.JavaScript.ORDER_ATOMIC);
  var value_subtitle_color = Blockly.JavaScript.valueToCode(block, 'subtitle_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_photo_url = Blockly.JavaScript.valueToCode(block, 'photo_url', Blockly.JavaScript.ORDER_ATOMIC);
  var value_layout_type = Blockly.JavaScript.valueToCode(block, 'layout_type', Blockly.JavaScript.ORDER_ATOMIC);

  // Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};


/*
// Generator stub:
Blockly.JavaScript['home_screen'] = function(block) {
  var text_header = block.getFieldValue('header');
  var text_subtitletext = block.getFieldValue('subtitleText');
  var dropdown_subtitletextcolordropdown = block.getFieldValue('subtitleTextColorDropdown');
  var text_logourl = block.getFieldValue('logoURL');
  var dropdown_layoutdropdown = block.getFieldValue('layoutDropdown');
  var number_columnsnumber = block.getFieldValue('columnsNumber');

  if (dropdown_layoutdropdown === 'grid') {
    var isLayoutList = false
    var additionalCode = 'var listElements = [ListConfigData]()\n\nlet gridElements =\n[\n'
  } else {
    var isLayoutList = true
    var additionalCode = 'var gridElements = [GridConfigData]()\n\nlet listElements =\n[\n'
  }

  // Assemble JavaScript into code variable.
  var code = 'let homePage = HomePageData(\ncolumnsNumber: ' + number_columnsnumber + ',\nisLayoutList: ' + isLayoutList + ',\nlogoURL: "' + text_logourl +
      '",\nheader: "' + text_header + '",\nheaderColor: Color.white,\nsubtitleText: "' + text_subtitletext + '",\nsubtitleTextColor: Color.' + dropdown_subtitletextcolordropdown + '\n)\n\n' + additionalCode;
  return code;
*/