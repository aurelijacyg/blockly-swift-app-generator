import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['screen_card_gallery'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("CARD GALLERY SCREEN");
    this.appendDummyInput();
    this.appendValueInput("navigation_bar_text")
      .setCheck(null)
      .appendField("Screen title");
    this.appendValueInput("category_color")
      .setCheck(null)
      .appendField("Category color");
    this.appendValueInput("heading_color")
      .setCheck(null)
      .appendField("Heading color");
    this.appendValueInput("label_color")
      .setCheck(null)
      .appendField("Label color");
    this.appendValueInput("is_tabbar_hidden")
      .setCheck(null)
      .appendField("Is tabbar hidden");
    this.appendDummyInput();
    this.appendStatementInput("cards")
      .setCheck(null)
      .appendField("Cards");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Generator stub:

Blockly.JavaScript['screen_card_gallery'] = function (block) {
  var value_navigation_bar_text = Blockly.JavaScript.valueToCode(block, 'navigation_bar_text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_category_color = Blockly.JavaScript.valueToCode(block, 'category_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_heading_color = Blockly.JavaScript.valueToCode(block, 'heading_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_label_color = Blockly.JavaScript.valueToCode(block, 'label_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_is_tabbar_hidden = Blockly.JavaScript.valueToCode(block, 'is_tabbar_hidden', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_cards = Blockly.JavaScript.statementToCode(block, 'cards');

  // Assemble JavaScript into code variable.

  var code = '...';

  // Change ORDER_NONE to the correct strength.
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};

/*

  var code = `Routing.cards(
                CardGalleryView(
                  categoryColor: ${value_category_color},
                  headingColor: ${value_heading_color},
                  labelColor: ${value_label_color},
                  navigationBarTextTitle: ${value_gallery_name},
                  cards: [
                    ${statements_cards}
                  ]
                )
              )`;

*/