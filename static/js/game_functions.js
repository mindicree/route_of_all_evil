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

function create_routes() {
    current_routes = []
    current_routes.push(new Route())
    current_routes.push(new Route())
    current_routes.push(new Route())
    update_ui()
}

function select_route(route_element) {
    let route_choice = route_element.getAttribute('data-routetype')
    console.log(route_choice)
    switch (route_choice) {
        case 'story':
            create_event()
            transition_screen(screen_route, screen_story)
    }
}

function create_event() {
    let event_selection = Math.random() * events.length
    current_story = events[event_selection]
    update_ui()
}

// initial views
setTimeout(() => {
    game_screen_container.classList.remove('opacity-0')
    transition_screen(screen_loading, screen_home)
}, 2000);