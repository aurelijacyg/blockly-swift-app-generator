import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['list_element'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("LIST ELEMENT");
    this.appendDummyInput();
    this.appendValueInput("text")
      .setCheck(null)
      .appendField("Text");
    this.appendValueInput("text_color")
      .setCheck(null)
      .appendField("Text color");
    this.appendValueInput("background_color")
      .setCheck(null)
      .appendField("Backround color");
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nfKUveELIB27pwJdvD3tYUWAIFOX_GSv3w&usqp=CAU", 15, 15, { alt: "*", flipRtl: "FALSE" }))
      .appendField("Icon")
      .appendField(new Blockly.FieldDropdown([["none", "nil"], ["account", "account-icon"], ["airplane", "airplane-icon"], ["article", "article-icon"], ["blog", "blog-icon"], ["book", "book-icon"], ["gallery", "galerry-icon"], ["idea", "idea-icon"], ["info", "info-icon"], ["learning", "learning-icon"], ["location", "location-icon"], ["note", "note-icon"], ["travel", "travel-icon"]]), "icon");
    this.appendDummyInput();
    this.appendValueInput("route_to")
      .setCheck(null)
      .appendField("On Click");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Layout element (list)");
    this.setHelpUrl("");
  }
};

// Generator stub:

Blockly.JavaScript['list_element'] = function (block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text_color = Blockly.JavaScript.valueToCode(block, 'text_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_background_color = Blockly.JavaScript.valueToCode(block, 'background_color', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_icon = block.getFieldValue('icon');
  var value_route_to = Blockly.JavaScript.valueToCode(block, 'route_to', Blockly.JavaScript.ORDER_ATOMIC);

  // Assemble JavaScript into code variable.
  var code = '...;\n';

  return code;
};

/*

// Generator stub:
Blockly.JavaScript['list_element'] = function(block) {
  var text_text = block.getFieldValue('text');
  var dropdown_textcolor = block.getFieldValue('textColor');
  var dropdown_icon = block.getFieldValue('icon');
  var dropdown_backgroundcolor = block.getFieldValue('backgroundColor');
  var value_destination = Blockly.JavaScript.valueToCode(block, 'Destination', Blockly.JavaScript.ORDER_ATOMIC);

  var random_id = Math.floor(Math.random() * 1000);

  if (value_destination.includes('ContentDetail')) {
    var additionalCode = 'Destination.content'
  } else {
    var additionalCode = 'Destination.photos'
  }

  // Assemble JavaScript into code variable.
  var code = 'ListConfigData(\nid: ' + random_id + ',\ntext: "' + text_text + '",\nbackgroundColor: Color.' + dropdown_backgroundcolor
    + ',\ntextColor: Color.' + dropdown_textcolor + ',\nicon: "' + dropdown_icon + '",\ndestination: ' + additionalCode + value_destination + '\n),\n\n';

  return code;


*/