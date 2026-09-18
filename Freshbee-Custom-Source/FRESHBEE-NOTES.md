# FRESHBEE — Reference-matched visual update

## What changed
The active players now use a textured, skeleton-driven human mesh with 20,878 triangles rather than primitive body parts. One generated athlete is shared across the two teams, with charcoal Freshbee and ivory Boston uniform variants and individual jersey names/numbers. The user explicitly chose this shared-model finish after the second athlete conversion failed.

Running uses a generated skeletal animation; planted handling, throw release, fakes and dives adapt the skeleton to the same existing gameplay states. Uniforms retain photographed cloth detail, with shader-applied team color and jersey printing. The camera sits lower and closer to resemble the supplied gameplay reference.

The field now uses a photographic grass material with normal/roughness maps. A photographic city-park panorama replaces the previous geometric skyline, tree canopies and clouds. Directional shadows, daylight color and material response were updated. This is not a fully modeled city: the far environment is a photographic backdrop. Distant crowd and stadium fixtures remain lightweight geometry.

## Gameplay unchanged
The rules module is byte-identical to the previous MVP: SHA-256 260aa8cc6d9baa4e4e843a98a307d90c5f42b75e42b6a4373f4ddc18aefcec9b. All 23 existing regression checks passed. Controls, AI, collisions, disc flight, catch reach, stamina, stall counts, scoring and saved-match format are unchanged.

## Controls
WASD/arrows: run or aim while carrying; E: quick pass; Q: next receiver; hold/release Space: throw; Shift: sprint; R: switch athlete; H: huck; F: fake; X: dive; C: camera; Esc: pause/help. On touch use the joystick, receiver chips and action buttons. A carrier pivots instead of running, following ultimate rules.

## Verification and limits
Both the generated mesh and its running clip were inspected. Ten independently skinned instances were exercised through handling, running, release and dive poses using headless transform checks; bounds and hand positions were checked. The original 23 gameplay/room tests passed. Grass seam ratio is 1.04.

These checks do not certify exact screenshot-level photorealism or physical-phone performance. Live browser inspection requires sign-in in the available review browser. No live visual quality or FPS claim is made without a rendered check. High-quality shadows can be disabled in settings for slower devices.

## Portable edition
Unzip the downloadable package and open Freshbee.html in a hardware-accelerated desktop browser. Models and textures are embedded; no local server is required. The portable edition saves locally when browser storage is available. Online matches use the existing persisted room transport.

## Custom source
The custom-source ZIP contains authored gameplay/presentation code and optimized model/texture assets. It excludes platform-owned backend scaffolding and is not a standalone server distribution. The model and all field maps are also embedded in the playable HTML.
