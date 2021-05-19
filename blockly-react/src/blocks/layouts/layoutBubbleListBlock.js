import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['layout_bubble_list'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("LAYOUT - bubble list");
        this.appendValueInput("is_items_big")
            .setCheck("Bool")
            .appendField("Is elements big");
        this.appendDummyInput();
        this.appendStatementInput("items")
            .setCheck("BubbleListElement")
            .appendField("Elements");
        this.setInputsInline(false);
        this.setColour(255);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Layout');
    }
};

// Generator stub:

Blockly.JavaScript['layout_bubble_list'] = function (block) {
    var value_is_items_big = Blockly.JavaScript.valueToCode(block, 'is_items_big', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_items = Blockly.JavaScript.statementToCode(block, 'items', Blockly.JavaScript.ORDER_COMMA);

    // Assemble JavaScript into code variable.

    var code = `Layout.bubbleList(
        BubbleListModel(
            isItemsBig: ${value_is_items_big},
            items: [
                ${statements_items}
            ]
        )
    )`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};