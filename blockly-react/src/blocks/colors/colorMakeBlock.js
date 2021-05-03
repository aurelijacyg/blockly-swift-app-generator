import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['color_make'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("Hex Code  #");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(195);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['color_make'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);

    // Assemble JavaScript into code variable.
    var code = '...';

    return [code, Blockly.JavaScript.ORDER_NONE];
};