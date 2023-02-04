function update_intro() {
    
}
function update_route() {
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
    
}
function update_combatresult() {
    
}
function update_boss() {
    
}
function update_orb() {
    
}
function update_newitem() {
    
}