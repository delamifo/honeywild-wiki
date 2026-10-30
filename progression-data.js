// Obtainable branches only; omitted gates exceed the enforced Rocky completion cap.
const PROGRESSION_DATA={
  "date": "2026-10-30",
  "tabs": [
    {
      "id": "root",
      "name": "Memory Tree",
      "lockHint": ""
    },
    {
      "id": "rocky",
      "name": "Rocky Location Tree",
      "lockHint": "Open Rocky Location from the Memory Tree first."
    }
  ],
  "nodes": [
    {
      "id": "upgrade_nectar_one",
      "name": "Memory Awakening",
      "tabId": "root",
      "description": "Restores the tree's first shared memory. +5% Nectar.",
      "position": {
        "y": 0.83,
        "x": 0.5
      },
      "prerequisites": [],
      "requirements": [
        {
          "amount": 250,
          "label": "Honey",
          "id": "honey_250",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 5,
          "mode": "AddPercent",
          "stat": "Nectar",
          "history": "+5% Nectar"
        }
      ]
    },
    {
      "id": "upgrade_player_move_speed_one",
      "name": "Measured Steps",
      "tabId": "root",
      "description": "A small permanent movement improvement. +0.25 Player Move Speed.",
      "position": {
        "y": 0.69,
        "x": 0.32
      },
      "prerequisites": [
        "upgrade_nectar_one"
      ],
      "requirements": [
        {
          "amount": 500,
          "label": "Honey",
          "id": "honey_500",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 0.25,
          "mode": "Add",
          "stat": "MoveSpeed",
          "history": "+0.25 Player Move Speed"
        }
      ]
    },
    {
      "id": "upgrade_tool_nectar_one",
      "name": "Steady Hands",
      "tabId": "root",
      "description": "Your tools gather a little more nectar. +5% Tool Nectar.",
      "position": {
        "y": 0.65,
        "x": 0.5
      },
      "prerequisites": [
        "upgrade_nectar_one"
      ],
      "requirements": [
        {
          "amount": 500,
          "label": "Honey",
          "id": "honey_500",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 5,
          "mode": "AddPercent",
          "stat": "ToolNectar",
          "history": "+5% Tool Nectar"
        }
      ]
    },
    {
      "id": "upgrade_bee_gather_nectar_one",
      "name": "Shared Rhythm",
      "tabId": "root",
      "description": "Your bees gather a little more nectar. +5% Bee Gather Nectar.",
      "position": {
        "y": 0.69,
        "x": 0.68
      },
      "prerequisites": [
        "upgrade_nectar_one"
      ],
      "requirements": [
        {
          "amount": 500,
          "label": "Honey",
          "id": "honey_500",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 5,
          "mode": "AddPercent",
          "stat": "BeeGatherNectar",
          "history": "+5% Bee Gather Nectar"
        }
      ]
    },
    {
      "id": "upgrade_honey_one",
      "name": "Golden Thread",
      "tabId": "root",
      "description": "Strengthens honey from every valid source. +1.5% Honey from all sources.",
      "position": {
        "y": 0.53,
        "x": 0.2
      },
      "prerequisites": [
        "upgrade_player_move_speed_one"
      ],
      "requirements": [
        {
          "amount": 1000,
          "label": "Honey",
          "id": "honey_1000",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 1.5,
          "mode": "AddPercent",
          "stat": "HoneyFromAllSources",
          "history": "+1.5% Honey from all sources"
        }
      ]
    },
    {
      "id": "upgrade_capacity_one",
      "name": "Room To Carry",
      "tabId": "root",
      "description": "+250 Capacity.",
      "position": {
        "y": 0.49,
        "x": 0.4
      },
      "prerequisites": [
        "upgrade_player_move_speed_one",
        "upgrade_tool_nectar_one"
      ],
      "requirements": [
        {
          "amount": 1000,
          "label": "Honey",
          "id": "honey_1000",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 250,
          "mode": "Add",
          "stat": "Capacity",
          "history": "+250 Capacity"
        }
      ]
    },
    {
      "id": "upgrade_white_nectar_one",
      "name": "Pale Petals",
      "tabId": "root",
      "description": "Strengthens nectar gathered from white flowers. +3% White Nectar.",
      "position": {
        "y": 0.49,
        "x": 0.6
      },
      "prerequisites": [
        "upgrade_tool_nectar_one",
        "upgrade_bee_gather_nectar_one"
      ],
      "requirements": [
        {
          "amount": 1000,
          "label": "Honey",
          "id": "honey_1000",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 3,
          "mode": "AddPercent",
          "stat": "WhiteNectar",
          "history": "+3% White Nectar"
        }
      ]
    },
    {
      "id": "upgrade_blue_nectar_one",
      "name": "Cool Current",
      "tabId": "root",
      "description": "Strengthens nectar gathered from blue flowers. +3% Blue Nectar.",
      "position": {
        "y": 0.53,
        "x": 0.8
      },
      "prerequisites": [
        "upgrade_bee_gather_nectar_one"
      ],
      "requirements": [
        {
          "amount": 1000,
          "label": "Honey",
          "id": "honey_1000",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 3,
          "mode": "AddPercent",
          "stat": "BlueNectar",
          "history": "+3% Blue Nectar"
        }
      ]
    },
    {
      "id": "upgrade_critical_chance_one",
      "name": "True Aim",
      "tabId": "root",
      "description": "+0.25% Critical Chance.",
      "position": {
        "y": 0.35,
        "x": 0.25
      },
      "prerequisites": [
        "upgrade_honey_one"
      ],
      "requirements": [
        {
          "amount": 2000,
          "label": "Honey",
          "id": "honey_2000",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        },
        {
          "amount": 2,
          "label": "Player Level",
          "id": "level_2",
          "kind": "level",
          "enforce": true,
          "category": "Level"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 0.25,
          "mode": "Add",
          "stat": "CriticalChance",
          "history": "+0.25% Critical Chance"
        }
      ]
    },
    {
      "id": "upgrade_red_nectar_one",
      "name": "Warm Bloom",
      "tabId": "root",
      "description": "Strengthens nectar gathered from red flowers. +3% Red Nectar.",
      "position": {
        "y": 0.31,
        "x": 0.43
      },
      "prerequisites": [
        "upgrade_capacity_one"
      ],
      "requirements": [
        {
          "amount": 2000,
          "label": "Honey",
          "id": "honey_2000",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        },
        {
          "amount": 2,
          "label": "Player Level",
          "id": "level_2",
          "kind": "level",
          "enforce": true,
          "category": "Level"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 3,
          "mode": "AddPercent",
          "stat": "RedNectar",
          "history": "+3% Red Nectar"
        }
      ]
    },
    {
      "id": "upgrade_bee_attack_one",
      "name": "Hive Courage",
      "tabId": "root",
      "description": "Your bees deal more damage. +5% Bee Attack.",
      "position": {
        "y": 0.31,
        "x": 0.57
      },
      "prerequisites": [
        "upgrade_white_nectar_one"
      ],
      "requirements": [
        {
          "amount": 2000,
          "label": "Honey",
          "id": "honey_2000",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        },
        {
          "amount": 2,
          "label": "Player Level",
          "id": "level_2",
          "kind": "level",
          "enforce": true,
          "category": "Level"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 5,
          "mode": "AddPercent",
          "stat": "BeeAttack",
          "history": "+5% Bee Attack"
        }
      ]
    },
    {
      "id": "upgrade_bee_move_speed_one",
      "name": "Wingbeat",
      "tabId": "root",
      "description": "Your bees travel faster. +5% Bee Move Speed.",
      "position": {
        "y": 0.35,
        "x": 0.75
      },
      "prerequisites": [
        "upgrade_blue_nectar_one"
      ],
      "requirements": [
        {
          "amount": 2000,
          "label": "Honey",
          "id": "honey_2000",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        },
        {
          "amount": 2,
          "label": "Player Level",
          "id": "level_2",
          "kind": "level",
          "enforce": true,
          "category": "Level"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 5,
          "mode": "AddPercent",
          "stat": "BeeSpeed",
          "history": "+5% Bee Move Speed"
        }
      ]
    },
    {
      "id": "upgrade_convert_rate_one",
      "name": "Homeward Current",
      "tabId": "root",
      "description": "Hive conversion becomes more effective. +5% Convert Rate.",
      "position": {
        "y": 0.16,
        "x": 0.34
      },
      "prerequisites": [
        "upgrade_critical_chance_one",
        "upgrade_red_nectar_one"
      ],
      "requirements": [
        {
          "amount": 3500,
          "label": "Honey",
          "id": "honey_3500",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        },
        {
          "amount": 3,
          "label": "Player Level",
          "id": "level_3",
          "kind": "level",
          "enforce": true,
          "category": "Level"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 5,
          "mode": "AddPercent",
          "stat": "ConvertRate",
          "history": "+5% Convert Rate"
        }
      ]
    },
    {
      "id": "upgrade_loot_luck_one",
      "name": "Fortune Remembered",
      "tabId": "root",
      "description": "Unlocks Loot Luck. +10% Loot Luck.",
      "position": {
        "y": 0.16,
        "x": 0.66
      },
      "prerequisites": [
        "upgrade_bee_attack_one",
        "upgrade_bee_move_speed_one"
      ],
      "requirements": [
        {
          "amount": 3500,
          "label": "Honey",
          "id": "honey_3500",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        },
        {
          "amount": 3,
          "label": "Player Level",
          "id": "level_3",
          "kind": "level",
          "enforce": true,
          "category": "Level"
        }
      ],
      "effects": [
        {
          "type": "unlock_loot_luck"
        },
        {
          "type": "stat_modifier",
          "value": 10,
          "mode": "AddPercent",
          "stat": "LootLuck",
          "history": "+10% Loot Luck"
        }
      ]
    },
    {
      "id": "upgrade_capacity_two",
      "name": "Field Pack Stitching",
      "tabId": "root",
      "description": "+500 Capacity.",
      "position": {
        "y": 0.2,
        "x": 0.12
      },
      "prerequisites": [
        "upgrade_critical_chance_one"
      ],
      "requirements": [
        {
          "amount": 4000,
          "label": "Honey",
          "id": "honey_4000",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        },
        {
          "npcTag": "BeeGardenerQuestgiver",
          "amount": 3,
          "label": "Bee Gardener Quests",
          "id": "npc_quests_BeeGardenerQuestgiver_3",
          "kind": "npc_quests_completed",
          "enforce": true,
          "category": "Progress"
        },
        {
          "label": "Treat",
          "note": "Consumed when this node is restored.",
          "enforce": true,
          "amount": 10,
          "id": "item_treat_10",
          "kind": "item",
          "category": "Other",
          "itemId": "Treat"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 500,
          "mode": "Add",
          "stat": "Capacity",
          "history": "+500 Capacity"
        }
      ]
    },
    {
      "id": "upgrade_capacity_percent_one",
      "name": "Flexible Storage",
      "tabId": "root",
      "description": "+1% Capacity.",
      "position": {
        "y": 0.23,
        "x": 0.5
      },
      "prerequisites": [
        "upgrade_red_nectar_one",
        "upgrade_bee_attack_one"
      ],
      "requirements": [
        {
          "amount": 5000,
          "label": "Honey",
          "id": "honey_5000",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        },
        {
          "amount": 1,
          "achievementId": "total_nectar",
          "label": "Total Nectar Achievement Tier",
          "id": "achievement_total_nectar_1",
          "kind": "achievement_tier",
          "enforce": true,
          "category": "Progress"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 1,
          "mode": "AddPercent",
          "stat": "CapacityMultiplier",
          "history": "+1% Capacity"
        }
      ]
    },
    {
      "id": "upgrade_nectar_multiplier_one",
      "name": "Fine Resonance",
      "tabId": "root",
      "description": "x1.001 Nectar.",
      "position": {
        "y": 0.2,
        "x": 0.88
      },
      "prerequisites": [
        "upgrade_bee_move_speed_one"
      ],
      "requirements": [
        {
          "amount": 6000,
          "label": "Honey",
          "id": "honey_6000",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        },
        {
          "npcTag": "BeeGardenerQuestgiver",
          "amount": 5,
          "label": "Bee Gardener Quests",
          "id": "npc_quests_BeeGardenerQuestgiver_5",
          "kind": "npc_quests_completed",
          "enforce": true,
          "category": "Progress"
        },
        {
          "label": "Sun Seed",
          "note": "Consumed when this node is restored.",
          "enforce": true,
          "amount": 10,
          "id": "item_sun_seed_10",
          "kind": "item",
          "category": "Other",
          "itemId": "Sun Seed"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 1.001,
          "mode": "Mult",
          "stat": "Nectar",
          "history": "x1.001 Nectar"
        }
      ]
    },
    {
      "id": "unlock_rocky_location",
      "name": "Rocky Location",
      "tabId": "root",
      "description": "Restores the Rocky Location route and opens its stronger Memory Tree. Opens Rocky Location Tree.",
      "position": {
        "y": 0.03,
        "x": 0.5
      },
      "prerequisites": [
        "upgrade_capacity_two",
        "upgrade_capacity_percent_one",
        "upgrade_nectar_multiplier_one"
      ],
      "requirements": [
        {
          "amount": 25000,
          "label": "Honey",
          "id": "honey_25000",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        },
        {
          "amount": 3,
          "label": "Player Level",
          "id": "level_3",
          "kind": "level",
          "enforce": true,
          "category": "Level"
        },
        {
          "amount": 10,
          "label": "Memory Nodes Restored",
          "id": "purchased_upgrades_10",
          "kind": "purchased_upgrades",
          "enforce": true,
          "category": "Progress"
        },
        {
          "npcTag": "BeeGardenerQuestgiver",
          "amount": 5,
          "label": "Bee Gardener Quests",
          "id": "npc_quests_BeeGardenerQuestgiver_5",
          "kind": "npc_quests_completed",
          "enforce": true,
          "category": "Progress"
        },
        {
          "label": "Treat",
          "note": "Consumed when this node is restored.",
          "enforce": true,
          "amount": 10,
          "id": "item_treat_10",
          "kind": "item",
          "category": "Other",
          "itemId": "Treat"
        }
      ],
      "effects": [
        {
          "type": "unlock_tab",
          "tabId": "rocky",
          "history": "Opened Rocky Location Tree"
        },
        {
          "type": "unlock_rocky_location_access"
        }
      ]
    },
    {
      "id": "upgrade_nectar_two",
      "name": "Amber Root",
      "tabId": "rocky",
      "description": "Rocky fields reward more nectar. +7.5% Nectar.",
      "position": {
        "y": 0.64,
        "x": 0.5
      },
      "prerequisites": [
        "unlock_rocky_location"
      ],
      "requirements": [
        {
          "amount": 15000,
          "label": "Honey",
          "id": "honey_15000",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        },
        {
          "amount": 4,
          "label": "Player Level",
          "id": "level_4",
          "kind": "level",
          "enforce": true,
          "category": "Level"
        },
        {
          "npcTag": "RockyQuestgiver",
          "amount": 1,
          "label": "Rocky Quests",
          "id": "npc_quests_RockyQuestgiver_1",
          "kind": "npc_quests_completed",
          "enforce": true,
          "category": "Progress"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 7.5,
          "mode": "AddPercent",
          "stat": "Nectar",
          "history": "+7.5% Nectar"
        }
      ]
    },
    {
      "id": "upgrade_tool_nectar_two",
      "name": "Chiseled Edge",
      "tabId": "rocky",
      "description": "Tools gather more in the rocky route. +7.5% Tool Nectar.",
      "position": {
        "y": 0.49,
        "x": 0.29
      },
      "prerequisites": [
        "upgrade_nectar_two"
      ],
      "requirements": [
        {
          "amount": 25000,
          "label": "Honey",
          "id": "honey_25000",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        },
        {
          "amount": 4,
          "label": "Player Level",
          "id": "level_4",
          "kind": "level",
          "enforce": true,
          "category": "Level"
        },
        {
          "label": "Pebble",
          "note": "Consumed when this node is restored.",
          "enforce": true,
          "amount": 5,
          "id": "item_pebble_5",
          "kind": "item",
          "category": "Other",
          "itemId": "Pebble"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 7.5,
          "mode": "AddPercent",
          "stat": "ToolNectar",
          "history": "+7.5% Tool Nectar"
        }
      ]
    },
    {
      "id": "upgrade_bee_gather_nectar_two",
      "name": "Stone Chorus",
      "tabId": "rocky",
      "description": "Bees gather more in the rocky route. +7.5% Bee Gather Nectar.",
      "position": {
        "y": 0.49,
        "x": 0.71
      },
      "prerequisites": [
        "upgrade_nectar_two"
      ],
      "requirements": [
        {
          "amount": 25000,
          "label": "Honey",
          "id": "honey_25000",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        },
        {
          "amount": 4,
          "label": "Player Level",
          "id": "level_4",
          "kind": "level",
          "enforce": true,
          "category": "Level"
        },
        {
          "amount": 1,
          "achievementId": "total_nectar",
          "label": "Total Nectar Achievement Tier",
          "id": "achievement_total_nectar_1",
          "kind": "achievement_tier",
          "enforce": true,
          "category": "Progress"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 7.5,
          "mode": "AddPercent",
          "stat": "BeeGatherNectar",
          "history": "+7.5% Bee Gather Nectar"
        }
      ]
    },
    {
      "id": "upgrade_capacity_three",
      "name": "Miner's Satchel",
      "tabId": "rocky",
      "description": "+500 Capacity.",
      "position": {
        "y": 0.29,
        "x": 0.18
      },
      "prerequisites": [
        "upgrade_tool_nectar_two"
      ],
      "requirements": [
        {
          "amount": 40000,
          "label": "Honey",
          "id": "honey_40000",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        },
        {
          "amount": 5,
          "label": "Player Level",
          "id": "level_5",
          "kind": "level",
          "enforce": true,
          "category": "Level"
        },
        {
          "npcTag": "RockyQuestgiver",
          "amount": 2,
          "label": "Rocky Quests",
          "id": "npc_quests_RockyQuestgiver_2",
          "kind": "npc_quests_completed",
          "enforce": true,
          "category": "Progress"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 500,
          "mode": "Add",
          "stat": "Capacity",
          "history": "+500 Capacity"
        }
      ]
    },
    {
      "id": "upgrade_critical_chance_two",
      "name": "Crystal Focus",
      "tabId": "rocky",
      "description": "+0.5% Critical Chance.",
      "position": {
        "y": 0.29,
        "x": 0.4
      },
      "prerequisites": [
        "upgrade_tool_nectar_two"
      ],
      "requirements": [
        {
          "amount": 40000,
          "label": "Honey",
          "id": "honey_40000",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        },
        {
          "amount": 5,
          "label": "Player Level",
          "id": "level_5",
          "kind": "level",
          "enforce": true,
          "category": "Level"
        },
        {
          "label": "Pebble",
          "note": "Consumed when this node is restored.",
          "enforce": true,
          "amount": 10,
          "id": "item_pebble_10",
          "kind": "item",
          "category": "Other",
          "itemId": "Pebble"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 0.5,
          "mode": "Add",
          "stat": "CriticalChance",
          "history": "+0.5% Critical Chance"
        }
      ]
    },
    {
      "id": "upgrade_convert_rate_two",
      "name": "Stonewell",
      "tabId": "rocky",
      "description": "Conversion becomes more effective. +7.5% Convert Rate.",
      "position": {
        "y": 0.29,
        "x": 0.6
      },
      "prerequisites": [
        "upgrade_bee_gather_nectar_two"
      ],
      "requirements": [
        {
          "amount": 40000,
          "label": "Honey",
          "id": "honey_40000",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        },
        {
          "amount": 5,
          "label": "Player Level",
          "id": "level_5",
          "kind": "level",
          "enforce": true,
          "category": "Level"
        },
        {
          "amount": 1,
          "achievementId": "quests",
          "label": "Quest Achievement Tier",
          "id": "achievement_quests_1",
          "kind": "achievement_tier",
          "enforce": true,
          "category": "Progress"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 7.5,
          "mode": "AddPercent",
          "stat": "ConvertRate",
          "history": "+7.5% Convert Rate"
        }
      ]
    },
    {
      "id": "upgrade_player_move_speed_two",
      "name": "Sure Footing",
      "tabId": "rocky",
      "description": "A stronger permanent movement improvement. +0.5 Player Move Speed.",
      "position": {
        "y": 0.29,
        "x": 0.82
      },
      "prerequisites": [
        "upgrade_bee_gather_nectar_two"
      ],
      "requirements": [
        {
          "amount": 40000,
          "label": "Honey",
          "id": "honey_40000",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        },
        {
          "amount": 5,
          "label": "Player Level",
          "id": "level_5",
          "kind": "level",
          "enforce": true,
          "category": "Level"
        },
        {
          "npcTag": "RockyQuestgiver",
          "amount": 3,
          "label": "Rocky Quests",
          "id": "npc_quests_RockyQuestgiver_3",
          "kind": "npc_quests_completed",
          "enforce": true,
          "category": "Progress"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 0.5,
          "mode": "Add",
          "stat": "MoveSpeed",
          "history": "+0.5 Player Move Speed"
        }
      ]
    },
    {
      "id": "upgrade_capacity_four",
      "name": "Stonebound Pack",
      "tabId": "rocky",
      "description": "+1000 Capacity.",
      "position": {
        "y": 0.16,
        "x": 0.14
      },
      "prerequisites": [
        "upgrade_capacity_three"
      ],
      "requirements": [
        {
          "amount": 75000,
          "label": "Honey",
          "id": "honey_75000",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        },
        {
          "amount": 6,
          "label": "Player Level",
          "id": "level_6",
          "kind": "level",
          "enforce": true,
          "category": "Level"
        },
        {
          "npcTag": "RockyQuestgiver",
          "amount": 3,
          "label": "Rocky Quests",
          "id": "npc_quests_RockyQuestgiver_3",
          "kind": "npc_quests_completed",
          "enforce": true,
          "category": "Progress"
        },
        {
          "label": "Pebble",
          "note": "Consumed when this node is restored.",
          "enforce": true,
          "amount": 15,
          "id": "item_pebble_15",
          "kind": "item",
          "category": "Other",
          "itemId": "Pebble"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 1000,
          "mode": "Add",
          "stat": "Capacity",
          "history": "+1000 Capacity"
        }
      ]
    },
    {
      "id": "upgrade_capacity_percent_two",
      "name": "Layered Satchel",
      "tabId": "rocky",
      "description": "+2% Capacity.",
      "position": {
        "y": 0.16,
        "x": 0.5
      },
      "prerequisites": [
        "upgrade_critical_chance_two",
        "upgrade_convert_rate_two"
      ],
      "requirements": [
        {
          "amount": 100000,
          "label": "Honey",
          "id": "honey_100000",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        },
        {
          "amount": 6,
          "label": "Player Level",
          "id": "level_6",
          "kind": "level",
          "enforce": true,
          "category": "Level"
        },
        {
          "amount": 1,
          "achievementId": "quests",
          "label": "Quest Achievement Tier",
          "id": "achievement_quests_1",
          "kind": "achievement_tier",
          "enforce": true,
          "category": "Progress"
        },
        {
          "label": "Pebble",
          "note": "Consumed when this node is restored.",
          "enforce": true,
          "amount": 25,
          "id": "item_pebble_25",
          "kind": "item",
          "category": "Other",
          "itemId": "Pebble"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 2,
          "mode": "AddPercent",
          "stat": "CapacityMultiplier",
          "history": "+2% Capacity"
        }
      ]
    },
    {
      "id": "upgrade_nectar_multiplier_two",
      "name": "Crystal Resonance",
      "tabId": "rocky",
      "description": "x1.002 Nectar.",
      "position": {
        "y": 0.16,
        "x": 0.86
      },
      "prerequisites": [
        "upgrade_player_move_speed_two"
      ],
      "requirements": [
        {
          "amount": 125000,
          "label": "Honey",
          "id": "honey_125000",
          "kind": "honey",
          "enforce": true,
          "category": "Honey"
        },
        {
          "amount": 6,
          "label": "Player Level",
          "id": "level_6",
          "kind": "level",
          "enforce": true,
          "category": "Level"
        },
        {
          "npcTag": "RockyQuestgiver",
          "amount": 5,
          "label": "Rocky Quests",
          "id": "npc_quests_RockyQuestgiver_5",
          "kind": "npc_quests_completed",
          "enforce": true,
          "category": "Progress"
        },
        {
          "label": "Runic Pebble",
          "note": "Consumed when this node is restored.",
          "enforce": true,
          "amount": 3,
          "id": "item_runic_pebble_3",
          "kind": "item",
          "category": "Other",
          "itemId": "Runic Pebble"
        }
      ],
      "effects": [
        {
          "type": "stat_modifier",
          "value": 1.002,
          "mode": "Mult",
          "stat": "Nectar",
          "history": "x1.002 Nectar"
        }
      ]
    }
  ]
};
