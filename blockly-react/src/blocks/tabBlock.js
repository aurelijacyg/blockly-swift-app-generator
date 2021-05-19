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
        this.appendValueInput("screen")
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
    var screen = Blockly.JavaScript.valueToCode(block, 'screen', Blockly.JavaScript.ORDER_ATOMIC);

    // Assemble JavaScript into code variable.

    var code = `Tab(
        label: ${value_label},
        systemImage: ${value_system_image},
        screen: ${screen}
    )`;

    return code;
};