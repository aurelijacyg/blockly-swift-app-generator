import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['component_flip_card'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("FLIP CARD");
        this.appendDummyInput();
        this.appendValueInput("title")
            .setCheck(null)
            .appendField("Title");
        this.appendValueInput("subtitle")
            .setCheck(null)
            .appendField("Subtitle");
        this.appendValueInput("hidden_text")
            .setCheck(null)
            .appendField("Hidden text");
        this.appendValueInput("text_color")
            .setCheck(null)
            .appendField("Text color ?");
        this.setOutput(true, null);
        this.setColour(15);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['component_flip_card'] = function (block) {
    var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC);
    var value_subtitle = Blockly.JavaScript.valueToCode(block, 'subtitle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_hidden_text = Blockly.JavaScript.valueToCode(block, 'hidden_text', Blockly.JavaScript.ORDER_ATOMIC);
    var value_text_color = Blockly.JavaScript.valueToCode(block, 'text_color', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';

    // Assemble JavaScript into code variable.

    var code = `FlipCardModel(
        title: ${value_title},
        textColor: ${value_text_color},
        subtitle: ${value_subtitle},
        hiddenText: ${value_hidden_text}
    )`;

    // Change ORDER_NONE to the correct strength.

    return [code, Blockly.JavaScript.ORDER_NONE];
};