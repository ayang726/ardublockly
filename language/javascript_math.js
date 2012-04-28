/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://code.google.com/p/google-blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating JavaScript for math blocks.
 * @author fraser@google.com (Neil Fraser)
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to language files.
 */

Blockly.JavaScript = Blockly.Generator.get('JavaScript');

Blockly.JavaScript.number = function() {
  // Numeric value.
  return Blockly.JavaScript.scrub_(this,
      window.parseFloat(this.getTitleText(0)));
};

Blockly.JavaScript.arithmetic = function(opt_dropParens) {
  // Basic arithmetic operator.
  var argument0 = Blockly.JavaScript.valueToCode_(this, 0) || '0';
  var argument1 = Blockly.JavaScript.valueToCode_(this, 1) || '0';
  var operator = Blockly.JavaScript.arithmetic.MAP[this.getValueLabel(1)];
  var code = argument0 + ' ' + operator + ' ' + argument1;
  if (!opt_dropParens) {
    code = '(' + code + ')';
  }
  return Blockly.JavaScript.scrub_(this, code);
};

Blockly.JavaScript.arithmetic.MAP = {
  '+': '+',
  '-': '-',
  '\u00D7': '*',
  '\u00F7': '/'
};

Blockly.JavaScript.root = function() {
  // Root operator.
  var argument0 = Blockly.JavaScript.valueToCode_(this, 0, true) || '0';
  var code = 'Math.sqrt(' + argument0 + ')';
  return Blockly.JavaScript.scrub_(this, code);
};
