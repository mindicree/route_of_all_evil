let weapons = [
    new Weapon("Sword of Ill Will", "soiw.jpg", 6)
]

let armors = [
    new Armor("Helmet of Hermos", "hoh.jpg", ARMOR_TYPES.HEAD, 5)
]

let potions = [
    new Potion("Potion of Lesser Healing", "plh", 0.25)
]

let enemies = [
    new Enemy ("They That Speak", "they_that_speak.jpg", 20,3,7)
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
        "witch.jpg",
        "Donec libero mauris, hendrerit eu turpis venenatis, vestibulum volutpat purus. Ut pharetra convallis nulla vitae venenatis. Mauris gravida turpis dui. Nullam posuere diam id arcu varius egestas. Phasellus non laoreet arcu, vitae mattis nunc. In non lorem arcu. Praesent semper tempor tristique. Integer commodo faucibus nunc et iaculis. Cras ac venenatis libero, nec hendrerit arcu. Sed pretium justo mauris, id accumsan sapien eleifend vel. Quisque quis elementum quam.",
        "Attempt to help",
        "Leave for now...",
        "You did the thing",
        "You decided to leave",
        () => {
            console.log('Choice 1!')
        },
        () => {
            console.log('Choice 2!')
        }
    )
]