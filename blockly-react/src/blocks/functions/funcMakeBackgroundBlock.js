import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['func_make_background'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("MAKE BACKGROUND");
        this.appendDummyInput();
        this.appendValueInput("color")
            .setCheck(null)
            .appendField("Color ?");
        this.appendValueInput("gradient_color")
            .setCheck(null)
            .appendField("Gradient color ?");
        this.appendValueInput("photo_url")
            .setCheck(null)
            .appendField("Photo URL ?");
        this.setOutput(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['func_make_background'] = function (block) {
    var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
    var value_gradient_color = Blockly.JavaScript.valueToCode(block, 'gradient_color', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
    var value_photo_url = Blockly.JavaScript.valueToCode(block, 'photo_url', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';

    // Assemble JavaScript into code variable.

    var code = `BackgroundModel(
        color: ${value_color},
        gradientColor: ${value_gradient_color},
        photoURL: ${value_photo_url}
    )`;

    // Change ORDER_NONE to the correct strength.

    return [code, Blockly.JavaScript.ORDER_NONE];
};