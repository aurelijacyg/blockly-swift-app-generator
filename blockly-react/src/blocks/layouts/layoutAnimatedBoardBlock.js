import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['layout_animated_board'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("LAYOUT - animated board");
        this.appendValueInput("background_color")
            .setCheck("FunctionMakeBackground")
            .appendField("Background color");
        this.appendDummyInput();
        this.appendStatementInput("elements")
            .setCheck("AnimatedBoardElement")
            .appendField("Elements");
        this.setInputsInline(false);
        this.setColour(255);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Layout');
    }
};

// Generator stub:

Blockly.JavaScript['layout_animated_board'] = function (block) {
    var value_background_color = Blockly.JavaScript.valueToCode(block, 'background_color', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_elements = Blockly.JavaScript.statementToCode(block, 'elements');

    // Assemble JavaScript into code variable.

    var code = `Layout.animatedBoard(
        AnimatedBoardModel(
            backgroundColor: ${value_background_color},
            items: [
                ${statements_elements}
            ]
        )
    )`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};