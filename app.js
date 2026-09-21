// Rulebook V1 data: edit this section to update profiles.
const DATA = {
  "rigs": [
    {
      "id": "stalker",
      "name": "Stalker",
      "faction": "krim",
      "weight": "Light",
      "speed": 4,
      "exhaust": 3,
      "iron": 8,
      "sp": [
        8,
        7,
        7,
        7
      ],
      "armour": [
        4,
        5,
        4,
        5
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6,
        8
      ],
      "weapons": [
        {
          "name": "Igniter",
          "rof": 3,
          "str": 1,
          "rng": "4/8",
          "acc": "+1 SR",
          "perks": "Incendiary",
          "iron": 2
        },
        {
          "name": "Missile Rack",
          "rof": 3,
          "str": 2,
          "rng": "6/12",
          "acc": "+1 LR",
          "perks": "Explosive 3",
          "iron": 3
        },
        {
          "name": "Shredder Saw",
          "rof": 2,
          "str": 4,
          "rng": "1",
          "acc": "+1",
          "perks": "Melee, Rupture",
          "iron": 2
        }
      ],
      "page": 51
    },
    {
      "id": "ravager",
      "name": "Ravager",
      "faction": "krim",
      "weight": "Medium",
      "speed": 4,
      "exhaust": 3,
      "iron": 9,
      "sp": [
        10,
        8,
        8,
        8
      ],
      "armour": [
        4,
        4,
        4,
        5
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6,
        8
      ],
      "weapons": [
        {
          "name": "Flame Thrower",
          "rof": 3,
          "str": 2,
          "rng": "4/8",
          "acc": "+1 SR",
          "perks": "Incendiary 1",
          "iron": 2
        },
        {
          "name": "Rapid Assault Cannon",
          "rof": 3,
          "str": 2,
          "rng": "6/12",
          "acc": "+1 SR",
          "perks": "-",
          "iron": 2
        },
        {
          "name": "Ripper Saw",
          "rof": 2,
          "str": 6,
          "rng": "1",
          "acc": "+1",
          "perks": "Melee, Rupture",
          "iron": 3
        }
      ],
      "page": 52
    },
    {
      "id": "defiler",
      "name": "Defiler",
      "faction": "krim",
      "weight": "Heavy",
      "speed": 3,
      "exhaust": 4,
      "iron": 10,
      "sp": [
        10,
        9,
        9,
        9
      ],
      "armour": [
        3,
        4,
        3,
        4
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6,
        8
      ],
      "weapons": [
        {
          "name": "Twin Assault Cannon",
          "rof": 4,
          "str": 2,
          "rng": "6/12",
          "acc": "+1 SR",
          "perks": "Staggering",
          "iron": 2
        },
        {
          "name": "Arc Caster",
          "rof": 3,
          "str": 3,
          "rng": "6/12",
          "acc": "+1 SR",
          "perks": "Incendiary; Volatile",
          "iron": 2
        },
        {
          "name": "Reaver Saw",
          "rof": 2,
          "str": 6,
          "rng": "1",
          "acc": "+1",
          "perks": "Melee, Penetrating; Rupture",
          "iron": 3
        }
      ],
      "page": 53
    },
    {
      "id": "dominator",
      "name": "Dominator",
      "faction": "krim",
      "weight": "Colossal",
      "speed": 3,
      "exhaust": 4,
      "iron": 11,
      "sp": [
        11,
        10,
        10,
        9
      ],
      "armour": [
        2,
        3,
        3,
        4
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6,
        8
      ],
      "weapons": [
        {
          "name": "Twin Assault Cannon",
          "rof": 4,
          "str": 2,
          "rng": "6/12",
          "acc": "+1 SR",
          "perks": "Staggering",
          "iron": 2
        },
        {
          "name": "Heavy Arc Caster",
          "rof": 3,
          "str": 4,
          "rng": "8/16",
          "acc": "+1 SR",
          "perks": "Hull; Incendiary; Volatile",
          "iron": 2
        },
        {
          "name": "Long Reach Cannon",
          "rof": 2,
          "str": 6,
          "rng": "12/24",
          "acc": "+1 LR",
          "perks": "Hull",
          "iron": 2
        },
        {
          "name": "Heavy Rivet Repeater",
          "rof": 3,
          "str": 4,
          "rng": "8/16",
          "acc": "-",
          "perks": "Sustained Fire",
          "iron": 3
        }
      ],
      "page": 54
    },
    {
      "id": "hazard",
      "name": "Hazard",
      "faction": "nox",
      "weight": "Light",
      "speed": 3,
      "exhaust": 2,
      "iron": 8,
      "sp": [
        9,
        8,
        8,
        7
      ],
      "armour": [
        3,
        4,
        5,
        5
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6,
        8
      ],
      "weapons": [
        {
          "name": "Mortar",
          "rof": 2,
          "str": 4,
          "rng": "6/12",
          "acc": "-1 SR",
          "perks": "Bombardment; Explosive 3",
          "iron": 3
        },
        {
          "name": "Igniter",
          "rof": 3,
          "str": 1,
          "rng": "4/8",
          "acc": "+1 SR",
          "perks": "Incendiary",
          "iron": 2
        },
        {
          "name": "Hydraulic Claw",
          "rof": 1,
          "str": 6,
          "rng": "1",
          "acc": "-",
          "perks": "Melee",
          "iron": 2
        }
      ],
      "page": 57
    },
    {
      "id": "caustic",
      "name": "Caustic",
      "faction": "nox",
      "weight": "Medium",
      "speed": 3,
      "exhaust": 2,
      "iron": 9,
      "sp": [
        11,
        9,
        9,
        8
      ],
      "armour": [
        3,
        4,
        4,
        5
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6,
        8
      ],
      "weapons": [
        {
          "name": "Breach Cannon",
          "rof": 2,
          "str": 4,
          "rng": "8/16",
          "acc": "-1 SR",
          "perks": "Bombardment; Explosive 3",
          "iron": 2
        },
        {
          "name": "Impaler Gun",
          "rof": 2,
          "str": 5,
          "rng": "10/20",
          "acc": "+1 SR",
          "perks": "Sustained Fire",
          "iron": 3
        },
        {
          "name": "Impact Ram",
          "rof": 2,
          "str": 4,
          "rng": "1",
          "acc": "+1",
          "perks": "Melee, Staggering",
          "iron": 2
        }
      ],
      "page": 58
    },
    {
      "id": "sledge",
      "name": "Sledge",
      "faction": "nox",
      "weight": "Heavy",
      "speed": 2,
      "exhaust": 3,
      "iron": 10,
      "sp": [
        12,
        10,
        10,
        9
      ],
      "armour": [
        3,
        3,
        4,
        4
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6,
        8
      ],
      "weapons": [
        {
          "name": "Quad Cannon",
          "rof": 4,
          "str": 3,
          "rng": "6/12",
          "acc": "-",
          "perks": "Sustained Fire",
          "iron": 3
        },
        {
          "name": "Demolisher Cannon",
          "rof": 2,
          "str": 7,
          "rng": "10/20",
          "acc": "-1 SR",
          "perks": "Explosive 3",
          "iron": 2
        },
        {
          "name": "Power Claw",
          "rof": 2,
          "str": 6,
          "rng": "1",
          "acc": "+1",
          "perks": "Melee, Breaching",
          "iron": 2
        }
      ],
      "page": 59
    },
    {
      "id": "mordent",
      "name": "Mordent",
      "faction": "nox",
      "weight": "Colossal",
      "speed": 2,
      "exhaust": 3,
      "iron": 11,
      "sp": [
        14,
        12,
        12,
        10
      ],
      "armour": [
        2,
        3,
        2,
        4
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6,
        8
      ],
      "weapons": [
        {
          "name": "Quad Cannon",
          "rof": 4,
          "str": 3,
          "rng": "6/12",
          "acc": "-",
          "perks": "Sustained Fire",
          "iron": 2
        },
        {
          "name": "Bombard Cannon",
          "rof": 2,
          "str": 4,
          "rng": "12/24",
          "acc": "-1 SR",
          "perks": "Explosive 5",
          "iron": 2
        },
        {
          "name": "Heavy Rocket Battery",
          "rof": 3,
          "str": 4,
          "rng": "8/16",
          "acc": "+1 LR",
          "perks": "Hull; Explosive 3",
          "iron": 3
        },
        {
          "name": "Incendiary Rocket Battery",
          "rof": 3,
          "str": 3,
          "rng": "8/16",
          "acc": "-",
          "perks": "Incendiary 2",
          "iron": 2
        }
      ],
      "page": 60
    },
    {
      "id": "trench",
      "name": "Trench",
      "faction": "triton",
      "weight": "Light",
      "speed": 3,
      "exhaust": 2,
      "iron": 8,
      "sp": [
        8,
        8,
        8,
        6
      ],
      "armour": [
        3,
        4,
        4,
        4
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6,
        8
      ],
      "weapons": [
        {
          "name": "Gatling Gun",
          "rof": 4,
          "str": 1,
          "rng": "6/12",
          "acc": "-",
          "perks": "Flanking; Sustained Fire",
          "iron": 3
        },
        {
          "name": "Hook Shot",
          "rof": 1,
          "str": 6,
          "rng": "6/12",
          "acc": "+1 SR",
          "perks": "Impale; Penetrating",
          "iron": 2
        },
        {
          "name": "Pry Anchor",
          "rof": 1,
          "str": 5,
          "rng": "1",
          "acc": "+1",
          "perks": "Melee, Impale",
          "iron": 2
        }
      ],
      "page": 63
    },
    {
      "id": "nautilus",
      "name": "Nautilus",
      "faction": "triton",
      "weight": "Medium",
      "speed": 3,
      "exhaust": 2,
      "iron": 10,
      "sp": [
        9,
        9,
        9,
        7
      ],
      "armour": [
        3,
        3,
        4,
        4
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6,
        8
      ],
      "weapons": [
        {
          "name": "Rotary Gun",
          "rof": 4,
          "str": 2,
          "rng": "6/12",
          "acc": "-",
          "perks": "Flanking; Sustained Fire",
          "iron": 2
        },
        {
          "name": "Harpoon Launcher",
          "rof": 1,
          "str": 7,
          "rng": "6/12",
          "acc": "+1 SR",
          "perks": "Impale; Penetrating",
          "iron": 2
        },
        {
          "name": "Vice Grips",
          "rof": 2,
          "str": 6,
          "rng": "1",
          "acc": "-",
          "perks": "Melee, Flanking; Precision",
          "iron": 3
        }
      ],
      "page": 64
    },
    {
      "id": "kraken",
      "name": "Kraken",
      "faction": "triton",
      "weight": "Heavy",
      "speed": 2,
      "exhaust": 3,
      "iron": 11,
      "sp": [
        10,
        10,
        10,
        8
      ],
      "armour": [
        3,
        3,
        3,
        3
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6,
        8
      ],
      "weapons": [
        {
          "name": "Rotary Cannon",
          "rof": 5,
          "str": 2,
          "rng": "6/12",
          "acc": "-",
          "perks": "Flanking; Sustained Fire",
          "iron": 3
        },
        {
          "name": "Trident Launcher",
          "rof": 1,
          "str": 7,
          "rng": "8/16",
          "acc": "+1 SR",
          "perks": "Impale; Penetrating",
          "iron": 2
        },
        {
          "name": "Pneumatic Crusher",
          "rof": 2,
          "str": 5,
          "rng": "1",
          "acc": "+1",
          "perks": "Melee, Breaching",
          "iron": 2
        }
      ],
      "page": 65
    },
    {
      "id": "leviathan",
      "name": "Leviathan",
      "faction": "triton",
      "weight": "Colossal",
      "speed": 2,
      "exhaust": 3,
      "iron": 12,
      "sp": [
        12,
        11,
        11,
        9
      ],
      "armour": [
        2,
        3,
        2,
        3
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6,
        8
      ],
      "weapons": [
        {
          "name": "Rotary Cannon",
          "rof": 5,
          "str": 2,
          "rng": "6/12",
          "acc": "-",
          "perks": "Flanking; Sustained Fire",
          "iron": 2
        },
        {
          "name": "Precision Cannon",
          "rof": 1,
          "str": 7,
          "rng": "8/16",
          "acc": "+1 LR",
          "perks": "Armour-Piercing 2; Precision",
          "iron": 2
        },
        {
          "name": "Incinerator",
          "rof": 3,
          "str": 2,
          "rng": "6/12",
          "acc": "+1 SR",
          "perks": "Incendiary 2",
          "iron": 2
        },
        {
          "name": "Trident Launcher",
          "rof": 1,
          "str": 7,
          "rng": "8/16",
          "acc": "+1 SR",
          "perks": "Impale; Penetrating",
          "iron": 3
        }
      ],
      "page": 66
    },
    {
      "id": "flux",
      "name": "Flux",
      "faction": "arcus",
      "weight": "Light",
      "speed": 5,
      "exhaust": 2,
      "iron": 8,
      "sp": [
        8,
        7,
        7,
        7
      ],
      "armour": [
        4,
        5,
        5,
        4
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6
      ],
      "weapons": [
        {
          "name": "Ion Cannon",
          "rof": 2,
          "str": 2,
          "rng": "8/16",
          "acc": "+1 LR",
          "perks": "Armour-Piercing 2",
          "iron": 2
        },
        {
          "name": "Arc Thrower",
          "rof": 3,
          "str": 1,
          "rng": "6/12",
          "acc": "+1 SR",
          "perks": "Shock; Sustained Fire",
          "iron": 3
        },
        {
          "name": "Shock Blade",
          "rof": 2,
          "str": 4,
          "rng": "1",
          "acc": "-",
          "perks": "Melee, Shock",
          "iron": 2
        }
      ],
      "page": 69
    },
    {
      "id": "dynamo",
      "name": "Dynamo",
      "faction": "arcus",
      "weight": "Medium",
      "speed": 5,
      "exhaust": 2,
      "iron": 9,
      "sp": [
        9,
        8,
        8,
        7
      ],
      "armour": [
        4,
        5,
        5,
        3
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6
      ],
      "weapons": [
        {
          "name": "Voltaic Repeater",
          "rof": 3,
          "str": 2,
          "rng": "6/12",
          "acc": "+1 SR",
          "perks": "Sustained Fire; Shock",
          "iron": 3
        },
        {
          "name": "Rail Gun",
          "rof": 1,
          "str": 7,
          "rng": "8/16",
          "acc": "-",
          "perks": "Armour-Piercing 2",
          "iron": 2
        },
        {
          "name": "Arc Lance",
          "rof": 2,
          "str": 5,
          "rng": "1",
          "acc": "-",
          "perks": "Melee, Shock",
          "iron": 2
        }
      ],
      "page": 70
    },
    {
      "id": "galvanic",
      "name": "Galvanic",
      "faction": "arcus",
      "weight": "Heavy",
      "speed": 4,
      "exhaust": 3,
      "iron": 10,
      "sp": [
        10,
        9,
        9,
        8
      ],
      "armour": [
        4,
        4,
        4,
        3
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6
      ],
      "weapons": [
        {
          "name": "Arc Beam Cannon",
          "rof": 3,
          "str": 2,
          "rng": "8/16",
          "acc": "+1 SR",
          "perks": "Sustained Fire; Shock",
          "iron": 3
        },
        {
          "name": "Rail Cannon",
          "rof": 1,
          "str": 8,
          "rng": "10/20",
          "acc": "+1 LR",
          "perks": "Armour-Piercing 2",
          "iron": 3
        },
        {
          "name": "Arc Sword",
          "rof": 2,
          "str": 5,
          "rng": "1",
          "acc": "+1",
          "perks": "Melee, Shock",
          "iron": 2
        }
      ],
      "page": 71
    },
    {
      "id": "tempest",
      "name": "Tempest",
      "faction": "arcus",
      "weight": "Colossal",
      "speed": 4,
      "exhaust": 3,
      "iron": 11,
      "sp": [
        10,
        10,
        10,
        10
      ],
      "armour": [
        3,
        3,
        4,
        3
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6
      ],
      "weapons": [
        {
          "name": "Heavy Machine Gun",
          "rof": 4,
          "str": 2,
          "rng": "6/12",
          "acc": "-",
          "perks": "Cold; Flanking",
          "iron": 2
        },
        {
          "name": "Rail Cannon",
          "rof": 1,
          "str": 8,
          "rng": "10/20",
          "acc": "+1 LR",
          "perks": "Armour-Piercing 2",
          "iron": 3
        },
        {
          "name": "Arc Beam Cannon",
          "rof": 3,
          "str": 2,
          "rng": "8/16",
          "acc": "+1 SR",
          "perks": "Sustained Fire; Shock",
          "iron": 3
        },
        {
          "name": "Storm Cannon",
          "rof": 3,
          "str": 4,
          "rng": "8/16",
          "acc": "-",
          "perks": "Hull; Hot; Shock",
          "iron": 2
        }
      ],
      "page": 72
    },
    {
      "id": "hijack",
      "name": "Hijack",
      "faction": "freegear",
      "weight": "Light",
      "speed": 4,
      "exhaust": 2,
      "iron": 10,
      "sp": [
        9,
        7,
        7,
        6
      ],
      "armour": [
        4,
        5,
        5,
        5
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6,
        8
      ],
      "weapons": [
        {
          "name": "Mech Rifle",
          "rof": 1,
          "str": 6,
          "rng": "8/16",
          "acc": "-",
          "perks": "Armour-Piercing 1; Precision",
          "iron": 3
        },
        {
          "name": "Igniter",
          "rof": 3,
          "str": 1,
          "rng": "4/8",
          "acc": "+1 SR",
          "perks": "Incendiary",
          "iron": 2
        },
        {
          "name": "Shredder Saw",
          "rof": 2,
          "str": 4,
          "rng": "1",
          "acc": "+1",
          "perks": "Melee, Rupture",
          "iron": 2
        }
      ],
      "page": 75
    },
    {
      "id": "scraphound",
      "name": "Scraphound",
      "faction": "freegear",
      "weight": "Medium",
      "speed": 4,
      "exhaust": 2,
      "iron": 11,
      "sp": [
        10,
        8,
        8,
        7
      ],
      "armour": [
        4,
        4,
        4,
        5
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6,
        8
      ],
      "weapons": [
        {
          "name": "Sniper Cannon",
          "rof": 1,
          "str": 7,
          "rng": "8/16",
          "acc": "+1 LR",
          "perks": "Armour-Piercing 1; Precision",
          "iron": 3
        },
        {
          "name": "Flame Thrower",
          "rof": 3,
          "str": 2,
          "rng": "4/8",
          "acc": "+1 SR",
          "perks": "Incendiary",
          "iron": 2
        },
        {
          "name": "Ripper Saw",
          "rof": 2,
          "str": 6,
          "rng": "1",
          "acc": "+1",
          "perks": "Melee, Rupture",
          "iron": 3
        }
      ],
      "page": 76
    },
    {
      "id": "defiance",
      "name": "Defiance",
      "faction": "freegear",
      "weight": "Heavy",
      "speed": 3,
      "exhaust": 3,
      "iron": 12,
      "sp": [
        11,
        9,
        9,
        8
      ],
      "armour": [
        3,
        4,
        3,
        4
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6,
        8
      ],
      "weapons": [
        {
          "name": "Rotary Cannon",
          "rof": 5,
          "str": 2,
          "rng": "6/12",
          "acc": "-",
          "perks": "Sustained Fire; Flanking",
          "iron": 3
        },
        {
          "name": "Demolisher Cannon",
          "rof": 2,
          "str": 6,
          "rng": "10/20",
          "acc": "-1 SR",
          "perks": "Explosive 3",
          "iron": 2
        },
        {
          "name": "Cleaver Axe",
          "rof": 2,
          "str": 7,
          "rng": "1",
          "acc": "+1",
          "perks": "Melee",
          "iron": 2
        }
      ],
      "page": 77
    },
    {
      "id": "rampart",
      "name": "Rampart",
      "faction": "freegear",
      "weight": "Colossal",
      "speed": 3,
      "exhaust": 3,
      "iron": 13,
      "sp": [
        12,
        11,
        11,
        10
      ],
      "armour": [
        2,
        3,
        3,
        4
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6,
        8
      ],
      "weapons": [
        {
          "name": "Demolisher Cannon",
          "rof": 2,
          "str": 6,
          "rng": "10/20",
          "acc": "-1 SR",
          "perks": "Explosive 3",
          "iron": 3
        },
        {
          "name": "Rotary Cannon",
          "rof": 5,
          "str": 2,
          "rng": "6/12",
          "acc": "-",
          "perks": "Flanking; Sustained Fire",
          "iron": 3
        },
        {
          "name": "Precision Cannon",
          "rof": 1,
          "str": 7,
          "rng": "8/16",
          "acc": "+1 LR",
          "perks": "Armour-Piercing 2; Precision",
          "iron": 2
        },
        {
          "name": "Annihilation Cannon",
          "rof": 2,
          "str": 6,
          "rng": "12/24",
          "acc": "+1 LR",
          "perks": "Hull",
          "iron": 2
        }
      ],
      "page": 78
    },
    {
      "id": "lancer",
      "name": "Lancer",
      "faction": "nomads",
      "weight": "Medium",
      "speed": 4,
      "exhaust": 3,
      "iron": 9,
      "sp": [
        10,
        9,
        8,
        7
      ],
      "armour": [
        4,
        5,
        4,
        4
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6,
        8
      ],
      "weapons": [
        {
          "name": "Breach Cannon",
          "rof": 2,
          "str": 4,
          "rng": "8/16",
          "acc": "-1 SR",
          "perks": "Bombardment; Explosive 3",
          "iron": 2
        },
        {
          "name": "Flame Thrower",
          "rof": 3,
          "str": 2,
          "rng": "4/8",
          "acc": "+1 SR",
          "perks": "Incendiary",
          "iron": 2
        },
        {
          "name": "Iron Lance",
          "rof": 2,
          "str": 6,
          "rng": "1",
          "acc": "-",
          "perks": "Melee, Armour Piercing 2",
          "iron": 3
        }
      ],
      "page": 81
    },
    {
      "id": "drifter",
      "name": "Drifter",
      "faction": "nomads",
      "weight": "Medium",
      "speed": 3,
      "exhaust": 2,
      "iron": 9,
      "sp": [
        12,
        8,
        8,
        8
      ],
      "armour": [
        3,
        4,
        3,
        5
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        0,
        0,
        2,
        4,
        6
      ],
      "weapons": [
        {
          "name": "Flame Thrower",
          "rof": 3,
          "str": 2,
          "rng": "4/8",
          "acc": "+1 SR",
          "perks": "Incendiary",
          "iron": 2
        },
        {
          "name": "Plasma Torch",
          "rof": 2,
          "str": 3,
          "rng": "6/12",
          "acc": "+1 SR",
          "perks": "Breaching",
          "iron": 2
        },
        {
          "name": "Rapid Assault Cannon",
          "rof": 3,
          "str": 2,
          "rng": "6/12",
          "acc": "+1 SR",
          "perks": "-",
          "iron": 2
        }
      ],
      "page": 82
    },
    {
      "id": "silo",
      "name": "Silo",
      "faction": "nomads",
      "weight": "Light",
      "speed": 4,
      "exhaust": 2,
      "iron": 8,
      "sp": [
        10,
        6,
        8,
        6
      ],
      "armour": [
        4,
        5,
        4,
        5
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6,
        8
      ],
      "weapons": [
        {
          "name": "Mortar",
          "rof": 2,
          "str": 4,
          "rng": "6/12",
          "acc": "-1 SR",
          "perks": "Bombardment; Explosive 3",
          "iron": 3
        },
        {
          "name": "Igniter",
          "rof": 3,
          "str": 1,
          "rng": "4/8",
          "acc": "+1 SR",
          "perks": "Incendiary",
          "iron": 2
        },
        {
          "name": "Wrecking Ball",
          "rof": 1,
          "str": 5,
          "rng": "1",
          "acc": "+1",
          "perks": "Melee, Staggering",
          "iron": 2
        }
      ],
      "page": 83
    },
    {
      "id": "vagabond",
      "name": "Vagabond",
      "faction": "nomads",
      "weight": "Light",
      "speed": 5,
      "exhaust": 2,
      "iron": 8,
      "sp": [
        9,
        7,
        7,
        6
      ],
      "armour": [
        3,
        5,
        5,
        5
      ],
      "heat": [
        null,
        null,
        null,
        null,
        null,
        0,
        2,
        4,
        6,
        8
      ],
      "weapons": [
        {
          "name": "Missile Rack",
          "rof": 3,
          "str": 2,
          "rng": "6/12",
          "acc": "+1 LR",
          "perks": "Explosive 3",
          "iron": 3
        },
        {
          "name": "Arc Thrower",
          "rof": 3,
          "str": 1,
          "rng": "6/12",
          "acc": "+1 SR",
          "perks": "Shock; Sustained Fire",
          "iron": 3
        },
        {
          "name": "Power Loader",
          "rof": 1,
          "str": 5,
          "rng": "1",
          "acc": "-",
          "perks": "Melee, Breaching",
          "iron": 2
        }
      ],
      "page": 84
    }
  ],
  "equipment": [
    {
      "id": 0,
      "name": "Penetrating Rounds",
      "effect": "Choose one ranged weapon. It has the \"Penetrating\" perk.",
      "iron": 2,
      "campaign": false,
      "page": 85
    },
    {
      "id": 1,
      "name": "High Calibre Ammunition",
      "effect": "Choose one ranged weapon on this Rig, it has +1 STR.",
      "iron": 3,
      "campaign": false,
      "page": 85
    },
    {
      "id": 2,
      "name": "Hot Point Ammunition",
      "effect": "When this Rig's heat is equal to or higher than the Heat Threshold, ranged weapons have +1 STR.",
      "iron": 2,
      "campaign": false,
      "page": 85
    },
    {
      "id": 3,
      "name": "Advanced Ammo Storage",
      "effect": "May re-roll any hit rolls for one attack made with a ranged weapon. Discard.",
      "iron": 1,
      "campaign": false,
      "page": 85
    },
    {
      "id": 4,
      "name": "Synchronised Flexor Motors",
      "effect": "If this Rig equips two identical Melee weapons, it may re-roll all failed hit rolls once per attack action.",
      "iron": 2,
      "campaign": false,
      "page": 85
    },
    {
      "id": 5,
      "name": "Extended Barrel",
      "effect": "Choose one ranged weapon on this Rig, add 2\" / 4\" RNG to its SR and LR profile.",
      "iron": 1,
      "campaign": false,
      "page": 85
    },
    {
      "id": 6,
      "name": "Stabilised Weapon Joints",
      "effect": "This Rig may make attack actions within a 180’ firing arc.",
      "iron": 2,
      "campaign": false,
      "page": 85
    },
    {
      "id": 7,
      "name": "Sophisticated Periscopes",
      "effect": "Gain +1 ACC when attacking with weapons targeting enemy Rigs that are in LOS and within 6\".",
      "iron": 1,
      "campaign": false,
      "page": 85
    },
    {
      "id": 8,
      "name": "Arc-Enhanced Targeting System",
      "effect": "Gain +1 ACC when attacking with ranged weapons targeting enemy Rigs that are within LOS and are further than 12\" away.",
      "iron": 1,
      "campaign": false,
      "page": 85
    },
    {
      "id": 9,
      "name": "Thermal Sights",
      "effect": "This Rig has +1 ACC bonus against Rigs whose Heat is above the Heat Threshold.",
      "iron": 2,
      "campaign": false,
      "page": 85
    },
    {
      "id": 10,
      "name": "Flare Launchers",
      "effect": "Fire a bright flare into the sky, marking a location on the battlefield. Until the end of the round, ALL Rigs gain +1 ACC attack rolls against targets within line of sight and 6\" of the flare. Discard.",
      "iron": 2,
      "campaign": false,
      "page": 85
    },
    {
      "id": 11,
      "name": "Artillery Spotting Module",
      "effect": "This Rig may use an action [1] to call in an artillery bombardment anywhere within line of sight. Roll a D12 for each Rig within 6\" of the location. On a 9+, a Rig suffers 1 STR 8 hit. Roll for location. Discard.",
      "iron": 2,
      "campaign": false,
      "page": 85
    },
    {
      "id": 12,
      "name": "Reinforced Iron Plating",
      "effect": "This Rig has +1 to armour rolls against front facing attacks.",
      "iron": 3,
      "campaign": false,
      "page": 86
    },
    {
      "id": 13,
      "name": "Ablative Armour Plating",
      "effect": "After this Rig receives damage from an attack, ignore that damage. Discard.",
      "iron": 2,
      "campaign": false,
      "page": 86
    },
    {
      "id": 14,
      "name": "Impact Roll Cage",
      "effect": "This Rig has +1 to armour rolls when targeted by melee and ram attacks.",
      "iron": 1,
      "campaign": false,
      "page": 86
    },
    {
      "id": 15,
      "name": "Reinforced Leg Joints",
      "effect": "The Rig gains immunity to Slowed and Immobilised.",
      "iron": 2,
      "campaign": false,
      "page": 86
    },
    {
      "id": 16,
      "name": "Concentrated Fuel",
      "effect": "This Rig has +2\" to SPD. If the Rig suffers a Fuel Line Rupture, take 2 additional damage to the engine.",
      "iron": 2,
      "campaign": false,
      "page": 86
    },
    {
      "id": 17,
      "name": "Heat Conductive Lubricants",
      "effect": "If this Rig's engine heat is above the threshold, it has +2 SPD.",
      "iron": 1,
      "campaign": false,
      "page": 86
    },
    {
      "id": 18,
      "name": "Hydraulic Anchor Spikes",
      "effect": "If this Rig remained stationary and did not move during its turn, it has +1 ACC. If it fires with this bonus, it may not move until the end of the round.",
      "iron": 2,
      "campaign": false,
      "page": 86
    },
    {
      "id": 19,
      "name": "Extinguisher",
      "effect": "When making a Heat Threshold roll, first roll a D12. On a 4+, ignore the Heat Threshold roll. Discard.",
      "iron": 1,
      "campaign": false,
      "page": 86
    },
    {
      "id": 20,
      "name": "Exotic Engine Coolant",
      "effect": "Reduce final results of Heat Threshold Rolls by 1.",
      "iron": 1,
      "campaign": false,
      "page": 86
    },
    {
      "id": 21,
      "name": "Thermal Purge Vent",
      "effect": "If this Rig remained stationary and did not move during its turn, reduce Engine Heat by 2 in the Maintenance Phase.",
      "iron": 2,
      "campaign": false,
      "page": 86
    },
    {
      "id": 22,
      "name": "Supplementary Heat Vent",
      "effect": "When this Rig's heat is higher than the Heat Threshold, it may use a Vent Heat Action [0] once per activation. This Rig's next attack costs [-1] but suffers -1 ACC.",
      "iron": 1,
      "campaign": false,
      "page": 86
    },
    {
      "id": 23,
      "name": "External Fuel Tanks",
      "effect": "The next action does not generate any heat. Discard.",
      "iron": 1,
      "campaign": false,
      "page": 86
    },
    {
      "id": 24,
      "name": "Smoke Dispensers",
      "effect": "Use an action to deploy a smokescreen [1]. ALL Rigs within 6\" of this Rig are considered to be in Light Cover until the end of the round.",
      "iron": 2,
      "campaign": false,
      "page": 87
    },
    {
      "id": 25,
      "name": "Reflexive Sensor Unit",
      "effect": "At any time, place any preparation token next to any one friendly Rig without generating heat. Discard.",
      "iron": 1,
      "campaign": false,
      "page": 87
    },
    {
      "id": 26,
      "name": "Manual Override Panel",
      "effect": "Re-roll any dice, at the cost of generating 1 heat per dice re-rolled. Dice re- rolled this way can only be re-rolled once.",
      "iron": 1,
      "campaign": false,
      "page": 87
    },
    {
      "id": 27,
      "name": "Grapple Winch Unit",
      "effect": "Make an attack action with RNG 8” and ACC +1 for [0]. If the target is equal to or lighter in weight class, move the target Rig directly towards this Rig by D6+2”. If the target is of heavier weight class, move toward the target Rig instead. A Rig stops being pulled if it collides with terrain. Discard.",
      "iron": 1,
      "campaign": false,
      "page": 87
    },
    {
      "id": 28,
      "name": "Radio Scrambler",
      "effect": "instead. A Rig stops being pulled if it collides with terrain. Discard. Choose an enemy Rig within 18\". Each controlling player rolls a D12. If the target Rig rolls lower, that Rig is Stalled. Discard.",
      "iron": 1,
      "campaign": false,
      "page": 87
    },
    {
      "id": 29,
      "name": "Ramming Frame",
      "effect": "This Rig may use the \"Ram\" action while suffering only half damage to itself, rounded up.",
      "iron": 2,
      "campaign": false,
      "page": 87
    },
    {
      "id": 30,
      "name": "Unstable Power Source",
      "effect": "As an action, the Rig may choose to self destruct. It is destroyed and automatically explodes.",
      "iron": 1,
      "campaign": false,
      "page": 87
    },
    {
      "id": 31,
      "name": "Emergency Repair Kit",
      "effect": "Restore 3 Structure Points to any damaged part of the Rig. Discard.",
      "iron": 2,
      "campaign": false,
      "page": 87
    },
    {
      "id": 32,
      "name": "Battlefield Recovery Rig",
      "effect": "[CAMPAIGN ONLY] When purchased in the campaign, the Recovery Rig allows the player to roll on the salvage table D3 times in the Salvage the Battlefield step in the Aftermath Phase.",
      "iron": 5,
      "campaign": true,
      "page": 87
    },
    {
      "id": 33,
      "name": "Iron Market Parts Cache",
      "effect": "[CAMPAIGN ONLY] Once per Aftermath Phase, when repairing a Rig, ignore one permanent negative trait gained from repairs.",
      "iron": 3,
      "campaign": true,
      "page": 87
    },
    {
      "id": 34,
      "name": "Contracted Recovery Crew",
      "effect": "[CAMPAIGN ONLY] When checking if a destroyed Rig is lost, add +2 to the recovery roll. This equipment does not function if the Rig exploded.",
      "iron": 3,
      "campaign": true,
      "page": 87
    },
    {
      "id": 35,
      "name": "Experimental Load-Bearing Frame",
      "effect": "[CAMPAIGN ONLY] Choose a Rig in your Squadron, it gains +1 Iron capacity.",
      "iron": 3,
      "campaign": true,
      "page": 87
    }
  ]
};

// Companion interface and state. No external dependencies.
// Profiles use the printed values: apply combat modifiers at the table.
DATA.equipment[28].effect = 'Choose an enemy Rig within 18". Each controlling player rolls a D12. If the target Rig rolls lower, that Rig is Stalled. Discard.';
const FACTIONS = [
  ['krim','Krim Corporation'],['nox','Nox Industries'],['triton','Triton Engineering'],
  ['arcus','Arcus Technologies'],['freegear','Freegear Coalition'],['nomads','Mercenary Nomads']
];
const PILOTS = [ {name:'Rookie',aim:6,iron:0},{name:'Experienced',aim:5,iron:1},{name:'Veteran',aim:4,iron:3},{name:'Elite',aim:3,iron:5} ];
const PARTS = ['Hull','Arms','Legs','Engine'];
const WEIGHTS = {Light:'Light',Medium:'Medium',Heavy:'Heavy',Colossal:'Colossal'};
const SLOTS = ['Left weapon','Right weapon','Hull-mounted weapon'];
const CONDITIONS = {Stalled:'−2 Actions during the next activation.',Shocked:'−1 ACC and −1 SPD (minimum SPD 1).',Slowed:'−2 SPD (minimum 1).',Immobilised:'Cannot Move; may Pivot.'};
const FORMATIONS = [
 ['Custom',null],['Skirmish · Sword',[2,1,0,0]],['Skirmish · Mace',[1,1,1,0]],['Skirmish · Dagger',[4,0,0,0]],
 ['Operation · Claymore',[1,1,1,1]],['Operation · Broadsword',[3,1,0,1]],['Operation · Lance',[1,2,2,0]],['Operation · Morningstar',[1,3,1,0]],['Operation · Axe',[0,1,3,0]],
 ['Warfront · Battleaxe',[0,2,2,2]],['Warfront · Greatsword',[4,2,1,1]],['Warfront · Warhammer',[0,2,3,1]],['Warfront · Scythe',[3,0,2,2]],['Warfront · Maul',[0,2,4,0]]
];
const HEAT_RESULTS = [ ['1–5','Nothing happens.'],['6–7','2 damage to the Hull; Stalled.'],['8–9','2 damage to the Legs; Slowed.'],['10–11','2 damage to the Arms; Shocked.'],['12–13','Roll for impact location: that component becomes Ruptured.'],['14–15','1 damage to each component.'],['16–17','Return Heat to the first space; skip the next activation.'],['18','1 damage to each component; roll again.'],['19','Engine reduced to 0 with Catastrophic Damage. If already Catastrophically Damaged: Disabled.'],['20+','All components suffer Catastrophic Damage. Heat can no longer decrease.'] ];

// Common weapons: all 16 printed profiles from Rulebook p. 48.
// Append to each existing chassis list so saved numeric weapon indices remain valid.
const COMMON_WEAPONS={
 Light:[
  {name:'Light Melee Weapon',rof:1,str:4,rng:'1',acc:'-',perks:'-',iron:0,melee:true},
  {name:'Auto Gun',rof:3,str:1,rng:'4/8',acc:'-',perks:'Cold; Flanking',iron:1},
  {name:'Light Cannon',rof:1,str:5,rng:'6/12',acc:'-',perks:'Armour Piercing 1',iron:2},
  {name:'Rivet Gun',rof:2,str:3,rng:'6/12',acc:'-',perks:'Sustained Fire',iron:2}
 ],
 Medium:[
  {name:'Medium Melee Weapon',rof:2,str:4,rng:'1',acc:'-',perks:'-',iron:0,melee:true},
  {name:'Machine Gun',rof:3,str:1,rng:'6/12',acc:'-',perks:'Cold; Flanking',iron:1},
  {name:'Heavy Cannon',rof:1,str:6,rng:'6/12',acc:'-',perks:'Armour Piercing 1',iron:2},
  {name:'Rivet Rifle',rof:3,str:3,rng:'6/12',acc:'-',perks:'Sustained Fire',iron:3}
 ],
 Heavy:[
  {name:'Heavy Melee Weapon',rof:2,str:5,rng:'1',acc:'-',perks:'-',iron:0,melee:true},
  {name:'Heavy Machine Gun',rof:4,str:1,rng:'6/12',acc:'-',perks:'Cold; Flanking',iron:1},
  {name:'Siege Bombard',rof:2,str:5,rng:'10/20',acc:'-1 SR',perks:'Bombardment, Explosive 3',iron:3},
  {name:'Precision Cannon',rof:1,str:7,rng:'8/16',acc:'+1 LR',perks:'Armour Piercing 2, Precision',iron:2}
 ],
 Colossal:[
  {name:'Demolisher Mortar',rof:1,str:8,rng:'8/16',acc:'-1 SR',perks:'Hull, Bombardment, Explosive 5',iron:3},
  {name:'Artillery Cannon',rof:2,str:6,rng:'12/24',acc:'-1 SR',perks:'Hull, Armour Piercing 2',iron:3},
  {name:'Siege Missile Battery',rof:4,str:3,rng:'8/16',acc:'+1 LR',perks:'Hull, Explosive 2',iron:2},
  {name:'Siege Howitzer',rof:2,str:5,rng:'10/20',acc:'-1 SR',perks:'Explosive 3, Bombardment',iron:2}
 ]
};
for(const rig of DATA.rigs){
 for(const weapon of rig.weapons){weapon.group=rig.faction==='nomads'?'nomad':'faction';weapon.page=rig.page;}
 rig.weapons.push(...COMMON_WEAPONS[rig.weight].map(w=>({...w,group:'common',page:48})));
}

const KEY='ooi-companion-v1';
const clone=x=>JSON.parse(JSON.stringify(x));
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid=()=>globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
const rigOf=r=>DATA.rigs.find(x=>x.id===r.rigId);
const isMelee=w=>w.melee===true||/Melee/i.test(w.perks);
const isHull=w=>/\bHull\b/.test(w.perks);
const pilotOf=r=>PILOTS[r.pilot];
function newConfig(rig){ return {id:uid(),rigId:rig.id,name:rig.name,ironcladName:'',pilot:0,weapons:[null,null,null],equipment:[],targets:{}}; }
function cost(r){const rig=rigOf(r);return pilotOf(r).iron+r.weapons.reduce((v,w)=>v+(w===null?0:rig.weapons[w].iron),0)+r.equipment.reduce((v,e)=>v+DATA.equipment[e].iron,0);}
function isCampaign(){return state.mode==='campaign';}
function baseIronCapacity(r){
 const sources=state.squad.filter(x=>x.id!==r.id);
 sources.push(r);
 return rigOf(r).iron+sources.filter(x=>x.equipment.includes(35)&&(x.capacityTarget||x.id)===r.id).length;
}
function startingSquadronErrors(){
 const errors=[...formationErrors()];
 for(const r of state.squad){for(const message of configErrors(r))errors.push(`${r.name}: ${message}`);}
 if(isCampaign()){
  if(![1,2,3].includes(state.formation))errors.push('A starting campaign squadron must use a Skirmish formation.');
  const total=state.squad.reduce((n,r)=>n+cost(r),0);
  if(total>15)errors.push(`Starting Iron budget exceeded by ${total-15}.`);
  for(const r of state.squad){
   if(rigOf(r).faction!==state.faction||rigOf(r).faction==='nomads')errors.push(`${r.name}: starting Rigs must belong to the selected main faction. Mercenary hiring is an Aftermath option.`);
   if(r.pilot>1)errors.push(`${r.name}: starting Ironclads must be Rookie or Experienced.`);
  }
 }
 for(const r of state.squad){if(r.equipment.includes(35)&&r.capacityTarget&&!state.squad.some(x=>x.id===r.capacityTarget))errors.push(`${r.name}: select an existing Rig for the Experimental Load-Bearing Frame.`);}
 return errors;
}
function modePanel(){
 const spent=state.squad.reduce((n,r)=>n+cost(r),0);
 return `<section class="panel mode-panel"><h3>${isCampaign()?'Campaign squadron':'Normal game squadron'}</h3>${isCampaign()?`<div><span class="eyebrow">CAMPAIGN START · RULEBOOK P. 101</span><strong class="${spent>15?'danger':''}">${spent} / 15 Iron allocated</strong><p class="small">One main faction · Skirmish formation · Rookie or Experienced Ironclads.</p><p class="small">Create the initial roster, then open Campaign to start the season and manage progression, repairs and the Iron Market.</p></div>`:'<p class="small">Build a standard squadron using each Rig’s Iron Capacity.</p>'}</section>`;
}
function configErrors(r){
 const rig=rigOf(r),errors=[];
 if(!r.name.trim()) errors.push('Enter a name for the Rig.');
 if(r.weapons.filter(x=>x!==null).length<2) errors.push('At least two weapons are required.');
 r.weapons.forEach((w,i)=>{if(w===null)return; if(!rig.weapons[w])errors.push('Invalid weapon.');else if(i<2&&isHull(rig.weapons[w]))errors.push('Hull weapons can only be fitted to the Hull slot.');else if(i===2&&(rig.weight!=='Colossal'||!isHull(rig.weapons[w])))errors.push('The Hull slot requires a Colossal Rig and a weapon with the Hull perk.');});
 if(cost(r)>ironCapacity(r)) errors.push(`Iron Capacity exceeded by ${cost(r)-ironCapacity(r)}.`);
 if(isCampaign()&&!campaignStarted()&&r.pilot>1)errors.push('Starting Ironclads must be Rookie or Experienced.');
 if(!isCampaign()&&r.equipment.some(id=>DATA.equipment[id].campaign))errors.push('Campaign-only Equipment is not available in a standard battle.');
 const hullWeapons=r.weapons.filter(w=>w!==null&&rig.weapons[w]&&isHull(rig.weapons[w]));if(new Set(hullWeapons.map(w=>rig.weapons[w].name)).size!==hullWeapons.length)errors.push('Each Hull weapon may only be equipped once (Rulebook p. 46).');
 if(new Set(r.equipment).size!==r.equipment.length)errors.push('Each Equipment item can only be selected once.');
 for(const id of r.equipment){if([0,1,5].includes(id)){const slot=r.targets[id];if(slot===undefined||r.weapons[slot]===null||isMelee(rig.weapons[r.weapons[slot]]))errors.push(`Assign ${DATA.equipment[id].name} to a ranged weapon.`);}}
 return errors;
}
function freshBattle(r){const rig=rigOf(r);return {carryingObjective:false,rerollsUsed:0,actionHeat:1,actionHistory:[],sp:[...rig.sp],parts:['ok','ok','ok','ok'],ruptured:[false,false,false,false],heat:0,actions:0,activated:false,conditions:[],weaponState:['ready','ready','ready'],spent:[],notes:''};}
function formationErrors(){const f=FORMATIONS[state.formation][1];if(!f)return [];const counts=Object.keys(WEIGHTS).map(w=>state.squad.filter(r=>rigOf(r).weight===w).length);return counts.flatMap((n,i)=>n===f[i]?[]:[`${WEIGHTS[Object.keys(WEIGHTS)[i]]}: ${n}/${f[i]}`]);}
let menuScreen='home';
let workspaces={activeId:uid(),entries:[]};
let state={version:1,factionPending:true,mode:'standard',name:'My squadron',faction:'krim',formation:0,squad:[],round:1,view:'build',saved:[]};
let selected=DATA.rigs[0].id, draft=newConfig(DATA.rigs[0]), editing=null, storageOK=true, noticeTimer;
function persist(){try{localStorage.setItem(KEY,JSON.stringify({...state,workspaces}));storageOK=true;}catch{storageOK=false;}const el=document.getElementById('save-state');if(el){el.textContent=storageOK?'Automatically saved in this browser':'Saving unavailable: keep this page open';el.className=storageOK?'save-state':'danger small';}}
function notify(t){const el=document.getElementById('notice');el.textContent=t;el.classList.add('visible');clearTimeout(noticeTimer);noticeTimer=setTimeout(()=>el.classList.remove('visible'),4000);}
function factionName(id){return FACTIONS.find(f=>f[0]===id)?.[1]||id;}
function options(list,value){return list.map(([id,name])=>`<option value="${esc(id)}" ${String(id)===String(value)?'selected':''}>${esc(name)}</option>`).join('');}
function stats(items){return `<div class="stat-grid">${items.map(([v,l])=>`<div class="stat"><strong>${esc(v)}</strong><span>${esc(l)}</span></div>`).join('')}</div>`;}
const EQUIPMENT_CATEGORIES=['A · Attacks, accuracy & range','B · Protection, movement & Heat','C · Battlefield tricks, reactions & campaign'];
function equipmentBuilder(rig){return EQUIPMENT_CATEGORIES.map((title,category)=>`<details class="equipment-category"><summary>${title}</summary>${DATA.equipment.filter(e=>Math.floor(e.id/12)===category&&(isCampaign()||!e.campaign)).map(e=>`<div class="equipment-row"><label><input type="checkbox" data-field="equipment" data-value="${e.id}" ${draft.equipment.includes(e.id)?'checked':''}><strong>${esc(e.name)}</strong><span class="badge">${e.iron} Iron</span></label><p>${esc(e.effect)}</p>${e.campaign?'<span class="badge">CAMPAIGN</span>':''}${e.id===35&&draft.equipment.includes(35)?`<select aria-label="Rig receiving extra Iron Capacity" data-field="capacity-target">${options([[draft.id,`${draft.name} (this Rig)`],...state.squad.filter(x=>x.id!==draft.id).map(x=>[x.id,x.name])],draft.capacityTarget||draft.id)}</select>`:''}${draft.equipment.includes(e.id)&&[0,1,5].includes(e.id)?`<select aria-label="Weapon for ${esc(e.name)}" data-field="target" data-value="${e.id}">${options([['','Assign to a ranged weapon'],...draft.weapons.flatMap((w,i)=>w!==null&&!isMelee(rig.weapons[w])?[[i,`${SLOTS[i]}: ${rig.weapons[w].name}`]]:[])],draft.targets[e.id]??'')}</select>`:''}</div>`).join('')}</details>`).join('');}
function weaponInfo(w){return `<div class="weapon-info"><b>ROF ${w.rof} · STR ${w.str} · RNG ${esc(w.rng)}″ · ACC ${esc(w.acc)}</b><br>${esc(w.perks)}${w.melee?' · Melee':''}<br><span class="badge">${weaponGroupName(w)} · p. ${w.page}</span></div>`;}
const FACTION_LORE={"krim": "An aristocratic power built on fear, discipline and conquest. Krim fields durable, efficient war machines to expand its territory and impose obedience across the Smoglands.", "nox": "A vast industrial power that answers catastrophe with more production. Its armoured, heavily armed Rigs embody the belief that relentless industry is humanity’s path to survival.", "triton": "Survivors of the offshore oil platforms, defending the last great wells. Bound by tradition and practical necessity, Triton turns diving machinery and industrial heritage into weapons.", "arcus": "Isolated scientific enclaves protecting the arc technology others covet. Their advanced reactors and precise machines express a conviction that knowledge can rebuild the future.", "freegear": "A coalition of rebels and deserters fighting corporate rule. They build Rigs from salvaged machinery, raid supply lines and use ingenuity to give the oppressed a chance at freedom.", "nomads": "Independent mercenary crews supplied by the smaller foundries and manufacturers that survived the rise of the great Corporations. Nomad Ironclads buy, barter and salvage their machines, keeping them fighting through constant repair. Their equipment may lack standardisation, but their experienced pilots are formidable opponents, serving shifting contracts across the Smoglands."};
function factionChoiceView(){const factions=FACTIONS.filter(([id])=>!isCampaign()||id!=='nomads');return `<section class="faction-choice"><h2>Choose your faction</h2><p class="small">Swipe through the factions or use the arrows. Choose a faction to start building your squadron.</p><div class="row"><button data-faction-scroll="-1" aria-label="Previous faction">←</button><button data-faction-scroll="1" aria-label="Next faction">→</button></div><div class="faction-carousel" aria-label="Factions" tabindex="0">${factions.map(([id,name])=>{const rigs=DATA.rigs.filter(r=>r.faction===id);return `<article class="panel faction-slide"><div class="faction-rig-gallery" data-faction-gallery="${id}">${rigs.map((rig,i)=>`<img class="${i===0?'is-visible':''}" src="images/rigs/${rig.id}.webp" alt="${esc(name)} · ${esc(rig.name)}" width="893" height="380" decoding="async" aria-hidden="${i!==0}">`).join('')}</div><h2>${esc(name)}</h2><p class="faction-lore">${esc(FACTION_LORE[id])}</p><button class="primary full" data-choose-faction="${id}">Choose ${esc(name)}</button></article>`;}).join('')}</div></section>`;}
let factionGalleryTimer=null;
function startFactionGalleries(){
 clearInterval(factionGalleryTimer);factionGalleryTimer=null;
 const galleries=[...document.querySelectorAll('[data-faction-gallery]')];
 if(!galleries.length||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 factionGalleryTimer=setInterval(()=>{
  if(document.hidden)return;
  for(const gallery of galleries){
   const bounds=gallery.getBoundingClientRect();
   if(bounds.right<=0||bounds.left>=window.innerWidth||bounds.bottom<=0||bounds.top>=window.innerHeight)continue;
   const imgs=[...gallery.querySelectorAll('img')];if(imgs.length<2)continue;
   const index=imgs.findIndex(img=>img.classList.contains('is-visible')),next=(index+1)%imgs.length;
   if(!imgs[next].complete||!imgs[next].naturalWidth)continue;
   imgs.forEach((img,i)=>{img.classList.toggle('is-visible',i===next);img.setAttribute('aria-hidden',String(i!==next));});
  }
 },4500);
}
function chooseFaction(id){if(!state.factionPending||!FACTIONS.some(([f])=>f===id)||(isCampaign()&&id==='nomads'))return;state.faction=id;state.factionPending=false;resetDraft();render();}
function baseBuildView(){
 if(state.factionPending)return factionChoiceView();
 const rig=rigOf(draft);const available=DATA.rigs.filter(r=>r.faction===state.faction||(!isCampaign()&&r.faction==='nomads'));
 return `<div class="toolbar"><div><h2>Your squadron</h2><p class="small" id="save-state">${storageOK?'Automatically saved in this browser':'Saving unavailable'}</p></div><input aria-label="Squadron name" maxlength="60" data-field="squad-name" value="${esc(state.name)}"></div>
 <aside class="panel squad-panel"><div class="section-top"><h2>Squadron</h2><span class="badge">${state.squad.length} RIG</span></div><label class="field"><span>Formation (Rulebook p. 89)</span><select data-field="formation">${options(FORMATIONS.flatMap((f,i)=>!isCampaign()||[1,2,3].includes(i)?[[i,f[0]]]:[]),state.formation)}</select></label><button data-formation-random>Random formation</button>${state.formation===0?`<p class="small">Custom composition: agree with your opponent.</p>${squadronErrors().length?`<p class="warning">${squadronErrors().map(esc).join('<br>')}</p>`:''}`:`<p class="${squadronErrors().length?'warning':'good small'}">${squadronErrors().length?squadronErrors().map(esc).join(' · '):'Roster ready'}</p>`}
 <div class="squad-list">${state.squad.length?state.squad.map(r=>`<article class="squad-entry"><div class="section-top"><h3>${esc(r.name)}</h3><span class="badge">${cost(r)}/${ironCapacity(r)}</span></div><p class="small">${rigOf(r).name} · ${pilotOf(r).name}<br>${r.weapons.filter(w=>w!==null).map(w=>esc(rigOf(r).weapons[w].name)).join(' / ')}</p><div class="row"><button data-action="edit" data-id="${r.id}">Edit</button><button data-action="duplicate" data-id="${r.id}">Duplicate</button><button class="danger" data-action="remove" data-id="${r.id}">Remove</button></div></article>`).join(''):'<div class="empty"><strong>Your squadron is empty</strong>Select a Rig, an Ironclad and at least two weapons.</div>'}</div>
 <div class="stack"><button class="primary" data-action="confirm" ${!state.squad.length||squadronErrors().length?'disabled':''}>${isCampaign()?'Review and start campaign':'Continue to game setup'}</button><button data-action="save" ${!state.squad.length?'disabled':''}>Save named squadron</button><button data-action="new">New squadron</button></div>
 <details><summary>Saved squadrons (${modeSaves().length})</summary>${modeSaves().length?`<select class="saved-select" id="saved-choice" aria-label="Saved squadron">${options(modeSaves().map(s=>[s.id,`${s.name} · ${s.mode==='campaign'?'Campaign':'Standard'} · ${s.squad.length} rig`]),'')}</select><div class="row"><button data-action="load">Load</button><button data-action="delete-save" class="danger">Delete save</button></div>`:'<p class="small">Saved squadrons stay in this browser.</p>'}</details>
 <details><summary>How to use this version</summary><p class="small">Configure your squadron and confirm to open the battle sheets. Structure Points, Heat, Conditions, reload status and Actions are manual trackers: update them after resolving effects at the table. Combat profiles show base values; apply Equipment, Condition and terrain modifiers separately. Experimental Load-Bearing Frame is included in the selected Rig’s Iron Capacity.</p><p class="small">Your current squadron and battle are saved automatically. Saves do not sync between devices and will be lost if you clear your browser data.</p></details>
 </aside>${modePanel()}<div class="build-layout build-stacked"><section class="panel"><span class="eyebrow">01 / ${esc(FACTIONS.find(f=>f[0]===state.faction)?.[1]||state.faction)} · RIG</span>${!state.squad.length?'<button data-change-faction>Change faction</button>':''}
 ${rigCatalog(available)}
 <div class="config"><hr class="divider"><span class="eyebrow">02 / LOADOUT</span><div class="section-top"><h2>${editing?'Edit':'Configure'} ${rig.name}</h2><span class="badge">p. ${rig.page}</span></div>
 ${stats([[rig.speed+'″','Speed'],[rig.exhaust,'Exhaust'],[ironCapacity(draft),'Iron Capacity'],[WEIGHTS[rig.weight],'Weight class']])}
 <label class="field"><span>Rig name</span><input data-field="rig-name" maxlength="45" value="${esc(draft.name)}"></label>
 <label class="field"><span>Ironclad grade</span><select data-field="pilot">${options(PILOTS.flatMap((p,i)=>isCampaign()&&i>1&&draft.pilot!==i?[]:[[i,`${p.name} · Aim ${p.aim}+ · ${p.iron} Iron`]]),draft.pilot)}</select></label>
 <label class="field"><span>Ironclad name</span><input data-field="ironclad-name" maxlength="60" placeholder="Name your Ironclad" value="${esc(draft.campaign?.pilotName??draft.ironcladName??'')}"></label>
 <div class="weapon-grid">${[0,1,...(rig.weight==='Colossal'?[2]:[])].map(slot=>`<div><label class="field"><span>${SLOTS[slot]}${slot===2?' · Hull':''}</span><select data-field="weapon" data-slot="${slot}">${weaponOptions(rig,draft.weapons[slot]??'',slot)}</select></label>${draft.weapons[slot]===null?'':weaponInfo(rig.weapons[draft.weapons[slot]])}</div>`).join('')}</div>
 <details id="equipment-details"><summary>Equipment <span class="badge">${draft.equipment.length} selected</span></summary><p class="small">${isCampaign()?'Campaign Equipment is available; apply its effects at the stage specified in the rules.':'Campaign-only Equipment is not available in standard battles.'}</p><div class="equipment-list">${equipmentBuilder(rig)}</div></details>
 <div class="budget ${cost(draft)>ironCapacity(draft)?'over':''}"><strong>IRON ${cost(draft)} / ${ironCapacity(draft)}</strong><span>${ironCapacity(draft)-cost(draft)} available</span></div>
 <div class="errors">${configErrors(draft).map(esc).join('<br>')}</div><button class="primary full" data-action="add" ${configErrors(draft).length?'disabled':''}>${editing?'Save changes':'Add to squadron'}</button>${editing?'<button class="full" data-action="cancel-edit" style="margin-top:8px">Cancel edit</button>':''}
 </div></section>
</div>`;
}
function partHint(b,i){
 if(b.parts[i]==='ok')return '';
 const disabled=b.parts[i]==='disabled';
 return [disabled?'Permanently Stalled and Shocked.':'Permanently Stalled; Hull weapons cannot be used.',disabled?'Both weapons cannot be used.':'Roll D12: 1–6 Left Weapon, 7–12 Right Weapon can no longer be used.',disabled?'Permanently Immobilised; may Pivot.':'Apply Slowed.',disabled?'Heat cannot decrease.':'Raise Heat to the Heat Threshold if below it; Heat can no longer fall below the threshold.'][i];
}
// Action history stores actual Heat added, including clamping at maximum Heat.
function permanentConditions(b){const c=[];if(b.parts[0]!=='ok')c.push('Stalled');if(b.parts[0]==='disabled')c.push('Shocked');if(b.parts[2]==='catastrophic')c.push('Slowed');if(b.parts[2]==='disabled')c.push('Immobilised');return c;}
function activeConditions(r){return [...new Set([...(r.battle.conditions||[]),...permanentConditions(r.battle)])];}
function shutDownRig(r){const b=r.battle;if(b.exploded||b.activated||b.actions||b.skipActivation||actionLimit(r)===0||state.maintenance)return;
 const before=battleSnapshot();const floor=b.parts[3]==='catastrophic'?Math.max(0,effectiveRig(r).heat.findIndex(h=>h!==null)):0;
 if(b.parts[3]!=='disabled'&&!b.heatLocked)b.heat=Math.min(b.heat,floor);
 toggleActivation(r);b.shutDown=true;b.actionHistory=[{action:1,label:'Shut Down · all Actions forfeited',cost:0,heat:0}];recordBattle(before);render();}
function markExploded(r){if(r.battle.exploded||state.maintenance||r.battle.parts.filter(p=>p==='disabled').length<2)return;if(!confirm('Has this Rig exploded? Lock its battle sheet and mark it exploded for Aftermath. Resolve blast damage at the table.'))return;const before=battleSnapshot();r.battle.exploded=true;r.battle.activated=true;recordBattle(before);render();}
function actionLimit(r){return r.battle.exploded||r.battle.shutDown||r.battle.skipActivation||r.battle.parts.filter(p=>p==='disabled').length>=2?0:activeConditions(r).includes('Stalled')?3:5;}
function battleProfile(r){const rig=effectiveRig(r),c=activeConditions(r);rig.speed=Math.max(1,rig.speed-(c.includes('Shocked')?1:0)-(c.includes('Slowed')?2:0));rig.immobilised=c.includes('Immobilised');rig.conditionACC=c.includes('Shocked')?-1:0;return rig;}
function namedActionHeat(r,name,slot){const weapon=effectiveRig(r).weapons[r.weapons[slot]];return name==='Fire'&&weapon&&/\bCold\b/i.test(weapon.perks)?0:1;}
function syncComponentDamage(r,old){const b=r.battle;b.conditions=[...new Set([...b.conditions,...permanentConditions(b)])];
 if(b.parts[0]!=='ok')b.weaponState[2]='disabled';
 if(b.parts[1]==='disabled'){b.weaponState[0]='disabled';b.weaponState[1]='disabled';b.pendingArm=false;}
 else if(b.parts[1]==='catastrophic'&&old?.parts[1]==='ok')b.pendingArm=true;
 else if(b.parts[1]==='ok')b.pendingArm=false;
 if(b.parts[3]==='catastrophic')b.heat=Math.max(b.heat,effectiveRig(r).heat.findIndex(x=>x!==null));
}
function pendingArmView(r){return r.battle.pendingArm?`<section class="panel damage-yellow"><strong>Damaged Arms · resolve weapon loss</strong><p class="small">D12: 1–6 left weapon; 7–12 right weapon. Resolve before attacking.</p><div class="row"><input type="number" min="1" max="12" aria-label="Damaged Arms D12" id="arm-loss-${r.id}"><button data-arm-loss="${r.id}">Apply D12</button><button data-arm-loss="${r.id}" data-random="yes">Roll D12 & apply</button></div></section>`:'';}
function actionHistoryView(r){const entries=(r.battle.actionHistory||[]).filter(e=>e.label);return `<div class="action-history" aria-label="Actions performed">${entries.length?`<ol>${entries.map(e=>`<li value="${e.action}"><span>${esc(e.label)}</span><small>+${e.cost??e.heat} Heat${e.cost!==undefined&&e.heat<e.cost?' · tracker +'+e.heat+' (maximum reached)':''}</small></li>`).join('')}</ol>`:'<p class="small">Actions selected below will appear here.</p>'}</div>`;}
function spendAction(r,delta,heatCost=null,label=null){
 const b=r.battle;if(b.exploded||b.shutDown||b.skipActivation)return;
 b.actionHistory??=[];
 if(delta>0&&b.actions<actionLimit(r)&&!b.activated){
  b.activationConditions??=[...b.conditions];
  const previous=b.heat,cost=Math.max(0,Math.min(9,Number(heatCost??1)||0));
  b.heat=Math.min(effectiveRig(r).heat.length-1,b.heat+cost);
  b.actionHistory.push({action:b.actions+1,heat:b.heat-previous,cost,label});b.actions++;
 }else if(delta<0&&b.actions>0){
  const last=b.actionHistory.at(-1);
  if(last?.action===b.actions){b.heat=Math.max(0,b.heat-last.heat);b.actionHistory.pop();}
  b.actions--;
 }
}
function toggleActivation(r){
 const b=r.battle;if(rigUnusable(r)||b.shutDown)return;if(b.skipActivation){notify('This Rig must skip this activation after Emergency Shutdown.');return;}b.activated=!b.activated;
 if(b.activated){b.expiredConditions=[...(b.activationConditions||b.conditions)].filter(c=>!permanentConditions(b).includes(c));b.conditions=b.conditions.filter(c=>!b.expiredConditions.includes(c));b.activationConditions=null;b.weaponState=b.weaponState.map(w=>w==='reload'?'ready':w);}else{b.conditions=[...new Set([...b.conditions,...(b.expiredConditions||[])])];b.expiredConditions=[];}
}
function pilotBattleHeader(r){
 const p=pilotOf(r);
 return `<section class="pilot-battle-header"><strong>${esc((isCampaign()?r.campaign?.pilotName:r.ironcladName)||'Ironclad')}</strong><span class="badge">${p.name} · Aim ${p.aim}+ · Aim target modifier ${p.aim-6}</span>${campaignRigInfo(r)}</section>`;
}
function finishNormalGame(){
 if(isCampaign())return;
 if(!confirm('Finish this normal game? All Rigs will be restored, with fresh trackers. Squadron names, Ironclads and loadouts will be kept.'))return;
 for(const r of state.squad)r.battle=freshBattle(r);
 state.round=1;state.engagementEnded=false;state.maintenance=null;state.view='build';menuScreen='normal';battleUndo.delete(workspaces.activeId);render();notify('Game finished. Your squadron is restored and ready to reuse.');
}
const ENGAGEMENTS=[
 ['iron-clash','Iron Clash',0,false,'Ends early when only one Squadron remains.'],
 ['high-value-target','High Value Target',0,false,'Ends early when only one High Value Target remains.'],
 ['point-of-control','Point of Control',0,false,'Score objectives at the end of each round.'],
 ['total-command','Total Command',0,false,'Ends early when one player controls both objectives at round end.'],
 ['push-the-line','Push the Line',0,false,'Score enemy-territory positions at the start of each round.'],
 ['supply-airdrop','Supply Airdrop',5,false,'Place the objective at the start of round 2.'],
 ['salvage-heist','Salvage Heist',0,false,'Salvage objectives are worth 2 VP.'],
 ['sabotage','Sabotage',4,false,'Ends early when all opposing objectives are destroyed.'],
 ['ambush','Ambush',0,true,'Special Engagement.'],['hold-the-line','Hold the Line',4,true,'Special Engagement.'],
 ['breakthrough','Breakthrough',0,true,'Special Engagement.'],['siege','Siege',0,true,'Special Engagement.']];
function availableEngagements(){return ENGAGEMENTS;}
function currentEngagement(){return availableEngagements().find(e=>e[0]===state.engagement)||ENGAGEMENTS[0];}
function engagementDuration(e){return e[2]?e[2]+' rounds':'4–6 rounds';}
function pregameSettings(){return {deployment:1,density:1,terrain:0,...state.pregame};}
function pregameLocked(){return isCampaign()?state.campaign?.phase==='battle':state.view==='battle'&&!state.preBattle;}
function deploymentDiagram(n){
 const rect=(x,y,w,h)=>`M${x},${y}h${w}v${h}h-${w}Z`;
 const labels=[];const zones=[];
 const add=(d,player,x,y,rotate=0)=>{zones.push(d);labels.push({player,x,y,rotate});};
 switch(n){
 case 1:add(rect(0,0,1,4),1,.5,2,-90);add(rect(5,0,1,4),2,5.5,2,90);break;
 case 2:add(rect(0,0,6,1),2,3,.5);add(rect(0,3,6,1),1,3,3.5);break;
 case 3:add(rect(0,0,2,4),1,1,2);add(rect(4,0,2,4),2,5,2);break;
 case 4:add('M0,0H4V1H1V3H0Z',1,1.6,.5);add('M6,1H5V3H2V4H6Z',2,4,3.5);break;
 case 5:add('M0,0L2,2L0,4Z',1,.7,2);add('M3,0H6V4H3L5,2Z',2,5.3,3.4);break;
 case 6:add('M0,0H6V1Z',2,4.35,.35);add('M0,3L6,4H0Z',1,1.5,3.7);break;
 case 7:
  for(let i=0;i<6;i++){zones.push(rect(i,0,1,1),rect(i,3,1,1));labels.push({player:String.fromCharCode(65+i),x:i+.5,y:.5},{player:String.fromCharCode(65+i),x:i+.5,y:3.5});}break;
 case 8:add(rect(0,0,2,1),1,1,.5);add(rect(4,0,1,2),1,4.5,1,90);add(rect(1,2,1,2),2,1.5,3,-90);add(rect(4,3,2,1),2,5,3.5);break;
 case 9:add(rect(0,0,6,4)+' '+rect(.5,.5,5,3),1,3,.26);add(rect(1.5,1.5,3,1),2,3,2);break;
 case 10:add(rect(0,0,2,1),1,1,.5);add(rect(5,0,1,2),2,5.5,1,90);add(rect(4,3,2,1),3,5,3.5);add(rect(0,2,1,2),4,.5,3,-90);break;
 case 11:add(rect(0,0,2,1),1,1,.5);add(rect(4,0,2,1),2,5,.5);add(rect(0,3,2,1),3,1,3.5);add(rect(4,3,2,1),4,5,3.5);break;
 case 12:add('M0,1L1.5,2L0,3Z',1,.48,2);add('M2,0H4L3,1.5Z',2,3,.45);add('M2,4H4L3,2.5Z',3,3,3.55);add('M6,1L4.5,2L6,3Z',4,5.52,2);break;
 }
 const scale=100;
 const grid=Array.from({length:5},(_,i)=>`<path d="M${(i+1)*100} 0V400"/>`).join('')+Array.from({length:3},(_,i)=>`<path d="M0 ${(i+1)*100}H600"/>`).join('');
 return `<div class="deployment-board"><svg viewBox="-10 -10 620 420" role="img" aria-label="Deployment ${n}, player deployment zones" xmlns="http://www.w3.org/2000/svg"><title>Deployment ${n}</title><rect class="deployment-ground" width="600" height="400" rx="4"/><g class="deployment-grid">${grid}</g><g transform="scale(${scale})" class="deployment-zones">${zones.map(d=>`<path d="${d}" fill-rule="evenodd" vector-effect="non-scaling-stroke"/>`).join('')}</g><rect class="deployment-edge" width="600" height="400" rx="4"/>${labels.map(l=>`<text class="deployment-player" x="${l.x*scale}" y="${l.y*scale}" dominant-baseline="middle" text-anchor="middle" ${l.rotate?`transform="rotate(${l.rotate} ${l.x*scale} ${l.y*scale})"`:''}>${typeof l.player==='number'?'P'+l.player:l.player}</text>`).join('')}</svg><div class="deployment-key">${n===7?'<span>Top: Player 1</span><span>Bottom: Player 2</span>':Array.from({length:n>=10?4:2},(_,i)=>`<span>P${i+1} · Player ${i+1}</span>`).join('')}</div></div>`;
}

function deploymentNote(n){
 if(n===7)return 'Take turns rolling a D6 for each Rig. Results 1–6 correspond to A–F: deploy that Rig in the matching zone on your side.';
 if(n>=10)return 'For engagements with more than two players.';
 return 'Deploy inside the highlighted zones. Follow any deployment instructions in your engagement.';
}
function battlefieldReward(e){
 return [e.salvage?`+${e.salvage} Salvage`:'',e.repairs?`${e.repairs} free repair${e.repairs===1?'':'s'}`:'',e.equipment?`${e.equipment} free Equipment`:'',e.weapons?`${e.weapons} free weapon${e.weapons===1?'':'s'}`:'',e.rig?`1 ${e.rig} Rig`:'',e.xpAll?`+${e.xpAll} XP for each Ironclad`:'',e.xpOne?`+${e.xpOne} XP for one Ironclad`:'',e.damage?`${e.damage} damage to ${e.targets===1?'1 Rig':`each of ${e.targets} Rigs`}`:''].filter(Boolean).join(' · ');
}
function pregamePanel(){
 const p=pregameSettings(),locked=pregameLocked(),terrain=TERRAINS[p.terrain];
 const control=(key,label,values,die)=>`<label class="field"><span>${label}</span><select data-pregame="${key}" ${locked?'disabled':''}>${options(values,p[key])}</select></label><button data-pregame-random="${key}" ${locked?'disabled':''}>Random · ${die}</button>`;
 return `${engagementSelector()}<section class="panel pregame-panel"><h3>Battlefield setup</h3><div class="pregame-columns"><section class="pregame-deployment">${control('deployment','Deployment',Array.from({length:12},(_,i)=>[i+1,'Deployment '+(i+1)]),'D12')}<figure class="chosen-deployment" aria-live="polite"><figcaption>Deployment ${p.deployment} · Rulebook p. ${p.deployment<=6?93:94}</figcaption>${deploymentDiagram(p.deployment)}<p class="small">${deploymentNote(p.deployment)}</p></figure></section><section class="pregame-terrain">${control('density','Terrain density',[[0,'Low · 10%'],[1,'Medium · 30%'],[2,'High · 50%']],'D6')}<p class="small pregame-density-note">Scenery covers approximately ${[10,30,50][p.density]}% of the battlefield.</p>${control('terrain','Terrain type',TERRAINS.map((t,i)=>[i,t[0]]),'D12')}<div class="terrain-outcomes" aria-live="polite"><h3>${esc(terrain[0])}</h3><p class="small">Campaign Aftermath · Rulebook p. 103${isCampaign()?'':' · Reference only in a normal game'}</p><dl><div><dt>Victory</dt><dd>${battlefieldReward(terrain[2])}</dd></div><div><dt>Defeat</dt><dd>${battlefieldReward(terrain[1])}</dd></div></dl><p class="small">These effects apply after the engagement. Campaign engagement rewards also grant D6 Salvage for victory or D3 Salvage for defeat; objective and destroyed-Rig rewards are additional.</p></div></section></div><p class="small">Engagement-specific deployment and terrain instructions take priority.${isCampaign()?' This battlefield is carried into Aftermath.':' Campaign rewards and penalties are not applied in normal games.'}</p></section>`;
};

function setPregame(key,value){if(pregameLocked())return;const limits={deployment:[1,12],density:[0,2],terrain:[0,11]},range=limits[key];if(!range||!Number.isInteger(value)||value<range[0]||value>range[1])return;state.pregame={...pregameSettings(),[key]:value};render();}
function randomPregame(key){const sides=key==='density'?6:12,roll=crypto.getRandomValues(new Uint32Array(1))[0]%sides+1;setPregame(key,key==='deployment'?roll:key==='density'?Math.floor((roll-1)/2):roll-1);}
function engagementSelector(){const e=currentEngagement(),locked=isCampaign()&&state.campaign?.phase==='battle';return `<section class="panel" style="margin-bottom:16px"><h3>Engagement</h3><div class="row"><select aria-label="Engagement" data-field="engagement" ${locked?'disabled':''}>${options(availableEngagements().map(e=>[e[0],e[1]+(e[3]?' · Special':'')+' · '+engagementDuration(e)]),e[0])}</select><button data-engagement-random ${locked?'disabled':''}>Random Engagement</button></div><p class="small">${e[1]} · ${engagementDuration(e)}. ${e[2]?'': 'End of round 4: D12 8+ ends the game. Round 5: 5+. Round 6: automatic end.'} ${e[4]}</p></section>`;}
function needsEndRoll(){return !currentEngagement()[2]&&[4,5].includes(state.round);}
function engagementEndPanel(){const e=currentEngagement();return `<section class="component"><h3>${e[1]} · ${engagementDuration(e)}</h3>${needsEndRoll()?`<p>End of round ${state.round}: D12 ${state.round===4?'8+':'5+'} ends the Engagement.</p><div class="row"><input aria-label="Engagement end D12" type="number" min="1" max="12" data-field="end-die" value="${state.maintenance.endDie||''}"><button data-end-roll>Roll D12</button></div>`:`<p>${state.round>=(e[2]||6)?'This is the final round.':'The Engagement continues unless an early victory condition is met.'}</p>`}<label class="checkline"><input type="checkbox" data-field="early-end" ${state.maintenance.earlyEnd?'checked':''}>Scenario victory condition reached · end Engagement</label></section>`;}
function componentColour(b,i){return b.parts[i]==='disabled'?'damage-red':b.parts[i]==='catastrophic'||b.sp[i]===0?'damage-yellow':'';}
function rigBanner(r){const rig=rigOf(r);return `<div class="rig-banner"><img src="images/rigs/${rig.id}.webp" alt="${esc(rig.name)} Rig" width="893" height="380" loading="lazy" decoding="async"><div class="rig-banner-caption"><span class="eyebrow">${esc(rig.name)} · ${WEIGHTS[rig.weight]}${rig.faction==='nomads'?' · NOMAD':''}</span><h2>${esc(r.name)}</h2></div></div>`;}

let rupturePickerId=null;
function statusButtons(r){const b=r.battle,active=activeConditions(r),permanent=permanentConditions(b);return `<section class="status-header" aria-label="Rig conditions"><div class="status-buttons">${Object.keys(CONDITIONS).map(c=>`<button class="status-button ${active.includes(c)?'status-active':''}" data-action="condition" data-id="${r.id}" data-value="${c}" aria-pressed="${active.includes(c)}" title="${esc(CONDITIONS[c])}${permanent.includes(c)?' Permanent component effect.':''}" ${permanent.includes(c)?'disabled':''}><span class="status-lamp"><img src="images/status/${c.toLowerCase()}.svg" alt="" width="64" height="64"></span><span class="status-name">${c}</span></button>`).join('')}<button class="status-button ${b.ruptured.some(Boolean)?'status-active':''}" data-rupture-picker="${r.id}" aria-expanded="${rupturePickerId===r.id}" aria-pressed="${b.ruptured.some(Boolean)}"><span class="status-lamp"><img src="images/status/ruptured.svg" alt="" width="64" height="64"></span><span class="status-name">Ruptured</span></button></div>${rupturePickerId===r.id?`<div class="rupture-picker"><strong>Ruptured components</strong><p class="small">2 damage per affected component during Maintenance; persists until repaired.</p><div class="row">${PARTS.map((part,i)=>`<label class="checkline"><input type="checkbox" data-field="ruptured" data-id="${r.id}" data-part="${i}" ${b.ruptured[i]?'checked':''}>${part}</label>`).join('')}</div></div>`:''}${active.length?`<details><summary>Active condition effects</summary>${active.map(c=>`<p class="small"><b>${c}:</b> ${CONDITIONS[c]}${permanent.includes(c)?' Permanent while this component is damaged.':''}</p>`).join('')}</details>`:''}</section>`;}
function rigUnusable(r){return !!r.battle.exploded||r.battle.parts.filter(p=>p==='disabled').length>=2;}
function battleCard(r){const rig=battleProfile(r),b=r.battle,destroyed=b.parts.filter(x=>x==='disabled').length>=2;
 return `<article class="panel battle-card ${activeRigId()===r.id?'selected-rig':''} ${b.activated?'activated':''} ${destroyed?'destroyed':''} ${b.exploded?'rig-exploded':''}" data-card="${r.id}">${rigBanner(r)}<fieldset class="rig-controls" ${rigUnusable(r)?'disabled':''}>${statusButtons(r)}<div class="card-heading"><div><span class="eyebrow">${rig.name.toUpperCase()} · ${WEIGHTS[rig.weight].toUpperCase()}${rig.faction==='nomads'?' · NOMAD':''}</span></div><div class="row activation-controls"><button class="power-button ${b.shutDown?'power-on':''}" data-shutdown="${r.id}" title="Shut Down: forfeit all Actions; cool to 0 unless engine damage prevents it" aria-label="Shut Down" ${b.activated||b.actions||actionLimit(r)===0?'disabled':''}><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3v12M8 7a12 12 0 1 0 16 0" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg><span>Shut Down</span></button><button class="activation-marker" data-action="activated" data-id="${r.id}" aria-pressed="${b.activated}">${b.exploded?'EXPLODED':destroyed?'DESTROYED':b.shutDown?'Shut down':b.activated?'✓ Activated':'Not activated'}</button></div></div>
 ${pilotBattleHeader(r)}${currentEngagement()[0]==='salvage-heist'?`<button class="objective-marker ${b.carryingObjective?'primary':''}" data-objective="${r.id}" aria-pressed="${!!b.carryingObjective}" ${r.campaign?.mercenary?'disabled':''}>${b.carryingObjective?'◆ Carrying objective':'◇ Pick up objective'}</button>${r.campaign?.mercenary?'<p class="small">Mercenaries cannot secure objectives.</p>':''}`:''}

 ${stats([[pilotOf(r).aim+'+','Aim'],[rig.immobilised?'Pivot only':rig.speed+'″','Current SPD'],[rig.conditionACC,'Condition ACC'],[rig.exhaust,'Exhaust'],[cost(r)+'/'+ironCapacity(r),'Iron']])}
 <div class="track-label"><strong>Heat</strong><span class="badge">${b.heat} ${rig.heat[b.heat]===null?'· safe':`· roll D12 +${rig.heat[b.heat]}`}</span></div>
 <div class="heat-track" aria-label="Heat Track">${rig.heat.map((h,i)=>`<button class="${h===null?'':'hot'} ${b.heat===i?'current':''}" data-action="heat" data-id="${r.id}" data-value="${i}" aria-label="Heat ${i}, ${h===null?'safe':'modifier +'+h}" aria-pressed="${b.heat===i}">${h===null?'−':'+'+h}</button>`).join('')}</div>
 ${rig.heat[b.heat]!==null?`<p class="warning">Make a Heat Threshold roll during Maintenance.${b.heat===rig.heat.length-1?' At maximum Heat, also roll for each Action.':''}</p>`:''}
 <div class="track-label"><span>Actions used <span class="small">/ ${actionLimit(r)} available Actions</span></span>${counter(r.id,'actions',b.actions,actionLimit(r))}</div>
 ${cardQuickActions(r)}${pendingArmView(r)}<div class="components">${PARTS.map((p,i)=>`<section class="component ${componentColour(b,i)}"><div class="component-head"><div><strong>${p} <span class="badge">${['1–4','5–7','8–10','11–12'][i]}</span></strong><span class="small">Base Armour ${rig.armour[i]}+</span></div>${counter(r.id,'sp',b.sp[i],rig.sp[i],i)}</div><select aria-label="${p} status" data-field="part-state" data-id="${r.id}" data-part="${i}">${options([['ok','Operational'],['catastrophic','Catastrophically Damaged'],['disabled','Disabled']],b.parts[i])}</select>${b.parts[i]!=='ok'?`<p class="small danger">${partHint(b,i)} Cannot be Repaired.</p>`:''}<label class="checkline"><input type="checkbox" data-field="ruptured" data-id="${r.id}" data-part="${i}" ${b.ruptured[i]?'checked':''}>Ruptured · 2 damage during Maintenance</label></section>`).join('')}</div>
 <details class="battle-weapons"><summary>Weapons and Ironclad · ${pilotOf(r).name}</summary><p class="small">Base weapon profiles. Apply Condition ACC shown above once, plus Equipment and scenario modifiers. Changing reload status does not spend Actions or change Heat.</p>${r.weapons.map((w,slot)=>w===null?'':`<section class="weapon-card ${b.weaponState[slot]==='disabled'?'unavailable damage-red':''}"><span class="eyebrow">${SLOTS[slot]}</span>${b.weaponState[slot]==='disabled'?'<strong class="unusable-label">UNUSABLE</strong>':''}<h3>${rig.weapons[w].name}</h3><span class="badge">${weaponGroupName(rig.weapons[w])} · p. ${rig.weapons[w].page}</span>${stats([[rig.weapons[w].rof,'ROF'],[rig.weapons[w].str,'STR'],[rig.weapons[w].rng+'″','RNG'],[rig.weapons[w].acc,'ACC']])}<p class="small">${esc(rig.weapons[w].perks)}</p><select aria-label="${SLOTS[slot]} status" data-field="weapon-state" data-id="${r.id}" data-slot="${slot}">${options([['ready','Ready'],...(!isMelee(rig.weapons[w])?[['reload','Reload required']]:[]),['disabled','Cannot be used']],b.weaponState[slot])}</select></section>`).join('')}</details>

 <details><summary>Equipment (${r.equipment.length})</summary>${r.equipment.length?r.equipment.map(id=>{const e=DATA.equipment[id];return `<div class="equipment-row"><strong>${e.name}</strong>${id===35?`<p class="small">Extra Iron Capacity: ${esc(state.squad.find(x=>x.id===(r.capacityTarget||r.id))?.name||'Select a Rig')}</p>`:''}${r.targets[id]!==undefined?`<p class="small">Assigned to: ${SLOTS[r.targets[id]]}</p>`:''}<p>${esc(e.effect)}</p>${/Discard/i.test(e.effect)?`<label class="checkline"><input type="checkbox" data-field="spent" data-id="${r.id}" data-value="${id}" ${b.spent.includes(id)?'checked':''}>Used / discarded</label>`:''}</div>`;}).join(''):'<p class="small">No Equipment.</p>'}</details>
 <details><summary>Notes & preparations</summary><label class="field"><span>Preparations, permanent effects, targets</span><textarea data-field="notes" data-id="${r.id}" maxlength="2000" placeholder="E.g. Brace prepared; skip the next activation…">${esc(b.notes)}</textarea></label></details></fieldset>${rigUnusable(r)?`<p class="exploded-label">${b.exploded?'EXPLODED':'DESTROYED'} · RIG UNUSABLE</p>${!b.exploded?`<p class="small">Resolve the explosion check (p. 33).</p><button class="danger" data-exploded="${r.id}">Mark exploded</button>`:''}<button data-mobile="undo">↶ Undo last change</button>`:''}</article>`;
}
function counter(id,kind,value,max,part=''){return `<div class="counter"><button aria-label="Decrease ${kind==='sp'?PARTS[part]:'Actions used'}" data-action="counter" data-id="${id}" data-kind="${kind}" data-part="${part}" data-value="-1" ${value<=0&&!(kind==='sp'&&state.squad.find(r=>r.id===id)?.battle.parts[part]==='catastrophic')?'disabled':''}>−</button><strong>${value}<span class="small">/${max}</span></strong><button aria-label="Increase ${kind==='sp'?PARTS[part]:'Actions used'}" data-action="counter" data-id="${id}" data-kind="${kind}" data-part="${part}" data-value="1" ${value>=max?'disabled':''}>+</button></div>`;}
function baseBattleView(){return `<div class="toolbar"><div><span class="eyebrow">${esc(state.name)}</span><h2>Round ${state.round} · ${currentEngagement()[1]}</h2><p class="small">${engagementDuration(currentEngagement())}${state.engagementEnded?' · ENGAGEMENT COMPLETE — finish the game / open Aftermath':''}</p><p class="small">${deployedRigs().filter(r=>r.battle.activated).length}/${deployedRigs().length} Rigs activated · toggle each Rig to correct the count.</p></div><div class="row">${!isCampaign()?`<button data-action="finish-normal" ${!state.squad.length?'disabled':''}>Finish game</button>`:''}<button class="primary" data-action="next-round" ${!state.squad.length?'disabled':''}>Maintenance phase</button></div></div>
 ${state.pregame?`<p class="small">Deployment ${pregameSettings().deployment} · Terrain density: ${['Low 10%','Medium 30%','High 50%'][pregameSettings().density]} · ${esc(TERRAINS[pregameSettings().terrain][0])}</p>`:''}${maintenanceView()}${battleNavigation()}${state.squad.length?`<div class="battle-grid ${battleFocus?'focus-rig':''}">${deployedRigs().map(battleCard).join('')}</div>`:'<div class="empty"><strong>No battle sheets</strong>Build and confirm a squadron to begin.</div>'}
 <details class="panel" style="margin-top:20px"><summary>Heat Threshold reference and round management</summary><p class="small">Roll D12 and add the modifier for the current space. Apply the effects, then resolve Exhaust and Ruptured. Open Maintenance phase, resolve Heat Threshold rolls, apply Exhaust once, then resolve Ruptured and other effects. Confirm the checklist to advance the round.</p><table class="reference-table"><tbody>${HEAT_RESULTS.map(([n,t])=>`<tr><td>${n}</td><td>${t}</td></tr>`).join('')}</tbody></table><p class="small">Activated automatically reloads usable weapons. Toggle it again to correct the activation marker; this does not undo reloading. Remove temporary Conditions after the affected activation; permanent Conditions remain. Mark Ruptured on the affected component.</p></details>`;}
function captureHeatViewport(){
 const dialog=document.querySelector('.maintenance-dialog');if(!dialog)return null;
 const top=dialog.getBoundingClientRect().top,focused=document.activeElement;
 const rows=[...dialog.querySelectorAll('[data-maintenance-rig]')];
 const anchor=(dialog.contains(focused)?focused.closest('[data-maintenance-rig]'):null)||rows.find(row=>row.getBoundingClientRect().bottom>top+12);
 return {scroll:dialog.scrollTop,rig:anchor?.dataset.maintenanceRig,offset:anchor?anchor.getBoundingClientRect().top-top:0,field:dialog.contains(focused)?focused?.dataset?.maintenanceField:null,fieldRig:focused?.dataset?.id};
}
function restoreHeatViewport(saved){
 if(!saved)return;const dialog=document.querySelector('.maintenance-dialog');if(!dialog)return;
 dialog.scrollTop=saved.scroll;
 const anchor=[...dialog.querySelectorAll('[data-maintenance-rig]')].find(row=>row.dataset.maintenanceRig===saved.rig);
 if(anchor)dialog.scrollTop+=anchor.getBoundingClientRect().top-dialog.getBoundingClientRect().top-saved.offset;
 if(saved.field){const input=[...dialog.querySelectorAll('[data-maintenance-field]')].find(el=>el.dataset.maintenanceField===saved.field&&el.dataset.id===saved.fieldRig);if(input&&!input.disabled)input.focus({preventScroll:true});}
}
function renderFloatingBar(){
 const previous=document.getElementById('floating-game-bar'),scroll=previous?.querySelector('nav')?.scrollLeft||0;
 previous?.remove();document.body.classList.remove('has-floating-game-bar');
 if(menuScreen!=='play'||state.maintenance)return;
 const builder=document.querySelector('[data-field="rig-name"]');
 const battle=state.view==='battle'&&document.querySelector('.battle-card');
 if(!builder&&!battle)return;
 const bar=document.createElement('aside');bar.id='floating-game-bar';
 if(builder){
  const used=cost(draft),capacity=ironCapacity(draft),over=used>capacity;
  bar.className='floating-game-bar floating-iron'+(over?' iron-over':'');bar.setAttribute('aria-label','Current Rig Iron');
  bar.innerHTML=`<div class="floating-iron-label"><strong>${esc(draft.name||rigOf(draft).name)}</strong><span>IRON</span></div><div class="floating-iron-meter"><div role="progressbar" aria-label="Iron capacity used" aria-valuemin="0" aria-valuemax="${capacity}" aria-valuenow="${Math.min(used,capacity)}" aria-valuetext="${used} of ${capacity} Iron${over?', capacity exceeded':''}" class="floating-iron-track"><span style="width:${Math.max(0,Math.min(100,used/Math.max(1,capacity)*100))}%"></span></div><span class="small" aria-live="polite">${over?'Over capacity by '+(used-capacity):capacity-used+' Iron available'}</span></div><strong class="floating-iron-count">${used}<span> / ${capacity}</span></strong>`;
 }else{
  bar.className='floating-game-bar floating-rigs';bar.setAttribute('aria-label','Battle Rig navigation');
  bar.innerHTML=`<nav aria-label="Jump to Rig">${deployedRigs().map(r=>`<button data-mobile="select" data-id="${r.id}" aria-pressed="${r.id===activeRigId()}" class="${r.id===activeRigId()?'primary':''}">${esc(r.name)}${rigUnusable(r)?' · Destroyed':r.battle.activated?' · ✓':''}</button>`).join('')}</nav>`;
 }
 document.body.append(bar);document.body.classList.add('has-floating-game-bar');
 const nav=bar.querySelector('nav');if(nav){nav.scrollLeft=scroll;const selected=nav.querySelector('[aria-pressed="true"]');if(selected){if(selected.offsetLeft<nav.scrollLeft)nav.scrollLeft=selected.offsetLeft;else if(selected.offsetLeft+selected.offsetWidth>nav.scrollLeft+nav.clientWidth)nav.scrollLeft=selected.offsetLeft+selected.offsetWidth-nav.clientWidth;}}
}

function render(){
 const heatViewport=captureHeatViewport();
 const open=[...document.querySelectorAll('details[open]')].map(el=>el.id||[...document.querySelectorAll('details')].indexOf(el));
 ensureCampaign();document.getElementById('app').innerHTML=menuScreen==='play'?workspaceBar()+(state.view==='campaign'?campaignView():state.view==='build'?buildView():battleView()):menuView();
 for(const key of open){const el=typeof key==='string'?document.getElementById(key):document.querySelectorAll('details')[key];if(el)el.open=true;}
 for(const v of ['build','battle','campaign']){const t=document.getElementById(v+'-tab');if(!t)continue;t.hidden=menuScreen!=='play'||(v==='campaign'&&!isCampaign());t.classList.toggle('active',state.view===v);t.setAttribute('aria-current',state.view===v?'page':'false');}
 document.body.classList.toggle('battle-open',menuScreen==='play'&&state.view==='battle'&&deployedRigs().length>0);
 persist();
 if(!storageOK){const app=document.getElementById('app');app.innerHTML='<div class="warning" role="alert">Browser saving is unavailable or full. '+(campaignStarted()?'<button data-c-action="backup">Export campaign backup now</button>':'Keep this page open until you can save your data.')+'</div>'+app.innerHTML;}
 restoreHeatViewport(heatViewport);
 startFactionGalleries();
 renderFloatingBar();
}
function resetDraft(){selected=DATA.rigs.find(r=>r.faction===state.faction).id;draft=newConfig(DATA.rigs.find(r=>r.id===selected));editing=null;}
function battleChanged(){return state.squad.some(r=>r.battle&&(r.battle.heat||r.battle.actions||r.battle.activated||r.battle.sp.some((n,i)=>n!==rigOf(r).sp[i])||r.battle.conditions.length||r.battle.notes));}
function baseHandleClick(ev){
 const el=ev.target.closest('button[data-action]');if(!el||el.disabled)return;
 const {action,value,id}=el.dataset;const r=state.squad.find(x=>x.id===id);
 if(action==='view'){
  if(value==='battle'&&(!state.squad.length||squadronErrors().length)){notify('Complete and confirm your squadron before opening battle sheets.');return;}
  if(value==='battle'&&editing){notify('Save or cancel your Rig changes.');return;}
  state.view=value;
 }
 if(action==='faction'){
  if(value===state.faction)return;
  if(state.squad.length&&!confirm('Changing faction clears the current squadron. Continue?'))return;
  state.faction=value;state.squad=[];state.round=1;resetDraft();
 }
 if(action==='rig'){if(editing&&!confirm('Discard changes to this Rig?'))return;selected=value;draft=newConfig(DATA.rigs.find(r=>r.id===value));editing=null;}
 if(action==='add'){
  if(configErrors(draft).length){notify(configErrors(draft).join(' '));return;}
  const entry=clone(draft);entry.battle=freshBattle(entry);
  if(editing){const i=state.squad.findIndex(x=>x.id===editing);if(i<0)return;if(!confirm('Save this loadout? The trackers for this Rig will be reset.'))return;state.squad[i]=entry;}
  else state.squad.push(entry);
  draft=newConfig(rigOf(entry));editing=null;notify('Rig saved to the squadron.');
 }
 if(action==='edit'&&r){draft=clone(r);delete draft.battle;selected=r.rigId;editing=r.id;}
 if(action==='cancel-edit')resetDraft();
 if(action==='duplicate'&&r){const n=clone(r);n.id=uid();if(n.capacityTarget===r.id)n.capacityTarget=n.id;n.name=(n.name+' copy').slice(0,45);n.battle=freshBattle(n);state.squad.push(n);}
 if(action==='remove'&&r){if(!confirm(`Remove ${r.name}?`))return;state.squad=state.squad.filter(x=>x.id!==id);if(editing===id)resetDraft();}
 if(action==='confirm'){if(editing){notify('Save or cancel your Rig changes.');return;}if(!state.squad.length||squadronErrors().length)return;state.preBattle=true;state.view='battle';}
 if(action==='save'){
  if(!state.name.trim()){notify('Enter a squadron name.');return;}
  const existing=state.saved.find(s=>s.name===state.name&&(s.mode||'standard')===state.mode);
  if(existing&&!confirm('A squadron with this name already exists. Replace the save?'))return;
  const save={id:existing?.id||uid(),mode:state.mode,name:state.name,faction:state.faction,formation:state.formation,squad:clone(state.squad)};
  if(existing)state.saved[state.saved.indexOf(existing)]=save;else state.saved.push(save);
  persist();notify(storageOK?'Squadron saved in this browser.':'Could not save the squadron.');
 }
 if(action==='load'){
  const s=state.saved.find(s=>s.id===document.getElementById('saved-choice').value);if(!s||(s.mode||'standard')!==state.mode)return;
  if(state.squad.length&&!confirm('Load the saved squadron in place of the current one?'))return;
  state.mode=s.mode||'standard';state.name=s.name;state.faction=s.faction;state.formation=s.formation;state.squad=clone(s.squad);state.squad.forEach(r=>r.battle=freshBattle(r));state.round=1;resetDraft();notify('Squadron loaded with fresh trackers.');
 }
 if(action==='delete-save'){const sid=document.getElementById('saved-choice').value;if(!confirm('Delete this save?'))return;state.saved=state.saved.filter(x=>x.id!==sid);}
 if(action==='new'){if(state.squad.length&&!confirm('Create an empty squadron? Save the current squadron first if you want to keep it.'))return;state.squad=[];state.name='My squadron';state.round=1;state.formation=isCampaign()?1:0;state.factionPending=true;resetDraft();}
 if(action==='activated'&&r)toggleActivation(r);
 if(action==='heat'&&r)r.battle.heat=Number(value);
 if(action==='condition'&&r){const a=r.battle.conditions;a.includes(value)?a.splice(a.indexOf(value),1):a.push(value);}
 if(action==='counter'&&r){const b=r.battle;if(el.dataset.kind==='actions')spendAction(r,Number(value));else{const part=Number(el.dataset.part);if(Number(value)<0&&b.parts[part]==='catastrophic')b.parts[part]='disabled';b.sp[part]=Math.max(0,Math.min(rigOf(r).sp[part],b.sp[part]+Number(value)));if(b.sp[part]===0&&b.parts[part]==='ok')b.parts[part]='catastrophic';if(b.sp[part]>0)b.parts[part]='ok';}}
 if(action==='reset-battle'){if(!confirm('Reset the battle and restore all Rigs?'))return;state.squad.forEach(r=>r.battle=freshBattle(r));state.round=1;}
 if(action==='next-round'){if(!confirm('Have you resolved Maintenance, Heat and Ruptured? Advance to the next round and reset only Actions and activation markers?'))return;state.round++;state.squad.forEach(r=>{r.battle.shutDown=false;r.battle.actions=0;r.battle.actionHistory=[];r.battle.activationConditions=null;r.battle.activated=false;});}
 render();
}
function baseHandleChange(ev){
 const el=ev.target,f=el.dataset.field;if(!f)return;const r=state.squad.find(x=>x.id===el.dataset.id);
 if(f==='squad-name'){state.name=el.value;persist();return;}
 if(f==='ironclad-name'){draft.ironcladName=el.value.slice(0,60);if(draft.campaign)draft.campaign.pilotName=draft.ironcladName;return;}
 if(f==='rig-name'){draft.name=el.value;render();return;}
 if(f==='notes'&&r){r.battle.notes=el.value;persist();return;}
 if(f==='pilot')draft.pilot=Number(el.value);
 if(f==='weapon'){draft.weapons[Number(el.dataset.slot)]=el.value===''?null:Number(el.value);for(const key of Object.keys(draft.targets)){if(Number(draft.targets[key])===Number(el.dataset.slot))delete draft.targets[key];}}
 if(f==='equipment'){const id=Number(el.dataset.value);if(el.checked)draft.equipment.push(id);else{draft.equipment=draft.equipment.filter(e=>e!==id);delete draft.targets[id];}}
 if(f==='target'){if(el.value==='')delete draft.targets[el.dataset.value];else draft.targets[el.dataset.value]=Number(el.value);}
 if(f==='formation')state.formation=Number(el.value);
 if(f==='capacity-target')draft.capacityTarget=el.value;
 if(f==='mode'){
  state.mode=el.value;
  if(isCampaign()&&![1,2,3].includes(state.formation))state.formation=1;
  if(isCampaign()&&state.faction==='nomads')state.faction='krim';
  resetDraft();
 }
 if(f==='part-state'&&r){const i=Number(el.dataset.part);r.battle.parts[i]=el.value;if(el.value!=='ok')r.battle.sp[i]=0;else if(r.battle.sp[i]===0)r.battle.sp[i]=1;}
 if(f==='ruptured'&&r)r.battle.ruptured[Number(el.dataset.part)]=el.checked;
 if(f==='weapon-state'&&r)r.battle.weaponState[Number(el.dataset.slot)]=el.value;
 if(f==='spent'&&r){const id=Number(el.dataset.value);r.battle.spent=el.checked?[...new Set([...r.battle.spent,id])]:r.battle.spent.filter(x=>x!==id);}
 render();
}
function init(){
 let loadError=false;
 try{const raw=localStorage.getItem(KEY);if(raw){const s=JSON.parse(raw);if(s.version!==1||!Array.isArray(s.squad)||!Array.isArray(s.saved)||!FACTIONS.some(f=>f[0]===s.faction)||!FORMATIONS[s.formation])throw Error('Invalid format');for(const r of [...s.squad,...s.saved.flatMap(x=>x.squad)]){if(!rigOf(r)||!PILOTS[r.pilot]||!Array.isArray(r.weapons)||r.weapons.length!==3||r.weapons.some(w=>w!==null&&!rigOf(r).weapons[w])||!Array.isArray(r.equipment)||r.equipment.some(e=>!DATA.equipment[e]))throw Error('Invalid profiles');}if(s.workspaces){if(!Array.isArray(s.workspaces.entries)||typeof s.workspaces.activeId!=='string')throw Error('Invalid sessions');workspaces=s.workspaces;delete s.workspaces;}state=s;state.mode=state.mode==='campaign'?'campaign':'standard';for(const r of state.squad)r.battle=r.battle||freshBattle(r);if(!['build','battle','campaign'].includes(state.view))state.view='build';}}
 catch{loadError=true;storageOK=false;}
 resetDraft();
 document.addEventListener('click',handleClick);document.addEventListener('change',handleChange);
 document.addEventListener('input',ev=>{if(ev.target.dataset.maintenanceField==='die'){const row=state.maintenance?.rows.find(x=>x.id===ev.target.dataset.id);if(row){row.die=ev.target.value;persist();}return;}if(['squad-name','notes','ironclad-name'].includes(ev.target.dataset.field)||ev.target.dataset.cPilotName)handleChange(ev);if(ev.target.dataset.field==='rig-name'){draft.name=ev.target.value;renderFloatingBar();}});
 if(loadError){try{const raw=localStorage.getItem(KEY);if(raw)localStorage.setItem(KEY+'-recovery-'+Date.now(),raw);}catch{}}
 render();if(loadError)notify('Save unreadable or unavailable. Opened a new squadron.');
}


// Persistent campaign management (Rulebook pp. 101–108).
const XP_LEVELS=[0,3,6,10,15,20,25,30,35,40];
const RECRUIT_COST={Light:4,Medium:8,Heavy:12,Colossal:16};
const STARTING_WEAPONS={Light:5,Medium:5,Heavy:6,Colossal:6};
const TERRAINS=[
 ['Wasteland',{salvage:1},{salvage:3}],['Oil Field',{repairs:1},{repairs:3}],
 ['Iron Mine',{salvage:2},{salvage:5}],['Salvage Yard',{equipment:1,salvage:1},{equipment:2,salvage:2}],
 ['Settlement',{xpAll:1},{xpAll:2}],['Rig Graveyard',{rig:'Light',salvage:1},{rig:'Medium',salvage:2}],
 ['Rig Hangar',{rig:'Heavy',salvage:1},{rig:'Heavy',salvage:3}],
 ['Industrial Complex',{weapons:1,salvage:1},{weapons:2,salvage:2}],
 ['City Centre',{xpOne:2},{xpOne:5}],['Fuel Depot',{repairs:2,salvage:1},{repairs:4,salvage:2}],
 ['Toxic Flats',{damage:2,targets:1},{damage:2,targets:2}],['Storm Belt',{damage:3,targets:1},{damage:3,targets:2}]
];
const TRAITS=[
 [['Load Frame Buckled','−1 maximum Iron Capacity.'],['Layered Hull Breach','−2 to Hull armour rolls.'],['Structural Integrity Compromised','−1 maximum Structure Point on every component.']],
 [['Disrupted Targeting Optics','−1 ACC with the affected weapon.'],['Hydraulic Pressure Loss','−1 STR with the affected weapon (minimum 1).'],['Ignition Routing Fault','A firing roll of 1 deals 1 damage to the Arms, once per attack.']],
 [['Clutch Degradation','−1″ SPD (minimum 1″).'],['Rotation Joint Seizure','Pivot is halved.'],['Reverse Drive Cutout','Cannot backpedal or sidestep.']],
 [['Radiator Bypass Failure','+1 to Heat Threshold results.'],['Heat Exchanger Buckled','Heat Threshold moves one space left.'],['Exhaust Routing Collapse','−1 Exhaust.']]
];
let campaignTab='setup';
function campaignStarted(){return isCampaign()&&!!state.campaign?.started;}
function ensureCampaign(){
 if(!isCampaign())return;
 state.campaign??={started:false,phase:'setup',salvage:0,renown:0,season:6,games:[],ledger:[],undo:[],deployed:[],pilots:[],inventory:{weapons:[],equipment:[]},credits:{weapons:0,equipment:0,repairs:0,rigs:[],wrecks:[]},hired:false,notes:'',report:null};
 for(const r of state.squad)ensureRig(r);
 if(state.campaign.phase==='report'&&state.campaign.report)prepareReinforcement();
}
function ensureRig(r){r.campaign??={pilotId:uid(),pilotName:r.ironcladName?.trim()||r.name+' Ironclad',xp:0,level:1,rerolls:0,traits:[],freeSP:0,weaponCredit:0,mercenary:false};return r.campaign;}
function effectiveRig(r){
 const rig=clone(rigOf(r)),traits=r.campaign?.traits||[];
 if(traits.some(t=>t.part===0&&t.kind===2))rig.sp=rig.sp.map(n=>Math.max(1,n-1));
 if(traits.some(t=>t.part===2&&t.kind===0))rig.speed=Math.max(1,rig.speed-1);
 if(traits.some(t=>t.part===3&&t.kind===2))rig.exhaust=Math.max(0,rig.exhaust-1);
 if(traits.some(t=>t.part===3&&t.kind===1)){const first=rig.heat.findIndex(h=>h!==null);if(first>0)rig.heat[first-1]=0;}
 return rig;
}
function ironCapacity(r){return baseIronCapacity(r)-(r.campaign?.traits.some(t=>t.part===0&&t.kind===0)?1:0);}
function deployedRigs(){return campaignStarted()?state.squad.filter(r=>state.campaign.deployed.includes(r.id)):state.squad;}
function squadronErrors(){
 if(!campaignStarted())return startingSquadronErrors();
 const f=FORMATIONS[state.formation]?.[1],rigs=deployedRigs(),errs=[];
 if(!f)errs.push('Select a formation for this Engagement.');
 const counts=Object.keys(WEIGHTS).map(w=>rigs.filter(r=>!r.campaign.mercenary&&rigOf(r).weight===w).length);
 if(f)counts.forEach((n,i)=>{if(n>f[i]||(!state.campaign.shortHanded&&n!==f[i]))errs.push(`${WEIGHTS[Object.keys(WEIGHTS)[i]]}: ${n}/${f[i]}`);});
 if(!rigs.length)errs.push('Select at least one Rig to deploy.');
 for(const r of rigs){if(r.equipment.includes(35)&&r.capacityTarget&&!state.squad.some(x=>x.id===r.capacityTarget))errs.push(`${r.name}: reassign the Frame to an existing Rig.`);for(const e of configErrors(r))errs.push(`${r.name}: ${e}`);if(r.battle.parts.filter(x=>x==='disabled').length>=2)errs.push(`${r.name} is destroyed and must be repaired.`);}
 return errs;
}
function buildView(){return campaignStarted()?campaignView():baseBuildView();}
function battleView(){if(!isCampaign()&&state.preBattle)return `<h2>Prepare game</h2>${pregamePanel()}<div class="row"><button data-action="view" data-value="build">Edit squadron</button><button class="primary" data-start-normal ${!state.squad.length||squadronErrors().length?'disabled':''}>Begin game</button></div>`;return `${campaignStarted()?'<div class="toolbar"><button data-c-action="open-hangar">Campaign hangar</button><button class="primary" data-c-action="finish-battle">Finish Engagement / Aftermath</button></div>':''}${baseBattleView()}`;}
function campaignRigInfo(r){if(!isCampaign()||!r.campaign)return '';const x=r.campaign;
 return `<div class="campaign-rig-meta"><strong>Campaign Ironclad</strong><span class="badge">Level ${x.level} · ${x.xp} XP · ${x.rerolls} re-rolls/game</span>${x.mercenary?'<span class="badge">MERCENARY · no XP or objectives</span>':''}${x.traits.length?`<details><summary>Permanent damage (${x.traits.length})</summary>`:''}${x.traits.map(t=>`<p class="small warning">${PARTS[t.part]}${t.part===1?' / '+SLOTS[t.slot]:''}: <b>${TRAITS[t.part][t.kind][0]}</b> — ${TRAITS[t.part][t.kind][1]}${t.locked?' (second-hand; cannot be removed)':''}</p>`).join('')}${x.traits.length?'</details>':''}${state.campaign?.phase==='battle'&&state.campaign.deployed.includes(r.id)?`<div class="row"><span class="small">Re-rolls remaining: ${Math.max(0,x.rerolls-(r.battle.rerollsUsed||0))}/${x.rerolls}</span><button data-c-action="reroll-used" data-id="${r.id}" data-value="1" ${(r.battle.rerollsUsed||0)>=x.rerolls?'disabled':''}>Use re-roll</button><button data-c-action="reroll-used" data-id="${r.id}" data-value="-1" ${!(r.battle.rerollsUsed||0)?'disabled':''}>Restore re-roll</button></div>`:''}<p class="small">Permanent SPD, Exhaust, Structure and capacity changes are included. Apply armour, weapon and Heat-result modifiers manually.</p></div>`;}
function xpAward(r,amount){
 const c=ensureRig(r);if(c.mercenary)return;
 const old=c.level;c.xp+=amount;c.level=XP_LEVELS.reduce((v,n,i)=>c.xp>=n?i+1:v,1);
 for(let level=old+1;level<=c.level;level++){if([4,7,10].includes(level)&&r.pilot<3)r.pilot++;else c.rerolls++;}
}
function pilotRecord(r){const c=ensureRig(r);return {id:c.pilotId,name:c.pilotName,grade:r.pilot,xp:c.xp,level:c.level,rerolls:c.rerolls};}
function assignPilot(r,p){const c=ensureRig(r);r.pilot=p.grade;r.ironcladName=p.name;Object.assign(c,{pilotId:p.id,pilotName:p.name,xp:p.xp,level:p.level,rerolls:p.rerolls});}
function pushPilot(r){if(!r.campaign?.mercenary)state.campaign.pilots.push(pilotRecord(r));}
function normalizeRig(r){const max=effectiveRig(r).sp;r.battle.sp=r.battle.sp.map((n,i)=>Math.min(max[i],Math.max(0,n)));}
function inflict(b,part,amount){if(b.parts[part]==='disabled')throw Error('Select a component that is not Disabled.');if(b.parts[part]==='catastrophic'){b.parts[part]='disabled';b.sp[part]=0;}else{b.sp[part]=Math.max(0,b.sp[part]-amount);if(!b.sp[part])b.parts[part]='catastrophic';}}
function addTrait(r,part,die,slot=0,locked=false){const kind=Math.floor((die-1)/2),c=ensureRig(r);if(c.traits.some(t=>t.part===part&&t.kind===kind&&(part!==1||t.slot===slot)))throw Error('This trait is already present. Re-roll the D6.');c.traits.push({part,kind,slot,locked});normalizeRig(r);}
function snapshot(){const x=clone(state);x.saved=[];if(x.campaign)x.campaign.undo=[];return x;}
function transact(label,fn){const before=snapshot();try{fn();const delta=state.campaign.salvage-(before.campaign?.salvage||0);state.campaign.ledger.unshift({at:new Date().toISOString(),text:label+(delta?` (${delta>0?'+':''}${delta} Salvage)`:''),salvage:state.campaign.salvage});state.campaign.undo.unshift({label,state:before});state.campaign.undo=state.campaign.undo.slice(0,5);render();notify(label);}catch(e){const saved=state.saved,undo=state.campaign?.undo;state=before;state.saved=saved;if(undo)state.campaign.undo=undo;notify(e.message);}}
function spend(n){if(n>state.campaign.salvage)throw Error(`Need ${n} Salvage; only ${state.campaign.salvage} available.`);state.campaign.salvage-=n;}
function numberInput(label,path,value,min=0,max=999){return `<label class="field"><span>${label}</span><input type="number" min="${min}" max="${max}" step="1" data-c-field="${path}" value="${value??''}"></label>`;}
function dieInput(label,path,value,sides){return `<div class="die-field">${numberInput(label,path,value,1,sides)}<button data-c-action="roll" data-path="${path}" data-sides="${sides}" aria-label="Roll ${label}">D${sides}</button></div>`;}
function selectField(label,path,list,value){return `<label class="field"><span>${label}</span><select data-c-field="${path}">${options(list,value)}</select></label>`;}
function checkField(label,path,value){return `<label class="checkline"><input type="checkbox" data-c-field="${path}" ${value?'checked':''}>${label}</label>`;}
function setCampaignPath(path,value){if(state.campaign.report?.autoUnderdog&&['report.underdog','report.underdogDie'].includes(path))return;const parts=path.split('.');if(parts.some(p=>['__proto__','constructor','prototype'].includes(p)))return;let obj=state.campaign;for(const p of parts.slice(0,-1)){if(!(p in obj))return;obj=obj[p];}obj[parts.at(-1)]=value;}
function int(n,min,max,label){if(!Number.isInteger(n)||n<min||n>max)throw Error(`${label}: enter an integer from ${min} to ${max}.`);return n;}
function terrainEffect(report){const e={...TERRAINS[report.terrain][report.result==='loss'?1:2]};if(e.targets)e.targets=Math.min(e.targets,deployedRigs().filter(r=>r.battle.parts.some(p=>p!=='disabled')).length);return e;}
function terrainText(e){return [e.salvage?`+${e.salvage} Salvage`:'',e.repairs?`${e.repairs} free repair credits`:'',e.equipment?`${e.equipment} free Equipment`:'',e.weapons?`${e.weapons} free weapons`:'',e.rig?`1 ${e.rig} Rig`:'',e.xpAll?`+${e.xpAll} XP to each Ironclad`:'',e.xpOne?`+${e.xpOne} XP to one Ironclad`:'',e.damage?`${e.damage} damage to ${e.targets} Rig(s); select components below`:''].filter(Boolean).join(' · ');}
function shortFormation(){
 const f=FORMATIONS[state.formation]?.[1];
 return !!state.campaign?.shortHanded&&!!f&&Object.keys(WEIGHTS).some((w,i)=>deployedRigs().filter(r=>!r.campaign?.mercenary&&rigOf(r).weight===w).length<f[i]);
}
function prepareReinforcement(){
 const c=state.campaign;
 c.battleReinforcement??={short:shortFormation(),die:null};
 const reward=c.battleReinforcement;
 if(!reward.short)return;
 if(reward.die==null){
  // Keep an already entered valid result when upgrading an unfinished report.
  const prior=c.report?.underdog==='short'?Number(c.report.underdogDie):0;
  if(Number.isInteger(prior)&&prior>=1&&prior<=6)reward.die=prior;
  else{const a=new Uint32Array(1),limit=Math.floor(4294967296/6)*6;do{crypto.getRandomValues(a);}while(a[0]>=limit);reward.die=a[0]%6+1;}
 }
 if(c.report){c.report.underdog='short';c.report.underdogDie=reward.die;c.report.autoUnderdog=true;}
}
function newReport(){
 const c=state.campaign;
 c.report={result:'win',terrain:pregameSettings().terrain,pregame:clone(pregameSettings()),title:`Engagement ${c.games.length+1}`,outcomeDie:null,normalVP:0,salvageObjectives:0,scenarioSalvage:0,scenarioReason:'',cityPilot:'',settlementReserves:true,environment:[{rig:'',part:0},{rig:'',part:0}],underdog:'none',underdogDie:null,opponentValue:null,rows:{}};
 for(const r of deployedRigs())c.report.rows[r.id]={destroyed:r.battle.parts.filter(p=>p==='disabled').length>=2,exploded:!!r.battle.exploded,recovery:null,pilotRecovery:null,kills:[0,0,0,0],objectives:0,search:null,equipmentDie:null,extraSearches:[],extraXP:0};
 prepareReinforcement();c.phase='report';state.view='campaign';
}
function reportRigBattle(r,rep){const b=clone(r.battle),e=terrainEffect(rep);if(e.damage)for(const t of rep.environment.slice(0,e.targets)){if(t.rig===r.id)inflict(b,Number(t.part),e.damage);}return b;}
function reportDestroyed(r,rep){return rep.rows[r.id].destroyed||rep.rows[r.id].exploded||reportRigBattle(r,rep).parts.filter(p=>p==='disabled').length>=2;}
function searchReward(die,bonus,equipmentDie){const n=int(die,1,12,'Salvage D12')+(bonus?1:0);if(n===1)return {salvage:0,text:'Nothing of value'};if(n===2||n===3)return {salvage:n===2?3:5,text:`${n===2?3:5} Salvage`};if(n===13)return {wreck:true,text:'One Rig destroyed in this Engagement, if any'};const table=n<=6?0:n<=9?1:2;int(equipmentDie,1,12,'Equipment table D12');const equipment=table*12+equipmentDie-1;return {equipment,text:DATA.equipment[equipment].name};}
function outcomePreview(rep){
 int(rep.terrain,0,11,'Battlefield');const e=terrainEffect(rep),outcome=int(rep.outcomeDie,1,rep.result==='loss'?3:6,'Engagement reward die');
 let salvage=outcome+int(rep.normalVP,0,999,'Objective Salvage / VP')+3*int(rep.salvageObjectives,0,999,'Salvage objectives')+(e.salvage||0)+int(rep.scenarioSalvage,-999,999,'Scenario Salvage');
 if(rep.scenarioSalvage&&!rep.scenarioReason.trim())throw Error('Add a reason for the scenario Salvage adjustment.');
 let renown=rep.result==='win'?3:rep.result==='draw'?1:0,kills=0;const entries=[],rewards=[];
 if(e.damage){const targets=rep.environment.slice(0,e.targets);if(targets.some(t=>!state.campaign.deployed.includes(t.rig)))throw Error('Select all battlefield damage targets.');if(new Set(targets.map(t=>t.rig)).size!==targets.length)throw Error('Battlefield damage requires different Rigs.');}
 if(e.xpOne&&!state.squad.some(r=>r.id===rep.cityPilot)&&!state.campaign.pilots.some(p=>'pool-'+p.id===rep.cityPilot))throw Error('Select the City Centre XP recipient.');
 for(const r of deployedRigs()){
  const row=rep.rows[r.id],b=reportRigBattle(r,rep),destroyed=reportDestroyed(r,rep),merc=r.campaign.mercenary;
  const k=row.kills.map(n=>int(n,0,99,'Enemy Rigs destroyed'));const total=k.reduce((a,n)=>a+n,0);
  int(row.objectives,0,99,'Objectives');if(merc&&row.objectives)throw Error('Mercenaries cannot capture or secure objectives.');
  salvage+=k.reduce((n,v,i)=>n+v*[1,1,2,3][i],0);kills+=total;renown+=total+row.objectives;
  let recovered=true,survives=true;
  if(destroyed){if(!merc){const mod=!row.exploded&&r.equipment.includes(34)?2:0;recovered=int(row.recovery,1,12,`${r.name} recovery D12`)+mod>=(row.exploded?7:2);survives=int(row.pilotRecovery,1,12,`${r.name} Ironclad D12`)>=(row.exploded?5:2);}else{recovered=false;survives=false;}}
  let xp=survives&&!merc?1+k.reduce((n,v,i)=>n+v*(i+1),0)+row.objectives+(e.xpAll||0)+(rep.cityPilot===r.id?e.xpOne||0:0)+int(row.extraXP,0,999,'Scenario XP'):0;
  const searched=[];
  if(!destroyed){const reward=searchReward(row.search,total>0,row.equipmentDie);searched.push(reward);if(r.equipment.includes(32)){if(row.extraSearches.length>3)throw Error('Maximum three additional Recovery Rig searches.');for(const extra of row.extraSearches)searched.push(searchReward(extra.die,false,extra.equipmentDie));}}
  for(const reward of searched){salvage+=reward.salvage||0;rewards.push(reward);}
  entries.push({id:r.id,name:r.name,battle:b,destroyed,exploded:row.exploded,recovered,survives,xp,searches:searched,mercenary:merc});
 }
 // Compare the rosters after recovery and rewards, before the reinforcement itself.
 const retained=state.squad.filter(r=>!r.campaign?.mercenary&&!entries.some(x=>x.id===r.id&&!x.recovered));
 rep.ownRosterValue=retained.reduce((n,r)=>n+RECRUIT_COST[rigOf(r).weight],state.campaign.salvage+salvage);
 prepareReinforcement();
 const reward=state.campaign.battleReinforcement;
 if(!reward.short){
  rep.autoUnderdog=true;
  if(rep.opponentValue===null||rep.opponentValue===''||rep.opponentValue===undefined)throw Error('Enter the opponent roster value to calculate Underdog Salvage.');
  const opponent=int(rep.opponentValue,0,999999,'Opponent roster value');
  rep.underdog=rep.ownRosterValue<opponent?'lower':'none';
  if(rep.underdog==='lower'){
   if(reward.lowerDie==null){const prior=Number(rep.underdogDie);if(Number.isInteger(prior)&&prior>=1&&prior<=3)reward.lowerDie=prior;else{const a=new Uint32Array(1),limit=Math.floor(4294967296/3)*3;do{crypto.getRandomValues(a);}while(a[0]>=limit);reward.lowerDie=a[0]%3+1;}}
   rep.underdogDie=reward.lowerDie;
  }else rep.underdogDie=null;
 }
 let underdog=0;if(rep.underdog!=='none')underdog=int(rep.underdogDie,1,rep.underdog==='lower'?3:6,'Underdog die');salvage+=underdog;
 const reserveXP=[];
 for(const r of state.squad.filter(r=>!state.campaign.deployed.includes(r.id)&&!r.campaign.mercenary)){const xp=(rep.settlementReserves?e.xpAll||0:0)+(rep.cityPilot===r.id?e.xpOne||0:0);if(xp)reserveXP.push({id:r.id,name:r.campaign.pilotName,xp});}
 for(const p of state.campaign.pilots){const xp=(rep.settlementReserves?e.xpAll||0:0)+(rep.cityPilot==='pool-'+p.id?e.xpOne||0:0);if(xp)reserveXP.push({id:'pool-'+p.id,name:p.name,xp});}
 return {salvage,renown,kills,entries,rewards,e,underdog,reserveXP};
}
function applyReport(){const c=state.campaign,rep=c.report;if(!rep||c.phase!=='report')throw Error('No pending Aftermath.');const p=outcomePreview(rep);
 if(c.salvage+p.salvage<0)throw Error('Salvage cannot become negative.');
 c.salvage+=p.salvage;c.renown+=p.renown;
 for(const award of p.reserveXP){const r=state.squad.find(r=>r.id===award.id);if(r)xpAward(r,award.xp);else{const pilot=c.pilots.find(x=>'pool-'+x.id===award.id),temp={pilot:pilot.grade,campaign:{xp:pilot.xp,level:pilot.level,rerolls:pilot.rerolls}};xpAward(temp,award.xp);Object.assign(pilot,{grade:temp.pilot,xp:temp.campaign.xp,level:temp.campaign.level,rerolls:temp.campaign.rerolls});}}
 for(const entry of p.entries){const r=state.squad.find(x=>x.id===entry.id);r.battle=entry.battle;for(const used of r.battle.spent){r.equipment=r.equipment.filter(id=>id!==used);delete r.targets[used];}if(entry.survives)xpAward(r,entry.xp);
  if(entry.mercenary){state.squad=state.squad.filter(x=>x.id!==r.id);continue;}
  if(entry.destroyed&&!entry.recovered){if(entry.survives)pushPilot(r);state.squad=state.squad.filter(x=>x.id!==r.id);}
  else if(!entry.survives)assignPilot(r,{id:uid(),name:r.name+' Rookie',grade:0,xp:0,level:1,rerolls:0});
 }
 for(const reward of p.rewards){if(reward.equipment!==undefined)c.inventory.equipment.push(reward.equipment);if(reward.wreck)c.credits.wrecks.push({game:rep.title,source:'Destroyed during this Engagement only'});}
 c.credits.repairs+=p.e.repairs||0;c.credits.weapons+=p.e.weapons||0;c.credits.equipment+=p.e.equipment||0;if(p.e.rig)c.credits.rigs.push(p.e.rig);
 for(const r of state.squad){ensureRig(r).freeSP=3;r.campaign.cacheUsed=false;normalizeRig(r);}
 c.games.push({id:uid(),at:new Date().toISOString(),title:rep.title,result:rep.result,terrain:TERRAINS[rep.terrain][0],salvage:p.salvage,renown:p.renown,kills:p.kills,entries:p.entries,report:clone(rep),reserveXP:p.reserveXP});
 c.report=null;c.battleReinforcement=null;c.market=null;c.phase='aftermath';c.deployed=c.deployed.filter(id=>state.squad.some(r=>r.id===id));campaignTab='hangar';
}
function reportView(){
 if(state.campaign.report)delete state.campaign.report.ownRosterValue;
 const c=state.campaign,rep=c.report,e=terrainEffect(rep);let preview,problem;try{preview=outcomePreview(rep);}catch(err){problem=err.message;}
 return `<div class="toolbar"><div><span class="eyebrow">AFTERMATH · RULEBOOK PP. 103–108</span><h2>Resolve the Engagement</h2></div><button data-c-action="cancel-report">Return to battle</button></div>
 <section class="panel"><h3>1. Result and battlefield</h3><div class="form-grid"><label class="field"><span>Engagement name</span><input maxlength="80" data-c-field="report.title" value="${esc(rep.title)}"></label>${selectField('Result','report.result',[['win','Victory'],['draw','Draw'],['loss','Defeat']],rep.result)}${selectField('Battlefield','report.terrain',TERRAINS.map((t,i)=>[i,`${i+1}. ${t[0]}`]),rep.terrain)}${dieInput('Engagement Salvage','report.outcomeDie',rep.outcomeDie,rep.result==='loss'?3:6)}${numberInput('Normal objectives: Salvage awarded / VP','report.normalVP',rep.normalVP)}${numberInput('Salvage objectives (3 Salvage each)','report.salvageObjectives',rep.salvageObjectives)}</div><p class="warning">${terrainText(e)}</p><p class="small">A draw uses Victory rewards, with 1 Renown for the result. Objective counts entered per Ironclad below award XP and Renown; the fields above award objective Salvage. Do not count Salvage objectives again as normal VP.</p>
 ${e.xpOne?selectField('City Centre: XP recipient','report.cityPilot',[['','Select Ironclad'],...state.squad.filter(r=>!r.campaign.mercenary).map(r=>[r.id,r.campaign.pilotName]),...c.pilots.map(p=>['pool-'+p.id,p.name+' (unassigned)'])],rep.cityPilot):''}
 ${e.xpAll?checkField('Apply Settlement XP to reserve and unassigned Ironclads as well','report.settlementReserves',rep.settlementReserves):''}
 ${e.damage?`<p class="small">The battlefield table names Rigs but not impact locations. Choose the components agreed at the table; these damage allocations are recorded in the report.</p><div class="form-grid">${rep.environment.slice(0,e.targets).map((t,i)=>`<div>${selectField(`Damage target ${i+1}`,`report.environment.${i}.rig`,[['','Select Rig'],...deployedRigs().map(r=>[r.id,r.name])],t.rig)}${selectField('Component',`report.environment.${i}.part`,PARTS.map((n,j)=>[j,n]),t.part)}</div>`).join('')}</div>`:''}
 </section>
 <section class="panel" style="margin-top:18px"><h3>2. Rig recovery, Ironclads and searches</h3><p class="small">Enter the final blow credits for each Rig. Recovery and Ironclad survival are separate D12 rolls. Recovery: 2+ / 7+ if exploded; Ironclad: 2+ / 5+ if exploded. Contracted Recovery Crew adds +2 to Rig recovery only when it did not explode. Surviving pilots from lost Rigs move to the pilot pool.</p><div class="report-rigs">${deployedRigs().map(r=>{const row=rep.rows[r.id];let destroyed=row.destroyed;try{destroyed=reportDestroyed(r,rep);}catch{}const finalBlow=row.kills.reduce((s,n)=>s+n,0)>0;return `<article class="report-rig"><div class="section-top"><h3>${esc(r.name)}</h3><span class="badge">${esc(r.campaign.pilotName)}</span></div><div class="row">${checkField('Destroyed',`report.rows.${r.id}.destroyed`,row.destroyed)}${checkField('Exploded',`report.rows.${r.id}.exploded`,row.exploded)}</div>${destroyed&&!r.campaign.mercenary?`<div class="form-grid">${dieInput('Rig recovery D12',`report.rows.${r.id}.recovery`,row.recovery,12)}${dieInput('Ironclad survival D12',`report.rows.${r.id}.pilotRecovery`,row.pilotRecovery,12)}</div>`:''}<div class="form-grid">${Object.keys(WEIGHTS).map((w,i)=>numberInput(`${w} enemy Rigs destroyed`,`report.rows.${r.id}.kills.${i}`,row.kills[i],0,99)).join('')}${r.campaign.mercenary?'<p class="small">Mercenary: no objective captures or XP.</p>':numberInput('Objectives captured / secured',`report.rows.${r.id}.objectives`,row.objectives,0,99)+numberInput('Additional mission XP',`report.rows.${r.id}.extraXP`,row.extraXP)}</div>
 ${!destroyed?`<h4>Salvage the battlefield ${finalBlow?'· +1 for final blow':''}</h4><div class="form-grid">${dieInput('Search D12',`report.rows.${r.id}.search`,row.search,12)}${dieInput('Equipment D12 (if table result 4–12)',`report.rows.${r.id}.equipmentDie`,row.equipmentDie,12)}</div>${r.equipment.includes(32)?`<p class="small">Battlefield Recovery Rig: add the number of extra searches agreed for its D3 effect. These are recorded separately from the Rig’s normal search.</p><button data-c-action="add-search" data-id="${r.id}" ${row.extraSearches.length>=3?'disabled':''}>Add Recovery Rig search</button>${row.extraSearches.map((x,i)=>`<div class="form-grid">${dieInput(`Additional search ${i+1}`,`report.rows.${r.id}.extraSearches.${i}.die`,x.die,12)}${dieInput('Equipment D12 if required',`report.rows.${r.id}.extraSearches.${i}.equipmentDie`,x.equipmentDie,12)}<button data-c-action="remove-search" data-id="${r.id}" data-index="${i}">Remove this search</button></div>`).join('')}`:''}`:'<p class="small">Destroyed Rigs do not make a normal battlefield search.</p>'}</article>`;}).join('')}</div></section>
 <section class="panel" style="margin-top:18px"><h3>3. Roster comparison & Underdog Reinforcement</h3><p class="small">Roster value = retained Rig recruit costs + banked Salvage, including this Engagement's rewards before Underdog Salvage. Ask your opponent for their value at the same stage. A lower value grants D3; short-handed grants D6 instead. Equal values grant no D3.</p><div class="form-grid">${numberInput('Opponent roster value','report.opponentValue',rep.opponentValue,0,999999)}<div class="field"><span>Your roster value</span><strong>${rep.ownRosterValue??'Complete recovery and reward rolls first'}</strong></div><div class="field"><span>Difference · opponent minus yours</span><strong>${rep.ownRosterValue!=null&&rep.opponentValue!==null&&rep.opponentValue!==''&&rep.opponentValue!==undefined&&Number.isInteger(Number(rep.opponentValue))&&Number(rep.opponentValue)>=0?Number(rep.opponentValue)-rep.ownRosterValue:'—'}</strong></div><div class="field"><span>Additional Salvage</span><strong>${preview?preview.underdog?`+${preview.underdog} Salvage · ${rep.underdog==='short'?'D6 / short-handed':'D3 / lower roster value'}`:'No reinforcement':rep.autoUnderdog&&rep.underdog==='short'?`D6 = ${rep.underdogDie} · short-handed`:'Complete the report and enter the opponent value'}</strong><p class="small">Automatically included when you confirm Apply Aftermath. D3 and D6 never stack. Editing values or reopening this report keeps the same die result.</p></div>${numberInput('Scenario Salvage adjustment','report.scenarioSalvage',rep.scenarioSalvage,-999,999)}<label class="field"><span>Scenario adjustment / mission notes</span><input data-c-field="report.scenarioReason" maxlength="500" value="${esc(rep.scenarioReason)}"></label></div></section>
 <section class="panel report-review" style="margin-top:18px"><h3>4. Review and apply</h3>${problem?`<p class="warning">${esc(problem)}</p>`:`${stats([[preview.salvage,'Salvage gained'],[preview.renown,'Renown gained'],[preview.kills,'Enemy Rigs destroyed'],[c.games.length+1,'Engagement']])}<ul>${preview.entries.map(x=>`<li><b>${esc(x.name)}</b>: ${x.mercenary?'mercenary contract ends':x.recovered?'Rig retained':'Rig permanently lost'}; ${x.mercenary?'no XP':x.survives?`Ironclad survives, +${x.xp} XP`:'Ironclad lost; retained Rig receives a Rookie'}. ${x.searches.map(s=>esc(s.text)).join('; ')}</li>`).join('')}${preview.reserveXP.map(x=>`<li>${esc(x.name)} (reserve): +${x.xp} XP</li>`).join('')}</ul><p class="small">XP, level perks and mandatory promotions are applied automatically. Terrain rewards enter the hangar as credits. Damage and permanent traits carry forward; repairs are made in the hangar after applying this report. No automatic full repair.</p>`}<button class="primary full" data-c-action="apply-report" ${problem?'disabled':''}>Apply Aftermath once</button></section>`;
}
function rosterValue(){return state.squad.filter(r=>!r.campaign?.mercenary).reduce((n,r)=>n+RECRUIT_COST[rigOf(r).weight],state.campaign.salvage);}
function campaignView(){
 ensureCampaign();const c=state.campaign;
 if(!c.started)return `<section class="panel"><h2>Start your campaign</h2><p>Build the initial squadron with a Skirmish formation and 15 Iron.</p><div class="warning">${startingSquadronErrors().map(esc).join('<br>')||(!state.squad.length?'Add your starting Rigs.':'Starting roster is valid.')}</div><button class="primary" data-c-action="start" ${!state.squad.length||startingSquadronErrors().length?'disabled':''}>Start campaign with this roster</button><button data-action="view" data-value="build">Return to builder</button></section>`;
 if(c.phase==='report'&&c.report)return reportView();
 return `<div class="toolbar"><div><span class="eyebrow">${esc(state.name)} · ${c.phase==='battle'?'ENGAGEMENT IN PROGRESS':'CAMPAIGN HANGAR'}</span><h2>${campaignTab==='setup'?'Game setup':'Campaign hangar'}</h2></div><details id="campaign-tools"><summary>Backup & undo</summary><div class="row"><button data-c-action="backup">Export backup</button><button data-c-action="import">Import backup</button><input type="file" id="campaign-import" accept="application/json,.json" hidden><button data-c-action="undo" ${!c.undo.length?'disabled':''}>Undo last change</button></div></details></div>
 ${stats([[c.salvage,'Banked Salvage'],[c.renown,'Renown'],[`${c.games.length}/${c.season}`,'Engagements'],[rosterValue(),'Roster value']])}
 ${c.games.length>=c.season?`<p class="warning">Season complete. Final Renown: ${c.renown}. Tie-break: ${c.games.reduce((n,g)=>n+g.kills,0)} enemy Rigs destroyed. Compare standings with your campaign group.</p>`:''}
 <div class="campaign-nav">${['setup','hangar','inventory','market','history'].map(v=>`<button data-c-action="tab" data-value="${v}" class="${campaignTab===v?'primary':''}">${{setup:'Game setup',hangar:'Hangar',inventory:'Inventory',market:'Iron Market',history:'History & settings'}[v]}</button>`).join('')}</div>
 ${campaignTab==='setup'?gameSetupView():campaignTab==='inventory'?inventoryView():campaignTab==='market'?marketView():campaignTab==='history'?historyView():hangarView()}`;
}
function sortedHangarRigs(){
 const list=state.squad.slice(),order=state.campaign.hangarSort;
 if(order==='purchase-desc')list.reverse();
 if(order==='class'){const weights=['Light','Medium','Heavy','Colossal'];list.sort((a,b)=>weights.indexOf(rigOf(a).weight)-weights.indexOf(rigOf(b).weight));}
 return list;
}
function inventoryView(){
 const c=state.campaign,locked=['battle','report'].includes(c.phase);
 return `<section class="panel"><h2>Inventory</h2><p class="small">Unassigned Ironclads and stored items only. Mounted loadouts remain on their Rig cards.</p>${locked?'<p class="warning">Inventory changes are locked until Aftermath is resolved.</p>':'<button data-c-action="tab" data-value="market">Equip stored items in Iron Market</button>'}</section>
 <div class="inventory-grid"><section class="panel"><h3>Available Ironclads (${c.pilots.length})</h3>${c.pilots.length?c.pilots.map(p=>`<article class="inventory-item"><strong>${esc(p.name)}</strong><p class="small">${PILOTS[p.grade].name} · Level ${p.level} · ${p.xp} XP · ${p.rerolls} re-rolls/game</p></article>`).join(''):'<p class="small">No unassigned Ironclads.</p>'}<p class="small">Assign an Ironclad through Rig & pilot management in the hangar.</p></section>
 <section class="panel"><h3>Stored weapons (${c.inventory.weapons.length})</h3>${c.inventory.weapons.length?c.inventory.weapons.map((item,i)=>{const rig=DATA.rigs.find(r=>r.id===item.rigId),w=rig?.weapons[item.index];return `<article class="inventory-item"><strong>${esc(w?.name||'Unknown weapon')}</strong><p class="small">${esc(rig?.name)} · ${isHull(w||{perks:''})?'Hull only':'Arm weapon'} · ${w?.iron||0} Iron${item.traits?.length?` · ${item.traits.length} permanent traits`:''}</p><button data-c-action="sell-weapon" data-index="${i}" ${locked?'disabled':''}>Sell · ${Math.ceil((w?.iron||0)/2)} Salvage</button></article>`;}).join(''):'<p class="small">No stored weapons.</p>'}</section>
 <section class="panel"><h3>Stored Equipment (${c.inventory.equipment.length})</h3>${c.inventory.equipment.length?c.inventory.equipment.map((id,i)=>{const e=DATA.equipment[id];return `<article class="inventory-item"><strong>${esc(e.name)}</strong><p class="small">${esc(e.effect)}</p><button data-c-action="sell-equipment" data-index="${i}" ${locked?'disabled':''}>Sell · ${Math.ceil(e.iron/2)} Salvage</button></article>`;}).join(''):'<p class="small">No stored Equipment.</p>'}</section></div>`;
}
function gameSetupView(){const c=state.campaign,locked=c.phase==='battle';return `${pregamePanel()}<section class="panel"><div class="section-top"><h3>Deployment</h3><span class="badge">${deployedRigs().length} selected / ${state.squad.length} owned</span></div>${locked?'<p class="warning">An Engagement is in progress. Roster and market changes are locked until Aftermath.</p><div class="row"><button class="primary" data-c-action="resume">Resume battle sheets</button><button data-c-action="finish-battle">Finish Engagement / Aftermath</button></div>':`<div class="form-grid"><label class="field"><span>Agreed formation</span><select data-field="formation">${options(FORMATIONS.flatMap((f,i)=>i?[[i,f[0]]]:[]),state.formation)}</select><button type="button" data-formation-random>Random formation</button></label><details id="deployment-options"><summary>Short-handed deployment${c.shortHanded?' · enabled':''}</summary>${checkField('Unable to fill formation: deploy remaining available Rigs','shortHanded',c.shortHanded)}</details></div><p class="small">Select the Rigs for this Engagement; the rest remain in reserve. A mercenary uses its separate support slot.</p>${shortFormation()?'<p class="warning">Incomplete formation: D6 Underdog Salvage will be added automatically to your Aftermath rewards.</p>':''}<div class="setup-roster">${state.squad.map(r=>`<label class="checkline"><input type="checkbox" data-c-deploy="${r.id}" ${c.deployed.includes(r.id)?'checked':''}><span><strong>${esc(r.name)}</strong> · ${rigOf(r).weight}${r.campaign?.mercenary?' · Mercenary':''}</span></label>`).join('')}</div>${squadronErrors().length?`<p class="warning">${squadronErrors().map(esc).join('<br>')}</p>`:''}<button class="primary" data-c-action="deploy" ${squadronErrors().length?'disabled':''}>Begin next Engagement</button>`}</section>`; }
function hangarView(){const c=state.campaign,locked=c.phase==='battle';return `
 <section class="panel hangar-sort"><label class="field"><span>Sort Rigs</span><select data-c-field="hangarSort">${options([['purchase','Purchase order · oldest first'],['purchase-desc','Purchase order · newest first'],['class','Class · Light to Colossal']],c.hangarSort||'purchase')}</select></label><button data-c-action="tab" data-value="inventory">Open inventory</button></section><div class="campaign-roster">${sortedHangarRigs().map(r=>{const x=ensureRig(r),rig=effectiveRig(r);return `<article class="panel hangar-card">${rigBanner(r)}<div class="section-top"><div><h3>${esc(r.name)}</h3><span class="small">${rig.name} · ${cost(r)}/${ironCapacity(r)} Iron</span></div><label class="checkline deployment-toggle"><input type="checkbox" data-c-deploy="${r.id}" ${c.deployed.includes(r.id)?'checked':''} ${locked?'disabled':''}>${c.deployed.includes(r.id)?'Deploy':'Reserve'}</label></div>
 <label class="field hangar-pilot"><span>Ironclad name</span><input data-c-pilot-name="${r.id}" maxlength="60" placeholder="Name your Ironclad" value="${esc(x.pilotName)}"></label><p class="small pilot-progress">${pilotOf(r).name} · Aim ${pilotOf(r).aim}+ · Aim target modifier ${pilotOf(r).aim-6} · Level ${x.level} · ${x.xp} XP · ${x.rerolls} re-rolls earned / game${locked&&c.deployed.includes(r.id)?` · ${Math.max(0,x.rerolls-(r.battle.rerollsUsed||0))} remaining`:""}${x.mercenary?' · Mercenary':''}</p>
 <div class="hangar-components">${PARTS.map((p,i)=>`<div class="component-status ${componentColour(r.battle,i)} ${r.battle.parts[i]!=='ok'||r.battle.sp[i]<rig.sp[i]||r.battle.ruptured[i]?'damaged':''}"><span>${p}</span><strong>${r.battle.sp[i]}/${rig.sp[i]}</strong><small>${r.battle.parts[i]==='ok'?'Operational':r.battle.parts[i]==='disabled'?'Disabled':'Catastrophic'}${r.battle.ruptured[i]?' · Ruptured':''}</small></div>`).join('')}</div>
 ${x.traits.length?`<details id="hangar-traits-${r.id}"><summary>Permanent damage · ${x.traits.length} traits</summary>${x.traits.map(t=>`<p class="small warning">${PARTS[t.part]}${t.part===1?' / '+SLOTS[t.slot]:''}: <b>${TRAITS[t.part][t.kind][0]}</b> — ${TRAITS[t.part][t.kind][1]}${t.locked?' (second-hand; cannot be removed)':''}</p>`).join('')}</details>`:''}
 <details id="hangar-loadout-${r.id}"><summary>Weapons & Equipment</summary><p class="small">${r.weapons.map((w,i)=>w===null?'':SLOTS[i]+': '+esc(rig.weapons[w].name)).filter(Boolean).join('<br>')}</p><p class="small">Equipment: ${r.equipment.map(id=>esc(DATA.equipment[id].name)).join(', ')||'None'}</p>${!locked?`<button data-c-action="market-rig" data-id="${r.id}">Manage loadout</button>`:''}</details>
 ${!locked?`<details id="hangar-repairs-${r.id}"><summary>Repairs · ${x.freeSP} free SP remaining</summary><p class="small">Regular repairs: first 3 SP per Rig free, then 1 Salvage per 3 SP (rounded up). Restore Disabled → Catastrophic for 1 Salvage; Catastrophic → full for 1 Salvage. Each restoration adds a unique D6 trait. Two restoration steps therefore require two rolls.</p>${PARTS.map((part,i)=>`<div class="repair-row"><strong>${part} · ${r.battle.sp[i]}/${rig.sp[i]}</strong><div class="row"><label class="small">SP <input class="short-input" type="number" id="repair-${r.id}-${i}" min="1" max="${rig.sp[i]}" value="1"></label><label class="small">Trait D6 <input class="short-input" type="number" id="trait-${r.id}-${i}" min="1" max="6" placeholder="D6"></label>${i===1?`<select id="trait-slot-${r.id}" aria-label="Affected weapon">${options([[0,'Left weapon'],[1,'Right weapon']],0)}</select>`:''}<button data-c-action="repair" data-id="${r.id}" data-part="${i}">${r.battle.parts[i]==='ok'?'Repair SP':'Restore component'}</button></div>${c.credits.repairs?`<label class="checkline"><input type="checkbox" id="free-${r.id}-${i}">Use 1 terrain free-repair credit for this operation</label>`:''}${r.equipment.includes(33)&&!x.cacheUsed?`<label class="checkline"><input type="checkbox" id="cache-${r.id}-${i}">Iron Market Parts Cache: ignore the new repair trait (once this Aftermath)</label>`:''}</div>`).join('')}<p class="small">The battlefield table does not define the size of a “free repair”. This option treats one credit as the selected repair operation; use only if agreed by your group. Manual adjustments can record another ruling.</p></details>
 <details id="hangar-management-${r.id}"><summary>Rig & pilot management</summary><label class="field"><span>Rig name</span><input data-c-rig-name="${r.id}" maxlength="45" value="${esc(r.name)}"></label><select id="pilot-${r.id}" aria-label="Assign Ironclad">${options([['rookie','Recruit Rookie · 0 Salvage'],['experienced','Recruit Experienced · 1 Salvage'],...c.pilots.map(p=>[p.id,`${p.name} · ${PILOTS[p.grade].name} · ${p.xp} XP`])],'rookie')}</select><button data-c-action="pilot" data-id="${r.id}">Assign selected Ironclad</button><p class="small">The current Ironclad moves to the unassigned pilot pool. XP, level and re-rolls stay with the Ironclad.</p><button class="danger" data-c-action="scrap-rig" data-id="${r.id}" ${x.mercenary?'disabled title="Hired Rigs cannot be scrapped"':''}>Scrap chassis · ${Math.ceil(RECRUIT_COST[rig.weight]/2)} Salvage</button></details>`:''}</article>`;}).join('')}</div>${!state.squad.length?'<div class="empty">No Rigs remain. Visit the Iron Market or claim rewards to rebuild.</div>':''}`;}
function marketView(){const c=state.campaign;if(c.phase==='battle')return '<section class="panel">The Iron Market is closed during an Engagement. Resolve Aftermath first.</section>';
 c.market??={rigId:state.squad[0]?.id||'',chassis:DATA.rigs.find(r=>r.faction===state.faction).id,source:'purchase',pilot:0,weapon:0,slot:0,equipment:0,weaponSource:'buy',equipmentSource:'buy',secondRolls:[null,null,null,null],secondDamage:[null,null,null,null],wreckSP:[0,0,0,0],wreckParts:['disabled','disabled','disabled','disabled']};
 if(!state.squad.some(r=>r.id===c.market.rigId)){c.market.rigId=state.squad[0]?.id||'';c.market.weapon=0;c.market.slot=0;c.market.weaponSource='buy';}
 const m=c.market,r=state.squad.find(r=>r.id===m.rigId);const availableChassis=campaignChassis(m.source);if(!availableChassis.some(x=>x.id===m.chassis))m.chassis=availableChassis[0].id;const chassis=DATA.rigs.find(r=>r.id===m.chassis)||DATA.rigs[0];
 return `<section class="panel"><h3>Available rewards & inventory</h3><p>${c.credits.weapons} free weapon credits · ${c.credits.equipment} free Equipment credits · ${c.credits.repairs} free repair credits</p><p class="small">Rig rewards: ${c.credits.rigs.join(', ')||'None'} · Recovered-wreck claims: ${c.credits.wrecks.length}</p><p class="small">Stored weapons: ${c.inventory.weapons.length} · Stored Equipment: ${c.inventory.equipment.length} · Unassigned Ironclads: ${c.pilots.length}</p></section>
 <section class="panel" style="margin-top:18px"><h3>Recruit or recover a Rig</h3><div class="form-grid">${selectField('Source','market.source',[['purchase','New chassis'],['second','Second-hand chassis · half cost'],['reward','Battlefield Rig reward'],['wreck','Salvage result 13 · destroyed Rig'],...(!c.hired?[['mercenary','Mercenary support · once per campaign']]:[])],m.source)}${chassisMarketField(m)}${m.source==='mercenary'?selectField('Hired Ironclad grade (agree with opponent)','market.pilot',PILOTS.map((x,i)=>[i,x.name]),m.pilot):''}</div><p class="small">New / second-hand recruits receive a Rookie (0 Salvage) and ${STARTING_WEAPONS[chassis.weight]} Iron of weapon allowance. Extra weapons and Equipment cost Salvage. Assign an existing Ironclad afterwards if desired.</p>
 ${m.source==='reward'?'<p class="small">Consumes one matching battlefield Rig reward. This app treats that reward as a newly acquired chassis with the normal starting weapon allowance; record a different group ruling through adjustments if needed.</p>':''}
 ${m.source==='second'?`<p class="warning">Second-hand: four permanent traits (one per component type) and D3 damage per component. The Arms trait initially affects the left weapon. These traits cannot be removed.</p><div class="form-grid">${PARTS.map((p,i)=>`<div>${dieInput(p+' trait D6',`market.secondRolls.${i}`,m.secondRolls[i],6)}${dieInput(p+' damage D3',`market.secondDamage.${i}`,m.secondDamage[i],3)}</div>`).join('')}</div>`:''}
 ${m.source==='wreck'?`<p class="warning">Only a Rig actually destroyed during the last Engagement may be acquired. Enter its state at destruction. It receives no free weapon allowance. Record surviving weapons, Equipment and prior traits from its original sheet using the adjustment tools before deployment.</p><div class="form-grid">${PARTS.map((p,i)=>`<div>${numberInput(p+' SP at destruction',`market.wreckSP.${i}`,m.wreckSP[i],0,chassis.sp[i])}${selectField(p+' status',`market.wreckParts.${i}`,[['ok','Operational'],['catastrophic','Catastrophically Damaged'],['disabled','Disabled']],m.wreckParts[i])}</div>`).join('')}</div>`:''}
 ${m.source==='mercenary'?'<p class="warning">Temporary Light or Medium Nomad, one Engagement only. Cannot secure objectives; no XP or pilot transfers. Uses a separate support slot. Weapon / Equipment allowance is 5 Iron; no Salvage cost.</p>':''}<button class="primary" data-c-action="recruit">${m.source==='mercenary'?'Hire mercenary':'Add chassis to hangar'}</button></section>
 ${r?`<section class="panel" style="margin-top:18px"><h3>Equip a Rig</h3>${selectField('Rig','market.rigId',state.squad.map(x=>[x.id,`${x.name} · ${cost(x)}/${ironCapacity(x)} Iron`]),m.rigId)}<p class="small">${r.campaign.weaponCredit} starting weapon Iron remaining${r.campaign.mercenary?' (also usable for Equipment)':''}. Replaced weapons enter inventory with their weapon-specific traits.</p><div class="form-grid">${weaponMarketField(r,m.weapon)}${selectField('Weapon slot','market.slot',SLOTS.flatMap((s,i)=>i<2||rigOf(r).weight==='Colossal'?[[i,s]]:[]),m.slot)}${selectField('Payment','market.weaponSource',[['buy','Buy (use remaining starting allowance first)'],['credit','Use free weapon credit'],...c.inventory.weapons.flatMap((w,i)=>w.rigId===r.rigId?[[String(i),`Inventory: ${rigOf(r).weapons[w.index].name}`]]:[])],m.weaponSource)}</div><button data-c-action="buy-weapon">Equip selected weapon</button><div class="row">${r.weapons.map((w,i)=>w===null?'':`<button data-c-action="unequip-weapon" data-id="${r.id}" data-slot="${i}">Store ${SLOTS[i]}</button>`).join('')}</div>
 <hr class="divider"><div class="form-grid"><label class="field"><span>Equipment</span><select data-c-field="market.equipment">${EQUIPMENT_CATEGORIES.map((title,category)=>`<optgroup label="${title}">${options(DATA.equipment.filter(e=>Math.floor(e.id/12)===category).map(e=>[e.id,`${e.name} · ${e.iron} Salvage`]),m.equipment)}</optgroup>`).join('')}</select></label>${selectField('Payment','market.equipmentSource',[['buy','Buy with Salvage'],['credit','Use free Equipment credit'],['inventory','Use matching item from inventory']],m.equipmentSource)}</div><p class="small">${esc(DATA.equipment[m.equipment]?.effect||'')}</p><button data-c-action="buy-equipment">Equip selected item</button><div class="stack">${r.equipment.map(id=>`<div class="row"><span>${esc(DATA.equipment[id].name)}</span>${[0,1,5].includes(id)?`<select aria-label="Assign Equipment to weapon" data-c-target="${r.id}" data-equipment="${id}">${options([['','Select ranged weapon'],...r.weapons.flatMap((w,i)=>w!==null&&!isMelee(rigOf(r).weapons[w])?[[i,SLOTS[i]]]:[])],r.targets[id]??'')}</select>`:''}${id===35?`<select aria-label="Frame recipient" data-c-frame="${r.id}">${options(state.squad.map(x=>[x.id,x.name]),r.capacityTarget||r.id)}</select>`:''}<button data-c-action="unequip-equipment" data-id="${r.id}" data-equipment="${id}">Store item</button></div>`).join('')}</div></section>`:'<div class="empty">Recruit a Rig before buying a loadout.</div>'}
 <section class="panel" style="margin-top:18px"><h3>Sell stored items</h3><p class="small">Sale value: half the printed cost, rounded up.</p><div class="stack">${c.inventory.weapons.map((w,i)=>`<div class="row"><span>${esc(DATA.rigs.find(r=>r.id===w.rigId).weapons[w.index].name)}</span><button data-c-action="sell-weapon" data-index="${i}">Sell · ${Math.ceil(DATA.rigs.find(r=>r.id===w.rigId).weapons[w.index].iron/2)} Salvage</button></div>`).join('')}${c.inventory.equipment.map((id,i)=>`<div class="row"><span>${DATA.equipment[id].name}</span><button data-c-action="sell-equipment" data-index="${i}">Sell · ${Math.ceil(DATA.equipment[id].iron/2)} Salvage</button></div>`).join('')}</div></section>`;
}
function historyView(){const c=state.campaign;c.adjust??={type:'salvage',rigId:state.squad[0]?.id||'',part:0,slot:0,value:0,reason:''};if(!state.squad.some(r=>r.id===c.adjust.rigId))c.adjust.rigId=state.squad[0]?.id||'';const a=c.adjust;
 return `<section class="panel"><div class="section-top"><h3>Season & campaign notes</h3><button data-c-action="new-campaign">New campaign</button></div><div class="form-grid">${numberInput('Engagements in the season (6 recommended)','season',c.season,1,100)}<label class="field"><span>Notes / group rulings</span><textarea maxlength="5000" data-c-field="notes">${esc(c.notes)}</textarea></label></div><p class="small">XP levels: ${XP_LEVELS.map((xp,i)=>`${i+1}: ${xp} XP`).join(' · ')}. Levels 4, 7 and 10 grant a mandatory promotion when possible; other level perks grant one re-roll. Elite Ironclads gain the re-roll instead.</p></section>
 <section class="panel" style="margin-top:18px"><h3>Manual adjustment</h3><p class="small">For scenario rules, inherited wreck profiles and agreed exceptions. Every adjustment requires a reason and appears in the ledger. Normal purchases and repairs should use the dedicated controls.</p><div class="form-grid">${selectField('Adjustment','adjust.type',[['salvage','Add / subtract Salvage'],['renown','Add / subtract Renown'],['xp','Award additional Ironclad XP'],['sp','Adjust component Structure Points'],['ruptured','Set / clear Ruptured (1 / 0)'],['trait','Add a permanent trait (D6 result)'],['remove-trait','Remove a non-locked trait (D6 result)'],['freeweapon','Adjust free weapon credits'],['freeequipment','Adjust free Equipment credits'],['freerepair','Adjust free repair credits'],['wreck','Record recovered wreck: claim or no eligible Rig']],a.type)}${selectField('Rig (if applicable)','adjust.rigId',state.squad.map(r=>[r.id,r.name]),a.rigId)}${selectField('Component (if applicable)','adjust.part',PARTS.map((n,i)=>[i,n]),a.part)}${selectField('Weapon (for Arms traits)','adjust.slot',[[0,'Left'],[1,'Right']],a.slot)}${numberInput('Amount / trait D6 result','adjust.value',a.value,-999,999)}<label class="field"><span>Reason</span><input maxlength="300" data-c-field="adjust.reason" value="${esc(a.reason)}"></label></div><button data-c-action="adjust" ${c.phase==='battle'?'disabled':''}>Record adjustment</button></section>
 <section class="panel" style="margin-top:18px"><h3>Engagement history</h3>${c.games.length?c.games.slice().reverse().map(g=>`<details><summary>${esc(g.title)} · ${esc(g.result)} · ${esc(g.terrain)}</summary><p>${g.salvage} Salvage · ${g.renown} Renown · ${g.kills} enemy Rigs destroyed</p><ul>${g.entries.map(x=>`<li>${esc(x.name)}: ${x.recovered?'retained':'lost / departed'} · ${x.survives?'Ironclad survived':'Ironclad lost / contract ended'} · +${x.xp} XP</li>`).join('')}</ul><p class="small">${esc(g.report.scenarioReason||'')}</p></details>`).join(''):'<p class="small">No completed Engagements.</p>'}</section>
 <section class="panel" style="margin-top:18px"><h3>Transaction ledger</h3>${c.ledger.slice(0,100).map(l=>`<p class="small">${esc(l.at.slice(0,16).replace('T',' '))} · ${esc(l.text)}</p>`).join('')||'<p class="small">No transactions yet.</p>'}</section>`;
}
function currentMarketRig(){const r=state.squad.find(r=>r.id===state.campaign.market.rigId);if(!r)throw Error('Select a Rig.');return r;}
function checkMarket(){if(state.campaign.phase==='battle'||state.campaign.phase==='report')throw Error('Resolve the current Engagement before changing the roster.');}
function storeWeapon(r,slot){const w=r.weapons[slot];if(w==null)return;const x=ensureRig(r),traits=x.traits.filter(t=>t.part===1&&t.slot===slot);state.campaign.inventory.weapons.push({rigId:r.rigId,index:w,traits:clone(traits)});x.traits=x.traits.filter(t=>t.part!==1||t.slot!==slot);r.weapons[slot]=null;for(const id of Object.keys(r.targets))if(r.targets[id]===slot)delete r.targets[id];}
function recruit(){checkMarket();const c=state.campaign,m=c.market,rig=DATA.rigs.find(x=>x.id===m.chassis);if(!rig)throw Error('Select a chassis.');
 if(m.source!=='mercenary'&&rig.faction!==state.faction)throw Error('Select a chassis from your faction.');
 const r=newConfig(rig);r.battle=freshBattle(r);const rc=ensureRig(r);
 if(m.source==='purchase')spend(RECRUIT_COST[rig.weight]);
 else if(m.source==='second'){spend(RECRUIT_COST[rig.weight]/2);for(let i=0;i<4;i++){addTrait(r,i,int(m.secondRolls[i],1,6,PARTS[i]+' trait D6'),0,true);}}
 else if(m.source==='reward'){const i=c.credits.rigs.indexOf(rig.weight);if(i<0)throw Error('No reward of this weight class.');c.credits.rigs.splice(i,1);}
 else if(m.source==='wreck'){if(!c.credits.wrecks.length)throw Error('No recovered-wreck claim.');let disabled=0;for(let i=0;i<4;i++){const sp=int(m.wreckSP[i],0,rig.sp[i],PARTS[i]+' SP'),status=m.wreckParts[i];if(!['ok','catastrophic','disabled'].includes(status)||(status==='ok'&&sp===0)||(status!=='ok'&&sp!==0))throw Error('Wreck component status and SP must agree.');r.battle.sp[i]=sp;r.battle.parts[i]=status;if(status==='disabled')disabled++;}if(disabled<2)throw Error('A salvaged wreck must reflect a destroyed Rig (at least two Disabled components).');c.credits.wrecks.shift();}
 else if(m.source==='mercenary'){if(c.hired)throw Error('Mercenary support has already been used.');if(rig.faction!=='nomads'||!['Light','Medium'].includes(rig.weight))throw Error('Select a Light or Medium Mercenary Nomad.');c.hired=true;rc.mercenary=true;r.pilot=int(Number(m.pilot),0,3,'Mercenary Ironclad grade');}
 else throw Error('Select a valid source.');
 rc.weaponCredit=m.source==='wreck'?0:STARTING_WEAPONS[rig.weight];
 if(m.source==='second')for(let i=0;i<4;i++)r.battle.sp[i]=Math.max(1,effectiveRig(r).sp[i]-int(m.secondDamage[i],1,3,PARTS[i]+' damage D3'));
 state.squad.push(r);m.rigId=r.id;m.weapon=0;m.slot=0;m.weaponSource='buy';m.source='purchase';m.pilot=0;m.chassis=DATA.rigs.find(x=>x.faction===state.faction).id;
}
function buyWeapon(){checkMarket();const c=state.campaign,m=c.market,r=currentMarketRig(),slot=Number(m.slot);let index=Number(m.weapon),traits=[];
 if(![0,1,2].includes(slot))throw Error('Select a weapon slot.');
 if(!['buy','credit'].includes(m.weaponSource)){const i=Number(m.weaponSource),item=c.inventory.weapons[i];if(!item||item.rigId!==r.rigId)throw Error('No compatible stored weapon.');index=item.index;traits=clone(item.traits||[]);c.inventory.weapons.splice(i,1);}
 const w=rigOf(r).weapons[index];if(!w)throw Error('Select a weapon.');if(slot!==2&&isHull(w))throw Error('Hull weapons can only be fitted to the Hull slot.');if(slot===2&&(rigOf(r).weight!=='Colossal'||!isHull(w)))throw Error('The Hull slot requires a Hull weapon on a Colossal Rig.');
 if(m.weaponSource==='buy'){const allowance=Math.min(r.campaign.weaponCredit,w.iron);if(r.campaign.mercenary&&w.iron>allowance)throw Error('Mercenary starting allowance exceeded.');spend(w.iron-allowance);r.campaign.weaponCredit-=allowance;}
 if(m.weaponSource==='credit'){if(r.campaign.mercenary)throw Error('Use the mercenary starting allowance.');if(!c.credits.weapons)throw Error('No free weapon credit.');c.credits.weapons--;}
 if(r.campaign.mercenary&&!['buy'].includes(m.weaponSource))throw Error('Mercenaries use their contractor allowance only.');
 if(r.campaign.mercenary&&r.weapons[slot]!==null)throw Error('Contractor weapons cannot be traded. Undo the purchase to correct the loadout.');storeWeapon(r,slot);r.weapons[slot]=index;r.campaign.traits.push(...traits.map(t=>({...t,slot})));
 if(cost(r)>ironCapacity(r))throw Error('This loadout exceeds Iron Capacity.');const hullNames=r.weapons.filter(i=>i!==null&&isHull(rigOf(r).weapons[i])).map(i=>rigOf(r).weapons[i].name);if(new Set(hullNames).size!==hullNames.length)throw Error('Each Hull weapon may only be equipped once.');m.weaponSource='buy';
}
function buyEquipment(){checkMarket();const c=state.campaign,m=c.market,r=currentMarketRig(),id=Number(m.equipment),e=DATA.equipment[id];if(!e)throw Error('Select Equipment.');if(r.equipment.includes(id))throw Error('This Rig already has that Equipment.');
 if(r.campaign.mercenary){if(m.equipmentSource!=='buy'||e.iron>r.campaign.weaponCredit)throw Error('Mercenary allowance exceeded or invalid payment.');r.campaign.weaponCredit-=e.iron;}
 else if(m.equipmentSource==='buy')spend(e.iron);
 else if(m.equipmentSource==='credit'){if(!c.credits.equipment)throw Error('No free Equipment credit.');c.credits.equipment--;}
 else{const i=c.inventory.equipment.indexOf(id);if(i<0)throw Error('No matching item in inventory.');c.inventory.equipment.splice(i,1);}
 r.equipment.push(id);if(id===35)r.capacityTarget=r.id;
 if(cost(r)>ironCapacity(r))throw Error('This loadout exceeds Iron Capacity.');
}
function repairRig(r,part){checkMarket();if(r.campaign.mercenary)throw Error('Mercenary Rigs are temporary and cannot be repaired in your hangar.');
 const c=state.campaign,x=ensureRig(r),b=r.battle,free=document.getElementById(`free-${r.id}-${part}`)?.checked;
 if(free&&!c.credits.repairs)throw Error('No terrain repair credit remains.');
 if(b.parts[part]==='ok'){
  const n=int(Number(document.getElementById(`repair-${r.id}-${part}`).value),1,effectiveRig(r).sp[part],'Repair SP');if(b.sp[part]+n>effectiveRig(r).sp[part])throw Error('Repair exceeds maximum Structure Points.');
  if(free)c.credits.repairs--;else{const allowance=Math.min(n,x.freeSP);spend(Math.ceil((n-allowance)/3));x.freeSP-=allowance;}
  b.sp[part]+=n;
 }else{
  const ignore=r.equipment.includes(33)&&!x.cacheUsed&&document.getElementById(`cache-${r.id}-${part}`)?.checked;
  if(!ignore){const d=int(Number(document.getElementById(`trait-${r.id}-${part}`).value),1,6,'Permanent trait D6'),slot=part===1?Number(document.getElementById(`trait-slot-${r.id}`).value):0;addTrait(r,part,d,slot);}
  else x.cacheUsed=true;
  if(free)c.credits.repairs--;else spend(1);
  if(b.parts[part]==='disabled')b.parts[part]='catastrophic';else{b.parts[part]='ok';b.sp[part]=effectiveRig(r).sp[part];if(part===1){b.weaponState[0]='ready';b.weaponState[1]='ready';}}
 }
 normalizeRig(r);
}
function adjustment(){checkMarket();const c=state.campaign,a=c.adjust,r=state.squad.find(r=>r.id===a.rigId),n=int(a.value,-999,999,'Adjustment');if(!a.reason.trim())throw Error('Enter a reason.');
 if(['salvage','renown'].includes(a.type)){if(c[a.type]+n<0)throw Error('Total cannot be negative.');c[a.type]+=n;}
 else if(a.type.startsWith('free')){const key={freeweapon:'weapons',freeequipment:'equipment',freerepair:'repairs'}[a.type];if(!key||c.credits[key]+n<0)throw Error('Invalid credit adjustment.');c.credits[key]+=n;}
 else if(a.type==='wreck'){if(n<0){if(-n>c.credits.wrecks.length)throw Error('Not enough wreck claims.');c.credits.wrecks.splice(0,-n);}else{if(n>10)throw Error('Maximum 10 claims per adjustment.');for(let i=0;i<n;i++)c.credits.wrecks.push({game:'Manual ruling',source:a.reason});}}
 else{if(!r)throw Error('Select a Rig.');const part=int(Number(a.part),0,3,'Component'),slot=int(Number(a.slot),0,1,'Weapon');
  if(a.type==='xp'){int(n,0,999,'XP award');xpAward(r,n);}
  else if(a.type==='sp'){r.battle.sp[part]=Math.max(0,Math.min(effectiveRig(r).sp[part],r.battle.sp[part]+n));if(!r.battle.sp[part])r.battle.parts[part]='catastrophic';else r.battle.parts[part]='ok';}
  else if(a.type==='ruptured')r.battle.ruptured[part]=!!int(n,0,1,'Ruptured flag');
  else if(a.type==='trait')addTrait(r,part,int(n,1,6,'Trait D6'),slot);
  else if(a.type==='remove-trait'){const kind=Math.floor((int(n,1,6,'Trait D6')-1)/2),i=r.campaign.traits.findIndex(t=>t.part===part&&t.kind===kind&&(part!==1||t.slot===slot));if(i<0)throw Error('Trait not present.');if(r.campaign.traits[i].locked)throw Error('Second-hand traits cannot be removed.');r.campaign.traits.splice(i,1);}
  else throw Error('Unknown adjustment.');
 }
}
function validateBackup(s){
 if(!s||s.version!==1||s.mode!=='campaign'||typeof s.name!=='string'||!Array.isArray(s.squad)||s.squad.length>200||!FACTIONS.some(f=>f[0]===s.faction)||!FORMATIONS[s.formation])throw Error('Invalid campaign backup.');
 const c=s.campaign;if(!c||!Array.isArray(c.games)||!Array.isArray(c.ledger)||!Array.isArray(c.pilots)||!Array.isArray(c.deployed)||!c.inventory||!c.credits||!['setup','hangar','battle','report','aftermath'].includes(c.phase))throw Error('Invalid campaign state.');
 int(c.salvage,0,999999,'Salvage');int(c.renown,0,999999,'Renown');int(c.season,1,100,'Season length');int(s.round,1,999999,'Round');
 const ids=new Set();for(const r of s.squad){
  if(typeof r.id!=='string'||!/^[a-zA-Z0-9-]+$/.test(r.id)||ids.has(r.id)||typeof r.name!=='string'||!rigOf(r)||!PILOTS[r.pilot]||!Array.isArray(r.weapons)||r.weapons.length!==3||r.weapons.some(w=>w!==null&&!rigOf(r).weapons[w])||!Array.isArray(r.equipment)||r.equipment.some(id=>!DATA.equipment[id])||!r.targets)throw Error('Invalid Rig profile.');ids.add(r.id);
  const b=r.battle,x=r.campaign;if(!b||!x||typeof x.pilotName!=='string'||!Array.isArray(x.traits)||!Array.isArray(b.sp)||b.sp.length!==4||!Array.isArray(b.parts)||b.parts.length!==4||b.parts.some(p=>!['ok','catastrophic','disabled'].includes(p))||!Array.isArray(b.conditions)||b.conditions.some(v=>!CONDITIONS[v])||!Array.isArray(b.ruptured)||b.ruptured.length!==4||!Array.isArray(b.weaponState)||b.weaponState.length!==3||b.weaponState.some(v=>!['ready','reload','disabled'].includes(v))||!Array.isArray(b.spent)||typeof b.notes!=='string')throw Error('Invalid battle or Ironclad data.');
  for(let i=0;i<4;i++)int(b.sp[i],0,rigOf(r).sp[i],'Structure');int(b.heat,0,9,'Heat');int(b.actions,0,5,'Actions');int(x.xp,0,999999,'XP');int(x.level,1,10,'Level');int(x.rerolls,0,99,'Re-rolls');int(x.freeSP,0,3,'Free SP');int(x.weaponCredit,0,6,'Starting allowance');for(const t of x.traits){int(t.part,0,3,'Trait component');int(t.kind,0,2,'Trait kind');int(t.slot,0,2,'Trait weapon');}
 }
 if(c.deployed.some(id=>!ids.has(id)))throw Error('Unknown deployed Rig.');
 for(const e of c.inventory.equipment)if(!DATA.equipment[e])throw Error('Unknown stored Equipment.');
 for(const w of c.inventory.weapons)if(!DATA.rigs.find(r=>r.id===w.rigId)?.weapons[w.index]||!Array.isArray(w.traits))throw Error('Unknown stored weapon.');
 for(const key of ['weapons','equipment','repairs'])int(c.credits[key],0,999999,'Reward credit');if(!Array.isArray(c.credits.rigs)||c.credits.rigs.some(w=>!RECRUIT_COST[w])||!Array.isArray(c.credits.wrecks))throw Error('Invalid Rig credits.');
 for(const p of c.pilots){if(typeof p.name!=='string'||!PILOTS[p.grade])throw Error('Invalid reserve Ironclad.');int(p.xp,0,999999,'Reserve XP');int(p.level,1,10,'Reserve level');int(p.rerolls,0,99,'Reserve re-rolls');}
 c.undo=[];s.saved=[];return s;
}
function exportBackup(){const data={app:'ooi-companion',format:1,exportedAt:new Date().toISOString(),state:snapshot()};const a=document.createElement('a'),url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));a.href=url;a.download='ooi-campaign-'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);notify('Campaign backup exported.');}
async function importBackup(file){if(!file)return;try{if(file.size>5*1024*1024)throw Error('Backup exceeds 5 MB.');const data=JSON.parse(await file.text());if(data.app!=='ooi-companion'||data.format!==1)throw Error('Not an Of Oil and Iron campaign backup.');const candidate=validateBackup(data.state);delete candidate.workspaces;candidate.view=candidate.campaign?.started?'campaign':'build';switchWorkspace(null,'campaign',candidate);}catch(e){notify(e.message);}}

function previousHandleClick(ev){
 const el=ev.target.closest('button');if(!el||el.disabled)return;if(el.dataset.menuAction){handleMenuAction(el);return;}if(el.dataset.workspaceAction){if(el.dataset.workspaceAction==='new-campaign')switchWorkspace(null,'campaign');return;}const cAction=el.dataset.cAction;
 if(cAction){try{handleCampaignAction(el);}catch(e){notify(e.message);}return;}
 if(isCampaign()){
  ensureCampaign();const action=el.dataset.action;
  if(action==='view'&&el.dataset.value==='campaign'){state.view='campaign';render();return;}
  if((action==='confirm'||(action==='view'&&el.dataset.value==='battle'))&&!campaignStarted()){state.view='campaign';render();return;}
  if(campaignStarted()){
   if(action==='view'){state.view=el.dataset.value==='battle'?(state.campaign.phase==='battle'?'battle':'campaign'):'campaign';render();return;}
   if(['new','faction','rig','edit','add','remove','duplicate','load','save','reset-battle','confirm'].includes(action)){notify('Use the campaign hangar and backups to manage this roster.');return;}
   if(['activated','counter','heat','condition','next-round'].includes(action)&&state.campaign.phase!=='battle'){notify('Begin an Engagement first.');return;}
   if(action==='counter'&&el.dataset.kind==='sp'){const r=state.squad.find(r=>r.id===el.dataset.id),part=Number(el.dataset.part);if(r&&Number(el.dataset.value)>0&&r.battle.sp[part]>=effectiveRig(r).sp[part])return;}
  }
 }
 baseHandleClick(ev);
 if(campaignStarted()){for(const r of state.squad)normalizeRig(r);persist();}
}
function previousHandleChange(ev){
 const el=ev.target,c=state.campaign;
 if(el.dataset.workspaceSelect!==undefined){switchWorkspace(el.value);return;}
 if(el.dataset.field==='mode'&&el.value!==state.mode){const entry=el.value==='standard'?workspaces.entries.find(x=>x.state.mode==='standard'):null;switchWorkspace(entry?.id||null,el.value==='standard'?'standard':'campaign');return;}
 if(el.id==='campaign-import'){importBackup(el.files?.[0]);return;}
 if(el.dataset.cField){
  let value=el.type==='checkbox'?el.checked:el.type==='number'?(el.value===''?null:Number(el.value)):el.value;
  const path=el.dataset.cField;if(/(?:terrain|part|slot|pilot|weapon|equipment)$/.test(path)&&el.tagName==='SELECT')value=Number(value);
  if(path==='season'&&(!Number.isInteger(value)||value<1||value>100)){notify('Season length must be 1–100.');return;}
  setCampaignPath(path,value);
  if(path==='market.source'){c.market.chassis=DATA.rigs.find(r=>value==='mercenary'?r.faction==='nomads':r.faction===state.faction).id;}
  if(path==='market.rigId'){c.market.weapon=0;c.market.slot=0;c.market.weaponSource='buy';}
  if(path==='market.slot'||path==='market.rigId'){const r=currentMarketRig();if(r){const ws=rigOf(r).weapons,slot=Number(c.market.slot);if(!ws[c.market.weapon]||(slot===2?!isHull(ws[c.market.weapon]):isHull(ws[c.market.weapon])))c.market.weapon=ws.findIndex(w=>slot===2?isHull(w):!isHull(w));}}
  persist();render();return;
 }
 if(el.dataset.cDeploy){if(c.phase==='battle')return;const id=el.dataset.cDeploy;c.deployed=el.checked?[...new Set([...c.deployed,id])]:c.deployed.filter(x=>x!==id);render();return;}
 if(el.dataset.cRigName){const r=state.squad.find(r=>r.id===el.dataset.cRigName);if(r&&el.value.trim()){r.name=el.value.trim();render();}return;}
 if(el.dataset.cPilotName){const r=state.squad.find(r=>r.id===el.dataset.cPilotName);if(r){r.campaign.pilotName=el.value.slice(0,60);r.ironcladName=r.campaign.pilotName;persist();}return;}
 if(el.dataset.cTarget){const r=state.squad.find(r=>r.id===el.dataset.cTarget);if(r){if(el.value==='')delete r.targets[el.dataset.equipment];else r.targets[el.dataset.equipment]=Number(el.value);persist();}return;}
 if(el.dataset.cFrame){const r=state.squad.find(r=>r.id===el.dataset.cFrame);if(r){r.capacityTarget=el.value;render();}return;}
 if(campaignStarted()&&['mode','pilot','weapon','equipment','target','rig-name','ironclad-name'].includes(el.dataset.field)){notify('Use the campaign hangar to change the roster.');render();return;}
 baseHandleChange(ev);
}
function handleCampaignAction(el){
 ensureCampaign();const c=state.campaign,{cAction:a,id}=el.dataset,r=state.squad.find(r=>r.id===id);
 if(a==='start'){if(!state.squad.length||startingSquadronErrors().length)throw Error('Complete a legal starting squadron first.');transact('Campaign started',()=>{c.started=true;c.phase='hangar';c.deployed=state.squad.map(r=>r.id);for(const r of state.squad){ensureRig(r);r.battle=freshBattle(r);}state.view='campaign';});}
 if(a==='tab'){campaignTab=el.dataset.value;render();}
 if(a==='open-hangar'){state.view='campaign';campaignTab='hangar';render();}
 if(a==='resume'){if(c.phase!=='battle')throw Error('No Engagement in progress.');state.view='battle';render();}
 if(a==='deploy'){
  if(squadronErrors().length)throw Error(squadronErrors().join(' '));
  transact('Engagement started',()=>{c.battleReinforcement={short:shortFormation(),die:null};for(const r of deployedRigs()){const old=r.battle;r.battle={...freshBattle(r),heatLocked:!!old.heatLocked,sp:[...old.sp],parts:[...old.parts],ruptured:[...old.ruptured],weaponState:old.weaponState.map(w=>w==='disabled'?'disabled':'ready')};if(old.parts[0]!=='ok')r.battle.conditions.push('Stalled');if(old.parts[0]==='disabled')r.battle.conditions.push('Shocked');if(old.parts[2]==='disabled')r.battle.conditions.push('Immobilised');else if(old.parts[2]==='catastrophic')r.battle.conditions.push('Slowed');if(old.parts[1]==='disabled'){r.battle.weaponState[0]='disabled';r.battle.weaponState[1]='disabled';}normalizeRig(r);if(r.battle.parts[3]!=='ok')r.battle.heat=effectiveRig(r).heat.findIndex(h=>h!==null);}c.phase='battle';state.engagementEnded=false;state.round=1;state.view='battle';});
 }
 if(a==='finish-battle'){if(c.phase==='report'){state.view='campaign';render();return;}if(c.phase!=='battle')throw Error('No Engagement in progress.');newReport();render();}
 if(a==='cancel-report'){if(!confirm('Discard this unfinished Aftermath and return to the battle?'))return;c.report=null;c.phase='battle';state.view='battle';render();}
 if(a==='roll'){const n=Number(el.dataset.sides);let die;if(globalThis.crypto?.getRandomValues){const ar=new Uint32Array(1);const limit=Math.floor(4294967296/n)*n;do{crypto.getRandomValues(ar);}while(ar[0]>=limit);die=ar[0]%n+1;}else die=Math.floor(Math.random()*n)+1;setCampaignPath(el.dataset.path,die);render();}
 if(a==='add-search'){c.report.rows[id].extraSearches.push({die:null,equipmentDie:null});render();}
 if(a==='remove-search'){c.report.rows[id].extraSearches.splice(Number(el.dataset.index),1);render();}
 if(a==='apply-report'){outcomePreview(c.report);if(!confirm('Apply this Aftermath to the campaign? Check the preview first.'))return;transact('Aftermath applied: '+c.report.title,applyReport);}
 if(a==='reroll-used'&&r){if(c.phase!=='battle'||!c.deployed.includes(r.id))throw Error('Deploy this Rig in an Engagement first.');r.battle.rerollsUsed=Math.max(0,Math.min(r.campaign.rerolls,(r.battle.rerollsUsed||0)+Number(el.dataset.value)));render();}
 if(a==='repair'&&r)transact(`Repair: ${r.name} / ${PARTS[Number(el.dataset.part)]}`,()=>repairRig(r,Number(el.dataset.part)));
 if(a==='market-rig'){c.market??=null;campaignTab='market';marketView();c.market.rigId=id;c.market.weapon=0;c.market.slot=0;render();}
 if(a==='recruit')transact('Chassis acquired: '+DATA.rigs.find(x=>x.id===c.market.chassis)?.name,recruit);
 if(a==='buy-weapon')transact('Weapon equipped',buyWeapon);
 if(a==='buy-equipment')transact('Equipment equipped',buyEquipment);
 if(a==='unequip-weapon'&&r)transact(`Weapon stored: ${r.name}`,()=>{checkMarket();if(r.campaign.mercenary)throw Error('Mercenary gear cannot enter your inventory.');storeWeapon(r,Number(el.dataset.slot));});
 if(a==='unequip-equipment'&&r)transact(`Equipment stored: ${r.name}`,()=>{checkMarket();if(r.campaign.mercenary)throw Error('Mercenary gear cannot enter your inventory.');const equipment=Number(el.dataset.equipment);if(!r.equipment.includes(equipment))throw Error('Equipment not mounted.');r.equipment=r.equipment.filter(x=>x!==equipment);delete r.targets[equipment];c.inventory.equipment.push(equipment);});
 if(a==='sell-weapon')transact('Stored weapon sold',()=>{checkMarket();const i=Number(el.dataset.index),w=c.inventory.weapons[i];if(!w)throw Error('Item no longer available.');c.salvage+=Math.ceil(DATA.rigs.find(r=>r.id===w.rigId).weapons[w.index].iron/2);c.inventory.weapons.splice(i,1);});
 if(a==='sell-equipment')transact('Stored Equipment sold',()=>{checkMarket();const i=Number(el.dataset.index),equipment=c.inventory.equipment[i];if(equipment===undefined)throw Error('Item no longer available.');c.salvage+=Math.ceil(DATA.equipment[equipment].iron/2);c.inventory.equipment.splice(i,1);});
 if(a==='scrap-rig'&&r){if(!confirm(`Scrap ${r.name}? Its mounted gear and Ironclad will enter the hangar.`))return;transact(`Chassis scrapped: ${r.name}`,()=>{checkMarket();if(r.campaign.mercenary)throw Error('Cannot scrap a hired Rig.');for(let i=0;i<3;i++)storeWeapon(r,i);c.inventory.equipment.push(...r.equipment);pushPilot(r);c.salvage+=Math.ceil(RECRUIT_COST[rigOf(r).weight]/2);state.squad=state.squad.filter(x=>x.id!==id);c.deployed=c.deployed.filter(x=>x!==id);if(c.market)c.market.rigId=state.squad[0]?.id||'';});}
 if(a==='pilot'&&r)transact(`Ironclad assigned: ${r.name}`,()=>{checkMarket();if(r.campaign.mercenary)throw Error('Mercenary pilots cannot be reassigned.');const value=document.getElementById('pilot-'+r.id).value;let p;if(['rookie','experienced'].includes(value)){const grade=value==='rookie'?0:1;spend(grade);p={id:uid(),name:r.name+' '+PILOTS[grade].name,grade,xp:0,level:1,rerolls:0};}else{const i=c.pilots.findIndex(x=>x.id===value);if(i<0)throw Error('Select a pilot.');p=c.pilots.splice(i,1)[0];}pushPilot(r);assignPilot(r,p);if(cost(r)>ironCapacity(r))throw Error('Pilot assignment exceeds this Rig’s Iron Capacity.');});
 if(a==='adjust')transact('Adjustment: '+c.adjust.reason,adjustment);
 if(a==='undo'){const item=c.undo[0];if(!item)return;if(!confirm('Undo: '+item.label+'?'))return;const saved=state.saved,remaining=c.undo.slice(1);state=clone(item.state);state.saved=saved;state.campaign.undo=remaining;render();notify('Last campaign change undone.');}
 if(a==='new-campaign'){switchWorkspace(null,'campaign');return;}
 if(a==='backup')exportBackup();
 if(a==='import')document.getElementById('campaign-import').click();
}

function weaponGroupName(w){return w.group==='common'?'Common weapon':w.group==='nomad'?'Nomad weapon':'Faction weapon';}
function weaponOptions(rig,selected,slot=null,currency='Iron',placeholder=true){
 return (placeholder?`<option value="" ${selected===''?'selected':''}>Select a weapon</option>`:'')+['common',rig.faction==='nomads'?'nomad':'faction'].map(group=>{
 return (rig.weight==='Colossal'?[false,true]:[false]).map(hull=>{
 const list=rig.weapons.flatMap((w,i)=>w.group===group&&(slot===null||(slot===2?isHull(w):!isHull(w)))&&(rig.weight!=='Colossal'||isHull(w)===hull)?[[i,`${w.name} · ${w.iron} ${currency}`]]:[]);
 return list.length?`<optgroup label="${group==='common'?'Common weapons':group==='nomad'?'Nomad weapons':'Faction weapons'}${rig.weight==='Colossal'?(hull?' · Hull weapons':' · Arm weapons'):''}">${options(list,selected)}</optgroup>`:'';
 }).join('');}).join('');
}
function rigCatalog(available){
 return [['Faction Rigs',available.filter(r=>r.faction!=='nomads')],['Nomad Rigs',available.filter(r=>r.faction==='nomads')]].filter(([,rigs])=>rigs.length).map(([label,rigs])=>`<section class="rig-catalog-group"><div class="section-top"><h3>${label}</h3></div>${label==='Nomad Rigs'?'<p class="small">Independent chassis, available as support in standard squadrons.</p>':''}<div class="rig-grid">${rigs.map(r=>`<button class="rig-choice ${selected===r.id?'selected':''}" data-action="rig" data-value="${r.id}"><span class="rig-mark">${r.iron} IRON</span><strong>${r.name}</strong><span class="small">${WEIGHTS[r.weight]} · SPD ${r.speed} · EXH ${r.exhaust}</span></button>`).join('')}</div></section>`).join('');
}
function weaponMarketField(r,value){return `<label class="field"><span>Weapon</span><select data-c-field="market.weapon">${weaponOptions(rigOf(r),value,Number(state.campaign.market.slot),'Salvage',false)}</select></label>`;}
function campaignChassis(source){return DATA.rigs.filter(x=>source==='mercenary'?x.faction==='nomads'&&['Light','Medium'].includes(x.weight):x.faction===state.faction);}
function chassisMarketField(m){const list=campaignChassis(m.source);return `<label class="field"><span>Chassis</span><select data-c-field="market.chassis">${[['Faction Rigs',false],['Nomad Rigs',true]].map(([label,nomad])=>{const rigs=list.filter(x=>(x.faction==='nomads')===nomad);return rigs.length?`<optgroup label="${label}">${options(rigs.map(x=>[x.id,`${x.name} · ${x.weight} · ${RECRUIT_COST[x.weight]} Salvage`]),m.chassis)}</optgroup>`:'';}).join('')}</select></label>`;}

// Independent campaigns and a resumable standard game share one atomic browser save.
function modeSaves(){return state.saved.filter(s=>(s.mode||'standard')===state.mode);}
function workspaceBar(){return `<section class="workspace-bar"><div class="row"><button data-menu-action="home">Main menu</button><button data-menu-action="${isCampaign()?'campaigns':'normal'}">${isCampaign()?'Campaigns':'Normal game'}</button><span class="badge">${isCampaign()?'CAMPAIGN':'NORMAL GAME'} · ${esc(state.name)}</span></div>${campaignStarted()?`<label class="field"><span>Campaign name</span><input data-field="squad-name" maxlength="60" value="${esc(state.name)}"></label>`:''}</section>`;}
function menuSessions(mode){return [{id:workspaces.activeId,state},...workspaces.entries].filter(e=>e.state.mode===mode);}
function normalGameMenu(){
 const saves=state.saved.filter(s=>(s.mode||'standard')==='standard');
 const sessions=menuSessions('standard').filter(e=>e.state.squad.length);
 return `<div class="toolbar"><div><button data-menu-action="home">Main menu</button><h2>Normal game</h2></div></div><section class="panel"><h3>New game</h3><p class="small">Create a squadron or load a saved one. You can edit it before starting the battle.</p><button class="primary full" data-menu-action="new-normal">Create new squadron</button></section><h3 class="saved-menu-heading">Saved squadrons (${saves.length})</h3><div class="menu-grid">${saves.map(s=>`<section class="panel menu-card"><h3>${esc(s.name)}</h3><p class="small">${s.squad.length} Rigs · ${esc(FACTIONS.find(f=>f[0]===s.faction)?.[1]||s.faction)}</p><p class="small">${s.squad.map(r=>esc(r.name)).join(' · ')}</p><button class="primary full" data-menu-action="load-squadron" data-save="${s.id}">Load & edit squadron</button></section>`).join('')||'<div class="empty">No saved squadrons yet. Build one, then use Save squadron with name to keep it here.</div>'}</div>${sessions.length?`<details id="normal-sessions" class="panel" style="margin-top:20px"><summary>Current games & drafts (${sessions.length})</summary><div class="menu-grid">${sessions.map(e=>`<section class="menu-card"><h3>${esc(e.state.name)}</h3><p class="small">${e.state.squad.length} Rigs · Round ${e.state.round}</p><div class="row"><button data-menu-action="build" data-session="${e.id}">Edit squadron</button><button data-menu-action="resume" data-session="${e.id}">Resume game</button><button class="danger" data-menu-action="delete-squadron" data-session="${e.id}">Delete squadron</button></div></section>`).join('')}</div></details>`:''}`;
}
function menuView(){
 if(menuScreen==='normal')return normalGameMenu();
 if(menuScreen==='home')return `<div class="toolbar"><div><span class="eyebrow">OF OIL & IRON COMPANION</span><h2>Choose how to play</h2><p class="small">Campaigns and normal games have separate squadrons and progress.</p></div></div><div class="menu-grid"><section class="panel menu-card"><span class="eyebrow">01 / CAMPAIGN</span><h2>Campaign</h2><p>Build a starting squadron, develop your Ironclads and manage your hangar between Engagements.</p><button class="primary full" data-menu-action="campaigns">Open campaigns</button></section><section class="panel menu-card"><span class="eyebrow">02 / NORMAL GAME</span><h2>Normal game</h2><p>Build a squadron for a standalone game and use interactive battle sheets.</p><button class="primary full" data-menu-action="normal">Open normal game</button></section></div>`;
 const campaign=menuScreen==='campaigns',sessions=menuSessions(campaign?'campaign':'standard');
 return `<div class="toolbar"><div><button data-menu-action="home">Main menu</button><h2>${campaign?'Campaigns':'Normal game'}</h2></div>${campaign?'<button class="primary" data-menu-action="new-campaign">New campaign · Build squadron</button>':''}</div><p class="small">${campaign?'Create a starting squadron or resume one of your campaigns.':'Build your squadron here. Your campaigns keep their own progress.'}</p><div class="menu-grid">${sessions.map(e=>{const x=e.state;return `<section class="panel menu-card"><h3>${esc(x.name)}</h3><p class="small">${x.squad.length} Rigs${campaign?` · ${x.campaign?.started?`${x.campaign.games.length} Engagements completed`:'Starting squadron'}`:''}</p>${campaign&&x.campaign?.started?`<p class="small">${x.campaign.phase==='battle'?'Engagement in progress':x.campaign.phase==='report'?'Aftermath pending':'Hangar'}</p><button class="primary" data-menu-action="resume" data-session="${e.id}">Resume campaign</button>`:`<button class="primary" data-menu-action="build" data-session="${e.id}">Build squadron</button>${x.squad.length?`<button data-menu-action="resume" data-session="${e.id}">${campaign?'Resume setup':'Resume game'}</button>`:''}`}</section>`;}).join('')}${!campaign&&!sessions.length?'<section class="panel menu-card"><h3>Your normal game</h3><button class="primary" data-menu-action="new-normal">Build squadron</button></section>':''}</div>${campaign?'<details id="menu-import"><summary>Import a campaign backup</summary><p class="small">Adds a separate campaign.</p><input type="file" id="campaign-import" accept="application/json,.json"></details>':''}`;
}
function deleteNormalSquadron(id){
 const active=id===workspaces.activeId;
 const target=active?state:workspaces.entries.find(e=>e.id===id)?.state;
 if(!target||target.mode!=='standard')return;
 if(!confirm(`Delete "${target.name}" and its current game progress? Saved squadron copies and campaigns will be kept.`))return;
 const next=active?{version:1,mode:'standard',name:'My squadron',faction:'krim',formation:0,squad:[],round:1,view:'build',saved:state.saved}:state;
 const hub={activeId:active?uid():workspaces.activeId,entries:workspaces.entries.filter(e=>e.id!==id)};
 try{localStorage.setItem(KEY,JSON.stringify({...next,workspaces:hub}));}catch{notify('Could not save the deletion. Your squadron has been kept.');return;}
 state=next;workspaces=hub;battleUndo.delete(id);
 if(active){resetDraft();battleSelected='';battleFocus=false;}
 menuScreen='normal';render();notify('Squadron deleted.');
}
function handleMenuAction(el){const a=el.dataset.menuAction;
 if(a==='delete-squadron'){deleteNormalSquadron(el.dataset.session);return;}
 if(a==='load-squadron'){
  const saved=state.saved.find(s=>s.id===el.dataset.save&&(s.mode||'standard')==='standard');if(!saved){notify('This saved squadron is unavailable.');return;}
  const squad=clone(saved.squad);for(const r of squad)r.battle=freshBattle(r);
  const next={version:1,mode:'standard',name:saved.name,faction:saved.faction,formation:saved.formation,squad,round:1,view:'build',saved:[]};
  if(switchWorkspace(null,'standard',next))notify('Squadron loaded. Edit it, then confirm when ready. Save with the same name to update it, or a new name to keep a variant.');return;
 }

 if(['home','campaigns','normal'].includes(a)){menuScreen=a;render();return;}
 if(a==='new-campaign'){switchWorkspace(null,'campaign');return;}
 if(a==='new-normal'){switchWorkspace(null,'standard');return;}
 if(['build','resume'].includes(a)){
  const id=el.dataset.session;
  if(id!==workspaces.activeId&&!switchWorkspace(id))return;
  menuScreen='play';
  if(a==='build')state.view='build';
  else if(campaignStarted())state.view=state.campaign.phase==='battle'?'battle':'campaign';
  else if(state.mode==='standard'&&state.squad.length&&!squadronErrors().length){if(state.view==='build')state.preBattle=true;state.view='battle';}
  render();
 }
}
function switchWorkspace(id,mode='campaign',imported=null){
 if(id===workspaces.activeId){menuScreen='play';render();return true;}
 const entry=id?workspaces.entries.find(x=>x.id===id):null;
 if(id&&!entry){notify('This game is unavailable.');return;}
 const next=clone(entry?.state||imported||{version:1,mode,name:mode==='campaign'?'New campaign':'My squadron',faction:'krim',formation:mode==='campaign'?1:0,squad:[],round:1,view:'build',saved:[]});
 next.saved=state.saved;if(!entry&&!imported)next.factionPending=true;
 const hub={activeId:entry?.id||uid(),entries:workspaces.entries.filter(x=>x.id!==id)};
 const outgoing=clone(state);outgoing.saved=[];
 hub.entries.push({id:workspaces.activeId,state:outgoing,draft:clone(draft),selected,editing,campaignTab});
 // Commit before changing the visible session; quota errors leave the active game intact.
 try{localStorage.setItem(KEY,JSON.stringify({...next,workspaces:hub}));}catch{notify('Could not save the switch. Free browser storage or export a backup; your current game is still open.');return;}
 menuScreen='play';state=next;workspaces=hub;campaignTab=entry?.campaignTab||'setup';ensureCampaign();resetDraft();
 if(entry?.draft){draft=clone(entry.draft);selected=entry.selected;editing=entry.editing;}
 render();return true;
}


let battleSelected='',battleFocus=false;
const battleUndo=new Map();
function activeRigId(){const rigs=deployedRigs();return rigs.some(r=>r.id===battleSelected)?battleSelected:rigs[0]?.id;}
function battleSnapshot(){return {engagementEnded:!!state.engagementEnded,maintenance:clone(state.maintenance||null),round:state.round,rigs:state.squad.map(r=>({id:r.id,battle:clone(r.battle)}))};}
function recordBattle(before){if(JSON.stringify(before)!==JSON.stringify(battleSnapshot())){const history=battleUndo.get(workspaces.activeId)||[];history.push(before);battleUndo.set(workspaces.activeId,history.slice(-20));}}
function battleNavigation(){return `<p class="small swipe-hint">Tap a name or swipe the Rig card left / right.</p><nav class="rig-navigation" aria-label="Select Rig">${deployedRigs().map(r=>`<button data-mobile="select" data-id="${r.id}" aria-pressed="${r.id===activeRigId()}" class="${r.id===activeRigId()?'primary':''}">${esc(r.name)} · ${r.battle.activated?'✓ Activated':'Ready'}</button>`).join('')}<button class="focus-control" data-mobile="focus" aria-pressed="${battleFocus}">${battleFocus?'Show all Rigs':'Focus selected Rig'}</button></nav>`;}
function cardQuickActions(r){return `<div class="card-actions"><button data-mobile="undo" ${(battleUndo.get(workspaces.activeId)||[]).length?'':'disabled'}>↶ Undo last change</button></div>`;}
function scrollToSelectedRig(){
 requestAnimationFrame(()=>{
  const card=document.querySelector('.battle-card.selected-rig');if(!card)return;
  const nav=document.querySelector('.rig-navigation');
  const sticky=nav&&['sticky','fixed'].includes(getComputedStyle(nav).position);
  const offset=16+(sticky?nav.getBoundingClientRect().height:0);
  window.scrollTo({top:Math.max(0,window.scrollY+card.getBoundingClientRect().top-offset),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
 });
}
function selectClickedCard(target){const card=target.closest('.battle-card[data-card]');if(!card||state.maintenance)return;const id=card.dataset.card;if(!deployedRigs().some(r=>r.id===id))return;battleSelected=id;
 document.querySelectorAll('.battle-card[data-card]').forEach(el=>el.classList.toggle('selected-rig',el.dataset.card===id));
 document.querySelectorAll('.rig-navigation button[data-id], .floating-rigs button[data-id]').forEach(el=>{const selected=el.dataset.id===id;el.classList.toggle('primary',selected);el.setAttribute('aria-pressed',String(selected));});
}

function randomFormation(){
 if(state.view==='battle'||(isCampaign()&&state.campaign?.phase==='battle'))return;
 const pool=FORMATIONS.map((_,i)=>i).filter(i=>i>0&&(!isCampaign()||campaignStarted()||[1,2,3].includes(i)));
 state.formation=pool[crypto.getRandomValues(new Uint32Array(1))[0]%pool.length];render();
}
function handleClick(ev){
 selectClickedCard(ev.target);
 const el=ev.target.closest('button');if(!el||el.disabled)return;
 const d=el.dataset;
 if(d.chooseFaction){chooseFaction(d.chooseFaction);return;}
 if(d.changeFaction!==undefined){if(!state.squad.length){state.factionPending=true;render();}return;}
 if(d.factionScroll){const carousel=document.querySelector('.faction-carousel');if(carousel)carousel.scrollBy({left:Number(d.factionScroll)*carousel.clientWidth,behavior:'smooth'});return;}
 if(d.pregameRandom){randomPregame(d.pregameRandom);return;}
 if(d.formationRandom!==undefined){randomFormation();return;}
 if(d.startNormal!==undefined){if(!isCampaign()&&state.preBattle&&state.squad.length&&!squadronErrors().length){state.preBattle=false;render();}return;}
 if(d.objective){const r=deployedRigs().find(r=>r.id===d.objective);if(!r||rigUnusable(r)||r.campaign?.mercenary||state.maintenance||currentEngagement()[0]!=='salvage-heist')return;const before=battleSnapshot();r.battle.carryingObjective=!r.battle.carryingObjective;recordBattle(before);render();return;}
 if(d.shutdown){const r=deployedRigs().find(r=>r.id===d.shutdown);if(r)shutDownRig(r);return;}
 if(d.exploded){const r=deployedRigs().find(r=>r.id===d.exploded);if(r)markExploded(r);return;}
 const targetRig=state.squad.find(r=>r.id===(d.id||d.armLoss||d.rupturePicker));if(targetRig&&el.closest('.battle-card')&&rigUnusable(targetRig)&&d.mobile!=='select'&&d.mobile!=='undo')return;
 if(d.rupturePicker){rupturePickerId=rupturePickerId===d.rupturePicker?null:d.rupturePicker;render();return;}
 if(d.engagementRandom!==undefined){if(!(isCampaign()&&state.campaign?.phase==='battle')){const pool=availableEngagements();state.engagement=pool[crypto.getRandomValues(new Uint32Array(1))[0]%pool.length][0];render();}return;}
 if(d.endRoll!==undefined&&state.maintenance){state.maintenance.endDie=crypto.getRandomValues(new Uint32Array(1))[0]%12+1;render();return;}
 if(d.armLoss){const r=deployedRigs().find(r=>r.id===d.armLoss);if(!r||!r.battle.pendingArm||state.maintenance)return;const die=d.random?crypto.getRandomValues(new Uint32Array(1))[0]%12+1:Number(document.getElementById('arm-loss-'+r.id)?.value);if(!Number.isInteger(die)||die<1||die>12){notify('Enter a D12 result from 1 to 12.');return;}const before=battleSnapshot();r.battle.weaponState[die<=6?0:1]='disabled';r.battle.pendingArm=false;recordBattle(before);render();notify('D12 '+die+': '+(die<=6?'Left':'Right')+' weapon unusable.');return;}
 if(d.action==='finish-normal'){finishNormalGame();return;}
 if(d.maintenance){maintenanceAction(d.maintenance,d.id);return;}
 if(d.action==='next-round'){maintenanceAction('open');return;}
 if(state.maintenance&&(d.mobile==='named'||d.action==='activated'||(d.action==='counter'&&d.kind==='actions')||d.action==='reset-battle'||d.cAction==='finish-battle')){notify('Complete Maintenance before continuing.');return;}
 if(d.mobile){
  if(d.mobile==='select'){battleSelected=d.id;render();scrollToSelectedRig();return;}
  if(d.mobile==='focus'){battleFocus=!battleFocus;render();return;}
  if(campaignStarted()&&state.campaign.phase!=='battle')return;
  if(d.mobile==='undo'){const last=battleUndo.get(workspaces.activeId)?.pop();if(last){state.engagementEnded=!!last.engagementEnded;state.maintenance=clone(last.maintenance||null);state.round=last.round;for(const saved of last.rigs){const r=state.squad.find(r=>r.id===saved.id);if(r)r.battle=clone(saved.battle);}render();}return;}
  if(d.mobile==='named'){
   const r=deployedRigs().find(r=>r.id===d.id);if(!r||r.battle.actions>=actionLimit(r)||r.battle.activated)return;
   const slot=Number(d.slot),weapon=effectiveRig(r).weapons[r.weapons[slot]];
   if(['Fire','Melee','Reload'].includes(d.name)&&(!weapon||r.battle.weaponState[slot]==='disabled'||(d.name==='Reload'?r.battle.weaponState[slot]!=='reload':r.battle.weaponState[slot]!=='ready')))return;
   if(d.name==='Move'&&activeConditions(r).includes('Immobilised')){notify('Immobilised: movement is blocked. Resolve permitted pivoting at the table.');return;}
   if(['Fire','Melee'].includes(d.name)&&r.battle.pendingArm){notify('Resolve the damaged Arms D12 first.');return;}
   const before=battleSnapshot();spendAction(r,1,namedActionHeat(r,d.name,slot),d.name+(['Fire','Melee','Reload'].includes(d.name)?' · '+SLOTS[slot]+' · '+weapon.name:''));
   if(d.name==='Fire')r.battle.weaponState[slot]='reload';
   if(d.name==='Reload')r.battle.weaponState[slot]='ready';
   beginActionHeatCheck(r,before);
   recordBattle(before);render();return;
  }
 }
 const track=state.view==='battle'&&(['activated','heat','counter','condition','next-round','reset-battle'].includes(d.action)||d.cAction==='reroll-used');
 const before=track?battleSnapshot():null;
 previousHandleClick(ev);
 if(before){if(d.action==='counter'&&d.kind==='actions'&&Number(d.value)>0){const r=state.squad.find(r=>r.id===d.id);if(r)beginActionHeatCheck(r,before);}for(const old of before.rigs){const r=state.squad.find(r=>r.id===old.id);if(r)syncComponentDamage(r,old.battle);}recordBattle(before);render();}
 // Battle history is scoped to an Engagement and must not undo campaign transitions.
 if(d.cAction&&d.cAction!=='reroll-used'){battleUndo.delete(workspaces.activeId);if(state.view==='battle')render();}
}
function handleChange(ev){
 if(ev.target.dataset.pregame){setPregame(ev.target.dataset.pregame,Number(ev.target.value));return;}
 if(state.view==='battle'){const r=state.squad.find(r=>r.id===ev.target.dataset.id);if(r&&rigUnusable(r))return;}
 if(ev.target.dataset.field==='engagement'){if(!(isCampaign()&&state.campaign?.phase==='battle')&&availableEngagements().some(e=>e[0]===ev.target.value)){state.engagement=ev.target.value;render();}return;}
 if(state.maintenance&&['end-die','early-end'].includes(ev.target.dataset.field)){state.maintenance[ev.target.dataset.field==='end-die'?'endDie':'earlyEnd']=ev.target.type==='checkbox'?ev.target.checked:ev.target.value;persist();return;}
 if(ev.target.dataset.maintenanceField){const el=ev.target,row=state.maintenance?.rows.find(x=>x.id===el.dataset.id);if(row){row[el.dataset.maintenanceField]=el.type==='checkbox'?el.checked:el.value;persist();if(el.dataset.maintenanceField!=='die')render();}return;}

 const track=state.view==='battle'&&['part-state','ruptured','weapon-state','spent'].includes(ev.target.dataset.field);
 const before=track?battleSnapshot():null;previousHandleChange(ev);if(before){for(const old of before.rigs){const r=state.squad.find(r=>r.id===old.id);if(r)syncComponentDamage(r,old.battle);}recordBattle(before);render();}
}



function maintenanceRollText(total){const i=total<=5?0:total<=7?1:total<=9?2:total<=11?3:total<=13?4:total<=15?5:total<=17?6:total===18?7:total===19?8:9;return HEAT_RESULTS[i][1];}
function legacyMaintenanceView(){const m=state.maintenance;if(!m)return '';return `<section class="panel maintenance-panel" id="maintenance-panel"><h2>Maintenance phase · Round ${state.round}</h2><p class="small">1. Resolve Heat Threshold rolls, hottest Rig first (ties: initiative). Enter the dice rolled at the table. Apply results using the Rig trackers below, including any repeat rolls, then mark each roll resolved.</p><div class="maintenance-grid">${m.rows.map(row=>{const r=state.squad.find(r=>r.id===row.id);if(!r)return '';const rig=effectiveRig(r),b=r.battle,total=Number(row.die)+row.modifier+Number(row.extra||0);return `<article class="component" data-maintenance-rig="${r.id}"><h3>${esc(r.name)}</h3><p class="small">Heat at phase start: ${row.heat} · Exhaust ${rig.exhaust}</p>${row.required?`<p class="warning">Heat Threshold: D12 + ${row.modifier}${row.extra?` · extra modifier ${esc(row.extra)}`:''}</p><label class="field"><span>D12 result</span><input type="number" min="1" max="12" step="1" data-maintenance-field="die" data-id="${r.id}" value="${esc(row.die)}" ${m.cooled?'disabled':''}></label><label class="field"><span>Additional Heat-result modifier (Equipment / traits)</span><input type="number" min="-20" max="20" step="1" data-maintenance-field="extra" data-id="${r.id}" value="${esc(row.extra)}" ${m.cooled?'disabled':''}></label>${Number.isInteger(Number(row.die))&&Number(row.die)>=1&&Number(row.die)<=12?`<p><strong>Total ${total}:</strong> ${maintenanceRollText(total)}</p>`:''}<label class="checkline"><input type="checkbox" data-maintenance-field="resolved" data-id="${r.id}" ${row.resolved?'checked':''} ${m.cooled?'disabled':''}>All Heat results and repeat rolls applied</label>`:'<p class="small">Below Heat Threshold: no roll required.</p>'}<p class="small">Current Heat: ${b.heat} · ${b.parts[3]==='disabled'?'Engine Disabled: cannot cool.':b.parts[3]==='catastrophic'?'Engine damaged: cannot cool below Heat Threshold.':'Engine operational.'}</p><label class="checkline"><input type="checkbox" data-maintenance-field="blocked" data-id="${r.id}" ${row.blocked?'checked':''} ${m.cooled?'disabled':''}>Heat cannot decrease (other effect)</label>${r.equipment.some(id=>DATA.equipment[id].name==='Thermal Purge Vent')?`<label class="checkline"><input type="checkbox" data-maintenance-field="stationary" data-id="${r.id}" ${row.stationary?'checked':''} ${m.cooled?'disabled':''}>Thermal Purge Vent: remained stationary (+2 cooling)</label>`:''}${m.cooled?`<p class="small">Exhaust applied: ${row.beforeCooling} → ${row.afterCooling} Heat</p>`:''}<p class="small"><b>Ruptured:</b> ${b.ruptured.map((v,i)=>v?`${PARTS[i]}: resolve 2 damage`:'').filter(Boolean).join(' · ')||'None'}</p>${r.equipment.filter(id=>/Maintenance|Heat Threshold/i.test(DATA.equipment[id].effect)).map(id=>`<p class="small"><b>${esc(DATA.equipment[id].name)}:</b> ${esc(DATA.equipment[id].effect)}</p>`).join('')}${r.campaign?.traits?.length?'<p class="small">Check permanent damage effects in this Rig’s details.</p>':''}</article>`;}).join('')}</div><div class="row" style="margin-top:16px"><button class="primary" data-maintenance="cool" ${m.cooled?'disabled':''}>${m.cooled?'Exhaust applied':'Apply Exhaust to all Rigs'}</button><button data-mobile="undo" ${(battleUndo.get(workspaces.activeId)||[]).length?'':'disabled'}>↶ Undo last change</button></div><p class="small">2. Exhaust is applied automatically once, after resolving Heat rolls. 3. Resolve Ruptured damage, other Maintenance effects, destroyed Rigs and objective scoring manually using the trackers.</p><button class="primary full" data-maintenance="finish" ${m.cooled?'':'disabled'}>Confirm Maintenance & start round ${state.round+1}</button></section>`;}
function legacyMaintenanceAction(action){
 if(state.view!=='battle'||!deployedRigs().length||(campaignStarted()&&state.campaign.phase!=='battle'))return;
 if(action==='open'){
  if(state.engagementEnded){notify('This Engagement has ended. Finish the game or open Aftermath.');return;}
  if(state.maintenance){render();return;}
  if(deployedRigs().some(r=>!r.battle.activated)&&!confirm('Some Rigs are not marked Activated. Have all activations been completed or skipped?'))return;
  const before=battleSnapshot();state.maintenance={round:state.round,cooled:false,rows:deployedRigs().filter(r=>r.battle.parts.filter(p=>p==='disabled').length<2).sort((a,b)=>b.battle.heat-a.battle.heat).map(r=>{const mod=effectiveRig(r).heat[r.battle.heat];return {id:r.id,heat:r.battle.heat,modifier:mod??0,required:mod!==null,die:'',extra:r.equipment.some(id=>DATA.equipment[id].name==='Exotic Engine Coolant')?-1:0,resolved:false,blocked:false,stationary:false};})};recordBattle(before);render();return;
 }
 const m=state.maintenance;if(!m)return;
 if(action==='cool'){
  if(m.cooled)return;
  if(m.rows.some(row=>row.required&&(!row.resolved||!Number.isInteger(Number(row.die))||Number(row.die)<1||Number(row.die)>12||!Number.isInteger(Number(row.extra))||Math.abs(Number(row.extra))>20))){notify('Enter a valid D12 result and confirm all Heat results and repeat rolls first.');return;}
  if(m.actionCheck){const before=battleSnapshot(),row=m.rows[0],r=state.squad.find(r=>r.id===row.id);if(!r)return;r.battle=maintenanceFinal(row);if(row.armDie)r.battle.pendingArm=false;state.maintenance=null;recordBattle(before);render();notify('Heat effects applied. Continue the activation if the Rig can still act.');return;}
  if(needsEndRoll()&&!m.earlyEnd&&(!Number.isInteger(Number(m.endDie))||Number(m.endDie)<1||Number(m.endDie)>12)){notify('Enter the Engagement end D12 first.');return;}
  const ended=!!m.earlyEnd||state.round>=(currentEngagement()[2]||6)||(needsEndRoll()&&Number(m.endDie)>=(state.round===4?8:5));
  const before=battleSnapshot();for(const row of m.rows){const r=state.squad.find(r=>r.id===row.id);if(!r)continue;const b=r.battle,rig=effectiveRig(r);row.beforeCooling=b.heat;
   if(b.parts.filter(p=>p==='disabled').length<2&&b.parts[3]!=='disabled'&&!row.blocked){const floor=b.parts[3]==='catastrophic'?Math.max(0,rig.heat.findIndex(x=>x!==null)):0;const extra=row.stationary&&r.equipment.some(id=>DATA.equipment[id].name==='Thermal Purge Vent')?2:0;b.heat=Math.min(b.heat,Math.max(floor,b.heat-Math.max(0,rig.exhaust)-extra));}
   row.afterCooling=b.heat;
  }m.cooled=true;recordBattle(before);render();return;
 }
 if(action==='finish'){
  if(!m.cooled){notify('Apply Exhaust first.');return;}
  const before=battleSnapshot();state.round++;for(const r of deployedRigs()){r.battle.shutDown=false;r.battle.actions=0;r.battle.actionHistory=[];r.battle.activationConditions=null;r.battle.activated=false;}state.maintenance=null;recordBattle(before);render();notify('Maintenance complete. Next round started.');
 }
}


function beginActionHeatCheck(r,before){
 if(state.maintenance||r.battle.heat<effectiveRig(r).heat.length-1)return;
 const old=before.rigs.find(x=>x.id===r.id)?.battle;if(!old||r.battle.actions<=old.actions)return;
 const modifier=effectiveRig(r).heat[r.battle.heat]??0;
 state.maintenance={automatic:true,actionCheck:true,actionBefore:clone(old),rows:[{id:r.id,original:clone(r.battle),preview:clone(r.battle),modifier,required:true,done:false,die:'',extra:(r.equipment.some(id=>DATA.equipment[id].name==='Exotic Engine Coolant')?-1:0)+(r.campaign?.traits.some(t=>t.part===3&&t.kind===0)?1:0),log:[],location:false}]};
}
function maintenanceFinal(row){const r=state.squad.find(r=>r.id===row.id),rig=effectiveRig(r),b=clone(row.preview);
 if(!state.maintenance?.actionCheck&&b.parts.filter(p=>p==='disabled').length<2){
  if(b.parts[3]!=='disabled'&&!b.heatLocked&&!row.blocked){const floor=b.parts[3]==='catastrophic'?Math.max(0,rig.heat.findIndex(x=>x!==null)):0;const vent=row.stationary&&r.equipment.some(id=>DATA.equipment[id].name==='Thermal Purge Vent')?2:0;b.heat=Math.min(b.heat,Math.max(floor,b.heat-rig.exhaust-vent));}
  b.ruptured.forEach((v,i)=>{if(v&&b.parts[i]!=='disabled')inflict(b,i,2);});
 }
 if(b.parts[0]!=='ok'&&!b.conditions.includes('Stalled'))b.conditions.push('Stalled');
 if(b.parts[0]==='disabled'&&!b.conditions.includes('Shocked'))b.conditions.push('Shocked');
 if(b.parts[2]!=='ok'&&!b.conditions.includes(b.parts[2]==='disabled'?'Immobilised':'Slowed'))b.conditions.push(b.parts[2]==='disabled'?'Immobilised':'Slowed');
 if(b.parts[0]!=='ok')b.weaponState[2]='disabled';
 if(b.parts[1]==='disabled'){b.weaponState[0]='disabled';b.weaponState[1]='disabled';}
 if(b.parts[1]==='catastrophic'&&row.original.parts[1]==='ok'&&Number(row.armDie)>=1)b.weaponState[Number(row.armDie)<=6?0:1]='disabled';
 if(b.parts[3]==='catastrophic'&&!b.heatLocked)b.heat=Math.max(b.heat,rig.heat.findIndex(x=>x!==null));
 return b;
}
function maintenanceView(){const m=state.maintenance;if(!m)return '';if(!m.automatic)return legacyMaintenanceView();
 return `<div class="maintenance-backdrop"><section class="panel maintenance-dialog" role="dialog" aria-modal="true" aria-label="${m.actionCheck?'Maximum Heat roll':'Maintenance phase'}"><h2>${m.actionCheck?'Maximum Heat · Action check':'Maintenance phase · Round '+state.round}</h2><p class="small">Enter your die result and tap Apply manual result, or use D12 &amp; Apply to roll automatically. Repeat rolls and impact locations are requested when needed. ${m.actionCheck?'Resolve this Heat check before performing the action at the table. Exhaust and Ruptured are not applied here.':'Changes remain a preview until confirmation. Resolve tied Heat in initiative order.'}</p><div class="maintenance-grid">${m.rows.map(row=>{const r=state.squad.find(r=>r.id===row.id),final=maintenanceFinal(row),arm=final.parts[1]==='catastrophic'&&row.original.parts[1]==='ok';return `<article class="component" data-maintenance-rig="${r.id}"><h3>${esc(r.name)}</h3><p class="small">Starting Heat ${row.original.heat} · Exhaust ${effectiveRig(r).exhaust}</p>${!row.done?`<p><strong>${row.location?'Impact location D12':'Heat Threshold D12 + '+row.modifier}</strong></p><label class="field"><span>Manual die result (1–12)</span><input type="number" inputmode="numeric" min="1" max="12" step="1" data-maintenance-field="die" data-id="${row.id}" value="${esc(row.die)}" placeholder="1–12"></label><div class="row"><button data-maintenance="apply" data-id="${row.id}">Apply manual result</button><button class="primary" data-maintenance="roll-apply" data-id="${row.id}">D12 &amp; Apply</button></div>${!row.location?`<label class="field"><span>Additional result modifier</span><input type="number" min="-20" max="20" data-maintenance-field="extra" data-id="${row.id}" value="${esc(row.extra)}"></label>`:''}`:`<span class="badge">${row.required?'Heat resolved':'No Heat roll required'}</span>`}${row.log.map(t=>`<p class="small">${esc(t)}</p>`).join('')}<label class="checkline"><input type="checkbox" data-maintenance-field="blocked" data-id="${row.id}" ${row.blocked?'checked':''}>Other effect prevents cooling</label>${r.equipment.some(id=>DATA.equipment[id].name==='Thermal Purge Vent')?`<label class="checkline"><input type="checkbox" data-maintenance-field="stationary" data-id="${row.id}" ${row.stationary?'checked':''}>Remained stationary · Thermal Purge Vent</label>`:''}${arm?`<label class="field"><span>Damaged Arms: D12 (1–6 left / 7–12 right weapon)</span><input type="number" min="1" max="12" data-maintenance-field="armDie" data-id="${row.id}" value="${esc(row.armDie||'')}"></label><button data-maintenance="arm-roll" data-id="${row.id}">Roll weapon D12</button>`:''}<p><strong>${m.actionCheck?'Preview after Heat check':'Preview after Maintenance'}</strong><br>Heat ${row.original.heat} → ${final.heat}<br>${PARTS.map((p,i)=>`<span class="maintenance-part ${componentColour(final,i)}">${p}: ${row.original.sp[i]} → ${final.sp[i]} (${final.parts[i]})</span>`).join('')}${r.weapons.map((w,i)=>w===null?'':`<span class="maintenance-part ${final.weaponState[i]==='disabled'?'damage-red':''}">${SLOTS[i]} · ${esc(effectiveRig(r).weapons[w].name)}: ${final.weaponState[i]==='disabled'?'UNUSABLE':final.weaponState[i]==='reload'?'Reload required':'Ready'}</span>`).join('')}</p><p class="small">Conditions: ${final.conditions.join(', ')||'None'}${final.skipNext?' · Skip next activation':''}${final.heatLocked?' · Heat locked':''}</p>${final.parts.filter(p=>p==='disabled').length>=2?'<p class="warning">Destroyed: resolve explosion checks and any damage to nearby Rigs at the table before confirming.</p>':''}</article>`;}).join('')}</div><p class="small">${m.actionCheck?'Only Heat Threshold effects are applied; Actions used remain spent.':'Exhaust and 2 damage per Ruptured component are included automatically.'} Objective scoring, explosions affecting other models and scenario-specific effects remain at the table.</p>${m.actionCheck?'':engagementEndPanel()}<div class="row"><button data-maintenance="cancel">${m.actionCheck?'Cancel action':'Cancel preview'}</button><button class="primary" data-maintenance="finish" ${m.rows.every(r=>r.done)?'':'disabled'}>${m.actionCheck?'Apply to Rig & continue activation':'Confirm Maintenance & resolve round end'}</button></div></section></div>`;
}
function maintenanceAction(action,id){
 if(state.view!=='battle'||(campaignStarted()&&state.campaign.phase!=='battle'))return;
 if(state.maintenance&&!state.maintenance.automatic){legacyMaintenanceAction(action);return;}
 if(action==='open'){
  if(state.engagementEnded){notify('This Engagement has ended. Finish the game or open Aftermath.');return;}
  if(state.maintenance){render();return;}
  if(deployedRigs().some(r=>!r.battle.activated)&&!confirm('Have all activations been completed or skipped?'))return;
  state.maintenance={automatic:true,rows:deployedRigs().filter(r=>r.battle.parts.filter(p=>p==='disabled').length<2).sort((a,b)=>b.battle.heat-a.battle.heat).map(r=>{const modifier=effectiveRig(r).heat[r.battle.heat];return {id:r.id,original:clone(r.battle),preview:clone(r.battle),modifier:modifier??0,required:modifier!==null,done:modifier===null,die:'',extra:(r.equipment.some(id=>DATA.equipment[id].name==='Exotic Engine Coolant')?-1:0)+(r.campaign?.traits.some(t=>t.part===3&&t.kind===0)?1:0),log:[],location:false};})};render();return;
 }
 const m=state.maintenance;if(!m)return;const row=m.rows.find(r=>r.id===id);
 const roll=()=>crypto.getRandomValues(new Uint32Array(1))[0]%12+1;
 if(action==='cancel'){if(m.actionCheck){const r=state.squad.find(r=>r.id===m.rows[0].id);if(r)r.battle=clone(m.actionBefore);}state.maintenance=null;render();return;}
 if(action==='roll-apply'&&row&&!row.done){row.die=roll();action='apply';}
 if(action==='roll'&&row&&!row.done){row.die=roll();render();return;}
 if(action==='arm-roll'&&row){row.armDie=roll();render();return;}
 if(action==='apply'&&row&&!row.done){
  const die=Number(row.die),extra=Number(row.extra);if(!Number.isInteger(die)||die<1||die>12||!Number.isInteger(extra)||Math.abs(extra)>20){notify('Enter a valid D12 result and modifier.');return;}
  const b=row.preview;row.die='';
  if(row.location){const part=die<=4?0:die<=7?1:die<=10?2:3;if(b.parts[part]==='disabled'||b.ruptured[part]){row.log.push('Impact '+die+': unavailable or already Ruptured; roll impact again.');}else{b.ruptured[part]=true;row.location=false;row.done=true;row.log.push(PARTS[part]+' becomes Ruptured.');}render();return;}
  const total=die+row.modifier+extra;const condition=total<=7?'Stalled':total<=9?'Slowed':'Shocked',part=total<=7?0:total<=9?2:1;
  if(total>=6&&total<=11&&(b.parts[part]==='disabled'||b.conditions.includes(condition))){row.log.push('D12 '+die+' → '+total+': result cannot apply; roll again.');render();return;}
  if(total===19&&b.parts[3]==='disabled'){row.log.push('Engine already Disabled; roll again.');render();return;}
  row.log.push('D12 '+die+' → '+total+': '+maintenanceRollText(total));row.done=true;
  if(total>=6&&total<=11){inflict(b,part,2);b.conditions.push(condition);}
  else if(total<=5){}
  else if(total<=13){row.location=true;row.done=false;}
  else if(total<=15||total===18){b.parts.forEach((p,i)=>{if(p!=='disabled')inflict(b,i,1);});if(total===18)row.done=false;}
  else if(total<=17){b.heat=0;b.skipNext=true;}
  else if(total===19){b.sp[3]=0;b.parts[3]=b.parts[3]==='catastrophic'?'disabled':'catastrophic';}
  else{b.parts=b.parts.map(p=>p==='disabled'?'disabled':'catastrophic');b.sp=b.sp.map(()=>0);b.heatLocked=true;}
  render();return;
 }
 if(action==='finish'){
  if(!m.rows.every(r=>r.done)){notify('Resolve all required rolls first.');return;}
  if(m.rows.some(row=>{const b=maintenanceFinal(row);return b.parts[1]==='catastrophic'&&row.original.parts[1]==='ok'&&(!Number.isInteger(Number(row.armDie))||Number(row.armDie)<1||Number(row.armDie)>12);})){notify('Roll which weapon is lost for damaged Arms.');return;}
  if(m.actionCheck){const before=battleSnapshot(),row=m.rows[0],r=state.squad.find(r=>r.id===row.id);if(!r)return;r.battle=maintenanceFinal(row);if(row.armDie)r.battle.pendingArm=false;state.maintenance=null;recordBattle(before);render();notify('Heat effects applied. Continue the activation if the Rig can still act.');return;}
  if(needsEndRoll()&&!m.earlyEnd&&(!Number.isInteger(Number(m.endDie))||Number(m.endDie)<1||Number(m.endDie)>12)){notify('Enter the Engagement end D12 first.');return;}
  const ended=!!m.earlyEnd||state.round>=(currentEngagement()[2]||6)||(needsEndRoll()&&Number(m.endDie)>=(state.round===4?8:5));
  const before=battleSnapshot();for(const row of m.rows){const r=state.squad.find(r=>r.id===row.id);r.battle=maintenanceFinal(row);}
  for(const r of deployedRigs()){const b=r.battle;b.shutDown=false;b.actions=0;b.actionHistory=[];b.activationConditions=null;b.skipActivation=!!b.skipNext;b.activated=!!b.skipNext;b.skipNext=false;}
  state.engagementEnded=ended;if(!ended)state.round++;state.maintenance=null;recordBattle(before);render();notify(ended?'Engagement complete. Finish the game or open Aftermath.':'Maintenance applied. Next round started.');
 }
}
function adjacentRigId(id,direction){const rigs=deployedRigs(),index=rigs.findIndex(r=>r.id===id);return rigs[Math.max(0,Math.min(rigs.length-1,index+direction))]?.id;}
function installRigSwipe(){
 let gesture=null;
 const enabled=()=>menuScreen==='play'&&state.view==='battle'&&(window.matchMedia('(max-width: 767px)').matches||battleFocus);
 document.addEventListener('touchstart',ev=>{
  gesture=null;
  if(!enabled()||ev.touches.length!==1)return;
  const target=ev.target,card=target.closest('.battle-card.selected-rig');
  if(!card||target.closest('button,input,select,textarea,a,summary,.heat-track'))return;
  gesture={x:ev.touches[0].clientX,y:ev.touches[0].clientY,id:activeRigId(),time:Date.now()};
 },{passive:true});
 document.addEventListener('touchmove',ev=>{if(ev.touches.length!==1)gesture=null;},{passive:true});
 document.addEventListener('touchcancel',()=>{gesture=null;},{passive:true});
 document.addEventListener('touchend',ev=>{
  const start=gesture;gesture=null;
  if(!start||!enabled()||!ev.changedTouches.length||start.id!==activeRigId())return;
  const dx=ev.changedTouches[0].clientX-start.x,dy=ev.changedTouches[0].clientY-start.y;
  if(Math.abs(dx)<65||Math.abs(dx)<Math.abs(dy)*1.7||Date.now()-start.time>900)return;
  const next=adjacentRigId(start.id,dx<0?1:-1);
  if(next&&next!==start.id){battleSelected=next;render();document.querySelector('.rig-navigation button[aria-pressed="true"]')?.scrollIntoView({block:'nearest',inline:'nearest'});}
 },{passive:true});
}

if(typeof document!=='undefined'){init();installRigSwipe();}
