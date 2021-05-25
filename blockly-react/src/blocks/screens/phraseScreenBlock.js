import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['screen_phrase'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("PHRASE SCREEN");
        this.appendDummyInput();
        this.appendValueInput("title")
            .setCheck("String")
            .appendField("Title");
        this.appendValueInput("label")
            .setCheck("String")
            .appendField("Label");
        this.appendValueInput("text_color")
            .setCheck("Color")
            .appendField("Text color");
        this.appendValueInput("typeface")
            .setCheck("String")
            .appendField("Typeface");
        this.appendValueInput("is_tabbar_hidden")
            .setCheck("Bool")
            .appendField("Is tabbar hidden ?");
        this.appendValueInput("background_color")
            .setCheck("FunctionMakeBackground")
            .appendField("Background color");
        this.setInputsInline(false);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setOutput(true, 'Screen');
    }
};

// Generator stub:

Blockly.JavaScript['screen_phrase'] = function (block) {
    var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC) || '';
    var value_label = Blockly.JavaScript.valueToCode(block, 'label', Blockly.JavaScript.ORDER_ATOMIC) || '';
    var value_text_color = Blockly.JavaScript.valueToCode(block, 'text_color', Blockly.JavaScript.ORDER_ATOMIC);
    var value_typeface = Blockly.JavaScript.valueToCode(block, 'typeface', Blockly.JavaScript.ORDER_ATOMIC) || 'arial';
    var value_is_tabbar_hidden = Blockly.JavaScript.valueToCode(block, 'is_tabbar_hidden', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
    var value_background_color = Blockly.JavaScript.valueToCode(block, 'background_color', Blockly.JavaScript.ORDER_ATOMIC);

    // Assemble JavaScript into code variable.

    var code = `Screen.phrase(
        PhraseModel(
            title: ${value_title},
            label: ${value_label},
            textColor: ${value_text_color},
            typeface: ${value_typeface},
            backgroundColor: ${value_background_color},
            isTabBarHidden: ${value_is_tabbar_hidden}
        )
    )`;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};