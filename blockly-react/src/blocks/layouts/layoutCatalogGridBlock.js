import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['layout_catalog_grid'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("LAYOUT - catalog grid");
        this.appendValueInput("title")
            .setCheck(null)
            .appendField("Title ?");
        this.appendValueInput("title_color")
            .setCheck(null)
            .appendField("Title color ?");
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

Blockly.JavaScript['layout_catalog_grid'] = function (block) {
    var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC);
    var value_title_color = Blockly.JavaScript.valueToCode(block, 'title_color', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_elements = Blockly.JavaScript.statementToCode(block, 'elements');

    // Assemble JavaScript into code variable.

    var code = '...';

    // Change ORDER_NONE to the correct strength.

    return [code, Blockly.JavaScript.ORDER_NONE];
};