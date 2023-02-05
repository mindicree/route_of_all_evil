function update_intro() {
    document.querySelector('#rebirth_counter').innerHTML = player_history.length
    let ancestor = player_history[player_history.length - 1]
    if (ancestor && is_applied == false) {
        is_applied = true
        // generate bonuses
        let hp_bonus = Math.floor((Math.random() * ancestor.hp)/10)
        let atk_bonus = Math.floor((Math.random() * ancestor.hp)/10)
        let def_bonus = Math.floor((Math.random() * ancestor.hp)/10)
        let gold_bonus = (ancestor.gold ? Math.floor((Math.random() * ancestor.gold))/10 : 0)

        let head_bonus = (ancestor.current_head && Math.random() < 0.05 ? Object.assign(new Armor(), ancestor.current_head) : null)
        let body_bonus = (ancestor.current_body && Math.random() < 0.05 ? Object.assign(new Armor(), ancestor.current_body) : null)
        let leg_bonus = (ancestor.current_leg && Math.random() < 0.05 ? Object.assign(new Armor(), ancestor.current_leg) : null)
        let weapon_bonus = (ancestor.current_weapon && Math.random() < 0.05 ? Object.assign(new Weapon(), ancestor.current_weapon) : null)

        // apply bonuses
        player.hp += hp_bonus
        player.current_hp += hp_bonus
        player.atk += atk_bonus
        player.def += def_bonus

        player.current_head = head_bonus
        player.current_body = body_bonus
        player.current_leg = leg_bonus
        player.current_weapon = weapon_bonus

        console.log(player)

        // create status message
        let prelude = `${player.name}, you have been given favor by your ancestor, ${ancestor.name}, and his dedication to the family roots. Go forth with his gifts.<br><br>`
        let bonuses = ''

        bonuses += (hp_bonus > 0 ? `HP: <span class="text-white">+${hp_bonus}</span><br>` : '')
        bonuses += (atk_bonus > 0 ? `ATK: <span class="text-white">+${atk_bonus}</span><br>` : '')
        bonuses += (def_bonus > 0 ? `DEF: <span class="text-white">+${def_bonus}</span><br>` : '')
        bonuses += (gold_bonus > 0 ? `GP: <span class="text-white">+${gold_bonus}</span><br>` : '')

        bonuses += (head_bonus ? `HEAD: <span class="text-white">+${head_bonus.name}, LV. ${head_bonus.level}</span><br>` : '')
        bonuses += (body_bonus ? `BODY: <span class="text-white">+${body_bonus.name}, LV. ${body_bonus.level}</span><br>` : '')
        bonuses += (leg_bonus ? `LEG: <span class="text-white">+${leg_bonus.name}, LV. ${leg_bonus.level}</span><br>` : '')
        bonuses += (weapon_bonus ? `WEAPON: <span class="text-white">+${weapon_bonus.name}, LV. ${weapon_bonus.level}</span><br>` : '')
    
        let final_message = (bonuses.length > 0 ? prelude + bonuses : '')

        // update text in intro
        document.querySelector('#ancestor_favor_message').innerHTML = final_message
    } else {
        document.querySelector('#ancestor_favor_message').innerHTML = ''
    }
}
function update_route() {
    if (current_routes.length > 0) {
        // route 1 elements
        let route_1_container = document.querySelector('#route_1_container')
        let route_1_image = document.querySelector('#route_1_image')
        let route_1_button = document.querySelector('#route_1_button')
        // route 2 elements
        let route_2_container = document.querySelector('#route_2_container')
        let route_2_image = document.querySelector('#route_2_image')
        let route_2_button = document.querySelector('#route_2_button')
        // route 3 elements
        let route_3_container = document.querySelector('#route_3_container')
        let route_3_image = document.querySelector('#route_3_image')
        let route_3_button = document.querySelector('#route_3_button')

        // set container data fields
        route_1_container.setAttribute('data-routetype', current_routes[0].route_type)
        route_2_container.setAttribute('data-routetype', current_routes[1].route_type)
        route_3_container.setAttribute('data-routetype', current_routes[2].route_type)
        // set image sources
        route_1_image.src = current_routes[0].image
        route_2_image.src = current_routes[1].image
        route_3_image.src = current_routes[2].image
        // set button texts
        route_1_button.innerHTML = current_routes[0].display
        route_2_button.innerHTML = current_routes[1].display
        route_3_button.innerHTML = current_routes[2].display
    }
}
function update_merchant() {
    
}
function update_story() {
    if (current_story) {
        let story_title = document.querySelector('#story_title');
        let story_text = document.querySelector('#story_text');
        let story_image = document.querySelector('#story_image');
        let story_choice_1 = document.querySelector('#story_choice_1');
        let story_choice_2 = document.querySelector('#story_choice_2');
    
        story_title.innerHTML = current_story.name
        story_text.innerHTML = current_story.text
        story_image.src = `/img/events/${current_story.image}`
        story_choice_1.innerHTML = current_story.choice_1_text
        story_choice_2.innerHTML = current_story.choice_2_text
    }
}
function update_storyresult() {
    
}
function update_combat() {
    if (current_enemy) {
        document.querySelector('#combat_enemy_health_fill').style.width = '100%'
        let combat_enemy_name = document.querySelector('#combat_enemy_name')
        let combat_enemy_image = document.querySelector('#combat_enemy_image')
        let combat_enemy_container = document.querySelector('#combat_enemy_container')
    
        let combat_player_hp = document.querySelector('#combat_player_hp')
        let combat_player_atk = document.querySelector('#combat_player_atk')
        let combat_player_def = document.querySelector('#combat_player_def')
    
        let enemy_name = `${current_enemy.name}, LV. ${current_enemy.level}`
        let player_hp = `${player.current_hp}/${player.hp}`
        let player_atk = `${player.getCurrentAtk()}`
        let player_def = `${player.getCurrentDef()}`
    
        combat_enemy_name.innerHTML = enemy_name
        combat_enemy_image.src = `/img/enemies/${current_enemy.image}`
        combat_enemy_container.classList.remove('fade_out_med')
        combat_enemy_container.style.opacity = 1.0

        combat_player_hp.innerHTML = player_hp
        combat_player_atk.innerHTML = player_atk
        combat_player_def.innerHTML = player_def
    }
}
function update_combatresult() {
    
}
function update_boss() {
    
}
function update_orb() {
    
}
function update_newitem() {
    
}