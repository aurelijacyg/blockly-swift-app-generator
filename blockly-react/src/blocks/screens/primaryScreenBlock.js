import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['screen_primary'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("https://t4.ftcdn.net/jpg/01/87/04/55/360_F_187045571_1GPYu7GFoJzKuljKRaeowV20vskm3Hzv.jpg", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("PRIMARY SCREEN:");
        this.appendDummyInput();
        this.appendValueInput("photo_url")
            .setCheck(null)
            .appendField("Photo URL ?");
        this.appendValueInput("layout_type")
            .setCheck(null)
            .appendField("Layout Type");
        this.setOutput(true, null);
        this.setColour(210);
        this.setTooltip("Tab");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['screen_primary'] = function (block) {
    var value_photo_url = Blockly.JavaScript.valueToCode(block, 'photo_url', Blockly.JavaScript.ORDER_ATOMIC);
    var value_layout_type = Blockly.JavaScript.valueToCode(block, 'layout_type', Blockly.JavaScript.ORDER_ATOMIC);

    // Assemble JavaScript into code variable.

    var code = '...';

    // Change ORDER_NONE to the correct strength.
    
    return [code, Blockly.JavaScript.ORDER_NONE];
};