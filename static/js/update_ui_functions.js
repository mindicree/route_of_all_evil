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