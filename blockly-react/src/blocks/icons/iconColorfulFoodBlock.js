import * as Blockly from 'blockly/core';

// Block Definition:

Blockly.Blocks['icon_food_colorful'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("ICON - food")
            .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(
                [
                    ["coffee cup", "icon-coffee-cup"],
                    ["cupcake", "icon-cupcake"],
                    ["eat", "icon-eat"],
                    ["hamburger", "icon-hamburger"],
                    ["hamburger and fries", "icon-mc"],
                    ["pizza", "icon-pizza"],
                    ["watermelon", "icon-watermelon"]
                ]
            ), "icon");
        this.setOutput(true, null);
        this.setColour(165);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Generator stub:

Blockly.JavaScript['icon_food_colorful'] = function (block) {
    var dropdown_icon = block.getFieldValue('icon');

    // Assemble JavaScript into code variable.

    var code = '...';

    // Change ORDER_NONE to the correct strength.

    return [code, Blockly.JavaScript.ORDER_NONE];
};