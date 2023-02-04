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