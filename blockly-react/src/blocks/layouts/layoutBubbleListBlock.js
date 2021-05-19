import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['layout_bubble_list'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("LAYOUT - bubble list");
        this.appendValueInput("is_items_big")
            .setCheck(null)
            .appendField("Is elements big");
        this.appendDummyInput();
        this.appendStatementInput("items")
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