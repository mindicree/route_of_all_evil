class Enemy {
    constructor(name, image, hp, atk, def, level=1) {
        this.name = name
        this.hp = hp
        this.atk = atk
        this.def = def
        this.image = image
        this.current_hp = hp
        this.level = level
    }

    getCurrentAtk() {
        let current_stat = this.atk
        for (let i = 0; i < this.level; i++) {
            current_stat *= 1.1
        }
        return current_stat
    }

    getCurrentDef() {
        let current_stat = this.def
        for (let i = 0; i < this.level; i++) {
            current_stat *= 1.1
        }
        return current_stat
    }
}

const ITEM_TYPES = ['POTION', 'WEAPON', 'ARMOR']

class Item {
    constructor(name, image, level=1) {
        this.name = name
        this.image = image
        this.level = level
    }
}

const ARMOR_TYPES = {
    HEAD: 'head',
    BODY: 'body',
    LEG: 'leg'
}
class Armor extends Item {
    constructor(name, image, type, def, level=1) {
        super(name, image, level)
        this.type = type
        this.def = def
    }

    getCurrentDef() {
        let current_stat = this.def
        for (let i = 0; i < this.level; i++) {
            current_stat *= 1.1
        }
        return current_stat
    }
}

class Weapon extends Item {
    constructor(name, image, atk, level=1) {
        super(name, image, level)
        this.atk = atk
    }

    getCurrentAtk() {
        let current_stat = this.atk
        for (let i = 0; i < this.level; i++) {
            current_stat *= 1.1
        }
        return current_stat
    }
}

class Potion extends Item {
    constructor(name, image, heal, level=1) {
        super(name, image, level)
        this.heal = heal
    }
}

class Boss {
    constructor(name, image, hp, atk, def, level=1) {
        this.name = name
        this.image = image
        this.hp = hp
        this.atk = atk
        this.def = def
        this.level = level

        this.current_hp = hp
    }
}

class Player {
    constructor(name, hp, atk, def) {
        this.name = name
        this.hp = hp
        this.atk = atk
        this.def = def

        this.items = []
        this.current_head = null
        this.current_body = null
        this.current_leg = null
        this.current_weapon = null

        this.current_hp = hp
        this.current_gold = 0
    }

    getCurrentAtk() {
        if (this.current_weapon) {
            return this.atk + this.current_weapon.atk
        } else {
            return this.atk
        }
    }

    getCurrentDef() {
        let current_stat = this.def
        if (this.current_head) current_stat += this.current_head.getCurrentDef()
        if (this.current_body) current_stat += this.current_body.getCurrentDef()
        if (this.current_leg) current_stat += this.current_leg.getCurrentDef()
        return current_stat
    }
}

class Event {
    constructor(name, image, text, choice_1_text, choice_2_text, choice_1_result, choice_2_result, choice_1_function, choice_2_function) {
        this.name = name
        this.image = image
        this.text = text
        this.choice_1_text = choice_1_text
        this.choice_2_text = choice_2_text
        this.choice_1_result = choice_1_result
        this.choice_2_result = choice_2_result
        this.choice_1_function = choice_1_function
        this.choice_2_function = choice_2_function
    }
}

const ROUTE_DATA = {
    orb: {
        image_url: '/img/routes/orb.jpg',
        display: 'Orb of Ancestors'
    },
    chest: {
        image_url: '/img/routes/chest.jpg',
        display: 'Forgotten Treasure'
    },
    merchant: {
        image_url: '/img/routes/merchant.jpg',
        display: 'Lost Merchant'
    },
    combat: {
        image_url: '/img/routes/combat.jpg',
        display: 'Mortal Combat'
    },
    story: {
        image_url: '/img/routes/story.jpg',
        display: 'Tales of Judgement'
    }
}

class Route {
    constructor() {
        this.route_type = ""

        this.route_gen = Math.floor(Math.random() * 100)
        if (this.route_gen < 5) this.route_type = "orb"; // 0-4 (5%)
        else if (this.route_gen < 15) this.route_type = "chest"; // 5-14 (10%)
        else if (this.route_gen < 30) this.route_type = "merchant"; // 15-29 (15%)
        else if (this.route_gen < 60) this.route_type = "combat"; // 30-59 (30%)
        else this.route_type = "story"; // 60-99 (40%)

        this.image = ROUTE_DATA[this.route_type]['image_url']
        this.display = ROUTE_DATA[this.route_type]['display']
    }
}