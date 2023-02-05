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
}

function select_route(route_element) {
    let route_choice = route_element.getAttribute('data-routetype')
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
            fail_run()
        }
    }

    // if attack check accuracy

    // if hit, calc damage and apply
    if (action == 'ATTACK') {
        if (isHit()) {
            damage_enemy()
        } else {

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
        damage_player()
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
    return Math.max(Math.floor((atk*5)/def), 1)
}

function isHit() {
    return Math.random() < 0.95
}

function isRun() {
    return Math.random() < 0.25
}

function isCrit() {
    return Math.random() < 0.1
}

function run_away() {

}

function run_fail() {

}

function damage_enemy(dmg) {

}

function damage_player(dmg) {

}

function combat_victory() {

}

function game_over() {
    
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