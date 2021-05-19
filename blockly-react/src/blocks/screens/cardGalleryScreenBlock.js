import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['screen_card_gallery'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("CARD GALLERY SCREEN");
    this.appendDummyInput();
    this.appendValueInput("navigation_bar_text")
      .setCheck("String")
      .appendField("Screen title");
    this.appendValueInput("category_color")
      .setCheck("Color")
      .appendField("Category color");
    this.appendValueInput("heading_color")
      .setCheck("Color")
      .appendField("Heading color");
    this.appendValueInput("label_color")
      .setCheck("Color")
      .appendField("Label color");
    this.appendValueInput("is_tabbar_hidden")
      .setCheck("Bool")
      .appendField("Is tabbar hidden ?");
    this.appendDummyInput();
    this.appendStatementInput("cards")
      .setCheck("Component")
      .appendField("Cards");
    this.setInputsInline(false);
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setOutput(true, 'Screen');
  }
};

// Generator stub:

Blockly.JavaScript['screen_card_gallery'] = function (block) {
  var value_navigation_bar_text = Blockly.JavaScript.valueToCode(block, 'navigation_bar_text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_category_color = Blockly.JavaScript.valueToCode(block, 'category_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_heading_color = Blockly.JavaScript.valueToCode(block, 'heading_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_label_color = Blockly.JavaScript.valueToCode(block, 'label_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_is_tabbar_hidden = Blockly.JavaScript.valueToCode(block, 'is_tabbar_hidden', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
  var statements_cards = Blockly.JavaScript.statementToCode(block, 'cards');

  // Assemble JavaScript into code variable.

  var code = `Screen.cards(
    CardGalleryModel(
      categoryColor: ${value_category_color},
      headingColor: ${value_heading_color},
      labelColor: ${value_label_color},
      navigationBarTitle: ${value_navigation_bar_text},
      isTabBarHidden: ${value_is_tabbar_hidden},
      cards: [
        ${statements_cards}
      ]
    )
  )`;
  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};