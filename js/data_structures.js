class Enemy {
    constructor(name, hp, atk, def, image) {
        this.name = name
        this.hp = hp
        this.atk = atk
        this.def = def
        this.image = image

        this.items = []
    }
}

const ITEM_TYPES = ['POTION', 'WEAPON', 'ARMOR']

const ARMOR_TYPES = {
    HEAD: 'head',
    BODY: 'body',
    LEG: 'leg'
}

class Item {
    constructor(name) {
        this.name = name
    }
}

class Armor extends Item{
    constructor(name, type, def) {
        super(name)
        this.type = type
        this.def = def
    }
}

class Weapon extends Item {
    constructor(name, atk) {
        super(name)
        this.atk = atk
    }
}

class Potion extends Item {
    constructor(name, heal) {
        super(name)
        this.heal = heal
    }
}

class Boss {
    constructor(name, hp, atk, def, image) {
        
    }
}

class Player {
    constructor(name, hp, atk, def, head_armor, body_armor, leg_armor) {
        this.name = name
        this.hp = hp
        this.atk = atk
        this.def = def

        this.head_armor = head_armor
        this.body_armor = body_armor
        this.leg_armor = leg_armor
    }
}

class Event {
    constructor(name, text, choice_1_text, choice_2_text, choice_1_result, choice_2_result, choice_1_function, choice_2_function) {
        this.name = name
        this.text = text
        this.choice_1_text = choice_1_text
        this.choice_2_text = choice_2_text
        this.choice_1_result = choice_1_result
        this.choice_2_result = choice_2_result
        this.choice_1_function = choice_1_function
        this.choice_2_function = choice_2_function
    }
}