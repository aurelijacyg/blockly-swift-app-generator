import * as Blockly from 'blockly/core';

// Block Definition:
Blockly.Blocks['list_element'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LIST ELEMENT");
    this.appendDummyInput()
        .appendField("Text")
        .appendField(new Blockly.FieldTextInput("Element text"), "text")
        .appendField("Text color")
        .appendField(new Blockly.FieldDropdown([["black","black"], ["white","white"], ["gray","gray"], ["blue","blue"], ["green","green"], ["orange","orange"], ["pink","pink"], ["purple","purple"], ["red","red"], ["yellow","yellow"]]), "textColor");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nfKUveELIB27pwJdvD3tYUWAIFOX_GSv3w&usqp=CAU", 15, 15, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Icon")
        .appendField(new Blockly.FieldDropdown([["travel","travel-icon"], ["account","account-icon"], ["airplane","airplane-icon"], ["article","article-icon"], ["blog","blog-icon"], ["book","book-icon"], ["gallery","galerry-icon"], ["idea","idea-icon"], ["info","info-icon"], ["learning","learning-icon"], ["location","location-icon"], ["note","note-icon"], ["none","nil"]]), "icon");
    this.appendDummyInput()
        .appendField("Backround color")
        .appendField(new Blockly.FieldDropdown([["black","black"], ["white","white"], ["gray","gray"], ["blue","blue"], ["green","green"], ["orange","orange"], ["pink","pink"], ["purple","purple"], ["red","red"], ["yellow","yellow"]]), "backgroundColor");
    this.appendDummyInput();
    this.appendValueInput("Destination")
        .setCheck(null)
        .appendField("On tap open");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("Layout element");
 this.setHelpUrl("");
  }
};

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
  var code = 'ListConfigData(\nid: ' + random_id + ',\ntext: ' + "'" + text_text + "'" + ',\nbackgroundColor: Color.' + dropdown_backgroundcolor 
    + ',\ntextColor: Color.' + dropdown_textcolor + ',\nicon: ' + "'" + dropdown_icon + "'" + ',\ndestination: ' + additionalCode + value_destination + '\n),\n\n';

  return code;
};