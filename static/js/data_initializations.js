let weapons = [
    new Weapon("Sword of Ill Will", "soiw.jpg", 6)
]

let armor_common = [
    new Armor("Rogue's Hood", ARMOR_TYPES.HEAD, 3),
    new Armor("Rogue's Cloak", ARMOR_TYPES.BODY, 3),
    new Armor("Rogue's Pads", ARMOR_TYPES.LEG, 3)
]
let armor_uncommon = [
    new Armor("Knight's Helmet", ARMOR_TYPES.HEAD, 5),
    new Armor("Knight's Armor", ARMOR_TYPES.BODY, 5),
    new Armor("Knight's Kilt", ARMOR_TYPES.LEG, 5)
]
let armor_rare = [
    new Armor("Red Dragon Scale Helmet", ARMOR_TYPES.HEAD, 9),
    new Armor("Red Dragon Scale Hide", ARMOR_TYPES.BODY, 9),
    new Armor("Red Dragon Scale Boots", ARMOR_TYPES.LEG, 9)
]

let weapon_common = [
    new Weapon("Short Sword", WEAPON_TYPES.SWORD, 3),
    new Weapon("Short Bow", WEAPON_TYPES.BOW, 3),
    new Weapon("Hunting Dagger", WEAPON_TYPES.DAGGER, 3)
]
let weapon_uncommon = [
    new Weapon("Long Sword", WEAPON_TYPES.SWORD, 5),
    new Weapon("Long Bow", WEAPON_TYPES.BOW, 5),
    new Weapon("Washington's Pistol", WEAPON_TYPES.GUN, 5)
]
let weapon_rare = [
    new Weapon("Excalibur", WEAPON_TYPES.SWORD, 9),
    new Weapon("RH Deagle", WEAPON_TYPES.GUN, 9)
]

let enemies = [
    new Enemy ("Atamil, The Nightwalker", "00012.jpg", 30,5,6,0.3),
    new Enemy ("Orvach-Ho-Iih", "00013.jpg", 15,10,4,0.2),
    new Enemy ("The Forest's Tears", "00018.jpg", 50,4,20,0.95),
    new Enemy ("It That Tells Of Psychoreal", "00021.jpg", 30,3,9,0.99),
    new Enemy ("L'Loigo", "00022.jpg", 45,10,15,0.75),
    new Enemy ("G'Lyeb, The Forest Watcher", "00023.jpg", 20,3,7,0.5),
    new Enemy ("They That Speak", "00051.jpg", 150,1,3,0.1),
    new Enemy ("Nioigon", "00055.jpg", 30,3,10,0.3)
]

let bosses = [
    new Boss ("Messenger of Ragnarok", "mor.jpg", 100, 10, 14)
]

let events = [
    new Event (
        "Draven's Elixer",
        "dravens_elixer.jpg",
        "The alchemist in front of you can't help but laugh. What immortal dare require substance? For him, this is not a matter of finance, but a slice of entertainment, a confirmation of skill. \"Not bad\" he says, as he cracks a sinister yet ingenuous smile in your direction. \"Care to try? It's still warm.\" You take the vile serum in hand and give it a gloss over.",
        "Couldn't hurt to try",
        "I'd rather not",
        "You drink the fluid with grace. ",
        "You hand the draught back to it's owner. He seems upset, but once again cracks a smile. \"Oh well, more for me\" as he finishes the rest in one gulp.",
        () => {
            console.log('Choice 1!')
        },
        () => {
            console.log('Choice 2!')
        }
    ),
    new Event (
        "The Witch's Dilemna",
        "witchs_dilemna.jpg",
        "Life has never been easy for these people. Many have burned by the hands of the previous generations. Their eradication, however, has had both positive and negative impact. In the present, however, the negatives are very prominent. \"Please, help me...\" she meekly says, outreaching a rotting hand in an almost zombie like fashion. She seems very weak.",
        "Attempt to help",
        "Ignore the potential danger",
        "You proceed to help her up by the hand. ",
        "You continue on as if you heard nothing. Who knows what troubles could arise by helping those with unspeakable powers.",
        () => {
            console.log('Choice 1!')
        },
        () => {
            console.log('Choice 2!')
        }
    ),
    new Event (
        "The Apothecary's Weight",
        "aweight.jpg",
        "No matter how hard to try to shake the chains of mortality, it always finds a way to creep it's way into your life. Sometimes, it's not so bad. When the presence of The Apothecary's Weight enters your vision, there's almost a thought that mortality, and eventual death, may not be so bad.",
        "Rest a little bit",
        "Rest a little longer",
        "You take rest at the unassuming refuge.",
        "You take rest at the unassuming refuge.",
        () => {
            console.log('Choice 1!')
        },
        () => {
            console.log('Choice 2!')
        }
    )
]