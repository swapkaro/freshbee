# FRESHBEE: FRISBEE DISC RACE — JUNGLE RUN

## Play
Open FreshBee-Jungle-Run.html in a modern browser with WebGL 2 enabled. The portable file bundles the game, Three.js renderer and rock texture; no account, server or installation is needed. Optional web fonts and link-preview branding use the network but are not required for gameplay.

On a phone, turn to landscape. Use the large bottom-left joystick and the JUMP, DIVE and SPIN buttons. Desktop: A/D or left/right to steer, W/up to jump, S/down to dive, Space to spin, Escape/P to pause. The top-right HQ button switches to LITE rendering. Fullscreen is available where the browser supports it.

## The race
One fixed 2.4km river circuit. The disc accelerates forward automatically. Jump logs and low rocks. Dive beneath bridges (automatically resurfaces after about one second). Spin through vines for a brief boost. Avoid whirlpools and align with gold boost rings.

At each of three splits, steer before the channel divider. Left: waterfall, faster flow and jumps. Center: safer current with fewer hazards. Right: cave, low bridges and vines. Physical islands keep each route separate until they merge.

The other seven discs are local pace ghosts, not connected players. The rank display is based on their progress. No multiplayer, shop, progression, procedural courses or game login. Your best time is saved only in this browser, when browser storage is available.

## Tested
15 deterministic race checks and 15 game/runtime tests pass. Authored test runs: safe 51.433s, waterfall 46.267s, cave 47.283s, ignoring actions 56.883s. Controls, auto-surfacing, collision responses, distinct route choices, deterministic replays and finish/reset are covered. The 3D scene and HUD were visually inspected in a browser. Keyboard and touch comfort and sustained frame rates still need testing on actual mobile hardware.

## Visual scope
This first playable build uses stylized real-time 3D, modeled geometry and shader water. It is not a prerendered image and does not reproduce the reference's photoreal console-level fidelity. No audio is included in this first version.

## Editable source
The accompanying source ZIP contains the game HTML/CSS/JavaScript, rules and required rendering assets. Serve its folder with any static HTTP server to use the ES module source version. The portable HTML can be opened directly.
