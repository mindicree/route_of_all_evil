function transition_screen(old_screen, new_screen) {
    old_screen.classList.add('inactive_screen')
    new_screen.classList.remove('inactive_screen')
    new_screen.classList.add('z-50')
    new_screen.classList.add('active_screen')
    old_screen.classList.remove('active_screen')
    old_screen.classList.remove('z-50')
}

function update_ui() {
    update_intro()
    update_route()
    update_merchant()
    update_story()
    update_storyresult()
    update_combat()
    update_combatresult()
    update_boss()
    update_orb()
    update_newitem()
    show_combat_interface(true)
}

function select_route(route_element) {
    let route_choice = route_element.getAttribute('data-routetype')
    current_level++;
    console.log(route_choice)
    switch (route_choice) {
        case 'story':
            create_event()
            transition_screen(screen_route, screen_story)
            break
        case 'combat':
            create_enemy()
            transition_screen(screen_route, screen_combat)
            break
    }
}

function create_routes() {
    current_routes = []
    current_routes.push(new Route())
    current_routes.push(new Route())
    current_routes.push(new Route())
    update_ui()
}

function create_event() {
    let event_selection = Math.floor(Math.random() * events.length)
    current_story = events[event_selection]
    update_ui()
}

function create_enemy() {
    let enemy_selection = Math.floor(Math.random() * enemies.length)
    current_enemy = enemies[enemy_selection]
    current_enemy.hp = current_enemy.getCurrentHpMax()
    current_enemy.current_hp = current_enemy.getCurrentHpMax()
    current_enemy.level = Math.max(Math.floor(current_level + (Math.random()*10 - 5)), 1)
    console.log(current_enemy)
    update_ui()
}

function event_choice(choice) {
    let storyresult_image = document.querySelector('#storyresult_image')
    let storyresult_title = document.querySelector('#storyresult_title')
    let storyresult_text = document.querySelector('#storyresult_text')

    storyresult_image.src = `/img/events/${current_story.image}`
    storyresult_title.innerHTML = current_story.name

    if (choice == 1) {
        storyresult_text.innerHTML = current_story.choice_1_result
        current_story.choice_1_function()
    } else {
        storyresult_text.innerHTML = current_story.choice_2_result
        current_story.choice_2_function()
    }
    update_ui()
}

function combat_action(action) {
    // hide interface
    show_combat_interface(false)

    // if run, attempt to run

    // if run successful, update ui, display, and return

    if (action == 'RUN') {
        if (isRun()) {
            run_away()
            return
        } else {
            run_fail()
        }
    }

    // if attack check accuracy

    // if hit, calc damage and apply
    if (action == 'ATTACK') {
        if (isHit()) {
            let damage = calculate_damage(player.getCurrentAtk(), current_enemy.getCurrentDef())
            damage_enemy(damage, isCrit())
        } else {
            miss_enemy()
        }
    }

    // if enemy dead, fade enemy out, update ui, transition
    if (current_enemy.isDead()) {
        combat_victory()
        return
    }

    // enemy attack accuracy

    // if hit, calc damage and apply
    if (isHit()) {
        let damage = calculate_damage(current_enemy.getCurrentAtk(), player.getCurrentDef())
        damage_player(damage, isCrit())
    } else {
        miss_player()
    }

    // if player dead transition to game over
    if (player.isDead()) {
        game_over()
        return
    }

    // unhide interface
    show_combat_interface(true)
}

function calculate_damage(atk, def) {
    let variate = 1- Math.random()*0.2
    let damage = ((atk*5)/def) * variate
    damage = Math.max(Math.floor(damage), 1)
    return damage
}

function isHit() {
    return Math.random() < 0.95
}

function isRun() {
    return Math.random() > current_enemy.run
}

function isCrit() {
    return Math.random() < 0.1
}

function run_away() {
    document.querySelector('#combat_result_status').innerHTML = 'You ran away successfully'
    document.querySelector('#combat_result_details').innerHTML = 'This battle is not worth fighting'
    transition_screen(screen_combat, screen_combatresult)
}

function run_fail() {
    let combat_damage = document.querySelector('#combat_enemy_damage')
    combat_damage.classList.remove('damage_flash')
    void combat_damage.offsetWidth
    combat_damage.innerHTML = 'Run<br>Failed'
    combat_damage.classList.add('damage_flash')
}

function damage_enemy(dmg, is_crit) {
    // get final damage calc
    if (is_crit) console.log('CRIT')
    let crit_mul = (is_crit ? Math.random()*0.5 + 1.5 : 1)
    let final_damage = Math.floor(dmg * crit_mul)

    // apply damage to enemy
    current_enemy.current_hp -= final_damage

    // remove classes and trigger DOM refresh
    let combat_damage = document.querySelector('#combat_enemy_damage')
    combat_damage.classList.remove('damage_flash')
    let combat_enemy_image = document.querySelector('#combat_enemy_image')
    combat_enemy_image.classList.remove('damage_shake')
    combat_enemy_image.classList.remove('damage_shake_crit')
    void combat_enemy_image.offsetWidth

    // flash damage
    combat_damage.innerHTML = `${(is_crit ? 'CRIT<br><br>' : '')}${final_damage}<br>DAMAGE`
    combat_damage.classList.add('damage_flash')

    // shake image
    combat_enemy_image.classList.add((is_crit ? 'damage_shake_crit' : 'damage_shake'))

    // adjust health bar
    let health_percent = (current_enemy.current_hp > 0 ? Math.ceil((current_enemy.current_hp / current_enemy.getCurrentHpMax()) * 100) : 0)
    document.querySelector('#combat_enemy_health_fill').style.width = `${health_percent}%`
}

function miss_enemy() {
    let combat_damage = document.querySelector('#combat_enemy_damage')
    combat_damage.classList.remove('damage_flash')
    void combat_damage.offsetWidth
    combat_damage.innerHTML = 'MISSED'
    combat_damage.classList.add('damage_flash')
}

function miss_player() {
    let combat_damage = document.querySelector('#combat_player_damage')
    combat_damage.classList.remove('damage_flash')
    void combat_damage.offsetWidth
    combat_damage.innerHTML = 'MISSED'
    combat_damage.classList.add('damage_flash')
}

function damage_player(dmg, is_crit) {
    // get final damage calc
    if (is_crit) console.log('CRIT')
    let crit_mul = (is_crit ? Math.random()*0.5 + 1.5 : 1)
    let final_damage = Math.floor(dmg * crit_mul)

    // apply damage to enemy
    player.current_hp -= final_damage

    // remove classes and trigger DOM refresh
    let combat_damage = document.querySelector('#combat_player_damage')
    combat_damage.classList.remove('damage_flash')
    void combat_damage.offsetWidth

    // flash screen red

    // flash damage
    combat_damage.innerHTML = `${(is_crit ? 'CRIT<br><br>' : '')}${final_damage}<br>DAMAGE`
    combat_damage.classList.add('damage_flash')

    // adjust health meter
    document.querySelector('#combat_player_hp').innerHTML = `${player.current_hp}/${player.hp}`
}

function combat_victory() {
    // fade out enemy
    let enemy_container = document.querySelector('#combat_enemy_container')
    enemy_container.classList.remove('fade_out_med')
    void enemy_container.offsetWidth
    enemy_container.classList.add('fade_out_med')

    // get stat and reward changes
    let hp_bonus = Math.floor(current_enemy.getCurrentHpMax()/50)
    let atk_bonus = Math.floor(current_enemy.getCurrentAtk()/10)
    let def_bonus = Math.floor(current_enemy.getCurrentDef()/10)
    let gold_bonus = get_gold_reward()

    // apply changes to player
    player.hp += hp_bonus
    player.current_hp += hp_bonus
    player.atk += atk_bonus
    player.def += def_bonus
    player.gold += gold_bonus

    // setup data based on changes
    document.querySelector('#combat_result_status').innerHTML = `${current_enemy.name} has been defeated`
    let status_message = 'One step closer on this path of destruction<br><br>'
    status_message += (hp_bonus > 0 ? `HP: <span class="text-white">&nbsp;+${hp_bonus}</span><br>` : '')
    status_message += (atk_bonus > 0 ? `ATK: <span class="text-white">&nbsp;+${atk_bonus}</span><br>` : '')
    status_message += (def_bonus > 0 ? `DEF: <span class="text-white">&nbsp;+${def_bonus}</span><br>` : '')
    status_message += (gold_bonus > 0 ? `GP: <span class="text-white">&nbsp;+${gold_bonus}</span><br>` : '')
    document.querySelector('#combat_result_details').innerHTML = status_message

    // transition to combat results
    transition_screen(screen_combat, screen_combatresult)
}

function get_gold_reward() {
    let gold_reward = current_enemy.getPowerScale() * Math.random()
    gold_reward = Math.max(1, gold_reward)
    return Math.floor(gold_reward)
}

function game_over() {
    player_history.push(player)
    bosses_defeated = [];
    save_to_local()
    transition_screen(screen_combat, screen_gameover)
}

function rebirth() {
    
}

function save_to_local() {
    let new_save = {
        'player': JSON.stringify(player),
        'player_history': JSON.stringify(player_history),
        'current_enemy': JSON.stringify(current_enemy),
        'current_boss': JSON.stringify(current_boss),
        'current_routes': JSON.stringify(current_routes),
        'current_story': JSON.stringify(current_story),
        'current_level': JSON.stringify(current_level),
        'current_screen': JSON.stringify(current_screen),
        'bosses_defeated': JSON.stringify(bosses_defeated)
    }
    console.log(new_save)
    // localStorage.setItem('save_data', new_save)
}

function isDropGold() {

}

function isDropItem() {

}

function show_combat_interface(is_show) {
    let combat_interface = document.querySelector('#combat_interface')
    if (is_show) {
        combat_interface.classList.remove('opacity-0')
    } else {
        combat_interface.classList.add('opacity-0')
    }
}

// initial views
setTimeout(() => {
    game_screen_container.classList.remove('opacity-0')
    transition_screen(screen_loading, screen_home)
}, 2000);