#include <ControlSys.h>

boolean digitalPinIn;
int sr04_out;
float ai_out;
boolean di_out;
boolean product;
boolean greaterThan;
boolean do_out;

SR04 sr04_48 = SR04(0, 0);
AI ai_49 = AI(&sr04_out);
DI di_50 = DI(&digitalPinIn);
DO do_51 = DO(&greaterThan);

void setup() {
  pinMode(4, INPUT);
  ai_49.mode = 'A';
ai_49.xd_scale_high = 400;
ai_49.xd_scale_low = 0;
ai_49.out_scale_high = 400;
ai_49.out_scale_low = 0;

  di_50.mode = 'A';
  do_51.mode = 'A';
}

void loop() {
  digitalPinIn = digitalRead(4);
  sr04_out = sr04_48.Distance();

  ai_out = ai_49.loop();
  di_out = di_50.loop();

  product = di_out * 25.5;
  greaterThan = ai_out > product;

  do_out = do_51.loop();

}