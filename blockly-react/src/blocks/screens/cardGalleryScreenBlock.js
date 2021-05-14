import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['card_gallery_screen'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("CARD GALLERY SCREEN");
    this.appendDummyInput();
    this.appendValueInput("gallery_name")
      .setCheck(null)
      .appendField("Gallery name");
    this.appendValueInput("screen_title")
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

Blockly.JavaScript['card_gallery_screen'] = function (block) {
  var value_gallery_name = Blockly.JavaScript.valueToCode(block, 'gallery_name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_screen_title = Blockly.JavaScript.valueToCode(block, 'screen_title', Blockly.JavaScript.ORDER_ATOMIC);
  var value_category_color = Blockly.JavaScript.valueToCode(block, 'category_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_heading_color = Blockly.JavaScript.valueToCode(block, 'heading_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_label_color = Blockly.JavaScript.valueToCode(block, 'label_color', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_cards = Blockly.JavaScript.statementToCode(block, 'cards');

  // Assemble JavaScript into code variable.
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

  return [code, Blockly.JavaScript.ORDER_NONE];
};