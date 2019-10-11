Blockly.Blocks.bcl_func.HUE = 15;
Blockly.Blocks.bcl_io.HUE = 120;

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
            .appendField(new Blockly.FieldDropdown([["Manual", "Man"], ["Auto", "Auto"], ["Cascade", "Cas"]]), "Mode");
        this.appendDummyInput()
            .appendField("xd_scale (low-high)")
            .appendField(new Blockly.FieldNumber(0), "xd_low")
            .appendField(new Blockly.FieldNumber(0), "xd_high");
        this.appendDummyInput()
            .appendField("out_scale (low-high)")
            .appendField(new Blockly.FieldNumber(0), "out_low")
            .appendField(new Blockly.FieldNumber(0), "out_high");
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


// IO blocks
Blockly.Blocks['sr04'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("SR04");
        this.appendDummyInput()
            .appendField("ECHO_PIN");
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0, 0, 32), "echo_pin");
        this.appendDummyInput()
            .appendField("TRIG_PIN");
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0, 0, 32), "trig_pin");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};