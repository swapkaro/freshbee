# FRESHBEE: ULTIMATE FRISBEE
Playable single-player 5v5 browser prototype. First to seven.

## Play a downloaded build
Serve this folder over HTTP (for example `python3 -m http.server 8080`) and open http://localhost:8080. A modern WebGL2-capable browser with hardware acceleration is recommended. The game is real-time 3D; the cover image is metadata only.

## Controls
WASD / arrows: move. Shift: sprint. Hold Space and release: throw. Mouse: aim. E: catch or intercept. Q: request pass / cycle target. Tab: switch athlete. Escape: pause. Touch: left joystick and contextual buttons, drag the held THROW button to aim.

## Rules
Catch in the far end zone to score. Walking into the end zone alone does not score. Drops, out-of-bounds throws and a 10-second possession clock produce turnovers. Carrying is allowed. First team to seven wins.

## Prototype limits
One arena, simple AI, no multiplayer, accounts, progression or monetization. Disc flight is a predictable curved sports-game approximation rather than an aerodynamic solver. Athlete animation is a generated running rig with additive throwing/reaching. Desktop/mobile native-GPU performance requires device testing. Simplified crowd and stadium geometry keep this browser-scale, not AAA.

The source/ folder contains the custom scene, input/HUD and deterministic game rules. The root contains the ready-to-serve build and generated assets.
