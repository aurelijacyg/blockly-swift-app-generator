import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['screen_simple_list'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("SIMPLE LIST SCREEN");
        this.appendDummyInput();
        this.appendValueInput("items_color")
            .setCheck("Color")
            .appendField("Items color ?");
        this.appendValueInput("on_swipe_delete_items")
            .setCheck("Bool")
            .appendField("On swipe delete items");
        this.appendValueInput("is_tabbar_hidden")
            .setCheck("Bool")
            .appendField("Is tabbar hidden");
        this.appendValueInput("input_field")
            .setCheck("InputField")
            .appendField("Input field ?");
        this.setInputsInline(false);
        this.setOutput(true, 'Screen');
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['screen_simple_list'] = function (block) {
    var value_items_color = Blockly.JavaScript.valueToCode(block, 'items_color', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
    var value_on_swipe_delete_items = Blockly.JavaScript.valueToCode(block, 'on_swipe_delete_items', Blockly.JavaScript.ORDER_ATOMIC) || 'true';
    var value_is_tabbar_hidden = Blockly.JavaScript.valueToCode(block, 'is_tabbar_hidden', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
    var value_input_field = Blockly.JavaScript.valueToCode(block, 'input_field', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';

    // Assemble JavaScript into code variable.

    var code = `Screen.simpleList(
        SimpleListModel(
            itemsColor: ${value_items_color},
            onSwipeDeleteItems: ${value_on_swipe_delete_items},
            isTabBarHidden: ${value_is_tabbar_hidden},
            inputField: ${value_input_field},
        )
      )`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
