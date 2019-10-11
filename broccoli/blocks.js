Blockly.Blocks['ai'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("AI");
        this.appendDummyInput()
            .appendField("fieldValue");
        this.appendValueInput("fieldValue")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("mode");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["Manual", "Man"], ["Auto", "Auto"]]), "Mode");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(15);
        this.setTooltip("AI Block");
        this.setHelpUrl("Used to process analog input signals");
    }
};

Blockly.Blocks['di'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("DI");
        this.appendValueInput("fieldValue")
            .setCheck("Number")
            .appendField("fieldValue");
        this.appendDummyInput()
            .appendField("mode")
            .appendField(new Blockly.FieldDropdown([["Manual", "Man"], ["Auto", "Auto"]]), "mode");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setColour(15);
        this.setTooltip("DI Block");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['gt'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("GT");
        this.appendDummyInput()
            .appendField("comp");
        this.appendValueInput("comp")
            .setCheck(null)
            .appendField(new Blockly.FieldNumber(0), "comp_value");
        this.appendDummyInput()
            .appendField("sp");
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0), "sp_value");
        this.setInputsInline(true);
        this.setOutput(true, ["Number", "Boolean"]);
        this.setColour(15);
        this.setTooltip("GT block");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['do'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("DO");
        this.appendValueInput("input")
            .setCheck(null)
            .appendField("in_d");
        this.appendDummyInput()
            .appendField("mode")
            .appendField(new Blockly.FieldDropdown([["Manual", "Man"], ["Auto", "Auto"]]), "mode");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(15);
        this.setTooltip("DO block");
        this.setHelpUrl("");
    }
};