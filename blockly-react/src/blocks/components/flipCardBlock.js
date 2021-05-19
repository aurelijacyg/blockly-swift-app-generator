import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['component_flip_card'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("FLIP CARD");
        this.appendDummyInput();
        this.appendValueInput("title")
            .setCheck("String")
            .appendField("Title");
        this.appendValueInput("subtitle")
            .setCheck("String")
            .appendField("Subtitle");
        this.appendValueInput("hidden_text")
            .setCheck("String")
            .appendField("Hidden text");
        this.appendValueInput("text_color")
            .setCheck("Color")
            .appendField("Text color ?");
        this.setColour(15);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Component');
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

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};