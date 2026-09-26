var app = (function () {
  var artist = "Nintendo";
  var twitter = "goldchimera";
  var currentIndex = 0;
  var zipUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; //the infinite heardle template doesn't work unless there's a valid url here. if you choose to click this it's on you.

  var musicNameList = [
    'Ground BGM - Super Mario Bros.',
    "'Hurry Up!' Ground BGM - Super Mario Bros.",
    "Underground BGM - Super Mario Bros.",
    "'Hurry Up!' Underground BGM - Super Mario Bros.",
    "Invincibility BGM - Super Mario Bros.",
    "'Hurry Up!' Invincibility BGM - Super Mario Bros.",
    "Underwater BGM - Super Mario Bros.",
    "'Hurry Up!' Underwater BGM - Super Mario Bros.",
    "Castle BGM - Super Mario Bros.",
    "'Hurry Up!' Castle BGM - Super Mario Bros.",
    "Ending - Super Mario Bros.",
    "Title Theme - The Legend of Zelda",
    "Overworld Theme - The Legend of Zelda",
    "Underworld Theme - The Legend of Zelda",
    "Death Mountain Theme - The Legend of Zelda",
    "Ending Theme - The Legend of Zelda",
    "Title Screen - Metroid",
    "Brinstar (Rocky Zone) - Metroid",
    "Miniboss Hideout I: Kraid - Metroid",
    "Norfair (Fire Zone) - Metroid",
    "Miniboss Hideout II: Ridley - Metroid",
    "Stillness - Metroid",
    "Tourian (Central Base) - Metroid",
    "Zebetite - Metroid",
    "Escape - Metroid",
    "Ending - Metroid",
    "Title Theme - Kid Icarus",
    "Stage 1 - Kid Icarus",
    "Boss BGM - Kid Icarus",
    "Stage 2 - Kid Icarus",
    "Fortress - Kid Icarus",
    "Stage 3 - Kid Icarus",
    "Reaper's Theme - Kid Icarus",
    "Stage 4 - Kid Icarus",
    "Final Boss BGM - Kid Icarus",
    "Ending Theme - Kid Icarus",
    "Title BGM - Super Mario Bros. 2",
    "Please Select Player - Super Mario Bros. 2",
    "Ground BGM - Super Mario Bros. 2",
    "Underground BGM - Super Mario Bros. 2",
    "Sub-Space BGM - Super Mario Bros. 2",
    "Boss BGM - Super Mario Bros. 2",
    "Invincibility BGM - Super Mario Bros. 2",
    "Final Boss BGM - Super Mario Bros. 2",
    "Ending - Super Mario Bros. 2",
    "World 1 Map (Grass Land) - Super Mario Bros. 3",
    "Ground BGM - Super Mario Bros. 3",
    "'Hurry Up!' Ground BGM - Super Mario Bros. 3",
    "World 2 Map (Desert Land) - Super Mario Bros. 3",
    "Athletic BGM - Super Mario Bros. 3",
    "'Hurry Up!' Athletic BGM - Super Mario Bros. 3",
    "Slot Game BGM / Memory Game BGM - Super Mario Bros. 3",
    "P Switch BGM / Toad's House - Super Mario Bros. 3",
    "'Hurry Up!' P Switch BGM - Super Mario Bros. 3",
    "World 3 Map (Water Land) - Super Mario Bros. 3",
    "Underwater BGM - Super Mario Bros. 3",
    "'Hurry Up!' Underwater BGM - Super Mario Bros. 3",
    "Invincibility BGM - Super Mario Bros. 3",
    "'Hurry Up!' Invincibility BGM - Super Mario Bros. 3",
    "World 4 Map (Giant Land) - Super Mario Bros. 3",
    "Underground BGM - Super Mario Bros. 3",
    "'Hurry Up!' Underground BGM - Super Mario Bros. 3",
    "Music Box - Super Mario Bros. 3",
    "World 5 Map (Sky Land) - On the Ground - Super Mario Bros. 3",
    "World 5 Map (Sky Land) - In the Sky - Super Mario Bros. 3",
    "Bros. Battle - Super Mario Bros. 3",
    "'Hurry Up!' Bros. Battle - Super Mario Bros. 3",
    "World 6 Map (Ice Land) - Super Mario Bros. 3",
    "Fortress BGM - Super Mario Bros. 3",
    "'Hurry Up!' Fortress BGM - Super Mario Bros. 3",
    "Fortress Boss - Super Mario Bros. 3",
    "'Hurry Up!' Fortress Boss - Super Mario Bros. 3",
    "World 7 Map (Pipe Land) - Super Mario Bros. 3",
    "Throne Room - Super Mario Bros. 3",
    "Airship BGM - Super Mario Bros. 3",
    "World 8 Map (Dark Land) - Super Mario Bros. 3",
    "King of the Koopas - Super Mario Bros. 3",
    "'Hurry Up!' King of the Koopas - Super Mario Bros. 3",
    "Ending - Super Mario Bros. 3",
    "Title Screen - Tetris (Game Boy)",
    "A-Type (Early Version) - Tetris (Game Boy)",
    "A-Type - Tetris (Game Boy)",
    "B-Type - Tetris (Game Boy)",
    "C-Type - Tetris (Game Boy)",
    "Rocket Launch - Tetris (Game Boy)",
    "Name Entry - Tetris (Game Boy)",
    "2 Player: Danger - Tetris (Game Boy)",
    "2 Player: Final Results - Tetris (Game Boy)",
    "MUSIC-1 - Tetris (NES)",
    "MUSIC-1: Danger - Tetris (NES)",
    "MUSIC-2 - Tetris (NES)",
    "MUSIC-2: Danger - Tetris (NES)",
    "MUSIC-3 - Tetris (NES)",
    "MUSIC-3: Danger - Tetris (NES)",
    "Ending - Tetris (NES)",
    "Name Entry - Tetris (NES)",
    "Title Screen - Dr. Mario (NES)",
    "Selection Screen - Dr. Mario (NES)",
    "Fever - Dr. Mario (NES)",
    "Fever Clear - Dr. Mario (NES)",
    "Chill - Dr. Mario (NES)",
    "Chill Clear - Dr. Mario (NES)",
    "Game Over - Dr. Mario (NES)",
    "Vs. Game Over - Dr. Mario (NES)",
    "Level 20 Low Clear & Ending - Dr. Mario (NES)",
    "Level 20 Hi Clear (UFO) & Ending - Dr. Mario (NES)",
    "Selection Screen - Dr. Mario (Game Boy)",
    "Fever - Dr. Mario (Game Boy)",
    "Vs. Game Over - Dr. Mario (Game Boy)",
    "Chill - Dr. Mario (Game Boy)",
    "Level 20 Hi Clear (UFO) & Ending - Dr. Mario (Game Boy)",
    "Title BGM - Super Mario World",
    "Yoshi's Island (Map Screen) - Super Mario World",
    "Ground BGM - Super Mario World",
    "'Hurry Up!' Ground BGM - Super Mario World",
    "Yoshi Ground BGM - Super Mario World",
    "'Hurry Up!' Yoshi Ground BGM - Super Mario World",
    "P Switch BGM - Super Mario World",
    "Donut Plains (Map Screen) - Super Mario World",
    "Athletic BGM - Super Mario World",
    "'Hurry Up!' Athletic BGM - Super Mario World",
    "Yoshi Athletic BGM - Super Mario World",
    "'Hurry Up!' Yoshi Athletic BGM - Super Mario World",
    "Invincibility BGM - Super Mario World",
    "'Hurry Up!' Invincibility BGM - Super Mario World",
    "Bonus Game BGM - Super Mario World",
    "Vanilla Dome (Map Screen) - Super Mario World",
    "Underground BGM - Super Mario World",
    "'Hurry Up!' Underground BGM - Super Mario World",
    "Yoshi Underground BGM - Super Mario World",
    "'Hurry Up!' Yoshi Underground BGM - Super Mario World",
    "Underwater BGM - Super Mario World",
    "'Hurry Up!' Underwater BGM - Super Mario World",
    "Yoshi Underwater BGM - Super Mario World",
    "'Hurry Up!' Yoshi Underwater BGM - Super Mario World",
    "Forest of Illusion (Map Screen) - Super Mario World",
    "Ghost House BGM - Super Mario World",
    "'Hurry Up!' Ghost House BGM - Super Mario World",
    "Castle BGM - Super Mario World",
    "'Hurry Up!' Castle BGM - Super Mario World",
    "Koopalings BGM - Super Mario World",
    "'Hurry Up!' Koopalings BGM - Super Mario World",
    "Valley of Bowser (Map Screen) - Super Mario World",
    "Bowser BGM (Phase 1) - Super Mario World",
    "Bowser BGM (Phase 2) - Super Mario World",
    "Bowser BGM (Phase 3) - Super Mario World",
    "Ending - Super Mario World",
    "Star World (Map Screen) - Super Mario World",
    "Special World (Map Screen) - Super Mario World",
    "Opening - F-ZERO",
    "Mute City - F-ZERO",
    "Big Blue - F-ZERO",
    "Sand Ocean - F-ZERO",
    "Death Wind - F-ZERO",
    "Silence - F-ZERO",
    "Port Town - F-ZERO",
    "Red Canyon - F-ZERO",
    "White Land I - F-ZERO",
    "White Land II - F-ZERO",
    "Fire Field - F-ZERO",
    "Results - F-ZERO",
    "Ending - F-ZERO",
    "Title Theme - The Legend of Zelda: A Link to the Past",
    "Player Select - The Legend of Zelda: A Link to the Past",
    "Rainy Night - The Legend of Zelda: A Link to the Past",
    "Hyrule Castle - The Legend of Zelda: A Link to the Past",
    "Princess Zelda, Rescued - The Legend of Zelda: A Link to the Past",
    "Sanctuary - The Legend of Zelda: A Link to the Past",
    "Light World - The Legend of Zelda: A Link to the Past",
    "Kakariko Village - The Legend of Zelda: A Link to the Past",
    "Kakariko Soldiers - The Legend of Zelda: A Link to the Past",
    "Minigames - The Legend of Zelda: A Link to the Past",
    "Cave Interior - The Legend of Zelda: A Link to the Past",
    "Fortune Teller's House - The Legend of Zelda: A Link to the Past",
    "Light World Dungeon - The Legend of Zelda: A Link to the Past",
    "Boss Theme - The Legend of Zelda: A Link to the Past",
    "Rabbit Theme - The Legend of Zelda: A Link to the Past",
    "Lost Woods - The Legend of Zelda: A Link to the Past",
    "Agahnim's Theme - The Legend of Zelda: A Link to the Past",
    "Dark World - The Legend of Zelda: A Link to the Past",
    "Dark World Dungeon - The Legend of Zelda: A Link to the Past",
    "The Crystals - The Legend of Zelda: A Link to the Past",
    "Mountains and Forests of the Dark World - The Legend of Zelda: A Link to the Past",
    "Ganon Battle - The Legend of Zelda: A Link to the Past",
    "Triforce Room - The Legend of Zelda: A Link to the Past",
    "Ending Theme - The Legend of Zelda: A Link to the Past",
    "Welcome To Dream Land - Kirby's Dream Land",
    "Green Greens - Kirby's Dream Land",
    "Boss Theme - Kirby's Dream Land",
    "Sparkling Stars - Kirby's Dream Land",
    "Castle Lololo - Kirby's Dream Land",
    "Invincible - Kirby's Dream Land",
    "Float Islands - Kirby's Dream Land",
    "Shooting - Kirby's Dream Land",
    "Bubbly Clouds - Kirby's Dream Land",
    "Boss Game Select - Kirby's Dream Land",
    "Mt. DeDeDe - Kirby's Dream Land",
    "A New Wind for Tomorrow - Kirby's Dream Land",
    "Super Mario Kart Title Screen - Super Mario Kart",
    "Selection Screens - Super Mario Kart",
    "Mario Circuit - Super Mario Kart",
    "Mario Circuit (Final Lap) - Super Mario Kart",
    "Donut Plains - Super Mario Kart",
    "Donut Plains (Final Lap) - Super Mario Kart",
    "Ghost Valley - Super Mario Kart",
    "Ghost Valley (Final Lap) - Super Mario Kart",
    "Bowser Castle - Super Mario Kart",
    "Bowser Castle (Final Lap) - Super Mario Kart",
    "Choco Island - Super Mario Kart",
    "Choco Island (Final Lap) - Super Mario Kart",
    "Koopa Beach - Super Mario Kart",
    "Koopa Beach (Final Lap) - Super Mario Kart",
    "Vanilla Lake - Super Mario Kart",
    "Vanilla Lake (Final Lap) - Super Mario Kart",
    "Rainbow Road - Super Mario Kart",
    "Rainbow Road (Final Lap) - Super Mario Kart",
    "Battle Mode - Super Mario Kart",
    "Super Star - Super Mario Kart",
    "Race Results (Mario) - Super Mario Kart",
    "Race Results (Luigi) - Super Mario Kart",
    "Race Results (Princess) - Super Mario Kart",
    "Race Results (Yoshi) - Super Mario Kart",
    "Race Results (Bowser) - Super Mario Kart",
    "Race Results (Donkey Kong Jr.) - Super Mario Kart",
    "Race Results (Koopa Troopa) - Super Mario Kart",
    "Race Results (Toad) - Super Mario Kart",
    "Awards Ceremony (1st – 3rd Place) - Super Mario Kart",
    "Awards Ceremony (4th – 8th Place) - Super Mario Kart",
    "Staff Credits - Super Mario Kart",
    "Theme - Donkey Kong Country",
    "Simian Segue - Donkey Kong Country",
    "DK Island Swing - Donkey Kong Country",
    "Cave Dweller Concert - Donkey Kong Country",
    "Aquatic Ambiance - Donkey Kong Country",
    "Cranky's Theme - Donkey Kong Country",
    "Mine Cart Madness - Donkey Kong Country",
    "Misty Menace - Donkey Kong Country",
    "Voices of the Temple - Donkey Kong Country",
    "Funky's Fugue - Donkey Kong Country",
    "Forest Frenzy - Donkey Kong Country",
    "Treetop Rock - Donkey Kong Country",
    "Bonus Room Blitz - Donkey Kong Country",
    "Candy's Love Song - Donkey Kong Country",
    "Northern Hemispheres - Donkey Kong Country",
    "Ice Cave Chant - Donkey Kong Country",
    "Fear Factory - Donkey Kong Country",
    "Bad Boss Boogie - Donkey Kong Country",
    "K. Rool's Cacophony - Donkey Kong Country",
    "Gang-Plank Galleon - Donkey Kong Country",
    "The Credits Concerto - Donkey Kong Country",
    "Opening Melody - Super Mario World 2: Yoshi's Island",
    "Yoshi's Island - Super Mario World 2: Yoshi's Island",
    "The Journey Begins - Super Mario World 2: Yoshi's Island",
    "Practice Stage - Super Mario World 2: Yoshi's Island",
    "Flower Field BGM - Super Mario World 2: Yoshi's Island",
    "Goal! - Super Mario World 2: Yoshi's Island",
    "Underground BGM - Super Mario World 2: Yoshi's Island",
    "Castles & Forts BGM - Super Mario World 2: Yoshi's Island",
    "Kamek's Theme - Super Mario World 2: Yoshi's Island",
    "Stage Boss - Super Mario World 2: Yoshi's Island",
    "Athletic BGM - Super Mario World 2: Yoshi's Island",
    "Ground BGM - Super Mario World 2: Yoshi's Island",
    "In the Boss Room - Super Mario World 2: Yoshi's Island",
    "Big Boss BGM - Super Mario World 2: Yoshi's Island",
    "Map Screen - Super Mario World 2: Yoshi's Island",
    "Bonus Challenge - Super Mario World 2: Yoshi's Island",
    "Powerful Mario - Super Mario World 2: Yoshi's Island",
    "Bowser - Super Mario World 2: Yoshi's Island",
    "Rescuing Luigi - Super Mario World 2: Yoshi's Island",
    "Ending - Super Mario World 2: Yoshi's Island",
    "K. Rool Returns (Title Theme) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Steel Drum Rhumba (Option Screen) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Welcome to Crocodile Isle (Map Screen) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Klomp's Romp (Pirate Panic) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Jib Jig (Mainbrace Mayhem) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Lockjaw's Saga (Lockjaw's Locker) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Boss Bossanova (Boss Theme) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Diddy's Victory - Donkey Kong Country 2: Diddy's Kong Quest",
    "Schoolhouse Harmony (Wrinkly's Theme) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Hot-Head Bop (Hot-Head Hop) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Kannon's Klanking (Kannon's Klaim) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Funky the Main Monkey (Funky's Theme) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Bayou Boogie (Barrel Bayou) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Snakey Chantey (Rattle Battle) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Stickerbush Symphony (Bramble Blast) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Cranky's Conga (Cranky's Theme) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Flight of the Zinger (Hornet Hole) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Disco Train (Target Terror) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Run, Rambi! Run! (Parrot Chute Panic) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Swanky Swing (Swanky's Bonus Bonanza) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Haunted Chase (Haunted Hall) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Forest Interlude (Web Woods) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Token Tango (Bonus Level) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Krook's March (Chain Link Chamber) - Donkey Kong Country 2: Diddy's Kong Quest",
    "In a Snowbound Land (Clapper's Cavern) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Klubba's Reveille (Klubba's Kiosk) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Lost World Anthem (The Lost World) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Primal Rave (Animal Antics) - Donkey Kong Country 2: Diddy's Kong Quest",
    "False Victory - Donkey Kong Country 2: Diddy's Kong Quest",
    "Bad Bird Rag (Screech's Sprint) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Crocodile Cacophony (K. Rool's Theme) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Donkey Kong Rescued (Credits Roll) - Donkey Kong Country 2: Diddy's Kong Quest",
    "Game Over - Donkey Kong Country 2: Diddy's Kong Quest",
    "Title Theme - Super Mario 64",
    "File Select - Super Mario 64",
    "Opening - Super Mario 64",
    "Peach's Castle - Super Mario 64",
    "Main Theme - Super Mario 64",
    "Stage Boss - Super Mario 64",
    "Slider - Super Mario 64",
    "Piranha Plant's Lullaby - Super Mario 64",
    "Dire, Dire Docks - Super Mario 64",
    "Cool, Cool Mountain - Super Mario 64",
    "Bowser's Road - Super Mario 64",
    "Bowser's Theme - Super Mario 64",
    "Powerful Mario - Super Mario 64",
    "Big Boo's Haunt - Super Mario 64",
    "The Merry-Go-Round - Super Mario 64",
    "Hazy Maze Cave - Super Mario 64",
    "Metal Mario - Super Mario 64",
    "Lethal Lava Land - Super Mario 64",
    "The Endless Stairs - Super Mario 64",
    "The Final Battle - Super Mario 64",
    "Final Battle Clear - Super Mario 64",
    "Ending - Super Mario 64",
    "Staff Roll - Super Mario 64",
    "Piranha Plant's Lullaby (Piano Version) - Super Mario 64",
    "Title Theme - Wave Race 64",
    "Options - Wave Race 64",
    "Watercraft Select - Wave Race 64",
    "Dolphin Park - Wave Race 64",
    "Sunny Beach (1996 Ver.) - Wave Race 64",
    "Sunset Bay - Wave Race 64",
    "Drake Lake - Wave Race 64",
    "Marine Fortress - Wave Race 64",
    "Port Blue - Wave Race 64",
    "Twilight City - Wave Race 64",
    "Glacier Coast - Wave Race 64",
    "Southern Island (1996 Ver.) - Wave Race 64",
    "1st-Place Finish - Wave Race 64",
    "2nd-Place Finish - Wave Race 64",
    "3rd-Place Finish - Wave Race 64",
    "4th-Place Finish - Wave Race 64",
    "No Placement - Wave Race 64",
    "Race Results - Wave Race 64",
    "2P Vs. Finish - Wave Race 64",
    "Time Trials / Stunt Mode Finish - Wave Race 64",
    "Championship Ending - Wave Race 64",
    "4th Place - Wave Race 64",
    "3rd Place - Wave Race 64",
    "2nd Place - Wave Race 64",
    "1st Place - Wave Race 64",
    "Sunny Beach (1997 Ver.) - Wave Race 64",
    "Southern Island (1997 Ver.) - Wave Race 64",
    "Dixie Beat - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Crazy Calypso - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Northern Kremisphere - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Hangin’ at Funky’s - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Wrinkly's Save Cave - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Get Fit A-Go-Go - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Wrinkly 64 - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Brothers Bear - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Sub-Map Shuffle - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Swanky's Sideshow - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Cranky’s Showdown - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Bonus Time - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Stilt Village - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Mill Fever - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Jangle Bells - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Frosty Frolics - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Treetop Tumble - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Enchanted Riverbank - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Hot Pursuit - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Water World - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Cascade Capers - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Nuts and Bolts - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Pokey Pipes - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Rockface Rumble - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Jungle Jitter - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Cavern Caprice - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Rocket Run - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Boss Boogie - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Crystal Chasm - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Krematoa Koncerto - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Big Boss Blues - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Mama Bird - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Chase - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Baddies on Parade - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    "Opening Theme - Star Fox 64",
    "Title Theme - Star Fox 64",
    "Select Theme - Star Fox 64",
    "Map Theme - Star Fox 64",
    "VS Select - Star Fox 64",
    "Demo 1 - Star Fox 64",
    "Training Mode - Star Fox 64",
    "Corneria - Star Fox 64",
    "Fichina & Sector Z - Star Fox 64",
    "Meteo - Star Fox 64",
    "Sector Y & Solar - Star Fox 64",
    "Katina - Star Fox 64",
    "Aquas - Star Fox 64",
    "Sector X - Star Fox 64",
    "Zoness - Star Fox 64",
    "Titania & Macbeth - Star Fox 64",
    "Area 6 - Star Fox 64",
    "Bolse - Star Fox 64",
    "Venom - Star Fox 64",
    "Warp - Star Fox 64",
    "Underground Base - Star Fox 64",
    "Star Wolf's Theme - Star Fox 64",
    "Boss Battle 1 - Star Fox 64",
    "Boss Battle 2 - Star Fox 64",
    "Boss Battle 3 - Star Fox 64",
    "Andross Battle - Star Fox 64",
    "Final Battle - Star Fox 64",
    "VS Battle 1 - Star Fox 64",
    "VS Battle 2 - Star Fox 64",
    "Mission Complete - Star Fox 64",
    "Mission Failed - Star Fox 64",
    "Game Over - Star Fox 64",
    "All Clear - Star Fox 64",
    "Credits Theme - Star Fox 64",
    "Endless Challenge (Mute City) - F-Zero X",
    "Dream Chaser (Silence) - F-Zero X",
    "Fall Down to the Stream (Sand Ocean / Fire Field) - F-Zero X",
    "Decided by the Eyes (Big Blue) - F-Zero X",
    "A Devil's Call in Your Heart (Devil's Forest) - F-Zero X",
    "Long-Distance Murder (Red Canyon / Space Plant) - F-Zero X",
    "Crazy Crying Call (Port Town) - F-Zero X",
    "Drivin' Through on MAX (Sector α / Sector β / Rainbow Road) - F-Zero X",
    "Climb Up / Last Chance! (White Land / Big Hand) - F-Zero X",
    "All We Need Is 30 Deaths (Death Race) - F-Zero X",
    "Title BGM - F-Zero X",
    "Machine Select - F-Zero X",
    "Options - F-Zero X",
    "Goal BGM - F-Zero X",
    "Grand Prix Ending - F-Zero X",
    "Staff Roll - F-Zero X",
    "Regeneration - F-Zero X",
    "Roller Coaster - F-Zero X",
    "Big Foot - F-Zero X",
    "Japon - F-Zero X",
    "Rainbow Road - F-Zero X",
    "Mr. EAD Ending - F-Zero X",
    "Title Theme - The Legend of Zelda: Ocarina of Time",
    "Deku Tree - The Legend of Zelda: Ocarina of Time",
    "Fairy Flying - The Legend of Zelda: Ocarina of Time",
    "House - The Legend of Zelda: Ocarina of Time",
    "Kokiri Forest - The Legend of Zelda: Ocarina of Time",
    "Shop - The Legend of Zelda: Ocarina of Time",
    "Battle - The Legend of Zelda: Ocarina of Time",
    "Inside the Deku Tree - The Legend of Zelda: Ocarina of Time",
    "Boss Battle - The Legend of Zelda: Ocarina of Time",
    "The Legend of Hyrule - The Legend of Zelda: Ocarina of Time",
    "Hyrule Field Main Theme - The Legend of Zelda: Ocarina of Time",
    "Kaepora Gaebora's Theme - The Legend of Zelda: Ocarina of Time",
    "Market - The Legend of Zelda: Ocarina of Time",
    "Shooting Gallery - The Legend of Zelda: Ocarina of Time",
    "Hyrule Castle Courtyard - The Legend of Zelda: Ocarina of Time",
    "Zelda's Theme - The Legend of Zelda: Ocarina of Time",
    "Lon Lon Ranch - The Legend of Zelda: Ocarina of Time",
    "Minigame - The Legend of Zelda: Ocarina of Time",
    "Kakariko Village - The Legend of Zelda: Ocarina of Time",
    "Hyrule Field Theme: Morning - The Legend of Zelda: Ocarina of Time",
    "Goron City - The Legend of Zelda: Ocarina of Time",
    "Lost Woods - The Legend of Zelda: Ocarina of Time",
    "Dodongo's Cavern - The Legend of Zelda: Ocarina of Time",
    "Middle Boss Battle - The Legend of Zelda: Ocarina of Time",
    "Dinosaur Boss Battle - The Legend of Zelda: Ocarina of Time",
    "Zora's Domain - The Legend of Zelda: Ocarina of Time",
    "Great Fairy's Fountain - The Legend of Zelda: Ocarina of Time",
    "Potion Shop - The Legend of Zelda: Ocarina of Time",
    "Inside Jabu-Jabu's Belly - The Legend of Zelda: Ocarina of Time",
    "Temple of Time - The Legend of Zelda: Ocarina of Time",
    "Ganondorf's Theme - The Legend of Zelda: Ocarina of Time",
    "Chamber of the Sages - The Legend of Zelda: Ocarina of Time",
    "Sheik's Theme - The Legend of Zelda: Ocarina of Time",
    "Horse Race - The Legend of Zelda: Ocarina of Time",
    "Ingo's Theme - The Legend of Zelda: Ocarina of Time",
    "Kakariko Village Orchestral Ver. - The Legend of Zelda: Ocarina of Time",
    "Windmill Hut - The Legend of Zelda: Ocarina of Time",
    "Forest Temple - The Legend of Zelda: Ocarina of Time",
    "Bolero of Fire - The Legend of Zelda: Ocarina of Time",
    "Fire Temple - The Legend of Zelda: Ocarina of Time",
    "Ice Cavern - The Legend of Zelda: Ocarina of Time",
    "Serenade of Water - The Legend of Zelda: Ocarina of Time",
    "Water Temple - The Legend of Zelda: Ocarina of Time",
    "Nocturne of Shadow - The Legend of Zelda: Ocarina of Time",
    "Prelude of Light - The Legend of Zelda: Ocarina of Time",
    "Shadow Temple - The Legend of Zelda: Ocarina of Time",
    "Gerudo Valley - The Legend of Zelda: Ocarina of Time",
    "Spirit Temple - The Legend of Zelda: Ocarina of Time",
    "Requiem of Spirit - The Legend of Zelda: Ocarina of Time",
    "Kotake & Koume's Theme - The Legend of Zelda: Ocarina of Time",
    "Reuniting with Zelda - The Legend of Zelda: Ocarina of Time",
    "A Bridge to Ganon's Castle - The Legend of Zelda: Ocarina of Time",
    "Beneath Ganon's Castle - The Legend of Zelda: Ocarina of Time",
    "Ganon's Tower - The Legend of Zelda: Ocarina of Time",
    "Ganondorf Battle - The Legend of Zelda: Ocarina of Time",
    "Escape from Ganon's Castle - The Legend of Zelda: Ocarina of Time",
    "Last Battle - The Legend of Zelda: Ocarina of Time",
    "Seal of the Six Sages - The Legend of Zelda: Ocarina of Time",
    "End Credits - The Legend of Zelda: Ocarina of Time",
    "Main Theme (Title) - Golden Sun",
    "Setting Off - Golden Sun",
    "Dungeon Theme - Golden Sun",
    "Chance Meeting with Sworn Enemies - Golden Sun",
    "Defeated... - Golden Sun",
    "The Passage of Time - Golden Sun",
    "Village Theme - Golden Sun",
    "Sol Sanctum - Golden Sun",
    "Elemental Stars - Golden Sun",
    "Mount Aleph Erupts - Golden Sun",
    "A Long Journey - Golden Sun",
    "Battle - Golden Sun",
    "Victory! - Golden Sun",
    "Wind Adepts - Golden Sun",
    "Cave Theme - Golden Sun",
    "Palace Theme - Golden Sun",
    "An Unsettling Feeling - Golden Sun",
    "Forest Theme - Golden Sun",
    "Sinking into Sorrow - Golden Sun",
    "Battling a Powerful Foe - Golden Sun",
    "Remote Village - Golden Sun",
    "Mercury Lighthouse - Golden Sun",
    "Sworn Enemies Stand in Your Way - Golden Sun",
    "Town Theme - Golden Sun",
    "Temple Theme - Golden Sun",
    "Desert Theme - Golden Sun",
    "Port-Town Theme - Golden Sun",
    "Set Sail on the Karagol Sea - Golden Sun",
    "Tolbi - Golden Sun",
    "Try Your Luck! - Golden Sun",
    "Labyrinth Theme - Golden Sun",
    "Babi's Theme - Golden Sun",
    "Colosseum - Golden Sun",
    "Colosseum Finals - Golden Sun",
    "Trial Road - Golden Sun",
    "Test Your Skills - Golden Sun",
    "Babi Lighthouse - Golden Sun",
    "Venus Lighthouse - Golden Sun",
    "Battle with Saturos & Menardi - Golden Sun",
    "Battle with the Fusion Dragon - Golden Sun",
    "Felix's Resolve - Golden Sun",
    "Title Theme - Luigi's Mansion",
    "File Select - Luigi's Mansion",
    "Opening Scene - Luigi's Mansion",
    "Signs of Ghosts - Luigi's Mansion",
    "Professor E. Gadd and the Poltergust 3000 - Luigi's Mansion",
    "Professor E. Gadd's Lab - Luigi's Mansion",
    "Training Room: First Half - Luigi's Mansion",
    "Training Room: Second Half - Luigi's Mansion",
    "Training Room: Results - Luigi's Mansion",
    "Gallery - Luigi's Mansion",
    "To the Mansion - Luigi's Mansion",
    "There, There, Toad - Luigi's Mansion",
    "Title Theme (Humming) - Luigi's Mansion",
    "When the Candles Go Out - Luigi's Mansion",
    "Suck Up the Ghosts! - Luigi's Mansion",
    "Suck Up More Ghosts! - Luigi's Mansion",
    "Game Boy Horror Ringtone - Luigi's Mansion",
    "Chatting with Professor E. Gadd - Luigi's Mansion",
    "Chauncey in the Nursery - Luigi's Mansion",
    "Versus a Strong Enemy - Luigi's Mansion",
    "Playing with Chauncey - Luigi's Mansion",
    "Boss Ghost: Chauncey - Luigi's Mansion",
    "A Little Breather - Luigi's Mansion",
    "Ghost Portrificationizer - Luigi's Mansion",
    "Starting Up the Ghost Portrificationizer - Luigi's Mansion",
    "Ghosts You've Caught - Luigi's Mansion",
    "Ghost Guys in the Ballroom - Luigi's Mansion",
    "The Floating Whirlindas in the Ballroom - Luigi's Mansion",
    "Boo Escape - Luigi's Mansion",
    "Suck Up the Boo! - Luigi's Mansion",
    "Chatting with a Ghost - Luigi's Mansion",
    "Conservatory Instruments (Ground BGM) - Luigi's Mansion",
    "Cleaning the Conservatory - Luigi's Mansion",
    "Bogmire in the Graveyard - Luigi's Mansion",
    "Boss Ghost: Bogmire - Luigi's Mansion",
    "Mario in a Portrait - Luigi's Mansion",
    "A Star Appears - Luigi's Mansion",
    "Hide-and-Seek in The Twins' Room - Luigi's Mansion",
    "Boos on the Balcony - Luigi's Mansion",
    "Boss Ghost: Boolossus - Luigi's Mansion",
    "Sue Pea in the Guest Room - Luigi's Mansion",
    "Not Enough Boos 1 - Luigi's Mansion",
    "Not Enough Boos 2 - Luigi's Mansion",
    "King Boo in the Secret Altar - Luigi's Mansion",
    "Into Bowser's Portrait - Luigi's Mansion",
    "Boss Ghost: King Boo - Luigi's Mansion",
    "Restoring Mario's Portrait - Luigi's Mansion",
    "The Brothers Reunited - Luigi's Mansion",
    "Staff Credits - Luigi's Mansion",
    "Title Theme - Metroid Prime",
    "File Select - Metroid Prime",
    "Prologue - Metroid Prime",
    "Pirate Frigate - Metroid Prime",
    "Parasite Queen Battle - Metroid Prime",
    "Pirate Frigate Escape - Metroid Prime",
    "Tallon Overworld - Metroid Prime",
    "Timeworn Chozo Remnants - Metroid Prime",
    "Hive Mecha Battle - Metroid Prime",
    "Plated Beetle Battle - Metroid Prime",
    "Chozo Ruins - Metroid Prime",
    "Flaahgra Battle - Metroid Prime",
    "Magmoor Caverns - Metroid Prime",
    "Phendrana Drifts - Metroid Prime",
    "Chapel of the Elders - Metroid Prime",
    "Space Pirates (Specimen Storage) - Metroid Prime",
    "Space Pirates Battle - Metroid Prime",
    "Thardus Battle - Metroid Prime",
    "Tallon Overworld Revisited - Metroid Prime",
    "Hall of the Chozo Elders - Metroid Prime",
    "Chozo Ghosts Battle - Metroid Prime",
    "Phendrana Battle - Metroid Prime",
    "Crashed Ship - Metroid Prime",
    "Phazon Mines - Metroid Prime",
    "Omega Pirate Battle - Metroid Prime",
    "Chozo Shrine - Metroid Prime",
    "Meta Ridley Battle - Metroid Prime",
    "Chozo Shrine Unsealed - Metroid Prime",
    "Metroid Prime Battle - Metroid Prime",
    "Metroid Prime (Core) Battle - Metroid Prime",
    "Shrine Collapse - Epilogue - Metroid Prime",
    "Credits - Metroid Prime",
    "Samus's Record - Metroid Prime",
    "Title Theme - The Legend of Zelda: The Wind Waker",
    "File Selection - The Legend of Zelda: The Wind Waker",
    "Legend of the Hero - The Legend of Zelda: The Wind Waker",
    "Outset Island - The Legend of Zelda: The Wind Waker",
    "House Theme - The Legend of Zelda: The Wind Waker",
    "Old Man's House - The Legend of Zelda: The Wind Waker",
    "Ways of the Sword - The Legend of Zelda: The Wind Waker",
    "Beedle's Shop Ship - The Legend of Zelda: The Wind Waker",
    "A Monstrous Bird - The Legend of Zelda: The Wind Waker",
    "Outset Island Forest - The Legend of Zelda: The Wind Waker",
    "Battle Theme - The Legend of Zelda: The Wind Waker",
    "Meeting Tetra - The Legend of Zelda: The Wind Waker",
    "Aryll Abducted - The Legend of Zelda: The Wind Waker",
    "Grandma - The Legend of Zelda: The Wind Waker",
    "Setting Sail - The Legend of Zelda: The Wind Waker",
    "Pirates - The Legend of Zelda: The Wind Waker",
    "Below Deck - The Legend of Zelda: The Wind Waker",
    "Hatching a Rescue Plan - The Legend of Zelda: The Wind Waker",
    "Executing the Rescue Plan - The Legend of Zelda: The Wind Waker",
    "Forsaken Fortress - The Legend of Zelda: The Wind Waker",
    "Reuniting with Aryll - The Legend of Zelda: The Wind Waker",
    "Meeting the King of Red Lions - The Legend of Zelda: The Wind Waker",
    "The Tale of Ganon - The Legend of Zelda: The Wind Waker",
    "Search for a Sail - The Legend of Zelda: The Wind Waker",
    "Windfall Island - The Legend of Zelda: The Wind Waker",
    "Potion Shop - The Legend of Zelda: The Wind Waker",
    "Daybreak - The Legend of Zelda: The Wind Waker",
    "The Great Sea - The Legend of Zelda: The Wind Waker",
    "Clash at Sea - The Legend of Zelda: The Wind Waker",
    "Battle at Sea - The Legend of Zelda: The Wind Waker",
    "Dragon Roost Island - The Legend of Zelda: The Wind Waker",
    "Dragon Roost Cavern - The Legend of Zelda: The Wind Waker",
    "Intense Battle - The Legend of Zelda: The Wind Waker",
    "Gohma Appears - The Legend of Zelda: The Wind Waker",
    "Gohma Battle (First Phase) - The Legend of Zelda: The Wind Waker",
    "Gohma Battle (Second Phase) - The Legend of Zelda: The Wind Waker",
    "Boss Defeated - The Legend of Zelda: The Wind Waker",
    "Boat Game - The Legend of Zelda: The Wind Waker",
    "Boat Game Victory - The Legend of Zelda: The Wind Waker",
    "Forest Haven - The Legend of Zelda: The Wind Waker",
    "Inside the Forest Haven - The Legend of Zelda: The Wind Waker",
    "The Deku Tree and Friends - The Legend of Zelda: The Wind Waker",
    "Forbidden Woods - The Legend of Zelda: The Wind Waker",
    "Kalle Demos Appears - The Legend of Zelda: The Wind Waker",
    "Kalle Demos - The Legend of Zelda: The Wind Waker",
    "Forest Ceremony - The Legend of Zelda: The Wind Waker",
    "Next Year's Ceremony - The Legend of Zelda: The Wind Waker",
    "The Cursed Sea - The Legend of Zelda: The Wind Waker",
    "Sacred Shrine - The Legend of Zelda: The Wind Waker",
    "Jabun - The Legend of Zelda: The Wind Waker",
    "The Tower of the Gods Emerges - The Legend of Zelda: The Wind Waker",
    "Tower of the Gods - The Legend of Zelda: The Wind Waker",
    "Gohdan Appears - The Legend of Zelda: The Wind Waker",
    "Gohdan Battle - The Legend of Zelda: The Wind Waker",
    "To Hyrule - The Legend of Zelda: The Wind Waker",
    "Sealed Hyrule Castle - The Legend of Zelda: The Wind Waker",
    "Hyrule Castle - The Legend of Zelda: The Wind Waker",
    "Phantom Ganon Battle - The Legend of Zelda: The Wind Waker",
    "Reunited with Aryll - The Legend of Zelda: The Wind Waker",
    "Tetra Spies the Sword - The Legend of Zelda: The Wind Waker",
    "A Short-Lived Reunion - The Legend of Zelda: The Wind Waker",
    "Forsaken Fortress Tower - The Legend of Zelda: The Wind Waker",
    "Helmaroc King Appears - The Legend of Zelda: The Wind Waker",
    "Helmaroc King Battle - The Legend of Zelda: The Wind Waker",
    "Master of the Forsaken Fortress - The Legend of Zelda: The Wind Waker",
    "The Pirate's Charm - The Legend of Zelda: The Wind Waker",
    "The King of Hyrule Appears - The Legend of Zelda: The Wind Waker",
    "Heir of the Royal Family - The Legend of Zelda: The Wind Waker",
    "Zelda's Theme - The Legend of Zelda: The Wind Waker",
    "Fairy Fountain - The Legend of Zelda: The Wind Waker",
    "Fairy Queen - The Legend of Zelda: The Wind Waker",
    "Dungeon Theme - The Legend of Zelda: The Wind Waker",
    "Sage Laruto - The Legend of Zelda: The Wind Waker",
    "Medli, the Sage of Earth - The Legend of Zelda: The Wind Waker",
    "Earth God's Lyric - The Legend of Zelda: The Wind Waker",
    "The Earth Temple - The Legend of Zelda: The Wind Waker",
    "Jalhalla Appears - The Legend of Zelda: The Wind Waker",
    "Jalhalla Battle - The Legend of Zelda: The Wind Waker",
    "Medli's Prayer - The Legend of Zelda: The Wind Waker",
    "Sage Fado - The Legend of Zelda: The Wind Waker",
    "Wind Temple - The Legend of Zelda: The Wind Waker",
    "Molgera Appears - The Legend of Zelda: The Wind Waker",
    "Molgera Battle - The Legend of Zelda: The Wind Waker",
    "Makar's Prayer - The Legend of Zelda: The Wind Waker",
    "Hero of Winds - The Legend of Zelda: The Wind Waker",
    "Ganon's Tower - The Legend of Zelda: The Wind Waker",
    "Gohma Battle, Ganon's Tower (First Phase) - The Legend of Zelda: The Wind Waker",
    "Gohma Battle, Ganon's Tower (Second Phase) - The Legend of Zelda: The Wind Waker",
    "Kalle Demos Battle, Ganon's Tower - The Legend of Zelda: The Wind Waker",
    "Jalhalla Battle, Ganon's Tower - The Legend of Zelda: The Wind Waker",
    "Molgera Battle, Ganon's Tower - The Legend of Zelda: The Wind Waker",
    "Phantom Ganon's Maze - The Legend of Zelda: The Wind Waker",
    "Ganondorf Speaks - The Legend of Zelda: The Wind Waker",
    "Puppet Ganon (Puppet Form) - The Legend of Zelda: The Wind Waker",
    "Puppet Ganon Transforms - The Legend of Zelda: The Wind Waker",
    "Puppet Ganon (Spider Form) - The Legend of Zelda: The Wind Waker",
    "Puppet Ganon (Snake Form) - The Legend of Zelda: The Wind Waker",
    "Puppet Ganon's Demise - The Legend of Zelda: The Wind Waker",
    "Before the Showdown - The Legend of Zelda: The Wind Waker",
    "Ganondorf Battle - The Legend of Zelda: The Wind Waker",
    "Parting Ways - The Legend of Zelda: The Wind Waker",
    "Ending Theme - The Legend of Zelda: The Wind Waker",
    "Staff Credits - The Legend of Zelda: The Wind Waker",
    "Aryll's Theme - The Legend of Zelda: The Wind Waker",
    "Game Demo Theme - The Legend of Zelda: The Wind Waker",
    "Opening: History Unveiled - Fire Emblem: The Blazing Blade",
    "Fire Emblem Theme - Fire Emblem: The Blazing Blade",
    "A Hint of Things to Come - Fire Emblem: The Blazing Blade",
    "Road of Trials - Fire Emblem: The Blazing Blade",
    "Destiny Enlaced by Fear - Fire Emblem: The Blazing Blade",
    "Winds across the Plains - Fire Emblem: The Blazing Blade",
    "Precious Things - Fire Emblem: The Blazing Blade",
    "Companions - Fire Emblem: The Blazing Blade",
    "Friendship and Adventure - Fire Emblem: The Blazing Blade",
    "Distant Travels - Fire Emblem: The Blazing Blade",
    "Inescapable Fate - Fire Emblem: The Blazing Blade",
    "Dragon's Gate II - Fire Emblem: The Blazing Blade",
    "Winning Road - Fire Emblem: The Blazing Blade",
    "Binding Ties - Fire Emblem: The Blazing Blade",
    "Scars of the Scouring - Fire Emblem: The Blazing Blade",
    "Raise Your Spirits - Fire Emblem: The Blazing Blade",
    "Shadow Approaches - Fire Emblem: The Blazing Blade",
    "Enemies Appear - Fire Emblem: The Blazing Blade",
    "The Messenger - Fire Emblem: The Blazing Blade",
    "Darkness Comes - Fire Emblem: The Blazing Blade",
    "Dragon's Gate I - Fire Emblem: The Blazing Blade",
    "Nabata's Wandering Messenger - Fire Emblem: The Blazing Blade",
    "Legendary Inheritance - Fire Emblem: The Blazing Blade",
    "Raid! - Fire Emblem: The Blazing Blade",
    "Messenger from the Darkness - Fire Emblem: The Blazing Blade",
    "Strike - Fire Emblem: The Blazing Blade",
    "Safeguard - Fire Emblem: The Blazing Blade",
    "Victory Now! - Fire Emblem: The Blazing Blade",
    "Rise to the Challenge - Fire Emblem: The Blazing Blade",
    "Softly with Grace - Fire Emblem: The Blazing Blade",
    "Everything into the Dark - Fire Emblem: The Blazing Blade",
    "Campaign of Fire - Fire Emblem: The Blazing Blade",
    "Blessing of the Eight Generals I - Fire Emblem: The Blazing Blade",
    "Healing - Fire Emblem: The Blazing Blade",
    "Curing - Fire Emblem: The Blazing Blade",
    "Receive the Blessings of Water - Fire Emblem: The Blazing Blade",
    "Ride the Wind - Fire Emblem: The Blazing Blade",
    "To the Heights - Fire Emblem: The Blazing Blade",
    "An Unexpected Caller - Fire Emblem: The Blazing Blade",
    "When the Rush Comes - Fire Emblem: The Blazing Blade",
    "Land of Swirling Sands - Fire Emblem: The Blazing Blade",
    "Ships and Homes - Fire Emblem: The Blazing Blade",
    "Silent Ground - Fire Emblem: The Blazing Blade",
    "The Inn - Fire Emblem: The Blazing Blade",
    "Going My Way - Fire Emblem: The Blazing Blade",
    "Together, We Ride! - Fire Emblem: The Blazing Blade",
    "A Knight's Oath - Fire Emblem: The Blazing Blade",
    "Happiness Abounds - Fire Emblem: The Blazing Blade",
    "Merlinus - Fire Emblem: The Blazing Blade",
    "Final Farewell - Fire Emblem: The Blazing Blade",
    "Requiem - Fire Emblem: The Blazing Blade",
    "Recollection of a Petal - Fire Emblem: The Blazing Blade",
    "The Cogs of Fate - Fire Emblem: The Blazing Blade",
    "The Eight Generals - Fire Emblem: The Blazing Blade",
    "The Archsage Athos - Fire Emblem: The Blazing Blade",
    "Distant Utopia - Fire Emblem: The Blazing Blade",
    "What Comes from Darkness - Fire Emblem: The Blazing Blade",
    "Black Fang - Fire Emblem: The Blazing Blade",
    "Calamity Bringer: Nergal's Theme - Fire Emblem: The Blazing Blade",
    "Nergal's Wrath - Fire Emblem: The Blazing Blade",
    "Stratagem - Fire Emblem: The Blazing Blade",
    "The Kingdom of Bern - Fire Emblem: The Blazing Blade",
    "Bern - A Mother's Wish - Fire Emblem: The Blazing Blade",
    "Shocking Truth I - Fire Emblem: The Blazing Blade",
    "Shocking Truth II - Fire Emblem: The Blazing Blade",
    "Triumph - Fire Emblem: The Blazing Blade",
    "Into the Shadow of Triumph - Fire Emblem: The Blazing Blade",
    "Main Theme Arrangement - Fire Emblem: The Blazing Blade",
    "Blessing of the Eight Generals II - Fire Emblem: The Blazing Blade",
    "Girl of the Plains: Lyn's Theme - Fire Emblem: The Blazing Blade",
    "Lyn's Desire - Fire Emblem: The Blazing Blade",
    "Light to Tomorrow - Fire Emblem: The Blazing Blade",
    "One Heart: Eliwood's Theme - Fire Emblem: The Blazing Blade",
    "Eyes of Sorrow - Fire Emblem: The Blazing Blade",
    "Unshakable Faith - Fire Emblem: The Blazing Blade",
    "Loyalty: Hector's Theme - Fire Emblem: The Blazing Blade",
    "The Grieving Heart - Fire Emblem: The Blazing Blade",
    "Reminiscence - Fire Emblem: The Blazing Blade",
    "Shattered Life - Fire Emblem: The Blazing Blade",
    "Anguish - Fire Emblem: The Blazing Blade",
    "Respite in Battle - Fire Emblem: The Blazing Blade",
    "Prepare to Charge - Fire Emblem: The Blazing Blade",
    "Armory - Fire Emblem: The Blazing Blade",
    "Shop - Fire Emblem: The Blazing Blade",
    "Fortune-Telling - Fire Emblem: The Blazing Blade",
    "Arena Entrance - Fire Emblem: The Blazing Blade",
    "Arena Battle - Fire Emblem: The Blazing Blade",
    "Arena Tactics - Fire Emblem: The Blazing Blade",
    "Within Sadness - Fire Emblem: The Blazing Blade",
    "Game Over - Fire Emblem: The Blazing Blade",
    "Legend of Athos - Fire Emblem: The Blazing Blade",
    "Results - Fire Emblem: The Blazing Blade",
    "Treasured Hope - Fire Emblem: The Blazing Blade",
    "Beneath a New Light - Fire Emblem: The Blazing Blade",
    "The Path to Greatness - Fire Emblem: The Blazing Blade",
    "In the Name of Bern - Fire Emblem: The Blazing Blade",
    "Avoided Fate - Fire Emblem: The Blazing Blade",
    "Legend of the Dragon God (From Fire Emblem: Mystery of the Emblem) - Fire Emblem: The Blazing Blade",
    "Royal Palace of Silesse (From Fire Emblem: Genealogy of the Holy War) - Fire Emblem: The Blazing Blade",
    "nintendogs - nintendogs",
    "Shop & Kennel - nintendogs",
    "Reading - nintendogs",
    "Walking - nintendogs",
    "Walking: Other Dog Encounter (Curious) - nintendogs",
    "Walking: Other Dog Encounter (Great Mood) - nintendogs",
    "Walking: Other Dog Encounter (Friendly) - nintendogs",
    "Walking: Other Dog Encounter (Slight Dislike) - nintendogs",
    "Walking: Other Dog Encounter (Unfriendly) - nintendogs",
    "Agility Trials - nintendogs",
    "Bathing - nintendogs",
    "Dog Show: Judges' Commentary - nintendogs",
    "Dog Show: Beginner - nintendogs",
    "Dog Show: Expert - nintendogs",
    "Dog Show: Championship - nintendogs",
    "Toy: Mario Kart - nintendogs",
    "Toy: Bowser Kart - nintendogs",
    "Toy: Peach Kart - nintendogs",
    "Toy: Combat Copter - nintendogs",
    "Music Box: nintendogs - nintendogs",
    "Music Box: Mario's Theme - nintendogs",
    "Music Box: Puppy Waltz - nintendogs",
    "Record: Street Marker - nintendogs",
    "Record: Growler - nintendogs",
    "Record: Smilin' Dog - nintendogs",
    "Record: Friendly Whiff - nintendogs",
    "Record: Chow - nintendogs",
    "Record: Surprise - nintendogs",
    "Record: Naptime - nintendogs",
    "Record: Colonel Bogey - nintendogs",
    "Record: Toreador - nintendogs",
    "Record: Flower Waltz - nintendogs",
    "Record: nintendogs - nintendogs",
    "Record: Waves - nintendogs",
    "Record: Modest Decor - nintendogs",
    "Record: Shedded Fur - nintendogs",
    "Record: Giant Socks - nintendogs",
    "Record: nintendogs (Demo Version) - nintendogs",
    "Title Theme - Brain Age: Train Your Brain in Minutes a Day!",
    "Checking Brain Age for the First Time - Brain Age: Train Your Brain in Minutes a Day!",
    "Menu Theme - Brain Age: Train Your Brain in Minutes a Day!",
    "Results - Brain Age: Train Your Brain in Minutes a Day!",
    "Checking Answers - Brain Age: Train Your Brain in Minutes a Day!",
    "Staff Credits - Brain Age: Train Your Brain in Minutes a Day!",
    "Wii Menu - Wii Channels",
    "Mii Plaza (Mii Channel) - Wii Channels",
    "Mii Parade: Walking (Mii Channel) - Wii Channels",
    "Mii Parade: Running (Mii Channel) - Wii Channels",
    "Selecting Photos (Photo Channel) - Wii Channels",
    "Digital Camera / Cell Phone (Photo Channel) - Wii Channels",
    "View Wii Message Board Photos (Photo Channel) - Wii Channels",
    "Slide Show: Calm (Photo Channel) - Wii Channels",
    "Slide Show: Fun (Photo Channel) - Wii Channels",
    "Slide Show: Bright (Photo Channel) - Wii Channels",
    "Slide Show: Nostalgic (Photo Channel) - Wii Channels",
    "Slide Show: Beautiful (Photo Channel) - Wii Channels",
    "Slide Show: Scenic (Photo Channel) - Wii Channels",
    "Doodle (Photo Channel) - Wii Channels",
    "Puzzle Menu (Photo Channel) - Wii Channels",
    "Puzzle: First Time Playing (Photo Channel) - Wii Channels",
    "Puzzle (Photo Channel) - Wii Channels",
    "Post (Photo Channel) - Wii Channels",
    "Launch Screen: Wii Shop Channel - Wii Channels",
    "Main Theme (Wii Shop Channel) - Wii Channels",
    "One moment, please... (Forecast Channel) - Wii Channels",
    "Forecast: Daytime (Forecast Channel) - Wii Channels",
    "Globe: Daytime (Forecast Channel) - Wii Channels",
    "Globe: Daytime Forecast (Forecast Channel) - Wii Channels",
    "Forecast: Nighttime (Forecast Channel) - Wii Channels",
    "Globe: Nighttime (Forecast Channel) - Wii Channels",
    "Globe: Nighttime Forecast (Forecast Channel) - Wii Channels",
    "Settings (Forecast Channel) - Wii Channels",
    "One moment, please... (News Channel) - Wii Channels",
    "Menu (News Channel) - Wii Channels",
    "Checking the News: Daytime (News Channel) - Wii Channels",
    "Checking the News: Nighttime (News Channel) - Wii Channels",
    "Globe (News Channel) - Wii Channels",
    "Menu (Everybody Votes Channel) - Wii Channels",
    "Poll Screen (Everybody Votes Channel) - Wii Channels",
    "Results (Everybody Votes Channel) - Wii Channels",
    "Voter Data (Everybody Votes Channel) - Wii Channels",
    "Suggest a Question (Everybody Votes Channel) - Wii Channels",
    "Launch Screen: Check Mii Out Channel - Wii Channels",
    "Menu (Check Mii Out Channel) - Wii Channels",
    "Posting Plaza (Check Mii Out Channel) - Wii Channels",
    "Posting Plaza: Checking a Mii Out (Check Mii Out Channel) - Wii Channels",
    "Import (Check Mii Out Channel) - Wii Channels",
    "Call Friends (Check Mii Out Channel) - Wii Channels",
    "Parade (Check Mii Out Channel) - Wii Channels",
    "Parade: Checking a Mii Out (Check Mii Out Channel) - Wii Channels",
    "Mii Plaza (Check Mii Out Channel) - Wii Channels",
    "Contests (Check Mii Out Channel) - Wii Channels",
    "Contest Results (Check Mii Out Channel) - Wii Channels",
    "Announcing the Contest Winner (Check Mii Out Channel) - Wii Channels",
    "Contest: Mii Ranking Presentation (Check Mii Out Channel) - Wii Channels",
    "Title Theme - Wii Sports",
    "Main Menu - Wii Sports",
    "Learning to Play - Wii Sports",
    "Tennis: Player Selection - Wii Sports",
    "Tennis: Winning Shot - Wii Sports",
    "Tennis: Results - Wii Sports",
    "Tennis: Training - Wii Sports",
    "Baseball: Results - Wii Sports",
    "Baseball: Training - Wii Sports",
    "Bowling: The Alley - Wii Sports",
    "Bowling: Results - Wii Sports",
    "Bowling: Training - Wii Sports",
    "Golf: Course Selection - Wii Sports",
    "Golf: Results - Wii Sports",
    "Golf: Training - Wii Sports",
    "Boxing: Replay - Wii Sports",
    "Boxing: Results - Wii Sports",
    "Boxing: Training - Wii Sports",
    "Training: Results - Wii Sports",
    "Training: Personal Best - Wii Sports",
    "Training: Earning a Medal - Wii Sports",
    "Wii Fitness: Menu - Wii Sports",
    "Wii Fitness: Results - Wii Sports",
    "Overture - Super Mario Galaxy",
    "The Star Festival - Super Mario Galaxy",
    "Attack of the Airships - Super Mario Galaxy",
    "Catastrophe - Super Mario Galaxy",
    "Peach’s Castle Stolen - Super Mario Galaxy",
    "Enter the Galaxy - Super Mario Galaxy",
    "Egg Planet - Super Mario Galaxy",
    "Rosalina in the Observatory 1 - Super Mario Galaxy",
    "The Honeyhive - Super Mario Galaxy",
    "Space Junk Road - Super Mario Galaxy",
    "Battlerock Galaxy - Super Mario Galaxy",
    "Beach Bowl Galaxy - Super Mario Galaxy",
    "Rosalina in the Observatory 2 - Super Mario Galaxy",
    "Enter Bowser Jr.! - Super Mario Galaxy",
    "Waltz of the Boos - Super Mario Galaxy",
    "Buoy Base Galaxy - Super Mario Galaxy",
    "Gusty Garden Galaxy - Super Mario Galaxy",
    "Rosalina in the Observatory 3 - Super Mario Galaxy",
    "King Bowser - Super Mario Galaxy",
    "Melty Molten Galaxy - Super Mario Galaxy",
    "The Galaxy Reactor - Super Mario Galaxy",
    "Final Battle with Bowser - Super Mario Galaxy",
    "Daybreak - A New Dawn - Super Mario Galaxy",
    "Birth - Super Mario Galaxy",
    "Super Mario Galaxy - Super Mario Galaxy",
    "Purple Comet - Super Mario Galaxy",
    "Blue Sky Athletic - Super Mario Galaxy",
    "Super Mario 2007 - Super Mario Galaxy",
    "File Select - Super Mario Galaxy",
    "Luma - Super Mario Galaxy",
    "Gateway Galaxy - Super Mario Galaxy",
    "Stolen Grand Star - Super Mario Galaxy",
    "To the Observatory Grounds 1 - Super Mario Galaxy",
    "Observation Dome - Super Mario Galaxy",
    "Course Select - Super Mario Galaxy",
    "Dino Piranha - Super Mario Galaxy",
    "A Chance to Grab a Star! - Super Mario Galaxy",
    "A Tense Moment - Super Mario Galaxy",
    "Big Bad Bugaboom - Super Mario Galaxy",
    "King Kaliente - Super Mario Galaxy",
    "The Toad Brigade - Super Mario Galaxy",
    "Airship Armada - Super Mario Galaxy",
    "Aquatic Race - Super Mario Galaxy",
    "Space Fantasy - Super Mario Galaxy",
    "Megaleg - Super Mario Galaxy",
    "Space Athletic - Super Mario Galaxy",
    "Speedy Comet - Super Mario Galaxy",
    "Beach Bowl Galaxy - Undersea - Super Mario Galaxy",
    "Interlude - Super Mario Galaxy",
    "Bowser’s Stronghold Appears - Super Mario Galaxy",
    "The Fiery Stronghold - Super Mario Galaxy",
    "The Big Staircase - Super Mario Galaxy",
    "Bowser Appears - Super Mario Galaxy",
    "Star Ball - Super Mario Galaxy",
    "The Library - Super Mario Galaxy",
    "Buoy Base Galaxy - Undersea - Super Mario Galaxy",
    "Rainbow Mario - Super Mario Galaxy",
    "Chase the Bunnies! - Super Mario Galaxy",
    "Help! - Super Mario Galaxy",
    "Major Burrows - Super Mario Galaxy",
    "Pipe Interior - Super Mario Galaxy",
    "Cosmic Comet - Super Mario Galaxy",
    "Drip Drop Galaxy - Super Mario Galaxy",
    "Kingfin - Super Mario Galaxy",
    "Boo Race - Super Mario Galaxy",
    "Ice Mountain - Super Mario Galaxy",
    "Ice Mario - Super Mario Galaxy",
    "Lava Path - Super Mario Galaxy",
    "Fire Mario - Super Mario Galaxy",
    "Dusty Dune Galaxy - Super Mario Galaxy",
    "Heavy Metal Mecha-Bowser - Super Mario Galaxy",
    "A-wa-wa-wa! - Super Mario Galaxy",
    "Deep Dark Galaxy - Super Mario Galaxy",
    "Kamella - Super Mario Galaxy",
    "Star Ball 2 - Super Mario Galaxy",
    "Sad Girl - Super Mario Galaxy",
    "Flying Mario - Super Mario Galaxy",
    "Star Child - Super Mario Galaxy",
    "A Wish - Super Mario Galaxy",
    "Family - Super Mario Galaxy",
    "Making a Friend - Tomodachi Collection",
    "Apartment Hangout - Tomodachi Collection",
    "Afternoon on the Island - Tomodachi Collection",
    "Nighttime on the Island - Tomodachi Collection",
    "News Flash - Tomodachi Collection",
    "Mii News Report - Tomodachi Collection",
    "Food Mart - Tomodachi Collection",
    "Clothing Shop - Tomodachi Collection",
    "Interiors Shop - Tomodachi Collection",
    "Majority Rule - Tomodachi Collection",
    "Compatibility Tester - Tomodachi Collection",
    "Career Counselor - Tomodachi Collection",
    "Q&A - Tomodachi Collection",
    "Let's Play a Game - Tomodachi Collection",
    "Ballad: The Past 50 Years - Tomodachi Collection",
    "Rap: Hot Track - Tomodachi Collection",
    "Mood Music: Rain-Soaked Streets - Tomodachi Collection",
    "J-Pop: To a New Future - Tomodachi Collection",
    "Metal: Unremitted Desire - Tomodachi Collection",
    "Pop: Flitter-Flutter Days - Tomodachi Collection",
    "Pent-Up Passion - Tomodachi Collection",
    "Stewing in Rejection - Tomodachi Collection",
    "Married No More - Tomodachi Collection",
    "Separating with a Sweetheart - Tomodachi Collection",
    "Town Hall - Tomodachi Collection",
    "Save Screen - Tomodachi Collection",
    "Music Box: Making a Friend - Tomodachi Collection",
    "Music Box: Afternoon on the Island - Tomodachi Collection",
    "Music Box: Food Mart - Tomodachi Collection",
    "Music Box: Compatibility Tester - Tomodachi Collection",
    "Music Box: Mii News Report - Tomodachi Collection",
    "Music Box: Career Counselor - Tomodachi Collection",
    "Street Band: Cheerful Tango - Tomodachi Collection",
    "Street Band: Jaunty Allegro - Tomodachi Collection",
    "Street Band: Joyful Waltz - Tomodachi Collection",
    "Street Band: Refreshing Bossa Nova - Tomodachi Collection",
    "Street Band: Heartwarming Folk Dance - Tomodachi Collection",
    "Street Band: Somber Waltz - Tomodachi Collection",
    "Vacation: Okinawa - Tomodachi Collection",
    "Vacation: Hawaii - Tomodachi Collection",
    "Vacation: Hong Kong/Shanghai - Tomodachi Collection",
    "Vacation: Thailand - Tomodachi Collection",
    "Vacation: Italy - Tomodachi Collection",
    "Vacation: France - Tomodachi Collection",
    "Vacation: Spain - Tomodachi Collection",
    "Vacation: Kyoto - Tomodachi Collection",
    "Tying the Knot - Tomodachi Collection",
    "Staff Credits - Tomodachi Collection",
    "Entrance (StreetPass Mii Plaza) - StreetPass Mii Plaza",
    "Main Theme 1 (StreetPass Mii Plaza) - StreetPass Mii Plaza",
    "Main Theme 2 (StreetPass Mii Plaza) - StreetPass Mii Plaza",
    "Main Theme 3 (StreetPass Mii Plaza) - StreetPass Mii Plaza",
    "Main Theme 4 (StreetPass Mii Plaza) - StreetPass Mii Plaza",
    "Main Theme 5 (StreetPass Mii Plaza) - StreetPass Mii Plaza",
    "Main Theme 6 (StreetPass Mii Plaza) - StreetPass Mii Plaza",
    "Main Theme 7 (StreetPass Mii Plaza) - StreetPass Mii Plaza",
    "Salesbunny (StreetPass Mii Plaza) - StreetPass Mii Plaza",
    "StreetPass Birthdays (StreetPass Mii Plaza) - StreetPass Mii Plaza",
    "VIP Room (StreetPass Mii Plaza) - StreetPass Mii Plaza",
    "Title (Puzzle Swap) - StreetPass Mii Plaza",
    "Collected Pieces (Puzzle Swap) - StreetPass Mii Plaza",
    "Title (Find Mii) - StreetPass Mii Plaza",
    "Palace Theme (Find Mii) - StreetPass Mii Plaza",
    "Kidnapped! (Find Mii) - StreetPass Mii Plaza",
    "Captive Mii (Find Mii) - StreetPass Mii Plaza",
    "Venture Forth (Find Mii) - StreetPass Mii Plaza",
    "To Battle, Heroes! (Find Mii) - StreetPass Mii Plaza",
    "Current Results (Find Mii) - StreetPass Mii Plaza",
    "Fight On, Heroes! (Find Mii) - StreetPass Mii Plaza",
    "Dark Room (Find Mii) - StreetPass Mii Plaza",
    "Armored Fiend (Find Mii) - StreetPass Mii Plaza",
    "Ultimate Ghost (Find Mii) - StreetPass Mii Plaza",
    "Ending (Find Mii) - StreetPass Mii Plaza",
    "Title (Find Mii II) - StreetPass Mii Plaza",
    "Venture Forth 1 (Find Mii II) - StreetPass Mii Plaza",
    "Venture Forth 2 (Find Mii II) - StreetPass Mii Plaza",
    "Venture Forth 3 (Find Mii II) - StreetPass Mii Plaza",
    "Venture Forth 4 (Find Mii II) - StreetPass Mii Plaza",
    "Keep Fighting, Heroes! (Find Mii II) - StreetPass Mii Plaza",
    "Current Results (Find Mii II) - StreetPass Mii Plaza",
    "Save the World, Heroes! (Find Mii II) - StreetPass Mii Plaza",
    "Armored Archfiend (Find Mii II) - StreetPass Mii Plaza",
    "Dark Lord (Find Mii II) - StreetPass Mii Plaza",
    "Ending (Find Mii II) - StreetPass Mii Plaza",
    "The Ballad of the Goddess (Main Theme) - The Legend of Zelda: Skyward Sword",
    "An Ages-Old Tale - The Legend of Zelda: Skyward Sword",
    "File Select - The Legend of Zelda: Skyward Sword",
    "Islands in the Sky - The Legend of Zelda: Skyward Sword",
    "The First Omen - The Legend of Zelda: Skyward Sword",
    "The Knight Academy - The Legend of Zelda: Skyward Sword",
    "Skyloft - The Legend of Zelda: Skyward Sword",
    "Before the Goddess Statue - The Legend of Zelda: Skyward Sword",
    "A Moment with Zelda - The Legend of Zelda: Skyward Sword",
    "Something's Wrong - The Legend of Zelda: Skyward Sword",
    "Groose Appears - The Legend of Zelda: Skyward Sword",
    "Groose Appears Uneasy - The Legend of Zelda: Skyward Sword",
    "Groose Appears Nervous - The Legend of Zelda: Skyward Sword",
    "Waterfall Cave - The Legend of Zelda: Skyward Sword",
    "Flight Training - The Legend of Zelda: Skyward Sword",
    "Wing Ceremony Opening - The Legend of Zelda: Skyward Sword",
    "The Wing Ceremony - The Legend of Zelda: Skyward Sword",
    "Wing Ceremony Winner - The Legend of Zelda: Skyward Sword",
    "An Audience with the Goddess - The Legend of Zelda: Skyward Sword",
    "The Goddess's Blessing - The Legend of Zelda: Skyward Sword",
    "Among the Clouds - The Legend of Zelda: Skyward Sword",
    "The Black Tornado - The Legend of Zelda: Skyward Sword",
    "The Second Omen - The Legend of Zelda: Skyward Sword",
    "What Happened to Zelda? - The Legend of Zelda: Skyward Sword",
    "The Spirit's Guidance - The Legend of Zelda: Skyward Sword",
    "Fi's Theme - The Legend of Zelda: Skyward Sword",
    "A Column of Light Emerges - The Legend of Zelda: Skyward Sword",
    "Determination - The Legend of Zelda: Skyward Sword",
    "Braving the Unknown - The Legend of Zelda: Skyward Sword",
    "House Theme - The Legend of Zelda: Skyward Sword",
    "The Bazaar - The Legend of Zelda: Skyward Sword",
    "Gliding with a Loftwing - The Legend of Zelda: Skyward Sword",
    "Seeing the Surface - The Legend of Zelda: Skyward Sword",
    "The Sealed Grounds - The Legend of Zelda: Skyward Sword",
    "Battle Theme - The Legend of Zelda: Skyward Sword",
    "The Sealed Temple - The Legend of Zelda: Skyward Sword",
    "Faron Woods - The Legend of Zelda: Skyward Sword",
    "Under Attack - The Legend of Zelda: Skyward Sword",
    "Encounter with a Kikwi - The Legend of Zelda: Skyward Sword",
    "Chasing after Machi - The Legend of Zelda: Skyward Sword",
    "Conversations with Kikwis - The Legend of Zelda: Skyward Sword",
    "The Kikwi Elder - The Legend of Zelda: Skyward Sword",
    "The Skyview Temple - The Legend of Zelda: Skyward Sword",
    "A Strong Foe - The Legend of Zelda: Skyward Sword",
    "Ghirahim, Demon Lord - The Legend of Zelda: Skyward Sword",
    "A Duel with Ghirahim - The Legend of Zelda: Skyward Sword",
    "Skyview Spring - The Legend of Zelda: Skyward Sword",
    "The Language of the Gods - The Legend of Zelda: Skyward Sword",
    "Fi's Translation - The Legend of Zelda: Skyward Sword",
    "The Statue of the Goddess - The Legend of Zelda: Skyward Sword",
    "A Small Island - The Legend of Zelda: Skyward Sword",
    "Eldin Volcano - The Legend of Zelda: Skyward Sword",
    "Meeting the Mogmas - The Legend of Zelda: Skyward Sword",
    "Beneath Eldin Volcano - The Legend of Zelda: Skyward Sword",
    "Tubert Tunnels In - The Legend of Zelda: Skyward Sword",
    "The Thrill Digger Digsite - The Legend of Zelda: Skyward Sword",
    "Thrill Digger - The Legend of Zelda: Skyward Sword",
    "The Earth Temple - The Legend of Zelda: Skyward Sword",
    "A Fierce Fight - The Legend of Zelda: Skyward Sword",
    "Boulder Trap - The Legend of Zelda: Skyward Sword",
    "Scaldera Appears - The Legend of Zelda: Skyward Sword",
    "Scaldera & Tentalus Battles - The Legend of Zelda: Skyward Sword",
    "An Emotional Vision - The Legend of Zelda: Skyward Sword",
    "Lanayru Desert - The Legend of Zelda: Skyward Sword",
    "The Lanayru Mining Facility - The Legend of Zelda: Skyward Sword",
    "Ghirahim's Assault - The Legend of Zelda: Skyward Sword",
    "Groose Swoops In - The Legend of Zelda: Skyward Sword",
    "Groose Gets Grounded - The Legend of Zelda: Skyward Sword",
    "Grooseland - The Legend of Zelda: Skyward Sword",
    "An Excerpt from the Ballad of the Goddess - The Legend of Zelda: Skyward Sword",
    "Learning the Ballad of the Goddess - The Legend of Zelda: Skyward Sword",
    "The Old Woman's Wisdom - The Legend of Zelda: Skyward Sword",
    "The Imprisoned Is Freed - The Legend of Zelda: Skyward Sword",
    "The Imprisoned Battle - The Legend of Zelda: Skyward Sword",
    "The Sealing Spike - The Legend of Zelda: Skyward Sword",
    "Scrapper Lives - The Legend of Zelda: Skyward Sword",
    "The Ballad of the Goddess (Harp Acc.) - The Legend of Zelda: Skyward Sword",
    "The Lumpy Pumpkin - The Legend of Zelda: Skyward Sword",
    "A Duet with Kina - The Legend of Zelda: Skyward Sword",
    "The Statue's Melody: Farore's Courage - The Legend of Zelda: Skyward Sword",
    "Learning Farore's Courage - The Legend of Zelda: Skyward Sword",
    "Farore's Courage (Harp Acc.) - The Legend of Zelda: Skyward Sword",
    "Farore's Silent Realm - The Legend of Zelda: Skyward Sword",
    "The Guardians Give Chase - The Legend of Zelda: Skyward Sword",
    "Inside the Great Tree - The Legend of Zelda: Skyward Sword",
    "Lake Floria - The Legend of Zelda: Skyward Sword",
    "Dragon's Den - The Legend of Zelda: Skyward Sword",
    "The Ancient Cistern - The Legend of Zelda: Skyward Sword",
    "The Cursed Bokoblins - The Legend of Zelda: Skyward Sword",
    "Moldarach & Koloktos Battles - The Legend of Zelda: Skyward Sword",
    "Koloktos Battle (Second Phase) - The Legend of Zelda: Skyward Sword",
    "Strengthening the Goddess Sword - The Legend of Zelda: Skyward Sword",
    "The Statue's Melody: Nayru's Wisdom - The Legend of Zelda: Skyward Sword",
    "Learning Nayru's Wisdom - The Legend of Zelda: Skyward Sword",
    "Nayru's Wisdom (Harp Acc.) - The Legend of Zelda: Skyward Sword",
    "Nayru's Silent Realm - The Legend of Zelda: Skyward Sword",
    "The Lanayru Sand Sea - The Legend of Zelda: Skyward Sword",
    "Sailing the Sand Sea - The Legend of Zelda: Skyward Sword",
    "Cart Ride - The Legend of Zelda: Skyward Sword",
    "The Pirate Stronghold - The Legend of Zelda: Skyward Sword",
    "Outside the Sandship - The Legend of Zelda: Skyward Sword",
    "Inside the Sandship - The Legend of Zelda: Skyward Sword",
    "The Statue's Melody: Din's Power - The Legend of Zelda: Skyward Sword",
    "Learning Din's Power - The Legend of Zelda: Skyward Sword",
    "Din's Power (Harp Acc.) - The Legend of Zelda: Skyward Sword",
    "Din's Silent Realm - The Legend of Zelda: Skyward Sword",
    "The Volcano Summit - The Legend of Zelda: Skyward Sword",
    "The Fire Sanctuary - The Legend of Zelda: Skyward Sword",
    "The Mogma Elder - The Legend of Zelda: Skyward Sword",
    "Conversing with Mogmas - The Legend of Zelda: Skyward Sword",
    "Runaway Plats - The Legend of Zelda: Skyward Sword",
    "The Gate of Time Activates - The Legend of Zelda: Skyward Sword",
    "Groose's Determination - The Legend of Zelda: Skyward Sword",
    "The Temple of Hylia - The Legend of Zelda: Skyward Sword",
    "Reuniting with Zelda - The Legend of Zelda: Skyward Sword",
    "The Master Sword's Ultimate Form - The Legend of Zelda: Skyward Sword",
    "Levias, Great Spirit of the Skies - The Legend of Zelda: Skyward Sword",
    "Ocular Parasite Bilocyte Battle - The Legend of Zelda: Skyward Sword",
    "The Imprisoned Takes Flight - The Legend of Zelda: Skyward Sword",
    "The Flooded Woods - The Legend of Zelda: Skyward Sword",
    "Tracking Down the Tadtones - The Legend of Zelda: Skyward Sword",
    "All Tadtones Accounted For - The Legend of Zelda: Skyward Sword",
    "An Excerpt from the Song of the Hero (Water Dragon) - The Legend of Zelda: Skyward Sword",
    "Infiltrating Eldin Volcano - The Legend of Zelda: Skyward Sword",
    "An Excerpt from the Song of the Hero (Fire Dragon) - The Legend of Zelda: Skyward Sword",
    "An Excerpt from the Song of the Hero (Thunder Dragon) - The Legend of Zelda: Skyward Sword",
    "An Excerpt from the Song of the Hero (Great Sky Spirit) - The Legend of Zelda: Skyward Sword",
    "The Song of the Hero - The Legend of Zelda: Skyward Sword",
    "The Song of the Hero (Harp Acc.) - The Legend of Zelda: Skyward Sword",
    "The Goddess's Silent Realm - The Legend of Zelda: Skyward Sword",
    "The Sky Keep Appears - The Legend of Zelda: Skyward Sword",
    "The Sky Keep - The Legend of Zelda: Skyward Sword",
    "A Wish to the Triforce - The Legend of Zelda: Skyward Sword",
    "A Return to the Surface - The Legend of Zelda: Skyward Sword",
    "The Horde Attacks - The Legend of Zelda: Skyward Sword",
    "Showdown with Ghirahim (Second Phase) - The Legend of Zelda: Skyward Sword",
    "The Resurrection Ritual - The Legend of Zelda: Skyward Sword",
    "Demise Restored - The Legend of Zelda: Skyward Sword",
    "Evil Incarnate Awakens - The Legend of Zelda: Skyward Sword",
    "Confronting Demise - The Legend of Zelda: Skyward Sword",
    "Demise Battle - The Legend of Zelda: Skyward Sword",
    "Demise Strikes - The Legend of Zelda: Skyward Sword",
    "Demise Is Eradicated - The Legend of Zelda: Skyward Sword",
    "Parting Ways with Fi - The Legend of Zelda: Skyward Sword",
    "Companionship Concluded - The Legend of Zelda: Skyward Sword",
    "Thank You, Master Link - The Legend of Zelda: Skyward Sword",
    "The Sheikah's Duty - The Legend of Zelda: Skyward Sword",
    "A Tale of Origins - The Legend of Zelda: Skyward Sword",
    "Staff Credits - The Legend of Zelda: Skyward Sword",
    "The Epilogue - The Legend of Zelda: Skyward Sword",
    "Bamboo Island - The Legend of Zelda: Skyward Sword",
    "Clean Cut - The Legend of Zelda: Skyward Sword",
    "Pumpkin Pull - The Legend of Zelda: Skyward Sword",
    "Dodoh's High Dive - The Legend of Zelda: Skyward Sword",
    "Bug Heaven - The Legend of Zelda: Skyward Sword",
    "Batreaux's Theme - The Legend of Zelda: Skyward Sword",
    "Batreaux's Transformation - The Legend of Zelda: Skyward Sword",
    "Mario Kart 7 Title Screen - Mario Kart 7",
    "Toad Circuit - Mario Kart 7",
    "Daisy Hills - Mario Kart 7",
    "Cheep Cheep Lagoon - Mario Kart 7",
    "Shy Guy Bazaar - Mario Kart 7",
    "Wuhu Loop - Mario Kart 7",
    "Music Park - Mario Kart 7",
    "Rock Rock Mountain - Mario Kart 7",
    "Piranha Plant Slide - Mario Kart 7",
    "Piranha Plant Slide (Underwater) - Mario Kart 7",
    "Wario Shipyard - Mario Kart 7",
    "Wario Shipyard (Underwater) - Mario Kart 7",
    "Neo Bowser City - Mario Kart 7",
    "DK Jungle - Mario Kart 7",
    "Rosalina's Ice World - Mario Kart 7",
    "Bowser's Castle - Mario Kart 7",
    "Rainbow Road - Mario Kart 7",
    "Rainbow Road (Lunar Surface) - Mario Kart 7",
    "Rainbow Road (Final Lap) - Mario Kart 7",
    "N64 Luigi Raceway - Mario Kart 7",
    "GBA Bowser Castle 1 - Mario Kart 7",
    "Wii Mushroom Gorge - Mario Kart 7",
    "DS Luigi's Mansion - Mario Kart 7",
    "N64 Koopa Beach - Mario Kart 7",
    "SNES Mario Circuit 2 - Mario Kart 7",
    "Wii Coconut Mall - Mario Kart 7",
    "DS Waluigi Pinball - Mario Kart 7",
    "N64 Kalimari Desert - Mario Kart 7",
    "DS DK Pass - Mario Kart 7",
    "GCN Daisy Cruiser - Mario Kart 7",
    "Wii Maple Treeway - Mario Kart 7",
    "Wii Koopa Cape - Mario Kart 7",
    "Wii Koopa Cape (Underwater) - Mario Kart 7",
    "GCN Dino Dino Jungle - Mario Kart 7",
    "DS Airship Fortress - Mario Kart 7",
    "SNES Rainbow Road - Mario Kart 7",
    "GBA Battle Course 1 - Mario Kart 7",
    "N64 Big Donut - Mario Kart 7",
    "DS Palm Shore - Mario Kart 7",
    "Honeybee Hive - Mario Kart 7",
    "Sherbet Rink - Mario Kart 7",
    "Wuhu Town - Mario Kart 7",
    "Selection Screen - Mario Kart 7",
    "Selection Screen (Wireless) - Mario Kart 7",
    "Selection Screen (Online) - Mario Kart 7",
    "Spectating - Mario Kart 7",
    "Mario Kart Channel - Mario Kart 7",
    "Super Star - Mario Kart 7",
    "Results Screen A - Mario Kart 7",
    "Results Screen B - Mario Kart 7",
    "Victory Lap - Mario Kart 7",
    "Trophy Theme A - Mario Kart 7",
    "Trophy Theme B - Mario Kart 7",
    "Trophy Theme C - Mario Kart 7",
    "Staff Credits - Mario Kart 7",
    "Mario Kart 8 Title Screen - Mario Kart 8",
    "Mario Kart Stadium - Mario Kart 8",
    "Water Park - Mario Kart 8",
    "Water Park (Underwater) - Mario Kart 8",
    "Sweet Sweet Canyon - Mario Kart 8",
    "Thwomp Ruins - Mario Kart 8",
    "Mario Circuit - Mario Kart 8",
    "Toad Harbor - Mario Kart 8",
    "Twisted Mansion - Mario Kart 8",
    "Shy Guy Falls - Mario Kart 8",
    "Sunshine Airport - Mario Kart 8",
    "Dolphin Shoals (Underwater) - Mario Kart 8",
    "Dolphin Shoals (Sea Depths) - Mario Kart 8",
    "Dolphin Shoals (On the Sea) - Mario Kart 8",
    "Electrodrome - Mario Kart 8",
    "Electrodrome (Antigravity Zone) - Mario Kart 8",
    "Mount Wario - Mario Kart 8",
    "Cloudtop Cruise - Mario Kart 8",
    "Cloudtop Cruise (Thunderclouds) - Mario Kart 8",
    "Bone-Dry Dunes - Mario Kart 8",
    "Bowser's Castle - Mario Kart 8",
    "Rainbow Road - Mario Kart 8",
    "Wii Moo Moo Meadows - Mario Kart 8",
    "GBA Mario Circuit - Mario Kart 8",
    "DS Cheep Cheep Beach - Mario Kart 8",
    "N64 Toad's Turnpike - Mario Kart 8",
    "GCN Dry Dry Desert - Mario Kart 8",
    "SNES Donut Plains 3 - Mario Kart 8",
    "N64 Royal Raceway - Mario Kart 8",
    "3DS DK Jungle - Mario Kart 8",
    "DS Wario Stadium - Mario Kart 8",
    "GCN Sherbet Land - Mario Kart 8",
    "3DS Music Park - Mario Kart 8",
    "N64 Yoshi Valley - Mario Kart 8",
    "DS Tick-Tock Clock - Mario Kart 8",
    "3DS Piranha Plant Slide - Mario Kart 8",
    "Wii Grumble Volcano - Mario Kart 8",
    "N64 Rainbow Road - Mario Kart 8",
    "GCN Yoshi Circuit - Mario Kart 8",
    "Excitebike Arena - Mario Kart 8",
    "Dragon Driftway - Mario Kart 8",
    "Mute City - Mario Kart 8",
    "F-Zero Results Screen - Mario Kart 8",
    "Wii Wario's Gold Mine - Mario Kart 8",
    "SNES Rainbow Road - Mario Kart 8",
    "Ice Ice Outpost - Mario Kart 8",
    "Hyrule Circuit - Mario Kart 8",
    "GCN Baby Park - Mario Kart 8",
    "GBA Cheese Land - Mario Kart 8",
    "Wild Woods - Mario Kart 8",
    "Animal Crossing (Spring) - Mario Kart 8",
    "Animal Crossing (Summer) - Mario Kart 8",
    "Animal Crossing (Autumn) - Mario Kart 8",
    "Animal Crossing (Winter) - Mario Kart 8",
    "Animal Crossing Results Screen - Mario Kart 8",
    "3DS Neo Bowser City - Mario Kart 8",
    "GBA Ribbon Road - Mario Kart 8",
    "Super Bell Subway - Mario Kart 8",
    "Super Bell Subway (Underground) - Mario Kart 8",
    "Big Blue - Mario Kart 8",
    "Battle Stadium - Mario Kart 8 Deluxe",
    "Sweet Sweet Kingdom - Mario Kart 8 Deluxe",
    "Dragon Palace - Mario Kart 8 Deluxe",
    "Lunar Colony - Mario Kart 8 Deluxe",
    "3DS Wuhu Town - Mario Kart 8 Deluxe",
    "GCN Luigi's Mansion - Mario Kart 8 Deluxe",
    "SNES Battle Course 1 - Mario Kart 8 Deluxe",
    "Urchin Underpass - Mario Kart 8 Deluxe",
    "Urchin Underpass (Now or Never!) - Mario Kart 8 Deluxe",
    "Selection Screen - Mario Kart 8",
    "Selection Screen (Online) - Mario Kart 8",
    "Selection Screen (Wireless) - Mario Kart 8 Deluxe",
    "Spectating - Mario Kart 8",
    "Mario Kart TV - Mario Kart 8",
    "Super Star - Mario Kart 8",
    "Results Screen A - Mario Kart 8",
    "Results Screen B - Mario Kart 8",
    "Current Standings - Mario Kart 8",
    "Trophy Theme A - Mario Kart 8",
    "Trophy Theme B - Mario Kart 8",
    "Staff Credits - Mario Kart 8",
    "Tour Paris Promenade - Mario Kart 8 Deluxe",
    "3DS Toad Circuit - Mario Kart 8 Deluxe",
    "N64 Choco Mountain - Mario Kart 8 Deluxe",
    "Wii Coconut Mall - Mario Kart 8 Deluxe",
    "Tour Tokyo Blur - Mario Kart 8 Deluxe",
    "DS Shroom Ridge - Mario Kart 8 Deluxe",
    "GBA Sky Garden - Mario Kart 8 Deluxe",
    "Ninja Hideaway - Mario Kart 8 Deluxe",
    "Tour New York Minute - Mario Kart 8 Deluxe",
    "SNES Mario Circuit 3 - Mario Kart 8 Deluxe",
    "N64 Kalimari Desert - Mario Kart 8 Deluxe",
    "Tour Sydney Sprint - Mario Kart 8 Deluxe",
    "GBA Snow Land - Mario Kart 8 Deluxe",
    "Wii Mushroom Gorge - Mario Kart 8 Deluxe",
    "Sky-High Sundae - Mario Kart 8 Deluxe",
    "Tour London Loop - Mario Kart 8 Deluxe",
    "GBA Boo Lake - Mario Kart 8 Deluxe",
    "3DS Rock Rock Mountain - Mario Kart 8 Deluxe",
    "Wii Maple Treeway - Mario Kart 8 Deluxe",
    "Tour Berlin Byways - Mario Kart 8 Deluxe",
    "DS Peach Gardens - Mario Kart 8 Deluxe",
    "Merry Mountain - Mario Kart 8 Deluxe",
    "3DS Rainbow Road - Mario Kart 8 Deluxe",
    "3DS Rainbow Road (Lunar Surface) - Mario Kart 8 Deluxe",
    "Tour Amsterdam Drift - Mario Kart 8 Deluxe",
    "GBA Riverside Park - Mario Kart 8 Deluxe",
    "Wii DK Summit - Mario Kart 8 Deluxe",
    "Yoshi's Island - Mario Kart 8 Deluxe",
    "Results (Yoshi's Island) - Mario Kart 8 Deluxe",
    "Tour Bangkok Rush - Mario Kart 8 Deluxe",
    "DS Mario Circuit - Mario Kart 8 Deluxe",
    "GCN Waluigi Stadium - Mario Kart 8 Deluxe",
    "Tour Singapore Speedway - Mario Kart 8 Deluxe",
    "Tour Singapore Speedway (Chinatown) - Mario Kart 8 Deluxe",
    "Tour Athens Dash - Mario Kart 8 Deluxe",
    "GCN Daisy Cruiser - Mario Kart 8 Deluxe",
    "Wii Moonview Highway - Mario Kart 8 Deluxe",
    "Wii Moonview Highway (Straightaway) - Mario Kart 8 Deluxe",
    "Squeaky Clean Sprint - Mario Kart 8 Deluxe",
    "Tour Los Angeles Laps - Mario Kart 8 Deluxe",
    "GBA Sunset Wilds - Mario Kart 8 Deluxe",
    "Wii Koopa Cape - Mario Kart 8 Deluxe",
    "Wii Koopa Cape (Downstream) - Mario Kart 8 Deluxe",
    "Wii Koopa Cape (Underwater) - Mario Kart 8 Deluxe",
    "Tour Vancouver Velocity - Mario Kart 8 Deluxe",
    "Tour Rome Avanti - Mario Kart 8 Deluxe",
    "GCN DK Mountain - Mario Kart 8 Deluxe",
    "Wii Daisy Circuit - Mario Kart 8 Deluxe",
    "Piranha Plant Cove - Mario Kart 8 Deluxe",
    "Tour Madrid Drive - Mario Kart 8 Deluxe",
    "Tour Madrid Drive (Museum) - Mario Kart 8 Deluxe",
    "Tour Madrid Drive (Stadium) - Mario Kart 8 Deluxe",
    "3DS Rosalina's Ice World - Mario Kart 8 Deluxe",
    "SNES Bowser Castle 3 - Mario Kart 8 Deluxe",
    "Wii Rainbow Road - Mario Kart 8 Deluxe",
    "Staff Credits (Booster Course Pass) - Mario Kart 8 Deluxe",
    "Splattack! / Squid Squad - Splatoon",
    "Ink or Sink / Squid Squad - Splatoon",
    "Seaskape / Squid Squad - Splatoon",
    "Kraken Up / Squid Squad - Splatoon",
    "Metalopod / Squid Squad - Splatoon",
    "Shellfie / Chirpy Chips - Splatoon",
    "Split & Splat / Chirpy Chips - Splatoon",
    "Hooked / Hightide Era - Splatoon",
    "Sucker Punch / Hightide Era - Splatoon",
    "Now or Never! / Squid Squad - Splatoon",
    "Battle Victory - Splatoon",
    "Battle Defeat - Splatoon",
    "Splattack! (Jam Sesh) / Squid Squad - Splatoon",
    "Slip into Inkopolis - Splatoon",
    "Start Fresh - Splatoon",
    "The Plaza - Splatoon",
    "Inkopolis News / Squid Sisters - Splatoon",
    "Inkopolis Lobby - Splatoon",
    "Dubble Bath / Bob Dub - Splatoon",
    "Bomb Rush Blush / Callie - Splatoon",
    "Tide Goes Out / Marie - Splatoon",
    "Lookin' Fresh / DJ Lee Fish - Splatoon",
    "Show Yourself - Splatoon",
    "City of Color / Squid Sisters - Splatoon",
    "Ink Me Up / Squid Sisters - Splatoon",
    "Now or Never! / Squid Sisters - Splatoon",
    "Cap'n Cuttlefish's Theme - Splatoon",
    "Octo Valley - Splatoon",
    "Eight-Legged Advance / Turquoise October - Splatoon",
    "Tentacular Circus / Turquoise October - Splatoon",
    "Cephaloparade / Turquoise October - Splatoon",
    "Inkstrike Shuffle / Turquoise October - Splatoon",
    "Octoling Rendezvous / Turquoise October - Splatoon",
    "Octoweaponry / Turquoise October - Splatoon",
    "The Sunken Scrolls - Splatoon",
    "I Am Octavio / DJ Octavio - Splatoon",
    "Calamari Inkantation / Squid Sisters - Splatoon",
    "Maritime Memory / Squid Sisters - Splatoon",
    "Opening - The Legend of Zelda: Breath of the Wild",
    "A Sheikah Tower Emerges - The Legend of Zelda: Breath of the Wild",
    "The Beast in the Castle - The Legend of Zelda: Breath of the Wild",
    "Sheikah Tower - The Legend of Zelda: Breath of the Wild",
    "The Shrine's Trial - The Legend of Zelda: Breath of the Wild",
    "Battle (Shrine) - Original Soundtrack Ver. - The Legend of Zelda: Breath of the Wild",
    "The Great Plateau - The Legend of Zelda: Breath of the Wild",
    "In the Guardian's Sights - The Legend of Zelda: Breath of the Wild",
    "The Temple of Time - The Legend of Zelda: Breath of the Wild",
    "The Old Man's Secret - The Legend of Zelda: Breath of the Wild",
    "One Hundred Years Ago - The Legend of Zelda: Breath of the Wild",
    "King Rhoam's Plea - The Legend of Zelda: Breath of the Wild",
    "Overworld (Day) - The Legend of Zelda: Breath of the Wild",
    "Overworld (Battle) - Original Soundtrack Ver. - The Legend of Zelda: Breath of the Wild",
    "Galloping (Day) - The Legend of Zelda: Breath of the Wild",
    "Stone Talus Battle - The Legend of Zelda: Breath of the Wild",
    "Kakariko Village - The Legend of Zelda: Breath of the Wild",
    "Impa Speaks - The Legend of Zelda: Breath of the Wild",
    "A Legendary Tale - The Legend of Zelda: Breath of the Wild",
    "Hateno Village - The Legend of Zelda: Breath of the Wild",
    "Hateno Ancient Tech Lab - The Legend of Zelda: Breath of the Wild",
    "Restoring a Great Fairy's Power - The Legend of Zelda: Breath of the Wild",
    "Great Fairy Fountain - The Legend of Zelda: Breath of the Wild",
    "Overworld (Night) - The Legend of Zelda: Breath of the Wild",
    "Kass's Theme - The Legend of Zelda: Breath of the Wild",
    "Kass: Songs of Shrines - The Legend of Zelda: Breath of the Wild",
    "The Stables - The Legend of Zelda: Breath of the Wild",
    "Kass: Legendary Verse - The Legend of Zelda: Breath of the Wild",
    "Minigame: Mounted Archery - The Legend of Zelda: Breath of the Wild",
    "Galloping (Night) - The Legend of Zelda: Breath of the Wild",
    "Shrines of Blessings - The Legend of Zelda: Breath of the Wild",
    "Hinox Battle - The Legend of Zelda: Breath of the Wild",
    "By the Water - The Legend of Zelda: Breath of the Wild",
    "Mind the Flowers! - The Legend of Zelda: Breath of the Wild",
    "Meeting Sidon - The Legend of Zelda: Breath of the Wild",
    "Sidon's Theme - The Legend of Zelda: Breath of the Wild",
    "Zora's Domain - The Legend of Zelda: Breath of the Wild",
    "Vah Ruta, Divine Beast of Water - The Legend of Zelda: Breath of the Wild",
    "Battle with Divine Beast Vah Ruta - The Legend of Zelda: Breath of the Wild",
    "An Accord with Sidon - The Legend of Zelda: Breath of the Wild",
    "Exploring Divine Beast Vah Ruta - The Legend of Zelda: Breath of the Wild",
    "Battle Inside the Divine Beast - The Legend of Zelda: Breath of the Wild",
    "A Blight Ganon Appears - The Legend of Zelda: Breath of the Wild",
    "Battle with Waterblight Ganon - The Legend of Zelda: Breath of the Wild",
    "A Heart Container Appears - The Legend of Zelda: Breath of the Wild",
    "Reuniting with Mipha - The Legend of Zelda: Breath of the Wild",
    "A Divine Beast's Majesty - The Legend of Zelda: Breath of the Wild",
    "Mipha and the Divine Beast - The Legend of Zelda: Breath of the Wild",
    "Overworld (Fiery Heat) - The Legend of Zelda: Breath of the Wild",
    "Lava Landscape - The Legend of Zelda: Breath of the Wild",
    "Miner's Melody - The Legend of Zelda: Breath of the Wild",
    "Vah Rudania, Divine Beast of Fire - The Legend of Zelda: Breath of the Wild",
    "Goron City - The Legend of Zelda: Breath of the Wild",
    "The Abandoned North Mine - The Legend of Zelda: Breath of the Wild",
    "Meeting Yunobo - The Legend of Zelda: Breath of the Wild",
    "Battle with Divine Beast Vah Rudania - The Legend of Zelda: Breath of the Wild",
    "Yunobo Creates an Opportunity - The Legend of Zelda: Breath of the Wild",
    "Exploring Divine Beast Vah Rudania - The Legend of Zelda: Breath of the Wild",
    "Battle with Fireblight Ganon - The Legend of Zelda: Breath of the Wild",
    "Reuniting with Daruk - The Legend of Zelda: Breath of the Wild",
    "Daruk and the Divine Beast - The Legend of Zelda: Breath of the Wild",
    "Kilton - The Legend of Zelda: Breath of the Wild",
    "Overworld (Freezing) - The Legend of Zelda: Breath of the Wild",
    "Caves - The Legend of Zelda: Breath of the Wild",
    "Vah Medoh, Divine Beast of Wind - The Legend of Zelda: Breath of the Wild",
    "Rito Village - The Legend of Zelda: Breath of the Wild",
    "Recovered Memory: Revali's Flap - The Legend of Zelda: Breath of the Wild",
    "The Flight Range - The Legend of Zelda: Breath of the Wild",
    "Meeting Teba - The Legend of Zelda: Breath of the Wild",
    "Minigame: Flight Range - The Legend of Zelda: Breath of the Wild",
    "Battle with Divine Beast Vah Medoh - The Legend of Zelda: Breath of the Wild",
    "Teba's Encouragement - The Legend of Zelda: Breath of the Wild",
    "Exploring Divine Beast Vah Medoh - The Legend of Zelda: Breath of the Wild",
    "Battle with Windblight Ganon - The Legend of Zelda: Breath of the Wild",
    "Reuniting with Revali - The Legend of Zelda: Breath of the Wild",
    "Revali and the Divine Beast - The Legend of Zelda: Breath of the Wild",
    "Pondo's Lodge - The Legend of Zelda: Breath of the Wild",
    "Minigame: Snowball Bowling - The Legend of Zelda: Breath of the Wild",
    "Notts's Song - The Legend of Zelda: Breath of the Wild",
    "Warbler's Nest Melody - The Legend of Zelda: Breath of the Wild",
    "Kass's Theme (Song of the Hero Ver.) - The Legend of Zelda: Breath of the Wild",
    "Rito Village (Kass and the Five Sisters Ver.) - The Legend of Zelda: Breath of the Wild",
    "Minigame: Bird-Man Research Study - The Legend of Zelda: Breath of the Wild",
    "Palu Wasteland - The Legend of Zelda: Breath of the Wild",
    "Overworld (Scorching Desert) - The Legend of Zelda: Breath of the Wild",
    "Vah Naboris, Divine Beast of Thunder - The Legend of Zelda: Breath of the Wild",
    "Kara Kara Bazaar - The Legend of Zelda: Breath of the Wild",
    "Gerudo Town - The Legend of Zelda: Breath of the Wild",
    "Meeting Riju - The Legend of Zelda: Breath of the Wild",
    "The Yiga Clan Hideout - The Legend of Zelda: Breath of the Wild",
    "Proud Master Kohga - The Legend of Zelda: Breath of the Wild",
    "Battle with Master Kohga - The Legend of Zelda: Breath of the Wild",
    "Recovered Memory: Urbosa's Hand - The Legend of Zelda: Breath of the Wild",
    "Vah Naboris Lookout Post - The Legend of Zelda: Breath of the Wild",
    "Battle with Divine Beast Vah Naboris - The Legend of Zelda: Breath of the Wild",
    "Riju's Trust - The Legend of Zelda: Breath of the Wild",
    "Exploring Divine Beast Vah Naboris - The Legend of Zelda: Breath of the Wild",
    "Battle with Thunderblight Ganon - The Legend of Zelda: Breath of the Wild",
    "Reuniting with Urbosa - The Legend of Zelda: Breath of the Wild",
    "Urbosa and the Divine Beast - The Legend of Zelda: Breath of the Wild",
    "Challenging the Champ - The Legend of Zelda: Breath of the Wild",
    "Minigame: Sand-Seal Race - The Legend of Zelda: Breath of the Wild",
    "Sand-Seal Race: Win - The Legend of Zelda: Breath of the Wild",
    "Minigame: Contest of Endurance - The Legend of Zelda: Breath of the Wild",
    "Molduga Battle - The Legend of Zelda: Breath of the Wild",
    "Tarrey Town - The Legend of Zelda: Breath of the Wild",
    "Trothed in Tarrey Town - The Legend of Zelda: Breath of the Wild",
    "Ruins - The Legend of Zelda: Breath of the Wild",
    "The Lost Woods - The Legend of Zelda: Breath of the Wild",
    "Korok Forest - The Legend of Zelda: Breath of the Wild",
    "Meeting the Deku Tree - The Legend of Zelda: Breath of the Wild",
    "Master Sword Obtained - The Legend of Zelda: Breath of the Wild",
    "Memories of the Sword - The Legend of Zelda: Breath of the Wild",
    "Tree and Sword: Words of Wisdom - The Legend of Zelda: Breath of the Wild",
    "Akkala Ancient Tech Lab - The Legend of Zelda: Breath of the Wild",
    "Lurelin Village - The Legend of Zelda: Breath of the Wild",
    "Malanya's Spring - The Legend of Zelda: Breath of the Wild",
    "The Lord of the Mountain - The Legend of Zelda: Breath of the Wild",
    "Naydra, Possessed - The Legend of Zelda: Breath of the Wild",
    "Attendants to the Sacred Springs - The Legend of Zelda: Breath of the Wild",
    "Omen of the Blood Moon - The Legend of Zelda: Breath of the Wild",
    "The Blood Moon - The Legend of Zelda: Breath of the Wild",
    "Memory Recovered - The Legend of Zelda: Breath of the Wild",
    "Recovered Memory: Resolve and Grief - The Legend of Zelda: Breath of the Wild",
    "Recovered Memory: Blades of the Yiga - The Legend of Zelda: Breath of the Wild",
    "Recovered Memory: A Premonition - The Legend of Zelda: Breath of the Wild",
    "Recovered Memory: Silent Princess - The Legend of Zelda: Breath of the Wild",
    "Recovered Memory: Father and Daughter - The Legend of Zelda: Breath of the Wild",
    "Recovered Memory: Slumbering Power - The Legend of Zelda: Breath of the Wild",
    "Recovered Memory: To Mount Lanayru - The Legend of Zelda: Breath of the Wild",
    "Recovered Memory: Return of Calamity Ganon - The Legend of Zelda: Breath of the Wild",
    "Recovered Memory: Despair - The Legend of Zelda: Breath of the Wild",
    "Recovered Memory: Zelda's Awakening - The Legend of Zelda: Breath of the Wild",
    "Zelda's Behest - The Legend of Zelda: Breath of the Wild",
    "Hyrule Castle Town Ruins - The Legend of Zelda: Breath of the Wild",
    "Guardian Battle - The Legend of Zelda: Breath of the Wild",
    "Ganon's Roar at Hyrule Castle - The Legend of Zelda: Breath of the Wild",
    "Hyrule Castle - The Legend of Zelda: Breath of the Wild",
    "Calamity Ganon Appears - The Legend of Zelda: Breath of the Wild",
    "The Champions' Power Mobilized - The Legend of Zelda: Breath of the Wild",
    "Battle with Calamity Ganon (First Form) - The Legend of Zelda: Breath of the Wild",
    "Battle with Calamity Ganon (Second Form) - The Legend of Zelda: Breath of the Wild",
    "Dark Beast Ganon Appears - The Legend of Zelda: Breath of the Wild",
    "Battle with Dark Beast Ganon - The Legend of Zelda: Breath of the Wild",
    "Do You Really Remember Me? - The Legend of Zelda: Breath of the Wild",
    "Staff Credits - The Legend of Zelda: Breath of the Wild",
    "Epilogue - The Legend of Zelda: Breath of the Wild",
    "Trial of the Sword Conquered - The Legend of Zelda: Breath of the Wild",
    "Tree and Sword: Words of Praise - The Legend of Zelda: Breath of the Wild",
    "Kass: The Song of the Swordsman - The Legend of Zelda: Breath of the Wild",
    "A Monument Appears - The Legend of Zelda: Breath of the Wild",
    "Kass: The Champions' Ballad 1 - The Legend of Zelda: Breath of the Wild",
    "Shrine of a Champion - The Legend of Zelda: Breath of the Wild",
    "Mipha and Sidon - The Legend of Zelda: Breath of the Wild",
    "Kass: Champion Mipha's Song - The Legend of Zelda: Breath of the Wild",
    "Kass: The Champions' Ballad 2 - The Legend of Zelda: Breath of the Wild",
    "Revali, Solitary Warrior - The Legend of Zelda: Breath of the Wild",
    "Kass: Champion Revali's Song - The Legend of Zelda: Breath of the Wild",
    "Kass: The Champions' Ballad 3 - The Legend of Zelda: Breath of the Wild",
    "Daruk, the Stalwart - The Legend of Zelda: Breath of the Wild",
    "Kass: Champion Daruk's Song - The Legend of Zelda: Breath of the Wild",
    "Kass: The Champions' Ballad 4 - The Legend of Zelda: Breath of the Wild",
    "Urbosa, the Magnificent - The Legend of Zelda: Breath of the Wild",
    "Kass: Champion Urbosa's Song - The Legend of Zelda: Breath of the Wild",
    "The Final Trial - The Legend of Zelda: Breath of the Wild",
    "The Monk Maz Koshia - The Legend of Zelda: Breath of the Wild",
    "Memory Recovered (The Champions' Ballad Ver.) - The Legend of Zelda: Breath of the Wild",
    "The Princess and the Champions - The Legend of Zelda: Breath of the Wild",
    "The Champions' Ballad: Finale - The Legend of Zelda: Breath of the Wild",
    "A Picture-Perfect Spot - The Legend of Zelda: Breath of the Wild",
    "The Champions' Ballad - The Legend of Zelda: Breath of the Wild",
    "2014 E3 Trailer - The Legend of Zelda: Breath of the Wild",
    "2017 Nintendo Switch Presentation Trailer - The Legend of Zelda: Breath of the Wild",
    "Opening / Wet Floor - Splatoon 2",
    "Inkoming! / Wet Floor - Splatoon 2",
    "Rip Entry / Wet Floor  - Splatoon 2",
    "Undertow / Wet Floor - Splatoon 2",
    "Don't Slip / Wet Floor - Splatoon 2",
    "Endolphin Surge / Wet Floor - Splatoon 2",
    "Shipwreckin' / Bottom Feeders - Splatoon 2",
    "Fins & Fiddles / Bottom Feeders - Splatoon 2",
    "Seafoam Shanty / Bottom Feeders - Splatoon 2",
    "Broken Coral / Ink Theory - Splatoon 2",
    "Riptide Rupture / Ink Theory - Splatoon 2",
    "Blitz It! / Chirpy Chips - Splatoon 2",
    "Wave Prism / Chirpy Chips - Splatoon 2",
    "Seasick / Diss-Pair - Splatoon 2",
    "Kinetosis / Diss-Pair - Splatoon 2",
    "Chopscrewey / SashiMori - Splatoon 2",
    "Entropical / SashiMori - Splatoon 2",
    "Now or Never! / Wet Floor - Splatoon 2",
    "Turf Master / Wet Floor - Splatoon 2",
    "Ink Another Day / Wet Floor - Splatoon 2",
    "Inkoming! (Cloud Edit) / Wet Floor - Splatoon 2",
    "Slip into Inkopolis Square - Splatoon 2",
    "Getting Squared Away - Splatoon 2",
    "Inkopolis Square - Splatoon 2",
    "Without a Dop Doubt - Splatoon 2",
    "The Shoal - Splatoon 2",
    "Dubble Bath (DIY Remix) / Bob Dub - Splatoon 2",
    "New You / DJ Real Sole - Splatoon 2",
    "Happy Little Workers / Grizzco - Splatoon 2",
    "Surge & Submerge / ω-3 - Splatoon 2",
    "Deluge Dirge / ω-3 - Splatoon 2",
    "Fishing Frenzy / ω-3 - Splatoon 2",
    "Frantic Aspic / ω-3 - Splatoon 2",
    "Ever Further / Grizzco - Splatoon 2",
    "Inkopolis News / Off the Hook - Splatoon 2",
    "Color Pulse / Off the Hook - Splatoon 2",
    "Commence the Fest / Off the Hook - Splatoon 2",
    "Ebb & Flow / Off the Hook - Splatoon 2",
    "Acid Hues / Off the Hook - Splatoon 2",
    "Muck Warfare / Off the Hook - Splatoon 2",
    "Now or Never! / Off the Hook - Splatoon 2",
    "Fest Zest / Off the Hook - Splatoon 2",
    "Party's Over / Off the Hook - Splatoon 2",
    "Low Tide - Splatoon 2",
    "Octo Canyon / Turquoise October - Splatoon 2",
    "Octo Eight-Step / Turquoise October - Splatoon 2",
    "The Girl from Inkopolis / Turquoise October - Splatoon 2",
    "Buoyant Boogie / Turquoise October - Splatoon 2",
    "Shooting Starfish / Turquoise October - Splatoon 2",
    "Boss Entrance / Turquoise October - Splatoon 2",
    "Octarmaments / Turquoise October - Splatoon 2",
    "Bomb Rush Blush / DJ Octavio feat. Callie - Splatoon 2",
    "Tidal Rush / DJ Octavio feat. Callie vs. Marie - Splatoon 2",
    "Spicy Calamari Inkantation / Squid Sisters - Splatoon 2",
    "Fresh Start / Squid Sisters - Splatoon 2",
    "Octroduction - Splatoon 2",
    "Cap'n Cuttlefish's Theme (Octo) / Character Creation - Splatoon 2",
    "#5 thirsty / Dedf1sh - Splatoon 2",
    "Deepsea Metro Central Station - Splatoon 2",
    "Telephone's Theme - Splatoon 2",
    "Inside Deepsea Metro - Splatoon 2",
    "#0 shell / Dedf1sh - Splatoon 2",
    "#1 progress / Dedf1sh - Splatoon 2",
    "#6 frisk / Dedf1sh - Splatoon 2",
    "#4 dunno / Dedf1sh - Splatoon 2",
    "#2 ripped / Dedf1sh - Splatoon 2",
    "#9 party / Dedf1sh - Splatoon 2",
    "#8 regret / Dedf1sh - Splatoon 2",
    "#14 crush / Dedf1sh - Splatoon 2",
    "#13 shade / Dedf1sh - Splatoon 2",
    "#16 salty / Dedf1sh - Splatoon 2",
    "#12 awake / Dedf1sh - Splatoon 2",
    "#11 above / Dedf1sh - Splatoon 2",
    "#19 bless / Dedf1sh - Splatoon 2",
    "All the Thangs - Splatoon 2",
    "Nasty Majesty / Off the Hook - Splatoon 2",
    "Shark Bytes / Off the Hook - Splatoon 2",
    "Splattack! (Octo) / Dedf1sh - Splatoon 2",
    "Reaching the Surface - Splatoon 2",
    "Commander Tartar's Actual Theme - Splatoon 2",
    "The Plan - Splatoon 2",
    "Here Comes Ultimate Doom / Off the Hook - Splatoon 2",
    "Fly Octo Fly - Ebb & Flow (Octo) / Off the Hook - Splatoon 2",
    "It's Over - Splatoon 2",
    "Mic Drop - Splatoon 2",
    "Into the Light / Off the Hook - Splatoon 2",
    "#$@%* Dudes Be #$@%* Sleepin' (Live) / Pearl - Splatoon 2",
    "Ebb&FlowDemo.frsh (Sketch) / Marina - Splatoon 2",
    "Title Screen - Super Mario Odyssey",
    "The Skies above Peach's Castle - Super Mario Odyssey",
    "Meeting Cappy - Super Mario Odyssey",
    "Bonneton - Super Mario Odyssey",
    "Top-Hat Tower - Super Mario Odyssey",
    "Here Come the Broodals - Super Mario Odyssey",
    "Battling the Broodals - Super Mario Odyssey",
    "Fossil Falls - Super Mario Odyssey",
    "Fossil Falls - 8-Bit - Super Mario Odyssey",
    "Capturing a T-Rex - Super Mario Odyssey",
    "Battling Madame Broode - Super Mario Odyssey",
    "Mario Meets the World: The Odyssey's Maiden Voyage - Super Mario Odyssey",
    "Tostarena Ruins - Super Mario Odyssey",
    "Tostarena Ruins - 8-Bit - Super Mario Odyssey",
    "Inside the Inverted Pyramid - Super Mario Odyssey",
    "Inside the Inverted Pyramid - 8-Bit - Super Mario Odyssey",
    "Tostarena Nights - Super Mario Odyssey",
    "Tostarena Nights - 8-Bit - Super Mario Odyssey",
    "Crazy Cap - Super Mario Odyssey",
    "Yay! Slots Away! - Super Mario Odyssey",
    "Jaxi Joyride - Super Mario Odyssey",
    "Knocking Out Knucklotec - Super Mario Odyssey",
    "Tostarena Town - Super Mario Odyssey",
    "Traversing Tostarena - Super Mario Odyssey",
    "Steam Gardens - Super Mario Odyssey",
    "Steam Gardens - 8-Bit - Super Mario Odyssey",
    "Steam Gardens: Sherm Sector - Super Mario Odyssey",
    "Tusseling with Torkdrift - Super Mario Odyssey",
    "Above the Clouds - Super Mario Odyssey",
    "Lake Lamode: Underwater Passage - Super Mario Odyssey",
    "Lake Lamode - Super Mario Odyssey",
    "Lake Lamode - 8-Bit - Super Mario Odyssey",
    "Lake Lamode: Surface - Super Mario Odyssey",
    "Caves - Super Mario Odyssey",
    "Bumping into Bowser's Flying Battleship - Super Mario Odyssey",
    "Bowser's Entrance - Super Mario Odyssey",
    "Battling Bowser 1: Showdown in Nimbus Arena - Super Mario Odyssey",
    "Bowser's Bombardment: The Odyssey Goes Down - Super Mario Odyssey",
    "Cappy Gets Capnapped - Super Mario Odyssey",
    "The Forgotten Isle - Super Mario Odyssey",
    "The Forgotten Isle - 8-Bit - Super Mario Odyssey",
    "New Donk Nights - Super Mario Odyssey",
    "New Donk Nights: City Hall - Super Mario Odyssey",
    "Menacing Mechawiggler - Super Mario Odyssey",
    "New Donk City - Super Mario Odyssey",
    "RC Car Challenge - Super Mario Odyssey",
    "The Band's All Here: Super Mario Bros. Ground BGM - Super Mario Odyssey",
    "Pausing by the Poolside - Super Mario Odyssey",
    "Underground Power Plant - Super Mario Odyssey",
    "Underground Power Plant - 8-Bit - Super Mario Odyssey",
    "Jump Up, Super Star! - New Donk City Festival - Super Mario Odyssey",
    "Jump Up, Super Star! - New Donk City Festival - 8-Bit - Super Mario Odyssey",
    "Projection Room: Aboveground - Super Mario Odyssey",
    "Jump Up, Super Star! - Music Box Ver. - Super Mario Odyssey",
    "To the Next Kingdom - Super Mario Odyssey",
    "Shiveria Town - Super Mario Odyssey",
    "Ice Caves - Super Mario Odyssey",
    "Snowline Circuit - Super Mario Odyssey",
    "The Bound Bowl Grand Prix - Super Mario Odyssey",
    "Race Results - Super Mario Odyssey",
    "Shiveria Snowscape - Super Mario Odyssey",
    "Koopa's Trace-Walking - Super Mario Odyssey",
    "Bubblaine - Super Mario Odyssey",
    "Bubblaine - 8-Bit - Super Mario Odyssey",
    "Bubblaine: Underwater - Super Mario Odyssey",
    "Running through Rolling Canyon - Super Mario Odyssey",
    "Bubblaine Gloom - Super Mario Odyssey",
    "Battling Brigadier Mollusque-Lanceur III, Dauphin of Bubblaine - Super Mario Odyssey",
    "Battling Brigadier Mollusque-Lanceur III, Dauphin of Bubblaine - 8-Bit - Super Mario Odyssey",
    "A Relaxing Dance - Super Mario Odyssey",
    "Mount Volbono - Super Mario Odyssey",
    "Mount Volbono - 8-Bit - Super Mario Odyssey",
    "Peronza Plaza - Super Mario Odyssey",
    "Run, Jump, Throw! 1 - Super Mario Odyssey",
    "Run, Jump, Throw! 2 - Super Mario Odyssey",
    "Run, Jump, Throw! 2 - 8-Bit - Super Mario Odyssey",
    "Cooking Cookatiel - Super Mario Odyssey",
    "Challenges in Another World - Super Mario Odyssey",
    "Eye to Eye with the Ruined Dragon - Super Mario Odyssey",
    "Rebuffing the Ruined Dragon - Super Mario Odyssey",
    "Bowser's Castle - Super Mario Odyssey",
    "Bowser's Castle - 8-Bit - Super Mario Odyssey",
    "Bowser's Castle: Main Courtyard Entrance - Super Mario Odyssey",
    "Bowser's Castle: Main Courtyard - Super Mario Odyssey",
    "Bowser, Bound for the Moon - Super Mario Odyssey",
    "Wrecking RoboBrood - Super Mario Odyssey",
    "Odyssey to the Moon - Super Mario Odyssey",
    "Honeylune Ridge - Super Mario Odyssey",
    "Honeylune Ridge - 8-Bit - Super Mario Odyssey",
    "Underground Moon Caverns - Super Mario Odyssey",
    "The Wedding Hall - Super Mario Odyssey",
    "The Big Stare Down - Super Mario Odyssey",
    "Battling Bowser 2: The Final Fight - Super Mario Odyssey",
    "Honeylune Ridge: Collapse - Super Mario Odyssey",
    "Honeylune Ridge: Collapse - 8-Bit - Super Mario Odyssey",
    "Break Free (Lead the Way) - Super Mario Odyssey",
    "The Super Mario Odyssey Crew - Super Mario Odyssey",
    "Peach's Castle Outskirts - Super Mario Odyssey",
    "Peach's Castle - Super Mario Odyssey",
    "The Farthest Lullaby - Fossil Falls - Music Box Ver. - Super Mario Odyssey",
    "Jump Up, Super Star! - Super Mario Odyssey",
    "Break Free (Lead the Way) - 8-Bit - Super Mario Odyssey",
    "Twinkle☆Stars - Kirby Star Allies",
    "Let's Be Friends♡ - Kirby Star Allies",
    "Select File - Kirby Star Allies",
    "A Rude Awakening - Kirby Star Allies",
    "World of Peace: Dream Land - Kirby Star Allies",
    "Green Gardens - Kirby Star Allies",
    "Donut Dome - Kirby Star Allies",
    "Honey Hill - Kirby Star Allies",
    "Friend Puzzle Solving - Kirby Star Allies",
    "Invincible - Kirby Star Allies",
    "A Battle of Friends and Bonds - Kirby Star Allies",
    "Plaza (Kirby's Blowout Blast) - Kirby Star Allies",
    "Shooting (Kirby's Dream Land) - Kirby Star Allies",
    "Boss Theme (Kirby's Blowout Blast) - Kirby Star Allies",
    "For the Brave - Kirby Star Allies",
    "Macho of Dedede - Kirby Star Allies",
    "Sudden Happy Ending - Kirby Star Allies",
    "Secret Area: HAL Room (Dedede's Drum Dash Deluxe) - Kirby Star Allies",
    "World of Miracles: Planet Popstar - Kirby Star Allies",
    "Friendly Field - Kirby Star Allies",
    "Reef Resort - Kirby Star Allies",
    "Echo's Edge - Kirby Star Allies",
    "Nature's Navel - Kirby Star Allies",
    "Vegetable Valley (Kirby: Nightmare in Dream Land) - Kirby Star Allies",
    "Orange Ocean (Kirby: Nightmare in Dream Land) - Kirby Star Allies",
    "Vs. Robo Dedede: In Crisis (Kirby's Dream Course) - Kirby Star Allies",
    "Cloudy Park (Kirby's Dream Land 2) - Kirby Star Allies",
    "Red Canyon: Stage Select (Kirby's Dream Land 2) - Kirby Star Allies",
    "Sub-Tree Area (Kirby Super Star) - Kirby Star Allies",
    "Vs. Gryll (Kirby's Star Stacker) - Kirby Star Allies",
    "Sacred Square - Kirby Star Allies",
    "Twinkling☆Travelers - Kirby Star Allies",
    "The Clash of Comrades' Blades - Kirby Star Allies",
    "Chop Champs - Kirby Star Allies",
    "Let's Build a Log Cabin! - Kirby Star Allies",
    "Star Slam Heroes - Kirby Star Allies",
    "To the Far Reaches of the Galaxy - Kirby Star Allies",
    "Standings - Kirby Star Allies",
    "Fortress of Shadows: Jambastion! - Kirby Star Allies",
    "Where Even Weeds Won't Grow - Kirby Star Allies",
    "Adventures in Jambastion - Kirby Star Allies",
    "Song of Supplication - Kirby Star Allies",
    "The Last Iceberg (Kirby's Dream Land 3) - Kirby Star Allies",
    "Vs. Dark Matter (Kirby's Dream Land 3) - Kirby Star Allies",
    "True Arena Showdown (Kirby Super Star Ultra) - Kirby Star Allies",
    "Neo Star (Kirby 64: The Crystal Shards) - Kirby Star Allies",
    "Miracle Matter (Kirby 64: The Crystal Shards) - Kirby Star Allies",
    "Vs. The Squeaks (Kirby Squeak Squad) - Kirby Star Allies",
    "Uncanny Underground (Kirby Squeak Squad) - Kirby Star Allies",
    "The Black Mirror (Team Kirby Clash Deluxe) - Kirby Star Allies",
    "Kracko (Kirby Canvas Curse) - Kirby Star Allies",
    "Goal Game - Kirby Star Allies",
    "Picture Results - Kirby Star Allies",
    "The Palace of Fulfilled Dreams - Kirby Star Allies",
    "True Friends Stand with You - Kirby Star Allies",
    "A Forgotten Flash of Lightning - Kirby Star Allies",
    "Continue (Kirby's Return to Dream Land) - Kirby Star Allies",
    "Kind Streets - Kirby Star Allies",
    "Far-Flung Starlight Heroes - Kirby Star Allies",
    "Winds across Earthfall - Kirby Star Allies",
    "Puzzle-Solving Galaxy - Kirby Star Allies",
    "Misteen's Oceans - Kirby Star Allies",
    "Caverna's Massive Mazes - Kirby Star Allies",
    "Frostak's Arctic Tundra - Kirby Star Allies",
    "The Adventure Begins (Kirby's Return to Dream Land) - Kirby Star Allies",
    "Underworld (Kirby's Return to Dream Land) - Kirby Star Allies",
    "Another Dimension (Kirby's Return to Dream Land) - Kirby Star Allies",
    "Vs. Mecha Kawasaki (Kirby's Return to Dream Land) - Kirby Star Allies",
    "More Challenge Stages (Kirby's Dream Collection Special Edition) - Kirby Star Allies",
    "Mysterious Rolling Boulders from Afar (Kirby: Triple Deluxe) - Kirby Star Allies",
    "Beautiful Prison (Kirby: Triple Deluxe) - Kirby Star Allies",
    "Bouncing Boss Battle (Dedede's Drum Dash Deluxe) - Kirby Star Allies",
    "Towara's Ancient Towers - Kirby Star Allies",
    "Star Lavadom - Kirby Star Allies",
    "Combat Evaluation Program (Kirby: Planet Robobot) - Kirby Star Allies",
    "Dedede's Tridimensional Cannon (Kirby: Planet Robobot) - Kirby Star Allies",
    "Outlaw Driver (Kirby: Planet Robobot) - Kirby Star Allies",
    "Far-Flung Journey's End - Kirby Star Allies",
    "Grass Land 1 (Kirby's Dream Land 3) - Kirby Star Allies",
    "Arena Showdown (Kirby: Triple Deluxe) - Kirby Star Allies",
    "Staff (Kirby 64: The Crystal Shards) - Kirby Star Allies",
    "Squeak Squad Theme (Kirby Squeak Squad) - Kirby Star Allies",
    "Welcome Your New Overlord (Kirby's Return to Dream Land) - Kirby Star Allies",
    "One of the Miracles (Kirby: Triple Deluxe) - Kirby Star Allies",
    "Vs. Star Dream (Kirby: Planet Robobot) - Kirby Star Allies",
    "Friends' Getaway - Kirby Star Allies",
    "Crazy Mischief in the Stars - Kirby Star Allies",
    "Chasing Our Dreams - Kirby Star Allies",
    "Shadowy Partners - Kirby Star Allies",
    "The Shape of a Heart - Kirby Star Allies",
    "Rockabilly And Blues - Kirby Star Allies",
    "Break Time Breakdown - Kirby Star Allies",
    "Where Even Light Does Not Reach - Kirby Star Allies",
    "Scarred Land of Dreams and New Greens - Kirby Star Allies",
    "Path of Worship - Kirby Star Allies",
    "Hall of Worship - Kirby Star Allies",
    "Puppet Offering - Kirby Star Allies",
    "La follia d'amore - Kirby Star Allies",
    "Liturgy of Holy Submission - Kirby Star Allies",
    "Introduction: To Distant Seas of Stars - Kirby Star Allies",
    "Suite: The Star-Conquering Traveler - Kirby Star Allies",
    "The Star Allies Have Your Back! - Kirby Star Allies",
    "Last Friends - Kirby Star Allies",
    "Having Watched You All Along - Kirby Star Allies",
    "Testing Star - Kirby Star Allies",
    "A Decisive Battle for Tomorrow (Kirby's Blowout Blast) - Kirby Star Allies",
    "Hidden Corkboard (Kirby Super Star Ultra) - Kirby Star Allies",
    "Bring On the Super Ability (Kirby's Return to Dream Land) - Kirby Star Allies",
    "Hypernova Inhale (Kirby: Triple Deluxe) - Kirby Star Allies",
    "Pink Ball Activate! (Kirby: Planet Robobot) - Kirby Star Allies",
    "The Adventure Begins — amiibo Special Arrangement (Kirby's Blowout Blast) - Kirby Star Allies",
    "Pressure Panic (Kirby's Return to Dream Land) - Kirby Star Allies",
    "Title Screen (Kirby's Dream Land 2) - Kirby Star Allies",
    "Milky Way Wishes (Kirby Super Star) - Kirby Star Allies",
    "Ripple Field: Stage Select (Kirby's Dream Land 3) - Kirby Star Allies",
    "Planet Popstar: Stage Select — Star Allies Arrangement - Kirby Star Allies",
    "Stage Begin — Star Allies Arrangement - Kirby Star Allies",
    "Squeak Squad Title Screen — Star Allies Arrangement - Kirby Star Allies",
    "Four Adventurers: Cookie Country — Star Allies Arrangement - Kirby Star Allies",
    "Taranza the Puppeteer Magician — Star Allies Arrangement - Kirby Star Allies",
    "The Noble Haltmann — Star Allies Arrangement - Kirby Star Allies",
    "Fortress of Shadows: Jambastion! — Star Allies Arrangement - Kirby Star Allies",
    "Venturing into the World with Allies - Kirby Star Allies",
    "Otherworldly Warrior (Kirby's Return to Dream Land) - Kirby Star Allies",
    "Green Stories (Team Kirby Clash Deluxe) - Kirby Star Allies",
    "Best Friends, Today, Tomorrow, and Forever - Kirby Star Allies",
    "The Adventure Begins — Original Short Ver. - Kirby Star Allies",
    "Your Preferred Spiciness for the Ultimate Choice - Kirby Star Allies",
    "Vs. Waddle Tank (Kirby's Return to Dream Land) - Kirby Star Allies",
    "Blazing! Boss Battle (Kirby's Return to Dream Land) - Kirby Star Allies",
    "Bouncing Boss Battle (Kirby: Triple Deluxe) - Kirby Star Allies",
    "Vs. The Wicked Company (Kirby: Planet Robobot) - Kirby Star Allies",
    "History of Dedede (Kirby Fighters Deluxe) - Kirby Star Allies",
    "Inner Struggle (Kirby: Planet Robobot) - Kirby Star Allies",
    "A Decisive Battle with Mighty Bosses (Kirby's Blowout Blast) - Kirby Star Allies",
    "Ordeal: Save This Kingdom! (Team Kirby Clash Deluxe) - Kirby Star Allies",
    "Ordeal: Save This World! (Team Kirby Clash Deluxe) - Kirby Star Allies",
    "The Road Is Long... / The True Arena (Kirby: Triple Deluxe) - Kirby Star Allies",
    "Max Happy Town! (Team Kirby Clash Deluxe) - Kirby Star Allies",
    "Heroes in Another Dimension - Kirby Star Allies",
    "The Legend of the Last World - Kirby Star Allies",
    "The Dimension to Win - Kirby Star Allies",
    "For Heroes, a Spear of the Heart / Dimensional Silence (Kirby's Return to Dream Land) - Kirby Star Allies",
    "Kirby Ever After - Kirby Star Allies",
    "To the Deep / Distant Halcandra (Kirby's Return to Dream Land) - Kirby Star Allies",
    "Oracles of the Threefold Glint - Kirby Star Allies",
    "Memories of the Grande Finale - Kirby Star Allies",
    "Butterfly of Judgment: Morpho Knight - Kirby Star Allies",
    "Battle of Nightmares - Kirby Star Allies",
    "Dark & Cloudy - Kirby Star Allies",
    "Vs. Marx — Star Allies Dream Ver. - Kirby Star Allies",
    "Dark Matter in the Hyper Zone - Kirby Star Allies",
    "The Girls Who Fought the Darkness - Kirby Star Allies",
    "Dark Mirage - Kirby Star Allies",
    "True Squeak Squad Theme - Kirby Star Allies",
    "Supreme Ruler's Coronation - OVERLORD - Kirby Star Allies",
    "Phantom of the Moon Soul - Kirby Star Allies",
    "A Deus Ex Machina from Childhood - Kirby Star Allies",
    "Suite: The Star-Conquering Traveler (Movement 2: Vessel of the Embryo) - Kirby Star Allies",
    "Suite: The Star-Conquering Traveler (Movement 3: Wings of Sorrow and the Heavens) - Kirby Star Allies",
    "Suite: The Star-Conquering Traveler (Movement 4: The Birth of Hope) - Kirby Star Allies",
    "Drawcia Soul — Star Allies Short Ver. (Kirby: Canvas Curse) - Kirby Star Allies",
    "Heavy Lobster (Kirby Super Star Ultra) - Kirby Star Allies",
    "Dangerous Dinner (Kirby's Return to Dream Land) - Kirby Star Allies",
    "Revenge of the Enemy (Kirby: Triple Deluxe) - Kirby Star Allies",
    "Fatal Error (Kirby: Planet Robobot) - Kirby Star Allies",
    "Aeon Corridors - Kirby Star Allies",
    "Suite: The Star-Conquering Traveler (Closing Movement: The Twinkling Star) - Kirby Star Allies",
    "Let Them Know We're Happy - Kirby Star Allies",
    "Bad Boss Brothers - Kirby Star Allies",
    "A Farewell to Kirby: He of the Future-Traveling Stars - Kirby Star Allies",
    "Green Greens - Kirby Star Allies",
    "Title Screen - Pokémon Sword and Pokémon Shield",
    "Exhibition Match - Pokémon Sword and Pokémon Shield",
    "Postwick - Pokémon Sword and Pokémon Shield",
    "Hop’s Theme - Pokémon Sword and Pokémon Shield",
    "Route 1 - Pokémon Sword and Pokémon Shield",
    "Wedgehurst - Pokémon Sword and Pokémon Shield",
    "Let’s Have a Champion Time! - Pokémon Sword and Pokémon Shield",
    "Battle! (Hop) - Pokémon Sword and Pokémon Shield",
    "Slumbering Weald - Pokémon Sword and Pokémon Shield",
    "In the Fog - Pokémon Sword and Pokémon Shield",
    "Pokémon Research Lab - Pokémon Sword and Pokémon Shield",
    "Sonia’s Theme - Pokémon Sword and Pokémon Shield",
    "Pokémon Center - Pokémon Sword and Pokémon Shield",
    "Battle! (Wild Pokémon) - Pokémon Sword and Pokémon Shield",
    "Victory! (Wild Pokémon) - Pokémon Sword and Pokémon Shield",
    "Guide - Pokémon Sword and Pokémon Shield",
    "At the Train Station - Pokémon Sword and Pokémon Shield",
    "Wild Area (South) - Pokémon Sword and Pokémon Shield",
    "Battle! (Max Raid Battle) - Pokémon Sword and Pokémon Shield",
    "Victory! (Dynamax Pokémon) - Pokémon Sword and Pokémon Shield",
    "Let’s Make Curry! - Pokémon Sword and Pokémon Shield",
    "Motostoke - Pokémon Sword and Pokémon Shield",
    "Boutique - Pokémon Sword and Pokémon Shield",
    "At the Stadium - Pokémon Sword and Pokémon Shield",
    "Budew Drop Inn - Pokémon Sword and Pokémon Shield",
    "An Old Legend - Pokémon Sword and Pokémon Shield",
    "Team Yell Appears! - Pokémon Sword and Pokémon Shield",
    "Marnie’s Theme - Pokémon Sword and Pokémon Shield",
    "Gym Challenge Opening Ceremony - Pokémon Sword and Pokémon Shield",
    "Chairman Rose - Pokémon Sword and Pokémon Shield",
    "Route 3 - Pokémon Sword and Pokémon Shield",
    "Trainers’ Eyes Meet (Trainer) - Pokémon Sword and Pokémon Shield",
    "Battle! (Trainer) - Pokémon Sword and Pokémon Shield",
    "Victory! (Trainer) - Pokémon Sword and Pokémon Shield",
    "Trainers’ Eyes Meet (Lass) - Pokémon Sword and Pokémon Shield",
    "Evolution - Pokémon Sword and Pokémon Shield",
    "Evolution (Galar) - Pokémon Sword and Pokémon Shield",
    "Galar Mine - Pokémon Sword and Pokémon Shield",
    "Trainers’ Eyes Meet (Worker) - Pokémon Sword and Pokémon Shield",
    "Bede’s Theme - Pokémon Sword and Pokémon Shield",
    "Battle! (Bede) - Pokémon Sword and Pokémon Shield",
    "Trainers’ Eyes Meet (Pokémon Breeder) - Pokémon Sword and Pokémon Shield",
    "Turffield - Pokémon Sword and Pokémon Shield",
    "Gym Mission! - Pokémon Sword and Pokémon Shield",
    "Trainers’ Eyes Meet (Gym Trainer) - Pokémon Sword and Pokémon Shield",
    "Victory! (Gym Trainer) - Pokémon Sword and Pokémon Shield",
    "Battle! (Gym Leader) - Pokémon Sword and Pokémon Shield",
    "Victory! (Gym Leader) - Pokémon Sword and Pokémon Shield",
    "Hulbury - Pokémon Sword and Pokémon Shield",
    "Poké Jobs - Pokémon Sword and Pokémon Shield",
    "Battle! (Marnie) - Pokémon Sword and Pokémon Shield",
    "Wild Area (North) - Pokémon Sword and Pokémon Shield",
    "Rotom Rally - Pokémon Sword and Pokémon Shield",
    "Hammerlocke - Pokémon Sword and Pokémon Shield",
    "Hair Salon - Pokémon Sword and Pokémon Shield",
    "Trainers’ Eyes Meet (Artist) - Pokémon Sword and Pokémon Shield",
    "Stow-on-Side - Pokémon Sword and Pokémon Shield",
    "The Ancient Mural Crumbles - Pokémon Sword and Pokémon Shield",
    "The Truth Behind the Mural - Pokémon Sword and Pokémon Shield",
    "Glimwood Tangle - Pokémon Sword and Pokémon Shield",
    "Ballonlea - Pokémon Sword and Pokémon Shield",
    "Circhester - Pokémon Sword and Pokémon Shield",
    "Spikemuth - Pokémon Sword and Pokémon Shield",
    "Battle! (Team Yell) - Pokémon Sword and Pokémon Shield",
    "Battle! (Gym Leader: Piers) - Pokémon Sword and Pokémon Shield",
    "Route 10 - Pokémon Sword and Pokémon Shield",
    "Wyndon - Pokémon Sword and Pokémon Shield",
    "Wyndon Stadium - Pokémon Sword and Pokémon Shield",
    "Decisive Battle! (Marnie) - Pokémon Sword and Pokémon Shield",
    "Decisive Battle! (Hop) - Pokémon Sword and Pokémon Shield",
    "Rose Tower - Pokémon Sword and Pokémon Shield",
    "Reaching the Top - Pokémon Sword and Pokémon Shield",
    "Battle! (Oleana) - Pokémon Sword and Pokémon Shield",
    "The Finals Begin - Pokémon Sword and Pokémon Shield",
    "Battle! (Finals) - Pokémon Sword and Pokémon Shield",
    "Victory! (Champion Cup) - Pokémon Sword and Pokémon Shield",
    "The Darkest Day - Pokémon Sword and Pokémon Shield",
    "Deep in the Forest - Pokémon Sword and Pokémon Shield",
    "A Bizarre Situation - Pokémon Sword and Pokémon Shield",
    "Battle! (Rose) - Pokémon Sword and Pokémon Shield",
    "Leon and Eternatus - Pokémon Sword and Pokémon Shield",
    "Battle! (Eternatus) - Pokémon Sword and Pokémon Shield",
    "Eternal Power - Pokémon Sword and Pokémon Shield",
    "Decisive Battle! (Eternatus) - Pokémon Sword and Pokémon Shield",
    "You Caught Eternatus! - Pokémon Sword and Pokémon Shield",
    "Decisive Battle! (Champion Leon) - Pokémon Sword and Pokémon Shield",
    "Victory! (Champion Leon) - Pokémon Sword and Pokémon Shield",
    "For a Bright Future - Pokémon Sword and Pokémon Shield",
    "Battle Tower - Pokémon Sword and Pokémon Shield",
    "Battle! (Battle Tower) - Pokémon Sword and Pokémon Shield",
    "Battle! (Zacian/Zamazenta) - Pokémon Sword and Pokémon Shield",
    "Isle of Armor - Pokémon Sword and Pokémon Shield",
    "Krazy for Klara - Pokémon Sword and Pokémon Shield",
    "Battle! (Klara) - Pokémon Sword and Pokémon Shield",
    "The Amazing Avery - Pokémon Sword and Pokémon Shield",
    "Battle! (Avery) - Pokémon Sword and Pokémon Shield",
    "Master Dojo - Pokémon Sword and Pokémon Shield",
    "Mustard’s Theme - Pokémon Sword and Pokémon Shield",
    "Battle! (Mustard) - Pokémon Sword and Pokémon Shield",
    "Secret Armor - Pokémon Sword and Pokémon Shield",
    "Tower of Waters - Pokémon Sword and Pokémon Shield",
    "Battle! (Serious Mustard) - Pokémon Sword and Pokémon Shield",
    "Victory! (Mustard) - Pokémon Sword and Pokémon Shield",
    "Victory with Kubfu - Pokémon Sword and Pokémon Shield",
    "Crown Tundra - Pokémon Sword and Pokémon Shield",
    "Peony’s Theme - Pokémon Sword and Pokémon Shield",
    "Battle! (Peony) - Pokémon Sword and Pokémon Shield",
    "Max Lair - Pokémon Sword and Pokémon Shield",
    "Dynamax Adventure - Pokémon Sword and Pokémon Shield",
    "Battle! (Dynamax Adventure) - Pokémon Sword and Pokémon Shield",
    "Freezington - Pokémon Sword and Pokémon Shield",
    "The King of Bountiful Harvests - Pokémon Sword and Pokémon Shield",
    "Battle! (Calyrex) - Pokémon Sword and Pokémon Shield",
    "Battle! (Glastrier/Spectrier) - Pokémon Sword and Pokémon Shield",
    "Crown Shrine - Pokémon Sword and Pokémon Shield",
    "Battle! (The King of Bountiful Harvests) - Pokémon Sword and Pokémon Shield",
    "Battle! (The Giant of Legend) - Pokémon Sword and Pokémon Shield",
    "Gathering at the Tree - Pokémon Sword and Pokémon Shield",
    "Battle! (The Bird Pokémon of Legend) - Pokémon Sword and Pokémon Shield",
    "Staff Credits - Pokémon Sword and Pokémon Shield",
    "Opening Theme - Animal Crossing: New Horizons",
    "12:00 AM - Clear - Animal Crossing: New Horizons",
    "1:00 AM - Clear - Animal Crossing: New Horizons",
    "2:00 AM - Clear - Animal Crossing: New Horizons",
    "3:00 AM - Clear - Animal Crossing: New Horizons",
    "4:00 AM - Clear - Animal Crossing: New Horizons",
    "5:00 AM - Clear - Animal Crossing: New Horizons",
    "6:00 AM - Clear - Animal Crossing: New Horizons",
    "7:00 AM - Clear - Animal Crossing: New Horizons",
    "8:00 AM - Clear - Animal Crossing: New Horizons",
    "9:00 AM - Clear - Animal Crossing: New Horizons",
    "10:00 AM - Clear - Animal Crossing: New Horizons",
    "11:00 AM - Clear - Animal Crossing: New Horizons",
    "12:00 PM - Clear - Animal Crossing: New Horizons",
    "1:00 PM - Clear - Animal Crossing: New Horizons",
    "2:00 PM - Clear - Animal Crossing: New Horizons",
    "3:00 PM - Clear - Animal Crossing: New Horizons",
    "4:00 PM - Clear - Animal Crossing: New Horizons",
    "5:00 PM - Clear - Animal Crossing: New Horizons",
    "6:00 PM - Clear - Animal Crossing: New Horizons",
    "7:00 PM - Clear - Animal Crossing: New Horizons",
    "8:00 PM - Clear - Animal Crossing: New Horizons",
    "9:00 PM - Clear - Animal Crossing: New Horizons",
    "10:00 PM - Clear - Animal Crossing: New Horizons",
    "11:00 PM - Clear - Animal Crossing: New Horizons",
    "12:00 AM - Rainy - Animal Crossing: New Horizons",
    "1:00 AM - Rainy - Animal Crossing: New Horizons",
    "2:00 AM - Rainy - Animal Crossing: New Horizons",
    "3:00 AM - Rainy - Animal Crossing: New Horizons",
    "4:00 AM - Rainy - Animal Crossing: New Horizons",
    "6:00 AM - Rainy - Animal Crossing: New Horizons",
    "7:00 AM - Rainy - Animal Crossing: New Horizons",
    "8:00 AM - Rainy - Animal Crossing: New Horizons",
    "9:00 AM - Rainy - Animal Crossing: New Horizons",
    "10:00 AM - Rainy - Animal Crossing: New Horizons",
    "11:00 AM - Rainy - Animal Crossing: New Horizons",
    "12:00 PM - Rainy - Animal Crossing: New Horizons",
    "1:00 PM - Rainy - Animal Crossing: New Horizons",
    "2:00 PM - Rainy - Animal Crossing: New Horizons",
    "3:00 PM - Rainy - Animal Crossing: New Horizons",
    "4:00 PM - Rainy - Animal Crossing: New Horizons",
    "5:00 PM - Rainy - Animal Crossing: New Horizons",
    "6:00 PM - Rainy - Animal Crossing: New Horizons",
    "7:00 PM - Rainy - Animal Crossing: New Horizons",
    "8:00 PM - Rainy - Animal Crossing: New Horizons",
    "9:00 PM - Rainy - Animal Crossing: New Horizons",
    "10:00 PM - Rainy - Animal Crossing: New Horizons",
    "11:00 PM - Rainy - Animal Crossing: New Horizons",
    "Island Life Orientation 1 - Animal Crossing: New Horizons",
    "Island Life Orientation 2 - Animal Crossing: New Horizons",
    "Island Life Orientation 3 - Animal Crossing: New Horizons",
    "Island Life Orientation 4 - Firelit Night - Animal Crossing: New Horizons",
    "Island Life Orientation 5 - Clear - Animal Crossing: New Horizons",
    "Island Life Orientation 6 - Clear - Animal Crossing: New Horizons",
    "Island Life Orientation 7 - Clear - Animal Crossing: New Horizons",
    "Island Life Orientation 7 - Snowy - Animal Crossing: New Horizons",
    "Mystery Island - Clear Afternoon - Animal Crossing: New Horizons",
    "Mystery Island - Rainy Afternoon - Animal Crossing: New Horizons",
    "Mystery Island - Clear Evening - Animal Crossing: New Horizons",
    "Mystery Island - Rainy Evening - Animal Crossing: New Horizons",
    "Nook Inc. Getaway Check-In - Animal Crossing: New Horizons",
    "Dreaming of K.K. Slider - Animal Crossing: New Horizons",
    "Island-Wide Broadcast - Tom Nook - Animal Crossing: New Horizons",
    "Island-Wide Broadcast - Isabelle - Animal Crossing: New Horizons",
    "Resident Services - Tent - Animal Crossing: New Horizons",
    "Resident Services - Animal Crossing: New Horizons",
    "Construction-Complete Ceremony - Animal Crossing: New Horizons",
    "Group Stretching - Animal Crossing: New Horizons",
    "Blathers's Tent - Animal Crossing: New Horizons",
    "Museum - Entrance - Animal Crossing: New Horizons",
    "Museum - Fish Exhibit - Animal Crossing: New Horizons",
    "Museum - Bug Exhibit - Animal Crossing: New Horizons",
    "Museum - Fossil Exhibit - Animal Crossing: New Horizons",
    "Museum - Art Exhibit - Animal Crossing: New Horizons",
    "The Roost - Animal Crossing: New Horizons",
    "Airport Lobby (Tinny Speaker Ver.) - Animal Crossing: New Horizons",
    "Airport Lobby (Direct Feed Ver.) - Animal Crossing: New Horizons",
    "Travel Plans - In-Flight Entertainment - Animal Crossing: New Horizons",
    "Travel Plans - Waiting for a Guest - Animal Crossing: New Horizons",
    "The Able Sisters - Animal Crossing: New Horizons",
    "Nook's Cranny - Small - Animal Crossing: New Horizons",
    "Nook's Cranny - Remodeled - Animal Crossing: New Horizons",
    "Nook's Cranny - Closing Time - Animal Crossing: New Horizons",
    "Jolly Redd's Treasure Trawler - Animal Crossing: New Horizons",
    "Dreaming of Luna - Animal Crossing: New Horizons",
    "Rescue Service - Animal Crossing: New Horizons",
    "Harv's Island - Afternoon - Animal Crossing: New Horizons",
    "Harv's Island - Evening - Animal Crossing: New Horizons",
    "Katrina's Fortune Reading - Animal Crossing: New Horizons",
    "Kapp'n's Sea Shanty - Outbound 1 - Animal Crossing: New Horizons",
    "Kapp'n's Sea Shanty - Outbound 2 - Animal Crossing: New Horizons",
    "Kapp'n's Sea Shanty - Outbound 3 - Animal Crossing: New Horizons",
    "Kapp'n's Sea Shanty - Outbound 4 - Animal Crossing: New Horizons",
    "Kapp'n's Sea Shanty - Outbound 5 - Animal Crossing: New Horizons",
    "Kapp'n's Sea Shanty - Homeward 1 - Animal Crossing: New Horizons",
    "Kapp'n's Sea Shanty - Homeward 3 - Animal Crossing: New Horizons",
    "Kapp'n's Sea Shanty - Homeward 4 - Animal Crossing: New Horizons",
    "Tourney - It's On - Animal Crossing: New Horizons",
    "Tourney - Competing - Animal Crossing: New Horizons",
    "Bunny Day - Animal Crossing: New Horizons",
    "Wedding Season - Reese & Cyrus - Animal Crossing: New Horizons",
    "Fireworks Show - Animal Crossing: New Horizons",
    "Halloween - Animal Crossing: New Horizons",
    "Turkey Day - Animal Crossing: New Horizons",
    "Toy Day - Snowy - Animal Crossing: New Horizons",
    "Toy Day - Clear - Animal Crossing: New Horizons",
    "Countdown - 11 PM - Animal Crossing: New Horizons",
    "Countdown - 11:30 PM - Animal Crossing: New Horizons",
    "Countdown - 11:50 PM - Animal Crossing: New Horizons",
    "Countdown - 11:55 PM - Animal Crossing: New Horizons",
    "Happy New Year! - Animal Crossing: New Horizons",
    "New Year's Day - 12:00 AM - Animal Crossing: New Horizons",
    "New Year's Day - 2:00 AM - Animal Crossing: New Horizons",
    "New Year's Day - Animal Crossing: New Horizons",
    "Festivale - Animal Crossing: New Horizons",
    "amiibo Invitation - Animal Crossing: New Horizons",
    "Chased by Bees - Animal Crossing: New Horizons",
    "Stung by Bees - Animal Crossing: New Horizons",
    "Got It! - Animal Crossing: New Horizons",
    "Done and Done - Animal Crossing: New Horizons",
    "K.K. Cruisin' (Performance) - Animal Crossing: New Horizons",
    "Lucky K.K. (Performance) - Animal Crossing: New Horizons",
    "Mountain Song (Performance) - Animal Crossing: New Horizons",
    "Aloha K.K. (Performance) - Animal Crossing: New Horizons",
    "Hypno K.K. (Performance) - Animal Crossing: New Horizons",
    "Surfin' K.K. (Performance) - Animal Crossing: New Horizons",
    "K.K. Stroll (Performance) - Animal Crossing: New Horizons",
    "Two Days Ago (Performance) - Animal Crossing: New Horizons",
    "Only Me (Performance) - Animal Crossing: New Horizons",
    "Pondering (Performance) - Animal Crossing: New Horizons",
    "K.K. Birthday (Performance) - Animal Crossing: New Horizons",
    "Bubblegum K.K. (Performance) - Animal Crossing: New Horizons",
    "K.K. Safari (Performance) - Animal Crossing: New Horizons",
    "K.K. Western (Performance) - Animal Crossing: New Horizons",
    "K.K. Lament (Performance) - Animal Crossing: New Horizons",
    "K.K. Rally (Performance) - Animal Crossing: New Horizons",
    "K.K. Marathon (Performance) - Animal Crossing: New Horizons",
    "K.K. Calypso (Performance) - Animal Crossing: New Horizons",
    "K.K. Country (Performance) - Animal Crossing: New Horizons",
    "K.K. Groove (Performance) - Animal Crossing: New Horizons",
    "Agent K.K. (Performance) - Animal Crossing: New Horizons",
    "Soulful K.K. (Performance) - Animal Crossing: New Horizons",
    "K.K. Salsa (Performance) - Animal Crossing: New Horizons",
    "K.K. Samba (Performance) - Animal Crossing: New Horizons",
    "K.K. Chorale (Performance) - Animal Crossing: New Horizons",
    "K.K. Jazz (Performance) - Animal Crossing: New Horizons",
    "K.K. Chorinho (Performance) - Animal Crossing: New Horizons",
    "K.K. Jongara (Performance) - Animal Crossing: New Horizons",
    "K.K. Swing (Performance) - Animal Crossing: New Horizons",
    "K.K. Ska (Performance) - Animal Crossing: New Horizons",
    "K.K. Slack-Key (Performance) - Animal Crossing: New Horizons",
    "Mr. K.K. (Performance) - Animal Crossing: New Horizons",
    "K.K. Soul (Performance) - Animal Crossing: New Horizons",
    "K.K. Song (Performance) - Animal Crossing: New Horizons",
    "King K.K. (Performance) - Animal Crossing: New Horizons",
    "K.K. Dub (Performance) - Animal Crossing: New Horizons",
    "K.K. Tango (Performance) - Animal Crossing: New Horizons",
    "Imperial K.K. (Performance) - Animal Crossing: New Horizons",
    "K.K. Dixie (Performance) - Animal Crossing: New Horizons",
    "K.K. Disco (Performance) - Animal Crossing: New Horizons",
    "K.K. Synth (Performance) - Animal Crossing: New Horizons",
    "K.K. Étude (Performance) - Animal Crossing: New Horizons",
    "K.K. Sonata (Performance) - Animal Crossing: New Horizons",
    "K.K. Milonga (Performance) - Animal Crossing: New Horizons",
    "Rockin' K.K. (Performance) - Animal Crossing: New Horizons",
    "K.K. House (Performance) - Animal Crossing: New Horizons",
    "K.K. Bashment (Performance) - Animal Crossing: New Horizons",
    "K.K. Ballad (Performance) - Animal Crossing: New Horizons",
    "Café K.K. (Performance) - Animal Crossing: New Horizons",
    "K.K. Adventure (Performance) - Animal Crossing: New Horizons",
    "K.K. Parade (Performance) - Animal Crossing: New Horizons",
    "K.K. Rockabilly (Performance) - Animal Crossing: New Horizons",
    "The K. Funk (Performance) - Animal Crossing: New Horizons",
    "K.K. Fugue (Performance) - Animal Crossing: New Horizons",
    "K.K. Fusion (Performance) - Animal Crossing: New Horizons",
    "K.K. Flamenco (Performance) - Animal Crossing: New Horizons",
    "K.K. Blues (Performance) - Animal Crossing: New Horizons",
    "K.K. Break (Performance) - Animal Crossing: New Horizons",
    "K.K. Khoomei (Performance) - Animal Crossing: New Horizons",
    "K.K. Bossa (Performance) - Animal Crossing: New Horizons",
    "K.K. Hop (Performance) - Animal Crossing: New Horizons",
    "K.K. Polka (Performance) - Animal Crossing: New Horizons",
    "K.K. Moody (Performance) - Animal Crossing: New Horizons",
    "K.K. March (Performance) - Animal Crossing: New Horizons",
    "K.K. Oasis (Performance) - Animal Crossing: New Horizons",
    "K.K. Aria (Performance) - Animal Crossing: New Horizons",
    "K.K. Mambo (Performance) - Animal Crossing: New Horizons",
    "K.K. Folk (Performance) - Animal Crossing: New Horizons",
    "K.K. Metal (Performance) - Animal Crossing: New Horizons",
    "K.K. Lovers (Performance) - Animal Crossing: New Horizons",
    "K.K. Love Song (Performance) - Animal Crossing: New Horizons",
    "K.K. Lullaby (Performance) - Animal Crossing: New Horizons",
    "K.K. Reggae (Performance) - Animal Crossing: New Horizons",
    "K.K. Robot Synth (Performance) - Animal Crossing: New Horizons",
    "K.K. Rock (Performance) - Animal Crossing: New Horizons",
    "K.K. Bazaar (Performance) - Animal Crossing: New Horizons",
    "K.K. Waltz (Performance) - Animal Crossing: New Horizons",
    "K.K. Steppe (Performance) - Animal Crossing: New Horizons",
    "K.K. Dirge (Performance) - Animal Crossing: New Horizons",
    "Farewell (Performance) - Animal Crossing: New Horizons",
    "Comrade K.K. (Performance) - Animal Crossing: New Horizons",
    "K.K. Mariachi (Performance) - Animal Crossing: New Horizons",
    "I Love You (Performance) - Animal Crossing: New Horizons",
    "Chillwave (Performance) - Animal Crossing: New Horizons",
    "K.K. Technopop (Performance) - Animal Crossing: New Horizons",
    "K.K. Island (Performance) - Animal Crossing: New Horizons",
    "Animal City (Performance) - Animal Crossing: New Horizons",
    "Drivin' (Performance) - Animal Crossing: New Horizons",
    "K.K. D&B (Performance) - Animal Crossing: New Horizons",
    "K.K. Casbah (Performance) - Animal Crossing: New Horizons",
    "Neapolitan (Performance) - Animal Crossing: New Horizons",
    "To the Edge (Performance) - Animal Crossing: New Horizons",
    "Steep Hill (Performance) - Animal Crossing: New Horizons",
    "K.K. Gumbo (Performance) - Animal Crossing: New Horizons",
    "K.K. Faire (Performance) - Animal Crossing: New Horizons",
    "Spring Blossoms (Performance) - Animal Crossing: New Horizons",
    "Marine Song 2001 (Performance) - Animal Crossing: New Horizons",
    "Stale Cupcakes (Performance) - Animal Crossing: New Horizons",
    "K.K. Condor (Performance) - Animal Crossing: New Horizons",
    "Wandering (Performance) - Animal Crossing: New Horizons",
    "My Place (Performance) - Animal Crossing: New Horizons",
    "Space K.K. (Performance) - Animal Crossing: New Horizons",
    "Welcome Horizons (Performance) - Animal Crossing: New Horizons",
    "Forest Life (Performance) - Animal Crossing: New Horizons",
    "DJ K.K. (Performance) - Animal Crossing: New Horizons",
    "Go K.K. Rider (Performance) - Animal Crossing: New Horizons",
    "K.K. Ragtime (Performance) - Animal Crossing: New Horizons",
    "Extra Song 1 - Animal Crossing: New Horizons",
    "Extra Song 2 - Animal Crossing: New Horizons",
    "Extra Song 3 - Animal Crossing: New Horizons",
    "K.K. Cruisin' (Instrumental) - Animal Crossing: New Horizons",
    "Lucky K.K. (Instrumental) - Animal Crossing: New Horizons",
    "Mountain Song (Instrumental) - Animal Crossing: New Horizons",
    "Aloha K.K. (Instrumental) - Animal Crossing: New Horizons",
    "Hypno K.K. (Instrumental) - Animal Crossing: New Horizons",
    "Surfin' K.K. (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Stroll (Instrumental) - Animal Crossing: New Horizons",
    "Two Days Ago (Instrumental) - Animal Crossing: New Horizons",
    "Only Me (Instrumental) - Animal Crossing: New Horizons",
    "Pondering (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Birthday (Instrumental) - Animal Crossing: New Horizons",
    "Bubblegum K.K. (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Safari (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Western (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Lament (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Rally (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Marathon (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Calypso (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Country (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Groove (Instrumental) - Animal Crossing: New Horizons",
    "Agent K.K. (Instrumental) - Animal Crossing: New Horizons",
    "Soulful K.K. (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Salsa (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Samba (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Chorale (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Jazz (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Chorinho (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Jongara (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Swing (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Ska (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Slack-Key (Instrumental) - Animal Crossing: New Horizons",
    "Mr. K.K. (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Soul (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Song (Instrumental) - Animal Crossing: New Horizons",
    "King K.K. (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Dub (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Tango (Instrumental) - Animal Crossing: New Horizons",
    "Imperial K.K. (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Dixie (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Disco (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Synth (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Étude (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Sonata (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Milonga (Instrumental) - Animal Crossing: New Horizons",
    "Rockin' K.K. (Instrumental) - Animal Crossing: New Horizons",
    "K.K. House (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Bashment (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Ballad (Instrumental) - Animal Crossing: New Horizons",
    "Café K.K. (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Adventure (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Parade (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Rockabilly (Instrumental) - Animal Crossing: New Horizons",
    "The K. Funk (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Fugue (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Fusion (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Flamenco (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Blues (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Break (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Khoomei (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Bossa (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Hop (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Polka (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Moody (Instrumental) - Animal Crossing: New Horizons",
    "K.K. March (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Oasis (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Aria (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Mambo (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Folk (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Metal (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Lovers (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Love Song (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Lullaby (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Reggae (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Robot Synth (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Rock (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Bazaar (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Waltz (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Steppe (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Dirge (Instrumental) - Animal Crossing: New Horizons",
    "Farewell (Instrumental) - Animal Crossing: New Horizons",
    "Comrade K.K. (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Mariachi (Instrumental) - Animal Crossing: New Horizons",
    "I Love You (Instrumental) - Animal Crossing: New Horizons",
    "Chillwaves (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Technopop (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Island (Instrumental) - Animal Crossing: New Horizons",
    "Animal City (Instrumental) - Animal Crossing: New Horizons",
    "Drivin' (Instrumental) - Animal Crossing: New Horizons",
    "K.K. D&B (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Casbah (Instrumental) - Animal Crossing: New Horizons",
    "Neapolitan (Instrumental) - Animal Crossing: New Horizons",
    "To the Edge (Instrumental) - Animal Crossing: New Horizons",
    "Steep Hill (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Gumbo (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Faire (Instrumental) - Animal Crossing: New Horizons",
    "Spring Blossoms (Instrumental) - Animal Crossing: New Horizons",
    "Marine Song 2001 (Instrumental) - Animal Crossing: New Horizons",
    "Stale Cupcakes (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Condor (Instrumental) - Animal Crossing: New Horizons",
    "Wandering (Instrumental) - Animal Crossing: New Horizons",
    "My Place (Instrumental) - Animal Crossing: New Horizons",
    "Space K.K. (Instrumental) - Animal Crossing: New Horizons",
    "Welcome Horizons (Instrumental) - Animal Crossing: New Horizons",
    "Forest Life (Instrumental) - Animal Crossing: New Horizons",
    "DJ K.K. (Instrumental) - Animal Crossing: New Horizons",
    "Go K.K. Rider (Instrumental) - Animal Crossing: New Horizons",
    "K.K. Ragtime (Instrumental) - Animal Crossing: New Horizons",
    "Title Screen - Clubhouse Games: 51 Worldwide Classics",
    "Opening - Clubhouse Games: 51 Worldwide Classics",
    "Game Guides - Clubhouse Games: 51 Worldwide Classics",
    "Board Games: Play 1 - Clubhouse Games: 51 Worldwide Classics",
    "Board Games: Play 2 - Clubhouse Games: 51 Worldwide Classics",
    "Board Games: Play 3 - Clubhouse Games: 51 Worldwide Classics",
    "Board Games: Play 4 - Clubhouse Games: 51 Worldwide Classics",
    "Board Games: Winner! 1 - Clubhouse Games: 51 Worldwide Classics",
    "Board Games: Winner! 2 - Clubhouse Games: 51 Worldwide Classics",
    "Board Games: Too Bad... 1 - Clubhouse Games: 51 Worldwide Classics",
    "Board Games: Too Bad... 2 - Clubhouse Games: 51 Worldwide Classics",
    "Board Games: Draw 1 - Clubhouse Games: 51 Worldwide Classics",
    "Board Games: Draw 2 - Clubhouse Games: 51 Worldwide Classics",
    "Board Games: Review - Clubhouse Games: 51 Worldwide Classics",
    "Yacht Dice: Roll - Clubhouse Games: 51 Worldwide Classics",
    "Yacht Dice: Which Category? - Clubhouse Games: 51 Worldwide Classics",
    "Yacht Dice: Results - Clubhouse Games: 51 Worldwide Classics",
    "Four-in-a-Row: Play - Clubhouse Games: 51 Worldwide Classics",
    "Four-in-a-Row: Winner! - Clubhouse Games: 51 Worldwide Classics",
    "Four-in-a-Row: Too Bad... - Clubhouse Games: 51 Worldwide Classics",
    "Four-in-a-Row: Draw - Clubhouse Games: 51 Worldwide Classics",
    "Japanese Games: Play - Clubhouse Games: 51 Worldwide Classics",
    "Japanese Games: Winner! - Clubhouse Games: 51 Worldwide Classics",
    "Japanese Games: Too Bad... - Clubhouse Games: 51 Worldwide Classics",
    "Japanese Games: Draw - Clubhouse Games: 51 Worldwide Classics",
    "Dominoes: Deciding Turn Order - Clubhouse Games: 51 Worldwide Classics",
    "Chess: Play - Clubhouse Games: 51 Worldwide Classics",
    "Chess: Check - Clubhouse Games: 51 Worldwide Classics",
    "Chess: Winner! - Clubhouse Games: 51 Worldwide Classics",
    "Chess: Too Bad... - Clubhouse Games: 51 Worldwide Classics",
    "Chess: Draw - Clubhouse Games: 51 Worldwide Classics",
    "Hanafuda: Determining the Dealer - Clubhouse Games: 51 Worldwide Classics",
    "Hanafuda: Finish - Clubhouse Games: 51 Worldwide Classics",
    "Riichi Mahjong: Play - Clubhouse Games: 51 Worldwide Classics",
    "Riichi Mahjong: Results - Clubhouse Games: 51 Worldwide Classics",
    "Riichi Mahjong: 1st Place - Clubhouse Games: 51 Worldwide Classics",
    "Riichi Mahjong: 2nd – 4th Place - Clubhouse Games: 51 Worldwide Classics",
    "Card Games: Play 1 - Clubhouse Games: 51 Worldwide Classics",
    "Card Games: Play 2 - Clubhouse Games: 51 Worldwide Classics",
    "Card Games: Play 3 - Clubhouse Games: 51 Worldwide Classics",
    "Card Games: Round Won - Clubhouse Games: 51 Worldwide Classics",
    "Card Games: Winner! - Clubhouse Games: 51 Worldwide Classics",
    "Card Games: Too Bad... - Clubhouse Games: 51 Worldwide Classics",
    "Card Games: Draw - Clubhouse Games: 51 Worldwide Classics",
    "President: Revolution - Clubhouse Games: 51 Worldwide Classics",
    "Speed: Play - Clubhouse Games: 51 Worldwide Classics",
    "Matching: Play - Clubhouse Games: 51 Worldwide Classics",
    "War: Play - Clubhouse Games: 51 Worldwide Classics",
    "Takoyaki: Play - Clubhouse Games: 51 Worldwide Classics",
    "Pig's Tail: Play - Clubhouse Games: 51 Worldwide Classics",
    "Golf: Interim Results - Clubhouse Games: 51 Worldwide Classics",
    "Golf: Final Results - Clubhouse Games: 51 Worldwide Classics",
    "Sophisticated Games: Play - Clubhouse Games: 51 Worldwide Classics",
    "Sophisticated Games: Winner! - Clubhouse Games: 51 Worldwide Classics",
    "Sophisticated Games: Too Bad... - Clubhouse Games: 51 Worldwide Classics",
    "Sophisticated Games: Draw - Clubhouse Games: 51 Worldwide Classics",
    "Sports Games: During the Game 1 - Clubhouse Games: 51 Worldwide Classics",
    "Sports Games: During the Game 2 - Clubhouse Games: 51 Worldwide Classics",
    "Sports Games: Winner! 1 - Clubhouse Games: 51 Worldwide Classics",
    "Sports Games: Winner! 2 - Clubhouse Games: 51 Worldwide Classics",
    "Sports Games: Too Bad... 1 - Clubhouse Games: 51 Worldwide Classics",
    "Sports Games: Too Bad... 2 - Clubhouse Games: 51 Worldwide Classics",
    "Sports Games: Draw 1 - Clubhouse Games: 51 Worldwide Classics",
    "Sports Games: Draw 2 - Clubhouse Games: 51 Worldwide Classics",
    "Carrom: Cover Challenge - Clubhouse Games: 51 Worldwide Classics",
    "Variety: Winner! - Clubhouse Games: 51 Worldwide Classics",
    "Variety: Too Bad... - Clubhouse Games: 51 Worldwide Classics",
    "Variety: Draw - Clubhouse Games: 51 Worldwide Classics",
    "Toy Tennis: During the Match - Clubhouse Games: 51 Worldwide Classics",
    "Toy Tennis: Match Point - Clubhouse Games: 51 Worldwide Classics",
    "Toy Soccer: During the Match - Clubhouse Games: 51 Worldwide Classics",
    "Toy Boxing: Play - Clubhouse Games: 51 Worldwide Classics",
    "Toy Baseball: During the Game - Clubhouse Games: 51 Worldwide Classics",
    "Toy Baseball: Change! - Clubhouse Games: 51 Worldwide Classics",
    "Toy Baseball: Home Run - Clubhouse Games: 51 Worldwide Classics",
    "Slot Cars: Intro - Clubhouse Games: 51 Worldwide Classics",
    "Slot Cars: Results - Clubhouse Games: 51 Worldwide Classics",
    "Fishing: Play - Clubhouse Games: 51 Worldwide Classics",
    "Fishing: Results - Clubhouse Games: 51 Worldwide Classics",
    "Battle Tanks: Play - Clubhouse Games: 51 Worldwide Classics",
    "Team Tanks: Stage Select - Clubhouse Games: 51 Worldwide Classics",
    "6-Ball Puzzle: Play - Clubhouse Games: 51 Worldwide Classics",
    "Mahjong Solitaire: Stage Select - Clubhouse Games: 51 Worldwide Classics",
    "Online: Who's Joining? - Clubhouse Games: 51 Worldwide Classics",
    "Staff Credits - Clubhouse Games: 51 Worldwide Classics",
    "The Beginning - Pokémon Legends: Arceus",
    "Transported - Pokémon Legends: Arceus",
    "Professor Laventon - Pokémon Legends: Arceus",
    "A Meeting in Hisui - Pokémon Legends: Arceus",
    "Jubilife Village - Pokémon Legends: Arceus",
    "Galaxy Hall - Pokémon Legends: Arceus",
    "Battle! (People of Hisui) - Pokémon Legends: Arceus",
    "Obsidian Fieldlands 1–1 - Pokémon Legends: Arceus",
    "A Prelude to Battle - Pokémon Legends: Arceus",
    "A Prelude to Battle 2 - Pokémon Legends: Arceus",
    "A Prelude to Battle 3 - Pokémon Legends: Arceus",
    "Battle! (Wild Pokémon) - Pokémon Legends: Arceus",
    "Survey Report (Day) - Pokémon Legends: Arceus",
    "Obsidian Fieldlands 2–1 - Pokémon Legends: Arceus",
    "A Prelude to Battle (Alpha Pokémon) - Pokémon Legends: Arceus",
    "Battle! (Alpha Pokémon) - Pokémon Legends: Arceus",
    "An Audience - Pokémon Legends: Arceus",
    "A Tense Situation - Pokémon Legends: Arceus",
    "Heartwood - Pokémon Legends: Arceus",
    "Evolution - Pokémon Legends: Arceus",
    "Kleavor, Lord of the Woods - Pokémon Legends: Arceus",
    "Battle! (Noble Pokémon) - Pokémon Legends: Arceus",
    "Resolution - Pokémon Legends: Arceus",
    "Case Closed - Pokémon Legends: Arceus",
    "Target Practice - Pokémon Legends: Arceus",
    "Crimson Mirelands 1–1 - Pokémon Legends: Arceus",
    "Distortion - Pokémon Legends: Arceus",
    "Settlement - Pokémon Legends: Arceus",
    "Crimson Mirelands 2–1 - Pokémon Legends: Arceus",
    "Lilligant, Lady of the Ridge - Pokémon Legends: Arceus",
    "Cobalt Coastlands 1–1 - Pokémon Legends: Arceus",
    "The Sound of the Flute - Pokémon Legends: Arceus",
    "Feelings - Pokémon Legends: Arceus",
    "Night - Pokémon Legends: Arceus",
    "Survey Report (Night) - Pokémon Legends: Arceus",
    "Cobalt Coastlands 2–1 - Pokémon Legends: Arceus",
    "Firespit Island - Pokémon Legends: Arceus",
    "Courage - Pokémon Legends: Arceus",
    "Strength - Pokémon Legends: Arceus",
    "Coronet Highlands - Pokémon Legends: Arceus",
    "Wayward Cave - Pokémon Legends: Arceus",
    "Battle! (People of Hisui 2) - Pokémon Legends: Arceus",
    "Electrode, Lord of the Hollow - Pokémon Legends: Arceus",
    "Alabaster Icelands 1–1 - Pokémon Legends: Arceus",
    "Deep in the Night - Pokémon Legends: Arceus",
    "Dawn - Pokémon Legends: Arceus",
    "Alabaster Icelands 2–1 - Pokémon Legends: Arceus",
    "Snowpoint Temple - Pokémon Legends: Arceus",
    "Avalugg, Lord of the Tundra - Pokémon Legends: Arceus",
    "Suspicion - Pokémon Legends: Arceus",
    "Exiled - Pokémon Legends: Arceus",
    "Disaster Looming - Pokémon Legends: Arceus",
    "Battling during a Disaster (Prelude) - Pokémon Legends: Arceus",
    "Battling during a Disaster (Alpha Prelude) - Pokémon Legends: Arceus",
    "Battling during a Disaster (Pokémon) - Pokémon Legends: Arceus",
    "Ancient Retreat - Pokémon Legends: Arceus",
    "Cave in the Lake - Pokémon Legends: Arceus",
    "Stone Portal - Pokémon Legends: Arceus",
    "Temple of Sinnoh - Pokémon Legends: Arceus",
    "The Arrival of Dialga/Palkia - Pokémon Legends: Arceus",
    "Battle! (Dialga/Palkia) - Pokémon Legends: Arceus",
    "The Other Almighty Sinnoh - Pokémon Legends: Arceus",
    "Temporary Retreat - Pokémon Legends: Arceus",
    "Origin - Pokémon Legends: Arceus",
    "Battle! (Origin Forme Dialga/Palkia) - Pokémon Legends: Arceus",
    "Finale - Pokémon Legends: Arceus",
    "Ending Theme - Pokémon Legends: Arceus",
    "Mystery Gift - Pokémon Legends: Arceus",
    "Obsidian Fieldlands 2–2 - Pokémon Legends: Arceus",
    "Cobalt Coastlands 1–2 - Pokémon Legends: Arceus",
    "Alabaster Icelands 1–2 - Pokémon Legends: Arceus",
    "The Clefairy’s Moonlit Dance - Pokémon Legends: Arceus",
    "The Lakes - Pokémon Legends: Arceus",
    "Battle! (Azelf/Mesprit/Uxie) - Pokémon Legends: Arceus",
    "Battle! (Remarkable Pokémon) - Pokémon Legends: Arceus",
    "Volo’s Goal - Pokémon Legends: Arceus",
    "Battle! (Volo) - Pokémon Legends: Arceus",
    "Giratina Appears - Pokémon Legends: Arceus",
    "Battle! (Giratina) - Pokémon Legends: Arceus",
    "Azure Flute - Pokémon Legends: Arceus",
    "Battle! (Arceus) - Pokémon Legends: Arceus",
    "Battle! (Arceus 2) - Pokémon Legends: Arceus",
    "Battle! (Arceus 3) - Pokémon Legends: Arceus",
    "Battle! (Arceus 4) - Pokémon Legends: Arceus",
    "Title Screen - Pokémon Legends: Arceus",
    "Ready to Go! - Kirby and the Forgotten Land",
    "Running Through the New World - Kirby and the Forgotten Land",
    "Waddle Dee Town - Kirby and the Forgotten Land",
    "A Trip to Alivel Mall - Kirby and the Forgotten Land",
    "VS. Dangerous Beast - Kirby and the Forgotten Land",
    "Abandoned Beach - Kirby and the Forgotten Land",
    "Lunch Rush! A Wave of Waddles - Kirby and the Forgotten Land",
    "Welcome to Wondaria - Kirby and the Forgotten Land",
    "Northeast Frost Street - Kirby and the Forgotten Land",
    "Roar of Dedede - Kirby and the Forgotten Land",
    "Moonlight Canyon - Kirby and the Forgotten Land",
    "Waddle Dee's Weapons Shop - Kirby and the Forgotten Land",
    "Sword of the Surviving Guardian - Kirby and the Forgotten Land",
    "Enter the Fiery Forbidden Lands - Kirby and the Forgotten Land",
    "Burning, Churning Power Plant - Kirby and the Forgotten Land",
    "Masked and Wild: D.D.D. - Kirby and the Forgotten Land",
    "The Dream Discoveries Tour (Guide Off) - Kirby and the Forgotten Land",
    "The Raging Lion Roars - Kirby and the Forgotten Land",
    "Elfilin - Kirby and the Forgotten Land",
    "Two Planets Approach the Roche Limit - Kirby and the Forgotten Land",
    "A Full-Speed Farewell from the New World - Kirby and the Forgotten Land",
    "Soaring Determination: No Night is Eternal - Kirby and the Forgotten Land",
    "Welcome to the New World! (Full) - Kirby and the Forgotten Land",
    "Opening / C-Side - Splatoon 3",
    "Clickbait (Splash Sessions Demo) / C-Side - Splatoon 3",
    "Clickbait / C-Side - Splatoon 3",
    "Headhammer / C-Side - Splatoon 3",
    "Triple Dip / C-Side - Splatoon 3",
    "Paintscraper / C-Side - Splatoon 3",
    "Splattack! / C-Side - Splatoon 3",
    "Sea Me Now / Front Roe - Splatoon 3",
    "Sandy Side Up / Front Roe - Splatoon 3",
    "Candy-Coated Rocks / Damp Socks feat. Off the Hook - Splatoon 3",
    "Tentacle to the Metal / Damp Socks feat. Off the Hook - Splatoon 3",
    "Now or Never! / C-Side - Splatoon 3",
    "Rinse/Repeat / C-Side - Splatoon 3",
    "Learning Curve / C-Side - Splatoon 3",
    "What's Your Style? - Splatoon 3",
    "Anarchy Splatcast / Deep Cut - Splatoon 3",
    "Welcome to Splatsville - Splatoon 3",
    "Soaking In Splatsville - Splatoon 3",
    "Dripping with Style / Seven Seas Crew - Splatoon 3",
    "Happy Little Workers (24/7 Mix) / Grizzco - Splatoon 3",
    "Frothy Waters / ω-3 - Splatoon 3",
    "You Got Them! (Salmon Run) 2 / Grizzco - Splatoon 3",
    "You Got Them! (Salmon Run) 3 - Go Off, King! / Grizzco - Splatoon 3",
    "Toxic Anoxic / ω-3 - Splatoon 3",
    "Anarchy Splatcast (Big Run) / Grizzco - Splatoon 3",
    "Bait & Click (Mutation) / ω-3 - Splatoon 3",
    "Bait & Click / ω-3 - Splatoon 3",
    "Not Bad (Do Better) / Grizzco - Splatoon 3",
    "The Crater - Splatoon 3",
    "Crater Eighters Routine / Turquoise October - Splatoon 3",
    "I'm Octavio (F34RME Remix) / DJ Octavio - Splatoon 3",
    "Meeting the New Squidbeak Splatoon - Splatoon 3",
    "Sandcastles / Stars in the Deep - Splatoon 3",
    "Sudden Depth / Mimicry - Splatoon 3",
    "Two Shadows in the Sun / Wash Out - Splatoon 3",
    "Dead Sea / Firefly - Splatoon 3",
    "Whirlpool Tune / On the Clock - Splatoon 3",
    "Hyper Diver / Anxiety Society - Splatoon 3",
    "Alterna Citizen Program M-01: Basic Course (Morning Fog) - Splatoon 3",
    "Nine Out of Tension / Octoplush - Splatoon 3",
    "Underwater Neon / Octoplush - Splatoon 3",
    "Flop to It / Octoplush - Splatoon 3",
    "Alterna Citizen Program M-02: Advanced Course (Twilight Waves) - Splatoon 3",
    "Smoke and Mirrors / Octoplush - Splatoon 3",
    "Ride or Fry / Octoplush - Splatoon 3",
    "With Flying Colors / Octoplush - Splatoon 3",
    "Seep & Destroy / Octoplush - Splatoon 3",
    "Marine Machines / Octoplush - Splatoon 3",
    "#35 caught / Octoplush - Splatoon 3",
    "Don't Flinch / Octoplush - Splatoon 3",
    "Deep Cut's Theme / Deep Cut - Splatoon 3",
    "Alterna Citizen Program M-00: Init (System Noise) - Splatoon 3",
    "Surprise and Shine / Deep Cut - Splatoon 3",
    "Our Bad - Splatoon 3",
    "Smooth as Ice - Splatoon 3",
    "Mammalian Memo / Grizzco - Splatoon 3",
    "In Filtration / Octoplush - Splatoon 3",
    "Hide and Sleek / Deep Cut - Splatoon 3",
    "Smeared Canvas / Deep Cut - Splatoon 3",
    "Greeting Mr. Grizz / Grizzco - Splatoon 3",
    "Countdown to Hairmageddon / Grizzco - Splatoon 3",
    "Go, Agent 3! - Splatoon 3",
    "Bear with Me / Grizzco - Splatoon 3",
    "Calamari Inkantation 3MIX / Deep Cut x Squid Sisters - Splatoon 3",
    "The Most Massive Fuzzball of All - Splatoon 3",
    "Wave Goodbye / Squid Sisters - Splatoon 3",
    "Alterna Citizen Program M-??: mY dEAR - Splatoon 3",
    "Anarchy Poisons / Deep Cut - Splatoon 3",
    "Anarchy Splatcast (Splatfest) / Deep Cut - Splatoon 3",
    "Anarchy Rainbow / Deep Cut - Splatoon 3",
    "Soak & Stomp / Anglerfish - Splatoon 3",
    "Commence the Fest / Deep Cut - Splatoon 3",
    "Fins in the Air / Deep Cut - Splatoon 3",
    "Till Depth Do Us Part / Deep Cut - Splatoon 3",
    "Liquid Sunshine / Squid Sisters feat. Ian BGM - Splatoon 3",
    "Now or Never! / Deep Cut - Splatoon 3",
    "Ego Overboard / Deep Cut - Splatoon 3",
    "Still Swimmin' / Deep Cut - Splatoon 3",
    "City of Color (2023) / Squid Sisters - Splatoon 3",
    "Tomorrow's Nostalgia Today / Squid Sisters - Splatoon 3",
    "Sinkopated / Backwash - Splatoon 3",
    "Drip Feed / Turf Love - Splatoon 3",
    "Heliocentri City / Wading Room - Splatoon 3",
    "Fuzzy Dazzler / New Shores - Splatoon 3",
    "Blop Bop / Bonfire - Splatoon 3",
    "Gilded Cage / All Swell - Splatoon 3",
    "Dressed to Krill / Coral Kiss - Splatoon 3",
    "Slick Moves / Crevasse - Splatoon 3",
    "Belly Flop / Aquariyum - Splatoon 3",
    "Gillty / Pianissimo - Splatoon 3",
    "Pour It On / Missing Ink - Splatoon 3",
    "Lobby Terminal - Splatoon 3",
    "The Shoal - Splatoon 3",
    "Tableturf Level Selection / Ancho-V Games - Splatoon 3",
    "Tableturf Deck Selection / Ancho-V Games - Splatoon 3",
    "Tableturf Main Theme / Ancho-V Games - Splatoon 3",
    "Tableturf Three Turns Remaining / Ancho-V Games - Splatoon 3",
    "Tableturf Win Theme / Ancho-V Games - Splatoon 3",
    "Tableturf Loss or Draw Theme / Ancho-V Games - Splatoon 3",
    "Tableturf Card List / Ancho-V Games - Splatoon 3",
    "Welcome to Paldea - Pokémon Scarlet and Pokémon Violet",
    "Across the Skies of Paldea - Pokémon Scarlet and Pokémon Violet",
    "Home - Pokémon Scarlet and Pokémon Violet",
    "Cabo Poco - Pokémon Scarlet and Pokémon Violet",
    "First Meeting - Pokémon Scarlet and Pokémon Violet",
    "Becoming Stronger - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Nemona) - Pokémon Scarlet and Pokémon Violet",
    "Poco Path - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Wild Pokémon) - Pokémon Scarlet and Pokémon Violet",
    "By the Shore - Pokémon Scarlet and Pokémon Violet",
    "Going through the Inlet Grotto - Pokémon Scarlet and Pokémon Violet",
    "Battle in the Grotto - Pokémon Scarlet and Pokémon Violet",
    "Escape from the Cave - Pokémon Scarlet and Pokémon Violet",
    "A Test of Strength - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Arven) - Pokémon Scarlet and Pokémon Violet",
    "South Province - Pokémon Scarlet and Pokémon Violet",
    "Battle! (South Province Wild Pokémon) - Pokémon Scarlet and Pokémon Violet",
    "Pokémon Center - Pokémon Scarlet and Pokémon Violet",
    "Los Platos - Pokémon Scarlet and Pokémon Violet",
    "A Stroll through the South Province - Pokémon Scarlet and Pokémon Violet",
    "Mesagoza - Pokémon Scarlet and Pokémon Violet",
    "A Tune at Mesagoza - Pokémon Scarlet and Pokémon Violet",
    "Team Star - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Team Star) - Pokémon Scarlet and Pokémon Violet",
    "The Academy - Pokémon Scarlet and Pokémon Violet",
    "A Call from Cassiopeia - Pokémon Scarlet and Pokémon Violet",
    "Professor Sada / Professor Turo - Pokémon Scarlet and Pokémon Violet",
    "Your Dorm Room - Pokémon Scarlet and Pokémon Violet",
    "Trainers’ Eyes Meet (Trainer) - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Trainer) - Pokémon Scarlet and Pokémon Violet",
    "Victory! (Trainer) - Pokémon Scarlet and Pokémon Violet",
    "Let’s Make a Sandwich! - Pokémon Scarlet and Pokémon Violet",
    "Evolution - Pokémon Scarlet and Pokémon Violet",
    "Gym Reception - Pokémon Scarlet and Pokémon Violet",
    "Gym Test - Pokémon Scarlet and Pokémon Violet",
    "Battle & Victory! (Gym Leader) - Pokémon Scarlet and Pokémon Violet",
    "West Province - Pokémon Scarlet and Pokémon Violet",
    "Battle! (West Province Wild Pokémon) - Pokémon Scarlet and Pokémon Violet",
    "Asado Desert - Pokémon Scarlet and Pokémon Violet",
    "Tera Raid Battle - Pokémon Scarlet and Pokémon Violet",
    "Victory! (Tera Raid Battle) - Pokémon Scarlet and Pokémon Violet",
    "A Stroll through the Asado Desert - Pokémon Scarlet and Pokémon Violet",
    "Cascarrafa - Pokémon Scarlet and Pokémon Violet",
    "Still at the Gym Test - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Titan) - Pokémon Scarlet and Pokémon Violet",
    "Second Battle against the Titan - Pokémon Scarlet and Pokémon Violet",
    "A Brief Moment - Pokémon Scarlet and Pokémon Violet",
    "A Stroll through the West Province - Pokémon Scarlet and Pokémon Violet",
    "Medali - Pokémon Scarlet and Pokémon Violet",
    "Time to Relax - Pokémon Scarlet and Pokémon Violet",
    "East Province - Pokémon Scarlet and Pokémon Violet",
    "Battle! (East Province Wild Pokémon) - Pokémon Scarlet and Pokémon Violet",
    "Artazon - Pokémon Scarlet and Pokémon Violet",
    "Levincia - Pokémon Scarlet and Pokémon Violet",
    "’Ello, ’Ello, Hola! Ciao and Bonjour! - Pokémon Scarlet and Pokémon Violet",
    "East Province (Area Three) - Pokémon Scarlet and Pokémon Violet",
    "A Stroll through the East Province - Pokémon Scarlet and Pokémon Violet",
    "Tagtree Thicket - Pokémon Scarlet and Pokémon Violet",
    "The Name’s Clive - Pokémon Scarlet and Pokémon Violet",
    "Raiding the Base - Pokémon Scarlet and Pokémon Violet",
    "Star Barrage - Pokémon Scarlet and Pokémon Violet",
    "A Team Star Boss Appears! - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Team Star Boss) - Pokémon Scarlet and Pokémon Violet",
    "Victory! (Team Star Boss) - Pokémon Scarlet and Pokémon Violet",
    "Treasure of the Stars - Pokémon Scarlet and Pokémon Violet",
    "North Province - Pokémon Scarlet and Pokémon Violet",
    "Battle! (North Province Wild Pokémon) - Pokémon Scarlet and Pokémon Violet",
    "Montenevera - Pokémon Scarlet and Pokémon Violet",
    "The Opening Act! - Pokémon Scarlet and Pokémon Violet",
    "MC of RIP - Pokémon Scarlet and Pokémon Violet",
    "A Stroll through the North Province - Pokémon Scarlet and Pokémon Violet",
    "Casseroya Lake - Pokémon Scarlet and Pokémon Violet",
    "Snow Slope Run - Pokémon Scarlet and Pokémon Violet",
    "North Province (Area Two) - Pokémon Scarlet and Pokémon Violet",
    "Alfornada - Pokémon Scarlet and Pokémon Violet",
    "Emotional Spectrum Practice - Pokémon Scarlet and Pokémon Violet",
    "The Pokémon League Interview - Pokémon Scarlet and Pokémon Violet",
    "The Pokémon League - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Elite Four) - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Top Champion) - Pokémon Scarlet and Pokémon Violet",
    "Victory! (Top Champion) - Pokémon Scarlet and Pokémon Violet",
    "Together with Nemona - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Champion Nemona) - Pokémon Scarlet and Pokémon Violet",
    "My One and Only Rival - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Director Clavell) - Pokémon Scarlet and Pokémon Violet",
    "Clive’s True Identity - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Cassiopeia) - Pokémon Scarlet and Pokémon Violet",
    "Hasta la Vistar! ☆ - Pokémon Scarlet and Pokémon Violet",
    "Heart - Pokémon Scarlet and Pokémon Violet",
    "Arven’s Treasure - Pokémon Scarlet and Pokémon Violet",
    "To the Great Crater of Paldea - Pokémon Scarlet and Pokémon Violet",
    "Area Zero - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Area Zero Pokémon) - Pokémon Scarlet and Pokémon Violet",
    "The Gate Opens - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Area Zero Pokémon 2) - Pokémon Scarlet and Pokémon Violet",
    "Activating Offensive Protocols - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Zero Lab) - Pokémon Scarlet and Pokémon Violet",
    "Victory! (Zero Lab) - Pokémon Scarlet and Pokémon Violet",
    "Reunion - Pokémon Scarlet and Pokémon Violet",
    "Paradise Protection Protocol Initialized - Pokémon Scarlet and Pokémon Violet",
    "Battle Form - Pokémon Scarlet and Pokémon Violet",
    "Batʇlə! (■■■) - Pokémon Scarlet and Pokémon Violet",
    "Earnest Feelings - Pokémon Scarlet and Pokémon Violet",
    "I Bid You Adieu! - Pokémon Scarlet and Pokémon Violet",
    "The Way Home - Pokémon Scarlet and Pokémon Violet",
    "Get a Little More Fun Out of this Adventure! - Pokémon Scarlet and Pokémon Violet",
    "The Academy Ace Tournament - Pokémon Scarlet and Pokémon Violet",
    "Mystery Gift - Pokémon Scarlet and Pokémon Violet",
    "The Battle Stadium - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Calamity Pokémon) - Pokémon Scarlet and Pokémon Violet",
    "Title Screen - Pokémon Scarlet and Pokémon Violet",
    "The Hidden Treasure of Area Zero: The Teal Mask - Pokémon Scarlet and Pokémon Violet",
    "Carmine & Kieran - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Carmine) - Pokémon Scarlet and Pokémon Violet",
    "Mossui Town - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Kieran) - Pokémon Scarlet and Pokémon Violet",
    "The Land of Kitakami - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Kitakami Pokémon) - Pokémon Scarlet and Pokémon Violet",
    "Photo (Pokémon March) - Pokémon Scarlet and Pokémon Violet",
    "Photo (Battle) - Pokémon Scarlet and Pokémon Violet",
    "Photo (Pokémon Lullaby) - Pokémon Scarlet and Pokémon Violet",
    "Perrin’s Theme - Pokémon Scarlet and Pokémon Violet",
    "Historic Signboard - Pokémon Scarlet and Pokémon Violet",
    "Together with Kieran - Pokémon Scarlet and Pokémon Violet",
    "The Festival of Masks - Pokémon Scarlet and Pokémon Violet",
    "Ogre Oustin’ - Pokémon Scarlet and Pokémon Violet",
    "Ogre Oustin’ Completed - Pokémon Scarlet and Pokémon Violet",
    "The Mysterious Child Who Dropped Their Mask - Pokémon Scarlet and Pokémon Violet",
    "The True History - Pokémon Scarlet and Pokémon Violet",
    "Crystal Pool - Pokémon Scarlet and Pokémon Violet",
    "Twisted - Pokémon Scarlet and Pokémon Violet",
    "The Loyal Three Return - Pokémon Scarlet and Pokémon Violet",
    "The Loyal Three Cause Trouble - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Loyal Three) - Pokémon Scarlet and Pokémon Violet",
    "Decisive Battle! (Kieran) - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Ogerpon) - Pokémon Scarlet and Pokémon Violet",
    "Caught Ogerpon! - Pokémon Scarlet and Pokémon Violet",
    "A Moment of Honesty - Pokémon Scarlet and Pokémon Violet",
    "I Need to Become Stronger - Pokémon Scarlet and Pokémon Violet",
    "The Hidden Treasure of Area Zero: The Indigo Disk - Pokémon Scarlet and Pokémon Violet",
    "Blueberry Academy - Pokémon Scarlet and Pokémon Violet",
    "To the Terarium - Pokémon Scarlet and Pokémon Violet",
    "Welcome to the Terarium! - Pokémon Scarlet and Pokémon Violet",
    "Terarium (Savanna Biome) - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Terarium Pokémon) - Pokémon Scarlet and Pokémon Violet",
    "Terarium (Coastal Biome) - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Academy Trainer) - Pokémon Scarlet and Pokémon Violet",
    "Terarium (Central Plaza) - Pokémon Scarlet and Pokémon Violet",
    "Unsettling Atmosphere - Pokémon Scarlet and Pokémon Violet",
    "A Regular Day at BB Academy - Pokémon Scarlet and Pokémon Violet",
    "Your BB Dorm Room - Pokémon Scarlet and Pokémon Violet",
    "Terarium (Canyon Biome) - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Terarium Tera Pokémon) - Pokémon Scarlet and Pokémon Violet",
    "The Flying Time Trial - Pokémon Scarlet and Pokémon Violet",
    "Elite Trial Completed - Pokémon Scarlet and Pokémon Violet",
    "Terarium (Polar Biome) - Pokémon Scarlet and Pokémon Violet",
    "Battle! (BB League Elite Four) - Pokémon Scarlet and Pokémon Violet",
    "Victory! (BB League Elite Four) - Pokémon Scarlet and Pokémon Violet",
    "True Feelings - Pokémon Scarlet and Pokémon Violet",
    "The Battle Begins - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Champion Kieran) - Pokémon Scarlet and Pokémon Violet",
    "Kieran Defeated - Pokémon Scarlet and Pokémon Violet",
    "Briar’s Theme - Pokémon Scarlet and Pokémon Violet",
    "Area Zero Underdepths - Pokémon Scarlet and Pokémon Violet",
    "Terapagos Reawakened - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Terapagos) - Pokémon Scarlet and Pokémon Violet",
    "What the Hidden Treasure Needs - Pokémon Scarlet and Pokémon Violet",
    "Terapagos Goes Berserk - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Terapagos, the Hidden Treasure of Area Zero) - Pokémon Scarlet and Pokémon Violet",
    "Caught Terapagos! - Pokémon Scarlet and Pokémon Violet",
    "Starting Over from Zero - Pokémon Scarlet and Pokémon Violet",
    "Studying Together with Team Star - Pokémon Scarlet and Pokémon Violet",
    "Relic Song - Pokémon Scarlet and Pokémon Violet",
    "The Curse of the Village...? - Pokémon Scarlet and Pokémon Violet",
    "Mochi Mayhem - Pokémon Scarlet and Pokémon Violet",
    "A Drone? A Pokémon? It’s Binding Mochi! - Pokémon Scarlet and Pokémon Violet",
    "Battle! (Pecharunt) - Pokémon Scarlet and Pokémon Violet",
    "Title Screen (The Hidden Treasure of Area Zero) - Pokémon Scarlet and Pokémon Violet",
    "Emblem Engage! - Fire Emblem Engage",
    "Emblem Engage! (English) - Fire Emblem Engage",
    "Engage... - Fire Emblem Engage",
    "Fire Emblem Theme - Fire Emblem Engage",
    "The Dragon's Dream - Fire Emblem Engage",
    "Weary Confrontation - Fire Emblem Engage",
    "Weary Confrontation (Gloom) - Fire Emblem Engage",
    "Garden of Light - Fire Emblem Engage",
    "Faraway Holy Land - Fire Emblem Engage",
    "Faraway Holy Land (Flare) - Fire Emblem Engage",
    "Corrupted - Fire Emblem Engage",
    "Shine on, Emblem of Beginnings - Fire Emblem Engage",
    "Engage - Fire Emblem Engage",
    "History of Elyos - Fire Emblem Engage",
    "Holy Land of Lythos - Fire Emblem Engage",
    "The Twelve Stars - Fire Emblem Engage",
    "Trial of Emblems - Fire Emblem Engage",
    "Trial of Emblems (Shine On) - Fire Emblem Engage",
    "Mother and Child Reunited - Fire Emblem Engage",
    "Provide for Us, Emblem of the Holy War - Fire Emblem Engage",
    "Trial of the Holy War - Fire Emblem Engage",
    "Trial of the Holy War (Provide for Us) - Fire Emblem Engage",
    "A Goddess and Her Puppets - Fire Emblem Engage",
    "Memories from Red Days - Fire Emblem Engage",
    "Faraway, Eternal Holy Land - Fire Emblem Engage",
    "Faraway, Eternal Holy Land (Flare) - Fire Emblem Engage",
    "Surprise Attack - Fire Emblem Engage",
    "Pinky Promise - Fire Emblem Engage",
    "Good Morning, Divine One - Fire Emblem Engage",
    "Emblems at the Dinner Table - Fire Emblem Engage",
    "Bloom in the Breeze - Fire Emblem Engage",
    "Bloom in the Breeze (Blossom) - Fire Emblem Engage",
    "Firene, Kingdom of Abundance - Fire Emblem Engage",
    "The Bountiful Prince - Fire Emblem Engage",
    "Crisis - Fire Emblem Engage",
    "Trial of Echoes - Fire Emblem Engage",
    "Trial of Echoes (Care for Us) - Fire Emblem Engage",
    "A Beacon of Light Awakens - Fire Emblem Engage",
    "Preparations - Fire Emblem Engage",
    "Spreader of Chaos - Fire Emblem Engage",
    "Spreader of Chaos (Frenzy) - Fire Emblem Engage",
    "Silver-White Heart - Fire Emblem Engage",
    "On Day Patrol, Divine One? - Fire Emblem Engage",
    "Friendly Chat - Fire Emblem Engage",
    "Your Journey - Fire Emblem Engage",
    "Scheming - Fire Emblem Engage",
    "Full Bloom in the Breeze - Fire Emblem Engage",
    "Full Bloom in the Breeze (Blossom) - Fire Emblem Engage",
    "A Fight for Peace - Fire Emblem Engage",
    "Enjoy the Evening, Divine One - Fire Emblem Engage",
    "Hiya Papaya! - Fire Emblem Engage",
    "Trial of Dawn - Fire Emblem Engage",
    "Trial of Dawn (Heal Us) - Fire Emblem Engage",
    "Another Day of Training? - Fire Emblem Engage",
    "A Tea Party in Firene - Fire Emblem Engage",
    "Royal Confidence - Fire Emblem Engage",
    "Royal Confidence (Might) - Fire Emblem Engage",
    "Standoff - Fire Emblem Engage",
    "Looming Battle - Fire Emblem Engage",
    "Brodia, Kingdom of Might - Fire Emblem Engage",
    "The Warrior Prince - Fire Emblem Engage",
    "Mighty Governance - Fire Emblem Engage",
    "Trial of Binding - Fire Emblem Engage",
    "Trial of Binding (Rise Up) - Fire Emblem Engage",
    "Free Us, Emblem of Genealogy - Fire Emblem Engage",
    "Trial of Genealogy - Fire Emblem Engage",
    "Trial of Genealogy (Free Us) - Fire Emblem Engage",
    "A Warrior's Pride - Fire Emblem Engage",
    "Late-Night Stroll, Divine One? - Fire Emblem Engage",
    "Sentimental Moment - Fire Emblem Engage",
    "Tranquility - Fire Emblem Engage",
    "Clash - Fire Emblem Engage",
    "Unshaken Royal Confidence - Fire Emblem Engage",
    "Unshaken Royal Confidence (Might) - Fire Emblem Engage",
    "Weapons Unleashed - Fire Emblem Engage",
    "Weapons Unleashed (Struggle) - Fire Emblem Engage",
    "Keeper of History - Fire Emblem Engage",
    "Keeper of History (Frenzy) - Fire Emblem Engage",
    "Brodians Are Robust Fishers! - Fire Emblem Engage",
    "Good Company in Brodia - Fire Emblem Engage",
    "Tear Streaked (Ice) - Fire Emblem Engage",
    "Elusia, Kingdom of Knowledge - Fire Emblem Engage",
    "A Contemplative Princess - Fire Emblem Engage",
    "Slithering Cold - Fire Emblem Engage",
    "Enforcer of Knowledge - Fire Emblem Engage",
    "Enforcer of Knowledge (Frenzy) - Fire Emblem Engage",
    "Final Farewell - Fire Emblem Engage",
    "Tragedy - Fire Emblem Engage",
    "Stalwart Preparations - Fire Emblem Engage",
    "Fell Dragon Sombron - Fire Emblem Engage",
    "Black-Silver Devastation - Fire Emblem Engage",
    "Chilling Rain - Fire Emblem Engage",
    "Broken Bonds - Fire Emblem Engage",
    "A Pact for Piety - Fire Emblem Engage",
    "Sweep Across, Emblem of Blazing - Fire Emblem Engage",
    "Trial of Blazing - Fire Emblem Engage",
    "Trial of Blazing (Sweep Across) - Fire Emblem Engage",
    "Reignite Us, Emblem of Awakening - Fire Emblem Engage",
    "Trial of Awakening - Fire Emblem Engage",
    "Trial of Awakening (Reignite Us) - Fire Emblem Engage",
    "Dark Shadows - Fire Emblem Engage",
    "A Dragon Who Saves the World - Fire Emblem Engage",
    "Illumination - Fire Emblem Engage",
    "Try Your Hand at Wyvern Riding? - Fire Emblem Engage",
    "Dinner in Elusia - Fire Emblem Engage",
    "Bright Sandstorm - Fire Emblem Engage",
    "Bright Sandstorm (Fiery) - Fire Emblem Engage",
    "Desert Rose - Fire Emblem Engage",
    "Solm, Queendom of Freedom - Fire Emblem Engage",
    "The Free Princess - Fire Emblem Engage",
    "Trial of Radiance - Fire Emblem Engage",
    "Trial of Radiance (Fight On) - Fire Emblem Engage",
    "The Sentinels - Fire Emblem Engage",
    "Bright, Bold Sandstorm - Fire Emblem Engage",
    "Bright, Bold Sandstorm (Fiery) - Fire Emblem Engage",
    "Tenacity of Freedom - Fire Emblem Engage",
    "The Fell Dragon's Hounds - Fire Emblem Engage",
    "The Four Hounds - Fire Emblem Engage",
    "The Four Hounds (Frenzy) - Fire Emblem Engage",
    "Trial of the Academy - Fire Emblem Engage",
    "Trial of the Academy (Teach Us) - Fire Emblem Engage",
    "An Everyday Sort of Day - Fire Emblem Engage",
    "Trial of Fates - Fire Emblem Engage",
    "Trial of Fates (Bare Your Fangs) - Fire Emblem Engage",
    "Conferring - Fire Emblem Engage",
    "Trial of the Sacred - Fire Emblem Engage",
    "Trial of the Sacred (Restore Calm) - Fire Emblem Engage",
    "Camping in Solm - Fire Emblem Engage",
    "Determined Journey - Fire Emblem Engage",
    "Determined Journey (Flare) - Fire Emblem Engage",
    "Advancing Sounds of Despair - Fire Emblem Engage",
    "The Bell Tolls - Fire Emblem Engage",
    "Falling Wings - Fire Emblem Engage",
    "Falling Petals - Fire Emblem Engage",
    "Dark Gray Feelings - Fire Emblem Engage",
    "Death of the Divine Dragon - Fire Emblem Engage",
    "The Sixth Land - Fire Emblem Engage",
    "Burned Earth of Gradlon - Fire Emblem Engage",
    "The Emblems' Miracle - Fire Emblem Engage",
    "Trial of the Pact - Fire Emblem Engage",
    "Trial of the Pact (Connect Us) - Fire Emblem Engage",
    "Dreaming of Family - Fire Emblem Engage",
    "Two Encounters - Fire Emblem Engage",
    "Defective - Fire Emblem Engage",
    "Defective (Frenzy) - Fire Emblem Engage",
    "Hallway of Darkness - Fire Emblem Engage",
    "A Thousand Years Alone - Fire Emblem Engage",
    "Distorted Flash of Light - Fire Emblem Engage",
    "Goddess in Shadow - Fire Emblem Engage",
    "Goddess in Shadow (Frenzy) - Fire Emblem Engage",
    "Thank You...Mother - Fire Emblem Engage",
    "When Life Returns - Fire Emblem Engage",
    "Extinguished Light - Fire Emblem Engage",
    "Last Engage (Prayer-Incantation) - Fire Emblem Engage",
    "Their Journeys - Fire Emblem Engage",
    "Heartfelt Farewell - Fire Emblem Engage",
    "Caring - Fire Emblem Engage",
    "Heed Our Summons - Fire Emblem Engage",
    "Trial of Heroes - Fire Emblem Engage",
    "Trial of Heroes (Heed Our Summons) - Fire Emblem Engage",
    "Dragon's Journey - Fire Emblem Engage",
    "Twin Dragons' Hope - Fire Emblem Engage",
    "Salvation and Loss - Fire Emblem Engage",
    "Salvation and Loss (Rebellion) - Fire Emblem Engage",
    "Inconstant One - Fire Emblem Engage",
    "Inconstant One (Frenzy) - Fire Emblem Engage",
    "Recollections - Fire Emblem Engage",
    "Unfulfilled Dreams - Fire Emblem Engage",
    "Awakening from a Brief Slumber - Fire Emblem Engage",
    "Mirrored Engage - Fire Emblem Engage",
    "Fire Emblem Theme (The Fire Emblem) - Fire Emblem Engage",
    "The Journey Is Finally... - Fire Emblem Engage",
    "Fiery Bonds - Fire Emblem Engage",
    "Prologue 1 - The Legend of Zelda: Tears of the Kingdom",
    "The Legend in the Mural - The Legend of Zelda: Tears of the Kingdom",
    "Prologue 2 - The Legend of Zelda: Tears of the Kingdom",
    "Memory: The Awakening - The Legend of Zelda: Tears of the Kingdom",
    "Opening - The Legend of Zelda: Tears of the Kingdom",
    "Overworld (Skies) - The Legend of Zelda: Tears of the Kingdom",
    "The Temple of Time - The Legend of Zelda: Tears of the Kingdom",
    "Meeting Rauru, Source of the Right Arm - The Legend of Zelda: Tears of the Kingdom",
    "Sky Islands - The Legend of Zelda: Tears of the Kingdom",
    "Shrines of Light - The Legend of Zelda: Tears of the Kingdom",
    "Rauru's Guidance - The Legend of Zelda: Tears of the Kingdom",
    "Battle (Overworld) - The Legend of Zelda: Tears of the Kingdom",
    "Parting Ways with Rauru - The Legend of Zelda: Tears of the Kingdom",
    "You Must Find Me - The Legend of Zelda: Tears of the Kingdom",
    "Skydiving - The Legend of Zelda: Tears of the Kingdom",
    "Overworld (Surface, Day) - The Legend of Zelda: Tears of the Kingdom",
    "Lookout Landing - The Legend of Zelda: Tears of the Kingdom",
    "Reuniting with Purah - The Legend of Zelda: Tears of the Kingdom",
    "Report on the Depths and Sky - The Legend of Zelda: Tears of the Kingdom",
    "Hyrule Castle (Surface) - The Legend of Zelda: Tears of the Kingdom",
    "Pull the Switch - The Legend of Zelda: Tears of the Kingdom",
    "Skyview Tower Launch! - The Legend of Zelda: Tears of the Kingdom",
    "A Vast World - The Legend of Zelda: Tears of the Kingdom",
    "Rocky Terrain - The Legend of Zelda: Tears of the Kingdom",
    "Skydiving (Depths) - The Legend of Zelda: Tears of the Kingdom",
    "Overworld (Depths) - The Legend of Zelda: Tears of the Kingdom",
    "Lightroot - The Legend of Zelda: Tears of the Kingdom",
    "The Dragon's Tears: Introduction - The Legend of Zelda: Tears of the Kingdom",
    "Memory: Where Am I? - The Legend of Zelda: Tears of the Kingdom",
    "Skyview Tower - The Legend of Zelda: Tears of the Kingdom",
    "Flux Construct Battle - The Legend of Zelda: Tears of the Kingdom",
    "Memory: An Unfamiliar World - The Legend of Zelda: Tears of the Kingdom",
    "Gloom Spawn Battle - The Legend of Zelda: Tears of the Kingdom",
    "The Blood Moon - The Legend of Zelda: Tears of the Kingdom",
    "Lucky Clover Gazette - The Legend of Zelda: Tears of the Kingdom",
    "Rito Village (Strange Phenomena) - The Legend of Zelda: Tears of the Kingdom",
    "Reuniting with Tulin - The Legend of Zelda: Tears of the Kingdom",
    "Tulin and the Stolen Bow - The Legend of Zelda: Tears of the Kingdom",
    "Incoming Attack - The Legend of Zelda: Tears of the Kingdom",
    "Off to Investigate the Cloud - The Legend of Zelda: Tears of the Kingdom",
    "The Thunderhead - The Legend of Zelda: Tears of the Kingdom",
    "Wind Temple (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Wind Temple (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Wind Temple (Third Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Wind Temple (Fourth Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Wind Temple (Fifth Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Colgera Appears - The Legend of Zelda: Tears of the Kingdom",
    "Battle with Colgera (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Battle with Colgera (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    "The Ancient Sage of the Rito Speaks - The Legend of Zelda: Tears of the Kingdom",
    "What We Must Do - The Legend of Zelda: Tears of the Kingdom",
    "Our Mission, Duty, and Destiny - The Legend of Zelda: Tears of the Kingdom",
    "Tulin, Sage of Wind - The Legend of Zelda: Tears of the Kingdom",
    "The Phenomenon Is Ended - The Legend of Zelda: Tears of the Kingdom",
    "Gleeok Battle - The Legend of Zelda: Tears of the Kingdom",
    "Memory: Mineru's Counsel - The Legend of Zelda: Tears of the Kingdom",
    "Plains - The Legend of Zelda: Tears of the Kingdom",
    "Goron City (Strange Phenomena) - The Legend of Zelda: Tears of the Kingdom",
    "Reuniting with Yunobo - The Legend of Zelda: Tears of the Kingdom",
    "YunoboCo HQ - The Legend of Zelda: Tears of the Kingdom",
    "Battle with Yunobo, Clearly Not Himself - The Legend of Zelda: Tears of the Kingdom",
    "Yunobo, Back to His Senses - The Legend of Zelda: Tears of the Kingdom",
    "Following Zelda to Death Mountain - The Legend of Zelda: Tears of the Kingdom",
    "Moragia Appears - The Legend of Zelda: Tears of the Kingdom",
    "Battle with Moragia - The Legend of Zelda: Tears of the Kingdom",
    "Fire Temple (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Fire Temple (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Fire Temple (Third Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Fire Temple (Fourth Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Fire Temple (Fifth Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Marbled Gohma Appears - The Legend of Zelda: Tears of the Kingdom",
    "Battle with Marbled Gohma (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Battle with Marbled Gohma (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    "The Ancient Sage of the Gorons Speaks - The Legend of Zelda: Tears of the Kingdom",
    "Yunobo, Sage of Fire - The Legend of Zelda: Tears of the Kingdom",
    "Goron City (Night) - The Legend of Zelda: Tears of the Kingdom",
    "Minigame: Mine-Cart Land - The Legend of Zelda: Tears of the Kingdom",
    "Battle (Overworld - Monster-Control Crew) - The Legend of Zelda: Tears of the Kingdom",
    "Overworld (Surface, Night) - The Legend of Zelda: Tears of the Kingdom",
    "Minigame: Ultra Ball Haul - The Legend of Zelda: Tears of the Kingdom",
    "Battle (Overworld - Depths/Caves) - The Legend of Zelda: Tears of the Kingdom",
    "Abandoned Mines in the Depths - The Legend of Zelda: Tears of the Kingdom",
    "Fierce Master Kohga - The Legend of Zelda: Tears of the Kingdom",
    "Frox Battle - The Legend of Zelda: Tears of the Kingdom",
    "Shrine of Light: Blessing - The Legend of Zelda: Tears of the Kingdom",
    "Battle (Overworld - Boss Bokoblin) - The Legend of Zelda: Tears of the Kingdom",
    "Zora's Domain (Strange Phenomena) - The Legend of Zelda: Tears of the Kingdom",
    "Cleaned the Sludge-Covered Statue - The Legend of Zelda: Tears of the Kingdom",
    "Meeting Yona - The Legend of Zelda: Tears of the Kingdom",
    "Mipha Court - The Legend of Zelda: Tears of the Kingdom",
    "Reuniting with Sidon - The Legend of Zelda: Tears of the Kingdom",
    "Pristine Sanctum - The Legend of Zelda: Tears of the Kingdom",
    "Battle with Sludge Like - The Legend of Zelda: Tears of the Kingdom",
    "Sidon's Resolve - The Legend of Zelda: Tears of the Kingdom",
    "Into the Whirlpool - The Legend of Zelda: Tears of the Kingdom",
    "Ancient Zora Waterworks - The Legend of Zelda: Tears of the Kingdom",
    "A Temple Appears in the Zora Skies - The Legend of Zelda: Tears of the Kingdom",
    "Overworld (Low Gravity) - The Legend of Zelda: Tears of the Kingdom",
    "Water Temple (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Water Temple (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Water Temple (Third Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Water Temple (Fourth Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Mucktorok Appears - The Legend of Zelda: Tears of the Kingdom",
    "Battle with Mucktorok (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Battle with Mucktorok (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    "The Ancient Sage of the Zora Speaks - The Legend of Zelda: Tears of the Kingdom",
    "Sidon, Sage of Water - The Legend of Zelda: Tears of the Kingdom",
    "The New King and Queen of the Zora - The Legend of Zelda: Tears of the Kingdom",
    "Zora's Domain (Night) - The Legend of Zelda: Tears of the Kingdom",
    "Minigame: Dive Ceremony - The Legend of Zelda: Tears of the Kingdom",
    "Shrine of Light, Before the Trial - The Legend of Zelda: Tears of the Kingdom",
    "Battle (Shrine of Light) - The Legend of Zelda: Tears of the Kingdom",
    "Memory: The Gerudo Assault - The Legend of Zelda: Tears of the Kingdom",
    "Chatty Master Kohga - The Legend of Zelda: Tears of the Kingdom",
    "Battle with the Returned Master Kohga - The Legend of Zelda: Tears of the Kingdom",
    "Memory: A Show of Fealty - The Legend of Zelda: Tears of the Kingdom",
    "Gerudo Town (Strange Phenomena) - The Legend of Zelda: Tears of the Kingdom",
    "Gerudo Shelter - The Legend of Zelda: Tears of the Kingdom",
    "Desert Ruins - The Legend of Zelda: Tears of the Kingdom",
    "Reuniting with Riju - The Legend of Zelda: Tears of the Kingdom",
    "Defending Kara Kara Bazaar - The Legend of Zelda: Tears of the Kingdom",
    "After the Battle at Kara Kara Bazaar - The Legend of Zelda: Tears of the Kingdom",
    "Defending Gerudo Town - The Legend of Zelda: Tears of the Kingdom",
    "A Massive Gerudo Pyramid Appears - The Legend of Zelda: Tears of the Kingdom",
    "Queen Gibdo's Arrival - The Legend of Zelda: Tears of the Kingdom",
    "Battle with Queen Gibdo (First Encounter) - The Legend of Zelda: Tears of the Kingdom",
    "Battle (Temple) - The Legend of Zelda: Tears of the Kingdom",
    "Lightning Temple (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Lightning Temple (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Lightning Temple (Third Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Lightning Temple (Fourth Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Battle with Queen Gibdo (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Battle with Queen Gibdo (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    "The Ancient Sage of the Gerudo Speaks - The Legend of Zelda: Tears of the Kingdom",
    "Riju, Sage of Lightning - The Legend of Zelda: Tears of the Kingdom",
    "Gerudo Town (Day) - The Legend of Zelda: Tears of the Kingdom",
    "Gerudo Town (Night) - The Legend of Zelda: Tears of the Kingdom",
    "Memory: Zelda and Sonia - The Legend of Zelda: Tears of the Kingdom",
    "Memory: Sonia Is Caught by Treachery - The Legend of Zelda: Tears of the Kingdom",
    "Signs of Monsters - The Legend of Zelda: Tears of the Kingdom",
    "Lurelin Village Restoration Feast - The Legend of Zelda: Tears of the Kingdom",
    "Lurelin Village (Night) - The Legend of Zelda: Tears of the Kingdom",
    "Memory: Birth of the Demon King - The Legend of Zelda: Tears of the Kingdom",
    "The Blood Moon Rises over Hyrule Castle - The Legend of Zelda: Tears of the Kingdom",
    "Lookout Landing Shrouded in Darkness - The Legend of Zelda: Tears of the Kingdom",
    "Hyrule Castle (Skies) - The Legend of Zelda: Tears of the Kingdom",
    "There Is Something Here I Want to Show You - The Legend of Zelda: Tears of the Kingdom",
    "Battle with Phantom Ganon (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Battle with Phantom Ganon (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    "You Stand Before Ganondorf - The Legend of Zelda: Tears of the Kingdom",
    "Memory: The Demon King's Army - The Legend of Zelda: Tears of the Kingdom",
    "The Five Meet - The Legend of Zelda: Tears of the Kingdom",
    "Lookout Landing (The Four Sages Gather) - The Legend of Zelda: Tears of the Kingdom",
    "Kakariko Village (Night) - The Legend of Zelda: Tears of the Kingdom",
    "Hateno Village (Night) - The Legend of Zelda: Tears of the Kingdom",
    "The World-Renowned Cece - The Legend of Zelda: Tears of the Kingdom",
    "Cece Hat - The Legend of Zelda: Tears of the Kingdom",
    "The Mayoral Election Begins - The Legend of Zelda: Tears of the Kingdom",
    "The Mayoral Election - The Legend of Zelda: Tears of the Kingdom",
    "Cece and Reede - The Legend of Zelda: Tears of the Kingdom",
    "Hateno School - The Legend of Zelda: Tears of the Kingdom",
    "Hateno Ancient Tech Lab - The Legend of Zelda: Tears of the Kingdom",
    "Memory: The Sages' Vow - The Legend of Zelda: Tears of the Kingdom",
    "Memory: A King's Duty - The Legend of Zelda: Tears of the Kingdom",
    "Thunderhead Isles Appear - The Legend of Zelda: Tears of the Kingdom",
    "Thunderhead Isles - The Legend of Zelda: Tears of the Kingdom",
    "Dragonhead Island - The Legend of Zelda: Tears of the Kingdom",
    "Tobio's Hollow Chasm - The Legend of Zelda: Tears of the Kingdom",
    "Assemble a Body - The Legend of Zelda: Tears of the Kingdom",
    "Construct Factory (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Construct Factory (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Construct Factory (Third Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Construct Factory (Fourth Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Restored Construct - The Legend of Zelda: Tears of the Kingdom",
    "To the Spirit Temple - The Legend of Zelda: Tears of the Kingdom",
    "Construct Factory (Fifth Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Zonai Storage Platform - The Legend of Zelda: Tears of the Kingdom",
    "Spirit Temple - The Legend of Zelda: Tears of the Kingdom",
    "Seized Construct Appears - The Legend of Zelda: Tears of the Kingdom",
    "Battle with Seized Construct (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Battle with Seized Construct (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Mineru, Sage of Spirit - The Legend of Zelda: Tears of the Kingdom",
    "What I Must Relate to You Is a Tragedy  - The Legend of Zelda: Tears of the Kingdom",
    "Memory: The Imprisoning War - The Legend of Zelda: Tears of the Kingdom",
    "At the End of the Battle - The Legend of Zelda: Tears of the Kingdom",
    "Memory: Critical Decisions - The Legend of Zelda: Tears of the Kingdom",
    "Let Us Go Now - The Legend of Zelda: Tears of the Kingdom",
    "Korok Forest (Strange Phenomena) - The Legend of Zelda: Tears of the Kingdom",
    "Korok Forest Purified - The Legend of Zelda: Tears of the Kingdom",
    "Memory: The Master Sword's Power - The Legend of Zelda: Tears of the Kingdom",
    "Korok Forest (Night) - The Legend of Zelda: Tears of the Kingdom",
    "Memory: A Master Sword in Time - The Legend of Zelda: Tears of the Kingdom",
    "The Dragon's Final Tear - The Legend of Zelda: Tears of the Kingdom",
    "Memory: Tears of the Dragon - The Legend of Zelda: Tears of the Kingdom",
    "All the Dragon's Tears - The Legend of Zelda: Tears of the Kingdom",
    "The Light Dragon - The Legend of Zelda: Tears of the Kingdom",
    "The Sword Held by the Dragon - The Legend of Zelda: Tears of the Kingdom",
    "The Master Sword in Reach - The Legend of Zelda: Tears of the Kingdom",
    "Zelda's Wish Granted - The Legend of Zelda: Tears of the Kingdom",
    "Memory: Zelda's Wish - The Legend of Zelda: Tears of the Kingdom",
    "Hyrule Castle Chasm - The Legend of Zelda: Tears of the Kingdom",
    "Battle (Hyrule Castle Chasm) - The Legend of Zelda: Tears of the Kingdom",
    "Battle (Forgotten Foundation) - The Legend of Zelda: Tears of the Kingdom",
    "Gloom's Lair - The Legend of Zelda: Tears of the Kingdom",
    "The Sages Assemble - The Legend of Zelda: Tears of the Kingdom",
    "The Demon King's Army - The Legend of Zelda: Tears of the Kingdom",
    "Trust the Sages and Go - The Legend of Zelda: Tears of the Kingdom",
    "Standing Off Against Demon King Ganondorf - The Legend of Zelda: Tears of the Kingdom",
    "Battle with Ganondorf - The Legend of Zelda: Tears of the Kingdom",
    "Ganondorf's Secret Stone Unleashed - The Legend of Zelda: Tears of the Kingdom",
    "Battle with Ganondorf, Second Form (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Battle with Ganondorf, Second Form (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    "Draconified Demon King - The Legend of Zelda: Tears of the Kingdom",
    "The Demon Dragon and the Light Dragon - The Legend of Zelda: Tears of the Kingdom",
    "Battle with Demon Dragon - The Legend of Zelda: Tears of the Kingdom",
    "Demon Dragon Destroyed - The Legend of Zelda: Tears of the Kingdom",
    "The Miracle - The Legend of Zelda: Tears of the Kingdom",
    "Reaching for Her Hand - The Legend of Zelda: Tears of the Kingdom",
    "Oh, Link... I'm Home! - The Legend of Zelda: Tears of the Kingdom",
    "Staff Credits - The Legend of Zelda: Tears of the Kingdom",
    "Epilogue - The Legend of Zelda: Tears of the Kingdom",
    "Link's House - The Legend of Zelda: Tears of the Kingdom",
    "Koltin - The Legend of Zelda: Tears of the Kingdom",
    "Satori Under the Cherry Blossoms - The Legend of Zelda: Tears of the Kingdom",
    "Tarrey Town (Day) - The Legend of Zelda: Tears of the Kingdom",
    "Tarrey Town (Night) - The Legend of Zelda: Tears of the Kingdom",
    "Hudson Construction Site (Day) - The Legend of Zelda: Tears of the Kingdom",
    "Hudson Construction Site (Night) - The Legend of Zelda: Tears of the Kingdom",
    "Riding the Sun Balloon - The Legend of Zelda: Tears of the Kingdom",
    "Sav'orq, Every-son! - The Legend of Zelda: Tears of the Kingdom",
    "Mattison's Independence - The Legend of Zelda: Tears of the Kingdom",
    "The Yiga Clan Hideout - The Legend of Zelda: Tears of the Kingdom",
    "Minigame: Yiga Training - The Legend of Zelda: Tears of the Kingdom",
    "Forgotten Temple - The Legend of Zelda: Tears of the Kingdom",
    "Lomei Labyrinths (Sky) - The Legend of Zelda: Tears of the Kingdom",
    "Lomei Labyrinths (Depths) - The Legend of Zelda: Tears of the Kingdom",
    "On the Glowing Tree - The Legend of Zelda: Tears of the Kingdom",
    "Serenade to a Great Fairy - The Legend of Zelda: Tears of the Kingdom",
    "The Ultimate Dish - The Legend of Zelda: Tears of the Kingdom",
    "Tears of the Kingdom: Main Theme (Reprise) - The Legend of Zelda: Tears of the Kingdom",
    "E3 2019 Reveal Trailer - The Legend of Zelda: Tears of the Kingdom",
    "Second Trailer - The Legend of Zelda: Tears of the Kingdom",
    "Third Trailer - The Legend of Zelda: Tears of the Kingdom",
    "Title Screen - Pikmin 4",
    "Pikmin Discovered! - Pikmin 4",
    "Taking Charge - Pikmin 4",
    "Taking on More - Pikmin 4",
    "Pikmin Hide-and-Seek - Pikmin 4",
    "Ready to Deploy - Pikmin 4",
    "Must Be Fate - Pikmin 4",
    "Restart the S.S. Shepherd - Pikmin 4",
    "The Onion Takes Root - Pikmin 4",
    "First Day's Results - Pikmin 4",
    "Strategy Meeting - Pikmin 4",
    "Small Discovery - Pikmin 4",
    "New Discovery - Pikmin 4",
    "Big Discovery - Pikmin 4",
    "An Abnormality! - Pikmin 4",
    "Meeting the Red Pikmin - Pikmin 4",
    "An Onion Matures - Pikmin 4",
    "Onions Fuse - Pikmin 4",
    "Before Nightfall - Pikmin 4",
    "Today's Rescue Results - Pikmin 4",
    "Rescue Command Post - Pikmin 4",
    "Expanding the Rescue Command Post - Pikmin 4",
    "Field Guides - Pikmin 4",
    "Dandori Preparation - Pikmin 4",
    "Sun-Speckled Terrace (Flyover) - Pikmin 4",
    "Sun-Speckled Terrace - Pikmin 4",
    "Blossoming Arcadia (Flyover) - Pikmin 4",
    "Blossoming Arcadia - Pikmin 4",
    "Serene Shores (Flyover) - Pikmin 4",
    "Serene Shores - Pikmin 4",
    "Hero's Hideaway (Flyover) - Pikmin 4",
    "Hero's Hideaway - Pikmin 4",
    "Giant's Hearth (Flyover) - Pikmin 4",
    "Giant's Hearth - Pikmin 4",
    "Primordial Thicket (Flyover) - Pikmin 4",
    "Primordial Thicket - Pikmin 4",
    "Spelunking - Pikmin 4",
    "Cave Exploration (Toy Box) - Pikmin 4",
    "Cave Exploration (Engulfed Castle) - Pikmin 4",
    "Waterwraith Appears - Pikmin 4",
    "Cave Exploration (Waterwraith) - Pikmin 4",
    "All Pikmin Lost! - Pikmin 4",
    "Cave Exploration (Safe) - Pikmin 4",
    "Cave Results - Pikmin 4",
    "Battling a Strong Creature - Pikmin 4",
    "Battling a Stronger Creature - Pikmin 4",
    "Battling an Even Stronger Creature - Pikmin 4",
    "Groovy Long Legs Battle - Pikmin 4",
    "Giant Breadbug Battle - Pikmin 4",
    "Smoky Progg Battle - Pikmin 4",
    "Leafling Encounter - Pikmin 4",
    "Dandori, Dandori - Pikmin 4",
    "Dandori Challenge 1 - Pikmin 4",
    "Dandori Challenge 2 - Pikmin 4",
    "Dandori Challenge Overtime - Pikmin 4",
    "Dandori Challenge Results - Pikmin 4",
    "The Mysterious Leafling - Pikmin 4",
    "Dandori Training - Pikmin 4",
    "Dandori Battle (Toy Box) - Pikmin 4",
    "Dandori Battle (Sandbox) - Pikmin 4",
    "Dandori Battle Victory - Pikmin 4",
    "Meeting the Glow Pikmin - Pikmin 4",
    "Nighttime Expedition - Pikmin 4",
    "Nighttime Expedition Results - Pikmin 4",
    "Commence Leafling Treatment - Pikmin 4",
    "Leafling Treatment Complete - Pikmin 4",
    "Moss the Guard Dog - Pikmin 4",
    "Pikmin, Kidnapped - Pikmin 4",
    "Chasing after Moss - Pikmin 4",
    "Olimar's Shelter? - Pikmin 4",
    "Final Test of Skill - Pikmin 4",
    "Dandori Battle vs. Olimar? - Pikmin 4",
    "Olimar Defeated? - Pikmin 4",
    "Olimar Rescue Mission: Complete! - Pikmin 4",
    "Olimar Aboard - Pikmin 4",
    "Credits - Pikmin 4",
    "Ancient Sirehound Appears - Pikmin 4",
    "Ancient Sirehound Battle - Pikmin 4",
    "Louie Secured - Pikmin 4",
    "Oatchi Cured - Pikmin 4",
    "Mission Complete! Prepare to Return Home - Pikmin 4",
    "Back Where We Belong - Pikmin 4",
    "So Long, Pikmin - Pikmin 4",
    "Finale - Pikmin 4",
    "Final Rescue Results - Pikmin 4",
    "Olimar's Shipwreck Tale: Area Select - Pikmin 4",
    "Olimar's Shipwreck Tale: Sun-Speckled Terrace - Pikmin 4",
    "Olimar's Shipwreck Tale: Sun-Speckled Terrace (Evening) - Pikmin 4",
    "Olimar's Shipwreck Tale: Ship Powered Up - Pikmin 4",
    "Olimar's Shipwreck Tale: Blossoming Arcadia - Pikmin 4",
    "Olimar's Shipwreck Tale: Blossoming Arcadia (Evening) - Pikmin 4",
    "Olimar's Shipwreck Tale: Meeting Moss - Pikmin 4",
    "Olimar's Shipwreck Tale: Serene Shores - Pikmin 4",
    "Olimar's Shipwreck Tale: Serene Shores (Evening) - Pikmin 4",
    "Olimar's Shipwreck Tale: Battling a Strong Creature - Pikmin 4",
    "Olimar's Shipwreck Tale: The Last Push - Pikmin 4",
    "Olimar's Shipwreck Tale: Strange Pikmin Behavior - Pikmin 4",
    "Olimar's Shipwreck Tale: Gildemander Appears - Pikmin 4",
    "Olimar’s Shipwreck Tale: The Pikmin Are Restored - Pikmin 4",
    "Olimar's Shipwreck Tale: Hero's Hideaway - Pikmin 4",
    "Olimar's Shipwreck Tale: Hero's Hideaway (Evening) - Pikmin 4",
    "Olimar's Shipwreck Tale: So Long, Pikmin - Pikmin 4",
    "Olimar's Shipwreck Tale: Successful Escape? - Pikmin 4",
    "Olimar's Shipwreck Tale: Failed Escape - Pikmin 4",
    "Olimar's Shipwreck Tale: Life as a Leafling - Pikmin 4",
    "Olimar's Shipwreck Tale: All Records - Pikmin 4",
    "Olimar's Shipwreck Tale: How It Happened - Pikmin 4",
    "Sage Leaf's Cave - Pikmin 4",
    "Trial of the Sage Leaf - Pikmin 4",
    "Dandori Challenge (Sage Leaf) - Pikmin 4",
    "Mechanical Harp: Memory Song - Pikmin 4",
    "Mechanical Harp: Lullabies - Pikmin 4",
    "Mechanical Harp: Windmills - Pikmin 4",
    "Pikmin Tune 1 - Pikmin 4",
    "Pikmin Tune 2 - Pikmin 4",
    "Pikmin Tune 3 - Pikmin 4",
    "Pikmin Tune 4 - Pikmin 4",
    "Pikmin Tune 5 - Pikmin 4",
    "Pikmin Tune 6 - Pikmin 4",
    "Title Screen - Super Mario Bros. Wonder",
    "Prologue: The Flower Kingdom - Super Mario Bros. Wonder",
    "Prologue: Creation of Castle Bowser - Super Mario Bros. Wonder",
    "Prologue: Poplin Prisoners - Super Mario Bros. Wonder",
    "Prologue: Adventure Awaits! - Super Mario Bros. Wonder",
    "World Theme: Pipe-Rock Plateau - Super Mario Bros. Wonder",
    "Grassland Theme - Super Mario Bros. Wonder",
    "Bendy-Boing Wonder - Super Mario Bros. Wonder",
    "Forest Theme - Super Mario Bros. Wonder",
    "Piranha Plants on Parade - Super Mario Bros. Wonder",
    "Savanna Theme - Super Mario Bros. Wonder",
    "Stompy-Stampede Wonder - Super Mario Bros. Wonder",
    "Spikey Dance Number - Super Mario Bros. Wonder",
    "Flippy-Float Wonder - Super Mario Bros. Wonder",
    "Switching On - Super Mario Bros. Wonder",
    "Wiggler Race! - Super Mario Bros. Wonder",
    "Wiggler Race: You Win! - Super Mario Bros. Wonder",
    "Wiggler Race: You Lose... - Super Mario Bros. Wonder",
    "World Theme: Petal Isles - Super Mario Bros. Wonder",
    "Coast Theme - Super Mario Bros. Wonder",
    "Underwater Theme - Super Mario Bros. Wonder",
    "Stretchy-Shadow Wonder - Super Mario Bros. Wonder",
    "World Theme: Fluff-Puff Peaks - Super Mario Bros. Wonder",
    "Snowy-Mountain Theme - Super Mario Bros. Wonder",
    "Medley-Mix Wonder - Super Mario Bros. Wonder",
    "Athletic Theme - Super Mario Bros. Wonder",
    "Jump! Jump! Jump! - Super Mario Bros. Wonder",
    "Super Star - Super Mario Bros. Wonder",
    "Palace Theme - Super Mario Bros. Wonder",
    "Bowser Jr. Battle - Super Mario Bros. Wonder",
    "World Clear! - Super Mario Bros. Wonder",
    "World Theme: Shining Falls - Super Mario Bros. Wonder",
    "Poplin House - Super Mario Bros. Wonder",
    "Shining Falls Theme - Super Mario Bros. Wonder",
    "Shapey-Shift Wonder - Super Mario Bros. Wonder",
    "Shooty-Star Wonder - Super Mario Bros. Wonder",
    "Badge Challenge - Super Mario Bros. Wonder",
    "Bonus: Coins Galore! - Super Mario Bros. Wonder",
    "Break Time! Theme 1 - Super Mario Bros. Wonder",
    "Break Time! Theme 2 - Super Mario Bros. Wonder",
    "World Theme: Sunbaked Desert - Super Mario Bros. Wonder",
    "Desert Theme - Super Mario Bros. Wonder",
    "Puzzly-Pyramid Wonder - Super Mario Bros. Wonder",
    "Underground Theme - Super Mario Bros. Wonder",
    "Ninji Disco - Super Mario Bros. Wonder",
    "Break Time! Tunes 2 - Super Mario Bros. Wonder",
    "Break Time! Raise the Stage - Super Mario Bros. Wonder",
    "World Theme: Fungi Mines - Super Mario Bros. Wonder",
    "Dark Woods Theme - Super Mario Bros. Wonder",
    "Poison-Swamp Underground Theme - Super Mario Bros. Wonder",
    "A Night at Boo's Opera - Super Mario Bros. Wonder",
    "Pumpkin Party - Super Mario Bros. Wonder",
    "Arena - Super Mario Bros. Wonder",
    "World Theme: Deep Magma Bog - Super Mario Bros. Wonder",
    "Lava Theme - Super Mario Bros. Wonder",
    "Flowy-Flight Wonder - Super Mario Bros. Wonder",
    "Flying Battleship Theme - Super Mario Bros. Wonder",
    "Doomy-Gloom Wonder - Super Mario Bros. Wonder",
    "Mecha Maker Battle - Super Mario Bros. Wonder",
    "World Theme: Flower Kingdom Invaded - Super Mario Bros. Wonder",
    "World Theme: Petal Isles (Castle Bowser) - Super Mario Bros. Wonder",
    "Castle Bowser Theme - Super Mario Bros. Wonder",
    "Zappy-Zone Wonder - Super Mario Bros. Wonder",
    "Bowser's Blazing Beats - Super Mario Bros. Wonder",
    "Bowser's Wonder Rush - Super Mario Bros. Wonder",
    "Bowser's Rage Stage - Super Mario Bros. Wonder",
    "Castle Bowser Battle - Super Mario Bros. Wonder",
    "Castle Bowser Demolished - Super Mario Bros. Wonder",
    "The Royal Seeds - Super Mario Bros. Wonder",
    "Epilogue: Kingdom in Full Bloom - Super Mario Bros. Wonder",
    "Starry-Staff Wonder - Super Mario Bros. Wonder",
    "Epilogue: Come Back Again Sometime, Yeah? - Super Mario Bros. Wonder",
    "Special World - Super Mario Bros. Wonder",
    "A Very Special March - Super Mario Bros. Wonder",,
  ];
    // Bug : Sometimes musics stops appearing in suggestions, it seems that musics dissapears at the end of the array
    // Adding empty string makes them unfindable and prevent this bug
  musicNameList = musicNameList.concat(
    new Array(musicNameList.length).fill("")
  );

  var musicListWithLinks = [
    {
    url: "https://soundcloud.com/goldchimera/001x01",
    answer: "Ground BGM - Super Mario Bros.",
    },
    {
    url: "https://soundcloud.com/goldchimera/001x02",
    answer: "'Hurry Up!' Ground BGM - Super Mario Bros.",
    },
    {
    url: "https://soundcloud.com/goldchimera/001x03",
    answer: "Underground BGM - Super Mario Bros.",
    },
    {
    url: "https://soundcloud.com/goldchimera/001x04",
    answer: "'Hurry Up!' Underground BGM - Super Mario Bros.",
    },
    {
    url: "https://soundcloud.com/goldchimera/001x05",
    answer: "Invincibility BGM - Super Mario Bros.",
    },
    {
    url: "https://soundcloud.com/goldchimera/001x06",
    answer: "'Hurry Up!' Invincibility BGM - Super Mario Bros.",
    },
    {
    url: "https://soundcloud.com/goldchimera/001x07",
    answer: "Underwater BGM - Super Mario Bros.",
    },
    {
    url: "https://soundcloud.com/goldchimera/001x08",
    answer: "'Hurry Up!' Underwater BGM - Super Mario Bros.",
    },
    {
    url: "https://soundcloud.com/goldchimera/001x09",
    answer: "Castle BGM - Super Mario Bros.",
    },
    {
    url: "https://soundcloud.com/goldchimera/001x10",
    answer: "'Hurry Up!' Castle BGM - Super Mario Bros.",
    },
    {
    url: "https://soundcloud.com/goldchimera/001x11",
    answer: "Ending - Super Mario Bros.",
    },
    {
    url: "https://soundcloud.com/goldchimera/002x01",
    answer: "Title Screen - Metroid",
    },
    {
    url: "https://soundcloud.com/goldchimera/002x02",
    answer: "Brinstar (Rocky Zone) - Metroid",
    },
    {
    url: "https://soundcloud.com/goldchimera/002x03",
    answer: "Miniboss Hideout I: Kraid - Metroid",
    },
    {
    url: "https://soundcloud.com/goldchimera/002x04",
    answer: "Norfair (Fire Zone) - Metroid",
    },
    {
    url: "https://soundcloud.com/goldchimera/002x05",
    answer: "Miniboss Hideout II: Ridley - Metroid",
    },
    {
    url: "https://soundcloud.com/goldchimera/002x06",
    answer: "Stillness - Metroid",
    },
    {
    url: "https://soundcloud.com/goldchimera/002x07",
    answer: "Tourian (Central Base) - Metroid",
    },
    {
    url: "https://soundcloud.com/goldchimera/002x08",
    answer: "Zebetite - Metroid",
    },
    {
    url: "https://soundcloud.com/goldchimera/002x09",
    answer: "Escape - Metroid",
    },
    {
    url: "https://soundcloud.com/goldchimera/002x10",
    answer: "Ending - Metroid",
    },
    {
    url: "https://soundcloud.com/goldchimera/003x01",
    answer: "Selection Screen - Dr. Mario (Game Boy)",
    },
    {
    url: "https://soundcloud.com/goldchimera/003x02",
    answer: "Fever - Dr. Mario (Game Boy)",
    },
    {
    url: "https://soundcloud.com/goldchimera/003x03",
    answer: "Vs. Game Over - Dr. Mario (Game Boy)",
    },
    {
    url: "https://soundcloud.com/goldchimera/003x04",
    answer: "Chill - Dr. Mario (Game Boy)",
    },
    {
    url: "https://soundcloud.com/goldchimera/003x06",
    answer: "Level 20 Hi Clear (UFO) & Ending - Dr. Mario (Game Boy)",
    },
    {
    url: "https://soundcloud.com/goldchimera/004x01",
    answer: "Welcome To Dream Land - Kirby's Dream Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/004x02",
    answer: "Green Greens - Kirby's Dream Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/004x03",
    answer: "Boss Theme - Kirby's Dream Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/004x04",
    answer: "Sparkling Stars - Kirby's Dream Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/004x05",
    answer: "Castle Lololo - Kirby's Dream Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/004x06",
    answer: "Invincible - Kirby's Dream Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/004x07",
    answer: "Float Islands - Kirby's Dream Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/004x08",
    answer: "Shooting - Kirby's Dream Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/004x09",
    answer: "Bubbly Clouds - Kirby's Dream Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/004x10",
    answer: "Boss Game Select - Kirby's Dream Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/004x11",
    answer: "Mt. DeDeDe - Kirby's Dream Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/004x12",
    answer: "A New Wind for Tomorrow - Kirby's Dream Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/005x01",
    answer: "Theme - Donkey Kong Country",
    },
    {
    url: "https://soundcloud.com/goldchimera/005x02",
    answer: "Simian Segue - Donkey Kong Country",
    },
    {
    url: "https://soundcloud.com/goldchimera/005x03",
    answer: "DK Island Swing - Donkey Kong Country",
    },
    {
    url: "https://soundcloud.com/goldchimera/005x04",
    answer: "Cave Dweller Concert - Donkey Kong Country",
    },
    {
    url: "https://soundcloud.com/goldchimera/005x05",
    answer: "Aquatic Ambiance - Donkey Kong Country",
    },
    {
    url: "https://soundcloud.com/goldchimera/005x06",
    answer: "Cranky's Theme - Donkey Kong Country",
    },
    {
    url: "https://soundcloud.com/goldchimera/005x08",
    answer: "Mine Cart Madness - Donkey Kong Country",
    },
    {
    url: "https://soundcloud.com/goldchimera/005x09",
    answer: "Misty Menace - Donkey Kong Country",
    },
    {
    url: "https://soundcloud.com/goldchimera/005x10",
    answer: "Voices of the Temple - Donkey Kong Country",
    },
    {
    url: "https://soundcloud.com/goldchimera/005x11",
    answer: "Funky's Fugue - Donkey Kong Country",
    },
    {
    url: "https://soundcloud.com/goldchimera/005x12",
    answer: "Forest Frenzy - Donkey Kong Country",
    },
    {
    url: "https://soundcloud.com/goldchimera/005x13",
    answer: "Treetop Rock - Donkey Kong Country",
    },
    {
    url: "https://soundcloud.com/goldchimera/005x14",
    answer: "Bonus Room Blitz - Donkey Kong Country",
    },
    {
    url: "https://soundcloud.com/goldchimera/005x15",
    answer: "Candy's Love Song - Donkey Kong Country",
    },
    {
    url: "https://soundcloud.com/goldchimera/005x16",
    answer: "Northern Hemispheres - Donkey Kong Country",
    },
    {
    url: "https://soundcloud.com/goldchimera/005x17",
    answer: "Ice Cave Chant - Donkey Kong Country",
    },
    {
    url: "https://soundcloud.com/goldchimera/005x18",
    answer: "Fear Factory - Donkey Kong Country",
    },
    {
    url: "https://soundcloud.com/goldchimera/005x19",
    answer: "Bad Boss Boogie - Donkey Kong Country",
    },
    {
    url: "https://soundcloud.com/goldchimera/005x20",
    answer: "K. Rool's Cacophony - Donkey Kong Country",
    },
    {
    url: "https://soundcloud.com/goldchimera/005x21",
    answer: "Gang-Plank Galleon - Donkey Kong Country",
    },
    {
    url: "https://soundcloud.com/goldchimera/005x22",
    answer: "The Credits Concerto - Donkey Kong Country",
    },
    {
    url: "https://soundcloud.com/goldchimera/006x01",
    answer: "Opening Melody - Super Mario World 2: Yoshi's Island",
    },
    {
    url: "https://soundcloud.com/goldchimera/006x02",
    answer: "Yoshi's Island - Super Mario World 2: Yoshi's Island",
    },
    {
    url: "https://soundcloud.com/goldchimera/006x03",
    answer: "The Journey Begins - Super Mario World 2: Yoshi's Island",
    },
    {
    url: "https://soundcloud.com/goldchimera/006x04",
    answer: "Practice Stage - Super Mario World 2: Yoshi's Island",
    },
    {
    url: "https://soundcloud.com/goldchimera/006x05",
    answer: "Flower Field BGM - Super Mario World 2: Yoshi's Island",
    },
    {
    url: "https://soundcloud.com/goldchimera/006x06",
    answer: "Goal! - Super Mario World 2: Yoshi's Island",
    },
    {
    url: "https://soundcloud.com/goldchimera/006x07",
    answer: "Underground BGM - Super Mario World 2: Yoshi's Island",
    },
    {
    url: "https://soundcloud.com/goldchimera/006x08",
    answer: "Castles & Forts BGM - Super Mario World 2: Yoshi's Island",
    },
    {
    url: "https://soundcloud.com/goldchimera/006x09",
    answer: "Kamek's Theme - Super Mario World 2: Yoshi's Island",
    },
    {
    url: "https://soundcloud.com/goldchimera/006x10",
    answer: "Stage Boss - Super Mario World 2: Yoshi's Island",
    },
    {
    url: "https://soundcloud.com/goldchimera/006x11",
    answer: "Athletic BGM - Super Mario World 2: Yoshi's Island",
    },
    {
    url: "https://soundcloud.com/goldchimera/006x12",
    answer: "Ground BGM - Super Mario World 2: Yoshi's Island",
    },
    {
    url: "https://soundcloud.com/goldchimera/006x13",
    answer: "In the Boss Room - Super Mario World 2: Yoshi's Island",
    },
    {
    url: "https://soundcloud.com/goldchimera/006x14",
    answer: "Big Boss BGM - Super Mario World 2: Yoshi's Island",
    },
    {
    url: "https://soundcloud.com/goldchimera/006x15",
    answer: "Map Screen - Super Mario World 2: Yoshi's Island",
    },
    {
    url: "https://soundcloud.com/goldchimera/006x16",
    answer: "Bonus Challenge - Super Mario World 2: Yoshi's Island",
    },
    {
    url: "https://soundcloud.com/goldchimera/006x17",
    answer: "Powerful Mario - Super Mario World 2: Yoshi's Island",
    },
    {
    url: "https://soundcloud.com/goldchimera/006x18",
    answer: "Bowser - Super Mario World 2: Yoshi's Island",
    },
    {
    url: "https://soundcloud.com/goldchimera/006x19",
    answer: "Rescuing Luigi - Super Mario World 2: Yoshi's Island",
    },
    {
    url: "https://soundcloud.com/goldchimera/006x20",
    answer: "Ending - Super Mario World 2: Yoshi's Island",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x01",
    answer: "Opening Theme - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x02",
    answer: "Title Theme - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x03",
    answer: "Select Theme - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x04",
    answer: "Map Theme - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x05",
    answer: "VS Select - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x06",
    answer: "Demo 1 - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x07",
    answer: "Training Mode - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x08",
    answer: "Corneria - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x09",
    answer: "Fichina & Sector Z - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x10",
    answer: "Meteo - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x11",
    answer: "Sector Y & Solar - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x12",
    answer: "Katina - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x13",
    answer: "Aquas - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x14",
    answer: "Sector X - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x15",
    answer: "Zoness - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x16",
    answer: "Titania & Macbeth - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x17",
    answer: "Area 6 - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x18",
    answer: "Bolse - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x19",
    answer: "Venom - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x20",
    answer: "Warp - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x21",
    answer: "Underground Base - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x22",
    answer: "Star Wolf's Theme - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x23",
    answer: "Boss Battle 1 - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x24",
    answer: "Boss Battle 2 - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x25",
    answer: "Boss Battle 3 - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x26",
    answer: "Andross Battle - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x27",
    answer: "Final Battle - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x28",
    answer: "VS Battle 1 - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x29",
    answer: "VS Battle 2 - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x30",
    answer: "Mission Complete - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x31",
    answer: "Mission Failed - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x32",
    answer: "Game Over - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x33",
    answer: "All Clear - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/007x34",
    answer: "Credits Theme - Star Fox 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x01",
    answer: "Title Theme - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x02",
    answer: "Deku Tree - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x03",
    answer: "Fairy Flying - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x04",
    answer: "House - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x05",
    answer: "Kokiri Forest - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x06",
    answer: "Shop - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x07",
    answer: "Battle - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x08",
    answer: "Inside the Deku Tree - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x09",
    answer: "Boss Battle - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x10",
    answer: "The Legend of Hyrule - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x11",
    answer: "Hyrule Field Main Theme - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x12",
    answer: "Kaepora Gaebora's Theme - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x13",
    answer: "Market - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x14",
    answer: "Shooting Gallery - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x15",
    answer: "Hyrule Castle Courtyard - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x16",
    answer: "Zelda's Theme - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x17",
    answer: "Lon Lon Ranch - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x18",
    answer: "Minigame - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x19",
    answer: "Kakariko Village - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x20",
    answer: "Hyrule Field Theme: Morning - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x21",
    answer: "Goron City - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x22",
    answer: "Lost Woods - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x23",
    answer: "Dodongo's Cavern - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x24",
    answer: "Middle Boss Battle - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x25",
    answer: "Dinosaur Boss Battle - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x26",
    answer: "Zora's Domain - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x27",
    answer: "Great Fairy's Fountain - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x28",
    answer: "Potion Shop - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x29",
    answer: "Inside Jabu-Jabu's Belly - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x30",
    answer: "Temple of Time - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x31",
    answer: "Ganondorf's Theme - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x32",
    answer: "Chamber of the Sages - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x33",
    answer: "Sheik's Theme - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x34",
    answer: "Horse Race - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x35",
    answer: "Ingo's Theme - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x36",
    answer: "Kakariko Village Orchestral Ver. - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x37",
    answer: "Windmill Hut - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x38",
    answer: "Forest Temple - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x39",
    answer: "Bolero of Fire - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x40",
    answer: "Fire Temple - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x41",
    answer: "Ice Cavern - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x42",
    answer: "Serenade of Water - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x43",
    answer: "Water Temple - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x44",
    answer: "Nocturne of Shadow - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x45",
    answer: "Prelude of Light - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x46",
    answer: "Shadow Temple - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x47",
    answer: "Gerudo Valley - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x48",
    answer: "Spirit Temple - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x49",
    answer: "Requiem of Spirit - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x50",
    answer: "Kotake & Koume's Theme - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x51",
    answer: "Reuniting with Zelda - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x52",
    answer: "A Bridge to Ganon's Castle - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x53",
    answer: "Beneath Ganon's Castle - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x54",
    answer: "Ganon's Tower - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x55",
    answer: "Ganondorf Battle - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x56",
    answer: "Escape from Ganon's Castle - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x57",
    answer: "Last Battle - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x58",
    answer: "Seal of the Six Sages - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/008x60",
    answer: "End Credits - The Legend of Zelda: Ocarina of Time",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x01",
    answer: "Opening: History Unveiled - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x02",
    answer: "Fire Emblem Theme - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x03",
    answer: "A Hint of Things to Come - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x04",
    answer: "Road of Trials - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x05",
    answer: "Destiny Enlaced by Fear - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x06",
    answer: "Winds across the Plains - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x07",
    answer: "Precious Things - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x08",
    answer: "Companions - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x09",
    answer: "Friendship and Adventure - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x10",
    answer: "Distant Travels - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x11",
    answer: "Inescapable Fate - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x12",
    answer: "Dragon's Gate II - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x13",
    answer: "Winning Road - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x14",
    answer: "Binding Ties - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x15",
    answer: "Scars of the Scouring - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x16",
    answer: "Raise Your Spirits - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x17",
    answer: "Shadow Approaches - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x18",
    answer: "Enemies Appear - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x19",
    answer: "The Messenger - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x20",
    answer: "Darkness Comes - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x21",
    answer: "Dragon's Gate I - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x22",
    answer: "Nabata's Wandering Messenger - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x23",
    answer: "Legendary Inheritance - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x24",
    answer: "Raid! - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x25",
    answer: "Messenger from the Darkness - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x26",
    answer: "Strike - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x27",
    answer: "Safeguard - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x28",
    answer: "Victory Now! - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x29",
    answer: "Rise to the Challenge - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x30",
    answer: "Softly with Grace - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x31",
    answer: "Everything into the Dark - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x32",
    answer: "Campaign of Fire - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x33",
    answer: "Blessing of the Eight Generals I - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x34",
    answer: "Healing - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x35",
    answer: "Curing - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x36",
    answer: "Receive the Blessings of Water - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x37",
    answer: "Ride the Wind - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x38",
    answer: "To the Heights - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x39",
    answer: "An Unexpected Caller - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x40",
    answer: "When the Rush Comes - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x41",
    answer: "Land of Swirling Sands - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x42",
    answer: "Ships and Homes - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x43",
    answer: "Silent Ground - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x44",
    answer: "The Inn - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x45",
    answer: "Going My Way - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x46",
    answer: "Together, We Ride! - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x47",
    answer: "A Knight's Oath - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x48",
    answer: "Happiness Abounds - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x49",
    answer: "Merlinus - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x50",
    answer: "Final Farewell - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x51",
    answer: "Requiem - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x52",
    answer: "Recollection of a Petal - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x53",
    answer: "The Cogs of Fate - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x54",
    answer: "The Eight Generals - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x55",
    answer: "The Archsage Athos - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x56",
    answer: "Distant Utopia - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x57",
    answer: "What Comes from Darkness - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x58",
    answer: "Black Fang - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x59",
    answer: "Calamity Bringer: Nergal's Theme - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x60",
    answer: "Nergal's Wrath - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x61",
    answer: "Stratagem - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x62",
    answer: "The Kingdom of Bern - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x63",
    answer: "Bern - A Mother's Wish - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x64",
    answer: "Shocking Truth I - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x65",
    answer: "Shocking Truth II - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x66",
    answer: "Triumph - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x67",
    answer: "Into the Shadow of Triumph - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x68",
    answer: "Main Theme Arrangement - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x69",
    answer: "Blessing of the Eight Generals II - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x70",
    answer: "Girl of the Plains: Lyn's Theme - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x71",
    answer: "Lyn's Desire - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x72",
    answer: "Light to Tomorrow - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x73",
    answer: "One Heart: Eliwood's Theme - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x74",
    answer: "Eyes of Sorrow - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x75",
    answer: "Unshakable Faith - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x76",
    answer: "Loyalty: Hector's Theme - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x77",
    answer: "The Grieving Heart - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x78",
    answer: "Reminiscence - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x79",
    answer: "Shattered Life - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x80",
    answer: "Anguish - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x81",
    answer: "Respite in Battle - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x82",
    answer: "Prepare to Charge - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x83",
    answer: "Armory - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x84",
    answer: "Shop - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x85",
    answer: "Fortune-Telling - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x86",
    answer: "Arena Entrance - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x87",
    answer: "Arena Battle - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x88",
    answer: "Arena Tactics - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x89",
    answer: "Within Sadness - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x90",
    answer: "Game Over - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x91",
    answer: "Legend of Athos - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x92",
    answer: "Results - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x93",
    answer: "Treasured Hope - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x94",
    answer: "Beneath a New Light - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x95",
    answer: "The Path to Greatness - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x96",
    answer: "In the Name of Bern - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x97",
    answer: "Avoided Fate - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x98",
    answer: "Legend of the Dragon God (From Fire Emblem: Mystery of the Emblem) - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/009x99",
    answer: "Royal Palace of Silesse (From Fire Emblem: Genealogy of the Holy War) - Fire Emblem: The Blazing Blade",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x01",
    answer: "Title Theme - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x02",
    answer: "File Select - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x03",
    answer: "Prologue - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x04",
    answer: "Pirate Frigate - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x05",
    answer: "Parasite Queen Battle - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x06",
    answer: "Pirate Frigate Escape - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x07",
    answer: "Tallon Overworld - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x08",
    answer: "Timeworn Chozo Remnants - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x09",
    answer: "Hive Mecha Battle - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x10",
    answer: "Plated Beetle Battle - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x11",
    answer: "Chozo Ruins - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x12",
    answer: "Flaahgra Battle - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x13",
    answer: "Magmoor Caverns - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x14",
    answer: "Phendrana Drifts - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x15",
    answer: "Chapel of the Elders - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x16",
    answer: "Space Pirates (Specimen Storage) - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x17",
    answer: "Space Pirates Battle - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x18",
    answer: "Thardus Battle - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x19",
    answer: "Tallon Overworld Revisited - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x20",
    answer: "Hall of the Chozo Elders - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x21",
    answer: "Chozo Ghosts Battle - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x22",
    answer: "Phendrana Battle - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x23",
    answer: "Crashed Ship - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x24",
    answer: "Phazon Mines - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x25",
    answer: "Omega Pirate Battle - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x26",
    answer: "Chozo Shrine - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x27",
    answer: "Meta Ridley Battle - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x28",
    answer: "Chozo Shrine Unsealed - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x29",
    answer: "Metroid Prime Battle - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x30",
    answer: "Metroid Prime (Core) Battle - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x31",
    answer: "Shrine Collapse - Epilogue - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x32",
    answer: "Credits - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/010x33",
    answer: "Samus's Record - Metroid Prime",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x01",
    answer: "nintendogs - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x02",
    answer: "Shop & Kennel - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x03",
    answer: "Reading - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x04",
    answer: "Walking - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x05",
    answer: "Walking: Other Dog Encounter (Curious) - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x06",
    answer: "Walking: Other Dog Encounter (Great Mood) - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x07",
    answer: "Walking: Other Dog Encounter (Friendly) - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x08",
    answer: "Walking: Other Dog Encounter (Slight Dislike) - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x09",
    answer: "Walking: Other Dog Encounter (Unfriendly) - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x10",
    answer: "Agility Trials - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x11",
    answer: "Bathing - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x12",
    answer: "Dog Show: Judges' Commentary - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x13",
    answer: "Dog Show: Beginner - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x14",
    answer: "Dog Show: Expert - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x15",
    answer: "Dog Show: Championship - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x16",
    answer: "Toy: Mario Kart - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x17",
    answer: "Toy: Bowser Kart - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x18",
    answer: "Toy: Peach Kart - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x19",
    answer: "Toy: Combat Copter - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x20",
    answer: "Music Box: nintendogs - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x21",
    answer: "Music Box: Mario's Theme - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x22",
    answer: "Music Box: Puppy Waltz - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x23",
    answer: "Record: Street Marker - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x24",
    answer: "Record: Growler - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x25",
    answer: "Record: Smilin' Dog - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x26",
    answer: "Record: Friendly Whiff - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x27",
    answer: "Record: Chow - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x28",
    answer: "Record: Surprise - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x29",
    answer: "Record: Naptime - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x30",
    answer: "Record: Colonel Bogey - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x31",
    answer: "Record: Toreador - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x32",
    answer: "Record: Flower Waltz - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x33",
    answer: "Record: nintendogs - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x34",
    answer: "Record: Waves - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x35",
    answer: "Record: Modest Decor - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x36",
    answer: "Record: Shedded Fur - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x37",
    answer: "Record: Giant Socks - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/011x38",
    answer: "Record: nintendogs (Demo Version) - nintendogs",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x01",
    answer: "Making a Friend - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x02",
    answer: "Apartment Hangout - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x03",
    answer: "Afternoon on the Island - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x04",
    answer: "Nighttime on the Island - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x05",
    answer: "News Flash - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x06",
    answer: "Mii News Report - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x07",
    answer: "Food Mart - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x08",
    answer: "Clothing Shop - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x09",
    answer: "Interiors Shop - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x10",
    answer: "Majority Rule - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x11",
    answer: "Compatibility Tester - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x12",
    answer: "Career Counselor - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x13",
    answer: "Q&A - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x14",
    answer: "Let's Play a Game - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x15",
    answer: "Ballad: The Past 50 Years - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x16",
    answer: "Rap: Hot Track - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x17",
    answer: "Mood Music: Rain-Soaked Streets - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x18",
    answer: "J-Pop: To a New Future - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x19",
    answer: "Metal: Unremitted Desire - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x20",
    answer: "Pop: Flitter-Flutter Days - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x21",
    answer: "Pent-Up Passion - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x22",
    answer: "Stewing in Rejection - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x23",
    answer: "Married No More - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x24",
    answer: "Separating with a Sweetheart - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x25",
    answer: "Town Hall - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x26",
    answer: "Save Screen - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x27",
    answer: "Music Box: Making a Friend - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x28",
    answer: "Music Box: Afternoon on the Island - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x29",
    answer: "Music Box: Food Mart - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x30",
    answer: "Music Box: Compatibility Tester - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x31",
    answer: "Music Box: Mii News Report - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x32",
    answer: "Music Box: Career Counselor - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x33",
    answer: "Street Band: Cheerful Tango - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x34",
    answer: "Street Band: Jaunty Allegro - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x35",
    answer: "Street Band: Joyful Waltz - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x36",
    answer: "Street Band: Refreshing Bossa Nova - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x37",
    answer: "Street Band: Heartwarming Folk Dance - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x38",
    answer: "Street Band: Somber Waltz - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x39",
    answer: "Vacation: Okinawa - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x40",
    answer: "Vacation: Hawaii - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x41",
    answer: "Vacation: Hong Kong/Shanghai - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x42",
    answer: "Vacation: Thailand - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x43",
    answer: "Vacation: Italy - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x44",
    answer: "Vacation: France - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x45",
    answer: "Vacation: Spain - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x46",
    answer: "Vacation: Kyoto - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x47",
    answer: "Tying the Knot - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/012x48",
    answer: "Staff Credits - Tomodachi Collection",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x01",
    answer: "Wii Menu - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x02",
    answer: "Mii Plaza (Mii Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x04",
    answer: "Mii Parade: Walking (Mii Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x05",
    answer: "Mii Parade: Running (Mii Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x06",
    answer: "Selecting Photos (Photo Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x07",
    answer: "Digital Camera / Cell Phone (Photo Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x08",
    answer: "View Wii Message Board Photos (Photo Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x09",
    answer: "Slide Show: Calm (Photo Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x10",
    answer: "Slide Show: Fun (Photo Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x11",
    answer: "Slide Show: Bright (Photo Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x12",
    answer: "Slide Show: Nostalgic (Photo Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x13",
    answer: "Slide Show: Beautiful (Photo Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x14",
    answer: "Slide Show: Scenic (Photo Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x15",
    answer: "Doodle (Photo Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x16",
    answer: "Puzzle Menu (Photo Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x17",
    answer: "Puzzle: First Time Playing (Photo Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x18",
    answer: "Puzzle (Photo Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x19",
    answer: "Post (Photo Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x20",
    answer: "Launch Screen: Wii Shop Channel - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x21",
    answer: "Main Theme (Wii Shop Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x22",
    answer: "One moment, please... (Forecast Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x23",
    answer: "Forecast: Daytime (Forecast Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x24",
    answer: "Globe: Daytime (Forecast Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x25",
    answer: "Globe: Daytime Forecast (Forecast Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x26",
    answer: "Forecast: Nighttime (Forecast Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x27",
    answer: "Globe: Nighttime (Forecast Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x28",
    answer: "Globe: Nighttime Forecast (Forecast Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x29",
    answer: "Settings (Forecast Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x30",
    answer: "One moment, please... (News Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x31",
    answer: "Menu (News Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x32",
    answer: "Checking the News: Daytime (News Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x33",
    answer: "Checking the News: Nighttime (News Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x34",
    answer: "Globe (News Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x35",
    answer: "Menu (Everybody Votes Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x36",
    answer: "Poll Screen (Everybody Votes Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x37",
    answer: "Results (Everybody Votes Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x38",
    answer: "Voter Data (Everybody Votes Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x39",
    answer: "Suggest a Question (Everybody Votes Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x40",
    answer: "Launch Screen: Check Mii Out Channel - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x41",
    answer: "Menu (Check Mii Out Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x43",
    answer: "Posting Plaza (Check Mii Out Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x44",
    answer: "Posting Plaza: Checking a Mii Out (Check Mii Out Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x45",
    answer: "Import (Check Mii Out Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x46",
    answer: "Call Friends (Check Mii Out Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x47",
    answer: "Parade (Check Mii Out Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x48",
    answer: "Parade: Checking a Mii Out (Check Mii Out Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x49",
    answer: "Mii Plaza (Check Mii Out Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x50",
    answer: "Contests (Check Mii Out Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x51",
    answer: "Contest Results (Check Mii Out Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x52",
    answer: "Announcing the Contest Winner (Check Mii Out Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/013x53",
    answer: "Contest: Mii Ranking Presentation (Check Mii Out Channel) - Wii Channels",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x01",
    answer: "Overture - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x02",
    answer: "The Star Festival - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x03",
    answer: "Attack of the Airships - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x04",
    answer: "Catastrophe - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x05",
    answer: "Peach’s Castle Stolen - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x06",
    answer: "Enter the Galaxy - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x07",
    answer: "Egg Planet - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x08",
    answer: "Rosalina in the Observatory 1 - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x09",
    answer: "The Honeyhive - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x10",
    answer: "Space Junk Road - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x11",
    answer: "Battlerock Galaxy - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x12",
    answer: "Beach Bowl Galaxy - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x13",
    answer: "Rosalina in the Observatory 2 - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x14",
    answer: "Enter Bowser Jr.! - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x15",
    answer: "Waltz of the Boos - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x16",
    answer: "Buoy Base Galaxy - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x17",
    answer: "Gusty Garden Galaxy - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x18",
    answer: "Rosalina in the Observatory 3 - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x19",
    answer: "King Bowser - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x20",
    answer: "Melty Molten Galaxy - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x21",
    answer: "The Galaxy Reactor - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x22",
    answer: "Final Battle with Bowser - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x23",
    answer: "Daybreak - A New Dawn - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x24",
    answer: "Birth - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x25",
    answer: "Super Mario Galaxy - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x26",
    answer: "Purple Comet - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x27",
    answer: "Blue Sky Athletic - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x28",
    answer: "Super Mario 2007 - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x29",
    answer: "File Select - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x30",
    answer: "Luma - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x31",
    answer: "Gateway Galaxy - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x32",
    answer: "Stolen Grand Star - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x33",
    answer: "To the Observatory Grounds 1 - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x34",
    answer: "Observation Dome - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x35",
    answer: "Course Select - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x36",
    answer: "Dino Piranha - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x37",
    answer: "A Chance to Grab a Star! - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x38",
    answer: "A Tense Moment - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x39",
    answer: "Big Bad Bugaboom - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x40",
    answer: "King Kaliente - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x41",
    answer: "The Toad Brigade - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x42",
    answer: "Airship Armada - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x43",
    answer: "Aquatic Race - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x44",
    answer: "Space Fantasy - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x45",
    answer: "Megaleg - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x47",
    answer: "Space Athletic - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x48",
    answer: "Speedy Comet - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x49",
    answer: "Beach Bowl Galaxy - Undersea - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x50",
    answer: "Interlude - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x51",
    answer: "Bowser’s Stronghold Appears - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x52",
    answer: "The Fiery Stronghold - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x53",
    answer: "The Big Staircase - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x54",
    answer: "Bowser Appears - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x55",
    answer: "Star Ball - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x56",
    answer: "The Library - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x57",
    answer: "Buoy Base Galaxy - Undersea - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x58",
    answer: "Rainbow Mario - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x59",
    answer: "Chase the Bunnies! - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x60",
    answer: "Help! - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x61",
    answer: "Major Burrows - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x62",
    answer: "Pipe Interior - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x63",
    answer: "Cosmic Comet - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x64",
    answer: "Drip Drop Galaxy - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x65",
    answer: "Kingfin - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x66",
    answer: "Boo Race - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x67",
    answer: "Ice Mountain - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x68",
    answer: "Ice Mario - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x69",
    answer: "Lava Path - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x70",
    answer: "Fire Mario - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x71",
    answer: "Dusty Dune Galaxy - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x72",
    answer: "Heavy Metal Mecha-Bowser - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x73",
    answer: "A-wa-wa-wa! - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x74",
    answer: "Deep Dark Galaxy - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x75",
    answer: "Kamella - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x76",
    answer: "Star Ball 2 - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x77",
    answer: "Sad Girl - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x78",
    answer: "Flying Mario - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x79",
    answer: "Star Child - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x80",
    answer: "A Wish - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x81",
    answer: "Family - Super Mario Galaxy",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x02",
    answer: "Opening - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x03",
    answer: "A Sheikah Tower Emerges - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x04",
    answer: "The Beast in the Castle - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x05",
    answer: "Sheikah Tower - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x06",
    answer: "The Shrine's Trial - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x07",
    answer: "Battle (Shrine) - Original Soundtrack Ver. - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x08",
    answer: "The Great Plateau - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x09",
    answer: "In the Guardian's Sights - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x10",
    answer: "The Temple of Time - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x11",
    answer: "The Old Man's Secret - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x12",
    answer: "One Hundred Years Ago - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x13",
    answer: "King Rhoam's Plea - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x14",
    answer: "Overworld (Day) - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x15",
    answer: "Overworld (Battle) - Original Soundtrack Ver. - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x16",
    answer: "Galloping (Day) - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x17",
    answer: "Stone Talus Battle - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x18",
    answer: "Kakariko Village - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x19",
    answer: "Impa Speaks - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x20",
    answer: "A Legendary Tale - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x21",
    answer: "Hateno Village - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x22",
    answer: "Hateno Ancient Tech Lab - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x23",
    answer: "Restoring a Great Fairy's Power - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x24",
    answer: "Great Fairy Fountain - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x25",
    answer: "Overworld (Night) - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x26",
    answer: "Kass's Theme - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x27",
    answer: "Kass: Songs of Shrines - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x28",
    answer: "The Stables - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x29",
    answer: "Kass: Legendary Verse - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x30",
    answer: "Minigame: Mounted Archery - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x31",
    answer: "Galloping (Night) - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x32",
    answer: "Shrines of Blessings - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x33",
    answer: "Hinox Battle - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x34",
    answer: "By the Water - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x35",
    answer: "Mind the Flowers! - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x36",
    answer: "Meeting Sidon - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x37",
    answer: "Sidon's Theme - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x38",
    answer: "Zora's Domain - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x39",
    answer: "Vah Ruta, Divine Beast of Water - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x41",
    answer: "Battle with Divine Beast Vah Ruta - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x42",
    answer: "An Accord with Sidon - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x43",
    answer: "Exploring Divine Beast Vah Ruta - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x44",
    answer: "Battle Inside the Divine Beast - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x45",
    answer: "A Blight Ganon Appears - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x46",
    answer: "Battle with Waterblight Ganon - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x47",
    answer: "A Heart Container Appears - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x48",
    answer: "Reuniting with Mipha - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x49",
    answer: "A Divine Beast's Majesty - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x50",
    answer: "Mipha and the Divine Beast - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x51",
    answer: "Overworld (Fiery Heat) - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x52",
    answer: "Lava Landscape - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x53",
    answer: "Miner's Melody - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x54",
    answer: "Vah Rudania, Divine Beast of Fire - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x55",
    answer: "Goron City - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x56",
    answer: "The Abandoned North Mine - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x57",
    answer: "Meeting Yunobo - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x59",
    answer: "Battle with Divine Beast Vah Rudania - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x60",
    answer: "Yunobo Creates an Opportunity - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x61",
    answer: "Exploring Divine Beast Vah Rudania - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x62",
    answer: "Battle with Fireblight Ganon - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x63",
    answer: "Reuniting with Daruk - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x64",
    answer: "Daruk and the Divine Beast - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x65",
    answer: "Kilton - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x66",
    answer: "Overworld (Freezing) - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x67",
    answer: "Caves - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x68",
    answer: "Vah Medoh, Divine Beast of Wind - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x69",
    answer: "Rito Village - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x70",
    answer: "Recovered Memory: Revali's Flap - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x71",
    answer: "The Flight Range - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x72",
    answer: "Meeting Teba - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x73",
    answer: "Minigame: Flight Range - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x74",
    answer: "Battle with Divine Beast Vah Medoh - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x75",
    answer: "Teba's Encouragement - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x76",
    answer: "Exploring Divine Beast Vah Medoh - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x77",
    answer: "Battle with Windblight Ganon - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x78",
    answer: "Reuniting with Revali - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x79",
    answer: "Revali and the Divine Beast - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x80",
    answer: "Pondo's Lodge - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x81",
    answer: "Minigame: Snowball Bowling - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x82",
    answer: "Notts's Song - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x83",
    answer: "Warbler's Nest Melody - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x84",
    answer: "Kass's Theme (Song of the Hero Ver.) - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x85",
    answer: "Rito Village (Kass and the Five Sisters Ver.) - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x86",
    answer: "Minigame: Bird-Man Research Study - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x87",
    answer: "Palu Wasteland - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x88",
    answer: "Overworld (Scorching Desert) - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x89",
    answer: "Vah Naboris, Divine Beast of Thunder - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x90",
    answer: "Kara Kara Bazaar - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x91",
    answer: "Gerudo Town - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x92",
    answer: "Meeting Riju - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x93",
    answer: "The Yiga Clan Hideout - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x94",
    answer: "Proud Master Kohga - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x95",
    answer: "Battle with Master Kohga - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x96",
    answer: "Recovered Memory: Urbosa's Hand - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x97",
    answer: "Vah Naboris Lookout Post - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x98",
    answer: "Battle with Divine Beast Vah Naboris - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x99",
    answer: "Riju's Trust - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x100",
    answer: "Exploring Divine Beast Vah Naboris - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x101",
    answer: "Battle with Thunderblight Ganon - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x102",
    answer: "Reuniting with Urbosa - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x103",
    answer: "Urbosa and the Divine Beast - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x104",
    answer: "Challenging the Champ - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x105",
    answer: "Minigame: Sand-Seal Race - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x106",
    answer: "Sand-Seal Race: Win - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x107",
    answer: "Minigame: Contest of Endurance - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x108",
    answer: "Molduga Battle - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x109",
    answer: "Tarrey Town - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x110",
    answer: "Trothed in Tarrey Town - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x111",
    answer: "Ruins - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x112",
    answer: "The Lost Woods - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x113",
    answer: "Korok Forest - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x114",
    answer: "Meeting the Deku Tree - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x115",
    answer: "Master Sword Obtained - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x116",
    answer: "Memories of the Sword - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x117",
    answer: "Tree and Sword: Words of Wisdom - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x118",
    answer: "Akkala Ancient Tech Lab - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x119",
    answer: "Lurelin Village - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x120",
    answer: "Malanya's Spring - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x121",
    answer: "The Lord of the Mountain - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x122",
    answer: "Naydra, Possessed - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x123",
    answer: "Attendants to the Sacred Springs - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x124",
    answer: "Omen of the Blood Moon - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x125",
    answer: "The Blood Moon - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x126",
    answer: "Memory Recovered - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x127",
    answer: "Recovered Memory: Resolve and Grief - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x128",
    answer: "Recovered Memory: Blades of the Yiga - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x129",
    answer: "Recovered Memory: A Premonition - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x130",
    answer: "Recovered Memory: Silent Princess - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x131",
    answer: "Recovered Memory: Father and Daughter - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x132",
    answer: "Recovered Memory: Slumbering Power - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x133",
    answer: "Recovered Memory: To Mount Lanayru - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x134",
    answer: "Recovered Memory: Return of Calamity Ganon - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x135",
    answer: "Recovered Memory: Despair - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x136",
    answer: "Recovered Memory: Zelda's Awakening - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x137",
    answer: "Zelda's Behest - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x138",
    answer: "Hyrule Castle Town Ruins - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x139",
    answer: "Guardian Battle - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/014x140",
    answer: "Ganon's Roar at Hyrule Castle - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x141",
    answer: "Hyrule Castle - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x142",
    answer: "Calamity Ganon Appears - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x143",
    answer: "The Champions' Power Mobilized - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x144",
    answer: "Battle with Calamity Ganon (First Form) - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x145",
    answer: "Battle with Calamity Ganon (Second Form) - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x146",
    answer: "Dark Beast Ganon Appears - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x147",
    answer: "Battle with Dark Beast Ganon - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x148",
    answer: "Do You Really Remember Me? - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x149",
    answer: "Staff Credits - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x150",
    answer: "Epilogue - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x151",
    answer: "Trial of the Sword Conquered - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x152",
    answer: "Tree and Sword: Words of Praise - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x153",
    answer: "Kass: The Song of the Swordsman - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x154",
    answer: "A Monument Appears - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x155",
    answer: "Kass: The Champions' Ballad 1 - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x156",
    answer: "Shrine of a Champion - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x157",
    answer: "Mipha and Sidon - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x158",
    answer: "Kass: Champion Mipha's Song - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x159",
    answer: "Kass: The Champions' Ballad 2 - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x160",
    answer: "Revali, Solitary Warrior - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x161",
    answer: "Kass: Champion Revali's Song - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x162",
    answer: "Kass: The Champions' Ballad 3 - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x163",
    answer: "Daruk, the Stalwart - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x164",
    answer: "Kass: Champion Daruk's Song - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x165",
    answer: "Kass: The Champions' Ballad 4 - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x166",
    answer: "Urbosa, the Magnificent - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x167",
    answer: "Kass: Champion Urbosa's Song - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x168",
    answer: "The Final Trial - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x169",
    answer: "The Monk Maz Koshia - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x170",
    answer: "Memory Recovered (The Champions' Ballad Ver.) - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x171",
    answer: "The Princess and the Champions - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x172",
    answer: "The Champions' Ballad: Finale - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x173",
    answer: "A Picture-Perfect Spot - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x174",
    answer: "The Champions' Ballad - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x175",
    answer: "2014 E3 Trailer - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/015x176",
    answer: "2017 Nintendo Switch Presentation Trailer - The Legend of Zelda: Breath of the Wild",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x01",
    answer: "Mario Kart 8 Title Screen - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x02",
    answer: "Mario Kart Stadium - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x03",
    answer: "Water Park - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x04",
    answer: "Water Park (Underwater) - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x05",
    answer: "Sweet Sweet Canyon - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x06",
    answer: "Thwomp Ruins - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x07",
    answer: "Mario Circuit - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x08",
    answer: "Toad Harbor - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x09",
    answer: "Twisted Mansion - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x10",
    answer: "Shy Guy Falls - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x11",
    answer: "Sunshine Airport - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x12",
    answer: "Dolphin Shoals (Underwater) - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x13",
    answer: "Dolphin Shoals (Sea Depths) - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x14",
    answer: "Dolphin Shoals (On the Sea) - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x15",
    answer: "Electrodrome - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x16",
    answer: "Electrodrome (Antigravity Zone) - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x17",
    answer: "Mount Wario - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x18",
    answer: "Cloudtop Cruise - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x19",
    answer: "Cloudtop Cruise (Thunderclouds) - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x20",
    answer: "Bone-Dry Dunes - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x21",
    answer: "Bowser's Castle - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x22",
    answer: "Rainbow Road - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x23",
    answer: "Wii Moo Moo Meadows - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x24",
    answer: "GBA Mario Circuit - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x25",
    answer: "DS Cheep Cheep Beach - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x26",
    answer: "N64 Toad's Turnpike - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x27",
    answer: "GCN Dry Dry Desert - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x28",
    answer: "SNES Donut Plains 3 - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x29",
    answer: "N64 Royal Raceway - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x30",
    answer: "3DS DK Jungle - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x31",
    answer: "DS Wario Stadium - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x32",
    answer: "GCN Sherbet Land - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x33",
    answer: "3DS Music Park - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x34",
    answer: "N64 Yoshi Valley - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x35",
    answer: "DS Tick-Tock Clock - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x36",
    answer: "3DS Piranha Plant Slide - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x37",
    answer: "Wii Grumble Volcano - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x38",
    answer: "N64 Rainbow Road - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x39",
    answer: "GCN Yoshi Circuit - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x40",
    answer: "Excitebike Arena - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x41",
    answer: "Dragon Driftway - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x42",
    answer: "Mute City - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x43",
    answer: "F-Zero Results Screen - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x44",
    answer: "Wii Wario's Gold Mine - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x45",
    answer: "SNES Rainbow Road - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x46",
    answer: "Ice Ice Outpost - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x47",
    answer: "Hyrule Circuit - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x48",
    answer: "GCN Baby Park - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x49",
    answer: "GBA Cheese Land - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x50",
    answer: "Wild Woods - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x51",
    answer: "Animal Crossing (Spring) - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x52",
    answer: "Animal Crossing (Summer) - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x53",
    answer: "Animal Crossing (Autumn) - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x54",
    answer: "Animal Crossing (Winter) - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x55",
    answer: "Animal Crossing Results Screen - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x56",
    answer: "3DS Neo Bowser City - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x57",
    answer: "GBA Ribbon Road - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x58",
    answer: "Super Bell Subway - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x59",
    answer: "Super Bell Subway (Underground) - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x60",
    answer: "Big Blue - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x61",
    answer: "Battle Stadium - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x62",
    answer: "Sweet Sweet Kingdom - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x63",
    answer: "Dragon Palace - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x64",
    answer: "Lunar Colony - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x65",
    answer: "3DS Wuhu Town - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x66",
    answer: "GCN Luigi's Mansion - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x67",
    answer: "SNES Battle Course 1 - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x68",
    answer: "Urchin Underpass - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x69",
    answer: "Urchin Underpass (Now or Never!) - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x70",
    answer: "Selection Screen - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x71",
    answer: "Selection Screen (Online) - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x72",
    answer: "Selection Screen (Wireless) - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x73",
    answer: "Spectating - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x74",
    answer: "Mario Kart TV - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x75",
    answer: "Super Star - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x76",
    answer: "Results Screen A - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x77",
    answer: "Results Screen B - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x78",
    answer: "Current Standings - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x79",
    answer: "Trophy Theme A - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x80",
    answer: "Trophy Theme B - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x81",
    answer: "Staff Credits - Mario Kart 8",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x82",
    answer: "Tour Paris Promenade - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x83",
    answer: "3DS Toad Circuit - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x84",
    answer: "N64 Choco Mountain - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x85",
    answer: "Wii Coconut Mall - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x86",
    answer: "Tour Tokyo Blur - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x87",
    answer: "DS Shroom Ridge - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x88",
    answer: "GBA Sky Garden - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x89",
    answer: "Ninja Hideaway - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x90",
    answer: "Tour New York Minute - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x91",
    answer: "SNES Mario Circuit 3 - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x92",
    answer: "N64 Kalimari Desert - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x94",
    answer: "Tour Sydney Sprint - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x95",
    answer: "GBA Snow Land - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x96",
    answer: "Wii Mushroom Gorge - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x97",
    answer: "Sky-High Sundae - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x98",
    answer: "Tour London Loop - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x99",
    answer: "GBA Boo Lake - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x100",
    answer: "3DS Rock Rock Mountain - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x101",
    answer: "Wii Maple Treeway - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x102",
    answer: "Tour Berlin Byways - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x103",
    answer: "DS Peach Gardens - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x104",
    answer: "Merry Mountain - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x105",
    answer: "3DS Rainbow Road - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x106",
    answer: "3DS Rainbow Road (Lunar Surface) - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x107",
    answer: "Tour Amsterdam Drift - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x108",
    answer: "GBA Riverside Park - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x109",
    answer: "Wii DK Summit - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x110",
    answer: "Yoshi's Island - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x111",
    answer: "Results (Yoshi's Island) - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x112",
    answer: "Tour Bangkok Rush - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x113",
    answer: "DS Mario Circuit - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x114",
    answer: "GCN Waluigi Stadium - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x115",
    answer: "Tour Singapore Speedway - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x116",
    answer: "Tour Singapore Speedway (Chinatown) - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x117",
    answer: "Tour Athens Dash - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x118",
    answer: "GCN Daisy Cruiser - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x119",
    answer: "Wii Moonview Highway - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x120",
    answer: "Wii Moonview Highway (Straightaway) - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x121",
    answer: "Squeaky Clean Sprint - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x122",
    answer: "Tour Los Angeles Laps - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x123",
    answer: "GBA Sunset Wilds - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x124",
    answer: "Wii Koopa Cape - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x125",
    answer: "Wii Koopa Cape (Downstream) - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x126",
    answer: "Wii Koopa Cape (Underwater) - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x127",
    answer: "Tour Vancouver Velocity - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x128",
    answer: "Tour Rome Avanti - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x129",
    answer: "GCN DK Mountain - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x130",
    answer: "Wii Daisy Circuit - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x131",
    answer: "Piranha Plant Cove - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x132",
    answer: "Tour Madrid Drive - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x133",
    answer: "Tour Madrid Drive (Museum) - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x134",
    answer: "Tour Madrid Drive (Stadium) - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x135",
    answer: "3DS Rosalina's Ice World - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x136",
    answer: "SNES Bowser Castle 3 - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x137",
    answer: "Wii Rainbow Road - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/016x138",
    answer: "Staff Credits (Booster Course Pass) - Mario Kart 8 Deluxe",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x01",
    answer: "Title Screen - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x02",
    answer: "The Skies above Peach's Castle - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x03",
    answer: "Meeting Cappy - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x04",
    answer: "Bonneton - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x05",
    answer: "Top-Hat Tower - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x06",
    answer: "Here Come the Broodals - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x07",
    answer: "Battling the Broodals - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x08",
    answer: "Fossil Falls - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x09",
    answer: "Fossil Falls - 8-Bit - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x10",
    answer: "Capturing a T-Rex - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x11",
    answer: "Battling Madame Broode - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x12",
    answer: "Mario Meets the World: The Odyssey's Maiden Voyage - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x13",
    answer: "Tostarena Ruins - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x14",
    answer: "Tostarena Ruins - 8-Bit - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x15",
    answer: "Inside the Inverted Pyramid - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x16",
    answer: "Inside the Inverted Pyramid - 8-Bit - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x17",
    answer: "Tostarena Nights - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x18",
    answer: "Tostarena Nights - 8-Bit - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x19",
    answer: "Crazy Cap - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x20",
    answer: "Yay! Slots Away! - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x21",
    answer: "Jaxi Joyride - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x22",
    answer: "Knocking Out Knucklotec - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x23",
    answer: "Tostarena Town - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x24",
    answer: "Traversing Tostarena - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x25",
    answer: "Steam Gardens - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x26",
    answer: "Steam Gardens - 8-Bit - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x27",
    answer: "Steam Gardens: Sherm Sector - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x28",
    answer: "Tusseling with Torkdrift - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x29",
    answer: "Above the Clouds - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x30",
    answer: "Lake Lamode: Underwater Passage - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x31",
    answer: "Lake Lamode - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x32",
    answer: "Lake Lamode - 8-Bit - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x33",
    answer: "Lake Lamode: Surface - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x34",
    answer: "Caves - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x35",
    answer: "Bumping into Bowser's Flying Battleship - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x36",
    answer: "Bowser's Entrance - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x37",
    answer: "Battling Bowser 1: Showdown in Nimbus Arena - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x38",
    answer: "Bowser's Bombardment: The Odyssey Goes Down - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x39",
    answer: "Cappy Gets Capnapped - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x40",
    answer: "The Forgotten Isle - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x41",
    answer: "The Forgotten Isle - 8-Bit - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x42",
    answer: "New Donk Nights - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x43",
    answer: "New Donk Nights: City Hall - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x44",
    answer: "Menacing Mechawiggler - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x45",
    answer: "New Donk City - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x46",
    answer: "RC Car Challenge - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x47",
    answer: "The Band's All Here: Super Mario Bros. Ground BGM - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x48",
    answer: "Pausing by the Poolside - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x49",
    answer: "Underground Power Plant - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x50",
    answer: "Underground Power Plant - 8-Bit - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x51",
    answer: "Jump Up, Super Star! - New Donk City Festival - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x52",
    answer: "Jump Up, Super Star! - New Donk City Festival - 8-Bit - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x53",
    answer: "Projection Room: Aboveground - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x55",
    answer: "Jump Up, Super Star! - Music Box Ver. - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x56",
    answer: "To the Next Kingdom - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x57",
    answer: "Shiveria Town - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x58",
    answer: "Ice Caves - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x59",
    answer: "Snowline Circuit - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x60",
    answer: "The Bound Bowl Grand Prix - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x61",
    answer: "Race Results - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x62",
    answer: "Shiveria Snowscape - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x63",
    answer: "Koopa's Trace-Walking - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x64",
    answer: "Bubblaine - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x65",
    answer: "Bubblaine - 8-Bit - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x66",
    answer: "Bubblaine: Underwater - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x67",
    answer: "Running through Rolling Canyon - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x68",
    answer: "Bubblaine Gloom - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x69",
    answer: "Battling Brigadier Mollusque-Lanceur III, Dauphin of Bubblaine - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x70",
    answer: "Battling Brigadier Mollusque-Lanceur III, Dauphin of Bubblaine - 8-Bit - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x71",
    answer: "A Relaxing Dance - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x72",
    answer: "Mount Volbono - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x73",
    answer: "Mount Volbono - 8-Bit - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x74",
    answer: "Peronza Plaza - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x75",
    answer: "Run, Jump, Throw! 1 - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x76",
    answer: "Run, Jump, Throw! 2 - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x77",
    answer: "Run, Jump, Throw! 2 - 8-Bit - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x78",
    answer: "Cooking Cookatiel - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x79",
    answer: "Challenges in Another World - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x80",
    answer: "Eye to Eye with the Ruined Dragon - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x81",
    answer: "Rebuffing the Ruined Dragon - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x82",
    answer: "Bowser's Castle - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x83",
    answer: "Bowser's Castle - 8-Bit - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x84",
    answer: "Bowser's Castle: Main Courtyard Entrance - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x85",
    answer: "Bowser's Castle: Main Courtyard - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x86",
    answer: "Bowser, Bound for the Moon - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x87",
    answer: "Wrecking RoboBrood - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x88",
    answer: "Odyssey to the Moon - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x89",
    answer: "Honeylune Ridge - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x90",
    answer: "Honeylune Ridge - 8-Bit - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x91",
    answer: "Underground Moon Caverns - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x92",
    answer: "The Wedding Hall - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x93",
    answer: "The Big Stare Down - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x94",
    answer: "Battling Bowser 2: The Final Fight - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x95",
    answer: "Honeylune Ridge: Collapse - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x96",
    answer: "Honeylune Ridge: Collapse - 8-Bit - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x97",
    answer: "Break Free (Lead the Way) - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x98",
    answer: "The Super Mario Odyssey Crew - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x99",
    answer: "Peach's Castle Outskirts - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x100",
    answer: "Peach's Castle - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x101",
    answer: "The Farthest Lullaby - Fossil Falls - Music Box Ver. - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x102",
    answer: "Jump Up, Super Star! - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/017x108",
    answer: "Break Free (Lead the Way) - 8-Bit - Super Mario Odyssey",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x01",
    answer: "Twinkle☆Stars - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x02",
    answer: "Let's Be Friends♡ - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x03",
    answer: "Select File - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x04",
    answer: "A Rude Awakening - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x05",
    answer: "World of Peace: Dream Land - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x06",
    answer: "Green Gardens - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x07",
    answer: "Donut Dome - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x08",
    answer: "Honey Hill - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x09",
    answer: "Friend Puzzle Solving - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x10",
    answer: "Invincible - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x11",
    answer: "A Battle of Friends and Bonds - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x13",
    answer: "Plaza (Kirby's Blowout Blast) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x14",
    answer: "Shooting (Kirby's Dream Land) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x15",
    answer: "Boss Theme (Kirby's Blowout Blast) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x16",
    answer: "For the Brave - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x17",
    answer: "Macho of Dedede - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x18",
    answer: "Sudden Happy Ending - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x19",
    answer: "Secret Area: HAL Room (Dedede's Drum Dash Deluxe) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x20",
    answer: "World of Miracles: Planet Popstar - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x21",
    answer: "Friendly Field - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x22",
    answer: "Reef Resort - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x23",
    answer: "Echo's Edge - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x24",
    answer: "Nature's Navel - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x25",
    answer: "Vegetable Valley (Kirby: Nightmare in Dream Land) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x26",
    answer: "Orange Ocean (Kirby: Nightmare in Dream Land) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x27",
    answer: "Vs. Robo Dedede: In Crisis (Kirby's Dream Course) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x28",
    answer: "Cloudy Park (Kirby's Dream Land 2) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x29",
    answer: "Red Canyon: Stage Select (Kirby's Dream Land 2) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x30",
    answer: "Sub-Tree Area (Kirby Super Star) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x31",
    answer: "Vs. Gryll (Kirby's Star Stacker) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x32",
    answer: "Sacred Square - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x33",
    answer: "Twinkling☆Travelers - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x34",
    answer: "The Clash of Comrades' Blades - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x35",
    answer: "Chop Champs - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x36",
    answer: "Let's Build a Log Cabin! - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x37",
    answer: "Star Slam Heroes - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x38",
    answer: "To the Far Reaches of the Galaxy - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x39",
    answer: "Standings - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x40",
    answer: "Fortress of Shadows: Jambastion! - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x41",
    answer: "Where Even Weeds Won't Grow - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x42",
    answer: "Adventures in Jambastion - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x43",
    answer: "Song of Supplication - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x44",
    answer: "The Last Iceberg (Kirby's Dream Land 3) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x45",
    answer: "Vs. Dark Matter (Kirby's Dream Land 3) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x46",
    answer: "True Arena Showdown (Kirby Super Star Ultra) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x47",
    answer: "Neo Star (Kirby 64: The Crystal Shards) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x48",
    answer: "Miracle Matter (Kirby 64: The Crystal Shards) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x49",
    answer: "Vs. The Squeaks (Kirby Squeak Squad) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x50",
    answer: "Uncanny Underground (Kirby Squeak Squad) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x51",
    answer: "The Black Mirror (Team Kirby Clash Deluxe) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x52",
    answer: "Kracko (Kirby Canvas Curse) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x53",
    answer: "Goal Game - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x54",
    answer: "Picture Results - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x55",
    answer: "The Palace of Fulfilled Dreams - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x56",
    answer: "True Friends Stand with You - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x57",
    answer: "A Forgotten Flash of Lightning - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x58",
    answer: "Continue (Kirby's Return to Dream Land) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x60",
    answer: "Kind Streets - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x61",
    answer: "Far-Flung Starlight Heroes - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x62",
    answer: "Winds across Earthfall - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x63",
    answer: "Puzzle-Solving Galaxy - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x64",
    answer: "Misteen's Oceans - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x65",
    answer: "Caverna's Massive Mazes - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x66",
    answer: "Frostak's Arctic Tundra - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x67",
    answer: "The Adventure Begins (Kirby's Return to Dream Land) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x68",
    answer: "Underworld (Kirby's Return to Dream Land) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x69",
    answer: "Another Dimension (Kirby's Return to Dream Land) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x70",
    answer: "Vs. Mecha Kawasaki (Kirby's Return to Dream Land) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x71",
    answer: "More Challenge Stages (Kirby's Dream Collection Special Edition) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x72",
    answer: "Mysterious Rolling Boulders from Afar (Kirby: Triple Deluxe) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x73",
    answer: "Beautiful Prison (Kirby: Triple Deluxe) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x74",
    answer: "Bouncing Boss Battle (Dedede's Drum Dash Deluxe) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x75",
    answer: "Towara's Ancient Towers - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x76",
    answer: "Star Lavadom - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x77",
    answer: "Combat Evaluation Program (Kirby: Planet Robobot) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x78",
    answer: "Dedede's Tridimensional Cannon (Kirby: Planet Robobot) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x79",
    answer: "Outlaw Driver (Kirby: Planet Robobot) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x80",
    answer: "Far-Flung Journey's End - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x82",
    answer: "Grass Land 1 (Kirby's Dream Land 3) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x83",
    answer: "Arena Showdown (Kirby: Triple Deluxe) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x84",
    answer: "Staff (Kirby 64: The Crystal Shards) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x85",
    answer: "Squeak Squad Theme (Kirby Squeak Squad) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x86",
    answer: "Welcome Your New Overlord (Kirby's Return to Dream Land) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x87",
    answer: "One of the Miracles (Kirby: Triple Deluxe) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x88",
    answer: "Vs. Star Dream (Kirby: Planet Robobot) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x89",
    answer: "Friends' Getaway - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x90",
    answer: "Crazy Mischief in the Stars - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x91",
    answer: "Chasing Our Dreams - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x92",
    answer: "Shadowy Partners - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x93",
    answer: "The Shape of a Heart - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x94",
    answer: "Rockabilly And Blues - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x95",
    answer: "Break Time Breakdown - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x96",
    answer: "Where Even Light Does Not Reach - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x97",
    answer: "Scarred Land of Dreams and New Greens - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x98",
    answer: "Path of Worship - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x99",
    answer: "Hall of Worship - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x100",
    answer: "Puppet Offering - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x101",
    answer: "La follia d'amore - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x102",
    answer: "Liturgy of Holy Submission - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x103",
    answer: "Introduction: To Distant Seas of Stars - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x104",
    answer: "Suite: The Star-Conquering Traveler - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x105",
    answer: "The Star Allies Have Your Back! - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x106",
    answer: "Last Friends - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x107",
    answer: "Having Watched You All Along - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x108",
    answer: "Testing Star - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x109",
    answer: "A Decisive Battle for Tomorrow (Kirby's Blowout Blast) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x110",
    answer: "Hidden Corkboard (Kirby Super Star Ultra) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x111",
    answer: "Bring On the Super Ability (Kirby's Return to Dream Land) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x112",
    answer: "Hypernova Inhale (Kirby: Triple Deluxe) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x113",
    answer: "Pink Ball Activate! (Kirby: Planet Robobot) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x114",
    answer: "The Adventure Begins — amiibo Special Arrangement (Kirby's Blowout Blast) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x115",
    answer: "Pressure Panic (Kirby's Return to Dream Land) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x116",
    answer: "Title Screen (Kirby's Dream Land 2) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x117",
    answer: "Milky Way Wishes (Kirby Super Star) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x118",
    answer: "Ripple Field: Stage Select (Kirby's Dream Land 3) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x119",
    answer: "Planet Popstar: Stage Select — Star Allies Arrangement - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x120",
    answer: "Stage Begin — Star Allies Arrangement - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x121",
    answer: "Squeak Squad Title Screen — Star Allies Arrangement - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x122",
    answer: "Four Adventurers: Cookie Country — Star Allies Arrangement - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x123",
    answer: "Taranza the Puppeteer Magician — Star Allies Arrangement - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x124",
    answer: "The Noble Haltmann — Star Allies Arrangement - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x125",
    answer: "Fortress of Shadows: Jambastion! — Star Allies Arrangement - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x126",
    answer: "Venturing into the World with Allies - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x127",
    answer: "Otherworldly Warrior (Kirby's Return to Dream Land) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x128",
    answer: "Green Stories (Team Kirby Clash Deluxe) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x129",
    answer: "Best Friends, Today, Tomorrow, and Forever - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x130",
    answer: "The Adventure Begins — Original Short Ver. - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x131",
    answer: "Your Preferred Spiciness for the Ultimate Choice - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x132",
    answer: "Vs. Waddle Tank (Kirby's Return to Dream Land) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x133",
    answer: "Blazing! Boss Battle (Kirby's Return to Dream Land) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x134",
    answer: "Bouncing Boss Battle (Kirby: Triple Deluxe) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x135",
    answer: "Vs. The Wicked Company (Kirby: Planet Robobot) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x136",
    answer: "History of Dedede (Kirby Fighters Deluxe) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x137",
    answer: "Inner Struggle (Kirby: Planet Robobot) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x138",
    answer: "A Decisive Battle with Mighty Bosses (Kirby's Blowout Blast) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x139",
    answer: "Ordeal: Save This Kingdom! (Team Kirby Clash Deluxe) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x140",
    answer: "Ordeal: Save This World! (Team Kirby Clash Deluxe) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x141",
    answer: "The Road Is Long... / The True Arena (Kirby: Triple Deluxe) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x142",
    answer: "Max Happy Town! (Team Kirby Clash Deluxe) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x143",
    answer: "Heroes in Another Dimension - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x144",
    answer: "The Legend of the Last World - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x145",
    answer: "The Dimension to Win - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x146",
    answer: "For Heroes, a Spear of the Heart / Dimensional Silence (Kirby's Return to Dream Land) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x147",
    answer: "Kirby Ever After - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x148",
    answer: "To the Deep / Distant Halcandra (Kirby's Return to Dream Land) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x151",
    answer: "Oracles of the Threefold Glint - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x152",
    answer: "Memories of the Grande Finale - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x153",
    answer: "Butterfly of Judgment: Morpho Knight - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x154",
    answer: "Battle of Nightmares - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x155",
    answer: "Dark & Cloudy - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x156",
    answer: "Vs. Marx — Star Allies Dream Ver. - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x157",
    answer: "Dark Matter in the Hyper Zone - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x158",
    answer: "The Girls Who Fought the Darkness - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x159",
    answer: "Dark Mirage - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x160",
    answer: "True Squeak Squad Theme - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x161",
    answer: "Supreme Ruler's Coronation - OVERLORD - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x162",
    answer: "Phantom of the Moon Soul - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x163",
    answer: "A Deus Ex Machina from Childhood - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x165",
    answer: "Suite: The Star-Conquering Traveler (Movement 2: Vessel of the Embryo) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x166",
    answer: "Suite: The Star-Conquering Traveler (Movement 3: Wings of Sorrow and the Heavens) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x167",
    answer: "Suite: The Star-Conquering Traveler (Movement 4: The Birth of Hope) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x168",
    answer: "Drawcia Soul — Star Allies Short Ver. (Kirby: Canvas Curse) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x169",
    answer: "Heavy Lobster (Kirby Super Star Ultra) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x170",
    answer: "Dangerous Dinner (Kirby's Return to Dream Land) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x171",
    answer: "Revenge of the Enemy (Kirby: Triple Deluxe) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x172",
    answer: "Fatal Error (Kirby: Planet Robobot) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x173",
    answer: "Aeon Corridors - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x174",
    answer: "Suite: The Star-Conquering Traveler (Closing Movement: The Twinkling Star) - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x175",
    answer: "Let Them Know We're Happy - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x176",
    answer: "Bad Boss Brothers - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x177",
    answer: "A Farewell to Kirby: He of the Future-Traveling Stars - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/018x178",
    answer: "Green Greens - Kirby Star Allies",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x01",
    answer: "Opening Theme - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x02",
    answer: "12:00 AM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x03",
    answer: "1:00 AM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x04",
    answer: "2:00 AM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x05",
    answer: "3:00 AM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x06",
    answer: "4:00 AM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x07",
    answer: "5:00 AM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x08",
    answer: "6:00 AM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x09",
    answer: "7:00 AM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x10",
    answer: "8:00 AM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x11",
    answer: "9:00 AM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x12",
    answer: "10:00 AM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x13",
    answer: "11:00 AM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x14",
    answer: "12:00 PM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x15",
    answer: "1:00 PM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x16",
    answer: "2:00 PM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x17",
    answer: "3:00 PM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x18",
    answer: "4:00 PM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x19",
    answer: "5:00 PM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x20",
    answer: "6:00 PM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x21",
    answer: "7:00 PM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x22",
    answer: "8:00 PM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x23",
    answer: "9:00 PM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x24",
    answer: "10:00 PM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x25",
    answer: "11:00 PM - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x26",
    answer: "12:00 AM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x27",
    answer: "1:00 AM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x28",
    answer: "2:00 AM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x29",
    answer: "3:00 AM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x30",
    answer: "4:00 AM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x32",
    answer: "6:00 AM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x33",
    answer: "7:00 AM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x34",
    answer: "8:00 AM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x35",
    answer: "9:00 AM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x36",
    answer: "10:00 AM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x37",
    answer: "11:00 AM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x38",
    answer: "12:00 PM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x39",
    answer: "1:00 PM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x40",
    answer: "2:00 PM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x41",
    answer: "3:00 PM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x42",
    answer: "4:00 PM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x43",
    answer: "5:00 PM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x44",
    answer: "6:00 PM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x45",
    answer: "7:00 PM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x46",
    answer: "8:00 PM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x47",
    answer: "9:00 PM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x48",
    answer: "10:00 PM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x49",
    answer: "11:00 PM - Rainy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x74",
    answer: "Island Life Orientation 1 - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x75",
    answer: "Island Life Orientation 2 - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x76",
    answer: "Island Life Orientation 3 - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x77",
    answer: "Island Life Orientation 4 - Firelit Night - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x78",
    answer: "Island Life Orientation 5 - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x81",
    answer: "Island Life Orientation 6 - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x84",
    answer: "Island Life Orientation 7 - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x86",
    answer: "Island Life Orientation 7 - Snowy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x87",
    answer: "Mystery Island - Clear Afternoon - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x88",
    answer: "Mystery Island - Rainy Afternoon - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x90",
    answer: "Mystery Island - Clear Evening - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x91",
    answer: "Mystery Island - Rainy Evening - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x93",
    answer: "Nook Inc. Getaway Check-In - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x94",
    answer: "Dreaming of K.K. Slider - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x95",
    answer: "Island-Wide Broadcast - Tom Nook - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x96",
    answer: "Island-Wide Broadcast - Isabelle - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x97",
    answer: "Resident Services - Tent - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x98",
    answer: "Resident Services - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x99",
    answer: "Construction-Complete Ceremony - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x100",
    answer: "Group Stretching - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x101",
    answer: "Blathers's Tent - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x102",
    answer: "Museum - Entrance - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x103",
    answer: "Museum - Fish Exhibit - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x104",
    answer: "Museum - Bug Exhibit - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x105",
    answer: "Museum - Fossil Exhibit - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x106",
    answer: "Museum - Art Exhibit - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x107",
    answer: "The Roost - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x108",
    answer: "Airport Lobby (Tinny Speaker Ver.) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x109",
    answer: "Airport Lobby (Direct Feed Ver.) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x110",
    answer: "Travel Plans - In-Flight Entertainment - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x111",
    answer: "Travel Plans - Waiting for a Guest - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x112",
    answer: "The Able Sisters - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x113",
    answer: "Nook's Cranny - Small - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x114",
    answer: "Nook's Cranny - Remodeled - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x115",
    answer: "Nook's Cranny - Closing Time - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x116",
    answer: "Jolly Redd's Treasure Trawler - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x117",
    answer: "Dreaming of Luna - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x118",
    answer: "Rescue Service - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x119",
    answer: "Harv's Island - Afternoon - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x120",
    answer: "Harv's Island - Evening - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x121",
    answer: "Katrina's Fortune Reading - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x122",
    answer: "Kapp'n's Sea Shanty - Outbound 1 - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x123",
    answer: "Kapp'n's Sea Shanty - Outbound 2 - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x124",
    answer: "Kapp'n's Sea Shanty - Outbound 3 - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x125",
    answer: "Kapp'n's Sea Shanty - Outbound 4 - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x126",
    answer: "Kapp'n's Sea Shanty - Outbound 5 - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x127",
    answer: "Kapp'n's Sea Shanty - Homeward 1 - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x129",
    answer: "Kapp'n's Sea Shanty - Homeward 3 - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x130",
    answer: "Kapp'n's Sea Shanty - Homeward 4 - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x132",
    answer: "Tourney - It's On - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x133",
    answer: "Tourney - Competing - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x134",
    answer: "Bunny Day - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x135",
    answer: "Wedding Season - Reese & Cyrus - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x137",
    answer: "Fireworks Show - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x138",
    answer: "Halloween - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x139",
    answer: "Turkey Day - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x140",
    answer: "Toy Day - Snowy - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x141",
    answer: "Toy Day - Clear - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x142",
    answer: "Countdown - 11 PM - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x143",
    answer: "Countdown - 11:30 PM - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x144",
    answer: "Countdown - 11:50 PM - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x145",
    answer: "Countdown - 11:55 PM - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x146",
    answer: "Happy New Year! - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x147",
    answer: "New Year's Day - 12:00 AM - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x148",
    answer: "New Year's Day - 2:00 AM - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x149",
    answer: "New Year's Day - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x150",
    answer: "Festivale - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x151",
    answer: "amiibo Invitation - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x152",
    answer: "Chased by Bees - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x153",
    answer: "Stung by Bees - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x154",
    answer: "Got It! - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x155",
    answer: "Done and Done - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x156",
    answer: "K.K. Cruisin' (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x157",
    answer: "Lucky K.K. (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x158",
    answer: "Mountain Song (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x159",
    answer: "Aloha K.K. (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x160",
    answer: "Hypno K.K. (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x161",
    answer: "Surfin' K.K. (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x162",
    answer: "K.K. Stroll (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x163",
    answer: "Two Days Ago (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x164",
    answer: "Only Me (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x165",
    answer: "Pondering (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x166",
    answer: "K.K. Birthday (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x167",
    answer: "Bubblegum K.K. (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x168",
    answer: "K.K. Safari (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x169",
    answer: "K.K. Western (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x170",
    answer: "K.K. Lament (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x171",
    answer: "K.K. Rally (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x172",
    answer: "K.K. Marathon (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x173",
    answer: "K.K. Calypso (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x174",
    answer: "K.K. Country (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x175",
    answer: "K.K. Groove (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x176",
    answer: "Agent K.K. (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x177",
    answer: "Soulful K.K. (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x178",
    answer: "K.K. Salsa (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x179",
    answer: "K.K. Samba (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x180",
    answer: "K.K. Chorale (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x181",
    answer: "K.K. Jazz (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x182",
    answer: "K.K. Chorinho (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x183",
    answer: "K.K. Jongara (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x184",
    answer: "K.K. Swing (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x185",
    answer: "K.K. Ska (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x186",
    answer: "K.K. Slack-Key (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x187",
    answer: "Mr. K.K. (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x188",
    answer: "K.K. Soul (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x189",
    answer: "K.K. Song (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x190",
    answer: "King K.K. (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x191",
    answer: "K.K. Dub (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x192",
    answer: "K.K. Tango (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x193",
    answer: "Imperial K.K. (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x194",
    answer: "K.K. Dixie (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x195",
    answer: "K.K. Disco (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x196",
    answer: "K.K. Synth (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x197",
    answer: "K.K. Étude (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x198",
    answer: "K.K. Sonata (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x199",
    answer: "K.K. Milonga (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x200",
    answer: "Rockin' K.K. (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x201",
    answer: "K.K. House (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x202",
    answer: "K.K. Bashment (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x203",
    answer: "K.K. Ballad (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x204",
    answer: "Café K.K. (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x205",
    answer: "K.K. Adventure (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x206",
    answer: "K.K. Parade (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x207",
    answer: "K.K. Rockabilly (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x208",
    answer: "The K. Funk (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x209",
    answer: "K.K. Fugue (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x210",
    answer: "K.K. Fusion (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x211",
    answer: "K.K. Flamenco (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x212",
    answer: "K.K. Blues (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x213",
    answer: "K.K. Break (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x214",
    answer: "K.K. Khoomei (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x215",
    answer: "K.K. Bossa (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x216",
    answer: "K.K. Hop (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x217",
    answer: "K.K. Polka (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x218",
    answer: "K.K. Moody (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x219",
    answer: "K.K. March (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x220",
    answer: "K.K. Oasis (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x221",
    answer: "K.K. Aria (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x222",
    answer: "K.K. Mambo (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x223",
    answer: "K.K. Folk (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x224",
    answer: "K.K. Metal (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x225",
    answer: "K.K. Lovers (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x226",
    answer: "K.K. Love Song (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x227",
    answer: "K.K. Lullaby (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x228",
    answer: "K.K. Reggae (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x229",
    answer: "K.K. Robot Synth (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x230",
    answer: "K.K. Rock (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x231",
    answer: "K.K. Bazaar (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x232",
    answer: "K.K. Waltz (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x233",
    answer: "K.K. Steppe (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x234",
    answer: "K.K. Dirge (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x235",
    answer: "Farewell (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x236",
    answer: "Comrade K.K. (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x237",
    answer: "K.K. Mariachi (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x238",
    answer: "I Love You (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x239",
    answer: "Chillwave (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x240",
    answer: "K.K. Technopop (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x241",
    answer: "K.K. Island (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x242",
    answer: "Animal City (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x243",
    answer: "Drivin' (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x244",
    answer: "K.K. D&B (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x245",
    answer: "K.K. Casbah (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x246",
    answer: "Neapolitan (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x247",
    answer: "To the Edge (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x248",
    answer: "Steep Hill (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x249",
    answer: "K.K. Gumbo (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x250",
    answer: "K.K. Faire (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x251",
    answer: "Spring Blossoms (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x252",
    answer: "Marine Song 2001 (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x253",
    answer: "Stale Cupcakes (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x254",
    answer: "K.K. Condor (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x255",
    answer: "Wandering (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x256",
    answer: "My Place (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x257",
    answer: "Space K.K. (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x258",
    answer: "Welcome Horizons (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x259",
    answer: "Forest Life (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x260",
    answer: "DJ K.K. (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x261",
    answer: "Go K.K. Rider (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x262",
    answer: "K.K. Ragtime (Performance) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x263",
    answer: "Extra Song 1 - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x264",
    answer: "Extra Song 2 - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x265",
    answer: "Extra Song 3 - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x266",
    answer: "K.K. Cruisin' (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x267",
    answer: "Lucky K.K. (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x268",
    answer: "Mountain Song (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x269",
    answer: "Aloha K.K. (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x270",
    answer: "Hypno K.K. (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x271",
    answer: "Surfin' K.K. (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x272",
    answer: "K.K. Stroll (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x273",
    answer: "Two Days Ago (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x274",
    answer: "Only Me (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x275",
    answer: "Pondering (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x276",
    answer: "K.K. Birthday (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x277",
    answer: "Bubblegum K.K. (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x278",
    answer: "K.K. Safari (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x279",
    answer: "K.K. Western (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x280",
    answer: "K.K. Lament (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x281",
    answer: "K.K. Rally (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x282",
    answer: "K.K. Marathon (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x283",
    answer: "K.K. Calypso (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x284",
    answer: "K.K. Country (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x285",
    answer: "K.K. Groove (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x286",
    answer: "Agent K.K. (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x287",
    answer: "Soulful K.K. (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x288",
    answer: "K.K. Salsa (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x289",
    answer: "K.K. Samba (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x290",
    answer: "K.K. Chorale (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x291",
    answer: "K.K. Jazz (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x292",
    answer: "K.K. Chorinho (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x293",
    answer: "K.K. Jongara (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x294",
    answer: "K.K. Swing (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x295",
    answer: "K.K. Ska (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x296",
    answer: "K.K. Slack-Key (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x297",
    answer: "Mr. K.K. (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x298",
    answer: "K.K. Soul (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x299",
    answer: "K.K. Song (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x300",
    answer: "King K.K. (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x301",
    answer: "K.K. Dub (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x302",
    answer: "K.K. Tango (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x303",
    answer: "Imperial K.K. (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x304",
    answer: "K.K. Dixie (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x305",
    answer: "K.K. Disco (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x306",
    answer: "K.K. Synth (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x307",
    answer: "K.K. Étude (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x308",
    answer: "K.K. Sonata (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x309",
    answer: "K.K. Milonga (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x310",
    answer: "Rockin' K.K. (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x311",
    answer: "K.K. House (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x312",
    answer: "K.K. Bashment (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x313",
    answer: "K.K. Ballad (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x314",
    answer: "Café K.K. (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x315",
    answer: "K.K. Adventure (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x316",
    answer: "K.K. Parade (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x317",
    answer: "K.K. Rockabilly (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x318",
    answer: "The K. Funk (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x319",
    answer: "K.K. Fugue (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x320",
    answer: "K.K. Fusion (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x321",
    answer: "K.K. Flamenco (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x322",
    answer: "K.K. Blues (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x323",
    answer: "K.K. Break (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x324",
    answer: "K.K. Khoomei (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x325",
    answer: "K.K. Bossa (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x326",
    answer: "K.K. Hop (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x327",
    answer: "K.K. Polka (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x328",
    answer: "K.K. Moody (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x329",
    answer: "K.K. March (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x330",
    answer: "K.K. Oasis (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x331",
    answer: "K.K. Aria (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x332",
    answer: "K.K. Mambo (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x333",
    answer: "K.K. Folk (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x334",
    answer: "K.K. Metal (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x335",
    answer: "K.K. Lovers (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x336",
    answer: "K.K. Love Song (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x337",
    answer: "K.K. Lullaby (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x338",
    answer: "K.K. Reggae (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x339",
    answer: "K.K. Robot Synth (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x340",
    answer: "K.K. Rock (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x341",
    answer: "K.K. Bazaar (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x342",
    answer: "K.K. Waltz (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x343",
    answer: "K.K. Steppe (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x344",
    answer: "K.K. Dirge (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x345",
    answer: "Farewell (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x346",
    answer: "Comrade K.K. (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x347",
    answer: "K.K. Mariachi (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x348",
    answer: "I Love You (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x349",
    answer: "Chillwaves (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x350",
    answer: "K.K. Technopop (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x351",
    answer: "K.K. Island (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x352",
    answer: "Animal City (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x353",
    answer: "Drivin' (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x354",
    answer: "K.K. D&B (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x355",
    answer: "K.K. Casbah (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x356",
    answer: "Neapolitan (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x357",
    answer: "To the Edge (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x358",
    answer: "Steep Hill (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x359",
    answer: "K.K. Gumbo (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x360",
    answer: "K.K. Faire (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x361",
    answer: "Spring Blossoms (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x362",
    answer: "Marine Song 2001 (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x363",
    answer: "Stale Cupcakes (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x364",
    answer: "K.K. Condor (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x365",
    answer: "Wandering (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x366",
    answer: "My Place (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x367",
    answer: "Space K.K. (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x368",
    answer: "Welcome Horizons (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x369",
    answer: "Forest Life (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x370",
    answer: "DJ K.K. (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x371",
    answer: "Go K.K. Rider (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/019x372",
    answer: "K.K. Ragtime (Instrumental) - Animal Crossing: New Horizons",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x01",
    answer: "Opening / C-Side - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x02",
    answer: "Clickbait (Splash Sessions Demo) / C-Side - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x03",
    answer: "Clickbait / C-Side - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x04",
    answer: "Headhammer / C-Side - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x05",
    answer: "Triple Dip / C-Side - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x06",
    answer: "Paintscraper / C-Side - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x07",
    answer: "Splattack! / C-Side - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x08",
    answer: "Sea Me Now / Front Roe - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x09",
    answer: "Sandy Side Up / Front Roe - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x10",
    answer: "Candy-Coated Rocks / Damp Socks feat. Off the Hook - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x11",
    answer: "Tentacle to the Metal / Damp Socks feat. Off the Hook - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x12",
    answer: "Now or Never! / C-Side - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x13",
    answer: "Rinse/Repeat / C-Side - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x14",
    answer: "Learning Curve / C-Side - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x15",
    answer: "What's Your Style? - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x16",
    answer: "Anarchy Splatcast / Deep Cut - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x17",
    answer: "Welcome to Splatsville - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x18",
    answer: "Soaking In Splatsville - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x19",
    answer: "Dripping with Style / Seven Seas Crew - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x20",
    answer: "Happy Little Workers (24/7 Mix) / Grizzco - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x24",
    answer: "Frothy Waters / ω-3 - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x25",
    answer: "You Got Them! (Salmon Run) 2 / Grizzco - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x26",
    answer: "You Got Them! (Salmon Run) 3 - Go Off, King! / Grizzco - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x27",
    answer: "Toxic Anoxic / ω-3 - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x29",
    answer: "Anarchy Splatcast (Big Run) / Grizzco - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x30",
    answer: "Bait & Click (Mutation) / ω-3 - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x31",
    answer: "Bait & Click / ω-3 - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x32",
    answer: "Not Bad (Do Better) / Grizzco - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x34",
    answer: "The Crater - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x35",
    answer: "Crater Eighters Routine / Turquoise October - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x36",
    answer: "I'm Octavio (F34RME Remix) / DJ Octavio - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x37",
    answer: "Meeting the New Squidbeak Splatoon - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x38",
    answer: "Sandcastles / Stars in the Deep - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x39",
    answer: "Sudden Depth / Mimicry - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x40",
    answer: "Two Shadows in the Sun / Wash Out - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x41",
    answer: "Dead Sea / Firefly - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x42",
    answer: "Whirlpool Tune / On the Clock - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x43",
    answer: "Hyper Diver / Anxiety Society - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x44",
    answer: "Alterna Citizen Program M-01: Basic Course (Morning Fog) - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x45",
    answer: "Nine Out of Tension / Octoplush - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x46",
    answer: "Underwater Neon / Octoplush - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x47",
    answer: "Flop to It / Octoplush - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x49",
    answer: "Alterna Citizen Program M-02: Advanced Course (Twilight Waves) - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x50",
    answer: "Smoke and Mirrors / Octoplush - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x51",
    answer: "Ride or Fry / Octoplush - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x52",
    answer: "With Flying Colors / Octoplush - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x53",
    answer: "Seep & Destroy / Octoplush - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x54",
    answer: "Marine Machines / Octoplush - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x55",
    answer: "#35 caught / Octoplush - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x56",
    answer: "Don't Flinch / Octoplush - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x57",
    answer: "Deep Cut's Theme / Deep Cut - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x58",
    answer: "Alterna Citizen Program M-00: Init (System Noise) - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x59",
    answer: "Surprise and Shine / Deep Cut - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x60",
    answer: "Our Bad - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x61",
    answer: "Smooth as Ice - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x62",
    answer: "Mammalian Memo / Grizzco - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x63",
    answer: "In Filtration / Octoplush - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x64",
    answer: "Hide and Sleek / Deep Cut - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x65",
    answer: "Smeared Canvas / Deep Cut - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x66",
    answer: "Greeting Mr. Grizz / Grizzco - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x67",
    answer: "Countdown to Hairmageddon / Grizzco - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x68",
    answer: "Go, Agent 3! - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x69",
    answer: "Bear with Me / Grizzco - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x70",
    answer: "Calamari Inkantation 3MIX / Deep Cut x Squid Sisters - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x71",
    answer: "The Most Massive Fuzzball of All - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x72",
    answer: "Wave Goodbye / Squid Sisters - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x73",
    answer: "Alterna Citizen Program M-??: mY dEAR - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x74",
    answer: "Anarchy Poisons / Deep Cut - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x75",
    answer: "Anarchy Splatcast (Splatfest) / Deep Cut - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x76",
    answer: "Anarchy Rainbow / Deep Cut - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x77",
    answer: "Soak & Stomp / Anglerfish - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x78",
    answer: "Commence the Fest / Deep Cut - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x79",
    answer: "Fins in the Air / Deep Cut - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x80",
    answer: "Till Depth Do Us Part / Deep Cut - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x81",
    answer: "Liquid Sunshine / Squid Sisters feat. Ian BGM - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x82",
    answer: "Now or Never! / Deep Cut - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x83",
    answer: "Ego Overboard / Deep Cut - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x84",
    answer: "Still Swimmin' / Deep Cut - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x85",
    answer: "City of Color (2023) / Squid Sisters - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x86",
    answer: "Tomorrow's Nostalgia Today / Squid Sisters - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x87",
    answer: "Sinkopated / Backwash - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x88",
    answer: "Drip Feed / Turf Love - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x89",
    answer: "Heliocentri City / Wading Room - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x90",
    answer: "Fuzzy Dazzler / New Shores - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x91",
    answer: "Blop Bop / Bonfire - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x92",
    answer: "Gilded Cage / All Swell - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x93",
    answer: "Dressed to Krill / Coral Kiss - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x94",
    answer: "Slick Moves / Crevasse - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x95",
    answer: "Belly Flop / Aquariyum - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x96",
    answer: "Gillty / Pianissimo - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x97",
    answer: "Pour It On / Missing Ink - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x98",
    answer: "Lobby Terminal - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x99",
    answer: "The Shoal - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x100",
    answer: "Tableturf Level Selection / Ancho-V Games - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x101",
    answer: "Tableturf Deck Selection / Ancho-V Games - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x102",
    answer: "Tableturf Main Theme / Ancho-V Games - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x103",
    answer: "Tableturf Three Turns Remaining / Ancho-V Games - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x104",
    answer: "Tableturf Win Theme / Ancho-V Games - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x105",
    answer: "Tableturf Loss or Draw Theme / Ancho-V Games - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/020x106",
    answer: "Tableturf Card List / Ancho-V Games - Splatoon 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x01",
    answer: "Welcome to Paldea - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x02",
    answer: "Across the Skies of Paldea - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x03",
    answer: "Home - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x04",
    answer: "Cabo Poco - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x05",
    answer: "First Meeting - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x06",
    answer: "Becoming Stronger - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x07",
    answer: "Battle! (Nemona) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x08",
    answer: "Poco Path - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x09",
    answer: "Battle! (Wild Pokémon) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x10",
    answer: "By the Shore - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x11",
    answer: "Going through the Inlet Grotto - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x12",
    answer: "Battle in the Grotto - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x13",
    answer: "Escape from the Cave - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x14",
    answer: "A Test of Strength - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x15",
    answer: "Battle! (Arven) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x16",
    answer: "South Province - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x17",
    answer: "Battle! (South Province Wild Pokémon) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x18",
    answer: "Pokémon Center - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x19",
    answer: "Los Platos - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x20",
    answer: "A Stroll through the South Province - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x21",
    answer: "Mesagoza - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x22",
    answer: "A Tune at Mesagoza - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x23",
    answer: "Team Star - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x24",
    answer: "Battle! (Team Star) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x25",
    answer: "The Academy - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x26",
    answer: "A Call from Cassiopeia - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x27",
    answer: "Professor Sada / Professor Turo - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x28",
    answer: "Your Dorm Room - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x29",
    answer: "Trainers’ Eyes Meet (Trainer) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x30",
    answer: "Battle! (Trainer) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x31",
    answer: "Victory! (Trainer) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x32",
    answer: "Let’s Make a Sandwich! - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x33",
    answer: "Evolution - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x34",
    answer: "Gym Reception - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x35",
    answer: "Gym Test - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x36",
    answer: "Battle & Victory! (Gym Leader) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x37",
    answer: "West Province - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x38",
    answer: "Battle! (West Province Wild Pokémon) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x39",
    answer: "Asado Desert - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x40",
    answer: "Tera Raid Battle - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x41",
    answer: "Victory! (Tera Raid Battle) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x42",
    answer: "A Stroll through the Asado Desert - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x43",
    answer: "Cascarrafa - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x44",
    answer: "Still at the Gym Test - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x45",
    answer: "Battle! (Titan) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x46",
    answer: "Second Battle against the Titan - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x47",
    answer: "A Brief Moment - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x48",
    answer: "A Stroll through the West Province - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x49",
    answer: "Medali - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x50",
    answer: "Time to Relax - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x51",
    answer: "East Province - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x52",
    answer: "Battle! (East Province Wild Pokémon) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x53",
    answer: "Artazon - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x54",
    answer: "Levincia - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x55",
    answer: "’Ello, ’Ello, Hola! Ciao and Bonjour! - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x56",
    answer: "East Province (Area Three) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x57",
    answer: "A Stroll through the East Province - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x58",
    answer: "Tagtree Thicket - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x59",
    answer: "The Name’s Clive - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x60",
    answer: "Raiding the Base - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x61",
    answer: "Star Barrage - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x62",
    answer: "A Team Star Boss Appears! - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x63",
    answer: "Battle! (Team Star Boss) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x64",
    answer: "Victory! (Team Star Boss) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x65",
    answer: "Treasure of the Stars - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x66",
    answer: "North Province - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x67",
    answer: "Battle! (North Province Wild Pokémon) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x68",
    answer: "Montenevera - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x69",
    answer: "The Opening Act! - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x70",
    answer: "MC of RIP - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x71",
    answer: "A Stroll through the North Province - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x72",
    answer: "Casseroya Lake - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x73",
    answer: "Snow Slope Run - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x74",
    answer: "North Province (Area Two) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x75",
    answer: "Alfornada - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x76",
    answer: "Emotional Spectrum Practice - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x77",
    answer: "The Pokémon League Interview - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x78",
    answer: "The Pokémon League - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x79",
    answer: "Battle! (Elite Four) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x80",
    answer: "Battle! (Top Champion) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x81",
    answer: "Victory! (Top Champion) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x82",
    answer: "Together with Nemona - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x83",
    answer: "Battle! (Champion Nemona) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x84",
    answer: "My One and Only Rival - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x85",
    answer: "Battle! (Director Clavell) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x86",
    answer: "Clive’s True Identity - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x87",
    answer: "Battle! (Cassiopeia) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x88",
    answer: "Hasta la Vistar! ☆ - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x89",
    answer: "Heart - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x90",
    answer: "Arven’s Treasure - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x91",
    answer: "To the Great Crater of Paldea - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x92",
    answer: "Area Zero - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x93",
    answer: "Battle! (Area Zero Pokémon) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x94",
    answer: "The Gate Opens - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x95",
    answer: "Battle! (Area Zero Pokémon 2) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x96",
    answer: "Activating Offensive Protocols - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x97",
    answer: "Battle! (Zero Lab) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x98",
    answer: "Victory! (Zero Lab) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x99",
    answer: "Reunion - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x100",
    answer: "Paradise Protection Protocol Initialized - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x101",
    answer: "Battle Form - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x102",
    answer: "Batʇlə! (■■■) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x103",
    answer: "Earnest Feelings - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x104",
    answer: "I Bid You Adieu! - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x105",
    answer: "The Way Home - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x106",
    answer: "Get a Little More Fun Out of this Adventure! - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x107",
    answer: "The Academy Ace Tournament - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x108",
    answer: "Mystery Gift - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x109",
    answer: "The Battle Stadium - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x110",
    answer: "Battle! (Calamity Pokémon) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x111",
    answer: "Title Screen - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x112",
    answer: "The Hidden Treasure of Area Zero: The Teal Mask - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x113",
    answer: "Carmine & Kieran - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x114",
    answer: "Battle! (Carmine) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x115",
    answer: "Mossui Town - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x116",
    answer: "Battle! (Kieran) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x117",
    answer: "The Land of Kitakami - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x118",
    answer: "Battle! (Kitakami Pokémon) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x119",
    answer: "Photo (Pokémon March) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x120",
    answer: "Photo (Battle) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x121",
    answer: "Photo (Pokémon Lullaby) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x122",
    answer: "Perrin’s Theme - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x123",
    answer: "Historic Signboard - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x124",
    answer: "Together with Kieran - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x125",
    answer: "The Festival of Masks - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x126",
    answer: "Ogre Oustin’ - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x127",
    answer: "Ogre Oustin’ Completed - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x128",
    answer: "The Mysterious Child Who Dropped Their Mask - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x129",
    answer: "The True History - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x130",
    answer: "Crystal Pool - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x131",
    answer: "Twisted - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x132",
    answer: "The Loyal Three Return - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x133",
    answer: "The Loyal Three Cause Trouble - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x134",
    answer: "Battle! (Loyal Three) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x135",
    answer: "Decisive Battle! (Kieran) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x136",
    answer: "Battle! (Ogerpon) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x137",
    answer: "Caught Ogerpon! - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x138",
    answer: "A Moment of Honesty - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x139",
    answer: "I Need to Become Stronger - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x140",
    answer: "The Hidden Treasure of Area Zero: The Indigo Disk - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x141",
    answer: "Blueberry Academy - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x142",
    answer: "To the Terarium - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x143",
    answer: "Welcome to the Terarium! - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x144",
    answer: "Terarium (Savanna Biome) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x145",
    answer: "Battle! (Terarium Pokémon) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x146",
    answer: "Terarium (Coastal Biome) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x147",
    answer: "Battle! (Academy Trainer) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x148",
    answer: "Terarium (Central Plaza) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x149",
    answer: "Unsettling Atmosphere - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x150",
    answer: "A Regular Day at BB Academy - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x151",
    answer: "Your BB Dorm Room - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x152",
    answer: "Terarium (Canyon Biome) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x153",
    answer: "Battle! (Terarium Tera Pokémon) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x154",
    answer: "The Flying Time Trial - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x155",
    answer: "Elite Trial Completed - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x156",
    answer: "Terarium (Polar Biome) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x157",
    answer: "Battle! (BB League Elite Four) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x158",
    answer: "Victory! (BB League Elite Four) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x159",
    answer: "True Feelings - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x160",
    answer: "The Battle Begins - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x161",
    answer: "Battle! (Champion Kieran) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x162",
    answer: "Kieran Defeated - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x163",
    answer: "Briar’s Theme - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x164",
    answer: "Area Zero Underdepths - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x165",
    answer: "Terapagos Reawakened - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x166",
    answer: "Battle! (Terapagos) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x167",
    answer: "What the Hidden Treasure Needs - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x168",
    answer: "Terapagos Goes Berserk - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x169",
    answer: "Battle! (Terapagos, the Hidden Treasure of Area Zero) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x170",
    answer: "Caught Terapagos! - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x171",
    answer: "Starting Over from Zero - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x172",
    answer: "Studying Together with Team Star - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x173",
    answer: "Relic Song - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x174",
    answer: "The Curse of the Village...? - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x175",
    answer: "Mochi Mayhem - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x176",
    answer: "A Drone? A Pokémon? It’s Binding Mochi! - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x177",
    answer: "Battle! (Pecharunt) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/021x178",
    answer: "Title Screen (The Hidden Treasure of Area Zero) - Pokémon Scarlet and Pokémon Violet",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x01",
    answer: "Title Screen - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x02",
    answer: "Pikmin Discovered! - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x03",
    answer: "Taking Charge - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x04",
    answer: "Taking on More - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x05",
    answer: "Pikmin Hide-and-Seek - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x06",
    answer: "Ready to Deploy - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x07",
    answer: "Must Be Fate - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x08",
    answer: "Restart the S.S. Shepherd - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x09",
    answer: "The Onion Takes Root - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x10",
    answer: "First Day's Results - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x11",
    answer: "Strategy Meeting - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x12",
    answer: "Small Discovery - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x13",
    answer: "New Discovery - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x14",
    answer: "Big Discovery - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x15",
    answer: "An Abnormality! - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x16",
    answer: "Meeting the Red Pikmin - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x17",
    answer: "An Onion Matures - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x18",
    answer: "Onions Fuse - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x19",
    answer: "Before Nightfall - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x20",
    answer: "Today's Rescue Results - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x21",
    answer: "Rescue Command Post - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x22",
    answer: "Expanding the Rescue Command Post - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x23",
    answer: "Field Guides - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x24",
    answer: "Dandori Preparation - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x25",
    answer: "Sun-Speckled Terrace (Flyover) - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x26",
    answer: "Sun-Speckled Terrace - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x27",
    answer: "Blossoming Arcadia (Flyover) - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x28",
    answer: "Blossoming Arcadia - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x29",
    answer: "Serene Shores (Flyover) - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x30",
    answer: "Serene Shores - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x31",
    answer: "Hero's Hideaway (Flyover) - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x32",
    answer: "Hero's Hideaway - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x33",
    answer: "Giant's Hearth (Flyover) - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x34",
    answer: "Giant's Hearth - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x35",
    answer: "Primordial Thicket (Flyover) - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x36",
    answer: "Primordial Thicket - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x37",
    answer: "Spelunking - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x38",
    answer: "Cave Exploration (Toy Box) - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x39",
    answer: "Cave Exploration (Engulfed Castle) - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x40",
    answer: "Waterwraith Appears - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x41",
    answer: "Cave Exploration (Waterwraith) - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x42",
    answer: "All Pikmin Lost! - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x43",
    answer: "Cave Exploration (Safe) - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x44",
    answer: "Cave Results - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x45",
    answer: "Battling a Strong Creature - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x46",
    answer: "Battling a Stronger Creature - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x47",
    answer: "Battling an Even Stronger Creature - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x48",
    answer: "Groovy Long Legs Battle - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x49",
    answer: "Giant Breadbug Battle - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x50",
    answer: "Smoky Progg Battle - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x51",
    answer: "Leafling Encounter - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x52",
    answer: "Dandori, Dandori - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x53",
    answer: "Dandori Challenge 1 - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x54",
    answer: "Dandori Challenge 2 - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x55",
    answer: "Dandori Challenge Overtime - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x56",
    answer: "Dandori Challenge Results - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x57",
    answer: "The Mysterious Leafling - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x58",
    answer: "Dandori Training - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x59",
    answer: "Dandori Battle (Toy Box) - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x60",
    answer: "Dandori Battle (Sandbox) - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x61",
    answer: "Dandori Battle Victory - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x62",
    answer: "Meeting the Glow Pikmin - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x63",
    answer: "Nighttime Expedition - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x64",
    answer: "Nighttime Expedition Results - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x65",
    answer: "Commence Leafling Treatment - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x66",
    answer: "Leafling Treatment Complete - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x67",
    answer: "Moss the Guard Dog - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x68",
    answer: "Pikmin, Kidnapped - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x69",
    answer: "Chasing after Moss - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x70",
    answer: "Olimar's Shelter? - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x71",
    answer: "Final Test of Skill - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x72",
    answer: "Dandori Battle vs. Olimar? - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x73",
    answer: "Olimar Defeated? - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x74",
    answer: "Olimar Rescue Mission: Complete! - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x75",
    answer: "Olimar Aboard - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x76",
    answer: "Credits - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x77",
    answer: "Ancient Sirehound Appears - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x78",
    answer: "Ancient Sirehound Battle - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x79",
    answer: "Louie Secured - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x80",
    answer: "Oatchi Cured - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x81",
    answer: "Mission Complete! Prepare to Return Home - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x82",
    answer: "Back Where We Belong - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x83",
    answer: "So Long, Pikmin - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x84",
    answer: "Finale - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x85",
    answer: "Final Rescue Results - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x86",
    answer: "Olimar's Shipwreck Tale: Area Select - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x87",
    answer: "Olimar's Shipwreck Tale: Sun-Speckled Terrace - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x88",
    answer: "Olimar's Shipwreck Tale: Sun-Speckled Terrace (Evening) - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x89",
    answer: "Olimar's Shipwreck Tale: Ship Powered Up - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x90",
    answer: "Olimar's Shipwreck Tale: Blossoming Arcadia - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x91",
    answer: "Olimar's Shipwreck Tale: Blossoming Arcadia (Evening) - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x92",
    answer: "Olimar's Shipwreck Tale: Meeting Moss - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x93",
    answer: "Olimar's Shipwreck Tale: Serene Shores - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x94",
    answer: "Olimar's Shipwreck Tale: Serene Shores (Evening) - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x95",
    answer: "Olimar's Shipwreck Tale: Battling a Strong Creature - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x96",
    answer: "Olimar's Shipwreck Tale: The Last Push - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x97",
    answer: "Olimar's Shipwreck Tale: Strange Pikmin Behavior - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x98",
    answer: "Olimar's Shipwreck Tale: Gildemander Appears - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x99",
    answer: "Olimar’s Shipwreck Tale: The Pikmin Are Restored - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x100",
    answer: "Olimar's Shipwreck Tale: Hero's Hideaway - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x101",
    answer: "Olimar's Shipwreck Tale: Hero's Hideaway (Evening) - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x102",
    answer: "Olimar's Shipwreck Tale: So Long, Pikmin - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x103",
    answer: "Olimar's Shipwreck Tale: Successful Escape? - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x104",
    answer: "Olimar's Shipwreck Tale: Failed Escape - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x105",
    answer: "Olimar's Shipwreck Tale: Life as a Leafling - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x106",
    answer: "Olimar's Shipwreck Tale: All Records - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x107",
    answer: "Olimar's Shipwreck Tale: How It Happened - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x108",
    answer: "Sage Leaf's Cave - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x109",
    answer: "Trial of the Sage Leaf - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x110",
    answer: "Dandori Challenge (Sage Leaf) - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x111",
    answer: "Mechanical Harp: Memory Song - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x112",
    answer: "Mechanical Harp: Lullabies - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x113",
    answer: "Mechanical Harp: Windmills - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x114",
    answer: "Pikmin Tune 1 - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x115",
    answer: "Pikmin Tune 2 - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x116",
    answer: "Pikmin Tune 3 - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x117",
    answer: "Pikmin Tune 4 - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x118",
    answer: "Pikmin Tune 5 - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/022x119",
    answer: "Pikmin Tune 6 - Pikmin 4",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x01",
    answer: "Title Screen - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x02",
    answer: "Prologue: The Flower Kingdom - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x03",
    answer: "Prologue: Creation of Castle Bowser - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x04",
    answer: "Prologue: Poplin Prisoners - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x05",
    answer: "Prologue: Adventure Awaits! - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x06",
    answer: "World Theme: Pipe-Rock Plateau - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x07",
    answer: "Grassland Theme - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x08",
    answer: "Bendy-Boing Wonder - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x09",
    answer: "Forest Theme - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x10",
    answer: "Piranha Plants on Parade - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x11",
    answer: "Savanna Theme - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x12",
    answer: "Stompy-Stampede Wonder - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x13",
    answer: "Spikey Dance Number - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x14",
    answer: "Flippy-Float Wonder - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x15",
    answer: "Switching On - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x16",
    answer: "Wiggler Race! - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x17",
    answer: "Wiggler Race: You Win! - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x18",
    answer: "Wiggler Race: You Lose... - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x20",
    answer: "World Theme: Petal Isles - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x21",
    answer: "Coast Theme - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x22",
    answer: "Underwater Theme - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x23",
    answer: "Stretchy-Shadow Wonder - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x24",
    answer: "World Theme: Fluff-Puff Peaks - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x25",
    answer: "Snowy-Mountain Theme - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x26",
    answer: "Medley-Mix Wonder - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x27",
    answer: "Athletic Theme - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x28",
    answer: "Jump! Jump! Jump! - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x29",
    answer: "Super Star - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x30",
    answer: "Palace Theme - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x31",
    answer: "Bowser Jr. Battle - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x32",
    answer: "World Clear! - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x33",
    answer: "World Theme: Shining Falls - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x34",
    answer: "Poplin House - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x35",
    answer: "Shining Falls Theme - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x36",
    answer: "Shapey-Shift Wonder - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x37",
    answer: "Shooty-Star Wonder - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x38",
    answer: "Badge Challenge - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x39",
    answer: "Bonus: Coins Galore! - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x40",
    answer: "Break Time! Theme 1 - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x41",
    answer: "Break Time! Theme 2 - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x43",
    answer: "World Theme: Sunbaked Desert - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x44",
    answer: "Desert Theme - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x45",
    answer: "Puzzly-Pyramid Wonder - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x46",
    answer: "Underground Theme - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x47",
    answer: "Ninji Disco - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x48",
    answer: "Break Time! Tunes 2 - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x49",
    answer: "Break Time! Raise the Stage - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x50",
    answer: "World Theme: Fungi Mines - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x51",
    answer: "Dark Woods Theme - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x53",
    answer: "Poison-Swamp Underground Theme - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x54",
    answer: "A Night at Boo's Opera - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x55",
    answer: "Pumpkin Party - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x56",
    answer: "Arena - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x58",
    answer: "World Theme: Deep Magma Bog - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x59",
    answer: "Lava Theme - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x60",
    answer: "Flowy-Flight Wonder - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x61",
    answer: "Flying Battleship Theme - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x62",
    answer: "Doomy-Gloom Wonder - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x63",
    answer: "Mecha Maker Battle - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x64",
    answer: "World Theme: Flower Kingdom Invaded - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x65",
    answer: "World Theme: Petal Isles (Castle Bowser) - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x66",
    answer: "Castle Bowser Theme - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x67",
    answer: "Zappy-Zone Wonder - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x68",
    answer: "Bowser's Blazing Beats - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x69",
    answer: "Bowser's Wonder Rush - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x70",
    answer: "Bowser's Rage Stage - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x71",
    answer: "Castle Bowser Battle - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x72",
    answer: "Castle Bowser Demolished - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x73",
    answer: "The Royal Seeds - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x74",
    answer: "Epilogue: Kingdom in Full Bloom - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x75",
    answer: "Starry-Staff Wonder - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x76",
    answer: "Epilogue: Come Back Again Sometime, Yeah? - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x77",
    answer: "Special World - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/023x78",
    answer: "A Very Special March - Super Mario Bros. Wonder",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x01",
    answer: "K. Rool Returns (Title Theme) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x02",
    answer: "Steel Drum Rhumba (Option Screen) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x03",
    answer: "Welcome to Crocodile Isle (Map Screen) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x04",
    answer: "Klomp's Romp (Pirate Panic) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x05",
    answer: "Jib Jig (Mainbrace Mayhem) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x06",
    answer: "Lockjaw's Saga (Lockjaw's Locker) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x07",
    answer: "Boss Bossanova (Boss Theme) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x08",
    answer: "Diddy's Victory - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x09",
    answer: "Schoolhouse Harmony (Wrinkly's Theme) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x10",
    answer: "Hot-Head Bop (Hot-Head Hop) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x11",
    answer: "Kannon's Klanking (Kannon's Klaim) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x12",
    answer: "Funky the Main Monkey (Funky's Theme) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x13",
    answer: "Bayou Boogie (Barrel Bayou) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x14",
    answer: "Snakey Chantey (Rattle Battle) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x15",
    answer: "Stickerbush Symphony (Bramble Blast) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x16",
    answer: "Cranky's Conga (Cranky's Theme) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x17",
    answer: "Flight of the Zinger (Hornet Hole) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x18",
    answer: "Disco Train (Target Terror) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x19",
    answer: "Run, Rambi! Run! (Parrot Chute Panic) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x20",
    answer: "Swanky Swing (Swanky's Bonus Bonanza) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x21",
    answer: "Haunted Chase (Haunted Hall) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x22",
    answer: "Forest Interlude (Web Woods) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x23",
    answer: "Token Tango (Bonus Level) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x24",
    answer: "Krook's March (Chain Link Chamber) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x25",
    answer: "In a Snowbound Land (Clapper's Cavern) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x26",
    answer: "Klubba's Reveille (Klubba's Kiosk) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x27",
    answer: "Lost World Anthem (The Lost World) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x28",
    answer: "Primal Rave (Animal Antics) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x29",
    answer: "False Victory - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x30",
    answer: "Bad Bird Rag (Screech's Sprint) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x31",
    answer: "Crocodile Cacophony (K. Rool's Theme) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x32",
    answer: "Donkey Kong Rescued (Credits Roll) - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/024x33",
    answer: "Game Over - Donkey Kong Country 2: Diddy's Kong Quest",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x01",
    answer: "Title Theme - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x02",
    answer: "Main Menu - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x03",
    answer: "Learning to Play - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x04",
    answer: "Tennis: Player Selection - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x05",
    answer: "Tennis: Winning Shot - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x06",
    answer: "Tennis: Results - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x07",
    answer: "Tennis: Training - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x08",
    answer: "Baseball: Results - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x09",
    answer: "Baseball: Training - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x10",
    answer: "Bowling: The Alley - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x11",
    answer: "Bowling: Results - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x12",
    answer: "Bowling: Training - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x13",
    answer: "Golf: Course Selection - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x14",
    answer: "Golf: Results - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x15",
    answer: "Golf: Training - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x16",
    answer: "Boxing: Replay - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x17",
    answer: "Boxing: Results - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x18",
    answer: "Boxing: Training - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x20",
    answer: "Training: Results - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x21",
    answer: "Training: Personal Best - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x22",
    answer: "Training: Earning a Medal - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x23",
    answer: "Wii Fitness: Menu - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/025x24",
    answer: "Wii Fitness: Results - Wii Sports",
    },
    {
    url: "https://soundcloud.com/goldchimera/026x01",
    answer: "Endless Challenge (Mute City) - F-Zero X",
    },
    {
    url: "https://soundcloud.com/goldchimera/026x02",
    answer: "Dream Chaser (Silence) - F-Zero X",
    },
    {
    url: "https://soundcloud.com/goldchimera/026x03",
    answer: "Fall Down to the Stream (Sand Ocean / Fire Field) - F-Zero X",
    },
    {
    url: "https://soundcloud.com/goldchimera/026x04",
    answer: "Decided by the Eyes (Big Blue) - F-Zero X",
    },
    {
    url: "https://soundcloud.com/goldchimera/026x05",
    answer: "A Devil's Call in Your Heart (Devil's Forest) - F-Zero X",
    },
    {
    url: "https://soundcloud.com/goldchimera/026x06",
    answer: "Long-Distance Murder (Red Canyon / Space Plant) - F-Zero X",
    },
    {
    url: "https://soundcloud.com/goldchimera/026x07",
    answer: "Crazy Crying Call (Port Town) - F-Zero X",
    },
    {
    url: "https://soundcloud.com/goldchimera/026x08",
    answer: "Drivin' Through on MAX (Sector α / Sector β / Rainbow Road) - F-Zero X",
    },
    {
    url: "https://soundcloud.com/goldchimera/026x09",
    answer: "Climb Up / Last Chance! (White Land / Big Hand) - F-Zero X",
    },
    {
    url: "https://soundcloud.com/goldchimera/026x10",
    answer: "All We Need Is 30 Deaths (Death Race) - F-Zero X",
    },
    {
    url: "https://soundcloud.com/goldchimera/026x11",
    answer: "Title BGM - F-Zero X",
    },
    {
    url: "https://soundcloud.com/goldchimera/026x12",
    answer: "Machine Select - F-Zero X",
    },
    {
    url: "https://soundcloud.com/goldchimera/026x13",
    answer: "Options - F-Zero X",
    },
    {
    url: "https://soundcloud.com/goldchimera/026x14",
    answer: "Goal BGM - F-Zero X",
    },
    {
    url: "https://soundcloud.com/goldchimera/026x15",
    answer: "Grand Prix Ending - F-Zero X",
    },
    {
    url: "https://soundcloud.com/goldchimera/026x16",
    answer: "Staff Roll - F-Zero X",
    },
    {
    url: "https://soundcloud.com/goldchimera/027x01",
    answer: "Title Theme - Brain Age: Train Your Brain in Minutes a Day!",
    },
    {
    url: "https://soundcloud.com/goldchimera/027x02",
    answer: "Checking Brain Age for the First Time - Brain Age: Train Your Brain in Minutes a Day!",
    },
    {
    url: "https://soundcloud.com/goldchimera/027x03",
    answer: "Menu Theme - Brain Age: Train Your Brain in Minutes a Day!",
    },
    {
    url: "https://soundcloud.com/goldchimera/027x04",
    answer: "Results - Brain Age: Train Your Brain in Minutes a Day!",
    },
    {
    url: "https://soundcloud.com/goldchimera/027x05",
    answer: "Checking Answers - Brain Age: Train Your Brain in Minutes a Day!",
    },
    {
    url: "https://soundcloud.com/goldchimera/027x07",
    answer: "Staff Credits - Brain Age: Train Your Brain in Minutes a Day!",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x01",
    answer: "Opening / Wet Floor - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x02",
    answer: "Inkoming! / Wet Floor - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x03",
    answer: "Rip Entry / Wet Floor  - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x04",
    answer: "Undertow / Wet Floor - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x05",
    answer: "Don't Slip / Wet Floor - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x06",
    answer: "Endolphin Surge / Wet Floor - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x07",
    answer: "Shipwreckin' / Bottom Feeders - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x08",
    answer: "Fins & Fiddles / Bottom Feeders - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x09",
    answer: "Seafoam Shanty / Bottom Feeders - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x10",
    answer: "Broken Coral / Ink Theory - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x11",
    answer: "Riptide Rupture / Ink Theory - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x12",
    answer: "Blitz It! / Chirpy Chips - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x13",
    answer: "Wave Prism / Chirpy Chips - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x14",
    answer: "Seasick / Diss-Pair - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x15",
    answer: "Kinetosis / Diss-Pair - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x16",
    answer: "Chopscrewey / SashiMori - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x17",
    answer: "Entropical / SashiMori - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x18",
    answer: "Now or Never! / Wet Floor - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x19",
    answer: "Turf Master / Wet Floor - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x20",
    answer: "Ink Another Day / Wet Floor - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x21",
    answer: "Inkoming! (Cloud Edit) / Wet Floor - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x22",
    answer: "Slip into Inkopolis Square - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x23",
    answer: "Getting Squared Away - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x24",
    answer: "Inkopolis Square - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x25",
    answer: "Without a Dop Doubt - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x26",
    answer: "The Shoal - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x27",
    answer: "Dubble Bath (DIY Remix) / Bob Dub - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x28",
    answer: "New You / DJ Real Sole - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x29",
    answer: "Happy Little Workers / Grizzco - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x30",
    answer: "Surge & Submerge / ω-3 - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x31",
    answer: "Deluge Dirge / ω-3 - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x32",
    answer: "Fishing Frenzy / ω-3 - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x33",
    answer: "Frantic Aspic / ω-3 - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x34",
    answer: "Ever Further / Grizzco - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x35",
    answer: "Inkopolis News / Off the Hook - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x36",
    answer: "Color Pulse / Off the Hook - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x37",
    answer: "Commence the Fest / Off the Hook - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x38",
    answer: "Ebb & Flow / Off the Hook - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x39",
    answer: "Acid Hues / Off the Hook - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x40",
    answer: "Muck Warfare / Off the Hook - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x41",
    answer: "Now or Never! / Off the Hook - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x42",
    answer: "Fest Zest / Off the Hook - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x43",
    answer: "Party's Over / Off the Hook - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x44",
    answer: "Low Tide - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x45",
    answer: "Octo Canyon / Turquoise October - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x46",
    answer: "Octo Eight-Step / Turquoise October - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x47",
    answer: "The Girl from Inkopolis / Turquoise October - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x48",
    answer: "Buoyant Boogie / Turquoise October - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x49",
    answer: "Shooting Starfish / Turquoise October - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x53",
    answer: "Boss Entrance / Turquoise October - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x54",
    answer: "Octarmaments / Turquoise October - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x55",
    answer: "Bomb Rush Blush / DJ Octavio feat. Callie - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x56",
    answer: "Tidal Rush / DJ Octavio feat. Callie vs. Marie - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x57",
    answer: "Spicy Calamari Inkantation / Squid Sisters - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x58",
    answer: "Fresh Start / Squid Sisters - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x59",
    answer: "Octroduction - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x60",
    answer: "Cap'n Cuttlefish's Theme (Octo) / Character Creation - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x61",
    answer: "#5 thirsty / Dedf1sh - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x62",
    answer: "Deepsea Metro Central Station - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x63",
    answer: "Telephone's Theme - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x64",
    answer: "Inside Deepsea Metro - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x65",
    answer: "#0 shell / Dedf1sh - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x66",
    answer: "#1 progress / Dedf1sh - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x67",
    answer: "#6 frisk / Dedf1sh - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x68",
    answer: "#4 dunno / Dedf1sh - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x69",
    answer: "#2 ripped / Dedf1sh - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x70",
    answer: "#9 party / Dedf1sh - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x71",
    answer: "#8 regret / Dedf1sh - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x72",
    answer: "#14 crush / Dedf1sh - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x73",
    answer: "#13 shade / Dedf1sh - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x74",
    answer: "#16 salty / Dedf1sh - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x75",
    answer: "#12 awake / Dedf1sh - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x76",
    answer: "#11 above / Dedf1sh - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x77",
    answer: "#19 bless / Dedf1sh - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x78",
    answer: "All the Thangs - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x79",
    answer: "Nasty Majesty / Off the Hook - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x80",
    answer: "Shark Bytes / Off the Hook - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x81",
    answer: "Splattack! (Octo) / Dedf1sh - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x82",
    answer: "Reaching the Surface - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x83",
    answer: "Commander Tartar's Actual Theme - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x84",
    answer: "The Plan - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x85",
    answer: "Here Comes Ultimate Doom / Off the Hook - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x86",
    answer: "Fly Octo Fly - Ebb & Flow (Octo) / Off the Hook - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x87",
    answer: "It's Over - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x88",
    answer: "Mic Drop - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x89",
    answer: "Into the Light / Off the Hook - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x90",
    answer: "#$@%* Dudes Be #$@%* Sleepin' (Live) / Pearl - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/028x91",
    answer: "Ebb&FlowDemo.frsh (Sketch) / Marina - Splatoon 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x01",
    answer: "Title Theme - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x02",
    answer: "Options - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x03",
    answer: "Watercraft Select - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x04",
    answer: "Dolphin Park - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x05",
    answer: "Sunny Beach (1996 Ver.) - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x06",
    answer: "Sunset Bay - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x07",
    answer: "Drake Lake - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x08",
    answer: "Marine Fortress - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x09",
    answer: "Port Blue - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x10",
    answer: "Twilight City - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x11",
    answer: "Glacier Coast - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x12",
    answer: "Southern Island (1996 Ver.) - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x13",
    answer: "1st-Place Finish - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x14",
    answer: "2nd-Place Finish - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x15",
    answer: "3rd-Place Finish - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x16",
    answer: "4th-Place Finish - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x17",
    answer: "No Placement - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x18",
    answer: "Race Results - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x19",
    answer: "2P Vs. Finish - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x20",
    answer: "Time Trials / Stunt Mode Finish - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x21",
    answer: "Championship Ending - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x22",
    answer: "4th Place - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x23",
    answer: "3rd Place - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x24",
    answer: "2nd Place - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x25",
    answer: "1st Place - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x26",
    answer: "Sunny Beach (1997 Ver.) - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/029x27",
    answer: "Southern Island (1997 Ver.) - Wave Race 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x01",
    answer: "The Ballad of the Goddess (Main Theme) - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x02",
    answer: "An Ages-Old Tale - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x03",
    answer: "File Select - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x04",
    answer: "Islands in the Sky - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x05",
    answer: "The First Omen - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x06",
    answer: "The Knight Academy - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x07",
    answer: "Skyloft - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x08",
    answer: "Before the Goddess Statue - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x09",
    answer: "A Moment with Zelda - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x10",
    answer: "Something's Wrong - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x11",
    answer: "Groose Appears - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x12",
    answer: "Groose Appears Uneasy - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x13",
    answer: "Groose Appears Nervous - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x14",
    answer: "Waterfall Cave - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x15",
    answer: "Flight Training - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x16",
    answer: "Wing Ceremony Opening - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x17",
    answer: "The Wing Ceremony - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x18",
    answer: "Wing Ceremony Winner - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x19",
    answer: "An Audience with the Goddess - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x20",
    answer: "The Goddess's Blessing - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x21",
    answer: "Among the Clouds - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x22",
    answer: "The Black Tornado - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x23",
    answer: "The Second Omen - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x24",
    answer: "What Happened to Zelda? - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x25",
    answer: "The Spirit's Guidance - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x26",
    answer: "Fi's Theme - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x27",
    answer: "A Column of Light Emerges - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x28",
    answer: "Determination - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x29",
    answer: "Braving the Unknown - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x30",
    answer: "House Theme - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x31",
    answer: "The Bazaar - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x32",
    answer: "Gliding with a Loftwing - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x33",
    answer: "Seeing the Surface - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x34",
    answer: "The Sealed Grounds - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x35",
    answer: "Battle Theme - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x37",
    answer: "The Sealed Temple - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x38",
    answer: "Faron Woods - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x39",
    answer: "Under Attack - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x40",
    answer: "Encounter with a Kikwi - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x41",
    answer: "Chasing after Machi - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x42",
    answer: "Conversations with Kikwis - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x43",
    answer: "The Kikwi Elder - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x44",
    answer: "The Skyview Temple - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x45",
    answer: "A Strong Foe - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x46",
    answer: "Ghirahim, Demon Lord - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x47",
    answer: "A Duel with Ghirahim - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x48",
    answer: "Skyview Spring - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x49",
    answer: "The Language of the Gods - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x50",
    answer: "Fi's Translation - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x51",
    answer: "The Statue of the Goddess - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x52",
    answer: "A Small Island - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x54",
    answer: "Eldin Volcano - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x55",
    answer: "Meeting the Mogmas - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x56",
    answer: "Beneath Eldin Volcano - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x57",
    answer: "Tubert Tunnels In - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x58",
    answer: "The Thrill Digger Digsite - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x59",
    answer: "Thrill Digger - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x60",
    answer: "The Earth Temple - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x61",
    answer: "A Fierce Fight - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x62",
    answer: "Boulder Trap - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x63",
    answer: "Scaldera Appears - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x64",
    answer: "Scaldera & Tentalus Battles - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x65",
    answer: "An Emotional Vision - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x66",
    answer: "Lanayru Desert - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x67",
    answer: "The Lanayru Mining Facility - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x68",
    answer: "Ghirahim's Assault - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x69",
    answer: "Groose Swoops In - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x70",
    answer: "Groose Gets Grounded - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x71",
    answer: "Grooseland - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x72",
    answer: "An Excerpt from the Ballad of the Goddess - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x73",
    answer: "Learning the Ballad of the Goddess - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x74",
    answer: "The Old Woman's Wisdom - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x75",
    answer: "The Imprisoned Is Freed - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x76",
    answer: "The Imprisoned Battle - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x77",
    answer: "The Sealing Spike - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x79",
    answer: "Scrapper Lives - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x80",
    answer: "The Ballad of the Goddess (Harp Acc.) - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x81",
    answer: "The Lumpy Pumpkin - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x82",
    answer: "A Duet with Kina - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x83",
    answer: "The Statue's Melody: Farore's Courage - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x84",
    answer: "Learning Farore's Courage - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x85",
    answer: "Farore's Courage (Harp Acc.) - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x86",
    answer: "Farore's Silent Realm - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x87",
    answer: "The Guardians Give Chase - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x88",
    answer: "Inside the Great Tree - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x89",
    answer: "Lake Floria - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x90",
    answer: "Dragon's Den - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x91",
    answer: "The Ancient Cistern - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x92",
    answer: "The Cursed Bokoblins - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x93",
    answer: "Moldarach & Koloktos Battles - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x94",
    answer: "Koloktos Battle (Second Phase) - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x95",
    answer: "Strengthening the Goddess Sword - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x96",
    answer: "The Statue's Melody: Nayru's Wisdom - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x97",
    answer: "Learning Nayru's Wisdom - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x98",
    answer: "Nayru's Wisdom (Harp Acc.) - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x99",
    answer: "Nayru's Silent Realm - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x100",
    answer: "The Lanayru Sand Sea - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x101",
    answer: "Sailing the Sand Sea - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x102",
    answer: "Cart Ride - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x103",
    answer: "The Pirate Stronghold - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x104",
    answer: "Outside the Sandship - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x105",
    answer: "Inside the Sandship - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x106",
    answer: "The Statue's Melody: Din's Power - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x107",
    answer: "Learning Din's Power - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x108",
    answer: "Din's Power (Harp Acc.) - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x109",
    answer: "Din's Silent Realm - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x110",
    answer: "The Volcano Summit - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x111",
    answer: "The Fire Sanctuary - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x112",
    answer: "The Mogma Elder - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x113",
    answer: "Conversing with Mogmas - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x114",
    answer: "Runaway Plats - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x115",
    answer: "The Gate of Time Activates - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x116",
    answer: "Groose's Determination - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x117",
    answer: "The Temple of Hylia - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x118",
    answer: "Reuniting with Zelda - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x119",
    answer: "The Master Sword's Ultimate Form - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x120",
    answer: "Levias, Great Spirit of the Skies - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x121",
    answer: "Ocular Parasite Bilocyte Battle - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x122",
    answer: "The Imprisoned Takes Flight - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x123",
    answer: "The Flooded Woods - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x124",
    answer: "Tracking Down the Tadtones - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x125",
    answer: "All Tadtones Accounted For - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x126",
    answer: "An Excerpt from the Song of the Hero (Water Dragon) - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x127",
    answer: "Infiltrating Eldin Volcano - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x128",
    answer: "An Excerpt from the Song of the Hero (Fire Dragon) - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x129",
    answer: "An Excerpt from the Song of the Hero (Thunder Dragon) - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x130",
    answer: "An Excerpt from the Song of the Hero (Great Sky Spirit) - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x131",
    answer: "The Song of the Hero - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x132",
    answer: "The Song of the Hero (Harp Acc.) - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x133",
    answer: "The Goddess's Silent Realm - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x134",
    answer: "The Sky Keep Appears - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x135",
    answer: "The Sky Keep - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x136",
    answer: "A Wish to the Triforce - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x137",
    answer: "A Return to the Surface - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x138",
    answer: "The Horde Attacks - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x140",
    answer: "Showdown with Ghirahim (Second Phase) - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x141",
    answer: "The Resurrection Ritual - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x142",
    answer: "Demise Restored - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x143",
    answer: "Evil Incarnate Awakens - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x144",
    answer: "Confronting Demise - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x145",
    answer: "Demise Battle - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x146",
    answer: "Demise Strikes - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x147",
    answer: "Demise Is Eradicated - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x148",
    answer: "Parting Ways with Fi - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x149",
    answer: "Companionship Concluded - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x150",
    answer: "Thank You, Master Link - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x151",
    answer: "The Sheikah's Duty - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x152",
    answer: "A Tale of Origins - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x153",
    answer: "Staff Credits - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x154",
    answer: "The Epilogue - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x155",
    answer: "Bamboo Island - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x156",
    answer: "Clean Cut - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x157",
    answer: "Pumpkin Pull - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x158",
    answer: "Dodoh's High Dive - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x159",
    answer: "Bug Heaven - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x160",
    answer: "Batreaux's Theme - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/030x161",
    answer: "Batreaux's Transformation - The Legend of Zelda: Skyward Sword",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x01",
    answer: "Title Theme - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x02",
    answer: "File Select - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x03",
    answer: "Opening - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x04",
    answer: "Peach's Castle - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x05",
    answer: "Main Theme - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x06",
    answer: "Stage Boss - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x07",
    answer: "Slider - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x08",
    answer: "Piranha Plant's Lullaby - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x09",
    answer: "Dire, Dire Docks - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x10",
    answer: "Cool, Cool Mountain - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x11",
    answer: "Bowser's Road - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x12",
    answer: "Bowser's Theme - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x13",
    answer: "Powerful Mario - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x14",
    answer: "Big Boo's Haunt - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x15",
    answer: "The Merry-Go-Round - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x16",
    answer: "Hazy Maze Cave - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x17",
    answer: "Metal Mario - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x18",
    answer: "Lethal Lava Land - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x19",
    answer: "The Endless Stairs - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x20",
    answer: "The Final Battle - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x21",
    answer: "Final Battle Clear - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x22",
    answer: "Ending - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x23",
    answer: "Staff Roll - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/031x24",
    answer: "Piranha Plant's Lullaby (Piano Version) - Super Mario 64",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x01",
    answer: "Dixie Beat - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x02",
    answer: "Crazy Calypso - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x03",
    answer: "Northern Kremisphere - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x04",
    answer: "Hangin’ at Funky’s - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x05",
    answer: "Wrinkly's Save Cave - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x06",
    answer: "Get Fit A-Go-Go - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x07",
    answer: "Wrinkly 64 - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x08",
    answer: "Brothers Bear - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x09",
    answer: "Sub-Map Shuffle - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x10",
    answer: "Swanky's Sideshow - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x11",
    answer: "Cranky’s Showdown - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x12",
    answer: "Bonus Time - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x13",
    answer: "Stilt Village - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x14",
    answer: "Mill Fever - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x15",
    answer: "Jangle Bells - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x16",
    answer: "Frosty Frolics - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x17",
    answer: "Treetop Tumble - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x18",
    answer: "Enchanted Riverbank - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x19",
    answer: "Hot Pursuit - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x20",
    answer: "Water World - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x21",
    answer: "Cascade Capers - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x22",
    answer: "Nuts and Bolts - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x23",
    answer: "Pokey Pipes - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x24",
    answer: "Rockface Rumble - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x25",
    answer: "Jungle Jitter - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x26",
    answer: "Cavern Caprice - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x27",
    answer: "Rocket Run - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x28",
    answer: "Boss Boogie - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x29",
    answer: "Crystal Chasm - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x30",
    answer: "Krematoa Koncerto - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x31",
    answer: "Big Boss Blues - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x32",
    answer: "Mama Bird - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x33",
    answer: "Chase - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/032x34",
    answer: "Baddies on Parade - Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x01",
    answer: "Title Theme - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x02",
    answer: "File Selection - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x03",
    answer: "Legend of the Hero - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x04",
    answer: "Outset Island - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x05",
    answer: "House Theme - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x06",
    answer: "Old Man's House - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x07",
    answer: "Ways of the Sword - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x08",
    answer: "Beedle's Shop Ship - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x09",
    answer: "A Monstrous Bird - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x10",
    answer: "Outset Island Forest - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x11",
    answer: "Battle Theme - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x12",
    answer: "Meeting Tetra - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x13",
    answer: "Aryll Abducted - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x14",
    answer: "Grandma - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x15",
    answer: "Setting Sail - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x16",
    answer: "Pirates - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x17",
    answer: "Below Deck - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x18",
    answer: "Hatching a Rescue Plan - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x19",
    answer: "Executing the Rescue Plan - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x20",
    answer: "Forsaken Fortress - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x21",
    answer: "Reuniting with Aryll - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x22",
    answer: "Meeting the King of Red Lions - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x23",
    answer: "The Tale of Ganon - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x24",
    answer: "Search for a Sail - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x25",
    answer: "Windfall Island - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x26",
    answer: "Potion Shop - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x27",
    answer: "Daybreak - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x28",
    answer: "The Great Sea - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x29",
    answer: "Clash at Sea - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x30",
    answer: "Battle at Sea - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x31",
    answer: "Dragon Roost Island - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x32",
    answer: "Dragon Roost Cavern - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x33",
    answer: "Intense Battle - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x34",
    answer: "Gohma Appears - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x35",
    answer: "Gohma Battle (First Phase) - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x36",
    answer: "Gohma Battle (Second Phase) - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x37",
    answer: "Boss Defeated - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x38",
    answer: "Boat Game - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x39",
    answer: "Boat Game Victory - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x40",
    answer: "Forest Haven - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x41",
    answer: "Inside the Forest Haven - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x42",
    answer: "The Deku Tree and Friends - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x43",
    answer: "Forbidden Woods - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x44",
    answer: "Kalle Demos Appears - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x45",
    answer: "Kalle Demos - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x46",
    answer: "Forest Ceremony - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x47",
    answer: "Next Year's Ceremony - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x48",
    answer: "The Cursed Sea - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x49",
    answer: "Sacred Shrine - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x50",
    answer: "Jabun - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x51",
    answer: "The Tower of the Gods Emerges - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x52",
    answer: "Tower of the Gods - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x53",
    answer: "Gohdan Appears - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x54",
    answer: "Gohdan Battle - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x55",
    answer: "To Hyrule - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x56",
    answer: "Sealed Hyrule Castle - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x57",
    answer: "Hyrule Castle - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x58",
    answer: "Phantom Ganon Battle - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x59",
    answer: "Reunited with Aryll - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x60",
    answer: "Tetra Spies the Sword - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x61",
    answer: "A Short-Lived Reunion - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x62",
    answer: "Forsaken Fortress Tower - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x63",
    answer: "Helmaroc King Appears - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x64",
    answer: "Helmaroc King Battle - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x65",
    answer: "Master of the Forsaken Fortress - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x66",
    answer: "The Pirate's Charm - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x67",
    answer: "The King of Hyrule Appears - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x68",
    answer: "Heir of the Royal Family - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x69",
    answer: "Zelda's Theme - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x70",
    answer: "Fairy Fountain - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x71",
    answer: "Fairy Queen - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x72",
    answer: "Dungeon Theme - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x73",
    answer: "Sage Laruto - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x74",
    answer: "Medli, the Sage of Earth - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x75",
    answer: "Earth God's Lyric - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x76",
    answer: "The Earth Temple - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x77",
    answer: "Jalhalla Appears - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x78",
    answer: "Jalhalla Battle - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x79",
    answer: "Medli's Prayer - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x80",
    answer: "Sage Fado - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x82",
    answer: "Wind Temple - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x83",
    answer: "Molgera Appears - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x84",
    answer: "Molgera Battle - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x85",
    answer: "Makar's Prayer - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x86",
    answer: "Hero of Winds - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x87",
    answer: "Ganon's Tower - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x88",
    answer: "Gohma Battle, Ganon's Tower (First Phase) - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x89",
    answer: "Gohma Battle, Ganon's Tower (Second Phase) - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x90",
    answer: "Kalle Demos Battle, Ganon's Tower - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x91",
    answer: "Jalhalla Battle, Ganon's Tower - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x92",
    answer: "Molgera Battle, Ganon's Tower - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x93",
    answer: "Phantom Ganon's Maze - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x94",
    answer: "Ganondorf Speaks - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x95",
    answer: "Puppet Ganon (Puppet Form) - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x96",
    answer: "Puppet Ganon Transforms - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x97",
    answer: "Puppet Ganon (Spider Form) - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x98",
    answer: "Puppet Ganon (Snake Form) - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x99",
    answer: "Puppet Ganon's Demise - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x100",
    answer: "Before the Showdown - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x101",
    answer: "Ganondorf Battle - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x102",
    answer: "Parting Ways - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x103",
    answer: "Ending Theme - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x104",
    answer: "Staff Credits - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x106",
    answer: "Aryll's Theme - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/033x107",
    answer: "Game Demo Theme - The Legend of Zelda: The Wind Waker",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x01",
    answer: "Super Mario Kart Title Screen - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x02",
    answer: "Selection Screens - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x03",
    answer: "Mario Circuit - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x04",
    answer: "Mario Circuit (Final Lap) - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x05",
    answer: "Donut Plains - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x06",
    answer: "Donut Plains (Final Lap) - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x07",
    answer: "Ghost Valley - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x08",
    answer: "Ghost Valley (Final Lap) - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x09",
    answer: "Bowser Castle - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x10",
    answer: "Bowser Castle (Final Lap) - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x11",
    answer: "Choco Island - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x12",
    answer: "Choco Island (Final Lap) - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x13",
    answer: "Koopa Beach - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x14",
    answer: "Koopa Beach (Final Lap) - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x15",
    answer: "Vanilla Lake - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x16",
    answer: "Vanilla Lake (Final Lap) - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x17",
    answer: "Rainbow Road - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x18",
    answer: "Rainbow Road (Final Lap) - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x19",
    answer: "Battle Mode - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x20",
    answer: "Super Star - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x21",
    answer: "Race Results (Mario) - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x22",
    answer: "Race Results (Luigi) - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x23",
    answer: "Race Results (Princess) - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x24",
    answer: "Race Results (Yoshi) - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x25",
    answer: "Race Results (Bowser) - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x26",
    answer: "Race Results (Donkey Kong Jr.) - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x27",
    answer: "Race Results (Koopa Troopa) - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x28",
    answer: "Race Results (Toad) - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x29",
    answer: "Awards Ceremony (1st – 3rd Place) - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x30",
    answer: "Awards Ceremony (4th – 8th Place) - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/034x31",
    answer: "Staff Credits - Super Mario Kart",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x01",
    answer: "The Beginning - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x02",
    answer: "Transported - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x03",
    answer: "Professor Laventon - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x04",
    answer: "A Meeting in Hisui - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x05",
    answer: "Jubilife Village - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x06",
    answer: "Galaxy Hall - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x07",
    answer: "Battle! (People of Hisui) - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x08",
    answer: "Obsidian Fieldlands 1–1 - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x09",
    answer: "A Prelude to Battle - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x10",
    answer: "A Prelude to Battle 2 - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x11",
    answer: "A Prelude to Battle 3 - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x12",
    answer: "Battle! (Wild Pokémon) - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x13",
    answer: "Survey Report (Day) - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x14",
    answer: "Obsidian Fieldlands 2–1 - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x15",
    answer: "A Prelude to Battle (Alpha Pokémon) - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x16",
    answer: "Battle! (Alpha Pokémon) - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x17",
    answer: "An Audience - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x18",
    answer: "A Tense Situation - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x19",
    answer: "Heartwood - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x20",
    answer: "Evolution - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x22",
    answer: "Kleavor, Lord of the Woods - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x23",
    answer: "Battle! (Noble Pokémon) - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x24",
    answer: "Resolution - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x25",
    answer: "Case Closed - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x26",
    answer: "Target Practice - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x27",
    answer: "Crimson Mirelands 1–1 - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x28",
    answer: "Distortion - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x29",
    answer: "Settlement - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x30",
    answer: "Crimson Mirelands 2–1 - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x31",
    answer: "Lilligant, Lady of the Ridge - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x33",
    answer: "Cobalt Coastlands 1–1 - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x34",
    answer: "The Sound of the Flute - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x35",
    answer: "Feelings - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x36",
    answer: "Night - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x37",
    answer: "Survey Report (Night) - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x38",
    answer: "Cobalt Coastlands 2–1 - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x39",
    answer: "Firespit Island - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x40",
    answer: "Courage - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x41",
    answer: "Strength - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x42",
    answer: "Coronet Highlands - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x43",
    answer: "Wayward Cave - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x44",
    answer: "Battle! (People of Hisui 2) - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x45",
    answer: "Electrode, Lord of the Hollow - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x46",
    answer: "Alabaster Icelands 1–1 - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x47",
    answer: "Deep in the Night - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x48",
    answer: "Dawn - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x49",
    answer: "Alabaster Icelands 2–1 - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x50",
    answer: "Snowpoint Temple - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x51",
    answer: "Avalugg, Lord of the Tundra - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x52",
    answer: "Suspicion - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x53",
    answer: "Exiled - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x54",
    answer: "Disaster Looming - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x55",
    answer: "Battling during a Disaster (Prelude) - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x56",
    answer: "Battling during a Disaster (Alpha Prelude) - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x57",
    answer: "Battling during a Disaster (Pokémon) - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x58",
    answer: "Ancient Retreat - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x59",
    answer: "Cave in the Lake - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x60",
    answer: "Stone Portal - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x61",
    answer: "Temple of Sinnoh - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x62",
    answer: "The Arrival of Dialga/Palkia - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x63",
    answer: "Battle! (Dialga/Palkia) - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x64",
    answer: "The Other Almighty Sinnoh - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x65",
    answer: "Temporary Retreat - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x66",
    answer: "Origin - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x67",
    answer: "Battle! (Origin Forme Dialga/Palkia) - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x68",
    answer: "Finale - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x69",
    answer: "Ending Theme - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x71",
    answer: "Mystery Gift - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x73",
    answer: "Obsidian Fieldlands 2–2 - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x76",
    answer: "Cobalt Coastlands 1–2 - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x78",
    answer: "Alabaster Icelands 1–2 - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x80",
    answer: "The Clefairy’s Moonlit Dance - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x81",
    answer: "The Lakes - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x82",
    answer: "Battle! (Azelf/Mesprit/Uxie) - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x83",
    answer: "Battle! (Remarkable Pokémon) - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x84",
    answer: "Volo’s Goal - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x85",
    answer: "Battle! (Volo) - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x86",
    answer: "Giratina Appears - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x87",
    answer: "Battle! (Giratina) - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x88",
    answer: "Azure Flute - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x90",
    answer: "Battle! (Arceus) - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x91",
    answer: "Battle! (Arceus 2) - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x92",
    answer: "Battle! (Arceus 3) - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x93",
    answer: "Battle! (Arceus 4) - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/035x94",
    answer: "Title Screen - Pokémon Legends: Arceus",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x01",
    answer: "Title BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x02",
    answer: "Yoshi's Island (Map Screen) - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x03",
    answer: "Ground BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x04",
    answer: "'Hurry Up!' Ground BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x05",
    answer: "Yoshi Ground BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x06",
    answer: "'Hurry Up!' Yoshi Ground BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x07",
    answer: "P Switch BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x09",
    answer: "Donut Plains (Map Screen) - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x10",
    answer: "Athletic BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x11",
    answer: "'Hurry Up!' Athletic BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x12",
    answer: "Yoshi Athletic BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x13",
    answer: "'Hurry Up!' Yoshi Athletic BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x14",
    answer: "Invincibility BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x15",
    answer: "'Hurry Up!' Invincibility BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x16",
    answer: "Bonus Game BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x17",
    answer: "Vanilla Dome (Map Screen) - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x18",
    answer: "Underground BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x19",
    answer: "'Hurry Up!' Underground BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x20",
    answer: "Yoshi Underground BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x21",
    answer: "'Hurry Up!' Yoshi Underground BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x22",
    answer: "Underwater BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x23",
    answer: "'Hurry Up!' Underwater BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x24",
    answer: "Yoshi Underwater BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x25",
    answer: "'Hurry Up!' Yoshi Underwater BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x26",
    answer: "Forest of Illusion (Map Screen) - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x27",
    answer: "Ghost House BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x28",
    answer: "'Hurry Up!' Ghost House BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x29",
    answer: "Castle BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x30",
    answer: "'Hurry Up!' Castle BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x31",
    answer: "Koopalings BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x32",
    answer: "'Hurry Up!' Koopalings BGM - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x33",
    answer: "Valley of Bowser (Map Screen) - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x34",
    answer: "Bowser BGM (Phase 1) - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x35",
    answer: "Bowser BGM (Phase 2) - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x36",
    answer: "Bowser BGM (Phase 3) - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x37",
    answer: "Ending - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x38",
    answer: "Star World (Map Screen) - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/036x39",
    answer: "Special World (Map Screen) - Super Mario World",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x01",
    answer: "Main Theme (Title) - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x02",
    answer: "Setting Off - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x03",
    answer: "Dungeon Theme - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x04",
    answer: "Chance Meeting with Sworn Enemies - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x05",
    answer: "Defeated... - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x06",
    answer: "The Passage of Time - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x07",
    answer: "Village Theme - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x08",
    answer: "Sol Sanctum - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x09",
    answer: "Elemental Stars - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x10",
    answer: "Mount Aleph Erupts - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x11",
    answer: "A Long Journey - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x12",
    answer: "Battle - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x13",
    answer: "Victory! - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x14",
    answer: "Wind Adepts - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x15",
    answer: "Cave Theme - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x16",
    answer: "Palace Theme - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x17",
    answer: "An Unsettling Feeling - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x18",
    answer: "Forest Theme - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x19",
    answer: "Sinking into Sorrow - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x20",
    answer: "Battling a Powerful Foe - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x21",
    answer: "Remote Village - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x22",
    answer: "Mercury Lighthouse - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x23",
    answer: "Sworn Enemies Stand in Your Way - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x24",
    answer: "Town Theme - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x25",
    answer: "Temple Theme - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x26",
    answer: "Desert Theme - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x27",
    answer: "Port-Town Theme - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x28",
    answer: "Set Sail on the Karagol Sea - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x29",
    answer: "Tolbi - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x30",
    answer: "Try Your Luck! - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x31",
    answer: "Labyrinth Theme - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x32",
    answer: "Babi's Theme - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x33",
    answer: "Colosseum - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x34",
    answer: "Colosseum Finals - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x35",
    answer: "Trial Road - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x36",
    answer: "Test Your Skills - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x37",
    answer: "Babi Lighthouse - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x38",
    answer: "Venus Lighthouse - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x39",
    answer: "Battle with Saturos & Menardi - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x40",
    answer: "Battle with the Fusion Dragon - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/037x41",
    answer: "Felix's Resolve - Golden Sun",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x01",
    answer: "Entrance (StreetPass Mii Plaza) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x02",
    answer: "Main Theme 1 (StreetPass Mii Plaza) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x03",
    answer: "Main Theme 2 (StreetPass Mii Plaza) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x04",
    answer: "Main Theme 3 (StreetPass Mii Plaza) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x05",
    answer: "Main Theme 4 (StreetPass Mii Plaza) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x06",
    answer: "Main Theme 5 (StreetPass Mii Plaza) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x07",
    answer: "Main Theme 6 (StreetPass Mii Plaza) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x08",
    answer: "Main Theme 7 (StreetPass Mii Plaza) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x09",
    answer: "Salesbunny (StreetPass Mii Plaza) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x10",
    answer: "StreetPass Birthdays (StreetPass Mii Plaza) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x11",
    answer: "VIP Room (StreetPass Mii Plaza) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x12",
    answer: "Title (Puzzle Swap) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x13",
    answer: "Collected Pieces (Puzzle Swap) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x14",
    answer: "Title (Find Mii) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x15",
    answer: "Palace Theme (Find Mii) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x16",
    answer: "Kidnapped! (Find Mii) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x17",
    answer: "Captive Mii (Find Mii) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x18",
    answer: "Venture Forth (Find Mii) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x19",
    answer: "To Battle, Heroes! (Find Mii) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x20",
    answer: "Current Results (Find Mii) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x21",
    answer: "Fight On, Heroes! (Find Mii) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x22",
    answer: "Dark Room (Find Mii) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x23",
    answer: "Armored Fiend (Find Mii) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x24",
    answer: "Ultimate Ghost (Find Mii) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x25",
    answer: "Ending (Find Mii) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x26",
    answer: "Title (Find Mii II) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x27",
    answer: "Venture Forth 1 (Find Mii II) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x28",
    answer: "Venture Forth 2 (Find Mii II) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x29",
    answer: "Venture Forth 3 (Find Mii II) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x30",
    answer: "Venture Forth 4 (Find Mii II) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x31",
    answer: "Keep Fighting, Heroes! (Find Mii II) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x32",
    answer: "Current Results (Find Mii II) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x33",
    answer: "Save the World, Heroes! (Find Mii II) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x34",
    answer: "Armored Archfiend (Find Mii II) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x35",
    answer: "Dark Lord (Find Mii II) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/038x36",
    answer: "Ending (Find Mii II) - StreetPass Mii Plaza",
    },
    {
    url: "https://soundcloud.com/goldchimera/039x01",
    answer: "Title BGM - Super Mario Bros. 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/039x02",
    answer: "Please Select Player - Super Mario Bros. 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/039x03",
    answer: "Ground BGM - Super Mario Bros. 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/039x04",
    answer: "Underground BGM - Super Mario Bros. 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/039x05",
    answer: "Sub-Space BGM - Super Mario Bros. 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/039x06",
    answer: "Boss BGM - Super Mario Bros. 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/039x07",
    answer: "Invincibility BGM - Super Mario Bros. 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/039x08",
    answer: "Final Boss BGM - Super Mario Bros. 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/039x09",
    answer: "Ending - Super Mario Bros. 2",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x01",
    answer: "Title Theme - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x03",
    answer: "Player Select - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x04",
    answer: "Rainy Night - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x05",
    answer: "Hyrule Castle - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x06",
    answer: "Princess Zelda, Rescued - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x07",
    answer: "Sanctuary - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x08",
    answer: "Light World - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x09",
    answer: "Kakariko Village - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x10",
    answer: "Kakariko Soldiers - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x11",
    answer: "Minigames - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x12",
    answer: "Cave Interior - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x13",
    answer: "Fortune Teller's House - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x15",
    answer: "Light World Dungeon - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x16",
    answer: "Boss Theme - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x17",
    answer: "Rabbit Theme - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x18",
    answer: "Lost Woods - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x19",
    answer: "Agahnim's Theme - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x20",
    answer: "Dark World - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x21",
    answer: "Dark World Dungeon - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x22",
    answer: "The Crystals - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x23",
    answer: "Mountains and Forests of the Dark World - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x25",
    answer: "Ganon Battle - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x26",
    answer: "Triforce Room - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/040x27",
    answer: "Ending Theme - The Legend of Zelda: A Link to the Past",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x01",
    answer: "World 1 Map (Grass Land) - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x02",
    answer: "Ground BGM - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x03",
    answer: "'Hurry Up!' Ground BGM - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x04",
    answer: "World 2 Map (Desert Land) - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x05",
    answer: "Athletic BGM - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x06",
    answer: "'Hurry Up!' Athletic BGM - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x07",
    answer: "Slot Game BGM / Memory Game BGM - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x08",
    answer: "P Switch BGM / Toad's House - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x09",
    answer: "'Hurry Up!' P Switch BGM - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x10",
    answer: "World 3 Map (Water Land) - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x11",
    answer: "Underwater BGM - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x12",
    answer: "'Hurry Up!' Underwater BGM - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x13",
    answer: "Invincibility BGM - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x14",
    answer: "'Hurry Up!' Invincibility BGM - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x15",
    answer: "World 4 Map (Giant Land) - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x16",
    answer: "Underground BGM - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x17",
    answer: "'Hurry Up!' Underground BGM - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x18",
    answer: "Music Box - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x19",
    answer: "World 5 Map (Sky Land) - On the Ground - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x20",
    answer: "World 5 Map (Sky Land) - In the Sky - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x21",
    answer: "Bros. Battle - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x22",
    answer: "'Hurry Up!' Bros. Battle - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x23",
    answer: "World 6 Map (Ice Land) - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x24",
    answer: "Fortress BGM - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x25",
    answer: "'Hurry Up!' Fortress BGM - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x26",
    answer: "Fortress Boss - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x27",
    answer: "'Hurry Up!' Fortress Boss - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x28",
    answer: "World 7 Map (Pipe Land) - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x29",
    answer: "Throne Room - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x30",
    answer: "Airship BGM - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x32",
    answer: "World 8 Map (Dark Land) - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x33",
    answer: "King of the Koopas - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x34",
    answer: "'Hurry Up!' King of the Koopas - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/041x35",
    answer: "Ending - Super Mario Bros. 3",
    },
    {
    url: "https://soundcloud.com/goldchimera/042x01",
    answer: "MUSIC-1 - Tetris (NES)",
    },
    {
    url: "https://soundcloud.com/goldchimera/042x02",
    answer: "MUSIC-1: Danger - Tetris (NES)",
    },
    {
    url: "https://soundcloud.com/goldchimera/042x03",
    answer: "MUSIC-2 - Tetris (NES)",
    },
    {
    url: "https://soundcloud.com/goldchimera/042x04",
    answer: "MUSIC-2: Danger - Tetris (NES)",
    },
    {
    url: "https://soundcloud.com/goldchimera/042x05",
    answer: "MUSIC-3 - Tetris (NES)",
    },
    {
    url: "https://soundcloud.com/goldchimera/042x06",
    answer: "MUSIC-3: Danger - Tetris (NES)",
    },
    {
    url: "https://soundcloud.com/goldchimera/042x07",
    answer: "Ending - Tetris (NES)",
    },
    {
    url: "https://soundcloud.com/goldchimera/042x08",
    answer: "Name Entry - Tetris (NES)",
    },
    {
    url: "https://soundcloud.com/goldchimera/043x01",
    answer: "Title Screen - Dr. Mario (NES)",
    },
    {
    url: "https://soundcloud.com/goldchimera/043x02",
    answer: "Selection Screen - Dr. Mario (NES)",
    },
    {
    url: "https://soundcloud.com/goldchimera/043x03",
    answer: "Fever - Dr. Mario (NES)",
    },
    {
    url: "https://soundcloud.com/goldchimera/043x04",
    answer: "Fever Clear - Dr. Mario (NES)",
    },
    {
    url: "https://soundcloud.com/goldchimera/043x05",
    answer: "Chill - Dr. Mario (NES)",
    },
    {
    url: "https://soundcloud.com/goldchimera/043x06",
    answer: "Chill Clear - Dr. Mario (NES)",
    },
    {
    url: "https://soundcloud.com/goldchimera/043x07",
    answer: "Game Over - Dr. Mario (NES)",
    },
    {
    url: "https://soundcloud.com/goldchimera/043x08",
    answer: "Vs. Game Over - Dr. Mario (NES)",
    },
    {
    url: "https://soundcloud.com/goldchimera/043x09",
    answer: "Level 20 Low Clear & Ending - Dr. Mario (NES)",
    },
    {
    url: "https://soundcloud.com/goldchimera/043x10",
    answer: "Level 20 Hi Clear (UFO) & Ending - Dr. Mario (NES)",
    },
    {
    url: "https://soundcloud.com/goldchimera/044x01",
    answer: "Title Screen - Tetris (Game Boy)",
    },
    {
    url: "https://soundcloud.com/goldchimera/044x02",
    answer: "A-Type (Early Version) - Tetris (Game Boy)",
    },
    {
    url: "https://soundcloud.com/goldchimera/044x03",
    answer: "A-Type - Tetris (Game Boy)",
    },
    {
    url: "https://soundcloud.com/goldchimera/044x04",
    answer: "B-Type - Tetris (Game Boy)",
    },
    {
    url: "https://soundcloud.com/goldchimera/044x05",
    answer: "C-Type - Tetris (Game Boy)",
    },
    {
    url: "https://soundcloud.com/goldchimera/044x06",
    answer: "Rocket Launch - Tetris (Game Boy)",
    },
    {
    url: "https://soundcloud.com/goldchimera/044x07",
    answer: "Name Entry - Tetris (Game Boy)",
    },
    {
    url: "https://soundcloud.com/goldchimera/044x08",
    answer: "2 Player: Danger - Tetris (Game Boy)",
    },
    {
    url: "https://soundcloud.com/goldchimera/044x09",
    answer: "2 Player: Final Results - Tetris (Game Boy)",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x01",
    answer: "Ready to Go! - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x02",
    answer: "Running Through the New World - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x03",
    answer: "Waddle Dee Town - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x04",
    answer: "A Trip to Alivel Mall - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x05",
    answer: "VS. Dangerous Beast - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x06",
    answer: "Abandoned Beach - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x07",
    answer: "Lunch Rush! A Wave of Waddles - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x08",
    answer: "Welcome to Wondaria - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x09",
    answer: "Northeast Frost Street - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x10",
    answer: "Roar of Dedede - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x11",
    answer: "Moonlight Canyon - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x12",
    answer: "Waddle Dee's Weapons Shop - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x13",
    answer: "Sword of the Surviving Guardian - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x14",
    answer: "Enter the Fiery Forbidden Lands - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x15",
    answer: "Burning, Churning Power Plant - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x16",
    answer: "Masked and Wild: D.D.D. - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x17",
    answer: "The Dream Discoveries Tour (Guide Off) - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x18",
    answer: "The Raging Lion Roars - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x19",
    answer: "Elfilin - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x20",
    answer: "Two Planets Approach the Roche Limit - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x21",
    answer: "A Full-Speed Farewell from the New World - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x22",
    answer: "Soaring Determination: No Night is Eternal - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/045x23",
    answer: "Welcome to the New World! (Full) - Kirby and the Forgotten Land",
    },
    {
    url: "https://soundcloud.com/goldchimera/046x01",
    answer: "Opening - F-ZERO",
    },
    {
    url: "https://soundcloud.com/goldchimera/046x02",
    answer: "Mute City - F-ZERO",
    },
    {
    url: "https://soundcloud.com/goldchimera/046x03",
    answer: "Big Blue - F-ZERO",
    },
    {
    url: "https://soundcloud.com/goldchimera/046x04",
    answer: "Sand Ocean - F-ZERO",
    },
    {
    url: "https://soundcloud.com/goldchimera/046x05",
    answer: "Death Wind - F-ZERO",
    },
    {
    url: "https://soundcloud.com/goldchimera/046x06",
    answer: "Silence - F-ZERO",
    },
    {
    url: "https://soundcloud.com/goldchimera/046x07",
    answer: "Port Town - F-ZERO",
    },
    {
    url: "https://soundcloud.com/goldchimera/046x08",
    answer: "Red Canyon - F-ZERO",
    },
    {
    url: "https://soundcloud.com/goldchimera/046x09",
    answer: "White Land I - F-ZERO",
    },
    {
    url: "https://soundcloud.com/goldchimera/046x10",
    answer: "White Land II - F-ZERO",
    },
    {
    url: "https://soundcloud.com/goldchimera/046x11",
    answer: "Fire Field - F-ZERO",
    },
    {
    url: "https://soundcloud.com/goldchimera/046x12",
    answer: "Results - F-ZERO",
    },
    {
    url: "https://soundcloud.com/goldchimera/046x13",
    answer: "Ending - F-ZERO",
    },
    {
    url: "https://soundcloud.com/goldchimera/026x17",
    answer: "Regeneration - F-Zero X",
    },
    {
    url: "https://soundcloud.com/goldchimera/026x18",
    answer: "Roller Coaster - F-Zero X",
    },
    {
    url: "https://soundcloud.com/goldchimera/026x19",
    answer: "Big Foot - F-Zero X",
    },
    {
    url: "https://soundcloud.com/goldchimera/026x20",
    answer: "Japon - F-Zero X",
    },
    {
    url: "https://soundcloud.com/goldchimera/026x21",
    answer: "Rainbow Road - F-Zero X",
    },
    {
    url: "https://soundcloud.com/goldchimera/026x22",
    answer: "Mr. EAD Ending - F-Zero X",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x01",
    answer: "Title Theme - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x02",
    answer: "File Select - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x03",
    answer: "Opening Scene - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x04",
    answer: "Signs of Ghosts - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x05",
    answer: "Professor E. Gadd and the Poltergust 3000 - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x06",
    answer: "Professor E. Gadd's Lab - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x07",
    answer: "Training Room: First Half - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x08",
    answer: "Training Room: Second Half - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x09",
    answer: "Training Room: Results - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x10",
    answer: "Gallery - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x11",
    answer: "To the Mansion - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x12",
    answer: "There, There, Toad - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x13",
    answer: "Title Theme (Humming) - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x14",
    answer: "When the Candles Go Out - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x15",
    answer: "Suck Up the Ghosts! - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x16",
    answer: "Suck Up More Ghosts! - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x17",
    answer: "Game Boy Horror Ringtone - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x18",
    answer: "Chatting with Professor E. Gadd - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x19",
    answer: "Chauncey in the Nursery - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x20",
    answer: "Versus a Strong Enemy - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x21",
    answer: "Playing with Chauncey - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x22",
    answer: "Boss Ghost: Chauncey - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x23",
    answer: "A Little Breather - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x24",
    answer: "Ghost Portrificationizer - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x25",
    answer: "Starting Up the Ghost Portrificationizer - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x26",
    answer: "Ghosts You've Caught - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x27",
    answer: "Ghost Guys in the Ballroom - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x28",
    answer: "The Floating Whirlindas in the Ballroom - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x29",
    answer: "Boo Escape - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x30",
    answer: "Suck Up the Boo! - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x31",
    answer: "Chatting with a Ghost - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x32",
    answer: "Conservatory Instruments (Ground BGM) - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x33",
    answer: "Cleaning the Conservatory - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x34",
    answer: "Bogmire in the Graveyard - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x35",
    answer: "Boss Ghost: Bogmire - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x36",
    answer: "Mario in a Portrait - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x37",
    answer: "A Star Appears - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x38",
    answer: "Hide-and-Seek in The Twins' Room - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x39",
    answer: "Boos on the Balcony - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x40",
    answer: "Boss Ghost: Boolossus - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x41",
    answer: "Sue Pea in the Guest Room - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x42",
    answer: "Not Enough Boos 1 - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x43",
    answer: "Not Enough Boos 2 - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x44",
    answer: "King Boo in the Secret Altar - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x45",
    answer: "Into Bowser's Portrait - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x46",
    answer: "Boss Ghost: King Boo - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x47",
    answer: "Restoring Mario's Portrait - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x48",
    answer: "The Brothers Reunited - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/047x49",
    answer: "Staff Credits - Luigi's Mansion",
    },
    {
    url: "https://soundcloud.com/goldchimera/048x01",
    answer: "Title Theme - The Legend of Zelda",
    },
    {
    url: "https://soundcloud.com/goldchimera/048x02",
    answer: "Overworld Theme - The Legend of Zelda",
    },
    {
    url: "https://soundcloud.com/goldchimera/048x03",
    answer: "Underworld Theme - The Legend of Zelda",
    },
    {
    url: "https://soundcloud.com/goldchimera/048x05",
    answer: "Death Mountain Theme - The Legend of Zelda",
    },
    {
    url: "https://soundcloud.com/goldchimera/048x06",
    answer: "Ending Theme - The Legend of Zelda",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x01",
    answer: "Emblem Engage! - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x02",
    answer: "Emblem Engage! (English) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x03",
    answer: "Engage... - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x04",
    answer: "Fire Emblem Theme - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x05",
    answer: "The Dragon's Dream - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x06",
    answer: "Weary Confrontation - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x07",
    answer: "Weary Confrontation (Gloom) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x08",
    answer: "Garden of Light - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x09",
    answer: "Faraway Holy Land - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x10",
    answer: "Faraway Holy Land (Flare) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x11",
    answer: "Corrupted - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x12",
    answer: "Shine on, Emblem of Beginnings - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x13",
    answer: "Engage - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x14",
    answer: "History of Elyos - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x15",
    answer: "Holy Land of Lythos - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x16",
    answer: "The Twelve Stars - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x17",
    answer: "Trial of Emblems - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x18",
    answer: "Trial of Emblems (Shine On) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x19",
    answer: "Mother and Child Reunited - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x20",
    answer: "Provide for Us, Emblem of the Holy War - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x21",
    answer: "Trial of the Holy War - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x22",
    answer: "Trial of the Holy War (Provide for Us) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x23",
    answer: "A Goddess and Her Puppets - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x24",
    answer: "Memories from Red Days - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x25",
    answer: "Faraway, Eternal Holy Land - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x26",
    answer: "Faraway, Eternal Holy Land (Flare) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x27",
    answer: "Surprise Attack - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x28",
    answer: "Pinky Promise - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x29",
    answer: "Good Morning, Divine One - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x30",
    answer: "Emblems at the Dinner Table - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x31",
    answer: "Bloom in the Breeze - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x32",
    answer: "Bloom in the Breeze (Blossom) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x33",
    answer: "Firene, Kingdom of Abundance - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x34",
    answer: "The Bountiful Prince - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x35",
    answer: "Crisis - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x36",
    answer: "Trial of Echoes - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x37",
    answer: "Trial of Echoes (Care for Us) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x38",
    answer: "A Beacon of Light Awakens - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x39",
    answer: "Preparations - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x40",
    answer: "Spreader of Chaos - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x41",
    answer: "Spreader of Chaos (Frenzy) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x42",
    answer: "Silver-White Heart - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x43",
    answer: "On Day Patrol, Divine One? - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x44",
    answer: "Friendly Chat - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x45",
    answer: "Your Journey - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x46",
    answer: "Scheming - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x47",
    answer: "Full Bloom in the Breeze - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x48",
    answer: "Full Bloom in the Breeze (Blossom) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x49",
    answer: "A Fight for Peace - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x50",
    answer: "Enjoy the Evening, Divine One - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x51",
    answer: "Hiya Papaya! - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x52",
    answer: "Trial of Dawn - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x53",
    answer: "Trial of Dawn (Heal Us) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x54",
    answer: "Another Day of Training? - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x55",
    answer: "A Tea Party in Firene - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x56",
    answer: "Royal Confidence - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x57",
    answer: "Royal Confidence (Might) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x58",
    answer: "Standoff - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x59",
    answer: "Looming Battle - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x60",
    answer: "Brodia, Kingdom of Might - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x61",
    answer: "The Warrior Prince - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x62",
    answer: "Mighty Governance - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x63",
    answer: "Trial of Binding - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x64",
    answer: "Trial of Binding (Rise Up) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x65",
    answer: "Free Us, Emblem of Genealogy - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x66",
    answer: "Trial of Genealogy - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x67",
    answer: "Trial of Genealogy (Free Us) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x68",
    answer: "A Warrior's Pride - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x69",
    answer: "Late-Night Stroll, Divine One? - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x70",
    answer: "Sentimental Moment - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x71",
    answer: "Tranquility - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x72",
    answer: "Clash - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x73",
    answer: "Unshaken Royal Confidence - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x74",
    answer: "Unshaken Royal Confidence (Might) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x75",
    answer: "Weapons Unleashed - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x76",
    answer: "Weapons Unleashed (Struggle) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x77",
    answer: "Keeper of History - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x78",
    answer: "Keeper of History (Frenzy) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x79",
    answer: "Brodians Are Robust Fishers! - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x80",
    answer: "Good Company in Brodia - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x81",
    answer: "Tear Streaked (Ice) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x82",
    answer: "Elusia, Kingdom of Knowledge - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x83",
    answer: "A Contemplative Princess - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x84",
    answer: "Slithering Cold - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x85",
    answer: "Enforcer of Knowledge - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x86",
    answer: "Enforcer of Knowledge (Frenzy) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x87",
    answer: "Final Farewell - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x88",
    answer: "Tragedy - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x89",
    answer: "Stalwart Preparations - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x90",
    answer: "Fell Dragon Sombron - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x91",
    answer: "Black-Silver Devastation - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x92",
    answer: "Chilling Rain - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x93",
    answer: "Broken Bonds - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x94",
    answer: "A Pact for Piety - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x95",
    answer: "Sweep Across, Emblem of Blazing - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x96",
    answer: "Trial of Blazing - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x97",
    answer: "Trial of Blazing (Sweep Across) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x98",
    answer: "Reignite Us, Emblem of Awakening - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x99",
    answer: "Trial of Awakening - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x100",
    answer: "Trial of Awakening (Reignite Us) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x101",
    answer: "Dark Shadows - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x102",
    answer: "A Dragon Who Saves the World - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x103",
    answer: "Illumination - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x104",
    answer: "Try Your Hand at Wyvern Riding? - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x105",
    answer: "Dinner in Elusia - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x106",
    answer: "Bright Sandstorm - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x107",
    answer: "Bright Sandstorm (Fiery) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x108",
    answer: "Desert Rose - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x109",
    answer: "Solm, Queendom of Freedom - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x110",
    answer: "The Free Princess - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x111",
    answer: "Trial of Radiance - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x112",
    answer: "Trial of Radiance (Fight On) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x113",
    answer: "The Sentinels - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x114",
    answer: "Bright, Bold Sandstorm - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x115",
    answer: "Bright, Bold Sandstorm (Fiery) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x116",
    answer: "Tenacity of Freedom - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x117",
    answer: "The Fell Dragon's Hounds - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x118",
    answer: "The Four Hounds - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x119",
    answer: "The Four Hounds (Frenzy) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x120",
    answer: "Trial of the Academy - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x121",
    answer: "Trial of the Academy (Teach Us) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x122",
    answer: "An Everyday Sort of Day - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x123",
    answer: "Trial of Fates - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x124",
    answer: "Trial of Fates (Bare Your Fangs) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x125",
    answer: "Conferring - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x126",
    answer: "Trial of the Sacred - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x127",
    answer: "Trial of the Sacred (Restore Calm) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x128",
    answer: "Camping in Solm - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x129",
    answer: "Determined Journey - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x130",
    answer: "Determined Journey (Flare) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x131",
    answer: "Advancing Sounds of Despair - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x132",
    answer: "The Bell Tolls - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x133",
    answer: "Falling Wings - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x134",
    answer: "Falling Petals - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x135",
    answer: "Dark Gray Feelings - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x136",
    answer: "Death of the Divine Dragon - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x137",
    answer: "The Sixth Land - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x138",
    answer: "Burned Earth of Gradlon - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x139",
    answer: "The Emblems' Miracle - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x140",
    answer: "Trial of the Pact - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x141",
    answer: "Trial of the Pact (Connect Us) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x142",
    answer: "Dreaming of Family - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x143",
    answer: "Two Encounters - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x144",
    answer: "Defective - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x145",
    answer: "Defective (Frenzy) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x146",
    answer: "Hallway of Darkness - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x147",
    answer: "A Thousand Years Alone - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x148",
    answer: "Distorted Flash of Light - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x149",
    answer: "Goddess in Shadow - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x150",
    answer: "Goddess in Shadow (Frenzy) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x151",
    answer: "Thank You...Mother - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x152",
    answer: "When Life Returns - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x153",
    answer: "Extinguished Light - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x154",
    answer: "Last Engage (Prayer-Incantation) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x155",
    answer: "Their Journeys - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x156",
    answer: "Heartfelt Farewell - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x157",
    answer: "Caring - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x158",
    answer: "Heed Our Summons - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x159",
    answer: "Trial of Heroes - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x160",
    answer: "Trial of Heroes (Heed Our Summons) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x161",
    answer: "Dragon's Journey - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x162",
    answer: "Twin Dragons' Hope - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x163",
    answer: "Salvation and Loss - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x164",
    answer: "Salvation and Loss (Rebellion) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x165",
    answer: "Inconstant One - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x166",
    answer: "Inconstant One (Frenzy) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x167",
    answer: "Recollections - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x168",
    answer: "Unfulfilled Dreams - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x169",
    answer: "Awakening from a Brief Slumber - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x170",
    answer: "Mirrored Engage - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x171",
    answer: "Fire Emblem Theme (The Fire Emblem) - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x172",
    answer: "The Journey Is Finally... - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/049x174",
    answer: "Fiery Bonds - Fire Emblem Engage",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x01",
    answer: "Mario Kart 7 Title Screen - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x02",
    answer: "Toad Circuit - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x03",
    answer: "Daisy Hills - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x04",
    answer: "Cheep Cheep Lagoon - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x05",
    answer: "Shy Guy Bazaar - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x06",
    answer: "Wuhu Loop - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x07",
    answer: "Music Park - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x08",
    answer: "Rock Rock Mountain - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x09",
    answer: "Piranha Plant Slide - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x10",
    answer: "Piranha Plant Slide (Underwater) - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x11",
    answer: "Wario Shipyard - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x12",
    answer: "Wario Shipyard (Underwater) - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x13",
    answer: "Neo Bowser City - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x14",
    answer: "DK Jungle - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x15",
    answer: "Rosalina's Ice World - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x16",
    answer: "Bowser's Castle - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x17",
    answer: "Rainbow Road - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x18",
    answer: "Rainbow Road (Lunar Surface) - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x19",
    answer: "Rainbow Road (Final Lap) - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x20",
    answer: "N64 Luigi Raceway - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x21",
    answer: "GBA Bowser Castle 1 - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x22",
    answer: "Wii Mushroom Gorge - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x23",
    answer: "DS Luigi's Mansion - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x24",
    answer: "N64 Koopa Beach - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x25",
    answer: "SNES Mario Circuit 2 - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x26",
    answer: "Wii Coconut Mall - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x27",
    answer: "DS Waluigi Pinball - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x28",
    answer: "N64 Kalimari Desert - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x29",
    answer: "DS DK Pass - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x30",
    answer: "GCN Daisy Cruiser - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x31",
    answer: "Wii Maple Treeway - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x32",
    answer: "Wii Koopa Cape - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x33",
    answer: "Wii Koopa Cape (Underwater) - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x34",
    answer: "GCN Dino Dino Jungle - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x35",
    answer: "DS Airship Fortress - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x36",
    answer: "SNES Rainbow Road - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x37",
    answer: "GBA Battle Course 1 - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x38",
    answer: "N64 Big Donut - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x39",
    answer: "DS Palm Shore - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x40",
    answer: "Honeybee Hive - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x41",
    answer: "Sherbet Rink - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x42",
    answer: "Wuhu Town - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x43",
    answer: "Selection Screen - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x44",
    answer: "Selection Screen (Wireless) - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x45",
    answer: "Selection Screen (Online) - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x46",
    answer: "Spectating - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x47",
    answer: "Mario Kart Channel - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x48",
    answer: "Super Star - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x49",
    answer: "Results Screen A - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x50",
    answer: "Results Screen B - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x51",
    answer: "Victory Lap - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x52",
    answer: "Trophy Theme A - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x53",
    answer: "Trophy Theme B - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x54",
    answer: "Trophy Theme C - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/050x55",
    answer: "Staff Credits - Mario Kart 7",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x01",
    answer: "Title Screen - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x02",
    answer: "Exhibition Match - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x03",
    answer: "Postwick - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x04",
    answer: "Hop’s Theme - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x05",
    answer: "Route 1 - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x06",
    answer: "Wedgehurst - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x07",
    answer: "Let’s Have a Champion Time! - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x08",
    answer: "Battle! (Hop) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x09",
    answer: "Slumbering Weald - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x10",
    answer: "In the Fog - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x11",
    answer: "Pokémon Research Lab - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x12",
    answer: "Sonia’s Theme - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x13",
    answer: "Pokémon Center - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x14",
    answer: "Battle! (Wild Pokémon) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x15",
    answer: "Victory! (Wild Pokémon) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x16",
    answer: "Guide - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x17",
    answer: "At the Train Station - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x18",
    answer: "Wild Area (South) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x19",
    answer: "Battle! (Max Raid Battle) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x20",
    answer: "Victory! (Dynamax Pokémon) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x21",
    answer: "Let’s Make Curry! - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x22",
    answer: "Motostoke - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x23",
    answer: "Boutique - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x24",
    answer: "At the Stadium - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x25",
    answer: "Budew Drop Inn - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x26",
    answer: "An Old Legend - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x27",
    answer: "Team Yell Appears! - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x28",
    answer: "Marnie’s Theme - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x29",
    answer: "Gym Challenge Opening Ceremony - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x30",
    answer: "Chairman Rose - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x31",
    answer: "Route 3 - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x32",
    answer: "Trainers’ Eyes Meet (Trainer) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x33",
    answer: "Battle! (Trainer) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x34",
    answer: "Victory! (Trainer) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x35",
    answer: "Trainers’ Eyes Meet (Lass) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x36",
    answer: "Evolution - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x37",
    answer: "Evolution (Galar) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x38",
    answer: "Galar Mine - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x39",
    answer: "Trainers’ Eyes Meet (Worker) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x40",
    answer: "Bede’s Theme - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x41",
    answer: "Battle! (Bede) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x42",
    answer: "Trainers’ Eyes Meet (Pokémon Breeder) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x43",
    answer: "Turffield - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x44",
    answer: "Gym Mission! - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x45",
    answer: "Trainers’ Eyes Meet (Gym Trainer) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x46",
    answer: "Victory! (Gym Trainer) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x47",
    answer: "Battle! (Gym Leader) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x48",
    answer: "Victory! (Gym Leader) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x49",
    answer: "Hulbury - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x50",
    answer: "Poké Jobs - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x51",
    answer: "Battle! (Marnie) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x52",
    answer: "Wild Area (North) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x53",
    answer: "Rotom Rally - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x54",
    answer: "Hammerlocke - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x55",
    answer: "Hair Salon - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x57",
    answer: "Trainers’ Eyes Meet (Artist) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x58",
    answer: "Stow-on-Side - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x59",
    answer: "The Ancient Mural Crumbles - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x60",
    answer: "The Truth Behind the Mural - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x61",
    answer: "Glimwood Tangle - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x62",
    answer: "Ballonlea - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x63",
    answer: "Circhester - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x64",
    answer: "Spikemuth - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x65",
    answer: "Battle! (Team Yell) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x66",
    answer: "Battle! (Gym Leader: Piers) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x67",
    answer: "Route 10 - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x68",
    answer: "Wyndon - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x69",
    answer: "Wyndon Stadium - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x70",
    answer: "Decisive Battle! (Marnie) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x71",
    answer: "Decisive Battle! (Hop) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x72",
    answer: "Rose Tower - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x73",
    answer: "Reaching the Top - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x74",
    answer: "Battle! (Oleana) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x75",
    answer: "The Finals Begin - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x76",
    answer: "Battle! (Finals) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x77",
    answer: "Victory! (Champion Cup) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x78",
    answer: "The Darkest Day - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x79",
    answer: "Deep in the Forest - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x80",
    answer: "A Bizarre Situation - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x81",
    answer: "Battle! (Rose) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x82",
    answer: "Leon and Eternatus - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x83",
    answer: "Battle! (Eternatus) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x84",
    answer: "Eternal Power - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x85",
    answer: "Decisive Battle! (Eternatus) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x86",
    answer: "You Caught Eternatus! - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x87",
    answer: "Decisive Battle! (Champion Leon) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x88",
    answer: "Victory! (Champion Leon) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x89",
    answer: "For a Bright Future - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x90",
    answer: "Battle Tower - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x91",
    answer: "Battle! (Battle Tower) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x92",
    answer: "Battle! (Zacian/Zamazenta) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x93",
    answer: "Isle of Armor - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x94",
    answer: "Krazy for Klara - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x95",
    answer: "Battle! (Klara) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x96",
    answer: "The Amazing Avery - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x97",
    answer: "Battle! (Avery) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x98",
    answer: "Master Dojo - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x99",
    answer: "Mustard’s Theme - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x100",
    answer: "Battle! (Mustard) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x101",
    answer: "Secret Armor - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x102",
    answer: "Tower of Waters - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x104",
    answer: "Battle! (Serious Mustard) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x105",
    answer: "Victory! (Mustard) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x106",
    answer: "Victory with Kubfu - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x107",
    answer: "Crown Tundra - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x108",
    answer: "Peony’s Theme - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x109",
    answer: "Battle! (Peony) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x110",
    answer: "Max Lair - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x111",
    answer: "Dynamax Adventure - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x112",
    answer: "Battle! (Dynamax Adventure) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x113",
    answer: "Freezington - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x114",
    answer: "The King of Bountiful Harvests - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x115",
    answer: "Battle! (Calyrex) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x116",
    answer: "Battle! (Glastrier/Spectrier) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x117",
    answer: "Crown Shrine - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x119",
    answer: "Battle! (The King of Bountiful Harvests) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x120",
    answer: "Battle! (The Giant of Legend) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x121",
    answer: "Gathering at the Tree - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x122",
    answer: "Battle! (The Bird Pokémon of Legend) - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/051x123",
    answer: "Staff Credits - Pokémon Sword and Pokémon Shield",
    },
    {
    url: "https://soundcloud.com/goldchimera/052x01",
    answer: "Title Theme - Kid Icarus",
    },
    {
    url: "https://soundcloud.com/goldchimera/052x02",
    answer: "Stage 1 - Kid Icarus",
    },
    {
    url: "https://soundcloud.com/goldchimera/052x03",
    answer: "Boss BGM - Kid Icarus",
    },
    {
    url: "https://soundcloud.com/goldchimera/052x04",
    answer: "Stage 2 - Kid Icarus",
    },
    {
    url: "https://soundcloud.com/goldchimera/052x05",
    answer: "Fortress - Kid Icarus",
    },
    {
    url: "https://soundcloud.com/goldchimera/052x06",
    answer: "Stage 3 - Kid Icarus",
    },
    {
    url: "https://soundcloud.com/goldchimera/052x07",
    answer: "Reaper's Theme - Kid Icarus",
    },
    {
    url: "https://soundcloud.com/goldchimera/052x08",
    answer: "Stage 4 - Kid Icarus",
    },
    {
    url: "https://soundcloud.com/goldchimera/052x09",
    answer: "Final Boss BGM - Kid Icarus",
    },
    {
    url: "https://soundcloud.com/goldchimera/052x10",
    answer: "Ending Theme - Kid Icarus",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x01",
    answer: "Splattack! / Squid Squad - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x02",
    answer: "Ink or Sink / Squid Squad - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x03",
    answer: "Seaskape / Squid Squad - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x04",
    answer: "Kraken Up / Squid Squad - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x05",
    answer: "Metalopod / Squid Squad - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x06",
    answer: "Shellfie / Chirpy Chips - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x07",
    answer: "Split & Splat / Chirpy Chips - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x08",
    answer: "Hooked / Hightide Era - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x09",
    answer: "Sucker Punch / Hightide Era - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x10",
    answer: "Now or Never! / Squid Squad - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x11",
    answer: "Battle Victory - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x12",
    answer: "Battle Defeat - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x13",
    answer: "Splattack! (Jam Sesh) / Squid Squad - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x14",
    answer: "Slip into Inkopolis - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x15",
    answer: "Start Fresh - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x16",
    answer: "The Plaza - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x17",
    answer: "Inkopolis News / Squid Sisters - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x18",
    answer: "Inkopolis Lobby - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x19",
    answer: "Dubble Bath / Bob Dub - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x20",
    answer: "Bomb Rush Blush / Callie - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x21",
    answer: "Tide Goes Out / Marie - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x22",
    answer: "Lookin' Fresh / DJ Lee Fish - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x23",
    answer: "Show Yourself - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x24",
    answer: "City of Color / Squid Sisters - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x25",
    answer: "Ink Me Up / Squid Sisters - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x26",
    answer: "Now or Never! / Squid Sisters - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x27",
    answer: "Cap'n Cuttlefish's Theme - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x28",
    answer: "Octo Valley - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x29",
    answer: "Eight-Legged Advance / Turquoise October - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x30",
    answer: "Tentacular Circus / Turquoise October - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x31",
    answer: "Cephaloparade / Turquoise October - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x32",
    answer: "Inkstrike Shuffle / Turquoise October - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x33",
    answer: "Octoling Rendezvous / Turquoise October - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x34",
    answer: "Octoweaponry / Turquoise October - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x35",
    answer: "The Sunken Scrolls - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x36",
    answer: "I Am Octavio / DJ Octavio - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x37",
    answer: "Calamari Inkantation / Squid Sisters - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/053x38",
    answer: "Maritime Memory / Squid Sisters - Splatoon",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x01",
    answer: "Prologue 1 - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x02",
    answer: "The Legend in the Mural - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x03",
    answer: "Prologue 2 - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x04",
    answer: "Memory: The Awakening - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x05",
    answer: "Opening - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x06",
    answer: "Overworld (Skies) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x07",
    answer: "The Temple of Time - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x08",
    answer: "Meeting Rauru, Source of the Right Arm - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x09",
    answer: "Sky Islands - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x10",
    answer: "Shrines of Light - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x11",
    answer: "Rauru's Guidance - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x12",
    answer: "Battle (Overworld) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x13",
    answer: "Parting Ways with Rauru - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x14",
    answer: "You Must Find Me - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x15",
    answer: "Skydiving - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x16",
    answer: "Overworld (Surface, Day) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x17",
    answer: "Lookout Landing - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x18",
    answer: "Reuniting with Purah - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x19",
    answer: "Report on the Depths and Sky - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x20",
    answer: "Hyrule Castle (Surface) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x21",
    answer: "Pull the Switch - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x22",
    answer: "Skyview Tower Launch! - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x23",
    answer: "A Vast World - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x24",
    answer: "Rocky Terrain - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x25",
    answer: "Skydiving (Depths) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x26",
    answer: "Overworld (Depths) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x27",
    answer: "Lightroot - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x29",
    answer: "The Dragon's Tears: Introduction - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x30",
    answer: "Memory: Where Am I? - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x31",
    answer: "Skyview Tower - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x33",
    answer: "Flux Construct Battle - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x36",
    answer: "Memory: An Unfamiliar World - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x37",
    answer: "Gloom Spawn Battle - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x40",
    answer: "The Blood Moon - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x41",
    answer: "Lucky Clover Gazette - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x42",
    answer: "Rito Village (Strange Phenomena) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x43",
    answer: "Reuniting with Tulin - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x45",
    answer: "Tulin and the Stolen Bow - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x46",
    answer: "Incoming Attack - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x47",
    answer: "Off to Investigate the Cloud - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x48",
    answer: "The Thunderhead - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x49",
    answer: "Wind Temple (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x50",
    answer: "Wind Temple (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x51",
    answer: "Wind Temple (Third Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x52",
    answer: "Wind Temple (Fourth Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x53",
    answer: "Wind Temple (Fifth Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x54",
    answer: "Colgera Appears - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x55",
    answer: "Battle with Colgera (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x56",
    answer: "Battle with Colgera (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x58",
    answer: "The Ancient Sage of the Rito Speaks - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x59",
    answer: "What We Must Do - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x60",
    answer: "Our Mission, Duty, and Destiny - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x61",
    answer: "Tulin, Sage of Wind - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x62",
    answer: "The Phenomenon Is Ended - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x68",
    answer: "Gleeok Battle - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x71",
    answer: "Memory: Mineru's Counsel - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x72",
    answer: "Plains - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x73",
    answer: "Goron City (Strange Phenomena) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x74",
    answer: "Reuniting with Yunobo - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x77",
    answer: "YunoboCo HQ - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x78",
    answer: "Battle with Yunobo, Clearly Not Himself - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x79",
    answer: "Yunobo, Back to His Senses - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x80",
    answer: "Following Zelda to Death Mountain - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x81",
    answer: "Moragia Appears - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x82",
    answer: "Battle with Moragia - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x83",
    answer: "Fire Temple (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x84",
    answer: "Fire Temple (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x85",
    answer: "Fire Temple (Third Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x86",
    answer: "Fire Temple (Fourth Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x87",
    answer: "Fire Temple (Fifth Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x88",
    answer: "Marbled Gohma Appears - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x89",
    answer: "Battle with Marbled Gohma (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x90",
    answer: "Battle with Marbled Gohma (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x91",
    answer: "The Ancient Sage of the Gorons Speaks - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x92",
    answer: "Yunobo, Sage of Fire - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x94",
    answer: "Goron City (Night) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x95",
    answer: "Minigame: Mine-Cart Land - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x96",
    answer: "Battle (Overworld - Monster-Control Crew) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x98",
    answer: "Overworld (Surface, Night) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x99",
    answer: "Minigame: Ultra Ball Haul - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x100",
    answer: "Battle (Overworld - Depths/Caves) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x101",
    answer: "Abandoned Mines in the Depths - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x102",
    answer: "Fierce Master Kohga - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x103",
    answer: "Frox Battle - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x106",
    answer: "Shrine of Light: Blessing - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x107",
    answer: "Battle (Overworld - Boss Bokoblin) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x108",
    answer: "Zora's Domain (Strange Phenomena) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x109",
    answer: "Cleaned the Sludge-Covered Statue - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x110",
    answer: "Meeting Yona - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x111",
    answer: "Mipha Court - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x112",
    answer: "Reuniting with Sidon - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x113",
    answer: "Pristine Sanctum - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x114",
    answer: "Battle with Sludge Like - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x116",
    answer: "Sidon's Resolve - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x117",
    answer: "Into the Whirlpool - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x118",
    answer: "Ancient Zora Waterworks - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x119",
    answer: "A Temple Appears in the Zora Skies - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x120",
    answer: "Overworld (Low Gravity) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x121",
    answer: "Water Temple (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x122",
    answer: "Water Temple (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x123",
    answer: "Water Temple (Third Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x124",
    answer: "Water Temple (Fourth Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x125",
    answer: "Mucktorok Appears - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x126",
    answer: "Battle with Mucktorok (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x127",
    answer: "Battle with Mucktorok (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x128",
    answer: "The Ancient Sage of the Zora Speaks - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x129",
    answer: "Sidon, Sage of Water - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x130",
    answer: "The New King and Queen of the Zora - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x132",
    answer: "Zora's Domain (Night) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x133",
    answer: "Minigame: Dive Ceremony - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x134",
    answer: "Shrine of Light, Before the Trial - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x135",
    answer: "Battle (Shrine of Light) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x137",
    answer: "Memory: The Gerudo Assault - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x138",
    answer: "Chatty Master Kohga - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x139",
    answer: "Battle with the Returned Master Kohga - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x142",
    answer: "Memory: A Show of Fealty - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x144",
    answer: "Gerudo Town (Strange Phenomena) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x145",
    answer: "Gerudo Shelter - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x146",
    answer: "Desert Ruins - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x147",
    answer: "Reuniting with Riju - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x148",
    answer: "Defending Kara Kara Bazaar - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x149",
    answer: "After the Battle at Kara Kara Bazaar - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x151",
    answer: "Defending Gerudo Town - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x152",
    answer: "A Massive Gerudo Pyramid Appears - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x153",
    answer: "Queen Gibdo's Arrival - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x154",
    answer: "Battle with Queen Gibdo (First Encounter) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x155",
    answer: "Battle (Temple) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x156",
    answer: "Lightning Temple (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x157",
    answer: "Lightning Temple (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x158",
    answer: "Lightning Temple (Third Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x159",
    answer: "Lightning Temple (Fourth Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x160",
    answer: "Battle with Queen Gibdo (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x161",
    answer: "Battle with Queen Gibdo (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x162",
    answer: "The Ancient Sage of the Gerudo Speaks - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x163",
    answer: "Riju, Sage of Lightning - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x164",
    answer: "Gerudo Town (Day) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x165",
    answer: "Gerudo Town (Night) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x168",
    answer: "Memory: Zelda and Sonia - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x170",
    answer: "Memory: Sonia Is Caught by Treachery - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x171",
    answer: "Signs of Monsters - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x172",
    answer: "Lurelin Village Restoration Feast - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x174",
    answer: "Lurelin Village (Night) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x176",
    answer: "Memory: Birth of the Demon King - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x177",
    answer: "The Blood Moon Rises over Hyrule Castle - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x178",
    answer: "Lookout Landing Shrouded in Darkness - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x179",
    answer: "Hyrule Castle (Skies) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x180",
    answer: "There Is Something Here I Want to Show You - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x181",
    answer: "Battle with Phantom Ganon (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x182",
    answer: "Battle with Phantom Ganon (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x183",
    answer: "You Stand Before Ganondorf - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x184",
    answer: "Memory: The Demon King's Army - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x185",
    answer: "The Five Meet - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x186",
    answer: "Lookout Landing (The Four Sages Gather) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x188",
    answer: "Kakariko Village (Night) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x191",
    answer: "Hateno Village (Night) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x192",
    answer: "The World-Renowned Cece - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x193",
    answer: "Cece Hat - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x194",
    answer: "The Mayoral Election Begins - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x195",
    answer: "The Mayoral Election - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x196",
    answer: "Cece and Reede - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x197",
    answer: "Hateno School - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x198",
    answer: "Hateno Ancient Tech Lab - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x201",
    answer: "Memory: The Sages' Vow - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x203",
    answer: "Memory: A King's Duty - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x204",
    answer: "Thunderhead Isles Appear - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x205",
    answer: "Thunderhead Isles - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x206",
    answer: "Dragonhead Island - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x207",
    answer: "Tobio's Hollow Chasm - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x208",
    answer: "Assemble a Body - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x209",
    answer: "Construct Factory (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x210",
    answer: "Construct Factory (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x211",
    answer: "Construct Factory (Third Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x212",
    answer: "Construct Factory (Fourth Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x213",
    answer: "Restored Construct - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x214",
    answer: "To the Spirit Temple - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x215",
    answer: "Construct Factory (Fifth Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x216",
    answer: "Zonai Storage Platform - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x217",
    answer: "Spirit Temple - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x218",
    answer: "Seized Construct Appears - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x219",
    answer: "Battle with Seized Construct (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x220",
    answer: "Battle with Seized Construct (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x221",
    answer: "Mineru, Sage of Spirit - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x222",
    answer: "What I Must Relate to You Is a Tragedy  - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x223",
    answer: "Memory: The Imprisoning War - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x224",
    answer: "At the End of the Battle - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x225",
    answer: "Memory: Critical Decisions - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x226",
    answer: "Let Us Go Now - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x227",
    answer: "Korok Forest (Strange Phenomena) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x228",
    answer: "Korok Forest Purified - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x229",
    answer: "Memory: The Master Sword's Power - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x231",
    answer: "Korok Forest (Night) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x233",
    answer: "Memory: A Master Sword in Time - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x234",
    answer: "The Dragon's Final Tear - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x236",
    answer: "Memory: Tears of the Dragon - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x237",
    answer: "All the Dragon's Tears - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x238",
    answer: "The Light Dragon - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x239",
    answer: "The Sword Held by the Dragon - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x240",
    answer: "The Master Sword in Reach - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x241",
    answer: "Zelda's Wish Granted - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x242",
    answer: "Memory: Zelda's Wish - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x243",
    answer: "Hyrule Castle Chasm - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x244",
    answer: "Battle (Hyrule Castle Chasm) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x245",
    answer: "Battle (Forgotten Foundation) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x246",
    answer: "Gloom's Lair - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x247",
    answer: "The Sages Assemble - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x248",
    answer: "The Demon King's Army - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x249",
    answer: "Trust the Sages and Go - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x250",
    answer: "Standing Off Against Demon King Ganondorf - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x251",
    answer: "Battle with Ganondorf - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x252",
    answer: "Ganondorf's Secret Stone Unleashed - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x253",
    answer: "Battle with Ganondorf, Second Form (First Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x254",
    answer: "Battle with Ganondorf, Second Form (Second Phase) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x255",
    answer: "Draconified Demon King - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x256",
    answer: "The Demon Dragon and the Light Dragon - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x257",
    answer: "Battle with Demon Dragon - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x258",
    answer: "Demon Dragon Destroyed - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x259",
    answer: "The Miracle - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x260",
    answer: "Reaching for Her Hand - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x261",
    answer: "Oh, Link... I'm Home! - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x262",
    answer: "Staff Credits - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x263",
    answer: "Epilogue - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x264",
    answer: "Link's House - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x266",
    answer: "Koltin - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x267",
    answer: "Satori Under the Cherry Blossoms - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x268",
    answer: "Tarrey Town (Day) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x269",
    answer: "Tarrey Town (Night) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x271",
    answer: "Hudson Construction Site (Day) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x272",
    answer: "Hudson Construction Site (Night) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x273",
    answer: "Riding the Sun Balloon - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x274",
    answer: "Sav'orq, Every-son! - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x275",
    answer: "Mattison's Independence - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x278",
    answer: "The Yiga Clan Hideout - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x279",
    answer: "Minigame: Yiga Training - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x280",
    answer: "Forgotten Temple - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x282",
    answer: "Lomei Labyrinths (Sky) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x283",
    answer: "Lomei Labyrinths (Depths) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x284",
    answer: "On the Glowing Tree - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x285",
    answer: "Serenade to a Great Fairy - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x289",
    answer: "The Ultimate Dish - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x291",
    answer: "Tears of the Kingdom: Main Theme (Reprise) - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x292",
    answer: "E3 2019 Reveal Trailer - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x294",
    answer: "Second Trailer - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/054x295",
    answer: "Third Trailer - The Legend of Zelda: Tears of the Kingdom",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x01",
    answer: "Title Screen - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x02",
    answer: "Opening - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x03",
    answer: "Game Guides - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x04",
    answer: "Board Games: Play 1 - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x05",
    answer: "Board Games: Play 2 - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x06",
    answer: "Board Games: Play 3 - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x07",
    answer: "Board Games: Play 4 - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x08",
    answer: "Board Games: Winner! 1 - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x09",
    answer: "Board Games: Winner! 2 - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x10",
    answer: "Board Games: Too Bad... 1 - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x11",
    answer: "Board Games: Too Bad... 2 - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x12",
    answer: "Board Games: Draw 1 - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x13",
    answer: "Board Games: Draw 2 - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x14",
    answer: "Board Games: Review - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x15",
    answer: "Yacht Dice: Roll - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x16",
    answer: "Yacht Dice: Which Category? - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x17",
    answer: "Yacht Dice: Results - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x18",
    answer: "Four-in-a-Row: Play - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x19",
    answer: "Four-in-a-Row: Winner! - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x20",
    answer: "Four-in-a-Row: Too Bad... - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x21",
    answer: "Four-in-a-Row: Draw - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x22",
    answer: "Japanese Games: Play - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x23",
    answer: "Japanese Games: Winner! - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x24",
    answer: "Japanese Games: Too Bad... - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x25",
    answer: "Japanese Games: Draw - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x26",
    answer: "Dominoes: Deciding Turn Order - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x27",
    answer: "Chess: Play - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x28",
    answer: "Chess: Check - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x29",
    answer: "Chess: Winner! - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x30",
    answer: "Chess: Too Bad... - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x31",
    answer: "Chess: Draw - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x32",
    answer: "Hanafuda: Determining the Dealer - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x33",
    answer: "Hanafuda: Finish - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x34",
    answer: "Riichi Mahjong: Play - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x35",
    answer: "Riichi Mahjong: Results - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x36",
    answer: "Riichi Mahjong: 1st Place - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x37",
    answer: "Riichi Mahjong: 2nd – 4th Place - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x38",
    answer: "Card Games: Play 1 - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x39",
    answer: "Card Games: Play 2 - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x40",
    answer: "Card Games: Play 3 - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x41",
    answer: "Card Games: Round Won - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x42",
    answer: "Card Games: Winner! - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x43",
    answer: "Card Games: Too Bad... - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x44",
    answer: "Card Games: Draw - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x45",
    answer: "President: Revolution - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x46",
    answer: "Speed: Play - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x47",
    answer: "Matching: Play - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x48",
    answer: "War: Play - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x49",
    answer: "Takoyaki: Play - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x50",
    answer: "Pig's Tail: Play - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x51",
    answer: "Golf: Interim Results - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x52",
    answer: "Golf: Final Results - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x53",
    answer: "Sophisticated Games: Play - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x54",
    answer: "Sophisticated Games: Winner! - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x55",
    answer: "Sophisticated Games: Too Bad... - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x56",
    answer: "Sophisticated Games: Draw - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x57",
    answer: "Sports Games: During the Game 1 - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x58",
    answer: "Sports Games: During the Game 2 - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x59",
    answer: "Sports Games: Winner! 1 - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x60",
    answer: "Sports Games: Winner! 2 - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x61",
    answer: "Sports Games: Too Bad... 1 - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x62",
    answer: "Sports Games: Too Bad... 2 - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x63",
    answer: "Sports Games: Draw 1 - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x64",
    answer: "Sports Games: Draw 2 - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x65",
    answer: "Carrom: Cover Challenge - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x66",
    answer: "Variety: Winner! - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x67",
    answer: "Variety: Too Bad... - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x68",
    answer: "Variety: Draw - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x69",
    answer: "Toy Tennis: During the Match - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x70",
    answer: "Toy Tennis: Match Point - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x71",
    answer: "Toy Soccer: During the Match - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x72",
    answer: "Toy Boxing: Play - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x73",
    answer: "Toy Baseball: During the Game - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x74",
    answer: "Toy Baseball: Change! - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x75",
    answer: "Toy Baseball: Home Run - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x76",
    answer: "Slot Cars: Intro - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x77",
    answer: "Slot Cars: Results - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x78",
    answer: "Fishing: Play - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x79",
    answer: "Fishing: Results - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x80",
    answer: "Battle Tanks: Play - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x81",
    answer: "Team Tanks: Stage Select - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x82",
    answer: "6-Ball Puzzle: Play - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x83",
    answer: "Mahjong Solitaire: Stage Select - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x84",
    answer: "Online: Who's Joining? - Clubhouse Games: 51 Worldwide Classics",
    },
    {
    url: "https://soundcloud.com/goldchimera/055x85",
    answer: "Staff Credits - Clubhouse Games: 51 Worldwide Classics",
    },     
  ];
  shuffleMusic();
  var firstLoad = true;

  fetch(zipUrl).then((r) => {
    if (r.ok == false) {
      zipUrl = "";
    }
  });

  const Cn = ue(musicNameList),
    On = {
      subscribe: ue(musicListWithLinks, Pn).subscribe,
    };

  ("use strict");

  function e() {}

  function shuffleMusic() {
    for (let i = musicListWithLinks.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [musicListWithLinks[i], musicListWithLinks[j]] = [
        musicListWithLinks[j],
        musicListWithLinks[i],
      ];
    }
  }

  function nextMusic() {
    currentIndex += 1;
    if (currentIndex >= musicListWithLinks.length) {
      currentIndex = 0;
      shuffleMusic();
      firstLoad = true; // Problem: reset userStats
    }
    document.body.innerHTML = "";
    new (class extends se {
      constructor(e) {
        super(), re(this, e, jn, En, i, {}, null, [-1, -1]);
      }
    })({
      target: document.body,
      props: {},
    });
  }

  function t(e) {
    return e();
  }

  function n() {
    return Object.create(null);
  }

  function r(e) {
    e.forEach(t);
  }

  function s(e) {
    return "function" == typeof e;
  }

  function i(e, t) {
    return e != e
      ? t == t
      : e !== t || (e && "object" == typeof e) || "function" == typeof e;
  }
  let o, a;

  function l(e, t) {
    return o || (o = document.createElement("a")), (o.href = t), e === o.href;
  }

  function u(t, n, r) {
    t.$$.on_destroy.push(
      (function (t, ...n) {
        if (null == t) return e;
        const r = t.subscribe(...n);
        return r.unsubscribe ? () => r.unsubscribe() : r;
      })(n, r)
    );
  }

  function c(e, t, n, r) {
    if (e) {
      const s = d(e, t, n, r);
      return e[0](s);
    }
  }

  function d(e, t, n, r) {
    return e[1] && r
      ? (function (e, t) {
          for (const n in t) e[n] = t[n];
          return e;
        })(n.ctx.slice(), e[1](r(t)))
      : n.ctx;
  }

  function h(e, t, n, r) {
    if (e[2] && r) {
      const s = e[2](r(n));
      if (void 0 === t.dirty) return s;
      if ("object" == typeof s) {
        const e = [],
          n = Math.max(t.dirty.length, s.length);
        for (let r = 0; r < n; r += 1) e[r] = t.dirty[r] | s[r];
        return e;
      }
      return t.dirty | s;
    }
    return t.dirty;
  }

  function f(e, t, n, r, s, i) {
    if (s) {
      const o = d(t, n, r, i);
      e.p(o, s);
    }
  }

  function m(e) {
    if (e.ctx.length > 32) {
      const t = [],
        n = e.ctx.length / 32;
      for (let e = 0; e < n; e++) t[e] = -1;
      return t;
    }
    return -1;
  }

  function p(e, t) {
    e.appendChild(t);
  }

  function g(e, t, n) {
    e.insertBefore(t, n || null);
  }

  function y(e) {
    e.parentNode.removeChild(e);
  }

  function v(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
  }

  function w(e) {
    return document.createElement(e);
  }

  function k(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e);
  }

  function _(e) {
    return document.createTextNode(e);
  }

  function x() {
    return _(" ");
  }

  function b() {
    return _("");
  }

  function S(e, t, n, r) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
  }

  function M(e, t, n) {
    null == n
      ? e.removeAttribute(t)
      : e.getAttribute(t) !== n && e.setAttribute(t, n);
  }

  function $(e, t) {
    (t = "" + t), e.wholeText !== t && (e.data = t);
  }

  function D(e, t) {
    e.value = null == t ? "" : t;
  }

  function T(e, t, n, r) {
    null === n
      ? e.style.removeProperty(t)
      : e.style.setProperty(t, n, r ? "important" : "");
  }

  function Y(e, t, n) {
    e.classList[n ? "add" : "remove"](t);
  }

  function C(e) {
    a = e;
  }

  function O() {
    if (!a) throw new Error("Function called outside component initialization");
    return a;
  }

  function P(e) {
    O().$$.on_mount.push(e);
  }

  function A() {
    const e = O();
    return (t, n) => {
      const r = e.$$.callbacks[t];
      if (r) {
        const s = (function (e, t, n = !1) {
          const r = document.createEvent("CustomEvent");
          return r.initCustomEvent(e, n, !1, t), r;
        })(t, n);
        r.slice().forEach((t) => {
          t.call(e, s);
        });
      }
    };
  }

  function L(e, t) {
    const n = e.$$.callbacks[t.type];
    n && n.slice().forEach((e) => e.call(this, t));
  }
  const N = [],
    H = [],
    I = [],
    W = [],
    R = Promise.resolve();
  let F = !1;

  function G(e) {
    I.push(e);
  }
  const E = new Set();
  let j = 0;

  function B() {
    const e = a;
    do {
      for (; j < N.length; ) {
        const e = N[j];
        j++, C(e), z(e.$$);
      }
      for (C(null), N.length = 0, j = 0; H.length; ) H.pop()();
      for (let e = 0; e < I.length; e += 1) {
        const t = I[e];
        E.has(t) || (E.add(t), t());
      }
      I.length = 0;
    } while (N.length);
    for (; W.length; ) W.pop()();
    (F = !1), E.clear(), C(e);
  }

  function z(e) {
    if (null !== e.fragment) {
      e.update(), r(e.before_update);
      const t = e.dirty;
      (e.dirty = [-1]),
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(G);
    }
  }
  const U = new Set();
  let V;

  function J() {
    V = {
      r: 0,
      c: [],
      p: V,
    };
  }

  function K() {
    V.r || r(V.c), (V = V.p);
  }

  function Z(e, t) {
    e && e.i && (U.delete(e), e.i(t));
  }

  function q(e, t, n, r) {
    if (e && e.o) {
      if (U.has(e)) return;
      U.add(e),
        V.c.push(() => {
          U.delete(e), r && (n && e.d(1), r());
        }),
        e.o(t);
    }
  }
  const X =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof globalThis
      ? globalThis
      : global;

  function Q(e) {
    e && e.c();
  }

  function ee(e, n, i, o) {
    const { fragment: a, on_mount: l, on_destroy: u, after_update: c } = e.$$;
    a && a.m(n, i),
      o ||
        G(() => {
          const n = l.map(t).filter(s);
          u ? u.push(...n) : r(n), (e.$$.on_mount = []);
        }),
      c.forEach(G);
  }

  function te(e, t) {
    const n = e.$$;
    null !== n.fragment &&
      (r(n.on_destroy),
      n.fragment && n.fragment.d(t),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }

  function ne(e, t) {
    -1 === e.$$.dirty[0] &&
      (N.push(e), F || ((F = !0), R.then(B)), e.$$.dirty.fill(0)),
      (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
  }

  function re(t, s, i, o, l, u, c, d = [-1]) {
    const h = a;
    C(t);
    const f = (t.$$ = {
      fragment: null,
      ctx: null,
      props: u,
      update: e,
      not_equal: l,
      bound: n(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(s.context || (h ? h.$$.context : [])),
      callbacks: n(),
      dirty: d,
      skip_bound: !1,
      root: s.target || h.$$.root,
    });
    c && c(f.root);
    let m = !1;
    if (
      ((f.ctx = i
        ? i(t, s.props || {}, (e, n, ...r) => {
            const s = r.length ? r[0] : n;
            return (
              f.ctx &&
                l(f.ctx[e], (f.ctx[e] = s)) &&
                (!f.skip_bound && f.bound[e] && f.bound[e](s), m && ne(t, e)),
              n
            );
          })
        : []),
      f.update(),
      (m = !0),
      r(f.before_update),
      (f.fragment = !!o && o(f.ctx)),
      s.target)
    ) {
      if (s.hydrate) {
        const e = (function (e) {
          return Array.from(e.childNodes);
        })(s.target);
        f.fragment && f.fragment.l(e), e.forEach(y);
      } else f.fragment && f.fragment.c();
      s.intro && Z(t.$$.fragment),
        ee(t, s.target, s.anchor, s.customElement),
        B();
    }
    C(h);
  }
  class se {
    $destroy() {
      te(this, 1), (this.$destroy = e);
    }
    $on(e, t) {
      const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        n.push(t),
        () => {
          const e = n.indexOf(t);
          -1 !== e && n.splice(e, 1);
        }
      );
    }
    $set(e) {
      var t;
      this.$$set &&
        ((t = e), 0 !== Object.keys(t).length) &&
        ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
    }
  }

  function ie(e) {
    let t, n, r, s;
    const i = e[3].default,
      o = c(i, e, e[2], null);
    return {
      c() {
        (t = w("button")),
          o && o.c(),
          M(
            t,
            "class",
            "px-2 py-2 uppercase tracking-widest bg-custom-mg border-none flex items-center font-semibold text-sm svelte-1r54uzk"
          ),
          Y(t, "bg-custom-positive", e[0]),
          Y(t, "bg-custom-mg", e[1]);
      },
      m(i, a) {
        g(i, t, a),
          o && o.m(t, null),
          (n = !0),
          r || ((s = S(t, "click", e[4])), (r = !0));
      },
      p(e, [r]) {
        o &&
          o.p &&
          (!n || 4 & r) &&
          f(o, i, e, e[2], n ? h(i, e[2], r, null) : m(e[2]), null),
          1 & r && Y(t, "bg-custom-positive", e[0]),
          2 & r && Y(t, "bg-custom-mg", e[1]);
      },
      i(e) {
        n || (Z(o, e), (n = !0));
      },
      o(e) {
        q(o, e), (n = !1);
      },
      d(e) {
        e && y(t), o && o.d(e), (r = !1), s();
      },
    };
  }

  function oe(e, t, n) {
    let { $$slots: r = {}, $$scope: s } = t,
      { primary: i = !1 } = t,
      { secondary: o = !1 } = t;
    return (
      (e.$$set = (e) => {
        "primary" in e && n(0, (i = e.primary)),
          "secondary" in e && n(1, (o = e.secondary)),
          "$$scope" in e && n(2, (s = e.$$scope));
      }),
      [
        i,
        o,
        s,
        r,
        function (t) {
          L.call(this, e, t);
        },
      ]
    );
  }
  class ae extends se {
    constructor(e) {
      super(),
        re(this, e, oe, ie, i, {
          primary: 0,
          secondary: 1,
        });
    }
  }
  const le = [];

  function ue(t, n = e) {
    let r;
    const s = new Set();

    function o(e) {
      if (i(t, e) && ((t = e), r)) {
        const e = !le.length;
        for (const e of s) e[1](), le.push(e, t);
        if (e) {
          for (let e = 0; e < le.length; e += 2) le[e][0](le[e + 1]);
          le.length = 0;
        }
      }
    }
    return {
      set: o,
      update: function (e) {
        o(e(t));
      },
      subscribe: function (i, a = e) {
        const l = [i, a];
        return (
          s.add(l),
          1 === s.size && (r = n(o) || e),
          i(t),
          () => {
            s.delete(l), 0 === s.size && (r(), (r = null));
          }
        );
      },
    };
  }
  const ce = ue([]);

  function de() {
    return (
      Boolean(window.dataLayer).valueOf() && Array.isArray(window.dataLayer)
    );
  }

  function he() {
    window.dataLayer.push(arguments);
  }

  function fe(e, t, n) {
    let { properties: r } = t,
      { configurations: s = {} } = t,
      { enabled: i = !0 } = t;

    function o() {
      !(function (e, t, n) {
        let r = e.length;

        function s() {
          (r = --r), r < 1 && n();
        }
        t()
          ? n()
          : e.forEach(
              ({
                type: e,
                url: t,
                options: n = {
                  async: !0,
                  defer: !0,
                },
              }) => {
                const r = "script" === e,
                  i = document.createElement(r ? "script" : "link");
                r
                  ? ((i.src = t), (i.async = n.async), (i.defer = n.defer))
                  : ((i.rel = "stylesheet"), (i.href = t)),
                  (i.onload = s),
                  document.body.appendChild(i);
              }
            );
      })(
        [
          {
            type: "script",
            url: `//www.googletagmanager.com/gtag/js?id=${r[0]}`,
          },
        ],
        de,
        a
      );
    }

    function a() {
      return (
        (window.dataLayer = window.dataLayer || []),
        he("js", new Date()),
        r.forEach((e) => {
          he("config", e, s[e] || {});
        }),
        ce.subscribe((e) => {
          let t = e.length && e.shift();
          for (; t; ) {
            const { event: n, data: r } = t;
            he("event", n, r), (t = e.shift());
          }
        })
      );
    }
    return (
      P(() => {
        i && o();
      }),
      (e.$$set = (e) => {
        "properties" in e && n(0, (r = e.properties)),
          "configurations" in e && n(1, (s = e.configurations)),
          "enabled" in e && n(2, (i = e.enabled));
      }),
      [r, s, i, o]
    );
  }
  class me extends se {
    constructor(e) {
      super(),
        re(this, e, fe, null, i, {
          properties: 0,
          configurations: 1,
          enabled: 2,
          init: 3,
        });
    }
    get init() {
      return this.$$.ctx[3];
    }
  }

  function pe(e, t) {
    t.send_to || delete t.send_to,
      ce.update((n) => [
        ...n,
        {
          event: e,
          data: t,
        },
      ]);
  }

  function ge(e) {
    let t, n, r, s;
    return {
      c() {
        (t = k("svg")),
          (n = k("circle")),
          (r = k("line")),
          (s = k("line")),
          M(n, "cx", "12"),
          M(n, "cy", "12"),
          M(n, "r", "10"),
          M(r, "x1", "12"),
          M(r, "y1", "16"),
          M(r, "x2", "12"),
          M(r, "y2", "12"),
          M(s, "x1", "12"),
          M(s, "y1", "8"),
          M(s, "x2", "12.01"),
          M(s, "y2", "8"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, i) {
        g(e, t, i), p(t, n), p(t, r), p(t, s);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function ye(e) {
    let t, n;
    return {
      c() {
        (t = k("svg")),
          (n = k("path")),
          M(
            n,
            "d",
            "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          ),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, r) {
        g(e, t, r), p(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function ve(e) {
    let t, n;
    return {
      c() {
        (t = k("svg")),
          (n = k("path")),
          M(
            n,
            "d",
            "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          ),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, r) {
        g(e, t, r), p(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function we(e) {
    let t, n, r, s;
    return {
      c() {
        (t = k("svg")),
          (n = k("circle")),
          (r = k("path")),
          (s = k("line")),
          M(n, "cx", "12"),
          M(n, "cy", "12"),
          M(n, "r", "10"),
          M(r, "d", "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"),
          M(s, "x1", "12"),
          M(s, "y1", "17"),
          M(s, "x2", "12.01"),
          M(s, "y2", "17"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, i) {
        g(e, t, i), p(t, n), p(t, r), p(t, s);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function mListIco(e) {
    let t, r;
    return {
      c() {
        (t = k("svg")),
          (r = k("path")),
          M(
            r,
            "d",
            "M 2.324219 3.484375 C 1.039062 3.484375 0 4.523438 0 5.804688 C 0 7.089844 1.039062 8.128906 2.324219 8.128906 C 3.605469 8.128906 4.644531 7.089844 4.644531 5.804688 C 4.644531 4.523438 3.605469 3.484375 2.324219 3.484375 Z M 2.324219 9.675781 C 1.039062 9.675781 0 10.71875 0 12 C 0 13.28125 1.039062 14.324219 2.324219 14.324219 C 3.605469 14.324219 4.644531 13.28125 4.644531 12 C 4.644531 10.71875 3.605469 9.675781 2.324219 9.675781 Z M 2.324219 15.871094 C 1.039062 15.871094 0 16.910156 0 18.195312 C 0 19.476562 1.039062 20.515625 2.324219 20.515625 C 3.605469 20.515625 4.644531 19.476562 4.644531 18.195312 C 4.644531 16.910156 3.605469 15.871094 2.324219 15.871094 Z M 7.742188 7.355469 L 22.453125 7.355469 C 23.308594 7.355469 24 6.660156 24 5.804688 C 24 4.949219 23.308594 4.257812 22.453125 4.257812 L 7.742188 4.257812 C 6.886719 4.257812 6.195312 4.949219 6.195312 5.804688 C 6.195312 6.660156 6.886719 7.355469 7.742188 7.355469 Z M 22.453125 10.453125 L 7.742188 10.453125 C 6.886719 10.453125 6.195312 11.144531 6.195312 12 C 6.195312 12.855469 6.886719 13.546875 7.742188 13.546875 L 22.453125 13.546875 C 23.308594 13.546875 24 12.855469 24 12 C 24 11.144531 23.308594 10.453125 22.453125 10.453125 Z M 22.453125 16.644531 L 7.742188 16.644531 C 6.886719 16.644531 6.195312 17.339844 6.195312 18.195312 C 6.195312 19.050781 6.886719 19.742188 7.742188 19.742188 L 22.453125 19.742188 C 23.308594 19.742188 24 19.050781 24 18.195312 C 24 17.339844 23.308594 16.644531 22.453125 16.644531 Z M 22.453125 16.644531 "
          ),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "white");
      },
      m(e, i) {
        g(e, t, i), p(t, r);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function ke(e) {
    let t, n, r, s, i, o, a, l, u, c, d, h, f, m, b, ml, v;
    return (
      (i = new ae({
        props: {
          $$slots: {
            default: [ge],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      i.$on("click", e[1]),
      (a = new ae({
        props: {
          $$slots: {
            default: [ye],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      a.$on("click", e[2]),
      (h = new ae({
        props: {
          $$slots: {
            default: [ve],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      h.$on("click", e[3]),
      (m = new ae({
        props: {
          $$slots: {
            default: [we],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      m.$on("click", e[4]),
      (ml = new ae({
        props: {
          $$slots: {
            default: [mListIco],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      ml.$on("click", e[5]),
      {
        c() {
          (t = w("header")),
            (n = w("div")),
            (r = w("div")),
            (s = w("div")),
            Q(i.$$.fragment),
            (o = x()),
            Q(a.$$.fragment),
            (l = x()),
            (u = w("h1")),
            (u.textContent = artist + " Infinite Heardle"),
            (c = x()),
            (d = w("div")),
            Q(h.$$.fragment),
            (f = x()),
            Q(m.$$.fragment),
            (b = x()),
            Q(ml.$$.fragment),
            M(s, "class", "flex flex-1"),
            M(
              u,
              "class",
              "font-serif text-3xl font-bold flex-grow text-center flex-1"
            ),
            M(d, "class", "flex flex-1 justify-end"),
            M(
              r,
              "class",
              "flex justify-evenly text-custom-fgcolor p-3 items-center"
            ),
            M(n, "class", "max-w-screen-md mx-auto "),
            M(t, "class", "border-b border-custom-line");
        },
        m(e, y) {
          g(e, t, y),
            p(t, n),
            p(n, r),
            p(r, s),
            ee(i, s, null),
            p(s, o),
            ee(a, s, null),
            p(r, l),
            p(r, u),
            p(r, c),
            p(r, d),
            ee(h, d, null),
            p(d, f),
            ee(m, d, null),
            p(d, b),
            ee(ml, d, null),
            (v = !0);
        },
        p(e, [t]) {
          const n = {};
          64 & t &&
            (n.$$scope = {
              dirty: t,
              ctx: e,
            }),
            i.$set(n);
          const r = {};
          64 & t &&
            (r.$$scope = {
              dirty: t,
              ctx: e,
            }),
            a.$set(r);
          const s = {};
          64 & t &&
            (s.$$scope = {
              dirty: t,
              ctx: e,
            }),
            h.$set(s);
          const o = {};
          64 & t &&
            (o.$$scope = {
              dirty: t,
              ctx: e,
            }),
            m.$set(o);
          const z = {};
          64 & t &&
            (z.$$scope = {
              dirty: t,
              ctx: e,
            }),
            ml.$set(z);
        },
        i(e) {
          v ||
            (Z(i.$$.fragment, e),
            Z(a.$$.fragment, e),
            Z(h.$$.fragment, e),
            Z(m.$$.fragment, e),
            Z(ml.$$.fragment, e),
            (v = !0));
        },
        o(e) {
          q(i.$$.fragment, e),
            q(a.$$.fragment, e),
            q(h.$$.fragment, e),
            q(m.$$.fragment, e),
            q(ml.$$.fragment, e),
            (v = !1);
        },
        d(e) {
          e && y(t), te(i), te(a), te(h), te(m), te(ml);
        },
      }
    );
  }

  function _e(e) {
    const t = A();

    function n(e, n, r) {
      t("modal", {
        name: e,
        title: n,
        hasFrame: r,
      });
    }
    return [
      n,
      () => {
        n("info", "about"),
          pe("clickInfo", {
            name: "clickInfo",
          });
      },
      () => {
        n("donate", "support"),
          pe("clickDonate", {
            name: "clickDonate",
          });
      },
      () => {
        n("results", "stats"),
          pe("clickStats", {
            name: "clickStats",
          });
      },
      () => {
        n("help", "how to play"),
          pe("clickHelp", {
            name: "clickHelp",
          });
      },
      () => {
        n("music-list", "song list"),
          pe("clickMusicList", {
            name: "clickMusicList",
          });
      },
    ];
  }
  class xe extends se {
    constructor(e) {
      super(), re(this, e, _e, ke, i, {});
    }
  }

  function be(e, t, n) {
    const r = e.slice();
    return (r[5] = t[n]), (r[7] = n), r;
  }

  function Se(e) {
    let t,
      n = Array(e[3]),
      r = [];
    for (let t = 0; t < n.length; t += 1) r[t] = Pe(be(e, n, t));
    return {
      c() {
        t = w("div");
        for (let e = 0; e < r.length; e += 1) r[e].c();
        M(t, "class", "p-3 flex-col items-evenly");
      },
      m(e, n) {
        g(e, t, n);
        for (let e = 0; e < r.length; e += 1) r[e].m(t, null);
      },
      p(e, s) {
        if (9 & s) {
          let i;
          for (n = Array(e[3]), i = 0; i < n.length; i += 1) {
            const o = be(e, n, i);
            r[i] ? r[i].p(o, s) : ((r[i] = Pe(o)), r[i].c(), r[i].m(t, null));
          }
          for (; i < r.length; i += 1) r[i].d(1);
          r.length = n.length;
        }
      },
      d(e) {
        e && y(t), v(r, e);
      },
    };
  }

  function Me(e) {
    let t,
      n,
      r,
      s,
      i,
      o,
      a,
      l,
      u,
      c,
      d,
      h = e[1].img && Ae(e),
      f = e[1].artist && Le(e);
    return {
      c() {
        (t = w("div")),
          (n = w("a")),
          (r = w("div")),
          h && h.c(),
          (s = x()),
          (i = w("div")),
          f && f.c(),
          (o = x()),
          (a = w("div")),
          (a.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="14"><defs><linearGradient id="logo_hover_20" x1="0%" y1="0%" x2="0%" y2="100%" spreadMethod="pad"><stop offset="0%" stop-color="#ff7700" stop-opacity="1"></stop><stop offset="100%" stop-color="#ff3300" stop-opacity="1"></stop></linearGradient></defs><path class="text-custom-fg" fill="currentColor" d="M10.517 3.742c-.323 0-.49.363-.49.582 0 0-.244 3.591-.244 4.641 0 1.602.15 2.621.15 2.621 0 .222.261.401.584.401.321 0 .519-.179.519-.401 0 0 .398-1.038.398-2.639 0-1.837-.153-4.127-.284-4.592-.112-.395-.313-.613-.633-.613zm-1.996.268c-.323 0-.49.363-.49.582 0 0-.244 3.322-.244 4.372 0 1.602.119 2.621.119 2.621 0 .222.26.401.584.401.321 0 .581-.179.581-.401 0 0 .081-1.007.081-2.608 0-1.837-.206-4.386-.206-4.386 0-.218-.104-.581-.425-.581zm-2.021 1.729c-.324 0-.49.362-.49.582 0 0-.272 1.594-.272 2.644 0 1.602.179 2.559.179 2.559 0 .222.229.463.552.463.321 0 .519-.241.519-.463 0 0 .19-.944.19-2.546 0-1.837-.253-2.657-.253-2.657 0-.22-.104-.582-.425-.582zm-2.046-.358c-.323 0-.49.363-.49.582 0 0-.162 1.92-.162 2.97 0 1.602.069 2.496.069 2.496 0 .222.26.557.584.557.321 0 .581-.304.581-.526 0 0 .143-.936.143-2.538 0-1.837-.206-2.96-.206-2.96 0-.218-.198-.581-.519-.581zm-2.169 1.482c-.272 0-.232.218-.232.218v3.982s-.04.335.232.335c.351 0 .716-.832.716-2.348 0-1.245-.436-2.187-.716-2.187zm18.715-.976c-.289 0-.567.042-.832.116-.417-2.266-2.806-3.989-5.263-3.989-1.127 0-2.095.705-2.931 1.316v8.16s0 .484.5.484h8.526c1.655 0 3-1.55 3-3.155 0-1.607-1.346-2.932-3-2.932zm10.17.857c-1.077-.253-1.368-.389-1.368-.815 0-.3.242-.611.97-.611.621 0 1.106.253 1.542.699l.981-.951c-.641-.669-1.417-1.067-2.474-1.067-1.339 0-2.425.757-2.425 1.99 0 1.338.873 1.736 2.124 2.026 1.281.291 1.513.486 1.513.923 0 .514-.379.738-1.184.738-.65 0-1.26-.223-1.736-.777l-.98.873c.514.757 1.504 1.232 2.639 1.232 1.853 0 2.668-.873 2.668-2.163 0-1.477-1.193-1.845-2.27-2.097zm6.803-2.745c-1.853 0-2.949 1.435-2.949 3.502s1.096 3.501 2.949 3.501c1.852 0 2.949-1.434 2.949-3.501s-1.096-3.502-2.949-3.502zm0 5.655c-1.097 0-1.553-.941-1.553-2.153 0-1.213.456-2.153 1.553-2.153 1.096 0 1.551.94 1.551 2.153.001 1.213-.454 2.153-1.551 2.153zm8.939-1.736c0 1.086-.533 1.756-1.396 1.756-.864 0-1.388-.689-1.388-1.775v-3.897h-1.358v3.916c0 1.978 1.106 3.084 2.746 3.084 1.726 0 2.754-1.136 2.754-3.103v-3.897h-1.358v3.916zm8.142-.89l.019 1.485c-.087-.174-.31-.515-.475-.768l-2.703-3.692h-1.362v6.894h1.401v-2.988l-.02-1.484c.088.175.311.514.475.767l2.79 3.705h1.213v-6.894h-1.339v2.975zm5.895-2.923h-2.124v6.791h2.027c1.746 0 3.474-1.01 3.474-3.395 0-2.484-1.437-3.396-3.377-3.396zm-.097 5.472h-.67v-4.152h.719c1.436 0 2.028.688 2.028 2.076 0 1.242-.651 2.076-2.077 2.076zm7.909-4.229c.611 0 1 .271 1.242.737l1.26-.582c-.426-.883-1.202-1.503-2.483-1.503-1.775 0-3.016 1.435-3.016 3.502 0 2.143 1.191 3.501 2.968 3.501 1.232 0 2.047-.572 2.513-1.533l-1.145-.68c-.358.602-.718.864-1.329.864-1.019 0-1.611-.932-1.611-2.153-.001-1.261.583-2.153 1.601-2.153zm5.17-1.192h-1.359v6.791h4.083v-1.338h-2.724v-5.453zm6.396-.157c-1.854 0-2.949 1.435-2.949 3.502s1.095 3.501 2.949 3.501c1.853 0 2.95-1.434 2.95-3.501s-1.097-3.502-2.95-3.502zm0 5.655c-1.097 0-1.553-.941-1.553-2.153 0-1.213.456-2.153 1.553-2.153 1.095 0 1.55.94 1.55 2.153.001 1.213-.454 2.153-1.55 2.153zm8.557-1.736c0 1.086-.532 1.756-1.396 1.756-.864 0-1.388-.689-1.388-1.775v-3.794h-1.358v3.813c0 1.978 1.106 3.084 2.746 3.084 1.726 0 2.755-1.136 2.755-3.103v-3.794h-1.36v3.813zm5.449-3.907h-2.318v6.978h2.211c1.908 0 3.789-1.037 3.789-3.489 0-2.552-1.565-3.489-3.682-3.489zm-.108 5.623h-.729v-4.266h.783c1.565 0 2.21.706 2.21 2.133.001 1.276-.707 2.133-2.264 2.133z"></path></svg>'),
          (l = x()),
          (u = w("div")),
          (u.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"></path></svg>'),
          M(i, "class", "flex-1 mx-3 text-white"),
          M(a, "class", "text-center flex justify-center"),
          M(r, "class", "p-2 flex items-center rounded-sm"),
          Y(r, "bg-custom-positive", e[2].gotCorrect),
          Y(r, "bg-custom-mg", !e[2].gotCorrect),
          M(n, "href", (c = e[1].url)),
          M(
            n,
            "title",
            (d =
              "Listen to " +
              e[1].artist +
              " - " +
              e[1].title +
              " on SoundCloud")
          ),
          M(n, "class", "no-underline"),
          M(t, "class", "p-3 pb-0 flex-col items-evenly");
      },
      m(e, c) {
        g(e, t, c),
          p(t, n),
          p(n, r),
          h && h.m(r, null),
          p(r, s),
          p(r, i),
          f && f.m(i, null),
          p(r, o),
          p(r, a),
          p(r, l),
          p(r, u);
      },
      p(e, t) {
        e[1].img
          ? h
            ? h.p(e, t)
            : ((h = Ae(e)), h.c(), h.m(r, s))
          : h && (h.d(1), (h = null)),
          e[1].artist
            ? f
              ? f.p(e, t)
              : ((f = Le(e)), f.c(), f.m(i, null))
            : f && (f.d(1), (f = null)),
          4 & t && Y(r, "bg-custom-positive", e[2].gotCorrect),
          4 & t && Y(r, "bg-custom-mg", !e[2].gotCorrect),
          2 & t && c !== (c = e[1].url) && M(n, "href", c),
          2 & t &&
            d !==
              (d =
                "Listen to " +
                e[1].artist +
                " - " +
                e[1].title +
                " on SoundCloud") &&
            M(n, "title", d);
      },
      d(e) {
        e && y(t), h && h.d(), f && f.d();
      },
    };
  }

  function $e(t) {
    let n;
    return {
      c() {
        (n = w("div")), M(n, "class", "w-5 h-5");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function De(e) {
    let t, n, r;

    function s(e, t) {
      return e[0][e[7]].isCorrect || e[0][e[7]].isSkipped
        ? e[0][e[7]].isSkipped
          ? Te
          : void 0
        : Ye;
    }
    let i = s(e),
      o = i && i(e);

    function a(e, t) {
      return e[0][e[7]].isSkipped ? Oe : Ce;
    }
    let l = a(e),
      u = l(e);
    return {
      c() {
        (t = w("div")),
          o && o.c(),
          (n = x()),
          (r = w("div")),
          u.c(),
          M(t, "class", "mr-2"),
          M(r, "class", "flex flex-1 justify-between items-center");
      },
      m(e, s) {
        g(e, t, s), o && o.m(t, null), g(e, n, s), g(e, r, s), u.m(r, null);
      },
      p(e, n) {
        i !== (i = s(e)) &&
          (o && o.d(1), (o = i && i(e)), o && (o.c(), o.m(t, null))),
          l === (l = a(e)) && u
            ? u.p(e, n)
            : (u.d(1), (u = l(e)), u && (u.c(), u.m(r, null)));
      },
      d(e) {
        e && y(t), o && o.d(), e && y(n), e && y(r), u.d();
      },
    };
  }

  function Te(e) {
    let t, n;
    return {
      c() {
        (t = k("svg")),
          (n = k("rect")),
          M(n, "x", "3"),
          M(n, "y", "3"),
          M(n, "width", "18"),
          M(n, "height", "18"),
          M(n, "rx", "2"),
          M(n, "ry", "2"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "class", "text-custom-mg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, r) {
        g(e, t, r), p(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Ye(e) {
    let t, n, r;
    return {
      c() {
        (t = k("svg")),
          (n = k("line")),
          (r = k("line")),
          M(n, "x1", "18"),
          M(n, "y1", "6"),
          M(n, "x2", "6"),
          M(n, "y2", "18"),
          M(r, "x1", "6"),
          M(r, "y1", "6"),
          M(r, "x2", "18"),
          M(r, "y2", "18"),
          M(t, "class", "text-custom-negative"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, s) {
        g(e, t, s), p(t, n), p(t, r);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Ce(e) {
    let t,
      n,
      r = e[0][e[7]].answer + "";
    return {
      c() {
        (t = w("div")), (n = _(r)), M(t, "class", "text-white text-sm");
      },
      m(e, r) {
        g(e, t, r), p(t, n);
      },
      p(e, t) {
        1 & t && r !== (r = e[0][e[7]].answer + "") && $(n, r);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Oe(t) {
    let n;
    return {
      c() {
        (n = w("div")),
          (n.textContent = "SKIPPED"),
          M(n, "class", "text-custom-mg tracking-widest font-semibold");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function Pe(e) {
    let t, n;

    function r(e, t) {
      return e[7] < e[0].length ? De : $e;
    }
    let s = r(e),
      i = s(e);
    return {
      c() {
        (t = w("div")),
          i.c(),
          (n = x()),
          M(
            t,
            "class",
            "p-2 mb-2 border border-custom-mg flex items-center last:mb-0"
          ),
          Y(t, "border-custom-line", e[7] == e[0].length);
      },
      m(e, r) {
        g(e, t, r), i.m(t, null), p(t, n);
      },
      p(e, o) {
        s === (s = r(e)) && i
          ? i.p(e, o)
          : (i.d(1), (i = s(e)), i && (i.c(), i.m(t, n))),
          1 & o && Y(t, "border-custom-line", e[7] == e[0].length);
      },
      d(e) {
        e && y(t), i.d();
      },
    };
  }

  function Ae(e) {
    let t, n, r;
    return {
      c() {
        (t = w("img")),
          l(t.src, (n = e[1].img)) || M(t, "src", n),
          M(t, "class", "h-14 w-14 "),
          M(t, "alt", (r = e[1].artist + " - " + e[1].title));
      },
      m(e, n) {
        g(e, t, n);
      },
      p(e, s) {
        2 & s && !l(t.src, (n = e[1].img)) && M(t, "src", n),
          2 & s &&
            r !== (r = e[1].artist + " - " + e[1].title) &&
            M(t, "alt", r);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Le(e) {
    let t,
      n,
      r,
      s,
      i,
      o = e[1].artist + "",
      a = e[1].title + "";
    return {
      c() {
        (t = w("p")),
          (n = _(o)),
          (r = x()),
          (s = w("p")),
          (i = _(a)),
          M(t, "class", ""),
          M(s, "class", "text-sm ");
      },
      m(e, o) {
        g(e, t, o), p(t, n), g(e, r, o), g(e, s, o), p(s, i);
      },
      p(e, t) {
        2 & t && o !== (o = e[1].artist + "") && $(n, o),
          2 & t && a !== (a = e[1].title + "") && $(i, a);
      },
      d(e) {
        e && y(t), e && y(r), e && y(s);
      },
    };
  }

  function Ne(t) {
    let n;

    function r(e, t) {
      return e[2].hasFinished ? Me : Se;
    }
    let s = r(t),
      i = s(t);
    return {
      c() {
        i.c(), (n = b());
      },
      m(e, t) {
        i.m(e, t), g(e, n, t);
      },
      p(e, [t]) {
        s === (s = r(e)) && i
          ? i.p(e, t)
          : (i.d(1), (i = s(e)), i && (i.c(), i.m(n.parentNode, n)));
      },
      i: e,
      o: e,
      d(e) {
        i.d(e), e && y(n);
      },
    };
  }

  function He(e, t, n) {
    let r,
      { userGuesses: s } = t,
      { maxAttempts: i } = t,
      { currentHeardle: o } = t,
      { todaysGame: a } = t;
    return (
      (e.$$set = (e) => {
        "userGuesses" in e && n(0, (s = e.userGuesses)),
          "maxAttempts" in e && n(4, (i = e.maxAttempts)),
          "currentHeardle" in e && n(1, (o = e.currentHeardle)),
          "todaysGame" in e && n(2, (a = e.todaysGame));
      }),
      (e.$$.update = () => {
        21 & e.$$.dirty &&
          n(3, (r = a.hasFinished && a.gotCorrect ? s.length : i));
      }),
      [s, o, a, r, i]
    );
  }
  class Ie extends se {
    constructor(e) {
      super(),
        re(this, e, He, Ne, i, {
          userGuesses: 0,
          maxAttempts: 4,
          currentHeardle: 1,
          todaysGame: 2,
        });
    }
  }

  function We(t) {
    let n, r;
    return {
      c() {
        (n = w("div")),
          (r = w("i")),
          M(r, "class", "gg-loadbar-sound svelte-15swa4o"),
          Y(r, "musicIsPlaying", t[0]),
          M(n, "class", "scale-150 transform relative");
      },
      m(e, t) {
        g(e, n, t), p(n, r);
      },
      p(e, [t]) {
        1 & t && Y(r, "musicIsPlaying", e[0]);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function Re(e, t, n) {
    let { musicIsPlaying: r } = t;
    return (
      (e.$$set = (e) => {
        "musicIsPlaying" in e && n(0, (r = e.musicIsPlaying));
      }),
      [r]
    );
  }
  class Fe extends se {
    constructor(e) {
      super(),
        re(this, e, Re, We, i, {
          musicIsPlaying: 0,
        });
    }
  }

  function Ge(t) {
    let n;
    return {
      c() {
        n = w("div");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }
  class Ee extends se {
    constructor(e) {
      super(), re(this, e, null, Ge, i, {});
    }
  }
  const { document: je } = X;

  function Be(e, t, n) {
    const r = e.slice();
    return (r[33] = t[n]), (r[35] = n), r;
  }

  function ze(e, t, n) {
    const r = e.slice();
    return (r[33] = t[n]), (r[35] = n), r;
  }

  function Ue(e, t, n) {
    const r = e.slice();
    return (r[33] = t[n]), (r[35] = n), r;
  }

  function Ve(e) {
    let t, n, r, s;
    const i = [Ze, Ke],
      o = [];

    function a(e, t) {
      return e[13] ? 0 : 1;
    }
    return (
      (n = a(e)),
      (r = o[n] = i[n](e)),
      {
        c() {
          (t = w("div")),
            r.c(),
            M(t, "class", "text-sm text-center text-custom-line p-6");
        },
        m(e, r) {
          g(e, t, r), o[n].m(t, null), (s = !0);
        },
        p(e, s) {
          let l = n;
          (n = a(e)),
            n === l
              ? o[n].p(e, s)
              : (J(),
                q(o[l], 1, 1, () => {
                  o[l] = null;
                }),
                K(),
                (r = o[n]),
                r ? r.p(e, s) : ((r = o[n] = i[n](e)), r.c()),
                Z(r, 1),
                r.m(t, null));
        },
        i(e) {
          s || (Z(r), (s = !0));
        },
        o(e) {
          q(r), (s = !1);
        },
        d(e) {
          e && y(t), o[n].d();
        },
      }
    );
  }

  function Je(e) {
    let t, n, r, s;
    const i = [Qe, Xe],
      o = [];

    function a(e, t) {
      return e[9] ? 1 : 0;
    }
    return (
      (t = a(e)),
      (n = o[t] = i[t](e)),
      {
        c() {
          n.c(), (r = b());
        },
        m(e, n) {
          o[t].m(e, n), g(e, r, n), (s = !0);
        },
        p(e, s) {
          let l = t;
          (t = a(e)),
            t === l
              ? o[t].p(e, s)
              : (J(),
                q(o[l], 1, 1, () => {
                  o[l] = null;
                }),
                K(),
                (n = o[t]),
                n ? n.p(e, s) : ((n = o[t] = i[t](e)), n.c()),
                Z(n, 1),
                n.m(r.parentNode, r));
        },
        i(e) {
          s || (Z(n), (s = !0));
        },
        o(e) {
          q(n), (s = !1);
        },
        d(e) {
          o[t].d(e), e && y(r);
        },
      }
    );
  }

  function Ke(t) {
    let n, r, s, i;
    return (
      (n = new Ee({})),
      {
        c() {
          Q(n.$$.fragment),
            (r = x()),
            (s = w("p")),
            (s.textContent = "loading player");
        },
        m(e, t) {
          ee(n, e, t), g(e, r, t), g(e, s, t), (i = !0);
        },
        p: e,
        i(e) {
          i || (Z(n.$$.fragment, e), (i = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (i = !1);
        },
        d(e) {
          te(n, e), e && y(r), e && y(s);
        },
      }
    );
  }

  function Ze(e) {
    let t, n, r, s, i;
    return (
      (s = new ae({
        props: {
          $$slots: {
            default: [qe],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      s.$on("click", e[22]),
      {
        c() {
          (t = w("p")),
            (t.textContent =
              "There was an error loading the player. Please reload and try again."),
            (n = x()),
            (r = w("div")),
            Q(s.$$.fragment),
            M(t, "class", "mb-3"),
            M(r, "class", "flex justify-center");
        },
        m(e, o) {
          g(e, t, o), g(e, n, o), g(e, r, o), ee(s, r, null), (i = !0);
        },
        p(e, t) {
          const n = {};
          128 & t[1] &&
            (n.$$scope = {
              dirty: t,
              ctx: e,
            }),
            s.$set(n);
        },
        i(e) {
          i || (Z(s.$$.fragment, e), (i = !0));
        },
        o(e) {
          q(s.$$.fragment, e), (i = !1);
        },
        d(e) {
          e && y(t), e && y(n), e && y(r), te(s);
        },
      }
    );
  }

  function qe(e) {
    let t, n;
    return {
      c() {
        (t = k("svg")),
          (n = k("path")),
          M(n, "d", "M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, r) {
        g(e, t, r), p(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Xe(t) {
    let n,
      r,
      s,
      i,
      o,
      a,
      l,
      u,
      c = t[4].gameIsActive && et(t);
    return {
      c() {
        (n = w("div")),
          (r = w("div")),
          (s = w("div")),
          (i = w("div")),
          (i.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4zM22 9l-6 6M16 9l6 6"></path></svg>'),
          (o = x()),
          (a = w("div")),
          (l = w("p")),
          (l.textContent =
            "This track is unavailable on\n                            SoundCloud in your location"),
          (u = x()),
          c && c.c(),
          M(i, "class", "mr-3"),
          M(l, "class", "text-sm "),
          M(s, "class", "flex items-center"),
          M(r, "class", "p-3 mb-3 bg-custom-mg rounded-sm"),
          M(n, "class", "max-w-screen-sm w-full mx-auto px-3 flex-col");
      },
      m(e, t) {
        g(e, n, t),
          p(n, r),
          p(r, s),
          p(s, i),
          p(s, o),
          p(s, a),
          p(a, l),
          p(a, u),
          c && c.m(a, null);
      },
      p(e, t) {
        e[4].gameIsActive
          ? c
            ? c.p(e, t)
            : ((c = et(e)), c.c(), c.m(a, null))
          : c && (c.d(1), (c = null));
      },
      i: e,
      o: e,
      d(e) {
        e && y(n), c && c.d();
      },
    };
  }

  function Qe(e) {
    let t,
      n,
      r,
      i,
      o,
      a,
      l,
      u,
      c,
      d,
      h,
      f,
      m,
      v,
      k,
      b,
      volumeControl,
      S,
      D,
      Y,
      C,
      O,
      P,
      A = mt(e[11]) + "",
      L =
        mt(
          e[15]
            ? e[4].isPrime
              ? e[8].slice(-1)[0]
              : e[2].maxAttempts * e[2].attemptInterval
            : e[3]
        ) + "",
      N = !e[12] && 1 == e[0] && tt();
    function H(e, t) {
      return e[4].isPrime ? rt : nt;
    }
    let I = H(e),
      W = I(e);
    return (
      (D = new ae({
        props: {
          $$slots: {
            default: [ht],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      D.$on("click", function () {
        s(e[18] ? e[6] : e[5]) && (e[18] ? e[6] : e[5]).apply(this, arguments);
      }),
      {
        c() {
          N && N.c(),
            (t = x()),
            (n = w("div")),
            (r = w("div")),
            (i = w("div")),
            (o = w("div")),
            (a = w("div")),
            (l = x()),
            W.c(),
            (u = x()),
            (c = w("div")),
            (d = w("div")),
            (h = w("div")),
            (f = w("div")),
            (m = w("div")),
            (v = w("div")),
            (k = _(A)),
            (b = x()),
            (volumeDiv = w("div")),
            (volumeIcon = w("button")),
            M(volumeIcon, "style", "margin-right: 15px; border: none;"),
            (volumeSvg = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "svg"
            )),
            M(volumeSvg, "viewBox", "0 0 24 24"),
            M(volumeSvg, "width", "24"),
            M(volumeSvg, "height", "24"),
            (volumeSvg.innerHTML =
              "<path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z' style='fill: white;'></path>"),
            M(volumeSvg, "class", "volume-icon"),
            M(volumeDiv, "class", "item2"),
            M(volumeDiv, "style", "display: flex; align-items: center;"),
            (volumeControl = w("div")),
            M(volumeControl, "class", "volume-control"),
            (S = w("div")),
            Q(D.$$.fragment),
            (Y = x()),
            (C = w("div")),
            (O = _(L)),
            M(a, "class", "h-full absolute bg-custom-positive"),
            T(a, "width", e[10] + "%"),
            M(o, "class", "h-full absolute bg-custom-mg overflow-hidden"),
            T(o, "width", (e[15] ? e[16] : "100") + "%"),
            M(i, "class", "h-3 w-full relative overflow-hidden "),
            M(r, "class", "max-w-screen-sm w-full mx-auto px-3 flex-col"),
            M(n, "class", "border-t border-custom-line"),
            M(m, "class", "flex items-center item1"),
            M(S, "class", "flex justify-center items-center p-1 item3"),
            M(f, "class", "container"),
            M(C, "class", "item4 "),
            M(h, "class", "px-3 "),
            M(d, "class", "max-w-screen-sm w-full mx-auto flex-col"),
            M(c, "class", "border-t border-custom-line");
        },
        m(e, s) {
          N && N.m(e, s),
            g(e, t, s),
            g(e, n, s),
            p(n, r),
            p(r, i),
            p(i, o),
            p(o, a),
            p(i, l),
            W.m(i, null),
            g(e, u, s),
            g(e, c, s),
            p(c, d),
            p(d, h),
            p(h, f),
            p(f, m),
            p(m, v);
          if (!/Mobi/i.test(window.navigator.userAgent)) {
            f.classList.add("with-volume");
            p(f, volumeDiv), p(volumeDiv, volumeIcon), p(volumeIcon, volumeSvg);

            // Create the slider container
            const sliderContainer = document.createElement("div");
            sliderContainer.className = "volume-control";
            p(volumeDiv, sliderContainer);

            // Create the slider
            const slider = document.createElement("div");
            slider.className = "slider";
            slider.setAttribute("role", "slider");
            slider.setAttribute("aria-label", "Volume");
            slider.setAttribute("aria-valuemin", "0");
            slider.setAttribute("aria-valuemax", "100");
            slider.setAttribute("aria-valuenow", "50");
            slider.setAttribute("tabindex", "0");
            p(sliderContainer, slider);

            // Create the slider fill
            const sliderFill = document.createElement("div");
            sliderFill.className = "slider-fill";
            p(slider, sliderFill);

            // Create the slider thumb
            const sliderThumb = document.createElement("div");
            sliderThumb.className = "slider-thumb";
            p(slider, sliderThumb);

            let isDragging = false;

            const startDragging = () => {
              isDragging = true;
              volumeIcon.style.pointerEvents = "none";
            };

            const stopDragging = () => {
              isDragging = false;
              volumeIcon.style.pointerEvents = "auto";
            };

            const updateSlider = (clientX) => {
              const rect = slider.getBoundingClientRect();
              let value = Math.max(
                0,
                Math.min(100, ((clientX - rect.left) / rect.width) * 100)
              );
              value = Math.round(value);
              sliderFill.style.width = `${value}%`;
              sliderThumb.style.left = `${value}%`;
              slider.setAttribute("aria-valuenow", value);

              // Update volume for SoundCloud widget
              if (window.SC && window.SC.Widget) {
                const widget = SC.Widget(document.querySelector("iframe"));
                widget.setVolume(value);
              }

              // Update mute icon
              updateMuteIcon(value);
            };

            const updateMuteIcon = (value) => {
              const path = volumeSvg.querySelector("path");
              let line = volumeSvg.querySelector("line");

              if (value === 0) {
                if (!line) {
                  line = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "line"
                  );
                  line.setAttribute("x1", "1");
                  line.setAttribute("y1", "1");
                  line.setAttribute("x2", "23");
                  line.setAttribute("y2", "23");
                  line.setAttribute("style", "stroke: white; stroke-width: 2");
                  volumeSvg.appendChild(line);
                }
              } else {
                if (line) {
                  volumeSvg.removeChild(line);
                }
              }

              // Update the path (if needed)
              path.setAttribute(
                "d",
                "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
              );
              path.setAttribute("style", "fill: white");
            };

            slider.addEventListener("mousedown", (e) => {
              if (isDragging) {
                e.preventDefault();
                e.stopPropagation();
              }
              isDragging = true;
              updateSlider(e.clientX);
              e.preventDefault(); // Prevent text selection
            });

            document.addEventListener("mousemove", (e) => {
              if (isDragging) {
                updateSlider(e.clientX);
                e.preventDefault(); // Prevent text selection
              }
            });

            document.addEventListener("mouseup", () => {
              isDragging = false;
            });

            slider.addEventListener("click", (e) => {
              updateSlider(e.clientX);
            });

            slider.addEventListener("keydown", (e) => {
              let value = parseInt(slider.getAttribute("aria-valuenow"));
              switch (e.key) {
                case "ArrowRight":
                case "ArrowUp":
                  value = Math.min(100, value + 5);
                  break;
                case "ArrowLeft":
                case "ArrowDown":
                  value = Math.max(0, value - 5);
                  break;
                case "Home":
                  value = 0;
                  break;
                case "End":
                  value = 100;
                  break;
                default:
                  return;
              }
              updateSlider(
                slider.getBoundingClientRect().left +
                  (value / 100) * slider.offsetWidth
              );
              e.preventDefault();
            });

            volumeIcon.addEventListener("click", () => {
              const currentValue = parseInt(
                slider.getAttribute("aria-valuenow")
              );
              updateSlider(
                slider.getBoundingClientRect().left +
                  ((currentValue === 0 ? 50 : 0) / 100) * slider.offsetWidth
              );
            });

            // Initialize slider
            updateSlider(
              slider.getBoundingClientRect().left +
                (50 / 100) * slider.offsetWidth
            );
          } else {
            f.classList.add("without-volume");
          }
          p(v, k),
            p(f, b),
            p(f, S),
            ee(D, S, null),
            p(f, Y),
            p(f, C),
            p(C, O),
            (P = !0);
        },
        p(n, r) {
          (e = n)[12] || 1 != e[0]
            ? N && (N.d(1), (N = null))
            : N || ((N = tt()), N.c(), N.m(t.parentNode, t)),
            (!P || 1024 & r[0]) && T(a, "width", e[10] + "%"),
            (!P || 98304 & r[0]) &&
              T(o, "width", (e[15] ? e[16] : "100") + "%"),
            I === (I = H(e)) && W
              ? W.p(e, r)
              : (W.d(1), (W = I(e)), W && (W.c(), W.m(i, null))),
            (!P || 2048 & r[0]) && A !== (A = mt(e[11]) + "") && $(k, A);
          const s = {};
          (262144 & r[0]) | (128 & r[1]) &&
            (s.$$scope = {
              dirty: r,
              ctx: e,
            }),
            D.$set(s),
            (!P || 33052 & r[0]) &&
              L !==
                (L =
                  mt(
                    e[15]
                      ? e[4].isPrime
                        ? e[8].slice(-1)[0]
                        : e[2].maxAttempts * e[2].attemptInterval
                      : e[3]
                  ) + "") &&
              $(O, L);
        },
        i(e) {
          P || (Z(D.$$.fragment, e), (P = !0));
        },
        o(e) {
          q(D.$$.fragment, e), (P = !1);
        },
        d(e) {
          N && N.d(e), e && y(t), e && y(n), W.d(), e && y(u), e && y(c), te(D);
        },
      }
    );
  }

  function et(e) {
    let t, n, r, s, i, o;
    return {
      c() {
        (t = w("p")),
          (n = _("Sorry! The answer is ")),
          (r = w("a")),
          (s = _("here")),
          (o = _(
            ", though, if you want to maintain your streak.\n                                I won't tell..."
          )),
          M(r, "href", (i = e[1].url)),
          M(t, "class", "text-xs text-custom-line pt-1");
      },
      m(e, i) {
        g(e, t, i), p(t, n), p(t, r), p(r, s), p(t, o);
      },
      p(e, t) {
        2 & t[0] && i !== (i = e[1].url) && M(r, "href", i);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function tt(e) {
    let t;
    return {
      c() {
        (t = w("div")),
          (t.innerHTML =
            '<p><a href="https://docs.google.com/spreadsheets/d/1lVH5z37vtdCcjwFHJAL7-9LLx6T3GPbMJNRMgG19ahg/edit#gid=0">Click Here or on the top right for the full list of Nintendo Heardle songs.</p> \n\n <svg class="mt-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg>'),
          M(
            t,
            "class",
            "text-center p-3 flex flex-col items-center text-sm text-custom-line"
          );
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function nt(e) {
    let t;

    function n(e, t) {
      return e[15] ? st : it;
    }
    let r = n(e),
      s = r(e);
    return {
      c() {
        (t = w("div")),
          s.c(),
          M(t, "class", "flex w-full h-full absolute justify-between");
      },
      m(e, n) {
        g(e, t, n), s.m(t, null);
      },
      p(e, i) {
        r === (r = n(e)) && s
          ? s.p(e, i)
          : (s.d(1), (s = r(e)), s && (s.c(), s.m(t, null)));
      },
      d(e) {
        e && y(t), s.d();
      },
    };
  }

  function rt(e) {
    let t,
      n = e[15] && lt(e);
    return {
      c() {
        (t = w("div")), n && n.c(), M(t, "class", "w-full h-full absolute");
      },
      m(e, r) {
        g(e, t, r), n && n.m(t, null);
      },
      p(e, r) {
        e[15]
          ? n
            ? n.p(e, r)
            : ((n = lt(e)), n.c(), n.m(t, null))
          : n && (n.d(1), (n = null));
      },
      d(e) {
        e && y(t), n && n.d();
      },
    };
  }

  function st(e) {
    let t,
      n = Array(e[2].maxAttempts + 1),
      r = [];
    for (let t = 0; t < n.length; t += 1) r[t] = ot(Be(e, n, t));
    return {
      c() {
        for (let e = 0; e < r.length; e += 1) r[e].c();
        t = b();
      },
      m(e, n) {
        for (let t = 0; t < r.length; t += 1) r[t].m(e, n);
        g(e, t, n);
      },
      p(e, s) {
        if (4 & s[0]) {
          const s = n.length;
          let i;
          for (n = Array(e[2].maxAttempts + 1), i = s; i < n.length; i += 1)
            Be(e, n, i),
              r[i] || ((r[i] = ot()), r[i].c(), r[i].m(t.parentNode, t));
          for (i = n.length; i < s; i += 1) r[i].d(1);
          r.length = n.length;
        }
      },
      d(e) {
        v(r, e), e && y(t);
      },
    };
  }

  function it(e) {
    let t,
      n = Array(Math.floor(e[3] / e[2].attemptInterval)),
      r = [];
    for (let t = 0; t < n.length; t += 1) r[t] = at(ze(e, n, t));
    return {
      c() {
        for (let e = 0; e < r.length; e += 1) r[e].c();
        t = b();
      },
      m(e, n) {
        for (let t = 0; t < r.length; t += 1) r[t].m(e, n);
        g(e, t, n);
      },
      p(e, s) {
        if (12 & s[0]) {
          const s = n.length;
          let i;
          for (
            n = Array(Math.floor(e[3] / e[2].attemptInterval)), i = s;
            i < n.length;
            i += 1
          )
            ze(e, n, i),
              r[i] || ((r[i] = at()), r[i].c(), r[i].m(t.parentNode, t));
          for (i = n.length; i < s; i += 1) r[i].d(1);
          r.length = n.length;
        }
      },
      d(e) {
        v(r, e), e && y(t);
      },
    };
  }

  function ot(e) {
    let t;
    return {
      c() {
        (t = w("div")), M(t, "class", "bg-custom-bg w-px h-full");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function at(e) {
    let t;
    return {
      c() {
        (t = w("div")), M(t, "class", "bg-custom-bg w-px h-full");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function lt(e) {
    let t,
      n,
      r,
      s,
      i = e[8],
      o = [];
    for (let t = 0; t < i.length; t += 1) o[t] = ut(Ue(e, i, t));
    return {
      c() {
        (t = w("div")), (n = x());
        for (let e = 0; e < o.length; e += 1) o[e].c();
        (r = x()),
          (s = w("div")),
          M(t, "class", "bg-custom-line w-px h-full absolute right-0"),
          M(s, "class", "bg-custom-mg w-px h-full absolute right-0");
      },
      m(e, i) {
        g(e, t, i), g(e, n, i);
        for (let t = 0; t < o.length; t += 1) o[t].m(e, i);
        g(e, r, i), g(e, s, i);
      },
      p(e, t) {
        if (384 & t[0]) {
          let n;
          for (i = e[8], n = 0; n < i.length; n += 1) {
            const s = Ue(e, i, n);
            o[n]
              ? o[n].p(s, t)
              : ((o[n] = ut(s)), o[n].c(), o[n].m(r.parentNode, r));
          }
          for (; n < o.length; n += 1) o[n].d(1);
          o.length = i.length;
        }
      },
      d(e) {
        e && y(t), e && y(n), v(o, e), e && y(r), e && y(s);
      },
    };
  }

  function ut(e) {
    let t;
    return {
      c() {
        (t = w("div")),
          M(t, "class", "w-px h-full absolute"),
          T(t, "left", (e[8][e[35]] / e[8].slice(-1)[0]) * 100 + "%"),
          Y(t, "bg-custom-bg", e[35] < e[7] - 1),
          Y(t, "bg-custom-mg", e[35] > e[7] - 1),
          Y(t, "bg-custom-line", e[35] == e[7] - 1);
      },
      m(e, n) {
        g(e, t, n);
      },
      p(e, n) {
        256 & n[0] &&
          T(t, "left", (e[8][e[35]] / e[8].slice(-1)[0]) * 100 + "%"),
          128 & n[0] && Y(t, "bg-custom-bg", e[35] < e[7] - 1),
          128 & n[0] && Y(t, "bg-custom-mg", e[35] > e[7] - 1),
          128 & n[0] && Y(t, "bg-custom-line", e[35] == e[7] - 1);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function ct(t) {
    let n;
    return {
      c() {
        (n = w("div")),
          (n.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>'),
          M(n, "class", "ml-1 relative z-10");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function dt(e) {
    let t, n, r;
    return (
      (n = new Fe({
        props: {
          musicIsPlaying: e[18],
        },
      })),
      {
        c() {
          (t = w("div")), Q(n.$$.fragment), M(t, "class", "relative z-10");
        },
        m(e, s) {
          g(e, t, s), ee(n, t, null), (r = !0);
        },
        p(e, t) {
          const r = {};
          262144 & t[0] && (r.musicIsPlaying = e[18]), n.$set(r);
        },
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          e && y(t), te(n);
        },
      }
    );
  }

  function ht(e) {
    let t, n, r, s;
    const i = [dt, ct],
      o = [];

    function a(e, t) {
      return e[18] ? 0 : 1;
    }
    return (
      (n = a(e)),
      (r = o[n] = i[n](e)),
      {
        c() {
          (t = w("div")),
            r.c(),
            M(
              t,
              "class",
              "flex justify-center items-center text-custom-fg h-14 w-14 border-2 rounded-full relative overflow-hidden"
            );
        },
        m(e, r) {
          g(e, t, r), o[n].m(t, null), (s = !0);
        },
        p(e, s) {
          let l = n;
          (n = a(e)),
            n === l
              ? o[n].p(e, s)
              : (J(),
                q(o[l], 1, 1, () => {
                  o[l] = null;
                }),
                K(),
                (r = o[n]),
                r ? r.p(e, s) : ((r = o[n] = i[n](e)), r.c()),
                Z(r, 1),
                r.m(t, null));
        },
        i(e) {
          s || (Z(r), (s = !0));
        },
        o(e) {
          q(r), (s = !1);
        },
        d(e) {
          e && y(t), o[n].d();
        },
      }
    );
  }

  function ft(e) {
    let t, n, r, s, i, o, a, u, c, d, h;
    const f = [Je, Ve],
      m = [];

    function v(e, t) {
      return e[17] ? 0 : 1;
    }
    return (
      (s = v(e)),
      (i = m[s] = f[s](e)),
      {
        c() {
          (t = w("script")),
            (r = x()),
            i.c(),
            (o = x()),
            (a = w("div")),
            (u = w("div")),
            l(t.src, (n = "https://w.soundcloud.com/player/api.js")) ||
              M(t, "src", "https://w.soundcloud.com/player/api.js"),
            M(a, "class", "hidden");
        },
        m(n, i) {
          p(je.head, t),
            g(n, r, i),
            m[s].m(n, i),
            g(n, o, i),
            g(n, a, i),
            p(a, u),
            e[23](u),
            (c = !0),
            d || ((h = S(t, "load", e[19])), (d = !0));
        },
        p(e, t) {
          let n = s;
          (s = v(e)),
            s === n
              ? m[s].p(e, t)
              : (J(),
                q(m[n], 1, 1, () => {
                  m[n] = null;
                }),
                K(),
                (i = m[s]),
                i ? i.p(e, t) : ((i = m[s] = f[s](e)), i.c()),
                Z(i, 1),
                i.m(o.parentNode, o));
        },
        i(e) {
          c || (Z(i), (c = !0));
        },
        o(e) {
          q(i), (c = !1);
        },
        d(n) {
          y(t),
            n && y(r),
            m[s].d(n),
            n && y(o),
            n && y(a),
            e[23](null),
            (d = !1),
            h();
        },
      }
    );
  }

  function mt(e) {
    var t = Math.floor(e / 6e4),
      n = ((e % 6e4) / 1e3).toFixed(0);
    return t + ":" + (n < 10 ? "0" : "") + n;
  }

  function pt(e, t, n) {
    let r, s, i, o, a, l, u;
    const c = A();
    let { currentAttempt: d } = t,
      { currentHeardle: h } = t,
      { config: f } = t,
      { trackDuration: m = 0 } = t,
      { gameState: p } = t,
      g = !1;
    var y;
    let v = 0,
      w = 0,
      k = !1,
      _ = !1,
      x = !1,
      b = !1,
      S = !1;
    const M = () => {
      y.seekTo(0), y.pause();
    };

    function $(e) {
      c("updatePlayerState", {
        musicIsPlaying: e,
      });
    }
    let D;

    function T() {
      (y = SC.Widget("soundcloud" + h.id)).bind(
        SC.Widget.Events.READY,
        function () {
          y.getCurrentSound(function (e) {
            "BLOCK" === e.policy && n(9, (g = !0)),
              c("updateSong", {
                currentSong: e,
              });
          }),
            y.bind(SC.Widget.Events.PAUSE, function () {
              $(!1);
            }),
            y.bind(SC.Widget.Events.PLAY, function () {
              b ||
                (pe("startGame", {
                  name: "startGame",
                }),
                pe("startGame#" + h.id, {
                  name: "startGame",
                }),
                (b = !0)),
                $(!0),
                n(12, (x = !0));
            }),
            y.bind(SC.Widget.Events.PLAY_PROGRESS, function (e) {
              n(11, (w = e.currentPosition)),
                1 == s
                  ? p.isPrime
                    ? (n(10, (v = (w / u) * 100)), w > u && M())
                    : (n(10, (v = (w / (d * f.attemptInterval)) * 100)),
                      w > d * f.attemptInterval && M())
                  : (n(10, (v = (w / m) * 100)), w > m && M());
            });
        }
      );
    }
    P(() => {
      const e = document.createElement("iframe");
      (e.name = h.id),
        (e.id = "soundcloud" + h.id),
        (e.allow = "autoplay"),
        (e.height = 0),
        (e.src =
          "https://w.soundcloud.com/player/?url=" + h.url + "&cache=" + h.id),
        D.appendChild(e),
        (_ = !0),
        k &&
          (setTimeout(() => {
            n(13, (S = !0));
          }, 6e3),
          T());
    });
    return (
      (e.$$set = (e) => {
        "currentAttempt" in e && n(0, (d = e.currentAttempt)),
          "currentHeardle" in e && n(1, (h = e.currentHeardle)),
          "config" in e && n(2, (f = e.config)),
          "trackDuration" in e && n(3, (m = e.trackDuration)),
          "gameState" in e && n(4, (p = e.gameState));
      }),
      (e.$$.update = () => {
        16 & e.$$.dirty[0] && n(18, (r = p.musicIsPlaying)),
          16 & e.$$.dirty[0] && n(15, (s = p.gameIsActive)),
          16 & e.$$.dirty[0] && n(17, (i = p.playerIsReady)),
          1 & e.$$.dirty[0] && n(7, (o = d)),
          4 & e.$$.dirty[0] && n(8, (a = f.attemptIntervalAlt)),
          405 & e.$$.dirty[0] &&
            n(
              16,
              (l = p.isPrime
                ? (a[o - 1] / a.slice(-1)[0]) * 100
                : (d / f.maxAttempts) * 100)
            ),
          384 & e.$$.dirty[0] && (u = a[o - 1]);
      }),
      [
        d,
        h,
        f,
        m,
        p,
        () => {
          y.seekTo(0), y.play();
        },
        M,
        o,
        a,
        g,
        v,
        w,
        x,
        S,
        D,
        s,
        l,
        i,
        r,
        function () {
          (k = !0),
            _ &&
              (setTimeout(() => {
                n(13, (S = !0));
              }, 6e3),
              T());
        },
        () => {
          y.toggle();
        },
        () => {
          y.seekTo(0), y.play();
        },
        () => {
          window.location.reload();
        },
        function (e) {
          H[e ? "unshift" : "push"](() => {
            (D = e), n(14, D);
          });
        },
      ]
    );
  }
  class gt extends se {
    constructor(e) {
      super(),
        re(
          this,
          e,
          pt,
          ft,
          i,
          {
            currentAttempt: 0,
            currentHeardle: 1,
            config: 2,
            trackDuration: 3,
            gameState: 4,
            togglePlayState: 20,
            scPlay: 5,
            scPause: 6,
            resetAndPlay: 21,
          },
          null,
          [-1, -1]
        );
    }
    get togglePlayState() {
      return this.$$.ctx[20];
    }
    get scPlay() {
      return this.$$.ctx[5];
    }
    get scPause() {
      return this.$$.ctx[6];
    }
    get resetAndPlay() {
      return this.$$.ctx[21];
    }
  }
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self && self;

  function yt(e) {
    var t = {
      exports: {},
    };
    return e(t, t.exports), t.exports;
  }

  function vt(e) {
    throw new Error(
      'Could not dynamically require "' +
        e +
        '". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.'
    );
  }
  var wt = yt(function (e, t) {
      var n;
      (n = function () {
        function e(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }

        function t(t) {
          for (var n = 1; n < arguments.length; n++) {
            var s = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? e(Object(s), !0).forEach(function (e) {
                  r(t, e, s[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
              : e(Object(s)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(s, e)
                  );
                });
          }
          return t;
        }

        function n(e) {
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }

        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }

        function s(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return o(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            i(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }

        function i(e, t) {
          if (e) {
            if ("string" == typeof e) return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? o(e, t)
                : void 0
            );
          }
        }

        function o(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var a = function (e) {
            return "string" == typeof e ? document.querySelector(e) : e();
          },
          l = function (e, t) {
            var n = "string" == typeof e ? document.createElement(e) : e;
            for (var r in t) {
              var s = t[r];
              if ("inside" === r) s.append(n);
              else if ("dest" === r) a(s[0]).insertAdjacentElement(s[1], n);
              else if ("around" === r) {
                var i = s;
                i.parentNode.insertBefore(n, i),
                  n.append(i),
                  null != i.getAttribute("autofocus") && i.focus();
              } else r in n ? (n[r] = s) : n.setAttribute(r, s);
            }
            return n;
          },
          u = function (e, t) {
            return (
              (e = ""+e),
              (e = e.toString().toLowerCase()),
              t
                ? e
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .normalize("NFC")
                : e
            );
          },
          c = function (e, n) {
            return l(
              "mark",
              t(
                {
                  innerHTML: e,
                },
                "string" == typeof n && {
                  class: n,
                }
              )
            ).outerHTML;
          },
          d = function (e, t) {
            t.input.dispatchEvent(
              new CustomEvent(e, {
                bubbles: !0,
                detail: t.feedback,
                cancelable: !0,
              })
            );
          },
          h = function (e, t, n) {
            var r = n || {},
              s = r.mode,
              i = r.diacritics,
              o = r.highlight,
              t = ""+t,
              a = u(t, i);
            if (((t = t.toString()), (e = u(e, i)), "loose" === s)) {
              var l = (e = e.replace(/ /g, "")).length,
                d = 0,
                h = Array.from(t)
                  .map(function (t, n) {
                    return (
                      d < l && a[n] === e[d] && ((t = o ? c(t, o) : t), d++), t
                    );
                  })
                  .join("");
              if (d === l) return h;
            } else {
              var f = a.indexOf(e);
              if (~f)
                return (
                  (e = t.substring(f, f + e.length)),
                  o ? t.replace(e, c(e, o)) : t
                );
            }
          },
          f = function (e, t) {
            return new Promise(function (n, r) {
              var s;
              return (s = e.data).cache && s.store
                ? n()
                : new Promise(function (e, n) {
                    return "function" == typeof s.src
                      ? s.src(t).then(e, n)
                      : e(s.src);
                  }).then(function (t) {
                    try {
                      return (e.feedback = s.store = t), d("response", e), n();
                    } catch (e) {
                      return r(e);
                    }
                  }, r);
            });
          },
          m = function (e, t) {
            var n = t.data,
              r = t.searchEngine,
              s = [];
            n.store.forEach(function (o, a) {
              var l = function (n) {
                var i = n ? o[n] : o,
                  a =
                    "function" == typeof r
                      ? r(e, i)
                      : h(e, i, {
                          mode: r,
                          diacritics: t.diacritics,
                          highlight: t.resultItem.highlight,
                        });
                if (a) {
                  var l = {
                    match: a,
                    value: o,
                  };
                  n && (l.key = n), s.push(l);
                }
              };
              if (n.keys) {
                var u,
                  c = (function (e, t) {
                    var n =
                      ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                    if (!n) {
                      if (Array.isArray(e) || (n = i(e))) {
                        n && (e = n);
                        var r = 0,
                          s = function () {};
                        return {
                          s: s,
                          n: function () {
                            return r >= e.length
                              ? {
                                  done: !0,
                                }
                              : {
                                  done: !1,
                                  value: e[r++],
                                };
                          },
                          e: function (e) {
                            throw e;
                          },
                          f: s,
                        };
                      }
                      throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    }
                    var o,
                      a = !0,
                      l = !1;
                    return {
                      s: function () {
                        n = n.call(e);
                      },
                      n: function () {
                        var e = n.next();
                        return (a = e.done), e;
                      },
                      e: function (e) {
                        (l = !0), (o = e);
                      },
                      f: function () {
                        try {
                          a || null == n.return || n.return();
                        } finally {
                          if (l) throw o;
                        }
                      },
                    };
                  })(n.keys);
                try {
                  for (c.s(); !(u = c.n()).done; ) l(u.value);
                } catch (e) {
                  c.e(e);
                } finally {
                  c.f();
                }
              } else l();
            }),
              n.filter && (s = n.filter(s));
            var o = s.slice(0, t.resultsList.maxResults);
            (t.feedback = {
              query: e,
              matches: s,
              results: o,
            }),
              d("results", t);
          },
          p = "aria-expanded",
          g = "aria-activedescendant",
          y = "aria-selected",
          v = function (e, n) {
            e.feedback.selection = t(
              {
                index: n,
              },
              e.feedback.results[n]
            );
          },
          w = function (e) {
            e.isOpen ||
              ((e.wrapper || e.input).setAttribute(p, !0),
              e.list.removeAttribute("hidden"),
              (e.isOpen = !0),
              d("open", e));
          },
          k = function (e) {
            e.isOpen &&
              ((e.wrapper || e.input).setAttribute(p, !1),
              e.input.setAttribute(g, ""),
              e.list.setAttribute("hidden", ""),
              (e.isOpen = !1),
              d("close", e));
          },
          _ = function (e, t) {
            var n = t.resultItem,
              r = t.list.getElementsByTagName(n.tag),
              i = !!n.selected && n.selected.split(" ");
            if (t.isOpen && r.length) {
              var o,
                a,
                l = t.cursor;
              e >= r.length && (e = 0),
                e < 0 && (e = r.length - 1),
                (t.cursor = e),
                l > -1 &&
                  (r[l].removeAttribute(y),
                  i && (a = r[l].classList).remove.apply(a, s(i))),
                r[e].setAttribute(y, !0),
                i && (o = r[e].classList).add.apply(o, s(i)),
                t.input.setAttribute(g, r[t.cursor].id),
                (t.list.scrollTop =
                  r[e].offsetTop - t.list.clientHeight + r[e].clientHeight + 5),
                (t.feedback.cursor = t.cursor),
                v(t, e),
                d("navigate", t);
            }
          },
          x = function (e) {
            _(e.cursor + 1, e);
          },
          b = function (e) {
            _(e.cursor - 1, e);
          },
          S = function (e, t, n) {
            (n = n >= 0 ? n : e.cursor) < 0 ||
              ((e.feedback.event = t), v(e, n), d("selection", e), k(e));
          };

        function M(e, n) {
          var r = this;
          return new Promise(function (s, i) {
            var o, a;
            return (
              (o =
                n ||
                ((a = e.input) instanceof HTMLInputElement ||
                a instanceof HTMLTextAreaElement
                  ? a.value
                  : a.innerHTML)),
              (function (e, t, n) {
                return t ? t(e) : e.length >= n;
              })((o = e.query ? e.query(o) : o), e.trigger, e.threshold)
                ? f(e, o).then(function (n) {
                    try {
                      return e.feedback instanceof Error
                        ? s()
                        : (m(o, e),
                          e.resultsList &&
                            (function (e) {
                              var n = e.resultsList,
                                r = e.list,
                                s = e.resultItem,
                                i = e.feedback,
                                o = i.matches,
                                a = i.results;
                              if (
                                ((e.cursor = -1),
                                (r.innerHTML = ""),
                                o.length || n.noResults)
                              ) {
                                var u = new DocumentFragment();
                                a.forEach(function (e, n) {
                                  var r = l(
                                    s.tag,
                                    t(
                                      {
                                        id: "".concat(s.id, "_").concat(n),
                                        role: "option",
                                        innerHTML: e.match,
                                        inside: u,
                                      },
                                      s.class && {
                                        class: s.class,
                                      }
                                    )
                                  );
                                  s.element && s.element(r, e);
                                }),
                                  r.append(u),
                                  n.element && n.element(r, i),
                                  w(e);
                              } else k(e);
                            })(e),
                          u.call(r));
                    } catch (e) {
                      return i(e);
                    }
                  }, i)
                : (k(e), u.call(r))
            );

            function u() {
              return s();
            }
          });
        }
        var $ = function (e, t) {
          for (var n in e) for (var r in e[n]) t(n, r);
        };

        function D(e) {
          var n = this;
          return new Promise(function (r, s) {
            var i, o, a;
            if (
              ((i = e.placeHolder),
              (a = {
                role: "combobox",
                "aria-owns": (o = e.resultsList).id,
                "aria-haspopup": !0,
                "aria-expanded": !1,
              }),
              l(
                e.input,
                t(
                  t(
                    {
                      "aria-controls": o.id,
                      "aria-autocomplete": "both",
                    },
                    i && {
                      placeholder: i,
                    }
                  ),
                  !e.wrapper && t({}, a)
                )
              ),
              e.wrapper &&
                (e.wrapper = l(
                  "div",
                  t(
                    {
                      around: e.input,
                      class: e.name + "_wrapper",
                    },
                    a
                  )
                )),
              o &&
                (e.list = l(
                  o.tag,
                  t(
                    {
                      dest: [o.destination, o.position],
                      id: o.id,
                      role: "listbox",
                      hidden: "hidden",
                    },
                    o.class && {
                      class: o.class,
                    }
                  )
                )),
              (function (e) {
                var n,
                  r,
                  s,
                  i = e.events,
                  o =
                    ((n = function () {
                      return M(e);
                    }),
                    (r = e.debounce),
                    function () {
                      clearTimeout(s),
                        (s = setTimeout(function () {
                          return n();
                        }, r));
                    }),
                  a = (e.events = t(
                    {
                      input: t({}, i && i.input),
                    },
                    e.resultsList && {
                      list: i ? t({}, i.list) : {},
                    }
                  )),
                  l = {
                    input: {
                      input: function () {
                        o();
                      },
                      keydown: function (t) {
                        !(function (e, t) {
                          switch (e.keyCode) {
                            case 40:
                            case 38:
                              e.preventDefault(),
                                40 === e.keyCode ? x(t) : b(t);
                              break;
                            case 13:
                              t.submit || e.preventDefault(),
                                t.cursor >= 0 && S(t, e);
                              break;
                            case 9:
                              t.resultsList.tabSelect &&
                                t.cursor >= 0 &&
                                S(t, e);
                              break;
                            case 27:
                              (t.input.value = ""), k(t);
                          }
                        })(t, e);
                      },
                      blur: function () {
                        k(e);
                      },
                    },
                    list: {
                      mousedown: function (e) {
                        e.preventDefault();
                      },
                      click: function (t) {
                        !(function (e, t) {
                          var n = t.resultItem.tag.toUpperCase(),
                            r = Array.from(t.list.querySelectorAll(n)),
                            s = e.target.closest(n);
                          s && s.nodeName === n && S(t, e, r.indexOf(s));
                        })(t, e);
                      },
                    },
                  };
                $(l, function (t, n) {
                  (e.resultsList || "input" === n) &&
                    (a[t][n] || (a[t][n] = l[t][n]));
                }),
                  $(a, function (t, n) {
                    e[t].addEventListener(n, a[t][n]);
                  });
              })(e),
              e.data.cache)
            )
              return f(e).then(function (e) {
                try {
                  return u.call(n);
                } catch (e) {
                  return s(e);
                }
              }, s);

            function u() {
              return d("init", e), r();
            }
            return u.call(n);
          });
        }

        function T(e) {
          var t = e.prototype;
          (t.init = function () {
            D(this);
          }),
            (t.start = function (e) {
              M(this, e);
            }),
            (t.unInit = function () {
              if (this.wrapper) {
                var e = this.wrapper.parentNode;
                e.insertBefore(this.input, this.wrapper),
                  e.removeChild(this.wrapper);
              }
              var t;
              $((t = this).events, function (e, n) {
                t[e].removeEventListener(n, t.events[e][n]);
              });
            }),
            (t.open = function () {
              w(this);
            }),
            (t.close = function () {
              k(this);
            }),
            (t.goTo = function (e) {
              _(e, this);
            }),
            (t.next = function () {
              x(this);
            }),
            (t.previous = function () {
              b(this);
            }),
            (t.select = function (e) {
              S(this, null, e);
            }),
            (t.search = function (e, t, n) {
              return h(e, t, n);
            });
        }
        return function e(t) {
          (this.options = t),
            (this.id = e.instances = (e.instances || 0) + 1),
            (this.name = "autoComplete"),
            (this.wrapper = 1),
            (this.threshold = 1),
            (this.debounce = 0),
            (this.resultsList = {
              position: "afterend",
              tag: "ul",
              maxResults: 5,
            }),
            (this.resultItem = {
              tag: "li",
            }),
            (function (e) {
              var t = e.name,
                r = e.options,
                s = e.resultsList,
                i = e.resultItem;
              for (var o in r)
                if ("object" === n(r[o]))
                  for (var l in (e[o] || (e[o] = {}), r[o])) e[o][l] = r[o][l];
                else e[o] = r[o];
              (e.selector = e.selector || "#" + t),
                (s.destination = s.destination || e.selector),
                (s.id = s.id || t + "_list_" + e.id),
                (i.id = i.id || t + "_result"),
                (e.input = a(e.selector));
            })(this),
            T.call(this, e),
            D(this);
        };
      }),
        (e.exports = n());
    }),
    kt = _t(2);

  function _t(e) {
    if (
      "number" != typeof e ||
      Number.isNaN(e) ||
      e < 1 ||
      e === Number.POSITIVE_INFINITY
    )
      throw new Error("`" + e + "` is not a valid argument for `n-gram`");
    return function (t) {
      var n,
        r,
        s = [];
      if (null == t) return s;
      if (((r = t.slice ? t : String(t)), (n = r.length - e + 1) < 1)) return s;
      for (; n--; ) s[n] = r.slice(n, n + e);
      return s;
    };
  }

  function xt(e, t) {
    let n, r, s, i;
    Array.isArray(e)
      ? (s = e.map((e) => String(e).toLowerCase()))
      : ((n = String(e).toLowerCase()), (s = 1 === n.length ? [n] : kt(n))),
      Array.isArray(t)
        ? (i = t.map((e) => String(e).toLowerCase()))
        : ((r = String(t).toLowerCase()), (i = 1 === r.length ? [r] : kt(r)));
    let o,
      a,
      l,
      u = -1,
      c = 0;
    for (; ++u < s.length; )
      for (o = s[u], l = -1; ++l < i.length; )
        if (((a = i[l]), o === a)) {
          c++, (i[l] = "");
          break;
        }
    return (2 * c) / (s.length + i.length);
  }

  function bt(t) {
    let n, r;
    return {
      c() {
        (n = _("Skip ")), (r = w("span")), (r.textContent = "(+1.5s)");
      },
      m(e, t) {
        g(e, n, t), g(e, r, t);
      },
      p: e,
      d(e) {
        e && y(n), e && y(r);
      },
    };
  }

  function St(e) {
    let t, n, r, s, i;
    return {
      c() {
        (t = _("Skip ")),
          (n = w("span")),
          (r = _("(+")),
          (s = _(e[0])),
          (i = _("s)")),
          M(n, "class", "tracking-normal lowercase"),
          Y(n, "hidden", e[0] >= e[1].maxAttempts);
      },
      m(e, o) {
        g(e, t, o), g(e, n, o), p(n, r), p(n, s), p(n, i);
      },
      p(e, t) {
        1 & t && $(s, e[0]), 3 & t && Y(n, "hidden", e[0] >= e[1].maxAttempts);
      },
      d(e) {
        e && y(t), e && y(n);
      },
    };
  }

  function Mt(e) {
    let t;

    function n(e, t) {
      return e[2] ? St : bt;
    }
    let r = n(e),
      s = r(e);
    return {
      c() {
        s.c(), (t = b());
      },
      m(e, n) {
        s.m(e, n), g(e, t, n);
      },
      p(e, i) {
        r === (r = n(e)) && s
          ? s.p(e, i)
          : (s.d(1), (s = r(e)), s && (s.c(), s.m(t.parentNode, t)));
      },
      d(e) {
        s.d(e), e && y(t);
      },
    };
  }

  function $t(e) {
    let t;
    return {
      c() {
        t = _("Submit");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Dt(e) {
    let t, n, s, i, o, a, l, u, c, d, h, f, m, v, _, b, $, T, Y;
    return (
      (v = new ae({
        props: {
          secondary: !0,
          $$slots: {
            default: [Mt],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      v.$on("click", e[10]),
      (b = new ae({
        props: {
          primary: !0,
          $$slots: {
            default: [$t],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      b.$on("click", (ev) => {
        _onSubmit();
        e[5]();
      }),
      b.$on("click", e[5]),
      {
        c() {
          (t = w("div")),
            (n = w("div")),
            (s = w("div")),
            (i = w("div")),
            (o = k("svg")),
            (a = k("circle")),
            (l = k("line")),
            (u = x()),
            (c = w("input")),
            (d = x()),
            (h = w("div")),
            (h.innerHTML =
              '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'),
            (f = x()),
            (m = w("div")),
            Q(v.$$.fragment),
            (_ = x()),
            Q(b.$$.fragment),
            M(a, "cx", "11"),
            M(a, "cy", "11"),
            M(a, "r", "8"),
            M(l, "x1", "21"),
            M(l, "y1", "21"),
            M(l, "x2", "16.65"),
            M(l, "y2", "16.65"),
            M(o, "class", "absolute top-4 left-3"),
            M(o, "xmlns", "http://www.w3.org/2000/svg"),
            M(o, "width", "18"),
            M(o, "height", "18"),
            M(o, "viewBox", "0 0 24 24"),
            M(o, "fill", "none"),
            M(o, "stroke", "currentColor"),
            M(o, "stroke-width", "2"),
            M(o, "stroke-linecap", "round"),
            M(o, "stroke-linejoin", "round"),
            M(
              c,
              "class",
              "focus:outline-none focus:border-custom-positive w-full p-3 pl-9 placeholder:text-custom-line bg-custom-bg text-custom-fg border-custom-mg"
            ),
            M(c, "id", "autoComplete"),
            M(c, "type", "search"),
            M(c, "dir", "ltr"),
            M(c, "spellcheck", "false"),
            M(c, "autocorrect", "off"),
            M(c, "autocomplete", "off"),
            M(c, "autocapitalize", "off"),
            M(h, "class", "absolute right-3 top-4"),
            M(i, "class", "autoComplete_wrapper relative"),
            M(m, "class", "flex justify-between pt-3"),
            M(n, "class", "m-3 mt-0"),
            M(t, "class", "max-w-screen-sm w-full mx-auto flex-col");
        },
        m(r, y) {
          g(r, t, y),
            p(t, n),
            p(n, s),
            p(s, i),
            p(i, o),
            p(o, a),
            p(o, l),
            p(i, u),
            p(i, c),
            D(c, e[4]),
            p(i, d),
            p(i, h),
            p(s, f),
            p(s, m),
            ee(v, m, null),
            p(m, _),
            ee(b, m, null),
            ($ = !0),
            T || ((Y = [S(c, "input", e[8]), S(h, "click", e[9])]), (T = !0));
        },
        p(e, [t]) {
          16 & t && D(c, e[4]);
          const n = {};
          32775 & t &&
            (n.$$scope = {
              dirty: t,
              ctx: e,
            }),
            v.$set(n);
          const r = {};
          32768 & t &&
            (r.$$scope = {
              dirty: t,
              ctx: e,
            }),
            b.$set(r);
        },
        i(e) {
          $ || (Z(v.$$.fragment, e), Z(b.$$.fragment, e), ($ = !0));
        },
        o(e) {
          q(v.$$.fragment, e), q(b.$$.fragment, e), ($ = !1);
        },
        d(e) {
          e && y(t), te(v), te(b), (T = !1), r(Y);
        },
      }
    );
  }

  function Tt(e, t, n) {
    let r,
      { allOptions: s } = t,
      { currentAttempt: i } = t,
      { config: o } = t,
      { isPrime: a } = t;
    const l = {
        focus() {
          document.getElementById("autoComplete").focus();
        },
        clear() {
          (document.getElementById("autoComplete").value = ""), n(4, (r = ""));
        },
      },
      u = A();

    function c(e) {
      "skipped" == e
        ? (u("guess", {
            guess: r,
            isSkipped: !0,
          }),
          n(4, (r = "")))
        : void 0 !== r && "" !== r.trim()
        ? (u("guess", {
            guess: r,
            isSkipped: !1,
          }),
          n(4, (r = "")))
        : l.focus();
    }
    P(() => {
      !(function () {
        const e = new wt({
          placeHolder: "Know it? Search for the game / title",
          threshold: 1,
          wrapper: !1,
          resultsList: {
            maxResults: 100,
          },
          diacritics: !0,
          noresults: !0,
          searchEngine: "loose",
          data: {
            src: s,
            cache: !1,
            filter: (e) => {
              if (e.length < 6) return e;
              const t = document
                .getElementById("autoComplete")
                .value.toLowerCase();
              return (e = e.sort((e, n) => {
                let r = xt(t, e.value.toLowerCase()),
                  s = xt(t, n.value.toLowerCase());
                return r === s ? (e.value > n.value ? -1 : 1) : s > r ? 1 : -1;
              }));
            },
          },
          resultItem: {
            highlight: !0,
          },
          events: {
            focus: {
              focus: (e) => {},
            },
            input: {
              selection: (t) => {
                let s = t.detail.selection.value;
                (e.input.value = s), n(4, (r = s));
              },
            },
          },
        });
      })();
    });
    return (
      (e.$$set = (e) => {
        s.pop();
        // console.log('all', s)
        "allOptions" in e && n(6, (s = e.allOptions)),
          "currentAttempt" in e && n(0, (i = e.currentAttempt)),
          "config" in e && n(1, (o = e.config)),
          "isPrime" in e && n(2, (a = e.isPrime));
      }),
      [
        i,
        o,
        a,
        l,
        r,
        c,
        s,
        () => {
          soundcloudWidget.toggle();
        },
        function () {
          (r = this.value), n(4, r);
        },
        () => l.clear(),
        () => c("skipped"),
      ]
    );
  }
  _t(3);
  class Yt extends se {
    constructor(e) {
      super(),
        re(this, e, Tt, Dt, i, {
          allOptions: 6,
          currentAttempt: 0,
          config: 1,
          isPrime: 2,
          guessInput: 3,
          togglePlayState: 7,
        });
    }
    get guessInput() {
      return this.$$.ctx[3];
    }
    get togglePlayState() {
      return this.$$.ctx[7];
    }
  }

  function Ct(e) {
    let t, n, r, s, i, o, a, l, u, d, v, k;
    const b = e[6].default,
      D = c(b, e, e[5], null);
    return {
      c() {
        (t = w("div")),
          (n = w("div")),
          (r = w("div")),
          (s = w("h2")),
          (i = _(e[0])),
          (o = x()),
          (a = w("div")),
          (l = w("button")),
          (l.innerHTML =
            '<svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'),
          (u = x()),
          D && D.c(),
          M(
            s,
            "class",
            "text-sm text-center uppercase text-custom-line font-semibold tracking-widest"
          ),
          M(r, "class", "flex-1 pl-7"),
          (l.autofocus = !0),
          M(l, "class", "border-none text-custom-mg"),
          M(a, "class", "justify-self-end flex"),
          M(n, "class", "flex items-center justify-center mb-6"),
          M(t, "class", "bg-custom-bg border border-custom-mg p-6");
      },
      m(c, h) {
        g(c, t, h),
          p(t, n),
          p(n, r),
          p(r, s),
          p(s, i),
          p(n, o),
          p(n, a),
          p(a, l),
          p(t, u),
          D && D.m(t, null),
          (d = !0),
          l.focus(),
          v || ((k = S(l, "click", e[3])), (v = !0));
      },
      p(e, t) {
        (!d || 1 & t) && $(i, e[0]),
          D &&
            D.p &&
            (!d || 32 & t) &&
            f(D, b, e, e[5], d ? h(b, e[5], t, null) : m(e[5]), null);
      },
      i(e) {
        d || (Z(D, e), (d = !0));
      },
      o(e) {
        q(D, e), (d = !1);
      },
      d(e) {
        e && y(t), D && D.d(e), (v = !1), k();
      },
    };
  }

  function Ot(e) {
    let t, n, r, s, i;
    const o = e[6].default,
      a = c(o, e, e[5], null);
    return {
      c() {
        (t = w("button")),
          (t.innerHTML =
            '<svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'),
          (n = x()),
          a && a.c(),
          (t.autofocus = !0),
          M(t, "class", "border-none text-custom-mg absolute right-3 top-3");
      },
      m(o, l) {
        g(o, t, l),
          g(o, n, l),
          a && a.m(o, l),
          (r = !0),
          t.focus(),
          s || ((i = S(t, "click", e[3])), (s = !0));
      },
      p(e, t) {
        a &&
          a.p &&
          (!r || 32 & t) &&
          f(a, o, e, e[5], r ? h(o, e[5], t, null) : m(e[5]), null);
      },
      i(e) {
        r || (Z(a, e), (r = !0));
      },
      o(e) {
        q(a, e), (r = !1);
      },
      d(e) {
        e && y(t), e && y(n), a && a.d(e), (s = !1), i();
      },
    };
  }

  function Pt(e) {
    let t, n, s, i, o, a, l, u, c;
    const d = [Ot, Ct],
      h = [];

    function f(e, t) {
      return 0 == e[1] ? 0 : 1;
    }
    return (
      (o = f(e)),
      (a = h[o] = d[o](e)),
      {
        c() {
          (t = w("div")),
            (n = x()),
            (s = w("div")),
            (i = w("div")),
            a.c(),
            M(
              t,
              "class",
              "modal-background p-3 flex justify-center svelte-1nyqrwd"
            ),
            M(
              i,
              "class",
              "pointer-events-auto modal w-full mx-auto top-20 relative rounded-sm "
            ),
            e[0] == "song list"
              ? M(
                  i,
                  "style",
                  "width: fit-content; height: calc(100% - 80px); overflow-y: scroll;"
                )
              : M(
                  i,
                  "class",
                  "pointer-events-auto modal max-w-screen-xs w-full mx-auto top-20 relative rounded-sm "
                ),
            M(i, "role", "dialog"),
            M(i, "aria-modal", "true"),
            M(
              s,
              "class",
              "modal-background p-3 pointer-events-none svelte-1nyqrwd"
            );
        },
        m(r, a) {
          g(r, t, a),
            g(r, n, a),
            g(r, s, a),
            p(s, i),
            h[o].m(i, null),
            e[7](i),
            (l = !0),
            u ||
              ((c = [S(window, "keydown", e[4]), S(t, "click", e[3])]),
              (u = !0));
        },
        p(e, [t]) {
          let n = o;
          (o = f(e)),
            o === n
              ? h[o].p(e, t)
              : (J(),
                q(h[n], 1, 1, () => {
                  h[n] = null;
                }),
                K(),
                (a = h[o]),
                a ? a.p(e, t) : ((a = h[o] = d[o](e)), a.c()),
                Z(a, 1),
                a.m(i, null));
        },
        i(e) {
          l || (Z(a), (l = !0));
        },
        o(e) {
          q(a), (l = !1);
        },
        d(i) {
          i && y(t), i && y(n), i && y(s), h[o].d(), e[7](null), (u = !1), r(c);
        },
      }
    );
  }

  function At(e, t, n) {
    let { $$slots: r = {}, $$scope: s } = t;
    const i = A(),
      o = () => i("close");
    let a,
      { title: l } = t,
      { hasFrame: u } = t;
    const c = "undefined" != typeof document && document.activeElement;
    var d;
    return (
      c &&
        ((d = () => {
          c.focus();
        }),
        O().$$.on_destroy.push(d)),
      (e.$$set = (e) => {
        "title" in e && n(0, (l = e.title)),
          "hasFrame" in e && n(1, (u = e.hasFrame)),
          "$$scope" in e && n(5, (s = e.$$scope));
      }),
      [
        l,
        u,
        a,
        o,
        (e) => {
          if ("Escape" !== e.key) {
            if ("Tab" === e.key) {
              const t = a.querySelectorAll("*"),
                n = Array.from(t).filter((e) => e.tabIndex >= 0);
              let r = n.indexOf(document.activeElement);
              -1 === r && e.shiftKey && (r = 0),
                (r += n.length + (e.shiftKey ? -1 : 1)),
                (r %= n.length),
                n[r].focus(),
                e.preventDefault();
            }
          } else o();
        },
        s,
        r,
        function (e) {
          H[e ? "unshift" : "push"](() => {
            (a = e), n(2, a);
          });
        },
      ]
    );
  }
  class Lt extends se {
    constructor(e) {
      super(),
        re(this, e, At, Pt, i, {
          title: 0,
          hasFrame: 1,
        });
    }
  }

  function Nt(t) {
    let n;
    return {
      c() {
        (n = w("div")),
          (n.innerHTML =
            '<p class="mb-3">Nintendo Infinite Heardle is a version of Nintendo Heardle that has no daily limit and selects songs randomly so you can play as long as you want.</p> <p class="mb-3">Volume Slider and Scroll Bar code by <a href="https://github.com/morgvanny">morgvanny</a>.</p> <p class="mb-3">Metadata code by <a href="https://www.fiverr.com/gema_designer">gema_designer</a>.</p>\n\n<p class="mb-3">The full list of songs, with potentially helpful information and screenshots, is available <a href="https://docs.google.com/spreadsheets/d/1lVH5z37vtdCcjwFHJAL7-9LLx6T3GPbMJNRMgG19ahg/edit?gid=0">here.</a> </p> \n\n<p class="mb-3"> If you have any technical issues, you can contact me at goldchimera.bsky.social, or by commenting on the previously linked Google Sheet. </p>'),
          M(n, "class", "text");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }
  class Ht extends se {
    constructor(e) {
      super(), re(this, e, null, Nt, i, {});
    }
  }

  function getGameOrArtistFromMusicName(musicNameList) {
    return musicNameList.map((a) => {
      const splited = a.split("-");
      return splited[splited.length - 1].trim();
    });
  }

  function MLt(t) {
    let n;
    const mapUrl = new Map();
    musicListWithLinks.forEach((m) => mapUrl.set(m.answer, m.url));
    const musicNameListFiltered = musicNameList.filter(
      (s) => s != "" && mapUrl.has(s)
    );
    const artistOrGame = getGameOrArtistFromMusicName(musicNameListFiltered);
    const diffArtist = artistOrGame.map((a, i) =>
      i > 0 ? !(artistOrGame[i - 1] === a) : false
    );
    const allDifferent = diffArtist.reduce((a, b) => a && b);
    return {
      c() {
        (n = w("div")),
          (n.innerHTML =
            '<ul style="list-style-type: disc;margin-center: 20px;font-size: 12px;display: grid;justify-content: center;">' +
            musicNameListFiltered
              .map(
                (s, i) =>
                  "<li" +
                  (diffArtist[i] && !allDifferent
                    ? ' style="margin-top:15px"'
                    : "") +
                  '><a target="_blank" href="' +
                  mapUrl.get(s) +
                  '">' +
                  s +
                  "</a></li>"
              )
              .join("") +
            "</ul>"),
          M(n, "class", "text");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }
  class MLCt extends se {
    constructor(e) {
      super(), re(this, e, null, MLt, i, {});
    }
  }

  function It(t) {
    let n, r, s, i;
    return {
      c() {
        (n = w("div")),
          (r = w("a")),
          // (r.innerHTML =
          //   '<span class="kofitext svelte-1d3p4dy"><img src="https://storage.ko-fi.com/cdn/cup-border.png" alt="Ko-fi donations" class="kofiimg mr-2 mb-1 svelte-1d3p4dy"/>Support the Heardle devs on Ko-Fi</span><svg xmlns="http://www.w3.org/2000/svg" class="ml-2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"></path></svg>'),
          // M(
          //   r,
          //   "class",
          //   "kofi-button py-2 px-3 rounded-lg items-center flex  svelte-1d3p4dy"
          // ),
          // M(r, "href", "https://ko-fi.com/heardle"),
          // M(r, "title", "Support the Heardle devs on Ko-Fi"),
          M(
            n,
            "class",
            "text-center flex justify-center items-center flex-col "
          );
      },
      m(e, o) {
        g(e, n, o), p(n, r), s || ((i = S(r, "click", t[0])), (s = !0));
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && y(n), (s = !1), i();
      },
    };
  }

  function Wt(e) {
    return [
      () => {
        pe("clickKofi", {
          name: "clickKofi",
        });
      },
    ];
  }
  class Rt extends se {
    constructor(e) {
      super(), re(this, e, Wt, It, i, {});
    }
  }

  function Ft(t) {
    let n, r;
    return (
      (n = new Ee({})),
      {
        c() {
          Q(n.$$.fragment);
        },
        m(e, t) {
          ee(n, e, t), (r = !0);
        },
        p: e,
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          te(n, e);
        },
      }
    );
  }

  function Gt(t) {
    let n, r, s, i, o, a, l, u, c, d;
    return {
      c() {
        (n = w("div")),
          (r = w("div")),
          (s = x()),
          (i = w("div")),
          (o = w("p")),
          (a = w("span")),
          (l = x()),
          (u = _(t[0])),
          (c = x()),
          (d = w("div")),
          M(r, "class", "flex justify-center items-center mt-6 mb-1"),
          M(a, "class", "text-custom-negative"),
          M(o, "class", "pb-6"),
          M(i, "class", "text-custom-mg text-xs h-32 overflow-scroll relative"),
          M(d, "class", "absolute h-6 bottom-0 w-full border-custom-fg "),
          T(
            d,
            "background",
            "linear-gradient(to bottom, rgba(18,18,18,0), rgba(18,18,18,1)) no-repeat bottom"
          ),
          T(d, "background-size", "100% 100%"),
          M(n, "class", "relative");
      },
      m(e, t) {
        g(e, n, t),
          p(n, r),
          p(n, s),
          p(n, i),
          p(i, o),
          p(o, a),
          p(o, l),
          p(o, u),
          p(n, c),
          p(n, d);
      },
      p(e, t) {
        1 & t && $(u, e[0]);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function Et(e) {
    let t, n, r, s;
    const i = [Gt, Ft],
      o = [];

    function a(e, t) {
      return e[0] ? 0 : 1;
    }
    return (
      (t = a(e)),
      (n = o[t] = i[t](e)),
      {
        c() {
          n.c(), (r = b());
        },
        m(e, n) {
          o[t].m(e, n), g(e, r, n), (s = !0);
        },
        p(e, [s]) {
          let l = t;
          (t = a(e)),
            t === l
              ? o[t].p(e, s)
              : (J(),
                q(o[l], 1, 1, () => {
                  o[l] = null;
                }),
                K(),
                (n = o[t]),
                n ? n.p(e, s) : ((n = o[t] = i[t](e)), n.c()),
                Z(n, 1),
                n.m(r.parentNode, r));
        },
        i(e) {
          s || (Z(n), (s = !0));
        },
        o(e) {
          q(n), (s = !1);
        },
        d(e) {
          o[t].d(e), e && y(r);
        },
      }
    );
  }

  function jt(e, t, n) {
    let r;
    return (
      P(async function () {
        (async function () {
          const e = await fetch(
            "https://wjsn-heardle.glitch.me/supporters.json"
          );
          return await e.json();
        })().then((e) => {
          n(0, (r = e.supporters));
        });
      }),
      [r]
    );
  }
  class Bt extends se {
    constructor(e) {
      super(), re(this, e, jt, Et, i, {});
    }
  }

  function zt(t) {
    let n, r, s, i, o, a, l, u, c;
    return (
      (a = new Rt({})),
      (u = new Bt({})),
      {
        c() {
          (n = w("p")),
            (s = w("p")),
            (n.innerHTML =
              "Have questions/run into bugs? Let me know at goldchimera.bsky.social or comment on the song list Google Sheet (link available through the top left button)."),
            (r = x()),
            (s = w("p")),
            (i = x()),
            (o = w("div")),
            Q(a.$$.fragment),
            (l = x()),
            Q(u.$$.fragment),
            M(n, "class", "mb-3"),
            M(s, "class", "mb-3"),
            M(o, "class", "pt-6");
        },
        m(e, t) {
          g(e, n, t),
            g(e, r, t),
            g(e, s, t),
            g(e, i, t),
            g(e, o, t),
            ee(a, o, null),
            g(e, l, t),
            ee(u, e, t),
            (c = !0);
        },
        p: e,
        i(e) {
          c || (Z(a.$$.fragment, e), Z(u.$$.fragment, e), (c = !0));
        },
        o(e) {
          q(a.$$.fragment, e), q(u.$$.fragment, e), (c = !1);
        },
        d(e) {
          e && y(n),
            e && y(r),
            e && y(s),
            e && y(i),
            e && y(o),
            te(a),
            e && y(l),
            te(u, e);
        },
      }
    );
  }
  class Ut extends se {
    constructor(e) {
      super(), re(this, e, null, zt, i, {});
    }
  }
  const Vt = {
      attemptInterval: 2e3,
      attemptIntervalAlt: [2e3, 4e3, 7e3, 11e3, 16e3, 25e3, 40e3],
      maxAttempts: 7,
      //   date: date,
    },
    Jt = ["0", "1", "2", "3", "4", "5", "6"];

  function Kt(t) {
    let n, r;
    return {
      c() {
        (n = w("div")), (r = _(t[0])), M(n, "style", "display:none");
      },
      m(e, t) {
        g(e, n, t), p(n, r);
      },
      p(e, [t]) {
        1 & t && $(r, e[0]);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function Zt(e, t, n) {
    let r = "",
      s = new Date(),
      i =
        3600 * (23 - s.getHours()) +
        60 * (59 - s.getMinutes()) +
        (59 - s.getSeconds());

    function o() {
      let e = Math.floor(i / 3600),
        t = Math.floor((i - 3600 * e) / 60),
        s = Math.floor(i % 60);
      n(
        0,
        (r =
          ("00" + e).slice(-2) +
          ":" +
          ("00" + t).slice(-2) +
          ":" +
          ("00" + s).slice(-2))
      ),
        i--,
        0 == e && 0 == t && 0 == s; // && location.reload(!0) (Reload at midnight)
    }
    return o(), setInterval(o, 1e3), [r];
  }
  class qt extends se {
    constructor(e) {
      super(), re(this, e, Zt, Kt, i, {});
    }
  }

  function Xt(e, t, n) {
    const r = e.slice();
    return (r[10] = t[n]), (r[12] = n), r;
  }

  function Qt(e) {
    let t,
      n,
      r,
      s,
      i,
      o,
      a,
      l,
      u,
      c,
      d,
      h,
      f,
      m,
      k,
      b,
      S,
      D,
      T,
      Y,
      C,
      O,
      P,
      A = Jt[e[3]] + "",
      L = Array(e[1].maxAttempts),
      N = [];
    for (let t = 0; t < L.length; t += 1) N[t] = on(Xt(e, L, t));

    function H(e, t) {
      return 0 == e[3] ? un : e[4] ? ln : an;
    }
    let I = H(e),
      W = I(e),
      R = e[5] && cn();
    return (
      (d = new ae({
        props: {
          primary: !0,
          $$slots: {
            default: [dn],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      d.$on("click", e[6]),
      (S = new qt({})),
      (O = new Rt({})),
      {
        c() {
          (t = w("div")), (n = w("p")), (r = _(A)), (s = x()), (i = w("div"));
          for (let e = 0; e < N.length; e += 1) N[e].c();
          (o = x()),
            (a = w("p")),
            W.c(),
            (l = x()),
            R && R.c(),
            (u = x()),
            (c = w("div")),
            Q(d.$$.fragment),
            (h = x()),
            (f = w("div")),
            (m = w("div")),
            (k = w("button")),
            (k.textContent = "Next"), // Bind on click ?
            (b = x()),
            Q(S.$$.fragment),
            (D = x()),
            (T = w("div")),
            (Y = w("div")),
            (C = x()),
            Q(O.$$.fragment),
            M(n, "class", "text-lg text-custom-line"),
            M(i, "class", "flex justify-center my-2"),
            M(a, "class", "py-1"),
            M(c, "style", "display:none"),
            M(t, "class", "text-center px-3"),
            M(
              k,
              "class",
              "px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm svelte-1r54uzk bg-custom-positive"
            ),
            k.addEventListener("click", function () {
              nextMusic();
            });
          M(m, "class", "flex flex-col justify-center items-center mb-6 mx-3"),
            M(Y, "class", "flex justify-center items-center mb-3"),
            M(T, "class", "bg-custom-highlight py-3 pb-5 mx-3 rounded-t-md");
        },
        m(e, y) {
          g(e, t, y), p(t, n), p(n, r), p(t, s), p(t, i);
          for (let e = 0; e < N.length; e += 1) N[e].m(i, null);
          p(t, o),
            p(t, a),
            W.m(a, null),
            p(t, l),
            R && R.m(t, null),
            p(t, u),
            p(t, c),
            ee(d, c, null),
            g(e, h, y),
            g(e, f, y),
            p(f, m),
            p(m, k),
            p(m, b),
            ee(S, m, null),
            p(f, D),
            p(f, T),
            p(T, Y),
            p(T, C),
            ee(O, T, null),
            (P = !0);
        },
        p(e, n) {
          if (((!P || 8 & n) && A !== (A = Jt[e[3]] + "") && $(r, A), 3 & n)) {
            let t;
            for (L = Array(e[1].maxAttempts), t = 0; t < L.length; t += 1) {
              const r = Xt(e, L, t);
              N[t] ? N[t].p(r, n) : ((N[t] = on(r)), N[t].c(), N[t].m(i, null));
            }
            for (; t < N.length; t += 1) N[t].d(1);
            N.length = L.length;
          }
          I === (I = H(e)) && W
            ? W.p(e, n)
            : (W.d(1), (W = I(e)), W && (W.c(), W.m(a, null))),
            e[5]
              ? R || ((R = cn()), R.c(), R.m(t, u))
              : R && (R.d(1), (R = null));
          const s = {};
          8192 & n &&
            (s.$$scope = {
              dirty: n,
              ctx: e,
            }),
            d.$set(s);
        },
        i(e) {
          P ||
            (Z(d.$$.fragment, e),
            Z(S.$$.fragment, e),
            Z(O.$$.fragment, e),
            (P = !0));
        },
        o(e) {
          q(d.$$.fragment, e),
            q(S.$$.fragment, e),
            q(O.$$.fragment, e),
            (P = !1);
        },
        d(e) {
          e && y(t),
            v(N, e),
            W.d(),
            R && R.d(),
            te(d),
            e && y(h),
            e && y(f),
            te(S),
            te(O);
        },
      }
    );
  }

  function en(t) {
    let n;
    return {
      c() {
        (n = w("div")), M(n, "class", "w-4 h-1 m-0.5 bg-custom-fg");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function tn(e) {
    let t;

    function n(e, t) {
      return e[0][e[12]].isSkipped
        ? sn
        : e[0][e[12]].isCorrect || e[0][e[12]].isSkipped
        ? e[0][e[12]].isCorrect
          ? nn
          : void 0
        : rn;
    }
    let r = n(e),
      s = r && r(e);
    return {
      c() {
        s && s.c(), (t = b());
      },
      m(e, n) {
        s && s.m(e, n), g(e, t, n);
      },
      p(e, i) {
        r !== (r = n(e)) &&
          (s && s.d(1), (s = r && r(e)), s && (s.c(), s.m(t.parentNode, t)));
      },
      d(e) {
        s && s.d(e), e && y(t);
      },
    };
  }

  function nn(e) {
    let t;
    return {
      c() {
        (t = w("div")), M(t, "class", "w-4 h-1 m-0.5 bg-custom-positive");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function rn(e) {
    let t;
    return {
      c() {
        (t = w("div")), M(t, "class", "w-4 h-1 m-0.5 bg-custom-negative");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function sn(e) {
    let t;
    return {
      c() {
        (t = w("div")), M(t, "class", "w-4 h-1 m-0.5 bg-custom-mg");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function on(e) {
    let t;

    function n(e, t) {
      return e[12] <= e[0].length - 1 ? tn : en;
    }
    let r = n(e),
      s = r(e);
    return {
      c() {
        s.c(), (t = b());
      },
      m(e, n) {
        s.m(e, n), g(e, t, n);
      },
      p(e, i) {
        r === (r = n(e)) && s
          ? s.p(e, i)
          : (s.d(1), (s = r(e)), s && (s.c(), s.m(t.parentNode, t)));
      },
      d(e) {
        s.d(e), e && y(t);
      },
    };
  }

  function an(e) {
    let t,
      n,
      r,
      s = (e[0].length * e[1].attemptInterval) / 1e3 + "";
    return {
      c() {
        (t = _("You got today's " + artist + " Heardle within the first ")),
          (n = _(s)),
          (r = _(" seconds."));
      },
      m(e, s) {
        g(e, t, s), g(e, n, s), g(e, r, s);
      },
      p(e, t) {
        3 & t &&
          s !== (s = (e[0].length * e[1].attemptInterval) / 1e3 + "") &&
          $(n, s);
      },
      d(e) {
        e && y(t), e && y(n), e && y(r);
      },
    };
  }

  function ln(e) {
    let t,
      n,
      r,
      s,
      i,
      o = e[1].attemptIntervalAlt[e[0].length - 1] / 1e3 + "",
      a = e[1].attemptIntervalAlt[e[0].length - 1] / 1e3 > 1 ? "s" : "";
    return {
      c() {
        (t = _("Let's-a Go! You got the song right within ")),
          (n = _(o)),
          (r = _("\n                second")),
          (s = _(a)),
          (i = _("."));
      },
      m(e, o) {
        g(e, t, o), g(e, n, o), g(e, r, o), g(e, s, o), g(e, i, o);
      },
      p(e, t) {
        3 & t &&
          o !== (o = e[1].attemptIntervalAlt[e[0].length - 1] / 1e3 + "") &&
          $(n, o),
          3 & t &&
            a !==
              (a =
                e[1].attemptIntervalAlt[e[0].length - 1] / 1e3 > 1
                  ? "s"
                  : "") &&
            $(s, a);
      },
      d(e) {
        e && y(t), e && y(n), e && y(r), e && y(s), e && y(i);
      },
    };
  }

  function un(t) {
    let n;
    return {
      c() {
        n = _("Maybe you'll get it next time!");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function cn(e) {
    let t;
    return {
      c() {
        (t = w("div")),
          (t.textContent = "Copied to clipboard!"),
          M(
            t,
            "class",
            "tracking-widest uppercase text-xs text-custom-line p-3 pb-0 text-center"
          );
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function dn(e) {
    let t, n, r, s, i, o, a;
    return {
      c() {
        (t = _("Share\n                ")),
          (n = k("svg")),
          (r = k("circle")),
          (s = k("circle")),
          (i = k("circle")),
          (o = k("line")),
          (a = k("line"));
      },
      m(e, l) {
        g(e, t, l), g(e, n, l), p(n, r), p(n, s), p(n, i), p(n, o), p(n, a);
      },
      d(e) {
        e && y(t), e && y(n);
      },
    };
  }

  function hn(e) {
    let t,
      n,
      r = e[2] && Qt(e);
    return {
      c() {
        r && r.c(), (t = b());
      },
      m(e, s) {
        r && r.m(e, s), g(e, t, s), (n = !0);
      },
      p(e, [n]) {
        e[2]
          ? r
            ? (r.p(e, n), 4 & n && Z(r, 1))
            : ((r = Qt(e)), r.c(), Z(r, 1), r.m(t.parentNode, t))
          : r &&
            (J(),
            q(r, 1, 1, () => {
              r = null;
            }),
            K());
      },
      i(e) {
        n || (Z(r), (n = !0));
      },
      o(e) {
        q(r), (n = !1);
      },
      d(e) {
        r && r.d(e), e && y(t);
      },
    };
  }

  function fn(e, t, n) {
    // console.log("current", t);
    let { userGuesses: r } = t,
      { currentHeardle: s } = t,
      { config: i } = t,
      { hasFinished: o } = t,
      { gotCorrect: a } = t,
      { guessRef: l } = t,
      { isPrime: u } = t,
      c = !1;
    return (
      A(),
      (e.$$set = (e) => {
        "userGuesses" in e && n(0, (r = e.userGuesses)),
          "currentHeardle" in e && n(7, (s = e.currentHeardle)),
          "config" in e && n(1, (i = e.config)),
          "hasFinished" in e && n(2, (o = e.hasFinished)),
          "gotCorrect" in e && n(8, (a = e.gotCorrect)),
          "guessRef" in e && n(3, (l = e.guessRef)),
          "isPrime" in e && n(4, (u = e.isPrime));
      }),
      [
        r,
        i,
        o,
        l,
        u,
        c,
        () => {
          let e = artist + " Heardle #" + (s.id + 1),
            t = "";
          a
            ? r.length < i.maxAttempts / 3
              ? (t += "🔊")
              : r.length < (i.maxAttempts / 3) * 2
              ? (t += "🔉")
              : r.length <= i.maxAttempts && (t += "🔈")
            : (t += "🔇");
          for (let e = 0; e < i.maxAttempts; e++)
            r.length > e
              ? 1 == r[e].isCorrect
                ? (t += "🟩")
                : 1 == r[e].isSkipped
                ? (t += "⬛️")
                : (t += "🟥")
              : (t += "⬜️");
          let seconds = i.attemptIntervalAlt[r.length - 1] / 1e3;
          let o =
            e +
            "\n\n" +
            (a
              ? "Got this " +
                artist +
                " Heardle within " +
                seconds +
                " second" +
                (seconds > 1 ? "s" : "")
              : "Failed this " + artist + " Heardle") +
            "\n\n" +
            t +
            "\n\n";
          // + "https://joywave-heardle.glitch.me/"
          if (
            !navigator.share ||
            !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            ) ||
            /Firefox/i.test(navigator.userAgent)
          )
            return navigator &&
              navigator.clipboard &&
              navigator.clipboard.writeText
              ? (pe("clickShareClipboard", {
                  name: "clickShareClipboard",
                }),
                n(5, (c = !0)),
                setTimeout(() => {
                  n(5, (c = !1));
                }, 2e3),
                navigator.clipboard.writeText(o))
              : Promise.reject(
                  "There was a problem copying your result to the clipboard"
                );
          navigator
            .share({
              text: o,
            })
            .then(() => {
              pe("clickSharePanel", {
                name: "clickSharePanel",
              });
            })
            .catch(console.error);
        },
        s,
        a,
      ]
    );
  }
  class mn extends se {
    constructor(e) {
      super(),
        re(this, e, fn, hn, i, {
          userGuesses: 0,
          currentHeardle: 0,
          config: 1,
          hasFinished: 2,
          gotCorrect: 8,
          guessRef: 3,
          isPrime: 4,
        });
    }
  }

  function pn(e) {
    let t;
    return {
      c() {
        t = _("Play");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function gn(e) {
    let t, n, r, s, i, o, a, l, u, c, z, v;
    return (
      (u = new ae({
        props: {
          primary: !0,
          $$slots: {
            default: [pn],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      u.$on("click", e[0]),
      {
        c() {
          (t = w("div")),
            (n = w("div")),
            (n.innerHTML =
              '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7"><circle cx="5.5" cy="17.5" r="2.5"></circle><circle cx="17.5" cy="15.5" r="2.5"></circle><path d="M8 17V5l12-2v12"></path></svg></div> \n        <div><p>Listen to the intro, then find the correct ' +
              artist +
              " song in the list.</p></div>"),
            (r = x()),
            (s = w("div")),
            (s.innerHTML =
              '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></div> \n        <div><p>Skipped or incorrect attempts unlock more of the intro</p></div>'),
            (i = x()),
            (o = w("div")),
            (o.innerHTML =
              '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-7"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></div> \n  <div><p>Answer in as few tries as possible.</p></div>'),
            (a = x()),
            (z = w("div")),
            (z.innerHTML =
              '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M 2.324219 3.484375 C 1.039062 3.484375 0 4.523438 0 5.804688 C 0 7.089844 1.039062 8.128906 2.324219 8.128906 C 3.605469 8.128906 4.644531 7.089844 4.644531 5.804688 C 4.644531 4.523438 3.605469 3.484375 2.324219 3.484375 Z M 2.324219 9.675781 C 1.039062 9.675781 0 10.71875 0 12 C 0 13.28125 1.039062 14.324219 2.324219 14.324219 C 3.605469 14.324219 4.644531 13.28125 4.644531 12 C 4.644531 10.71875 3.605469 9.675781 2.324219 9.675781 Z M 2.324219 15.871094 C 1.039062 15.871094 0 16.910156 0 18.195312 C 0 19.476562 1.039062 20.515625 2.324219 20.515625 C 3.605469 20.515625 4.644531 19.476562 4.644531 18.195312 C 4.644531 16.910156 3.605469 15.871094 2.324219 15.871094 Z M 7.742188 7.355469 L 22.453125 7.355469 C 23.308594 7.355469 24 6.660156 24 5.804688 C 24 4.949219 23.308594 4.257812 22.453125 4.257812 L 7.742188 4.257812 C 6.886719 4.257812 6.195312 4.949219 6.195312 5.804688 C 6.195312 6.660156 6.886719 7.355469 7.742188 7.355469 Z M 22.453125 10.453125 L 7.742188 10.453125 C 6.886719 10.453125 6.195312 11.144531 6.195312 12 C 6.195312 12.855469 6.886719 13.546875 7.742188 13.546875 L 22.453125 13.546875 C 23.308594 13.546875 24 12.855469 24 12 C 24 11.144531 23.308594 10.453125 22.453125 10.453125 Z M 22.453125 16.644531 L 7.742188 16.644531 C 6.886719 16.644531 6.195312 17.339844 6.195312 18.195312 C 6.195312 19.050781 6.886719 19.742188 7.742188 19.742188 L 22.453125 19.742188 C 23.308594 19.742188 24 19.050781 24 18.195312 C 24 17.339844 23.308594 16.644531 22.453125 16.644531 Z M 22.453125 16.644531 "></path></svg></div> \n        <div><p>You can use the top right button to see the list of tracks</p></div>'),
            (v = x()),
            (l = w("div")),
            Q(u.$$.fragment),
            M(n, "class", "flex items-center mb-6"),
            M(s, "class", "flex items-center mb-6"),
            M(o, "class", "flex items-center mb-6"),
            M(z, "class", "flex items-center mb-6"),
            M(l, "class", "justify-center flex py-2 mt-2");
        },
        m(e, d) {
          g(e, t, d),
            p(t, n),
            p(t, r),
            p(t, s),
            p(t, i),
            p(t, o),
            p(t, a),
            p(t, z),
            p(t, v),
            p(t, l),
            ee(u, l, null),
            (c = !0);
        },
        p(e, [t]) {
          const n = {};
          4 & t &&
            (n.$$scope = {
              dirty: t,
              ctx: e,
            }),
            u.$set(n);
        },
        i(e) {
          c || (Z(u.$$.fragment, e), (c = !0));
        },
        o(e) {
          q(u.$$.fragment, e), (c = !1);
        },
        d(e) {
          e && y(t), te(u);
        },
      }
    );
  }

  function yn(e) {
    const t = A();
    return [() => t("close")];
  }
  class vn extends se {
    constructor(e) {
      super(), re(this, e, yn, gn, i, {});
    }
  }

  function wn(e, t, n) {
    const r = e.slice();
    return (r[15] = t[n]), (r[17] = n), r;
  }

  function kn(t) {
    let n;
    return {
      c() {
        (n = w("div")),
          (n.textContent = "Play daily to see your stats"),
          M(n, "class", "text-center py-3 text-custom-line font-semibold");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function _n(e) {
    let t,
      n,
      r,
      s,
      i,
      o,
      a,
      l,
      u,
      c,
      d,
      h,
      f,
      m,
      k,
      b,
      S,
      D,
      T,
      Y,
      C,
      O,
      P,
      A,
      L,
      N,
      H,
      I,
      W,
      R,
      F,
      G,
      E,
      j,
      B = (e[6] > 0 ? ((e[8] / e[6]) * 100).toFixed(1) : 0) + "",
      z =
        e[11].slice(-1)[0].hasFinished || e[7].length < 2
          ? e[7].slice(-1)[0] + ""
          : e[7].slice(-2)[0] + "",
      U = Math.max(...e[7]) + "",
      V = e[9],
      J = [];
    for (let t = 0; t < V.length; t += 1) J[t] = Mn(wn(e, V, t));
    return {
      c() {
        t = w("div");
        for (let e = 0; e < J.length; e += 1) J[e].c();
        (n = x()),
          (r = w("div")),
          (s = w("div")),
          (i = w("div")),
          (o = _(e[6])),
          (a = x()),
          (l = w("div")),
          (l.textContent = "Played"),
          (u = x()),
          (c = w("div")),
          (d = w("div")),
          (h = _(e[8])),
          (f = x()),
          (m = w("div")),
          (m.textContent = "Won"),
          (k = x()),
          (b = w("div")),
          (S = w("div")),
          (D = _(B)),
          (T = _("%")),
          (Y = x()),
          (C = w("div")),
          (C.textContent = "Win rate"),
          (O = x()),
          (P = w("div")),
          (A = w("div")),
          (L = w("div")),
          (N = _(z)),
          (H = x()),
          (I = w("div")),
          (I.textContent = "Current Streak"),
          (W = x()),
          (R = w("div")),
          (F = w("div")),
          (G = _(U)),
          (E = x()),
          (j = w("div")),
          (j.textContent = "Max Streak"),
          M(t, "class", "flex justify-between py-3"),
          M(i, "class", "text-xl font-semibold"),
          M(l, "class", "text-custom-line text-sm "),
          M(s, "class", "flex-1"),
          M(d, "class", "text-xl font-semibold"),
          M(m, "class", "text-custom-line text-sm "),
          M(c, "class", "flex-1"),
          M(S, "class", "text-xl font-semibold"),
          M(C, "class", "text-custom-line text-sm"),
          M(b, "class", "flex-1"),
          M(r, "class", "flex justify-between text-center w-full py-3"),
          M(L, "class", "text-xl font-semibold"),
          M(I, "class", "text-custom-line text-sm"),
          M(A, "class", "flex-1"),
          M(F, "class", "text-xl font-semibold"),
          M(j, "class", "text-custom-line text-sm"),
          M(R, "class", "flex-1"),
          M(P, "class", "flex justify-between text-center w-full py-3 pt-0");
      },
      m(e, y) {
        g(e, t, y);
        for (let e = 0; e < J.length; e += 1) J[e].m(t, null);
        g(e, n, y),
          g(e, r, y),
          p(r, s),
          p(s, i),
          p(i, o),
          p(s, a),
          p(s, l),
          p(r, u),
          p(r, c),
          p(c, d),
          p(d, h),
          p(c, f),
          p(c, m),
          p(r, k),
          p(r, b),
          p(b, S),
          p(S, D),
          p(S, T),
          p(b, Y),
          p(b, C),
          g(e, O, y),
          g(e, P, y),
          p(P, A),
          p(A, L),
          p(L, N),
          p(A, H),
          p(A, I),
          p(P, W),
          p(P, R),
          p(R, F),
          p(F, G),
          p(R, E),
          p(R, j);
      },
      p(e, n) {
        if (1567 & n) {
          let r;
          for (V = e[9], r = 0; r < V.length; r += 1) {
            const s = wn(e, V, r);
            J[r] ? J[r].p(s, n) : ((J[r] = Mn(s)), J[r].c(), J[r].m(t, null));
          }
          for (; r < J.length; r += 1) J[r].d(1);
          J.length = V.length;
        }
        64 & n && $(o, e[6]),
          256 & n && $(h, e[8]),
          320 & n &&
            B !==
              (B = (e[6] > 0 ? ((e[8] / e[6]) * 100).toFixed(1) : 0) + "") &&
            $(D, B),
          128 & n && z !== (z = e[7].slice(-1)[0] + "") && $(N, z),
          128 & n && U !== (U = Math.max(...e[7]) + "") && $(G, U);
      },
      d(e) {
        e && y(t), v(J, e), e && y(n), e && y(r), e && y(O), e && y(P);
      },
    };
  }

  function xn(e) {
    let t,
      n,
      r,
      s = ((e[17] + 1) * e[0].attemptInterval) / 1e3 + "";
    return {
      c() {
        (t = _("< ")), (n = _(s)), (r = _("s"));
      },
      m(e, s) {
        g(e, t, s), g(e, n, s), g(e, r, s);
      },
      p(e, t) {
        1 & t &&
          s !== (s = ((e[17] + 1) * e[0].attemptInterval) / 1e3 + "") &&
          $(n, s);
      },
      d(e) {
        e && y(t), e && y(n), e && y(r);
      },
    };
  }

  function bn(e) {
    let t,
      n,
      r,
      s,
      i,
      o = e[17] + 1 + "";
    return {
      c() {
        (t = w("span")),
          (n = _(o)),
          (r = _("°")),
          (s = x()),
          (i = w("span")),
          Y(t, "font-semibold", e[17] == e[1] - 1 && e[2]),
          Y(t, "text-custom-positive", e[17] == e[1] - 1 && 0 != e[4] && e[2]),
          Y(t, "text-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]),
          M(i, "class", "text-custom-positive");
      },
      m(e, o) {
        g(e, t, o), p(t, n), p(t, r), g(e, s, o), g(e, i, o);
      },
      p(e, n) {
        6 & n && Y(t, "font-semibold", e[17] == e[1] - 1 && e[2]),
          22 & n &&
            Y(
              t,
              "text-custom-positive",
              e[17] == e[1] - 1 && 0 != e[4] && e[2]
            ),
          22 & n &&
            Y(t, "text-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]);
      },
      d(e) {
        e && y(t), e && y(s), e && y(i);
      },
    };
  }

  function Sn(e) {
    let t, n, r;
    return {
      c() {
        (t = k("svg")),
          (n = k("line")),
          (r = k("line")),
          M(n, "x1", "18"),
          M(n, "y1", "6"),
          M(n, "x2", "6"),
          M(n, "y2", "18"),
          M(r, "x1", "6"),
          M(r, "y1", "6"),
          M(r, "x2", "18"),
          M(r, "y2", "18"),
          M(t, "class", "mx-auto"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "16"),
          M(t, "height", "16"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round"),
          Y(t, "text-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]);
      },
      m(e, s) {
        g(e, t, s), p(t, n), p(t, r);
      },
      p(e, n) {
        22 & n &&
          Y(t, "text-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Mn(e) {
    let t,
      n,
      r,
      s,
      i,
      o,
      a,
      l,
      u = (e[15] > 0 ? e[15] : " ") + "";

    function c(e, t) {
      return e[17] === e[9].length - 1 ? Sn : e[3] ? bn : xn;
    }
    let d = c(e),
      h = d(e);
    return {
      c() {
        (t = w("div")),
          (n = w("div")),
          (r = w("div")),
          (s = w("div")),
          (i = _(u)),
          (o = x()),
          (a = w("div")),
          h.c(),
          (l = x()),
          M(s, "class", "h-full absolute text-center w-full py-1 text-xs "),
          Y(s, "bg-custom-positive", e[17] == e[1] - 1 && 0 != e[4] && e[2]),
          Y(s, "bg-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]),
          M(r, "class", "absolute bg-custom-mg w-6"),
          T(r, "height", (e[15] / e[10]) * 100 + "%"),
          M(n, "class", "h-32 relative w-9 flex justify-center items-end"),
          M(
            a,
            "class",
            "text-center border-right text-xs pt-1 text-custom-line"
          ),
          M(t, "class", "flex flex-col items-stretch ");
      },
      m(e, u) {
        g(e, t, u),
          p(t, n),
          p(n, r),
          p(r, s),
          p(s, i),
          p(t, o),
          p(t, a),
          h.m(a, null),
          p(t, l);
      },
      p(e, t) {
        512 & t && u !== (u = (e[15] > 0 ? e[15] : " ") + "") && $(i, u),
          22 & t &&
            Y(s, "bg-custom-positive", e[17] == e[1] - 1 && 0 != e[4] && e[2]),
          22 & t &&
            Y(s, "bg-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]),
          1536 & t && T(r, "height", (e[15] / e[10]) * 100 + "%"),
          d === (d = c(e)) && h
            ? h.p(e, t)
            : (h.d(1), (h = d(e)), h && (h.c(), h.m(a, null)));
      },
      d(e) {
        e && y(t), h.d();
      },
    };
  }

  function $n(t) {
    let n;

    function r(e, t) {
      return e[5] ? _n : kn;
    }
    let s = r(t),
      i = s(t);
    return {
      c() {
        i.c(), (n = b());
      },
      m(e, t) {
        i.m(e, t), g(e, n, t);
      },
      p(e, [t]) {
        s === (s = r(e)) && i
          ? i.p(e, t)
          : (i.d(1), (i = s(e)), i && (i.c(), i.m(n.parentNode, n)));
      },
      i: e,
      o: e,
      d(e) {
        i.d(e), e && y(n);
      },
    };
  }

  function Dn(e, t, n) {
    let { userStats: r } = t,
      { config: s } = t,
      { todaysScore: i } = t,
      { hasFinished: o } = t,
      { daysSince: a } = t,
      l = !1,
      u = 0,
      c = [],
      d = [],
      h = 0,
      { isPrime: f } = t,
      { guessRef: m } = t,
      p = [];
    for (let e = 0; e < s.maxAttempts + 1; e++) p[e] = 0;
    let g = 0;
    if (r.length > 0) {
      l = !0;
      for (let e = 0; e < a + 1; e++) d.push(0);
      for (let e in r)
        !0 === r[e].hasFinished &&
          (++u,
          !0 === r[e].gotCorrect
            ? ((d[r[e].id] = 1),
              ++h,
              ++p[r[e].score - 1],
              p[r[e].score - 1] > g && (g = p[r[e].score - 1]))
            : (++p[s.maxAttempts],
              p[s.maxAttempts] > g && (g = p[s.maxAttempts])));
      c = d.reduce((e, t) => (t ? e[e.length - 1]++ : e.push(0), e), [0]);
    }
    return (
      (e.$$set = (e) => {
        "userStats" in e && n(11, (r = e.userStats)),
          "config" in e && n(0, (s = e.config)),
          "todaysScore" in e && n(1, (i = e.todaysScore)),
          "hasFinished" in e && n(2, (o = e.hasFinished)),
          "daysSince" in e && n(12, (a = e.daysSince)),
          "isPrime" in e && n(3, (f = e.isPrime)),
          "guessRef" in e && n(4, (m = e.guessRef));
      }),
      [s, i, o, f, m, l, u, c, h, p, g, r, a]
    );
  }
  class Tn extends se {
    constructor(e) {
      super(),
        re(this, e, Dn, $n, i, {
          userStats: 11,
          config: 0,
          todaysScore: 1,
          hasFinished: 2,
          daysSince: 12,
          isPrime: 3,
          guessRef: 4,
        });
    }
  }
  var Yn = yt(function (e, t) {
    e.exports = (function () {
      var t, n;

      function r() {
        return t.apply(null, arguments);
      }

      function s(e) {
        t = e;
      }

      function i(e) {
        return (
          e instanceof Array ||
          "[object Array]" === Object.prototype.toString.call(e)
        );
      }

      function o(e) {
        return (
          null != e && "[object Object]" === Object.prototype.toString.call(e)
        );
      }

      function a(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }

      function l(e) {
        if (Object.getOwnPropertyNames)
          return 0 === Object.getOwnPropertyNames(e).length;
        var t;
        for (t in e) if (a(e, t)) return !1;
        return !0;
      }

      function u(e) {
        return void 0 === e;
      }

      function c(e) {
        return (
          "number" == typeof e ||
          "[object Number]" === Object.prototype.toString.call(e)
        );
      }

      function d(e) {
        return (
          e instanceof Date ||
          "[object Date]" === Object.prototype.toString.call(e)
        );
      }

      function h(e, t) {
        var n,
          r = [];
        for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
        return r;
      }

      function f(e, t) {
        for (var n in t) a(t, n) && (e[n] = t[n]);
        return (
          a(t, "toString") && (e.toString = t.toString),
          a(t, "valueOf") && (e.valueOf = t.valueOf),
          e
        );
      }

      function m(e, t, n, r) {
        return Jn(e, t, n, r, !0).utc();
      }

      function p() {
        return {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidEra: null,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1,
          parsedDateParts: [],
          era: null,
          meridiem: null,
          rfc2822: !1,
          weekdayMismatch: !1,
        };
      }

      function g(e) {
        return null == e._pf && (e._pf = p()), e._pf;
      }

      function y(e) {
        if (null == e._isValid) {
          var t = g(e),
            r = n.call(t.parsedDateParts, function (e) {
              return null != e;
            }),
            s =
              !isNaN(e._d.getTime()) &&
              t.overflow < 0 &&
              !t.empty &&
              !t.invalidEra &&
              !t.invalidMonth &&
              !t.invalidWeekday &&
              !t.weekdayMismatch &&
              !t.nullInput &&
              !t.invalidFormat &&
              !t.userInvalidated &&
              (!t.meridiem || (t.meridiem && r));
          if (
            (e._strict &&
              (s =
                s &&
                0 === t.charsLeftOver &&
                0 === t.unusedTokens.length &&
                void 0 === t.bigHour),
            null != Object.isFrozen && Object.isFrozen(e))
          )
            return s;
          e._isValid = s;
        }
        return e._isValid;
      }

      function v(e) {
        var t = m(NaN);
        return null != e ? f(g(t), e) : (g(t).userInvalidated = !0), t;
      }
      n = Array.prototype.some
        ? Array.prototype.some
        : function (e) {
            var t,
              n = Object(this),
              r = n.length >>> 0;
            for (t = 0; t < r; t++)
              if (t in n && e.call(this, n[t], t, n)) return !0;
            return !1;
          };
      var w = (r.momentProperties = []),
        k = !1;

      function _(e, t) {
        var n, r, s;
        if (
          (u(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
          u(t._i) || (e._i = t._i),
          u(t._f) || (e._f = t._f),
          u(t._l) || (e._l = t._l),
          u(t._strict) || (e._strict = t._strict),
          u(t._tzm) || (e._tzm = t._tzm),
          u(t._isUTC) || (e._isUTC = t._isUTC),
          u(t._offset) || (e._offset = t._offset),
          u(t._pf) || (e._pf = g(t)),
          u(t._locale) || (e._locale = t._locale),
          w.length > 0)
        )
          for (n = 0; n < w.length; n++) u((s = t[(r = w[n])])) || (e[r] = s);
        return e;
      }

      function x(e) {
        _(this, e),
          (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
          this.isValid() || (this._d = new Date(NaN)),
          !1 === k && ((k = !0), r.updateOffset(this), (k = !1));
      }

      function b(e) {
        return e instanceof x || (null != e && null != e._isAMomentObject);
      }

      function S(e) {
        !1 === r.suppressDeprecationWarnings &&
          "undefined" != typeof console &&
          console.warn &&
          console.warn("Deprecation warning: " + e);
      }

      function M(e, t) {
        var n = !0;
        return f(function () {
          if (
            (null != r.deprecationHandler && r.deprecationHandler(null, e), n)
          ) {
            var s,
              i,
              o,
              l = [];
            for (i = 0; i < arguments.length; i++) {
              if (((s = ""), "object" == typeof arguments[i])) {
                for (o in ((s += "\n[" + i + "] "), arguments[0]))
                  a(arguments[0], o) &&
                    (s += o + ": " + arguments[0][o] + ", ");
                s = s.slice(0, -2);
              } else s = arguments[i];
              l.push(s);
            }
            S(
              e +
                "\nArguments: " +
                Array.prototype.slice.call(l).join("") +
                "\n" +
                new Error().stack
            ),
              (n = !1);
          }
          return t.apply(this, arguments);
        }, t);
      }
      var $,
        D = {};

      function T(e, t) {
        null != r.deprecationHandler && r.deprecationHandler(e, t),
          D[e] || (S(t), (D[e] = !0));
      }

      function Y(e) {
        return (
          ("undefined" != typeof Function && e instanceof Function) ||
          "[object Function]" === Object.prototype.toString.call(e)
        );
      }

      function C(e) {
        var t, n;
        for (n in e)
          a(e, n) && (Y((t = e[n])) ? (this[n] = t) : (this["_" + n] = t));
        (this._config = e),
          (this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
              "|" +
              /\d{1,2}/.source
          ));
      }

      function O(e, t) {
        var n,
          r = f({}, e);
        for (n in t)
          a(t, n) &&
            (o(e[n]) && o(t[n])
              ? ((r[n] = {}), f(r[n], e[n]), f(r[n], t[n]))
              : null != t[n]
              ? (r[n] = t[n])
              : delete r[n]);
        for (n in e) a(e, n) && !a(t, n) && o(e[n]) && (r[n] = f({}, r[n]));
        return r;
      }

      function P(e) {
        null != e && this.set(e);
      }
      (r.suppressDeprecationWarnings = !1),
        (r.deprecationHandler = null),
        ($ = Object.keys
          ? Object.keys
          : function (e) {
              var t,
                n = [];
              for (t in e) a(e, t) && n.push(t);
              return n;
            });
      var A = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L",
      };

      function L(e, t, n) {
        var r = this._calendar[e] || this._calendar.sameElse;
        return Y(r) ? r.call(t, n) : r;
      }

      function N(e, t, n) {
        var r = "" + Math.abs(e),
          s = t - r.length;
        return (
          (e >= 0 ? (n ? "+" : "") : "-") +
          Math.pow(10, Math.max(0, s)).toString().substr(1) +
          r
        );
      }
      var H =
          /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        I = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        W = {},
        R = {};

      function F(e, t, n, r) {
        var s = r;
        "string" == typeof r &&
          (s = function () {
            return this[r]();
          }),
          e && (R[e] = s),
          t &&
            (R[t[0]] = function () {
              return N(s.apply(this, arguments), t[1], t[2]);
            }),
          n &&
            (R[n] = function () {
              return this.localeData().ordinal(s.apply(this, arguments), e);
            });
      }

      function G(e) {
        return e.match(/\[[\s\S]/)
          ? e.replace(/^\[|\]$/g, "")
          : e.replace(/\\/g, "");
      }

      function E(e) {
        var t,
          n,
          r = e.match(H);
        for (t = 0, n = r.length; t < n; t++)
          R[r[t]] ? (r[t] = R[r[t]]) : (r[t] = G(r[t]));
        return function (t) {
          var s,
            i = "";
          for (s = 0; s < n; s++) i += Y(r[s]) ? r[s].call(t, e) : r[s];
          return i;
        };
      }

      function j(e, t) {
        return e.isValid()
          ? ((t = B(t, e.localeData())), (W[t] = W[t] || E(t)), W[t](e))
          : e.localeData().invalidDate();
      }

      function B(e, t) {
        var n = 5;

        function r(e) {
          return t.longDateFormat(e) || e;
        }
        for (I.lastIndex = 0; n >= 0 && I.test(e); )
          (e = e.replace(I, r)), (I.lastIndex = 0), (n -= 1);
        return e;
      }
      var z = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A",
      };

      function U(e) {
        var t = this._longDateFormat[e],
          n = this._longDateFormat[e.toUpperCase()];
        return t || !n
          ? t
          : ((this._longDateFormat[e] = n
              .match(H)
              .map(function (e) {
                return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e
                  ? e.slice(1)
                  : e;
              })
              .join("")),
            this._longDateFormat[e]);
      }
      var V = "Invalid date";

      function J() {
        return this._invalidDate;
      }
      var K = "%d",
        Z = /\d{1,2}/;

      function q(e) {
        return this._ordinal.replace("%d", e);
      }
      var X = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years",
      };

      function Q(e, t, n, r) {
        var s = this._relativeTime[n];
        return Y(s) ? s(e, t, n, r) : s.replace(/%d/i, e);
      }

      function ee(e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return Y(n) ? n(t) : n.replace(/%s/i, t);
      }
      var te = {};

      function ne(e, t) {
        var n = e.toLowerCase();
        te[n] = te[n + "s"] = te[t] = e;
      }

      function re(e) {
        return "string" == typeof e ? te[e] || te[e.toLowerCase()] : void 0;
      }

      function se(e) {
        var t,
          n,
          r = {};
        for (n in e) a(e, n) && (t = re(n)) && (r[t] = e[n]);
        return r;
      }
      var ie = {};

      function oe(e, t) {
        ie[e] = t;
      }

      function ae(e) {
        var t,
          n = [];
        for (t in e)
          a(e, t) &&
            n.push({
              unit: t,
              priority: ie[t],
            });
        return (
          n.sort(function (e, t) {
            return e.priority - t.priority;
          }),
          n
        );
      }

      function le(e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
      }

      function ue(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
      }

      function ce(e) {
        var t = +e,
          n = 0;
        return 0 !== t && isFinite(t) && (n = ue(t)), n;
      }

      function de(e, t) {
        return function (n) {
          return null != n
            ? (fe(this, e, n), r.updateOffset(this, t), this)
            : he(this, e);
        };
      }

      function he(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
      }

      function fe(e, t, n) {
        e.isValid() &&
          !isNaN(n) &&
          ("FullYear" === t &&
          le(e.year()) &&
          1 === e.month() &&
          29 === e.date()
            ? ((n = ce(n)),
              e._d["set" + (e._isUTC ? "UTC" : "") + t](
                n,
                e.month(),
                Qe(n, e.month())
              ))
            : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
      }

      function me(e) {
        return Y(this[(e = re(e))]) ? this[e]() : this;
      }

      function pe(e, t) {
        if ("object" == typeof e) {
          var n,
            r = ae((e = se(e)));
          for (n = 0; n < r.length; n++) this[r[n].unit](e[r[n].unit]);
        } else if (Y(this[(e = re(e))])) return this[e](t);
        return this;
      }
      var ge,
        ye = /\d/,
        ve = /\d\d/,
        we = /\d{3}/,
        ke = /\d{4}/,
        _e = /[+-]?\d{6}/,
        xe = /\d\d?/,
        be = /\d\d\d\d?/,
        Se = /\d\d\d\d\d\d?/,
        Me = /\d{1,3}/,
        $e = /\d{1,4}/,
        De = /[+-]?\d{1,6}/,
        Te = /\d+/,
        Ye = /[+-]?\d+/,
        Ce = /Z|[+-]\d\d:?\d\d/gi,
        Oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
        Pe = /[+-]?\d+(\.\d{1,3})?/,
        Ae =
          /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

      function Le(e, t, n) {
        ge[e] = Y(t)
          ? t
          : function (e, r) {
              return e && n ? n : t;
            };
      }

      function Ne(e, t) {
        return a(ge, e) ? ge[e](t._strict, t._locale) : new RegExp(He(e));
      }

      function He(e) {
        return Ie(
          e
            .replace("\\", "")
            .replace(
              /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
              function (e, t, n, r, s) {
                return t || n || r || s;
              }
            )
        );
      }

      function Ie(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      }
      ge = {};
      var We = {};

      function Re(e, t) {
        var n,
          r = t;
        for (
          "string" == typeof e && (e = [e]),
            c(t) &&
              (r = function (e, n) {
                n[t] = ce(e);
              }),
            n = 0;
          n < e.length;
          n++
        )
          We[e[n]] = r;
      }

      function Fe(e, t) {
        Re(e, function (e, n, r, s) {
          (r._w = r._w || {}), t(e, r._w, r, s);
        });
      }

      function Ge(e, t, n) {
        null != t && a(We, e) && We[e](t, n._a, n, e);
      }
      var Ee,
        je = 0,
        Be = 1,
        ze = 2,
        Ue = 3,
        Ve = 4,
        Je = 5,
        Ke = 6,
        Ze = 7,
        qe = 8;

      function Xe(e, t) {
        return ((e % t) + t) % t;
      }

      function Qe(e, t) {
        if (isNaN(e) || isNaN(t)) return NaN;
        var n = Xe(t, 12);
        return (
          (e += (t - n) / 12), 1 === n ? (le(e) ? 29 : 28) : 31 - ((n % 7) % 2)
        );
      }
      (Ee = Array.prototype.indexOf
        ? Array.prototype.indexOf
        : function (e) {
            var t;
            for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
            return -1;
          }),
        F("M", ["MM", 2], "Mo", function () {
          return this.month() + 1;
        }),
        F("MMM", 0, 0, function (e) {
          return this.localeData().monthsShort(this, e);
        }),
        F("MMMM", 0, 0, function (e) {
          return this.localeData().months(this, e);
        }),
        ne("month", "M"),
        oe("month", 8),
        Le("M", xe),
        Le("MM", xe, ve),
        Le("MMM", function (e, t) {
          return t.monthsShortRegex(e);
        }),
        Le("MMMM", function (e, t) {
          return t.monthsRegex(e);
        }),
        Re(["M", "MM"], function (e, t) {
          t[Be] = ce(e) - 1;
        }),
        Re(["MMM", "MMMM"], function (e, t, n, r) {
          var s = n._locale.monthsParse(e, r, n._strict);
          null != s ? (t[Be] = s) : (g(n).invalidMonth = e);
        });
      var et =
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        tt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        nt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        rt = Ae,
        st = Ae;

      function it(e, t) {
        return e
          ? i(this._months)
            ? this._months[e.month()]
            : this._months[
                (this._months.isFormat || nt).test(t) ? "format" : "standalone"
              ][e.month()]
          : i(this._months)
          ? this._months
          : this._months.standalone;
      }

      function ot(e, t) {
        return e
          ? i(this._monthsShort)
            ? this._monthsShort[e.month()]
            : this._monthsShort[nt.test(t) ? "format" : "standalone"][e.month()]
          : i(this._monthsShort)
          ? this._monthsShort
          : this._monthsShort.standalone;
      }

      function at(e, t, n) {
        var r,
          s,
          i,
          o = e.toLocaleLowerCase();
        if (!this._monthsParse)
          for (
            this._monthsParse = [],
              this._longMonthsParse = [],
              this._shortMonthsParse = [],
              r = 0;
            r < 12;
            ++r
          )
            (i = m([2e3, r])),
              (this._shortMonthsParse[r] = this.monthsShort(
                i,
                ""
              ).toLocaleLowerCase()),
              (this._longMonthsParse[r] = this.months(
                i,
                ""
              ).toLocaleLowerCase());
        return n
          ? "MMM" === t
            ? -1 !== (s = Ee.call(this._shortMonthsParse, o))
              ? s
              : null
            : -1 !== (s = Ee.call(this._longMonthsParse, o))
            ? s
            : null
          : "MMM" === t
          ? -1 !== (s = Ee.call(this._shortMonthsParse, o)) ||
            -1 !== (s = Ee.call(this._longMonthsParse, o))
            ? s
            : null
          : -1 !== (s = Ee.call(this._longMonthsParse, o)) ||
            -1 !== (s = Ee.call(this._shortMonthsParse, o))
          ? s
          : null;
      }

      function lt(e, t, n) {
        var r, s, i;
        if (this._monthsParseExact) return at.call(this, e, t, n);
        for (
          this._monthsParse ||
            ((this._monthsParse = []),
            (this._longMonthsParse = []),
            (this._shortMonthsParse = [])),
            r = 0;
          r < 12;
          r++
        ) {
          if (
            ((s = m([2e3, r])),
            n &&
              !this._longMonthsParse[r] &&
              ((this._longMonthsParse[r] = new RegExp(
                "^" + this.months(s, "").replace(".", "") + "$",
                "i"
              )),
              (this._shortMonthsParse[r] = new RegExp(
                "^" + this.monthsShort(s, "").replace(".", "") + "$",
                "i"
              ))),
            n ||
              this._monthsParse[r] ||
              ((i = "^" + this.months(s, "") + "|^" + this.monthsShort(s, "")),
              (this._monthsParse[r] = new RegExp(i.replace(".", ""), "i"))),
            n && "MMMM" === t && this._longMonthsParse[r].test(e))
          )
            return r;
          if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
          if (!n && this._monthsParse[r].test(e)) return r;
        }
      }

      function ut(e, t) {
        var n;
        if (!e.isValid()) return e;
        if ("string" == typeof t)
          if (/^\d+$/.test(t)) t = ce(t);
          else if (!c((t = e.localeData().monthsParse(t)))) return e;
        return (
          (n = Math.min(e.date(), Qe(e.year(), t))),
          e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
          e
        );
      }

      function ct(e) {
        return null != e
          ? (ut(this, e), r.updateOffset(this, !0), this)
          : he(this, "Month");
      }

      function dt() {
        return Qe(this.year(), this.month());
      }

      function ht(e) {
        return this._monthsParseExact
          ? (a(this, "_monthsRegex") || mt.call(this),
            e ? this._monthsShortStrictRegex : this._monthsShortRegex)
          : (a(this, "_monthsShortRegex") || (this._monthsShortRegex = rt),
            this._monthsShortStrictRegex && e
              ? this._monthsShortStrictRegex
              : this._monthsShortRegex);
      }

      function ft(e) {
        return this._monthsParseExact
          ? (a(this, "_monthsRegex") || mt.call(this),
            e ? this._monthsStrictRegex : this._monthsRegex)
          : (a(this, "_monthsRegex") || (this._monthsRegex = st),
            this._monthsStrictRegex && e
              ? this._monthsStrictRegex
              : this._monthsRegex);
      }

      function mt() {
        function e(e, t) {
          return t.length - e.length;
        }
        var t,
          n,
          r = [],
          s = [],
          i = [];
        for (t = 0; t < 12; t++)
          (n = m([2e3, t])),
            r.push(this.monthsShort(n, "")),
            s.push(this.months(n, "")),
            i.push(this.months(n, "")),
            i.push(this.monthsShort(n, ""));
        for (r.sort(e), s.sort(e), i.sort(e), t = 0; t < 12; t++)
          (r[t] = Ie(r[t])), (s[t] = Ie(s[t]));
        for (t = 0; t < 24; t++) i[t] = Ie(i[t]);
        (this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i")),
          (this._monthsShortRegex = this._monthsRegex),
          (this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")),
          (this._monthsShortStrictRegex = new RegExp(
            "^(" + r.join("|") + ")",
            "i"
          ));
      }

      function pt(e) {
        return le(e) ? 366 : 365;
      }
      F("Y", 0, 0, function () {
        var e = this.year();
        return e <= 9999 ? N(e, 4) : "+" + e;
      }),
        F(0, ["YY", 2], 0, function () {
          return this.year() % 100;
        }),
        F(0, ["YYYY", 4], 0, "year"),
        F(0, ["YYYYY", 5], 0, "year"),
        F(0, ["YYYYYY", 6, !0], 0, "year"),
        ne("year", "y"),
        oe("year", 1),
        Le("Y", Ye),
        Le("YY", xe, ve),
        Le("YYYY", $e, ke),
        Le("YYYYY", De, _e),
        Le("YYYYYY", De, _e),
        Re(["YYYYY", "YYYYYY"], je),
        Re("YYYY", function (e, t) {
          t[je] = 2 === e.length ? r.parseTwoDigitYear(e) : ce(e);
        }),
        Re("YY", function (e, t) {
          t[je] = r.parseTwoDigitYear(e);
        }),
        Re("Y", function (e, t) {
          t[je] = parseInt(e, 10);
        }),
        (r.parseTwoDigitYear = function (e) {
          return ce(e) + (ce(e) > 68 ? 1900 : 2e3);
        });
      var gt = de("FullYear", !0);

      function yt() {
        return le(this.year());
      }

      function wt(e, t, n, r, s, i, o) {
        var a;
        return (
          e < 100 && e >= 0
            ? ((a = new Date(e + 400, t, n, r, s, i, o)),
              isFinite(a.getFullYear()) && a.setFullYear(e))
            : (a = new Date(e, t, n, r, s, i, o)),
          a
        );
      }

      function kt(e) {
        var t, n;
        return (
          e < 100 && e >= 0
            ? (((n = Array.prototype.slice.call(arguments))[0] = e + 400),
              (t = new Date(Date.UTC.apply(null, n))),
              isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
            : (t = new Date(Date.UTC.apply(null, arguments))),
          t
        );
      }

      function _t(e, t, n) {
        var r = 7 + t - n;
        return (-(7 + kt(e, 0, r).getUTCDay() - t) % 7) + r - 1;
      }

      function xt(e, t, n, r, s) {
        var i,
          o,
          a = 1 + 7 * (t - 1) + ((7 + n - r) % 7) + _t(e, r, s);
        return (
          a <= 0
            ? (o = pt((i = e - 1)) + a)
            : a > pt(e)
            ? ((i = e + 1), (o = a - pt(e)))
            : ((i = e), (o = a)),
          {
            year: i,
            dayOfYear: o,
          }
        );
      }

      function bt(e, t, n) {
        var r,
          s,
          i = _t(e.year(), t, n),
          o = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
        return (
          o < 1
            ? (r = o + St((s = e.year() - 1), t, n))
            : o > St(e.year(), t, n)
            ? ((r = o - St(e.year(), t, n)), (s = e.year() + 1))
            : ((s = e.year()), (r = o)),
          {
            week: r,
            year: s,
          }
        );
      }

      function St(e, t, n) {
        var r = _t(e, t, n),
          s = _t(e + 1, t, n);
        return (pt(e) - r + s) / 7;
      }

      function Mt(e) {
        return bt(e, this._week.dow, this._week.doy).week;
      }
      F("w", ["ww", 2], "wo", "week"),
        F("W", ["WW", 2], "Wo", "isoWeek"),
        ne("week", "w"),
        ne("isoWeek", "W"),
        oe("week", 5),
        oe("isoWeek", 5),
        Le("w", xe),
        Le("ww", xe, ve),
        Le("W", xe),
        Le("WW", xe, ve),
        Fe(["w", "ww", "W", "WW"], function (e, t, n, r) {
          t[r.substr(0, 1)] = ce(e);
        });
      var $t = {
        dow: 0,
        doy: 6,
      };

      function Dt() {
        return this._week.dow;
      }

      function Tt() {
        return this._week.doy;
      }

      function Yt(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d");
      }

      function Ct(e) {
        var t = bt(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d");
      }

      function Ot(e, t) {
        return "string" != typeof e
          ? e
          : isNaN(e)
          ? "number" == typeof (e = t.weekdaysParse(e))
            ? e
            : null
          : parseInt(e, 10);
      }

      function Pt(e, t) {
        return "string" == typeof e
          ? t.weekdaysParse(e) % 7 || 7
          : isNaN(e)
          ? null
          : e;
      }

      function At(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t));
      }
      F("d", 0, "do", "day"),
        F("dd", 0, 0, function (e) {
          return this.localeData().weekdaysMin(this, e);
        }),
        F("ddd", 0, 0, function (e) {
          return this.localeData().weekdaysShort(this, e);
        }),
        F("dddd", 0, 0, function (e) {
          return this.localeData().weekdays(this, e);
        }),
        F("e", 0, 0, "weekday"),
        F("E", 0, 0, "isoWeekday"),
        ne("day", "d"),
        ne("weekday", "e"),
        ne("isoWeekday", "E"),
        oe("day", 11),
        oe("weekday", 11),
        oe("isoWeekday", 11),
        Le("d", xe),
        Le("e", xe),
        Le("E", xe),
        Le("dd", function (e, t) {
          return t.weekdaysMinRegex(e);
        }),
        Le("ddd", function (e, t) {
          return t.weekdaysShortRegex(e);
        }),
        Le("dddd", function (e, t) {
          return t.weekdaysRegex(e);
        }),
        Fe(["dd", "ddd", "dddd"], function (e, t, n, r) {
          var s = n._locale.weekdaysParse(e, r, n._strict);
          null != s ? (t.d = s) : (g(n).invalidWeekday = e);
        }),
        Fe(["d", "e", "E"], function (e, t, n, r) {
          t[r] = ce(e);
        });
      var Lt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
          "_"
        ),
        Nt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        Ht = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        It = Ae,
        Wt = Ae,
        Rt = Ae;

      function Ft(e, t) {
        var n = i(this._weekdays)
          ? this._weekdays
          : this._weekdays[
              e && !0 !== e && this._weekdays.isFormat.test(t)
                ? "format"
                : "standalone"
            ];
        return !0 === e ? At(n, this._week.dow) : e ? n[e.day()] : n;
      }

      function Gt(e) {
        return !0 === e
          ? At(this._weekdaysShort, this._week.dow)
          : e
          ? this._weekdaysShort[e.day()]
          : this._weekdaysShort;
      }

      function Et(e) {
        return !0 === e
          ? At(this._weekdaysMin, this._week.dow)
          : e
          ? this._weekdaysMin[e.day()]
          : this._weekdaysMin;
      }

      function jt(e, t, n) {
        var r,
          s,
          i,
          o = e.toLocaleLowerCase();
        if (!this._weekdaysParse)
          for (
            this._weekdaysParse = [],
              this._shortWeekdaysParse = [],
              this._minWeekdaysParse = [],
              r = 0;
            r < 7;
            ++r
          )
            (i = m([2e3, 1]).day(r)),
              (this._minWeekdaysParse[r] = this.weekdaysMin(
                i,
                ""
              ).toLocaleLowerCase()),
              (this._shortWeekdaysParse[r] = this.weekdaysShort(
                i,
                ""
              ).toLocaleLowerCase()),
              (this._weekdaysParse[r] = this.weekdays(
                i,
                ""
              ).toLocaleLowerCase());
        return n
          ? "dddd" === t
            ? -1 !== (s = Ee.call(this._weekdaysParse, o))
              ? s
              : null
            : "ddd" === t
            ? -1 !== (s = Ee.call(this._shortWeekdaysParse, o))
              ? s
              : null
            : -1 !== (s = Ee.call(this._minWeekdaysParse, o))
            ? s
            : null
          : "dddd" === t
          ? -1 !== (s = Ee.call(this._weekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._shortWeekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._minWeekdaysParse, o))
            ? s
            : null
          : "ddd" === t
          ? -1 !== (s = Ee.call(this._shortWeekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._weekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._minWeekdaysParse, o))
            ? s
            : null
          : -1 !== (s = Ee.call(this._minWeekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._weekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._shortWeekdaysParse, o))
          ? s
          : null;
      }

      function Bt(e, t, n) {
        var r, s, i;
        if (this._weekdaysParseExact) return jt.call(this, e, t, n);
        for (
          this._weekdaysParse ||
            ((this._weekdaysParse = []),
            (this._minWeekdaysParse = []),
            (this._shortWeekdaysParse = []),
            (this._fullWeekdaysParse = [])),
            r = 0;
          r < 7;
          r++
        ) {
          if (
            ((s = m([2e3, 1]).day(r)),
            n &&
              !this._fullWeekdaysParse[r] &&
              ((this._fullWeekdaysParse[r] = new RegExp(
                "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
                "i"
              )),
              (this._shortWeekdaysParse[r] = new RegExp(
                "^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$",
                "i"
              )),
              (this._minWeekdaysParse[r] = new RegExp(
                "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
                "i"
              ))),
            this._weekdaysParse[r] ||
              ((i =
                "^" +
                this.weekdays(s, "") +
                "|^" +
                this.weekdaysShort(s, "") +
                "|^" +
                this.weekdaysMin(s, "")),
              (this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i"))),
            n && "dddd" === t && this._fullWeekdaysParse[r].test(e))
          )
            return r;
          if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r;
          if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
          if (!n && this._weekdaysParse[r].test(e)) return r;
        }
      }

      function zt(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e
          ? ((e = Ot(e, this.localeData())), this.add(e - t, "d"))
          : t;
      }

      function Ut(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d");
      }

      function Vt(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
          var t = Pt(e, this.localeData());
          return this.day(this.day() % 7 ? t : t - 7);
        }
        return this.day() || 7;
      }

      function Jt(e) {
        return this._weekdaysParseExact
          ? (a(this, "_weekdaysRegex") || qt.call(this),
            e ? this._weekdaysStrictRegex : this._weekdaysRegex)
          : (a(this, "_weekdaysRegex") || (this._weekdaysRegex = It),
            this._weekdaysStrictRegex && e
              ? this._weekdaysStrictRegex
              : this._weekdaysRegex);
      }

      function Kt(e) {
        return this._weekdaysParseExact
          ? (a(this, "_weekdaysRegex") || qt.call(this),
            e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
          : (a(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Wt),
            this._weekdaysShortStrictRegex && e
              ? this._weekdaysShortStrictRegex
              : this._weekdaysShortRegex);
      }

      function Zt(e) {
        return this._weekdaysParseExact
          ? (a(this, "_weekdaysRegex") || qt.call(this),
            e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
          : (a(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Rt),
            this._weekdaysMinStrictRegex && e
              ? this._weekdaysMinStrictRegex
              : this._weekdaysMinRegex);
      }

      function qt() {
        function e(e, t) {
          return t.length - e.length;
        }
        var t,
          n,
          r,
          s,
          i,
          o = [],
          a = [],
          l = [],
          u = [];
        for (t = 0; t < 7; t++)
          (n = m([2e3, 1]).day(t)),
            (r = Ie(this.weekdaysMin(n, ""))),
            (s = Ie(this.weekdaysShort(n, ""))),
            (i = Ie(this.weekdays(n, ""))),
            o.push(r),
            a.push(s),
            l.push(i),
            u.push(r),
            u.push(s),
            u.push(i);
        o.sort(e),
          a.sort(e),
          l.sort(e),
          u.sort(e),
          (this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i")),
          (this._weekdaysShortRegex = this._weekdaysRegex),
          (this._weekdaysMinRegex = this._weekdaysRegex),
          (this._weekdaysStrictRegex = new RegExp(
            "^(" + l.join("|") + ")",
            "i"
          )),
          (this._weekdaysShortStrictRegex = new RegExp(
            "^(" + a.join("|") + ")",
            "i"
          )),
          (this._weekdaysMinStrictRegex = new RegExp(
            "^(" + o.join("|") + ")",
            "i"
          ));
      }

      function Xt() {
        return this.hours() % 12 || 12;
      }

      function Qt() {
        return this.hours() || 24;
      }

      function en(e, t) {
        F(e, 0, 0, function () {
          return this.localeData().meridiem(this.hours(), this.minutes(), t);
        });
      }

      function tn(e, t) {
        return t._meridiemParse;
      }

      function nn(e) {
        return "p" === (e + "").toLowerCase().charAt(0);
      }
      F("H", ["HH", 2], 0, "hour"),
        F("h", ["hh", 2], 0, Xt),
        F("k", ["kk", 2], 0, Qt),
        F("hmm", 0, 0, function () {
          return "" + Xt.apply(this) + N(this.minutes(), 2);
        }),
        F("hmmss", 0, 0, function () {
          return (
            "" + Xt.apply(this) + N(this.minutes(), 2) + N(this.seconds(), 2)
          );
        }),
        F("Hmm", 0, 0, function () {
          return "" + this.hours() + N(this.minutes(), 2);
        }),
        F("Hmmss", 0, 0, function () {
          return (
            "" + this.hours() + N(this.minutes(), 2) + N(this.seconds(), 2)
          );
        }),
        en("a", !0),
        en("A", !1),
        ne("hour", "h"),
        oe("hour", 13),
        Le("a", tn),
        Le("A", tn),
        Le("H", xe),
        Le("h", xe),
        Le("k", xe),
        Le("HH", xe, ve),
        Le("hh", xe, ve),
        Le("kk", xe, ve),
        Le("hmm", be),
        Le("hmmss", Se),
        Le("Hmm", be),
        Le("Hmmss", Se),
        Re(["H", "HH"], Ue),
        Re(["k", "kk"], function (e, t, n) {
          var r = ce(e);
          t[Ue] = 24 === r ? 0 : r;
        }),
        Re(["a", "A"], function (e, t, n) {
          (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
        }),
        Re(["h", "hh"], function (e, t, n) {
          (t[Ue] = ce(e)), (g(n).bigHour = !0);
        }),
        Re("hmm", function (e, t, n) {
          var r = e.length - 2;
          (t[Ue] = ce(e.substr(0, r))),
            (t[Ve] = ce(e.substr(r))),
            (g(n).bigHour = !0);
        }),
        Re("hmmss", function (e, t, n) {
          var r = e.length - 4,
            s = e.length - 2;
          (t[Ue] = ce(e.substr(0, r))),
            (t[Ve] = ce(e.substr(r, 2))),
            (t[Je] = ce(e.substr(s))),
            (g(n).bigHour = !0);
        }),
        Re("Hmm", function (e, t, n) {
          var r = e.length - 2;
          (t[Ue] = ce(e.substr(0, r))), (t[Ve] = ce(e.substr(r)));
        }),
        Re("Hmmss", function (e, t, n) {
          var r = e.length - 4,
            s = e.length - 2;
          (t[Ue] = ce(e.substr(0, r))),
            (t[Ve] = ce(e.substr(r, 2))),
            (t[Je] = ce(e.substr(s)));
        });
      var rn = /[ap]\.?m?\.?/i,
        sn = de("Hours", !0);

      function on(e, t, n) {
        return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
      }
      var an,
        ln = {
          calendar: A,
          longDateFormat: z,
          invalidDate: V,
          ordinal: K,
          dayOfMonthOrdinalParse: Z,
          relativeTime: X,
          months: et,
          monthsShort: tt,
          week: $t,
          weekdays: Lt,
          weekdaysMin: Ht,
          weekdaysShort: Nt,
          meridiemParse: rn,
        },
        un = {},
        cn = {};

      function dn(e, t) {
        var n,
          r = Math.min(e.length, t.length);
        for (n = 0; n < r; n += 1) if (e[n] !== t[n]) return n;
        return r;
      }

      function hn(e) {
        return e ? e.toLowerCase().replace("_", "-") : e;
      }

      function fn(e) {
        for (var t, n, r, s, i = 0; i < e.length; ) {
          for (
            t = (s = hn(e[i]).split("-")).length,
              n = (n = hn(e[i + 1])) ? n.split("-") : null;
            t > 0;

          ) {
            if ((r = mn(s.slice(0, t).join("-")))) return r;
            if (n && n.length >= t && dn(s, n) >= t - 1) break;
            t--;
          }
          i++;
        }
        return an;
      }

      function mn(t) {
        var n = null;
        if (void 0 === un[t] && e && e.exports)
          try {
            (n = an._abbr), vt("./locale/" + t), pn(n);
          } catch (e) {
            un[t] = null;
          }
        return un[t];
      }

      function pn(e, t) {
        var n;
        return (
          e &&
            ((n = u(t) ? vn(e) : gn(e, t))
              ? (an = n)
              : "undefined" != typeof console &&
                console.warn &&
                console.warn(
                  "Locale " + e + " not found. Did you forget to load it?"
                )),
          an._abbr
        );
      }

      function gn(e, t) {
        if (null !== t) {
          var n,
            r = ln;
          if (((t.abbr = e), null != un[e]))
            T(
              "defineLocaleOverride",
              "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
            ),
              (r = un[e]._config);
          else if (null != t.parentLocale)
            if (null != un[t.parentLocale]) r = un[t.parentLocale]._config;
            else {
              if (null == (n = mn(t.parentLocale)))
                return (
                  cn[t.parentLocale] || (cn[t.parentLocale] = []),
                  cn[t.parentLocale].push({
                    name: e,
                    config: t,
                  }),
                  null
                );
              r = n._config;
            }
          return (
            (un[e] = new P(O(r, t))),
            cn[e] &&
              cn[e].forEach(function (e) {
                gn(e.name, e.config);
              }),
            pn(e),
            un[e]
          );
        }
        return delete un[e], null;
      }

      function yn(e, t) {
        if (null != t) {
          var n,
            r,
            s = ln;
          null != un[e] && null != un[e].parentLocale
            ? un[e].set(O(un[e]._config, t))
            : (null != (r = mn(e)) && (s = r._config),
              (t = O(s, t)),
              null == r && (t.abbr = e),
              ((n = new P(t)).parentLocale = un[e]),
              (un[e] = n)),
            pn(e);
        } else
          null != un[e] &&
            (null != un[e].parentLocale
              ? ((un[e] = un[e].parentLocale), e === pn() && pn(e))
              : null != un[e] && delete un[e]);
        return un[e];
      }

      function vn(e) {
        var t;
        if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
          return an;
        if (!i(e)) {
          if ((t = mn(e))) return t;
          e = [e];
        }
        return fn(e);
      }

      function wn() {
        return $(un);
      }

      function kn(e) {
        var t,
          n = e._a;
        return (
          n &&
            -2 === g(e).overflow &&
            ((t =
              n[Be] < 0 || n[Be] > 11
                ? Be
                : n[ze] < 1 || n[ze] > Qe(n[je], n[Be])
                ? ze
                : n[Ue] < 0 ||
                  n[Ue] > 24 ||
                  (24 === n[Ue] && (0 !== n[Ve] || 0 !== n[Je] || 0 !== n[Ke]))
                ? Ue
                : n[Ve] < 0 || n[Ve] > 59
                ? Ve
                : n[Je] < 0 || n[Je] > 59
                ? Je
                : n[Ke] < 0 || n[Ke] > 999
                ? Ke
                : -1),
            g(e)._overflowDayOfYear && (t < je || t > ze) && (t = ze),
            g(e)._overflowWeeks && -1 === t && (t = Ze),
            g(e)._overflowWeekday && -1 === t && (t = qe),
            (g(e).overflow = t)),
          e
        );
      }
      var _n =
          /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        xn =
          /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        bn = /Z|[+-]\d\d(?::?\d\d)?/,
        Sn = [
          ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
          ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
          ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
          ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
          ["YYYY-DDD", /\d{4}-\d{3}/],
          ["YYYY-MM", /\d{4}-\d\d/, !1],
          ["YYYYYYMMDD", /[+-]\d{10}/],
          ["YYYYMMDD", /\d{8}/],
          ["GGGG[W]WWE", /\d{4}W\d{3}/],
          ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
          ["YYYYDDD", /\d{7}/],
          ["YYYYMM", /\d{6}/, !1],
          ["YYYY", /\d{4}/, !1],
        ],
        Mn = [
          ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
          ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
          ["HH:mm:ss", /\d\d:\d\d:\d\d/],
          ["HH:mm", /\d\d:\d\d/],
          ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
          ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
          ["HHmmss", /\d\d\d\d\d\d/],
          ["HHmm", /\d\d\d\d/],
          ["HH", /\d\d/],
        ],
        $n = /^\/?Date\((-?\d+)/i,
        Dn =
          /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        Tn = {
          UT: 0,
          GMT: 0,
          EDT: -240,
          EST: -300,
          CDT: -300,
          CST: -360,
          MDT: -360,
          MST: -420,
          PDT: -420,
          PST: -480,
        };

      function Yn(e) {
        var t,
          n,
          r,
          s,
          i,
          o,
          a = e._i,
          l = _n.exec(a) || xn.exec(a);
        if (l) {
          for (g(e).iso = !0, t = 0, n = Sn.length; t < n; t++)
            if (Sn[t][1].exec(l[1])) {
              (s = Sn[t][0]), (r = !1 !== Sn[t][2]);
              break;
            }
          if (null == s) return void (e._isValid = !1);
          if (l[3]) {
            for (t = 0, n = Mn.length; t < n; t++)
              if (Mn[t][1].exec(l[3])) {
                i = (l[2] || " ") + Mn[t][0];
                break;
              }
            if (null == i) return void (e._isValid = !1);
          }
          if (!r && null != i) return void (e._isValid = !1);
          if (l[4]) {
            if (!bn.exec(l[4])) return void (e._isValid = !1);
            o = "Z";
          }
          (e._f = s + (i || "") + (o || "")), Gn(e);
        } else e._isValid = !1;
      }

      function Cn(e, t, n, r, s, i) {
        var o = [
          On(e),
          tt.indexOf(t),
          parseInt(n, 10),
          parseInt(r, 10),
          parseInt(s, 10),
        ];
        return i && o.push(parseInt(i, 10)), o;
      }

      function On(e) {
        var t = parseInt(e, 10);
        return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
      }

      function Pn(e) {
        return e
          .replace(/\([^)]*\)|[\n\t]/g, " ")
          .replace(/(\s\s+)/g, " ")
          .replace(/^\s\s*/, "")
          .replace(/\s\s*$/, "");
      }

      function An(e, t, n) {
        return (
          !e ||
          Nt.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() ||
          ((g(n).weekdayMismatch = !0), (n._isValid = !1), !1)
        );
      }

      function Ln(e, t, n) {
        if (e) return Tn[e];
        if (t) return 0;
        var r = parseInt(n, 10),
          s = r % 100;
        return ((r - s) / 100) * 60 + s;
      }

      function Nn(e) {
        var t,
          n = Dn.exec(Pn(e._i));
        if (n) {
          if (((t = Cn(n[4], n[3], n[2], n[5], n[6], n[7])), !An(n[1], t, e)))
            return;
          (e._a = t),
            (e._tzm = Ln(n[8], n[9], n[10])),
            (e._d = kt.apply(null, e._a)),
            e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            (g(e).rfc2822 = !0);
        } else e._isValid = !1;
      }

      function Hn(e) {
        var t = $n.exec(e._i);
        null === t
          ? (Yn(e),
            !1 === e._isValid &&
              (delete e._isValid,
              Nn(e),
              !1 === e._isValid &&
                (delete e._isValid,
                e._strict ? (e._isValid = !1) : r.createFromInputFallback(e))))
          : (e._d = new Date(+t[1]));
      }

      function In(e, t, n) {
        return null != e ? e : null != t ? t : n;
      }

      function Wn(e) {
        var t = new Date(r.now());
        return e._useUTC
          ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
          : [t.getFullYear(), t.getMonth(), t.getDate()];
      }

      function Rn(e) {
        var t,
          n,
          r,
          s,
          i,
          o = [];
        if (!e._d) {
          for (
            r = Wn(e),
              e._w && null == e._a[ze] && null == e._a[Be] && Fn(e),
              null != e._dayOfYear &&
                ((i = In(e._a[je], r[je])),
                (e._dayOfYear > pt(i) || 0 === e._dayOfYear) &&
                  (g(e)._overflowDayOfYear = !0),
                (n = kt(i, 0, e._dayOfYear)),
                (e._a[Be] = n.getUTCMonth()),
                (e._a[ze] = n.getUTCDate())),
              t = 0;
            t < 3 && null == e._a[t];
            ++t
          )
            e._a[t] = o[t] = r[t];
          for (; t < 7; t++)
            e._a[t] = o[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
          24 === e._a[Ue] &&
            0 === e._a[Ve] &&
            0 === e._a[Je] &&
            0 === e._a[Ke] &&
            ((e._nextDay = !0), (e._a[Ue] = 0)),
            (e._d = (e._useUTC ? kt : wt).apply(null, o)),
            (s = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
            null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            e._nextDay && (e._a[Ue] = 24),
            e._w &&
              void 0 !== e._w.d &&
              e._w.d !== s &&
              (g(e).weekdayMismatch = !0);
        }
      }

      function Fn(e) {
        var t, n, r, s, i, o, a, l, u;
        null != (t = e._w).GG || null != t.W || null != t.E
          ? ((i = 1),
            (o = 4),
            (n = In(t.GG, e._a[je], bt(Kn(), 1, 4).year)),
            (r = In(t.W, 1)),
            ((s = In(t.E, 1)) < 1 || s > 7) && (l = !0))
          : ((i = e._locale._week.dow),
            (o = e._locale._week.doy),
            (u = bt(Kn(), i, o)),
            (n = In(t.gg, e._a[je], u.year)),
            (r = In(t.w, u.week)),
            null != t.d
              ? ((s = t.d) < 0 || s > 6) && (l = !0)
              : null != t.e
              ? ((s = t.e + i), (t.e < 0 || t.e > 6) && (l = !0))
              : (s = i)),
          r < 1 || r > St(n, i, o)
            ? (g(e)._overflowWeeks = !0)
            : null != l
            ? (g(e)._overflowWeekday = !0)
            : ((a = xt(n, r, s, i, o)),
              (e._a[je] = a.year),
              (e._dayOfYear = a.dayOfYear));
      }

      function Gn(e) {
        if (e._f !== r.ISO_8601)
          if (e._f !== r.RFC_2822) {
            (e._a = []), (g(e).empty = !0);
            var t,
              n,
              s,
              i,
              o,
              a,
              l = "" + e._i,
              u = l.length,
              c = 0;
            for (
              s = B(e._f, e._locale).match(H) || [], t = 0;
              t < s.length;
              t++
            )
              (i = s[t]),
                (n = (l.match(Ne(i, e)) || [])[0]) &&
                  ((o = l.substr(0, l.indexOf(n))).length > 0 &&
                    g(e).unusedInput.push(o),
                  (l = l.slice(l.indexOf(n) + n.length)),
                  (c += n.length)),
                R[i]
                  ? (n ? (g(e).empty = !1) : g(e).unusedTokens.push(i),
                    Ge(i, n, e))
                  : e._strict && !n && g(e).unusedTokens.push(i);
            (g(e).charsLeftOver = u - c),
              l.length > 0 && g(e).unusedInput.push(l),
              e._a[Ue] <= 12 &&
                !0 === g(e).bigHour &&
                e._a[Ue] > 0 &&
                (g(e).bigHour = void 0),
              (g(e).parsedDateParts = e._a.slice(0)),
              (g(e).meridiem = e._meridiem),
              (e._a[Ue] = En(e._locale, e._a[Ue], e._meridiem)),
              null !== (a = g(e).era) &&
                (e._a[je] = e._locale.erasConvertYear(a, e._a[je])),
              Rn(e),
              kn(e);
          } else Nn(e);
        else Yn(e);
      }

      function En(e, t, n) {
        var r;
        return null == n
          ? t
          : null != e.meridiemHour
          ? e.meridiemHour(t, n)
          : null != e.isPM
          ? ((r = e.isPM(n)) && t < 12 && (t += 12),
            r || 12 !== t || (t = 0),
            t)
          : t;
      }

      function jn(e) {
        var t,
          n,
          r,
          s,
          i,
          o,
          a = !1;
        if (0 === e._f.length)
          return (g(e).invalidFormat = !0), void (e._d = new Date(NaN));
        for (s = 0; s < e._f.length; s++)
          (i = 0),
            (o = !1),
            (t = _({}, e)),
            null != e._useUTC && (t._useUTC = e._useUTC),
            (t._f = e._f[s]),
            Gn(t),
            y(t) && (o = !0),
            (i += g(t).charsLeftOver),
            (i += 10 * g(t).unusedTokens.length),
            (g(t).score = i),
            a
              ? i < r && ((r = i), (n = t))
              : (null == r || i < r || o) && ((r = i), (n = t), o && (a = !0));
        f(e, n || t);
      }

      function Bn(e) {
        if (!e._d) {
          var t = se(e._i),
            n = void 0 === t.day ? t.date : t.day;
          (e._a = h(
            [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
            function (e) {
              return e && parseInt(e, 10);
            }
          )),
            Rn(e);
        }
      }

      function zn(e) {
        var t = new x(kn(Un(e)));
        return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
      }

      function Un(e) {
        var t = e._i,
          n = e._f;
        return (
          (e._locale = e._locale || vn(e._l)),
          null === t || (void 0 === n && "" === t)
            ? v({
                nullInput: !0,
              })
            : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
              b(t)
                ? new x(kn(t))
                : (d(t) ? (e._d = t) : i(n) ? jn(e) : n ? Gn(e) : Vn(e),
                  y(e) || (e._d = null),
                  e))
        );
      }

      function Vn(e) {
        var t = e._i;
        u(t)
          ? (e._d = new Date(r.now()))
          : d(t)
          ? (e._d = new Date(t.valueOf()))
          : "string" == typeof t
          ? Hn(e)
          : i(t)
          ? ((e._a = h(t.slice(0), function (e) {
              return parseInt(e, 10);
            })),
            Rn(e))
          : o(t)
          ? Bn(e)
          : c(t)
          ? (e._d = new Date(t))
          : r.createFromInputFallback(e);
      }

      function Jn(e, t, n, r, s) {
        var a = {};
        return (
          (!0 !== t && !1 !== t) || ((r = t), (t = void 0)),
          (!0 !== n && !1 !== n) || ((r = n), (n = void 0)),
          ((o(e) && l(e)) || (i(e) && 0 === e.length)) && (e = void 0),
          (a._isAMomentObject = !0),
          (a._useUTC = a._isUTC = s),
          (a._l = n),
          (a._i = e),
          (a._f = t),
          (a._strict = r),
          zn(a)
        );
      }

      function Kn(e, t, n, r) {
        return Jn(e, t, n, r, !1);
      }
      (r.createFromInputFallback = M(
        "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
        function (e) {
          e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
        }
      )),
        (r.ISO_8601 = function () {}),
        (r.RFC_2822 = function () {});
      var Zn = M(
          "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
          function () {
            var e = Kn.apply(null, arguments);
            return this.isValid() && e.isValid() ? (e < this ? this : e) : v();
          }
        ),
        qn = M(
          "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
          function () {
            var e = Kn.apply(null, arguments);
            return this.isValid() && e.isValid() ? (e > this ? this : e) : v();
          }
        );

      function Xn(e, t) {
        var n, r;
        if ((1 === t.length && i(t[0]) && (t = t[0]), !t.length)) return Kn();
        for (n = t[0], r = 1; r < t.length; ++r)
          (t[r].isValid() && !t[r][e](n)) || (n = t[r]);
        return n;
      }

      function Qn() {
        return Xn("isBefore", [].slice.call(arguments, 0));
      }

      function er() {
        return Xn("isAfter", [].slice.call(arguments, 0));
      }
      var tr = function () {
          return Date.now ? Date.now() : +new Date();
        },
        nr = [
          "year",
          "quarter",
          "month",
          "week",
          "day",
          "hour",
          "minute",
          "second",
          "millisecond",
        ];

      function rr(e) {
        var t,
          n,
          r = !1;
        for (t in e)
          if (
            a(e, t) &&
            (-1 === Ee.call(nr, t) || (null != e[t] && isNaN(e[t])))
          )
            return !1;
        for (n = 0; n < nr.length; ++n)
          if (e[nr[n]]) {
            if (r) return !1;
            parseFloat(e[nr[n]]) !== ce(e[nr[n]]) && (r = !0);
          }
        return !0;
      }

      function sr() {
        return this._isValid;
      }

      function ir() {
        return Tr(NaN);
      }

      function or(e) {
        var t = se(e),
          n = t.year || 0,
          r = t.quarter || 0,
          s = t.month || 0,
          i = t.week || t.isoWeek || 0,
          o = t.day || 0,
          a = t.hour || 0,
          l = t.minute || 0,
          u = t.second || 0,
          c = t.millisecond || 0;
        (this._isValid = rr(t)),
          (this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * a * 60 * 60),
          (this._days = +o + 7 * i),
          (this._months = +s + 3 * r + 12 * n),
          (this._data = {}),
          (this._locale = vn()),
          this._bubble();
      }

      function ar(e) {
        return e instanceof or;
      }

      function lr(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
      }

      function ur(e, t, n) {
        var r,
          s = Math.min(e.length, t.length),
          i = Math.abs(e.length - t.length),
          o = 0;
        for (r = 0; r < s; r++)
          ((n && e[r] !== t[r]) || (!n && ce(e[r]) !== ce(t[r]))) && o++;
        return o + i;
      }

      function cr(e, t) {
        F(e, 0, 0, function () {
          var e = this.utcOffset(),
            n = "+";
          return (
            e < 0 && ((e = -e), (n = "-")),
            n + N(~~(e / 60), 2) + t + N(~~e % 60, 2)
          );
        });
      }
      cr("Z", ":"),
        cr("ZZ", ""),
        Le("Z", Oe),
        Le("ZZ", Oe),
        Re(["Z", "ZZ"], function (e, t, n) {
          (n._useUTC = !0), (n._tzm = hr(Oe, e));
        });
      var dr = /([\+\-]|\d\d)/gi;

      function hr(e, t) {
        var n,
          r,
          s = (t || "").match(e);
        return null === s
          ? null
          : 0 ===
            (r =
              60 *
                (n = ((s[s.length - 1] || []) + "").match(dr) || [
                  "-",
                  0,
                  0,
                ])[1] +
              ce(n[2]))
          ? 0
          : "+" === n[0]
          ? r
          : -r;
      }

      function fr(e, t) {
        var n, s;
        return t._isUTC
          ? ((n = t.clone()),
            (s = (b(e) || d(e) ? e.valueOf() : Kn(e).valueOf()) - n.valueOf()),
            n._d.setTime(n._d.valueOf() + s),
            r.updateOffset(n, !1),
            n)
          : Kn(e).local();
      }

      function mr(e) {
        return -Math.round(e._d.getTimezoneOffset());
      }

      function pr(e, t, n) {
        var s,
          i = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
          if ("string" == typeof e) {
            if (null === (e = hr(Oe, e))) return this;
          } else Math.abs(e) < 16 && !n && (e *= 60);
          return (
            !this._isUTC && t && (s = mr(this)),
            (this._offset = e),
            (this._isUTC = !0),
            null != s && this.add(s, "m"),
            i !== e &&
              (!t || this._changeInProgress
                ? Ar(this, Tr(e - i, "m"), 1, !1)
                : this._changeInProgress ||
                  ((this._changeInProgress = !0),
                  r.updateOffset(this, !0),
                  (this._changeInProgress = null))),
            this
          );
        }
        return this._isUTC ? i : mr(this);
      }

      function gr(e, t) {
        return null != e
          ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this)
          : -this.utcOffset();
      }

      function yr(e) {
        return this.utcOffset(0, e);
      }

      function vr(e) {
        return (
          this._isUTC &&
            (this.utcOffset(0, e),
            (this._isUTC = !1),
            e && this.subtract(mr(this), "m")),
          this
        );
      }

      function wr() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
          var e = hr(Ce, this._i);
          null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
        }
        return this;
      }

      function kr(e) {
        return (
          !!this.isValid() &&
          ((e = e ? Kn(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0)
        );
      }

      function _r() {
        return (
          this.utcOffset() > this.clone().month(0).utcOffset() ||
          this.utcOffset() > this.clone().month(5).utcOffset()
        );
      }

      function xr() {
        if (!u(this._isDSTShifted)) return this._isDSTShifted;
        var e,
          t = {};
        return (
          _(t, this),
          (t = Un(t))._a
            ? ((e = t._isUTC ? m(t._a) : Kn(t._a)),
              (this._isDSTShifted =
                this.isValid() && ur(t._a, e.toArray()) > 0))
            : (this._isDSTShifted = !1),
          this._isDSTShifted
        );
      }

      function br() {
        return !!this.isValid() && !this._isUTC;
      }

      function Sr() {
        return !!this.isValid() && this._isUTC;
      }

      function Mr() {
        return !!this.isValid() && this._isUTC && 0 === this._offset;
      }
      r.updateOffset = function () {};
      var $r = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        Dr =
          /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

      function Tr(e, t) {
        var n,
          r,
          s,
          i = e,
          o = null;
        return (
          ar(e)
            ? (i = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months,
              })
            : c(e) || !isNaN(+e)
            ? ((i = {}), t ? (i[t] = +e) : (i.milliseconds = +e))
            : (o = $r.exec(e))
            ? ((n = "-" === o[1] ? -1 : 1),
              (i = {
                y: 0,
                d: ce(o[ze]) * n,
                h: ce(o[Ue]) * n,
                m: ce(o[Ve]) * n,
                s: ce(o[Je]) * n,
                ms: ce(lr(1e3 * o[Ke])) * n,
              }))
            : (o = Dr.exec(e))
            ? ((n = "-" === o[1] ? -1 : 1),
              (i = {
                y: Yr(o[2], n),
                M: Yr(o[3], n),
                w: Yr(o[4], n),
                d: Yr(o[5], n),
                h: Yr(o[6], n),
                m: Yr(o[7], n),
                s: Yr(o[8], n),
              }))
            : null == i
            ? (i = {})
            : "object" == typeof i &&
              ("from" in i || "to" in i) &&
              ((s = Or(Kn(i.from), Kn(i.to))),
              ((i = {}).ms = s.milliseconds),
              (i.M = s.months)),
          (r = new or(i)),
          ar(e) && a(e, "_locale") && (r._locale = e._locale),
          ar(e) && a(e, "_isValid") && (r._isValid = e._isValid),
          r
        );
      }

      function Yr(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t;
      }

      function Cr(e, t) {
        var n = {};
        return (
          (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
          e.clone().add(n.months, "M").isAfter(t) && --n.months,
          (n.milliseconds = +t - +e.clone().add(n.months, "M")),
          n
        );
      }

      function Or(e, t) {
        var n;
        return e.isValid() && t.isValid()
          ? ((t = fr(t, e)),
            e.isBefore(t)
              ? (n = Cr(e, t))
              : (((n = Cr(t, e)).milliseconds = -n.milliseconds),
                (n.months = -n.months)),
            n)
          : {
              milliseconds: 0,
              months: 0,
            };
      }

      function Pr(e, t) {
        return function (n, r) {
          var s;
          return (
            null === r ||
              isNaN(+r) ||
              (T(
                t,
                "moment()." +
                  t +
                  "(period, number) is deprecated. Please use moment()." +
                  t +
                  "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
              ),
              (s = n),
              (n = r),
              (r = s)),
            Ar(this, Tr(n, r), e),
            this
          );
        };
      }

      function Ar(e, t, n, s) {
        var i = t._milliseconds,
          o = lr(t._days),
          a = lr(t._months);
        e.isValid() &&
          ((s = null == s || s),
          a && ut(e, he(e, "Month") + a * n),
          o && fe(e, "Date", he(e, "Date") + o * n),
          i && e._d.setTime(e._d.valueOf() + i * n),
          s && r.updateOffset(e, o || a));
      }
      (Tr.fn = or.prototype), (Tr.invalid = ir);
      var Lr = Pr(1, "add"),
        Nr = Pr(-1, "subtract");

      function Hr(e) {
        return "string" == typeof e || e instanceof String;
      }

      function Ir(e) {
        return b(e) || d(e) || Hr(e) || c(e) || Rr(e) || Wr(e) || null == e;
      }

      function Wr(e) {
        var t,
          n,
          r = o(e) && !l(e),
          s = !1,
          i = [
            "years",
            "year",
            "y",
            "months",
            "month",
            "M",
            "days",
            "day",
            "d",
            "dates",
            "date",
            "D",
            "hours",
            "hour",
            "h",
            "minutes",
            "minute",
            "m",
            "seconds",
            "second",
            "s",
            "milliseconds",
            "millisecond",
            "ms",
          ];
        for (t = 0; t < i.length; t += 1) (n = i[t]), (s = s || a(e, n));
        return r && s;
      }

      function Rr(e) {
        var t = i(e),
          n = !1;
        return (
          t &&
            (n =
              0 ===
              e.filter(function (t) {
                return !c(t) && Hr(e);
              }).length),
          t && n
        );
      }

      function Fr(e) {
        var t,
          n,
          r = o(e) && !l(e),
          s = !1,
          i = [
            "sameDay",
            "nextDay",
            "lastDay",
            "nextWeek",
            "lastWeek",
            "sameElse",
          ];
        for (t = 0; t < i.length; t += 1) (n = i[t]), (s = s || a(e, n));
        return r && s;
      }

      function Gr(e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6
          ? "sameElse"
          : n < -1
          ? "lastWeek"
          : n < 0
          ? "lastDay"
          : n < 1
          ? "sameDay"
          : n < 2
          ? "nextDay"
          : n < 7
          ? "nextWeek"
          : "sameElse";
      }

      function Er(e, t) {
        1 === arguments.length &&
          (arguments[0]
            ? Ir(arguments[0])
              ? ((e = arguments[0]), (t = void 0))
              : Fr(arguments[0]) && ((t = arguments[0]), (e = void 0))
            : ((e = void 0), (t = void 0)));
        var n = e || Kn(),
          s = fr(n, this).startOf("day"),
          i = r.calendarFormat(this, s) || "sameElse",
          o = t && (Y(t[i]) ? t[i].call(this, n) : t[i]);
        return this.format(o || this.localeData().calendar(i, this, Kn(n)));
      }

      function jr() {
        return new x(this);
      }

      function Br(e, t) {
        var n = b(e) ? e : Kn(e);
        return (
          !(!this.isValid() || !n.isValid()) &&
          ("millisecond" === (t = re(t) || "millisecond")
            ? this.valueOf() > n.valueOf()
            : n.valueOf() < this.clone().startOf(t).valueOf())
        );
      }

      function zr(e, t) {
        var n = b(e) ? e : Kn(e);
        return (
          !(!this.isValid() || !n.isValid()) &&
          ("millisecond" === (t = re(t) || "millisecond")
            ? this.valueOf() < n.valueOf()
            : this.clone().endOf(t).valueOf() < n.valueOf())
        );
      }

      function Ur(e, t, n, r) {
        var s = b(e) ? e : Kn(e),
          i = b(t) ? t : Kn(t);
        return (
          !!(this.isValid() && s.isValid() && i.isValid()) &&
          ("(" === (r = r || "()")[0]
            ? this.isAfter(s, n)
            : !this.isBefore(s, n)) &&
          (")" === r[1] ? this.isBefore(i, n) : !this.isAfter(i, n))
        );
      }

      function Vr(e, t) {
        var n,
          r = b(e) ? e : Kn(e);
        return (
          !(!this.isValid() || !r.isValid()) &&
          ("millisecond" === (t = re(t) || "millisecond")
            ? this.valueOf() === r.valueOf()
            : ((n = r.valueOf()),
              this.clone().startOf(t).valueOf() <= n &&
                n <= this.clone().endOf(t).valueOf()))
        );
      }

      function Jr(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t);
      }

      function Kr(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t);
      }

      function Zr(e, t, n) {
        var r, s, i;
        if (!this.isValid()) return NaN;
        if (!(r = fr(e, this)).isValid()) return NaN;
        switch (((s = 6e4 * (r.utcOffset() - this.utcOffset())), (t = re(t)))) {
          case "year":
            i = qr(this, r) / 12;
            break;
          case "month":
            i = qr(this, r);
            break;
          case "quarter":
            i = qr(this, r) / 3;
            break;
          case "second":
            i = (this - r) / 1e3;
            break;
          case "minute":
            i = (this - r) / 6e4;
            break;
          case "hour":
            i = (this - r) / 36e5;
            break;
          case "day":
            i = (this - r - s) / 864e5;
            break;
          case "week":
            i = (this - r - s) / 6048e5;
            break;
          default:
            i = this - r;
        }
        return n ? i : ue(i);
      }

      function qr(e, t) {
        if (e.date() < t.date()) return -qr(t, e);
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
          r = e.clone().add(n, "months");
        return (
          -(
            n +
            (t - r < 0
              ? (t - r) / (r - e.clone().add(n - 1, "months"))
              : (t - r) / (e.clone().add(n + 1, "months") - r))
          ) || 0
        );
      }

      function Xr() {
        return this.clone()
          .locale("en")
          .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
      }

      function Qr(e) {
        if (!this.isValid()) return null;
        var t = !0 !== e,
          n = t ? this.clone().utc() : this;
        return n.year() < 0 || n.year() > 9999
          ? j(
              n,
              t
                ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
            )
          : Y(Date.prototype.toISOString)
          ? t
            ? this.toDate().toISOString()
            : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                .toISOString()
                .replace("Z", j(n, "Z"))
          : j(
              n,
              t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
            );
      }

      function es() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e,
          t,
          n,
          r,
          s = "moment",
          i = "";
        return (
          this.isLocal() ||
            ((s = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
            (i = "Z")),
          (e = "[" + s + '("]'),
          (t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
          (n = "-MM-DD[T]HH:mm:ss.SSS"),
          (r = i + '[")]'),
          this.format(e + t + n + r)
        );
      }

      function ts(e) {
        e || (e = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
        var t = j(this, e);
        return this.localeData().postformat(t);
      }

      function ns(e, t) {
        return this.isValid() && ((b(e) && e.isValid()) || Kn(e).isValid())
          ? Tr({
              to: this,
              from: e,
            })
              .locale(this.locale())
              .humanize(!t)
          : this.localeData().invalidDate();
      }

      function rs(e) {
        return this.from(Kn(), e);
      }

      function ss(e, t) {
        return this.isValid() && ((b(e) && e.isValid()) || Kn(e).isValid())
          ? Tr({
              from: this,
              to: e,
            })
              .locale(this.locale())
              .humanize(!t)
          : this.localeData().invalidDate();
      }

      function is(e) {
        return this.to(Kn(), e);
      }

      function os(e) {
        var t;
        return void 0 === e
          ? this._locale._abbr
          : (null != (t = vn(e)) && (this._locale = t), this);
      }
      (r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
        (r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
      var as = M(
        "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
        function (e) {
          return void 0 === e ? this.localeData() : this.locale(e);
        }
      );

      function ls() {
        return this._locale;
      }
      var us = 1e3,
        cs = 60 * us,
        ds = 60 * cs,
        hs = 3506328 * ds;

      function fs(e, t) {
        return ((e % t) + t) % t;
      }

      function ms(e, t, n) {
        return e < 100 && e >= 0
          ? new Date(e + 400, t, n) - hs
          : new Date(e, t, n).valueOf();
      }

      function ps(e, t, n) {
        return e < 100 && e >= 0
          ? Date.UTC(e + 400, t, n) - hs
          : Date.UTC(e, t, n);
      }

      function gs(e) {
        var t, n;
        if (void 0 === (e = re(e)) || "millisecond" === e || !this.isValid())
          return this;
        switch (((n = this._isUTC ? ps : ms), e)) {
          case "year":
            t = n(this.year(), 0, 1);
            break;
          case "quarter":
            t = n(this.year(), this.month() - (this.month() % 3), 1);
            break;
          case "month":
            t = n(this.year(), this.month(), 1);
            break;
          case "week":
            t = n(this.year(), this.month(), this.date() - this.weekday());
            break;
          case "isoWeek":
            t = n(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1)
            );
            break;
          case "day":
          case "date":
            t = n(this.year(), this.month(), this.date());
            break;
          case "hour":
            (t = this._d.valueOf()),
              (t -= fs(t + (this._isUTC ? 0 : this.utcOffset() * cs), ds));
            break;
          case "minute":
            (t = this._d.valueOf()), (t -= fs(t, cs));
            break;
          case "second":
            (t = this._d.valueOf()), (t -= fs(t, us));
        }
        return this._d.setTime(t), r.updateOffset(this, !0), this;
      }

      function ys(e) {
        var t, n;
        if (void 0 === (e = re(e)) || "millisecond" === e || !this.isValid())
          return this;
        switch (((n = this._isUTC ? ps : ms), e)) {
          case "year":
            t = n(this.year() + 1, 0, 1) - 1;
            break;
          case "quarter":
            t = n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
            break;
          case "month":
            t = n(this.year(), this.month() + 1, 1) - 1;
            break;
          case "week":
            t =
              n(this.year(), this.month(), this.date() - this.weekday() + 7) -
              1;
            break;
          case "isoWeek":
            t =
              n(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1) + 7
              ) - 1;
            break;
          case "day":
          case "date":
            t = n(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case "hour":
            (t = this._d.valueOf()),
              (t +=
                ds - fs(t + (this._isUTC ? 0 : this.utcOffset() * cs), ds) - 1);
            break;
          case "minute":
            (t = this._d.valueOf()), (t += cs - fs(t, cs) - 1);
            break;
          case "second":
            (t = this._d.valueOf()), (t += us - fs(t, us) - 1);
        }
        return this._d.setTime(t), r.updateOffset(this, !0), this;
      }

      function vs() {
        return this._d.valueOf() - 6e4 * (this._offset || 0);
      }

      function ws() {
        return Math.floor(this.valueOf() / 1e3);
      }

      function ks() {
        return new Date(this.valueOf());
      }

      function _s() {
        var e = this;
        return [
          e.year(),
          e.month(),
          e.date(),
          e.hour(),
          e.minute(),
          e.second(),
          e.millisecond(),
        ];
      }

      function xs() {
        var e = this;
        return {
          years: e.year(),
          months: e.month(),
          date: e.date(),
          hours: e.hours(),
          minutes: e.minutes(),
          seconds: e.seconds(),
          milliseconds: e.milliseconds(),
        };
      }

      function bs() {
        return this.isValid() ? this.toISOString() : null;
      }

      function Ss() {
        return y(this);
      }

      function Ms() {
        return f({}, g(this));
      }

      function $s() {
        return g(this).overflow;
      }

      function Ds() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict,
        };
      }

      function Ts(e, t) {
        var n,
          s,
          i,
          o = this._eras || vn("en")._eras;
        for (n = 0, s = o.length; n < s; ++n)
          switch (
            ("string" == typeof o[n].since &&
              ((i = r(o[n].since).startOf("day")), (o[n].since = i.valueOf())),
            typeof o[n].until)
          ) {
            case "undefined":
              o[n].until = 1 / 0;
              break;
            case "string":
              (i = r(o[n].until).startOf("day").valueOf()),
                (o[n].until = i.valueOf());
          }
        return o;
      }

      function Ys(e, t, n) {
        var r,
          s,
          i,
          o,
          a,
          l = this.eras();
        for (e = e.toUpperCase(), r = 0, s = l.length; r < s; ++r)
          if (
            ((i = l[r].name.toUpperCase()),
            (o = l[r].abbr.toUpperCase()),
            (a = l[r].narrow.toUpperCase()),
            n)
          )
            switch (t) {
              case "N":
              case "NN":
              case "NNN":
                if (o === e) return l[r];
                break;
              case "NNNN":
                if (i === e) return l[r];
                break;
              case "NNNNN":
                if (a === e) return l[r];
            }
          else if ([i, o, a].indexOf(e) >= 0) return l[r];
      }

      function Cs(e, t) {
        var n = e.since <= e.until ? 1 : -1;
        return void 0 === t
          ? r(e.since).year()
          : r(e.since).year() + (t - e.offset) * n;
      }

      function Os() {
        var e,
          t,
          n,
          r = this.localeData().eras();
        for (e = 0, t = r.length; e < t; ++e) {
          if (
            ((n = this.clone().startOf("day").valueOf()),
            r[e].since <= n && n <= r[e].until)
          )
            return r[e].name;
          if (r[e].until <= n && n <= r[e].since) return r[e].name;
        }
        return "";
      }

      function Ps() {
        var e,
          t,
          n,
          r = this.localeData().eras();
        for (e = 0, t = r.length; e < t; ++e) {
          if (
            ((n = this.clone().startOf("day").valueOf()),
            r[e].since <= n && n <= r[e].until)
          )
            return r[e].narrow;
          if (r[e].until <= n && n <= r[e].since) return r[e].narrow;
        }
        return "";
      }

      function As() {
        var e,
          t,
          n,
          r = this.localeData().eras();
        for (e = 0, t = r.length; e < t; ++e) {
          if (
            ((n = this.clone().startOf("day").valueOf()),
            r[e].since <= n && n <= r[e].until)
          )
            return r[e].abbr;
          if (r[e].until <= n && n <= r[e].since) return r[e].abbr;
        }
        return "";
      }

      function Ls() {
        var e,
          t,
          n,
          s,
          i = this.localeData().eras();
        for (e = 0, t = i.length; e < t; ++e)
          if (
            ((n = i[e].since <= i[e].until ? 1 : -1),
            (s = this.clone().startOf("day").valueOf()),
            (i[e].since <= s && s <= i[e].until) ||
              (i[e].until <= s && s <= i[e].since))
          )
            return (this.year() - r(i[e].since).year()) * n + i[e].offset;
        return this.year();
      }

      function Ns(e) {
        return (
          a(this, "_erasNameRegex") || Es.call(this),
          e ? this._erasNameRegex : this._erasRegex
        );
      }

      function Hs(e) {
        return (
          a(this, "_erasAbbrRegex") || Es.call(this),
          e ? this._erasAbbrRegex : this._erasRegex
        );
      }

      function Is(e) {
        return (
          a(this, "_erasNarrowRegex") || Es.call(this),
          e ? this._erasNarrowRegex : this._erasRegex
        );
      }

      function Ws(e, t) {
        return t.erasAbbrRegex(e);
      }

      function Rs(e, t) {
        return t.erasNameRegex(e);
      }

      function Fs(e, t) {
        return t.erasNarrowRegex(e);
      }

      function Gs(e, t) {
        return t._eraYearOrdinalRegex || Te;
      }

      function Es() {
        var e,
          t,
          n = [],
          r = [],
          s = [],
          i = [],
          o = this.eras();
        for (e = 0, t = o.length; e < t; ++e)
          r.push(Ie(o[e].name)),
            n.push(Ie(o[e].abbr)),
            s.push(Ie(o[e].narrow)),
            i.push(Ie(o[e].name)),
            i.push(Ie(o[e].abbr)),
            i.push(Ie(o[e].narrow));
        (this._erasRegex = new RegExp("^(" + i.join("|") + ")", "i")),
          (this._erasNameRegex = new RegExp("^(" + r.join("|") + ")", "i")),
          (this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")", "i")),
          (this._erasNarrowRegex = new RegExp("^(" + s.join("|") + ")", "i"));
      }

      function js(e, t) {
        F(0, [e, e.length], 0, t);
      }

      function Bs(e) {
        return Zs.call(
          this,
          e,
          this.week(),
          this.weekday(),
          this.localeData()._week.dow,
          this.localeData()._week.doy
        );
      }

      function zs(e) {
        return Zs.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
      }

      function Us() {
        return St(this.year(), 1, 4);
      }

      function Vs() {
        return St(this.isoWeekYear(), 1, 4);
      }

      function Js() {
        var e = this.localeData()._week;
        return St(this.year(), e.dow, e.doy);
      }

      function Ks() {
        var e = this.localeData()._week;
        return St(this.weekYear(), e.dow, e.doy);
      }

      function Zs(e, t, n, r, s) {
        var i;
        return null == e
          ? bt(this, r, s).year
          : (t > (i = St(e, r, s)) && (t = i), qs.call(this, e, t, n, r, s));
      }

      function qs(e, t, n, r, s) {
        var i = xt(e, t, n, r, s),
          o = kt(i.year, 0, i.dayOfYear);
        return (
          this.year(o.getUTCFullYear()),
          this.month(o.getUTCMonth()),
          this.date(o.getUTCDate()),
          this
        );
      }

      function Xs(e) {
        return null == e
          ? Math.ceil((this.month() + 1) / 3)
          : this.month(3 * (e - 1) + (this.month() % 3));
      }
      F("N", 0, 0, "eraAbbr"),
        F("NN", 0, 0, "eraAbbr"),
        F("NNN", 0, 0, "eraAbbr"),
        F("NNNN", 0, 0, "eraName"),
        F("NNNNN", 0, 0, "eraNarrow"),
        F("y", ["y", 1], "yo", "eraYear"),
        F("y", ["yy", 2], 0, "eraYear"),
        F("y", ["yyy", 3], 0, "eraYear"),
        F("y", ["yyyy", 4], 0, "eraYear"),
        Le("N", Ws),
        Le("NN", Ws),
        Le("NNN", Ws),
        Le("NNNN", Rs),
        Le("NNNNN", Fs),
        Re(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, r) {
          var s = n._locale.erasParse(e, r, n._strict);
          s ? (g(n).era = s) : (g(n).invalidEra = e);
        }),
        Le("y", Te),
        Le("yy", Te),
        Le("yyy", Te),
        Le("yyyy", Te),
        Le("yo", Gs),
        Re(["y", "yy", "yyy", "yyyy"], je),
        Re(["yo"], function (e, t, n, r) {
          var s;
          n._locale._eraYearOrdinalRegex &&
            (s = e.match(n._locale._eraYearOrdinalRegex)),
            n._locale.eraYearOrdinalParse
              ? (t[je] = n._locale.eraYearOrdinalParse(e, s))
              : (t[je] = parseInt(e, 10));
        }),
        F(0, ["gg", 2], 0, function () {
          return this.weekYear() % 100;
        }),
        F(0, ["GG", 2], 0, function () {
          return this.isoWeekYear() % 100;
        }),
        js("gggg", "weekYear"),
        js("ggggg", "weekYear"),
        js("GGGG", "isoWeekYear"),
        js("GGGGG", "isoWeekYear"),
        ne("weekYear", "gg"),
        ne("isoWeekYear", "GG"),
        oe("weekYear", 1),
        oe("isoWeekYear", 1),
        Le("G", Ye),
        Le("g", Ye),
        Le("GG", xe, ve),
        Le("gg", xe, ve),
        Le("GGGG", $e, ke),
        Le("gggg", $e, ke),
        Le("GGGGG", De, _e),
        Le("ggggg", De, _e),
        Fe(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, r) {
          t[r.substr(0, 2)] = ce(e);
        }),
        Fe(["gg", "GG"], function (e, t, n, s) {
          t[s] = r.parseTwoDigitYear(e);
        }),
        F("Q", 0, "Qo", "quarter"),
        ne("quarter", "Q"),
        oe("quarter", 7),
        Le("Q", ye),
        Re("Q", function (e, t) {
          t[Be] = 3 * (ce(e) - 1);
        }),
        F("D", ["DD", 2], "Do", "date"),
        ne("date", "D"),
        oe("date", 9),
        Le("D", xe),
        Le("DD", xe, ve),
        Le("Do", function (e, t) {
          return e
            ? t._dayOfMonthOrdinalParse || t._ordinalParse
            : t._dayOfMonthOrdinalParseLenient;
        }),
        Re(["D", "DD"], ze),
        Re("Do", function (e, t) {
          t[ze] = ce(e.match(xe)[0]);
        });
      var Qs = de("Date", !0);

      function ei(e) {
        var t =
          Math.round(
            (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
          ) + 1;
        return null == e ? t : this.add(e - t, "d");
      }
      F("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
        ne("dayOfYear", "DDD"),
        oe("dayOfYear", 4),
        Le("DDD", Me),
        Le("DDDD", we),
        Re(["DDD", "DDDD"], function (e, t, n) {
          n._dayOfYear = ce(e);
        }),
        F("m", ["mm", 2], 0, "minute"),
        ne("minute", "m"),
        oe("minute", 14),
        Le("m", xe),
        Le("mm", xe, ve),
        Re(["m", "mm"], Ve);
      var ti = de("Minutes", !1);
      F("s", ["ss", 2], 0, "second"),
        ne("second", "s"),
        oe("second", 15),
        Le("s", xe),
        Le("ss", xe, ve),
        Re(["s", "ss"], Je);
      var ni,
        ri,
        si = de("Seconds", !1);
      for (
        F("S", 0, 0, function () {
          return ~~(this.millisecond() / 100);
        }),
          F(0, ["SS", 2], 0, function () {
            return ~~(this.millisecond() / 10);
          }),
          F(0, ["SSS", 3], 0, "millisecond"),
          F(0, ["SSSS", 4], 0, function () {
            return 10 * this.millisecond();
          }),
          F(0, ["SSSSS", 5], 0, function () {
            return 100 * this.millisecond();
          }),
          F(0, ["SSSSSS", 6], 0, function () {
            return 1e3 * this.millisecond();
          }),
          F(0, ["SSSSSSS", 7], 0, function () {
            return 1e4 * this.millisecond();
          }),
          F(0, ["SSSSSSSS", 8], 0, function () {
            return 1e5 * this.millisecond();
          }),
          F(0, ["SSSSSSSSS", 9], 0, function () {
            return 1e6 * this.millisecond();
          }),
          ne("millisecond", "ms"),
          oe("millisecond", 16),
          Le("S", Me, ye),
          Le("SS", Me, ve),
          Le("SSS", Me, we),
          ni = "SSSS";
        ni.length <= 9;
        ni += "S"
      )
        Le(ni, Te);

      function ii(e, t) {
        t[Ke] = ce(1e3 * ("0." + e));
      }
      for (ni = "S"; ni.length <= 9; ni += "S") Re(ni, ii);

      function oi() {
        return this._isUTC ? "UTC" : "";
      }

      function ai() {
        return this._isUTC ? "Coordinated Universal Time" : "";
      }
      (ri = de("Milliseconds", !1)),
        F("z", 0, 0, "zoneAbbr"),
        F("zz", 0, 0, "zoneName");
      var li = x.prototype;

      function ui(e) {
        return Kn(1e3 * e);
      }

      function ci() {
        return Kn.apply(null, arguments).parseZone();
      }

      function di(e) {
        return e;
      }
      (li.add = Lr),
        (li.calendar = Er),
        (li.clone = jr),
        (li.diff = Zr),
        (li.endOf = ys),
        (li.format = ts),
        (li.from = ns),
        (li.fromNow = rs),
        (li.to = ss),
        (li.toNow = is),
        (li.get = me),
        (li.invalidAt = $s),
        (li.isAfter = Br),
        (li.isBefore = zr),
        (li.isBetween = Ur),
        (li.isSame = Vr),
        (li.isSameOrAfter = Jr),
        (li.isSameOrBefore = Kr),
        (li.isValid = Ss),
        (li.lang = as),
        (li.locale = os),
        (li.localeData = ls),
        (li.max = qn),
        (li.min = Zn),
        (li.parsingFlags = Ms),
        (li.set = pe),
        (li.startOf = gs),
        (li.subtract = Nr),
        (li.toArray = _s),
        (li.toObject = xs),
        (li.toDate = ks),
        (li.toISOString = Qr),
        (li.inspect = es),
        "undefined" != typeof Symbol &&
          null != Symbol.for &&
          (li[Symbol.for("nodejs.util.inspect.custom")] = function () {
            return "Moment<" + this.format() + ">";
          }),
        (li.toJSON = bs),
        (li.toString = Xr),
        (li.unix = ws),
        (li.valueOf = vs),
        (li.creationData = Ds),
        (li.eraName = Os),
        (li.eraNarrow = Ps),
        (li.eraAbbr = As),
        (li.eraYear = Ls),
        (li.year = gt),
        (li.isLeapYear = yt),
        (li.weekYear = Bs),
        (li.isoWeekYear = zs),
        (li.quarter = li.quarters = Xs),
        (li.month = ct),
        (li.daysInMonth = dt),
        (li.week = li.weeks = Yt),
        (li.isoWeek = li.isoWeeks = Ct),
        (li.weeksInYear = Js),
        (li.weeksInWeekYear = Ks),
        (li.isoWeeksInYear = Us),
        (li.isoWeeksInISOWeekYear = Vs),
        (li.date = Qs),
        (li.day = li.days = zt),
        (li.weekday = Ut),
        (li.isoWeekday = Vt),
        (li.dayOfYear = ei),
        (li.hour = li.hours = sn),
        (li.minute = li.minutes = ti),
        (li.second = li.seconds = si),
        (li.millisecond = li.milliseconds = ri),
        (li.utcOffset = pr),
        (li.utc = yr),
        (li.local = vr),
        (li.parseZone = wr),
        (li.hasAlignedHourOffset = kr),
        (li.isDST = _r),
        (li.isLocal = br),
        (li.isUtcOffset = Sr),
        (li.isUtc = Mr),
        (li.isUTC = Mr),
        (li.zoneAbbr = oi),
        (li.zoneName = ai),
        (li.dates = M("dates accessor is deprecated. Use date instead.", Qs)),
        (li.months = M("months accessor is deprecated. Use month instead", ct)),
        (li.years = M("years accessor is deprecated. Use year instead", gt)),
        (li.zone = M(
          "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
          gr
        )),
        (li.isDSTShifted = M(
          "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
          xr
        ));
      var hi = P.prototype;

      function fi(e, t, n, r) {
        var s = vn(),
          i = m().set(r, t);
        return s[n](i, e);
      }

      function mi(e, t, n) {
        if ((c(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
          return fi(e, t, n, "month");
        var r,
          s = [];
        for (r = 0; r < 12; r++) s[r] = fi(e, r, n, "month");
        return s;
      }

      function pi(e, t, n, r) {
        "boolean" == typeof e
          ? (c(t) && ((n = t), (t = void 0)), (t = t || ""))
          : ((n = t = e),
            (e = !1),
            c(t) && ((n = t), (t = void 0)),
            (t = t || ""));
        var s,
          i = vn(),
          o = e ? i._week.dow : 0,
          a = [];
        if (null != n) return fi(t, (n + o) % 7, r, "day");
        for (s = 0; s < 7; s++) a[s] = fi(t, (s + o) % 7, r, "day");
        return a;
      }

      function gi(e, t) {
        return mi(e, t, "months");
      }

      function yi(e, t) {
        return mi(e, t, "monthsShort");
      }

      function vi(e, t, n) {
        return pi(e, t, n, "weekdays");
      }

      function wi(e, t, n) {
        return pi(e, t, n, "weekdaysShort");
      }

      function ki(e, t, n) {
        return pi(e, t, n, "weekdaysMin");
      }
      (hi.calendar = L),
        (hi.longDateFormat = U),
        (hi.invalidDate = J),
        (hi.ordinal = q),
        (hi.preparse = di),
        (hi.postformat = di),
        (hi.relativeTime = Q),
        (hi.pastFuture = ee),
        (hi.set = C),
        (hi.eras = Ts),
        (hi.erasParse = Ys),
        (hi.erasConvertYear = Cs),
        (hi.erasAbbrRegex = Hs),
        (hi.erasNameRegex = Ns),
        (hi.erasNarrowRegex = Is),
        (hi.months = it),
        (hi.monthsShort = ot),
        (hi.monthsParse = lt),
        (hi.monthsRegex = ft),
        (hi.monthsShortRegex = ht),
        (hi.week = Mt),
        (hi.firstDayOfYear = Tt),
        (hi.firstDayOfWeek = Dt),
        (hi.weekdays = Ft),
        (hi.weekdaysMin = Et),
        (hi.weekdaysShort = Gt),
        (hi.weekdaysParse = Bt),
        (hi.weekdaysRegex = Jt),
        (hi.weekdaysShortRegex = Kt),
        (hi.weekdaysMinRegex = Zt),
        (hi.isPM = nn),
        (hi.meridiem = on),
        pn("en", {
          eras: [
            {
              since: "0001-01-01",
              until: 1 / 0,
              offset: 1,
              name: "Anno Domini",
              narrow: "AD",
              abbr: "AD",
            },
            {
              since: "0000-12-31",
              until: -1 / 0,
              offset: 1,
              name: "Before Christ",
              narrow: "BC",
              abbr: "BC",
            },
          ],
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function (e) {
            var t = e % 10;
            return (
              e +
              (1 === ce((e % 100) / 10)
                ? "th"
                : 1 === t
                ? "st"
                : 2 === t
                ? "nd"
                : 3 === t
                ? "rd"
                : "th")
            );
          },
        }),
        (r.lang = M(
          "moment.lang is deprecated. Use moment.locale instead.",
          pn
        )),
        (r.langData = M(
          "moment.langData is deprecated. Use moment.localeData instead.",
          vn
        ));
      var _i = Math.abs;

      function xi() {
        var e = this._data;
        return (
          (this._milliseconds = _i(this._milliseconds)),
          (this._days = _i(this._days)),
          (this._months = _i(this._months)),
          (e.milliseconds = _i(e.milliseconds)),
          (e.seconds = _i(e.seconds)),
          (e.minutes = _i(e.minutes)),
          (e.hours = _i(e.hours)),
          (e.months = _i(e.months)),
          (e.years = _i(e.years)),
          this
        );
      }

      function bi(e, t, n, r) {
        var s = Tr(t, n);
        return (
          (e._milliseconds += r * s._milliseconds),
          (e._days += r * s._days),
          (e._months += r * s._months),
          e._bubble()
        );
      }

      function Si(e, t) {
        return bi(this, e, t, 1);
      }

      function Mi(e, t) {
        return bi(this, e, t, -1);
      }

      function $i(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e);
      }

      function Di() {
        var e,
          t,
          n,
          r,
          s,
          i = this._milliseconds,
          o = this._days,
          a = this._months,
          l = this._data;
        return (
          (i >= 0 && o >= 0 && a >= 0) ||
            (i <= 0 && o <= 0 && a <= 0) ||
            ((i += 864e5 * $i(Yi(a) + o)), (o = 0), (a = 0)),
          (l.milliseconds = i % 1e3),
          (e = ue(i / 1e3)),
          (l.seconds = e % 60),
          (t = ue(e / 60)),
          (l.minutes = t % 60),
          (n = ue(t / 60)),
          (l.hours = n % 24),
          (o += ue(n / 24)),
          (a += s = ue(Ti(o))),
          (o -= $i(Yi(s))),
          (r = ue(a / 12)),
          (a %= 12),
          (l.days = o),
          (l.months = a),
          (l.years = r),
          this
        );
      }

      function Ti(e) {
        return (4800 * e) / 146097;
      }

      function Yi(e) {
        return (146097 * e) / 4800;
      }

      function Ci(e) {
        if (!this.isValid()) return NaN;
        var t,
          n,
          r = this._milliseconds;
        if ("month" === (e = re(e)) || "quarter" === e || "year" === e)
          switch (
            ((t = this._days + r / 864e5), (n = this._months + Ti(t)), e)
          ) {
            case "month":
              return n;
            case "quarter":
              return n / 3;
            case "year":
              return n / 12;
          }
        else
          switch (((t = this._days + Math.round(Yi(this._months))), e)) {
            case "week":
              return t / 7 + r / 6048e5;
            case "day":
              return t + r / 864e5;
            case "hour":
              return 24 * t + r / 36e5;
            case "minute":
              return 1440 * t + r / 6e4;
            case "second":
              return 86400 * t + r / 1e3;
            case "millisecond":
              return Math.floor(864e5 * t) + r;
            default:
              throw new Error("Unknown unit " + e);
          }
      }

      function Oi() {
        return this.isValid()
          ? this._milliseconds +
              864e5 * this._days +
              (this._months % 12) * 2592e6 +
              31536e6 * ce(this._months / 12)
          : NaN;
      }

      function Pi(e) {
        return function () {
          return this.as(e);
        };
      }
      var Ai = Pi("ms"),
        Li = Pi("s"),
        Ni = Pi("m"),
        Hi = Pi("h"),
        Ii = Pi("d"),
        Wi = Pi("w"),
        Ri = Pi("M"),
        Fi = Pi("Q"),
        Gi = Pi("y");

      function Ei() {
        return Tr(this);
      }

      function ji(e) {
        return (e = re(e)), this.isValid() ? this[e + "s"]() : NaN;
      }

      function Bi(e) {
        return function () {
          return this.isValid() ? this._data[e] : NaN;
        };
      }
      var zi = Bi("milliseconds"),
        Ui = Bi("seconds"),
        Vi = Bi("minutes"),
        Ji = Bi("hours"),
        Ki = Bi("days"),
        Zi = Bi("months"),
        qi = Bi("years");

      function Xi() {
        return ue(this.days() / 7);
      }
      var Qi = Math.round,
        eo = {
          ss: 44,
          s: 45,
          m: 45,
          h: 22,
          d: 26,
          w: null,
          M: 11,
        };

      function to(e, t, n, r, s) {
        return s.relativeTime(t || 1, !!n, e, r);
      }

      function no(e, t, n, r) {
        var s = Tr(e).abs(),
          i = Qi(s.as("s")),
          o = Qi(s.as("m")),
          a = Qi(s.as("h")),
          l = Qi(s.as("d")),
          u = Qi(s.as("M")),
          c = Qi(s.as("w")),
          d = Qi(s.as("y")),
          h =
            (i <= n.ss && ["s", i]) ||
            (i < n.s && ["ss", i]) ||
            (o <= 1 && ["m"]) ||
            (o < n.m && ["mm", o]) ||
            (a <= 1 && ["h"]) ||
            (a < n.h && ["hh", a]) ||
            (l <= 1 && ["d"]) ||
            (l < n.d && ["dd", l]);
        return (
          null != n.w && (h = h || (c <= 1 && ["w"]) || (c < n.w && ["ww", c])),
          ((h = h ||
            (u <= 1 && ["M"]) ||
            (u < n.M && ["MM", u]) ||
            (d <= 1 && ["y"]) || ["yy", d])[2] = t),
          (h[3] = +e > 0),
          (h[4] = r),
          to.apply(null, h)
        );
      }

      function ro(e) {
        return void 0 === e ? Qi : "function" == typeof e && ((Qi = e), !0);
      }

      function so(e, t) {
        return (
          void 0 !== eo[e] &&
          (void 0 === t
            ? eo[e]
            : ((eo[e] = t), "s" === e && (eo.ss = t - 1), !0))
        );
      }

      function io(e, t) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var n,
          r,
          s = !1,
          i = eo;
        return (
          "object" == typeof e && ((t = e), (e = !1)),
          "boolean" == typeof e && (s = e),
          "object" == typeof t &&
            ((i = Object.assign({}, eo, t)),
            null != t.s && null == t.ss && (i.ss = t.s - 1)),
          (r = no(this, !s, i, (n = this.localeData()))),
          s && (r = n.pastFuture(+this, r)),
          n.postformat(r)
        );
      }
      var oo = Math.abs;

      function ao(e) {
        return (e > 0) - (e < 0) || +e;
      }

      function lo() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e,
          t,
          n,
          r,
          s,
          i,
          o,
          a,
          l = oo(this._milliseconds) / 1e3,
          u = oo(this._days),
          c = oo(this._months),
          d = this.asSeconds();
        return d
          ? ((e = ue(l / 60)),
            (t = ue(e / 60)),
            (l %= 60),
            (e %= 60),
            (n = ue(c / 12)),
            (c %= 12),
            (r = l ? l.toFixed(3).replace(/\.?0+$/, "") : ""),
            (s = d < 0 ? "-" : ""),
            (i = ao(this._months) !== ao(d) ? "-" : ""),
            (o = ao(this._days) !== ao(d) ? "-" : ""),
            (a = ao(this._milliseconds) !== ao(d) ? "-" : ""),
            s +
              "P" +
              (n ? i + n + "Y" : "") +
              (c ? i + c + "M" : "") +
              (u ? o + u + "D" : "") +
              (t || e || l ? "T" : "") +
              (t ? a + t + "H" : "") +
              (e ? a + e + "M" : "") +
              (l ? a + r + "S" : ""))
          : "P0D";
      }
      var uo = or.prototype;
      return (
        (uo.isValid = sr),
        (uo.abs = xi),
        (uo.add = Si),
        (uo.subtract = Mi),
        (uo.as = Ci),
        (uo.asMilliseconds = Ai),
        (uo.asSeconds = Li),
        (uo.asMinutes = Ni),
        (uo.asHours = Hi),
        (uo.asDays = Ii),
        (uo.asWeeks = Wi),
        (uo.asMonths = Ri),
        (uo.asQuarters = Fi),
        (uo.asYears = Gi),
        (uo.valueOf = Oi),
        (uo._bubble = Di),
        (uo.clone = Ei),
        (uo.get = ji),
        (uo.milliseconds = zi),
        (uo.seconds = Ui),
        (uo.minutes = Vi),
        (uo.hours = Ji),
        (uo.days = Ki),
        (uo.weeks = Xi),
        (uo.months = Zi),
        (uo.years = qi),
        (uo.humanize = io),
        (uo.toISOString = lo),
        (uo.toString = lo),
        (uo.toJSON = lo),
        (uo.locale = os),
        (uo.localeData = ls),
        (uo.toIsoString = M(
          "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
          lo
        )),
        (uo.lang = as),
        F("X", 0, 0, "unix"),
        F("x", 0, 0, "valueOf"),
        Le("x", Ye),
        Le("X", Pe),
        Re("X", function (e, t, n) {
          n._d = new Date(1e3 * parseFloat(e));
        }),
        Re("x", function (e, t, n) {
          n._d = new Date(ce(e));
        }),
        //! moment.js
        (r.version = "2.29.1"),
        s(Kn),
        (r.fn = li),
        (r.min = Qn),
        (r.max = er),
        (r.now = tr),
        (r.utc = m),
        (r.unix = ui),
        (r.months = gi),
        (r.isDate = d),
        (r.locale = pn),
        (r.invalid = v),
        (r.duration = Tr),
        (r.isMoment = b),
        (r.weekdays = vi),
        (r.parseZone = ci),
        (r.localeData = vn),
        (r.isDuration = ar),
        (r.monthsShort = yi),
        (r.weekdaysMin = ki),
        (r.defineLocale = gn),
        (r.updateLocale = yn),
        (r.locales = wn),
        (r.weekdaysShort = wi),
        (r.normalizeUnits = re),
        (r.relativeTimeRounding = ro),
        (r.relativeTimeThreshold = so),
        (r.calendarFormat = Gr),
        (r.prototype = li),
        (r.HTML5_FMT = {
          DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
          DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
          DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
          DATE: "YYYY-MM-DD",
          TIME: "HH:mm",
          TIME_SECONDS: "HH:mm:ss",
          TIME_MS: "HH:mm:ss.SSS",
          WEEK: "GGGG-[W]WW",
          MONTH: "YYYY-MM",
        }),
        r
      );
    })();
  });

  var Pn;
  const { document: An, window: Ln } = X;

  function Nn(e) {
    let t, n;
    return (
      (t = new Lt({
        props: {
          hasFrame: e[10].hasFrame,
          title: e[10].title,
          $$slots: {
            default: [Fn],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      t.$on("close", e[20]),
      {
        c() {
          Q(t.$$.fragment);
        },
        m(e, r) {
          ee(t, e, r), (n = !0);
        },
        p(e, n) {
          const r = {};
          1024 & n[0] && (r.hasFrame = e[10].hasFrame),
            1024 & n[0] && (r.title = e[10].title),
            (1392 & n[0]) | (8 & n[1]) &&
              (r.$$scope = {
                dirty: n,
                ctx: e,
              }),
            t.$set(r);
        },
        i(e) {
          n || (Z(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          q(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          te(t, e);
        },
      }
    );
  }

  function Hn(t) {
    let n, r;
    return (
      (n = new vn({})),
      n.$on("close", t[19]),
      {
        c() {
          Q(n.$$.fragment);
        },
        m(e, t) {
          ee(n, e, t), (r = !0);
        },
        p: e,
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          te(n, e);
        },
      }
    );
  }

  function In(e) {
    let t, n;
    return (
      (t = new Tn({
        props: {
          userStats: e[4],
          config: Vt,
          isPrime: e[8].isPrime,
          daysSince: e[11],
          todaysScore: e[6].length,
          guessRef: e[5].gotCorrect ? e[6].length + 1 : 0,
          hasFinished: e[5].hasFinished,
        },
      })),
      {
        c() {
          Q(t.$$.fragment);
        },
        m(e, r) {
          ee(t, e, r), (n = !0);
        },
        p(e, n) {
          const r = {};
          16 & n[0] && (r.userStats = e[4]),
            256 & n[0] && (r.isPrime = e[8].isPrime),
            64 & n[0] && (r.todaysScore = e[6].length),
            96 & n[0] && (r.guessRef = e[5].gotCorrect ? e[6].length + 1 : 0),
            32 & n[0] && (r.hasFinished = e[5].hasFinished),
            t.$set(r);
        },
        i(e) {
          n || (Z(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          q(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          te(t, e);
        },
      }
    );
  }

  function Wn(t) {
    let n, r;
    return (
      (n = new Ut({})),
      {
        c() {
          Q(n.$$.fragment);
        },
        m(e, t) {
          ee(n, e, t), (r = !0);
        },
        p: e,
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          te(n, e);
        },
      }
    );
  }

  function Rn(t) {
    let n, r;
    return (
      (n = new Ht({})),
      {
        c() {
          Q(n.$$.fragment);
        },
        m(e, t) {
          ee(n, e, t), (r = !0);
        },
        p: e,
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          te(n, e);
        },
      }
    );
  }

  function MLn(t) {
    let n, r;
    return (
      (n = new MLCt({})),
      {
        c() {
          Q(n.$$.fragment);
        },
        m(e, t) {
          ee(n, e, t), (r = !0);
        },
        p: e,
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          te(n, e);
        },
      }
    );
  }

  function Fn(e) {
    let t, n, r, s;
    const i = [Rn, Wn, In, Hn, MLn],
      o = [];

    function a(e, t) {
      return "info" == e[10].name
        ? 0
        : "donate" == e[10].name
        ? 1
        : "results" == e[10].name
        ? 2
        : "help" == e[10].name
        ? 3
        : "music-list" == e[10].name
        ? 4
        : -1;
    }
    return (
      ~(t = a(e)) && (n = o[t] = i[t](e)),
      {
        c() {
          n && n.c(), (r = b());
        },
        m(e, n) {
          ~t && o[t].m(e, n), g(e, r, n), (s = !0);
        },
        p(e, s) {
          let l = t;
          (t = a(e)),
            t === l
              ? ~t && o[t].p(e, s)
              : (n &&
                  (J(),
                  q(o[l], 1, 1, () => {
                    o[l] = null;
                  }),
                  K()),
                ~t
                  ? ((n = o[t]),
                    n ? n.p(e, s) : ((n = o[t] = i[t](e)), n.c()),
                    Z(n, 1),
                    n.m(r.parentNode, r))
                  : (n = null));
        },
        i(e) {
          s || (Z(n), (s = !0));
        },
        o(e) {
          q(n), (s = !1);
        },
        d(e) {
          ~t && o[t].d(e), e && y(r);
        },
      }
    );
  }

  function Gn(e) {
    let t, n, r;

    function s(t) {
      e[23](t);
    }
    let i = {
      isPrime: e[8].isPrime,
      config: Vt,
      allOptions: e[9],
      currentAttempt: e[6].length + 1,
    };
    return (
      void 0 !== e[7] && (i.guessInput = e[7]),
      (t = new Yt({
        props: i,
      })),
      e[22](t),
      H.push(() =>
        (function (e, t, n) {
          const r = e.$$.props[t];
          void 0 !== r && ((e.$$.bound[r] = n), n(e.$$.ctx[r]));
        })(t, "guessInput", s)
      ),
      t.$on("guess", e[15]),
      {
        c() {
          Q(t.$$.fragment);
        },
        m(e, n) {
          ee(t, e, n), (r = !0);
        },
        p(e, r) {
          const s = {};
          var i;
          256 & r[0] && (s.isPrime = e[8].isPrime),
            512 & r[0] && (s.allOptions = e[9]),
            64 & r[0] && (s.currentAttempt = e[6].length + 1),
            !n &&
              128 & r[0] &&
              ((n = !0),
              (s.guessInput = e[7]),
              (i = () => (n = !1)),
              W.push(i)),
            t.$set(s);
        },
        i(e) {
          r || (Z(t.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(t.$$.fragment, e), (r = !1);
        },
        d(n) {
          e[22](null), te(t, n);
        },
      }
    );
  }

  function En(e) {
    let t, n, s, i, o, a, l, u, c, d, h, f, m, v, k, _, b, $, D, Y, C, O, P, A;
    G(e[18]),
      (l = new me({
        props: {
          properties: ["G-3QSG4MYSLD"],
        },
      }));
    let L = e[10].isActive && Nn(e);
    (f = new xe({})),
      f.$on("modal", e[16]),
      (_ = new Ie({
        props: {
          userGuesses: e[6],
          maxAttempts: Vt.maxAttempts,
          currentHeardle: e[2],
          todaysGame: e[5],
        },
      })),
      ($ = new mn({
        props: {
          config: Vt,
          userGuesses: e[6],
          currentHeardle: e[2],
          hasFinished: e[5].hasFinished,
          gotCorrect: e[5].gotCorrect,
          isPrime: e[8].isPrime,
          guessRef: e[5].gotCorrect ? e[6].length : 0,
        },
      }));
    let N = {
      config: Vt,
      gameState: e[8],
      currentHeardle: e[2],
      trackDuration: e[2].duration,
      currentAttempt: e[6].length + 1,
    };
    (Y = new gt({
      props: N,
    })),
      e[21](Y),
      Y.$on("updateSong", e[13]),
      Y.$on("updatePlayerState", e[14]);
    let H = !e[5].hasFinished && e[8].gameIsActive && Gn(e);
    return {
      c() {
        (t = w("meta")),
          (n = w("link")),
          (s = w("link")),
          (i = w("link")),
          (o = w("link")),
          (a = x()),
          Q(l.$$.fragment),
          (u = x()),
          (c = w("main")),
          L && L.c(),
          (d = x()),
          (h = w("div")),
          Q(f.$$.fragment),
          (m = x()),
          (v = w("div")),
          (k = w("div")),
          Q(_.$$.fragment),
          (b = x()),
          Q($.$$.fragment),
          (D = x()),
          Q(Y.$$.fragment),
          (C = x()),
          H && H.c(),
          (An.title = artist + " Infinite Heardle"),
          M(t, "name", "description"),
          M(
            t,
            "content",
            "Guess the " +
              artist +
              " Music from the intro in as few tries as possible"
          ),
          M(o, "rel", "manifest"),
          M(o, "href", "/site.webmanifest"),
          M(h, "class", "flex-none"),
          M(
            k,
            "class",
            "max-w-screen-sm w-full mx-auto h-full flex flex-col justify-between overflow-auto"
          ),
          M(v, "class", "w-full flex flex-col flex-grow relative"),
          M(
            c,
            "class",
            "bg-custom-bg text-custom-fg overflow-auto flex flex-col"
          ),
          T(c, "height", e[3] + "px");
      },
      m(r, y) {
        p(An.head, t),
          p(An.head, n),
          p(An.head, s),
          p(An.head, i),
          p(An.head, o),
          g(r, a, y),
          ee(l, r, y),
          g(r, u, y),
          g(r, c, y),
          L && L.m(c, null),
          p(c, d),
          p(c, h),
          ee(f, h, null),
          p(c, m),
          p(c, v),
          p(v, k),
          ee(_, k, null),
          p(k, b),
          ee($, k, null),
          p(c, D),
          ee(Y, c, null),
          p(c, C),
          H && H.m(c, null),
          (O = !0),
          P ||
            ((A = [S(Ln, "resize", e[17]), S(Ln, "resize", e[18])]), (P = !0));
      },
      p(e, t) {
        e[10].isActive
          ? L
            ? (L.p(e, t), 1024 & t[0] && Z(L, 1))
            : ((L = Nn(e)), L.c(), Z(L, 1), L.m(c, d))
          : L &&
            (J(),
            q(L, 1, 1, () => {
              L = null;
            }),
            K());
        const n = {};
        64 & t[0] && (n.userGuesses = e[6]),
          4 & t[0] && (n.currentHeardle = e[2]),
          32 & t[0] && (n.todaysGame = e[5]),
          _.$set(n);
        const r = {};
        64 & t[0] && (r.userGuesses = e[6]),
          4 & t[0] && (r.currentHeardle = e[2]),
          32 & t[0] && (r.hasFinished = e[5].hasFinished),
          32 & t[0] && (r.gotCorrect = e[5].gotCorrect),
          256 & t[0] && (r.isPrime = e[8].isPrime),
          96 & t[0] && (r.guessRef = e[5].gotCorrect ? e[6].length : 0),
          $.$set(r);
        const s = {};
        256 & t[0] && (s.gameState = e[8]),
          4 & t[0] && (s.currentHeardle = e[2]),
          4 & t[0] && (s.trackDuration = e[2].duration),
          64 & t[0] && (s.currentAttempt = e[6].length + 1),
          Y.$set(s),
          !e[5].hasFinished && e[8].gameIsActive
            ? H
              ? (H.p(e, t), 288 & t[0] && Z(H, 1))
              : ((H = Gn(e)), H.c(), Z(H, 1), H.m(c, null))
            : H &&
              (J(),
              q(H, 1, 1, () => {
                H = null;
              }),
              K()),
          (!O || 8 & t[0]) && T(c, "height", e[3] + "px");
      },
      i(e) {
        O ||
          (Z(l.$$.fragment, e),
          Z(L),
          Z(f.$$.fragment, e),
          Z(_.$$.fragment, e),
          Z($.$$.fragment, e),
          Z(Y.$$.fragment, e),
          Z(H),
          (O = !0));
      },
      o(e) {
        q(l.$$.fragment, e),
          q(L),
          q(f.$$.fragment, e),
          q(_.$$.fragment, e),
          q($.$$.fragment, e),
          q(Y.$$.fragment, e),
          q(H),
          (O = !1);
      },
      d(d) {
        y(t),
          y(n),
          y(s),
          y(i),
          y(o),
          d && y(a),
          te(l, d),
          d && y(u),
          d && y(c),
          L && L.d(),
          te(f),
          te(_),
          te($),
          e[21](null),
          te(Y),
          H && H.d(),
          (P = !1),
          r(A);
      },
    };
  }

  function jn(e, t, n) {
    let r, s, i, o;
    u(e, Cn, (e) => n(26, (r = [...musicNameList]))),
      u(e, On, (e) => n(27, (s = e)));
    let a = currentIndex,
      l = {
        url: s[a].url,
        correctAnswer: s[a].answer,
        id: a,
        guessList: [],
        hasFinished: !1,
        hasStarted: !1,
      };
    setCurrentHeardle(l);
    // console.log("a", l);
    var c, d;
    // EventListener, originnally here to reload the page if the day changed
    // void 0 !== document.hidden ?
    //     ((c = "hidden"), (d = "visibilitychange")) :
    //     void 0 !== document.msHidden ?
    //     ((c = "msHidden"), (d = "msvisibilitychange")) :
    //     void 0 !== document.webkitHidden &&
    //     ((c = "webkitHidden"), (d = "webkitvisibilitychange")),
    //     void 0 === document.addEventListener ||
    //     void 0 === c ||
    //     document.addEventListener(
    //         d,
    //         function() {
    //             document[c] || a === currentIndex || location.reload(!0);
    //         }, !1
    //     );
    let h,
      f,
      m = 0;

    function p() {
      n(3, (m = window.innerHeight));
    }
    P(() => {
      p();
    });
    if (null == localStorage.getItem("userStats")) {
      (h = []), localStorage.setItem("userStats", JSON.stringify(h));
    } else {
      if (firstLoad) {
        h = [];
        firstLoad = false;
      } else {
        h = JSON.parse(localStorage.getItem("userStats"));
      }
      f = h.find((e) => e.id === l.id);
    }
    void 0 === f &&
      ((f = l),
      h.push(f),
      localStorage.setItem("userStats", JSON.stringify(h)));
    let g,
      y,
      v = f.guessList,
      w = {
        gameIsActive: !1,
        musicIsPlaying: !1,
        playerIsReady: !1,
        // isPrime: a >= 7, // C'est le bug bizarre des 9 secondes ?
        isPrime: true,
      };
    let k = {
      isActive: !1,
      hasFrame: !0,
      title: "",
      name: "",
    };

    function _(e, t, r) {
      n(10, (k.isActive = !0), k),
        n(10, (k.name = e), k),
        n(10, (k.title = t), k),
        n(10, (k.hasFrame = r), k);
    }

    null == localStorage.getItem("firstTime") &&
      (_("help", "how to play"), localStorage.setItem("firstTime", "false"));
    return [
      i,
      o,
      l,
      m,
      h,
      f,
      v,
      g,
      w,
      y,
      k,
      a,
      p,
      function (e) {
        let t = e.detail.currentSong;
        // console.log("current song", l);
        n(2, (l.artist = l.correctAnswer.split(" - ")[1]), l),
          n(2, (l.title = l.correctAnswer.split(" - ")[0]), l),
          n(2, (l.img = t.artwork_url), l),
          n(2, (l.duration = t.duration), l),
          n(2, (l.genre = t.genre), l),
          n(2, (l.date = t.release_date), l),
          (function (e, t, n) {
            e.set(n);
          })(Cn, (r = [...r, l.correctAnswer]), r),
          n(9, (y = r)),
          n(8, (w.playerIsReady = !0), w),
          f.hasFinished || n(8, (w.gameIsActive = !0), w);
      },
      function (e) {
        l.hasStarted ||
          (pe("startGame#" + l.id, {
            name: "startGame",
          }),
          pe("startGame", {
            name: "startGame",
          }),
          n(2, (l.hasStarted = !0), l)),
          n(8, (w.musicIsPlaying = e.detail.musicIsPlaying), w);
      },
      function (e) {
        let t = e.detail.guess,
          r = e.detail.isSkipped,
          s = !1;
        var o;
        r ||
          t != l.correctAnswer ||
          ((s = !0),
          pe("correctGuess", {
            name: "correctGuess",
          }),
          pe("correctGuess#" + l.id, {
            name: "correctGuess",
          })),
          r
            ? (pe("skippedGuess", {
                name: "skippedGuess",
              }),
              pe("skippedGuess#" + l.id, {
                name: "skippedGuess",
              }))
            : s ||
              (pe("incorrectGuess", {
                name: "incorrectGuess",
              }),
              pe("incorrectGuess#" + l.id, {
                name: "incorrectGuess",
              })),
          n(
            6,
            (v = v.concat({
              answer: e.detail.guess,
              isCorrect: s,
              isSkipped: r,
            }))
          ),
          evaluateGuessMetadata(v);
        n(5, (f.guessList = v), f),
          localStorage.setItem("userStats", JSON.stringify(h)),
          (v.length != Vt.maxAttempts && 1 != s) ||
            ((o = s),
            n(8, (w.gameIsActive = !1), w),
            n(5, (f.hasFinished = !0), f),
            n(5, (f.gotCorrect = o), f),
            n(5, (f.score = v.length), f),
            localStorage.setItem("userStats", JSON.stringify(h)),
            i.resetAndPlay(),
            o
              ? (pe("wonGame", {
                  name: "won",
                }),
                pe("wonGame#" + l.id, {
                  name: "won",
                }))
              : (pe("lostGame", {
                  name: "lost",
                }),
                pe("lostGame#" + l.id, {
                  name: "lost",
                })),
            pe("endGame" + l.id + "in" + v.length, {
              name: "#" + v.length,
            }),
            pe("endGame", {
              name: "endGame",
            }),
            pe("endGame#" + l.id, {
              name: "endGame",
            }),
            pe("gameStats#" + l.id, {
              name: v,
            }));
      },
      function (e) {
        _(e.detail.name, e.detail.title, e.detail.hasFrame);
      },
      () => {},
      function () {
        n(3, (m = Ln.innerHeight));
      },
      () => n(10, (k.isActive = !1), k),
      () => n(10, (k.isActive = !1), k),
      function (e) {
        H[e ? "unshift" : "push"](() => {
          (i = e), n(0, i);
        });
      },
      function (e) {
        H[e ? "unshift" : "push"](() => {
          (o = e), n(1, o);
        });
      },
      function (e) {
        (g = e), n(7, g);
      },
    ];
  }
  return new (class extends se {
    constructor(e) {
      super(), re(this, e, jn, En, i, {}, null, [-1, -1]);
    }
  })({
    target: document.body,
    props: {},
  });
})();
