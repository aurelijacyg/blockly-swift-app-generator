import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['layout_note'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("LAYOUT - note");
        this.appendDummyInput();
        this.appendValueInput("Animated")
            .setCheck("Bool")
            .appendField("Is animated");
        this.appendValueInput("background_color")
            .setCheck("FunctionMakeBackground")
            .appendField("Background color");
        this.appendValueInput("component")
            .setCheck("Component")
            .appendField("Component");
        this.setInputsInline(false);
        this.setColour(255);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Layout');
    }
};

// Generator stub:

Blockly.JavaScript['layout_note'] = function (block) {
    var value_animated = Blockly.JavaScript.valueToCode(block, 'Animated', Blockly.JavaScript.ORDER_ATOMIC);
    var value_background_color = Blockly.JavaScript.valueToCode(block, 'background_color', Blockly.JavaScript.ORDER_ATOMIC);
    var value_component = Blockly.JavaScript.valueToCode(block, 'component', Blockly.JavaScript.ORDER_ATOMIC);

    // Assemble JavaScript into code variable.

    var code = `Layout.note(
        NoteModel(
            component: ${value_component},
            isAnimated: ${value_animated},
            backgroundColor: ${value_background_color}
        )
    )`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};