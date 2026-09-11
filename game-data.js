const GAME_DATA = {
  "checked": "2026-09-11",
  "quests": [
    {
      "title": "A Very Still Hello",
      "requirements": [
        "Gather 8,000 nectar from AmberField.",
        "Gather 5,000 red nectar."
      ],
      "rewards": [
        {
          "item": "honey",
          "amount": 6000
        },
        {
          "item": "Pebble",
          "amount": 1
        }
      ],
      "dialogue": {
        "Progress": [
          "AmberField first. Red nectar too. I am still here, obviously."
        ],
        "Claim": [
          "You noticed me. That is already excessive.",
          "Amber is old and quiet. Work there. Bring red warmth too.",
          "Do not turn anything into a tool while you are gone."
        ],
        "Complete": [
          "You came back. Most rain has worse manners.",
          "Fine. Take this Pebble. It is not small, only early."
        ]
      }
    },
    {
      "title": "Quartz Does Not Blink",
      "requirements": [
        "Gather 18,000 nectar from QuartzQuarry.",
        "Gather 12,000 nectar from AmberField.",
        "Collect 1 Pebble after claiming this quest."
      ],
      "rewards": [
        {
          "item": "honey",
          "amount": 14000
        },
        {
          "item": "Pebble",
          "amount": 2
        }
      ],
      "dialogue": {
        "Progress": [
          "QuartzQuarry, AmberField, and one freshly collected Pebble. Freshly. Not pocket archaeology."
        ],
        "Claim": [
          "Quartz does not blink. Amber does not hurry.",
          "Bring me both kinds of silence. Then pick up one Pebble yourself."
        ],
        "Complete": [
          "Good. That Pebble remembers pressure.",
          "You are learning to carry stone without owning it too loudly."
        ]
      }
    },
    {
      "title": "Something Moves In Granite",
      "requirements": [
        "Gather 30,000 nectar.",
        "Gather 14,000 nectar from GraniteMine.",
        "Defeat 1 Berry Mite."
      ],
      "rewards": [
        {
          "item": "honey",
          "amount": 20000
        }
      ],
      "dialogue": {
        "Progress": [
          "Granite nectar. Then one Berry Mite. Small moving things are still moving things."
        ],
        "Claim": [
          "GraniteMine is not as still as it looks.",
          "Something small keeps biting at places it should not. Start with one Berry Mite."
        ],
        "Complete": [
          "Better. Small things can still make rude scratches.",
          "I will pretend that was not impressive."
        ]
      }
    },
    {
      "title": "Amber And Quartz Disagree",
      "requirements": [
        "Gather 48,000 nectar.",
        "Gather 16,000 nectar from AmberField.",
        "Gather 16,000 nectar from QuartzQuarry.",
        "Obtain 10 Pebbles and give them to Rocky."
      ],
      "rewards": [
        {
          "item": "honey",
          "amount": 30000
        },
        {
          "item": "RoseQuartzChip",
          "amount": 1
        }
      ],
      "dialogue": {
        "Progress": [
          "The Pebbles are not for decoration. Probably.",
          "You need ten, and you need to hand them over here."
        ],
        "Claim": [
          "Amber keeps warmth. Quartz throws light back in your face.",
          "Bring both. Then bring ten Pebbles to me directly. It is not emotional."
        ],
        "Complete": [
          "Those little ones are closer now.",
          "My face may... do things. Randomly. Do not make it a topic."
        ]
      }
    },
    {
      "title": "Moss Learns The Edges",
      "requirements": [
        "Gather 75,000 nectar.",
        "Gather 25,000 nectar from QuartzQuarry.",
        "Gather 22,000 nectar from GraniteMine.",
        "Gather 19,000 red nectar.",
        "Reach AmberField Achievement II."
      ],
      "rewards": [
        {
          "item": "honey",
          "amount": 120000
        },
        {
          "item": "Mossy Pebble",
          "amount": 2
        }
      ],
      "dialogue": {
        "Progress": [
          "Moss does not rush. Unfortunately, I can still notice when you do."
        ],
        "Claim": [
          "Moss is acceptable. It changes stone slowly. Politely.",
          "Prove you know the quarry, the granite pressure, red warmth, and AmberField well enough for its second mark."
        ],
        "Complete": [
          "Something soft found the edge of me.",
          "Do not stare. I am still stone. Just... less alone on one side."
        ]
      }
    }
  ],
  "tools": [
    {
      "description": "Collects 1 nectar from each of 3 flowers in a V pattern in 0.8 seconds.\n<font color=\"#FFC05C\">Passive - Daze Applier</font>\nEach scoop adds 1 stack. The <font color=\"#FF9F45\">4th enemy hit</font> applies Dazed.",
      "name": "Flower Brush",
      "order": 1,
      "price": 0,
      "rarity": "Common",
      "cooldown": 0.8,
      "nectar": 1
    },
    {
      "description": "Collects 2 nectar from each of 8 flowers.\n<font color=\"#FF9F45\">Every 10th scoop</font> draws a temporary <font color=\"#FFC95E\">x1.05 nectar</font> rake mark.",
      "name": "Honey Rake",
      "order": 2,
      "price": 500,
      "rarity": "Uncommon",
      "cooldown": 0.7,
      "nectar": 2
    },
    {
      "description": "Collects 4 nectar from a 2x2 square.\n<font color=\"#FF9F45\">Every 5th scoop</font> gathers a <font color=\"#FF9F45\">4x3 area</font> with a <font color=\"#FF9F45\">x1.1 nectar multiplier</font>.\n<font color=\"#FFD66B\">Small Earthquake</font> grants its own stack.",
      "name": "Tin Pollen Scooper",
      "order": 3,
      "price": 1300,
      "rarity": "Rare",
      "cooldown": 0.65,
      "nectar": 4
    },
    {
      "description": "Collects 6 nectar from a 2x2 square.\n<font color=\"#FFC95E\">Butterfly Lover</font>: catches a stunned butterfly with the next net scoop.",
      "name": "Net Scooper",
      "order": 4,
      "price": 3000,
      "rarity": "Epic",
      "cooldown": 0.6,
      "nectar": 6
    },
    {
      "description": "Collects 8 nectar in a rhombus.\n<font color=\"#FF9F45\">Every 20th scoop</font> reveals one weighted random item beneath a leaf.",
      "name": "Leaf Cutter",
      "order": 5,
      "price": 6000,
      "rarity": "Legendary",
      "cooldown": 0.55,
      "nectar": 8
    }
  ],
  "bags": [
    {
      "name": "School Backpack",
      "description": "A compact first backpack for short field trips.",
      "capacity": 200,
      "order": 1,
      "price": 0,
      "rarity": "Common"
    },
    {
      "name": "Honey Bag",
      "description": "A honeycomb bag with room for a longer harvest.",
      "capacity": 650,
      "order": 2,
      "price": 1000,
      "rarity": "Uncommon"
    },
    {
      "name": "Heavy Backpack",
      "description": "A reinforced backpack built for heavy gathering.",
      "capacity": 2500,
      "order": 3,
      "price": 3000,
      "rarity": "Rare"
    },
    {
      "name": "Bloom Satchel",
      "description": "A flower-lined satchel with generous nectar storage.",
      "capacity": 10000,
      "order": 4,
      "price": 13300,
      "rarity": "Epic"
    }
  ]
};

