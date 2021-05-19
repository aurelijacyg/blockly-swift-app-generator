import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['tab_block'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("TAB");
        this.appendDummyInput();
        this.appendValueInput("label")
            .setCheck(null)
            .appendField("Label ?");
        this.appendValueInput("system_image")
            .setCheck(null)
            .appendField("System image ?");
        this.appendValueInput("primary_screen")
            .setCheck(null)
            .appendField("Screen");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("Check system images in URL");
        this.setHelpUrl("https://developer.apple.com/design/human-interface-guidelines/sf-symbols/overview/");
    }
};

// Generator stub:

Blockly.JavaScript['tab_block'] = function (block) {
    var value_label = Blockly.JavaScript.valueToCode(block, 'label', Blockly.JavaScript.ORDER_ATOMIC);
    var value_system_image = Blockly.JavaScript.valueToCode(block, 'system_image', Blockly.JavaScript.ORDER_ATOMIC);
    var value_primary_screen = Blockly.JavaScript.valueToCode(block, 'primary_screen', Blockly.JavaScript.ORDER_ATOMIC);

    // Assemble JavaScript into code variable.

    var code = '...;\n';

    return code;
};