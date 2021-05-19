import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_make'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Hex Code  #")
            .appendField(new Blockly.FieldTextInput(""), "code");
        this.setInputsInline(true);
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Color');
    }
};

// Generator stub:

Blockly.JavaScript['color_make'] = function (block) {
    var text_code = block.getFieldValue('code');

    // TODO: Assemble JavaScript into code variable.

    var code = `Color(rgb: 0x${text_code})`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};