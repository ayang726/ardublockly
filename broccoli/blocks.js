

goog.provide('Blockly.Blocks.bcl_func');
goog.provide('Blockly.Blocks.bcl_io');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.bcl_func.HUE = 15;
Blockly.Blocks.bcl_io.HUE = 120;

Blockly.Blocks['ai'] = {
    outputType: Blockly.Types.DECIMAL,
    init: function () {
        this.appendDummyInput()
            .appendField("AI");
        this.appendDummyInput()
            .appendField("fieldValue");
        this.appendValueInput("fieldValue")
            .setCheck("Decimal");
        this.appendDummyInput()
            .appendField("mode");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["Manual", "M"], ["Auto", "A"]]), "Mode");
        this.appendDummyInput()
            .appendField("xd_scale (low-high)")
            .appendField(new Blockly.FieldNumber(0), "xd_low")
            .appendField(new Blockly.FieldNumber(0), "xd_high");
        this.appendDummyInput()
            .appendField("out_scale (low-high)")
            .appendField(new Blockly.FieldNumber(0), "out_low")
            .appendField(new Blockly.FieldNumber(0), "out_high");
        this.setInputsInline(true);
        this.setOutput(true, this.outputType.output);
        this.setColour(15);
        this.setTooltip("AI Block");
        this.setHelpUrl("Used to process analog input signals");
    },
    getBlockType: function () {
        return this.outputType
    }
};

Blockly.Blocks['di'] = {
    outputType: Blockly.Types.BOOLEAN,
    init: function () {
        this.appendDummyInput()
            .appendField("DI");
        this.appendValueInput("fieldValue")
            .setCheck("Boolean")
            .appendField("fieldValue");
        this.appendDummyInput()
            .appendField("mode")
            .appendField(new Blockly.FieldDropdown([["Manual", "M"], ["Auto", "A"]]), "mode");
        this.setInputsInline(true);
        this.setOutput(true, this.outputType.output);
        this.setColour(15);
        this.setTooltip("DI Block");
        this.setHelpUrl("");
    },
    getBlockType: function () {
        return this.outputType
    }

};

Blockly.Blocks['gt'] = {
    outputType: Blockly.Types.BOOLEAN,
    init: function () {
        this.appendDummyInput()
            .appendField("GT");
        this.appendDummyInput()
            .appendField("comp");
        this.appendValueInput("comp")
            .setCheck("Decimal")
            .appendField(new Blockly.FieldNumber(0), "comp_value");
        this.appendDummyInput()
            .appendField("sp");
        this.appendValueInput("sp")
            .setCheck("Decimal")
            .appendField(new Blockly.FieldNumber(0), "sp_value");
        this.setInputsInline(true);
        this.setOutput(true, this.outputType.output);
        this.setColour(15);
        this.setTooltip("GT block");
        this.setHelpUrl("");
    },
    getBlockType: function () {
        return this.outputType
    }
};

Blockly.Blocks['do'] = {
    outputType: Blockly.Types.BOOLEAN   ,
    init: function () {
        this.appendDummyInput()
            .appendField("DO");
        this.appendValueInput("input")
            .setCheck("Boolean")
            .appendField("in_d");
        this.appendDummyInput()
            .appendField("mode")
            .appendField(new Blockly.FieldDropdown([["Manual", "M"], ["Auto", "A"], ["Cascade", "C"]]), "mode");
        this.setInputsInline(true);
        this.setOutput(true, this.outputType.output);
        this.setColour(15);
        this.setTooltip("DO block");
        this.setHelpUrl("");
    },
    getBlockType: function () {
        return this.outputType
    }
};


// IO blocks
Blockly.Blocks['sr04'] = {
    outputType: Blockly.Types.NUMBER,
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
        this.setOutput(true, this.outputType.output);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    getBlockType: function () {
        return this.outputType
    }
};