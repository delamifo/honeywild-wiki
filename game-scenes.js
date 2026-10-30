// Original captures from the owner's active Studio scene; no generated scenery.
const GAME_SCENES={
 'smasher-bear':{file:'game/smasher.jpg',alt:'Smasher Bear standing at the egg-smashing workbench in the active Studio scene.',caption:'Smasher Bear and the smashing workbench · Studio scene, 30 October 2026.'},
 rocky:{file:'game/rocky.jpg',alt:'Rocky and the interaction platform beside the stone arch in Rocky Location.',caption:'Rocky in Rocky Location · Studio scene, 30 October 2026.'},
 'field-amberfield':{file:'game/amber-field.jpg',alt:'Amber Field platform and connecting stone paths in Rocky Location.',caption:'Amber Field layout · Studio scene, 30 October 2026. Runtime flowers are not shown.'}
};
for(const [id,scene]of Object.entries(GAME_SCENES)){const a=ARTICLES.find(a=>a.id===id);if(a){a.scene=scene;a.image=scene.file;a.imageLabel=scene.alt;a.imageNote='Real Studio capture';}}
function gameScene(a){const s=a.scene;return s?'<figure class="game-scene"><img src="'+assetPath(s.file)+'" alt="'+esc(s.alt)+'" width="1380" height="727" decoding="async"><figcaption><span class="scene-badge">STUDIO CAPTURE</span>'+esc(s.caption)+'</figcaption></figure>':'';}
