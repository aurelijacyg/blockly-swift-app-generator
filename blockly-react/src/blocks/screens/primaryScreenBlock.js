import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['screen_primary'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("https://t4.ftcdn.net/jpg/01/87/04/55/360_F_187045571_1GPYu7GFoJzKuljKRaeowV20vskm3Hzv.jpg", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("PRIMARY SCREEN:");
        this.appendDummyInput();
        this.appendValueInput("photo_url")
            .setCheck("Url")
            .appendField("Photo URL ?");
        this.appendValueInput("is_tabbar_hidden")
            .setCheck("Bool")
            .appendField("Is tabbar hidden ?");
        this.appendValueInput("layout_type")
            .setCheck("Layout")
            .appendField("Layout Type");
        this.setColour(210);
        this.setTooltip("Tab");
        this.setHelpUrl("");
        this.setOutput(true, 'Screen');
    }
};

// Generator stub:

Blockly.JavaScript['screen_primary'] = function (block) {
    var value_photo_url = Blockly.JavaScript.valueToCode(block, 'photo_url', Blockly.JavaScript.ORDER_ATOMIC) || 'nil';
    var value_is_tabbar_hidden = Blockly.JavaScript.valueToCode(block, 'is_tabbar_hidden', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
    var value_layout_type = Blockly.JavaScript.valueToCode(block, 'layout_type', Blockly.JavaScript.ORDER_ATOMIC);

    // Assemble JavaScript into code variable.

    var code = `Screen.primary(
        PrimaryViewModel(
            photoURL: ${value_photo_url},
            isTabBarHidden: ${value_is_tabbar_hidden},
            layout: ${value_layout_type}
        )
    )`;
    
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};