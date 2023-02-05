let save_data = localStorage.getItem('save_data');
save_data = JSON.parse(save_data)
let is_applied = false;

let player = (save_data && save_data['player'] ? Object.assign(new Player(), save_data['player']) : new Player("Gideon", 20, 10, 10));
let player_history = (save_data && save_data['player_history'] ? save_data['player_history'] : []);
let current_enemy = null
let current_boss = null
let current_routes = []
let current_story = null
let current_level = 1
let current_screen = null
let bosses_defeated = []
let orb_ancestor = null
let new_item = null
let boss_fight = false
let defeated_bosses = []

// screen initializations
let game_screen_container = document.querySelector('#game_screen_container')
let screen_loading = document.querySelector('#screen_loading')
let screen_home = document.querySelector('#screen_home')
let screen_route = document.querySelector('#screen_route')
let screen_merchant = document.querySelector('#screen_merchant')
let screen_story = document.querySelector('#screen_story')
let screen_chest = document.querySelector('#screen_chest')
let screen_combat = document.querySelector('#screen_combat')
let screen_combatresult = document.querySelector('#screen_combatresult')
let screen_boss = document.querySelector('#screen_boss')
let screen_orb = document.querySelector('#screen_orb')
let screen_newitem = document.querySelector('#screen_newitem')
let screen_tutorial = document.querySelector('#screen_tutorial')
let screen_credits = document.querySelector('#screen_credits')
let screen_intro = document.querySelector('#screen_intro')
let screen_gameover = document.querySelector('#screen_gameover')