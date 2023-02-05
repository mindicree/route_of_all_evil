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
    new Enemy ("They That Speak", "00051.jpg", 100,1,3,0.1),
    new Enemy ("Nioigon", "00055.jpg", 30,3,10,0.3)
]

let bosses = [
    new Boss ("Guamangrkath", "00010_00010.jpg", 100, 150, 50),
    new Boss ("Yithashaquoph", "00003_00003.jpg", 200, 50, 50),
    new Boss ("Fthil Yag-Tal", "00012_00012.jpg", 75, 150, 70),
    new Boss ("At-tstondeha", "00001_00001.jpg", 50, 125, 125),
    new Boss ("Azangarnoth", "00005_00005.jpg", 200, 200, 100)
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
            let result = Math.random() * 100
            let outtext = document.querySelector('#storyresult_text')

            if (result < 33) {
                outtext.innerHTML += 'The odor is potent, but you wash it down. The odor worries you, but <span class="text-white">you dont seem to feel anything happening.<span class="text-white"> \"Aw, that sucks\" the artificer says as he continues on another.'
            } else if (result < 95) {
                player.current_hp = Math.floor(Math.min(player.hp, player.current_hp*1.1))
                outtext.innerHTML += 'The odor is potent, but you wash it down. Suddenly you feel <span class="text-white">reguvenated with a bit of life</span>. \"Hey, not bad\" the artificer says, almost hoping for something else'
            } else {
                player.current_hp = Math.ceil(player.current_hp / 2)
                outtext.innerHTML += 'The odor is potent, too potent in fact. After a few seconds of endurance, <span class="text-white">you hurl the concoction and what feels like your whole insides</span>, as the artificer just laughs. \"Hah, not bad! Let\'s do that again!\"'
            }
        },
        () => {
            
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
            if (Math.random()*100 < 85) {
                let outtext = document.querySelector('#storyresult_text')
                player.current_gold += Math.ceil(current_level * Math.random()*10)
                outtext.innerHTML += 'Your good deeds are well recognized and <span class="text-white">you are even rewarded financially</span>. \"This world has seen so many things, but I\'m glad there are still those willing to try\" the witch says as she wanders off. What a thought.'
            } else {
                let outtext = document.querySelector('#storyresult_text')
                player.current_gold -= Math.ceil(current_level * Math.random()*10)
                if (player.current_gold < 0) player.current_gold = 0;
                outtext.innerHTML += 'Your good deeds are well recognized and the witch had many kind words to say, however, you can\'t help feel that <span class="text-white">you\'re coin pouch is just a bit lighter</span>. \"It helps so much to have people like you\" Of course it is...'
            }
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
        "You take rest at the unassuming refuge. After a good rest, <span class'text-white'>you're whole body feels refreshed. \"Come again!\" you hear from a familiar voice. The demand is almost not needed.</span>",
        "You take rest at the unassuming refuge for an extended stay. You ponder the necessity of a lazy day, but only briefly as you <span class='text-white'>let your muscles loose for a needed relaxation</span> in this dreary world. ",
        () => {
            player.hp += 5
            player.current_hp = player.hp
        },
        () => {
            player.hp = Math.floor(player.hp*1.5)
            player.current_hp = player.hp
            player.atk = Math.floor(player.atk * 0.85)
        }
    )
]