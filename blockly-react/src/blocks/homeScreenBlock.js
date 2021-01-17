import * as Blockly from 'blockly/core';

// Block Definition:
Blockly.Blocks['home_screen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://t4.ftcdn.net/jpg/01/87/04/55/360_F_187045571_1GPYu7GFoJzKuljKRaeowV20vskm3Hzv.jpg", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("HOME SCREEN:");
    this.appendDummyInput()
        .appendField("Header")
        .appendField(new Blockly.FieldTextInput("My app"), "header");
    this.appendDummyInput()
        .appendField("Subtitle")
        .appendField(new Blockly.FieldTextInput("A sentence about your app"), "subtitleText")
        .appendField("Subtitle text color")
        .appendField(new Blockly.FieldDropdown([["black","black"], ["gray","gray"], ["blue","blue"], ["green","green"], ["orange","orange"], ["pink","pink"], ["purple","purple"], ["red","red"], ["yellow","yellow"]]), "subtitleTextColorDropdown");
    this.appendDummyInput()
        .appendField("Header image URL ")
        .appendField(new Blockly.FieldTextInput("https://image.com"), "logoURL");
    this.appendDummyInput()
        .appendField("Layout")
        .appendField(new Blockly.FieldDropdown([["grid","grid"], ["list","list"]]), "layoutDropdown")
        .appendField("If grid, columns number")
        .appendField(new Blockly.FieldNumber(2, 1, 5), "columnsNumber");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("Start with your home page");
 this.setHelpUrl("");
  }
};

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
};