import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['text_url'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("URL");
        this.appendDummyInput()
            .appendField("\"")
            .appendField(new Blockly.FieldTextInput(""), "url")
            .appendField("\"");
        this.setOutput(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['text_url'] = function (block) {
    var text_url = block.getFieldValue('url');

    // Assemble JavaScript into code variable.

    var code = '...';

    // Change ORDER_NONE to the correct strength.

    return [code, Blockly.JavaScript.ORDER_NONE];
};