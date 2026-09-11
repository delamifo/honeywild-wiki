// Browse only content with a documented player-facing source.
// Owner confirmed these four fields are playable despite their development flags.
const availabilityNow=Date.now()/1000;
const autumnAvailable=availabilityNow>=REFERENCE_DATA.event.start&&availabilityNow<REFERENCE_DATA.event.finish;
const playerFields=WIKI_CATALOG.fields.filter(f=>f.location!=='Testing'&&(!f.devLocked||REFERENCE_DATA.ownerPlayableFields.includes(f.id)));
const removedFieldIds=new Set(WIKI_CATALOG.fields.filter(f=>!playerFields.includes(f)).map(f=>'field-'+slug(f.id)));
const AVAILABLE_BEES=WIKI_CATALOG.bees.filter(b=>b.StandardRollable!==false&&b.Rarity!=='Special');
const activeAbilityIds=new Set(AVAILABLE_BEES.flatMap(b=>b.AbilityIds).map(id=>'ability-'+slug(id)));
const availabilityRemoved=new Set();
for(const a of ARTICLES){
 if(a.obtaining){a.obtaining=a.obtaining.filter(row=>!removedFieldIds.has(row[0].id)&&(autumnAvailable||!(row[0].id==='autumn-shop'||row[1].includes('Seasonal')||row[1].includes('Autumn Harvest')))&&(availabilityNow<AD.freePacks.FreeUntilUnix||!row[1].includes('free-pack promotion')));const t=a.tables?.find(t=>t.title==='Obtaining');if(t){t.rows=a.obtaining;t.note='Documented player sources. Seasonal offers require the event to be active.'}}
 if(a.quests&&!autumnAvailable)a.quests=a.quests.filter(q=>!q.season);
 const excluded=a.category==='items'&&!a.obtaining?.length||a.category==='gear'&&a.id!=='equipment'&&!a.obtaining?.length||a.category==='fields'&&removedFieldIds.has(a.id)||a.category==='bees'&&!AVAILABLE_BEES.some(b=>slug(b.DisplayName)===a.id)||a.category==='abilities'&&!activeAbilityIds.has(a.id)||a.id==='autumn-shop'&&!autumnAvailable;
 if(excluded)availabilityRemoved.add(a.id);
}
for(let i=ARTICLES.length-1;i>=0;i--)if(availabilityRemoved.has(ARTICLES[i].id))ARTICLES.splice(i,1);
WIKI_CATALOG.bees=AVAILABLE_BEES;
WIKI_CATALOG.fields=playerFields;
WIKI_CATALOG.abilities=WIKI_CATALOG.abilities.filter(t=>activeAbilityIds.has('ability-'+slug(t.id)));
for(const a of ARTICLES){a.related=a.related.filter(id=>!availabilityRemoved.has(id));if(a.category==='fields'){a.facts=a.facts.filter(([label])=>label!=='Development lock');if(REFERENCE_DATA.ownerPlayableFields.some(id=>'field-'+slug(id)===a.id)){a.sections=a.sections.filter(([title])=>title!=='Availability');a.source+='; playable availability confirmed by the game owner on September 11, 2026';}}}
CATEGORY_COPY.items='Items with documented player acquisition sources. Open an item for obtaining methods and confirmed uses.';
CATEGORY_COPY.bees=AVAILABLE_BEES.length+' obtainable bees, with base stats, favorite foods, abilities, and progression information.';
CATEGORY_COPY.fields='Playable fields, their color mixes, gathering rewards, and related quests.';
