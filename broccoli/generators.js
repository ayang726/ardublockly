
'use strict';

goog.provide('Blockly.Arduino.Broccoli');
goog.require('Blockly.Arduino');


// Blockly.Arduino.addInclude('servo', '#include <Servo.h>');
// Blockly.Arduino.addDeclaration('servo_' + pinKey, 'Servo ' + servoName + ';');
// Blockly.Arduino.addSetup('servo_' + pinKey, setupCode, true);

let bcl_block_count = 0;
let libPath = "./";
const ControlSysLibrary = "ControlSys"

Blockly.Arduino['ai'] = function (block) {
    var value_fieldvalue = Blockly.Arduino.valueToCode(block, 'fieldValue', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_mode = block.getFieldValue('Mode');
    let number_xd_low = block.getFieldValue("xd_low")
    let number_xd_high = block.getFieldValue("xd_high")
    let number_out_low = block.getFieldValue("out_low")
    let number_out_high = block.getFieldValue("out_high")

    const blockId = bcl_block_count++;
    const objectName = "ai_" + blockId

    Blockly.Arduino.addInclude('ControlSystemLibrary', `#include <${ControlSysLibrary}.h>`);

    let declarationCode = "AI " + objectName + " = AI(&" + value_fieldvalue + ");"
    Blockly.Arduino.addDeclaration('bcl_block_' + blockId, declarationCode);

    let setupCode = objectName + ".mode = '" + dropdown_mode + "';\n"
    setupCode += objectName + ".xd_scale_high = " + number_xd_high + ";\n"
    setupCode += objectName + ".xd_scale_low = " + number_xd_low + ";\n"
    setupCode += objectName + ".out_scale_high = " + number_out_high + ";\n"
    setupCode += objectName + ".out_scale_low = " + number_out_low + ";\n"
    Blockly.Arduino.addSetup("bcl_block_" + blockId, setupCode, false)

    var code = objectName + ".loop()";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


// Greater than block generator
Blockly.Arduino['gt'] = function (block) {
    var number_comp_value = block.getFieldValue('comp_value');
    var value_comp = Blockly.Arduino.valueToCode(block, 'comp', Blockly.Arduino.ORDER_ATOMIC);
    var number_sp_value = block.getFieldValue('sp_value');
    var value_sp = Blockly.Arduino.valueToCode(block, 'sp', Blockly.Arduino.ORDER_ATOMIC);
    // TODO: Assemble Arduino into code variable.

    const blockId = bcl_block_count++;
    const objectName = "gt_" + blockId

    Blockly.Arduino.addInclude('ControlSystemLibrary', `#include <${ControlSysLibrary}.h>`);

    let declarationCode = "";
    // if value comp is not hooked up
    let declaringObjCode = "";
    if (value_comp == "") {
        declarationCode += "float compVar_" + blockId + " = " + number_comp_value + "; \n";
        declaringObjCode += "GT " + objectName + " = GT(&compVar_" + blockId + ",";
    } else {
        declaringObjCode += "GT " + objectName + " = GT(&" + value_comp + ",";
    }

    if (value_sp == "") {
        declarationCode += "float spVar_" + blockId + " = " + number_sp_value + ";\n";
        declaringObjCode += " &spVar_" + blockId + ");\n";
    }
    else {
        declaringObjCode += " &" + value_sp + ");\n"
    }

    Blockly.Arduino.addDeclaration('bcl_block_' + blockId, declarationCode + declaringObjCode);

    var code = objectName + ".loop()";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


// Generating DI block code
Blockly.Arduino['di'] = function (block) {
    var value_fieldvalue = Blockly.Arduino.valueToCode(block, 'fieldValue', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_mode = block.getFieldValue('mode');
    // TODO: Assemble Arduino into code variable.

    const blockId = bcl_block_count++;
    const objectName = "di_" + blockId

    Blockly.Arduino.addInclude('ControlSystemLibrary', `#include <${ControlSysLibrary}.h>`);

    let declarationCode = "DI " + objectName + " = DI(&" + value_fieldvalue + ");"
    Blockly.Arduino.addDeclaration('bcl_block_' + blockId, declarationCode);

    let setupCode = objectName + ".mode = '" + dropdown_mode + "';"
    Blockly.Arduino.addSetup("bcl_block_" + blockId, setupCode, false)

    var code = objectName + ".loop()";

    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['do'] = function (block) {
    var value_input = Blockly.Arduino.valueToCode(block, 'input', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_mode = block.getFieldValue('mode');
    // TODO: Assemble Arduino into code variable.
    const blockId = bcl_block_count++;
    const objectName = "do_" + blockId

    Blockly.Arduino.addInclude('ControlSystemLibrary', `#include <${ControlSysLibrary}.h>`);

    let declarationCode = "DO " + objectName + " = DO(&" + value_input + ");"
    Blockly.Arduino.addDeclaration('bcl_block_' + blockId, declarationCode);

    let setupCode = objectName + ".mode = '" + dropdown_mode + "';"
    Blockly.Arduino.addSetup("bcl_block_" + blockId, setupCode, false)

    var code = objectName + ".loop()";

    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// IO block generators

Blockly.Arduino['sr04'] = function (block) {
    var number_echo_pin = block.getFieldValue('echo_pin');
    var number_trig_pin = block.getFieldValue('trig_pin');
    // TODO: Assemble Arduino into code variable.

    const blockId = bcl_block_count++;
    const objectName = "sr04_" + blockId

    Blockly.Arduino.addInclude('ControlSystemLibrary', `#include <${ControlSysLibrary}.h>`);

    let declarationCode = "SR04 " + objectName + " = SR04(" + number_echo_pin + ", " + number_trig_pin + ");"
    Blockly.Arduino.addDeclaration('bcl_block_' + blockId, declarationCode);

    var code = objectName + ".Distance()";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['bde'] = function (block) {
    const value_input = Blockly.Arduino.valueToCode(block, "input", Blockly.Arduino.ORDER_ATOMIC)

    const blockId = bcl_block_count++;
    const objectName = "bde_" + blockId

    Blockly.Arduino.addInclude('ControlSystemLibrary', `#include <${ControlSysLibrary}.h>`);

    let declarationCode = "BDE " + objectName + " = BDE(&" + value_input + ");"
    Blockly.Arduino.addDeclaration('bcl_block_' + blockId, declarationCode);

    let code = objectName + ".loop()";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['pde'] = function (block) {
    const value_input = Blockly.Arduino.valueToCode(block, "input", Blockly.Arduino.ORDER_ATOMIC)

    const blockId = bcl_block_count++;
    const objectName = "pde_" + blockId

    Blockly.Arduino.addInclude('ControlSystemLibrary', `#include <${ControlSysLibrary}.h>`);

    let declarationCode = "PDE " + objectName + " = PDE(&" + value_input + ");"
    Blockly.Arduino.addDeclaration('bcl_block_' + blockId, declarationCode);

    let code = objectName + ".loop()";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['nde'] = function (block) {
    const value_input = Blockly.Arduino.valueToCode(block, "input", Blockly.Arduino.ORDER_ATOMIC)

    const blockId = bcl_block_count++;
    const objectName = "nde_" + blockId

    Blockly.Arduino.addInclude('ControlSystemLibrary', `#include <${ControlSysLibrary}.h>`);

    let declarationCode = "NDE " + objectName + " = NDE(&" + value_input + ");"
    Blockly.Arduino.addDeclaration('bcl_block_' + blockId, declarationCode);

    let code = objectName + ".loop()";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['sr'] = function (block) {
    const value_set = Blockly.Arduino.valueToCode(block, "set", Blockly.Arduino.ORDER_ATOMIC)
    const value_reset = Blockly.Arduino.valueToCode(block, "reset", Blockly.Arduino.ORDER_ATOMIC)

    const blockId = bcl_block_count++;
    const objectName = "sr_" + blockId

    Blockly.Arduino.addInclude('ControlSystemLibrary', `#include <${ControlSysLibrary}.h>`);

    let declarationCode = "SR " + objectName + " = SR(&" + value_set + ", &" + value_reset + ");"
    Blockly.Arduino.addDeclaration('bcl_block_' + blockId, declarationCode);

    let code = objectName + ".loop()";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['rs'] = function (block) {
    const value_set = Blockly.Arduino.valueToCode(block, "set", Blockly.Arduino.ORDER_ATOMIC)
    const value_reset = Blockly.Arduino.valueToCode(block, "resetvalue_reset", Blockly.Arduino.ORDER_ATOMIC)

    const blockId = bcl_block_count++;
    const objectName = "rs_" + blockId

    Blockly.Arduino.addInclude('ControlSystemLibrary', `#include <${ControlSysLibrary}.h>`);

    let declarationCode = `RS ${objectName} = RS(&${value_set}, &${value_reset})`;
    Blockly.Arduino.addDeclaration('bcl_block_' + blockId, declarationCode);

    let code = objectName + '.loop()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino['xfr'] = function (block) {
    const value_in1 = Blockly.Arduino.valueToCode(block, "in1", Blockly.Arduino.ORDER_ATOMIC)
    const value_in2 = Blockly.Arduino.valueToCode(block, "in2", Blockly.Arduino.ORDER_ATOMIC)
    const value_selector = Blockly.Arduino.valueToCode(block, "selector", Blockly.Arduino.ORDER_ATOMIC)
    const fieldIn_selector = block.getFieldValue("selector_input")

    const blockId = bcl_block_count++;
    const objectName = "xfr_" + blockId

    Blockly.Arduino.addInclude('ControlSystemLibrary', `#include <${ControlSysLibrary}.h>`);

    if (value_selector == "") {
        let variableCode = `bool selectorVar_${blockId} = ${fieldIn_selector};`
        Blockly.Arduino.addVariable("bcl_var_" + blockId, variableCode, false)
    }

    let declarationCode = `XFR ${objectName} = XFR(&${value_in1}, &${value_in2}, &${value_selector !== "" ? value_selector : 'selectorVar_' + blockId})`;
    Blockly.Arduino.addDeclaration('bcl_block_' + blockId, declarationCode);

    let code = objectName + '.loop()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_ATOMIC];
}