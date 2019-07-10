const OperatorsData = [ 
    { 
        operator: 'Sledge',
        primary_weapon: 'L85A2',
        attachments: [ 'Holographic', 'compensator', 'vertical grip' ] 
    },
    { 
        operator: 'Thatcher',
        primary_weapon: 'L85A2',
        attachments: [ 'Holographic', 'compensator', 'vertical grip' ] 
    },
    { 
        operator: 'Thatcher',
        primary_weapon: 'AR33',
        attachments: [ 'Holographic', 'compensator', 'angled grip' ] 
    },
    { 
        operator: 'Ash',
        primary_weapon: 'R4-C',
        attachments: [ 'Reflex', 'flash hider', 'vertical grip' ] 
    },
    { 
        operator: 'Thermite',
        primary_weapon: '556XI',
        attachments: [ 'Holographic', 'flash hider', 'angled grip' ] 
    },
    { 
        operator: 'Twitch',
        primary_weapon: 'F2',
        attachments: [ 'Holographic', 'muzzle brake', 'vertical grip' ] 
    },
    { 
        operator: 'Montagne',
        primary_weapon: 'Pistol',
        attachments: [ 'muzzle brake' ] 
    },
    { 
        operator: 'Glaz',
        primary_weapon: '0Ts-03',
        attachments: [ 'Reflex', 'muzzle brake' ] 
    },
    { 
        operator: 'Fuze',
        primary_weapon: 'AK-12',
        attachments: [ 'Reflex', 'compensator', 'vertical grip' ] 
    },
    { 
        operator: 'Blitz',
        primary_weapon: 'Pistol',
        attachments: [ 'muzzle brake' ] 
    },
    { 
        operator: 'IQ',
        primary_weapon: '552 Commando',
        attachments: [ 'Holographic', 'compensator', 'vertical grip' ] 
    },
    { 
        operator: 'Buck',
        primary_weapon: 'C8-SFW',
        attachments: [ 'Holographic', 'flash hider' ] 
    },
    { 
        operator: 'Blackbeard',
        primary_weapon: 'MK17 CQB',
        attachments: [ 'Acog', 'flash hider', 'vertical grip' ] 
    },
    { 
        operator: 'Capitao',
        primary_weapon: 'PARA-308',
        attachments: [ 'Acog', 'flash hider', 'vertical grip' ] 
    },
    { 
        operator: 'Hibana',
        primary_weapon: 'TYPE-89',
        attachments: [ 'Holographic', 'compensator', 'vertical grip' ] 
    },
    { 
        operator: 'Jackal',
        primary_weapon: 'C7E',
        attachments: [ 'Acog', 'compensator', 'vertical grip' ] 
    },
    { 
        operator: 'Ying',
        primary_weapon: 'T-95 LSW',
        attachments: [ 'Holographic', 'compensator', 'angled grip' ] 
    },
    { 
        operator: 'Zofia',
        primary_weapon: 'M762',
        attachments: [ 'Reflex', 'compensator', 'vertical grip' ] 
    },
    { 
        operator: 'Dokkaebi',
        primary_weapon: 'MK 14 EBR',
        attachments: [ 'Reflex', 'muzzle brake', 'vertical grip' ] 
    },
    { 
        operator: 'Lion',
        primary_weapon: 'V308',
        attachments: [ 'Acog', 'compensator', 'vertical grip' ] 
    },
    { 
        operator: 'Finka',
        primary_weapon: 'SASG-12',
        attachments: [ 'Reflex', 'angled grip', 'laser' ] 
    },
    { 
        operator: 'Maverick',
        primary_weapon: 'M4',
        attachments: [ 'Holographic', 'flash hider', 'angled grip' ] 
    },
    { 
        operator: 'Nomad',
        primary_weapon: 'AK-74M',
        attachments: [ 'Acog', 'flash hider' ] 
    },
    { 
        operator: 'Gridlock',
        primary_weapon: 'M249 SAW',
        attachments: [ 'Acog', 'flash hider', 'vertical grip' ] 
    },
    { 
        operator: 'Nokk',
        primary_weapon: 'FMG-9',
        attachments: [ 'Reflex', 'flash hider' ] 
    },
    { 
        operator: 'Smoke',
        primary_weapon: 'M590A1',
        attachments: [ 'Reflex', 'laser' ] 
    },
    { 
        operator: 'Mute',
        primary_weapon: 'MP5K',
        attachments: [ 'Reflex', 'flash hider', 'laser' ] 
    },
    { 
        operator: 'Castle',
        primary_weapon: 'UMP45',
        attachments: [ 'Holographic', 'compensator', 'vertical grip' ] 
    },
    { 
        operator: 'Pulse',
        primary_weapon: 'UMP45',
        attachments: [ 'Holographic', 'compensator', 'vertical grip' ] 
    },
    { 
        operator: 'Doc',
        primary_weapon: 'MP5',
        attachments: [ 'Acog', 'flash hider', 'vertical grip' ] 
    },
    { 
        operator: 'Rook',
        primary_weapon: 'MP5',
        attachments: [ 'Acog', 'flash hider', 'vertical grip' ] 
    },
    { 
        operator: 'Kapkan',
        primary_weapon: '9x19VSN',
        attachments: [ 'Reflex', 'compensator', 'vertical grip' ] 
    },
    { 
        operator: 'Tachanka',
        primary_weapon: '9x19VSN',
        attachments: [ 'Reflex', 'compensator', 'vertical grip' ] 
    },
    { 
        operator: 'Jager',
        primary_weapon: '416-C Carbine',
        attachments: [ 'Reflex', 'flash hider', 'vertical grip' ] 
    },
    { 
        operator: 'Bandit',
        primary_weapon: 'MP7',
        attachments: [ 'Reflex', 'compensator' ] 
    },
    { 
        operator: 'Frost',
        primary_weapon: '9mm C1',
        attachments: [ 'Red dot', 'extended barrel', 'angled grip', 'laser' ] 
    },
    { 
        operator: 'Valkyrie',
        primary_weapon: 'MPX',
        attachments: [ 'Reflex', 'compensator', 'vertical grip' ] 
    },
    { 
        operator: 'Caveira',
        primary_weapon: 'SPAS-15',
        attachments: [ 'No  attachments' ] 
    },
    { 
        operator: 'Echo',
        primary_weapon: 'MP5SD',
        attachments: [ 'Acog', 'vertical grip', 'laser' ] 
    },
    { 
        operator: 'Mira',
        primary_weapon: 'VECTOR .45 ACP',
        attachments: [ 'Reflex', 'compensator', 'vertical grip' ] 
    },
    { 
        operator: 'Lesion',
        primary_weapon: 'T-5 SMG',
        attachments: [ 'Holographic', 'flash hider' ] 
    },
    { 
        operator: 'Ela',
        primary_weapon: 'FO-12',
        attachments: [ 'Reflex', 'extended barrel', 'vertical grip', 'laser' ] 
    },
    { 
        operator: 'Ela',
        primary_weapon: 'SCORPION EVO 3 A1',
        attachments: [ 'Reflex', 'muzzle brake', 'vertical grip', 'laser' ] 
    },
    { 
        operator: 'Vigil',
        primary_weapon: 'K1A',
        attachments: [ 'Holographic', 'compensator', 'vertical grip' ] 
    },
    { 
        operator: 'Maestro',
        primary_weapon: 'ALDA 5.56',
        attachments: [ 'Holographic', 'compensator', 'vertical grip' ] 
    },
    { 
        operator: 'Alibi',
        primary_weapon: 'Mx4 Storm',
        attachments: [ 'Holographic', 'compensator', 'vertical grip' ] 
    },
    { 
        operator: 'Clash',
        primary_weapon: 'SPSMG9',
        attachments: [ 'Flash hider', 'laser' ] 
    },
    { 
        operator: 'Kaid',
        primary_weapon: 'AUG A3',
        attachments: [ 'Holographic', 'compensator', 'vertical grip' ] 
    },
    { 
        operator: 'Mozzie',
        primary_weapon: 'COMMANDO 9',
        attachments: [ 'Holographic', 'flash hider', 'vertical grip' ] 
    },
    { 
        operator: 'Warden',
        primary_weapon: 'MPX',
        attachments: [ 'Reflex', 'compensator', 'vertical grip' ] 
    } 
]

export default OperatorsData;
