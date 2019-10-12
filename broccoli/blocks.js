

goog.provide('Blockly.Blocks.bcl_func');
goog.provide('Blockly.Blocks.bcl_io');
goog.provide('Blockly.Blocks.bcl_device');
goog.provide('Blockly.Blocks.bcl_logical');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.bcl_logical.HUE = 15;
Blockly.Blocks.bcl_device.HUE = 120;
Blockly.Blocks.bcl_io.HUE = 150;
Blockly.Blocks.bcl_func.HUE = 200;


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
        this.setColour(Blockly.Blocks.bcl_io.HUE);
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
        this.setColour(Blockly.Blocks.bcl_io.HUE);
        this.setTooltip("DI Block");
        this.setHelpUrl("");
    },
    getBlockType: function () {
        return this.outputType
    }

};

// gt is deprecated, use the builtin comp functions
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
    outputType: Blockly.Types.BOOLEAN,
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
        this.setColour(Blockly.Blocks.bcl_io.HUE);
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
        this.setColour(Blockly.Blocks.bcl_device.HUE);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    getBlockType: function () {
        return this.outputType
    }
};
// BDE, PDE and NDE blocks
Blockly.Blocks['bde'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("BDE");
        this.appendValueInput("input")
            .setCheck(null)
            .appendField("in_d");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean")
        this.setColour(Blockly.Blocks.bcl_logical.HUE);
        this.setTooltip("Bidirectional Edge Trigger");
        this.setHelpUrl("")
    }, getBlockType: function () {
        return Blockly.Types.BOOLEAN
    }
};
Blockly.Blocks['pde'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("PDE");
        this.appendValueInput("input")
            .setCheck(null)
            .appendField("in_d");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean")
        this.setColour(Blockly.Blocks.bcl_logical.HUE);
        this.setTooltip("Positive Edge Trigger");
    }, getBlockType: function () {
        return Blockly.Types.BOOLEAN
    }
};
Blockly.Blocks['nde'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("NDE");
        this.appendValueInput("input")
            .setCheck(null)
            .appendField("in_d");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean")
        this.setColour(Blockly.Blocks.bcl_logical.HUE);
        this.setTooltip("Negative Edge Trigger");
    }, getBlockType: function () {
        return Blockly.Types.BOOLEAN
    }
};
// Set reset
Blockly.Blocks["sr"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("SR");
        this.appendValueInput("set")
            .setCheck(null)
            .appendField("set")
        this.appendValueInput("reset")
            .setCheck(null)
            .appendField("reset")
        this.setInputsInline(true);
        this.setOutput(true, "Boolean")
        this.setColour(Blockly.Blocks.bcl_logical.HUE)
        this.setTooltip("(Predominant) Set, Reset")
    }, getBlockType: function () {
        return Blockly.Types.BOOLEAN
    }
}
Blockly.Blocks["rs"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("RS");
        this.appendValueInput("reset")
            .setCheck(null)
            .appendField("reset")
        this.appendValueInput("set")
            .setCheck(null)
            .appendField("set")
        this.setInputsInline(true);
        this.setOutput(true, "Boolean")
        this.setColour(Blockly.Blocks.bcl_logical.HUE)
        this.setTooltip("(Predominant) Reset, Set")
    }, getBlockType: function () {
        return Blockly.Types.BOOLEAN
    }
}
// Transfer
Blockly.Blocks["xfr"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("XFR")
        this.appendValueInput("in1")
            .setCheck(["Decimal", "Number"])
            .appendField("in1")
        this.appendValueInput("in2")
            .setCheck(["Decimal", "Number"])
            .appendField("in2")
        this.appendValueInput("selector")
            .setCheck(["Number", "Boolean"])
            .appendField("selector")
            .appendField(new Blockly.FieldNumber(0), "selector_input")
        this.setInputsInline(true)
        this.setOutput(true, "Decimal")
        this.setColour(Blockly.Blocks.bcl_logical.HUE)
        this.setTooltip("Input Transfer")
    },
    getBlockType: function () {
        return Blockly.Types.DECIMAL
    }
}