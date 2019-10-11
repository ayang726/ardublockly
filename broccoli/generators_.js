Blockly.JavaScript['ai'] = function(block) {
  var value_fieldvalue = Blockly.JavaScript.valueToCode(block, 'fieldValue', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_mode = block.getFieldValue('Mode');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['di'] = function(block) {
  var value_fieldvalue = Blockly.JavaScript.valueToCode(block, 'fieldValue', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_mode = block.getFieldValue('mode');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['gt'] = function(block) {
  var number_comp_value = block.getFieldValue('comp_value');
  var value_comp = Blockly.JavaScript.valueToCode(block, 'comp', Blockly.JavaScript.ORDER_ATOMIC);
  var number_sp_value = block.getFieldValue('sp_value');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['do'] = function(block) {
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_mod = block.getFieldValue('mod');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};