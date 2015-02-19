# Ardublockly
"Ardublockly" is a fork of [Blockly](https://developers.google.com/blockly/), a web-based graphical programming editor, that has been updated to generate [Arduino](http://www.arduino.cc/) code.

The "ArduinoServerCompiler" component initialises a local server with Python to be able to compile and load the Arduino code using the [Arduino IDE](http://arduino.cc/en/main/software).

This project has been influenced by BlocklyDuino.


## Features
* Generate Arduino code with visual drag-and-drop blocks
* Load the code to an Arduino Board
* Compatible with a wide range of official Arduino Boards
* Compatible with Windows / Linux / Mac OS X

Ardublockly is still under development and a few features are not yet implemented.

Currently tested under Windows, but developed for portability. Will soon be tested on the other platforms.


## Demo
A demo of the current state of Ardublockly can be found in the following two links (to load the code into an Arduino requires Ardublockly to be executed locally):

#### [Ardublockly with responsive design](http://carlosperate.github.io/ardublockly/ardublockly/apps/arduino/index.html)
![WebApp screenshot responsive design](http://carlosperate.github.io/ardublockly/images/screenshot_material_all_small.jpg "Ardublockly with responsive design")

#### [Ardublockly classic](http://carlosperate.github.io/ardublockly/ardublockly/apps/arduino_classic/index.html)
![WebApp screenshot](http://carlosperate.github.io/ardublockly/images/screenshot_1.png "Ardublockly")



## Installing
Installation instructions can be found in [this Github repository Wiki](https://github.com/carlosperate/ardublockly/wiki/Installing-Ardublockly).

Alternatively, there is a packaged version for Windows that runs as a stand-alone executable and can be downloaded using the following git command:
```
git clone --recursive https://github.com/carlosperate/ardublockly-package.git
```

It also needs the [Arduino IDE version 1.6 or higher](http://arduino.cc/en/main/software).


## Running
1. Install Ardublockly or [Ardublockly-package](https://github.com/carlosperate/ardublockly-package)
2. Install the [Arduino IDE version 1.6 or higher](http://arduino.cc/en/main/software).
3. Run the `start.py` python script (for Ardublockly) or `ardublockly_win.bat` package file (for Ardublockly-package)
3. Configure Ardublockly to find the Arduino IDE [following these instructions](https://github.com/carlosperate/ardublockly/wiki/Configure-Ardublockly)


## Documentation
The documentation, including installation instructions, configuration instructions, and developer information can be found in [this Github repository Wiki](https://github.com/carlosperate/ardublockly/wiki).

To download the documentation you can git clone the wiki data:
```
git clone https://github.com/carlosperate/ardublockly.wiki.git
```


## Credit
Blockly original source is Copyright of Google Inc. [https://developers.google.com/blockly/](https://developers.google.com/blockly/)

#### Significant changes
Added Arduino code generator, Arduino apps, and Python server to utilise the Arduino IDE.

All changes to the original source code can be reviewed [here](https://github.com/carlosperate/ardublockly/compare/blockly-original...master).


## License
Licensed under the Apache License, Version 2.0 (the "License").

The full document can be found in the [COPYING](https://github.com/carlosperate/ardublockly/blob/master/COPYING) file.