
'use strict';

goog.provide('Blockly.Arduino.Broccoli');
goog.require('Blockly.Arduino');


// Blockly.Arduino.addInclude('servo', '#include <Servo.h>');
// Blockly.Arduino.addDeclaration('servo_' + pinKey, 'Servo ' + servoName + ';');
// Blockly.Arduino.addSetup('servo_' + pinKey, setupCode, true);

let bcl_block_count = 0;

Blockly.Arduino['ai'] = function (block) {
    var value_fieldvalue = Blockly.Arduino.valueToCode(block, 'fieldValue', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_mode = block.getFieldValue('Mode');
    let number_xd_low = block.getFieldValue("xd_low")
    let number_xd_high = block.getFieldValue("xd_high")
    let number_out_low = block.getFieldValue("out_low")
    let number_out_high = block.getFieldValue("out_high")

    const blockId = bcl_block_count++;
    const objectName = "ai_" + blockId
    let declarationCode = "AI " + objectName + " = AI(&" + value_fieldvalue + ");"
    Blockly.Arduino.addDeclaration('bcl_block_' + blockId, declarationCode);

    let setupCode = objectName + ".mode = '" + dropdown_mode + "';\n"
    setupCode += objectName + ".xd_scale_high = " + number_xd_high + ";\n"
    setupCode += objectName + ".xd_scale_low = " + number_xd_low + ";\n"
    setupCode += objectName + ".out_scale_high += " + number_out_high + ";\n"
    setupCode += objectName + ".out_scale_low = +" + number_out_low + ";\n"
    Blockly.Arduino.addSetup("bcl_block_" + blockId, setupCode, false)

    var code = objectName + ".loop();";
    return [code, Blockly.Arduino.ORDER_NONE];
};


// Greater than block generator
Blockly.Arduino['gt'] = function (block) {
    var number_comp_value = block.getFieldValue('comp_value');
    var value_comp = Blockly.Arduino.valueToCode(block, 'comp', Blockly.Arduino.ORDER_ATOMIC);
    var number_sp_value = block.getFieldValue('sp_value');
    // TODO: Assemble Arduino into code variable.

    const blockId = bcl_block_count++;
    const objectName = "gt_" + blockId

    let declarationCode = "GT " + objectName + " = GT(&" + value_comp + ", " + number_sp_value + ");"
    Blockly.Arduino.addDeclaration('bcl_block_' + blockId, declarationCode);

    var code = objectName + ".loop();";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_NONE];
};


// Generating DI block code
Blockly.Arduino['di'] = function (block) {
    var value_fieldvalue = Blockly.Arduino.valueToCode(block, 'fieldValue', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_mode = block.getFieldValue('mode');
    // TODO: Assemble Arduino into code variable.

    const blockId = bcl_block_count++;
    const objectName = "di_" + blockId
    let declarationCode = "DI " + objectName + " = DI(&" + value_fieldvalue + ");"
    Blockly.Arduino.addDeclaration('bcl_block_' + blockId, declarationCode);

    let setupCode = objectName + ".mode = '" + dropdown_mode + "';"
    Blockly.Arduino.addSetup("bcl_block_" + blockId, setupCode, false)

    var code = objectName + ".loop();";

    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_NONE];
};


Blockly.Arduino['do'] = function (block) {
    var value_input = Blockly.Arduino.valueToCode(block, 'input', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_mode = block.getFieldValue('mode');
    // TODO: Assemble Arduino into code variable.
    const blockId = bcl_block_count++;
    const objectName = "do_" + blockId
    let declarationCode = "DO " + objectName + " = DO(&" + value_input + ");"
    Blockly.Arduino.addDeclaration('bcl_block_' + blockId, declarationCode);

    let setupCode = objectName + ".mode = '" + dropdown_mode + "';"
    Blockly.Arduino.addSetup("bcl_block_" + blockId, setupCode, false)

    var code = objectName + ".loop();";

    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_NONE];
};

// IO block generators

Blockly.Arduino['sr04'] = function (block) {
    var number_echo_pin = block.getFieldValue('echo_pin');
    var number_trig_pin = block.getFieldValue('trig_pin');
    // TODO: Assemble Arduino into code variable.

    const blockId = bcl_block_count++;
    const objectName = "sr04_" + blockId
    let declarationCode = "SR04 " + objectName + " = SR04(" + number_echo_pin + ", " + number_trig_pin + ");"
    Blockly.Arduino.addDeclaration('bcl_block_' + blockId, declarationCode);

    Blockly.Arduino.addInclude('#include <SR04.h>');

    var code = objectName + ".loop();";

    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_NONE];
};