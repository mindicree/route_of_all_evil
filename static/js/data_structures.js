class Enemy {
    constructor(name, hp, atk, def, image) {
        this.name = name
        this.hp = hp
        this.atk = atk
        this.def = def
        this.image = image
        this.current_hp = hp
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

        this.current_hp = this.hp
        this.current_gold = 0
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

const ROUTE_DATA = {
    orb: {
        image_url: '/img/routes/orb.jpg'
    },
    chest: {
        image_url: '/img/routes/chest.jpg'
    },
    merchant: {
        image_url: '/img/routes/merchant.jpg'
    },
    combat: {
        image_url: '/img/routes/combat.jpg'
    },
    story: {
        image_url: '/img/routes/story.jpg'
    }
}

class Route {
    constructor() {
        let route_choice
        let route_gen = Math.floor(Math.random() * 100)

        if (route_gen < 5) route_choice = "orb"; // 0-4 (5%)
        else if (route_gen < 15) route_choice = "chest"; // 5-14 (10%)
        else if (route_gen < 30) route_choice = "merchant"; // 15-29 (15%)
        else if (route_gen < 60) route_choice = "combat"; // 30-59 (30%)
        else route_choice = "story"; // 60-99 (40%)
    }
}