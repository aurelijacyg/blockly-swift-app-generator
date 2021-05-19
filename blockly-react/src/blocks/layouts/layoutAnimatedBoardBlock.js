import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['layout_animated_board'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("LAYOUT - animated board");
        this.appendValueInput("background_color")
            .setCheck(null)
            .appendField("Background color");
        this.appendDummyInput();
        this.appendStatementInput("elements")
            .setCheck(null)
            .appendField("Elements");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(255);
        this.setTooltip("");
        this.setHelpUrl("");
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
                ${statements_elements},
            ]
        )
    )`;

    // Change ORDER_NONE to the correct strength.

    return [code, Blockly.JavaScript.ORDER_NONE];
};