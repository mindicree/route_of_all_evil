class Enemy {
    constructor(name, hp, atk, def, image) {
        this.name = name
        this.hp = hp
        this.atk = atk
        this.def = def
        this.image = image
    }
}

const ITEM_TYPES = ['POTION', 'WEAPON', 'ARMOR']

const ARMOR_TYPES = {
    HEAD: 'head',
    BODY: 'body',
    LEG: 'leg'
}
class Armor {
    constructor(type, name, def) {
        this.type = type
        this.def = def
        this.name = name
    }
}

class Weapon {
    constructor(name, atk) {
        this.name = name
        this.atk = atk
    }
}

class Boss {
    constructor(name, hp, atk, def) {
        
    }
}

class Player {
    constructor(name, hp, atk, def, head_armor, body_armor, leg_armor) {
        this.name = name
        this.hp = hp
        this.atk = atk
        this.def = def
    }
}