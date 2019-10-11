
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

    const blockId = bcl_block_count++;
    const objectName = "ai_" + blockId
    let declarationCode = "AI " + objectName + " = AI(&" + value_fieldvalue + ");"
    Blockly.Arduino.addDeclaration('bcl_block_' + blockId, declarationCode);

    let setupCode = objectName + ".mode = " + dropdown_mode + ";"
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

    let setupCode = objectName + ".mode = " + dropdown_mode + ";"
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

    let setupCode = objectName + ".mode = " + dropdown_mode + ";"
    Blockly.Arduino.addSetup("bcl_block_" + blockId, setupCode, false)

    var code = objectName + ".loop();";

    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_NONE];
};