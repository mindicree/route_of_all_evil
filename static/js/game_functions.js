function show_screen(old_screen, new_screen) {
    old_screen.classList.add('inactive_screen')
    new_screen.classList.remove('inactive_screen')
    new_screen.classList.add('active_screen')
    old_screen.classList.remove('active_screen')
}

// initial views
setTimeout(() => {
    game_screen_container.classList.remove('opacity-0')
    show_screen(screen_loading, screen_home)
}, 2000);