var game = 'oras';
var game_name = 'ORAS';
var bounds =                [  0,   0,   319, 239];
var coords = {
"Battle": {
	"id": "b",
	"Battle": { // Unchanged?
		"id": "b",
		"Fight":            { "id": "f", "coords": [  0,  30,   319, 169], "ref": ["bf", "br"]  },
		"Bag":              { "id": "b", "coords": [  0, 180,    94, 239], "ref": "bg"  },
		"Run":              { "id": "r", "coords": [105, 185,   214, 239], "ref": "END" },
		"Pokémon":          { "id": "p", "coords": [225, 180,   319, 239], "ref": "bp"  },
	},
	"Fight": { // Unchanged?
		"id": "f",
		"Attack 1":         { "id": "1", "coords": [  0,  40,   159,  99], "ref": ["END", "bd", "bt"] },
		"Attack 2":         { "id": "2", "coords": [160,  40,   319,  99], "ref": ["END", "bd", "bt"] },
		"Attack 3":         { "id": "3", "coords": [  0, 100,   159, 159], "ref": ["END", "bd", "bt"] },
		"Attack 4":         { "id": "4", "coords": [160, 100,   319, 159], "ref": ["END", "bd", "bt"] },
		"Mega":             { "id": "m", "coords": [ 85, 160,   234, 239], "ref": "END" }, // Overlap with Shift is intentional
		"Shift Left":       { "id": "j", "coords": [  0, 190,    49, 239], "ref": "END" }, // Triple battle
		"Shift Right":      { "id": "k", "coords": [ 50, 190,    99, 239], "ref": "END" }, // Triple battle
		"Cancel":           { "id": "x", "coords": [250, 190,   319, 239], "ref": "bb"  },
	},
	"Rotation battle": { // Unchaged?
		"id": "r",
		"Attack 1":         { "id": "1", "coords": [  0,  40,   159,  99], "ref": "END" },
		"Attack 2":         { "id": "2", "coords": [160,  40,   319,  99], "ref": "END" },
		"Attack 3":         { "id": "3", "coords": [  0, 100,   159, 159], "ref": "END" },
		"Attack 4":         { "id": "4", "coords": [160, 100,   319, 159], "ref": "END" },
		"Mega":             { "id": "m", "coords": [ 85, 160,   234, 239], "ref": "END" }, // Overlap with Rotate is intentional
		"Rotate Left":      { "id": "j", "coords": [  0, 190,    49, 239], "ref": "END" },
		"Rotate Right":     { "id": "k", "coords": [ 50, 190,    99, 239], "ref": "END" },
		"Cancel":           { "id": "x", "coords": [250, 190,   319, 239], "ref": "bb"  },
	},
	"Double battle": { // Unchanged?
		"id": "d",
		"Foe 1":            { "id": "1", "coords": [ 30,  40,   129,  99], "ref": "END" },
		"Foe 2":            { "id": "2", "coords": [190,  40,   289,  99], "ref": "END" },
		"Ally 1":           { "id": "a", "coords": [ 30, 115,   129, 174], "ref": "END" },
		"Ally 2":           { "id": "b", "coords": [190, 115,   289, 174], "ref": "END" },
		"Cancel":           { "id": "x", "coords": [250, 190,   319, 239], "ref": "bf"  },
	},
	"Triple battle": { // Unchanged?
		"id": "t",
		"Foe 1":            { "id": "1", "coords": [  0,  40,    99,  99], "ref": "END" },
		"Foe 2":            { "id": "2", "coords": [110,  40,   209,  99], "ref": "END" },
		"Foe 3":            { "id": "3", "coords": [220,  40,   319,  99], "ref": "END" },
		"Ally 1":           { "id": "a", "coords": [  0, 115,    99, 174], "ref": "END" },
		"Ally 2":           { "id": "b", "coords": [110, 115,   209, 174], "ref": "END" },
		"Ally 3":           { "id": "c", "coords": [220, 115,   319, 174], "ref": "END" },
		"Cancel":           { "id": "x", "coords": [250, 190,   319, 239], "ref": "bf"  },
	},
	"Bag": { // Done
		"id": "g",
		"Restore":          { "id": "r", "coords": [  0,  20,   160,  88], "ref": "bq"  }, // Unchanged?
		"Balls":            { "id": "b", "coords": [160,  35,   319, 103], "ref": "bq"  },
		"Status":           { "id": "s", "coords": [  0,  90,   160, 158], "ref": "bq"  }, // Unchanged?
		"Battle items":     { "id": "i", "coords": [160, 105,   319, 173], "ref": "bq"  },
		"Last used":        { "id": "u", "coords": [  5, 195,   244, 237], "ref": "bi"  }, // Unchanged?
		"Cancel":           { "id": "x", "coords": [250, 190,   319, 239], "ref": "bb"  }, // Unchanged?
	},
	"Pocket": { // Done
		"id": "q",
		"Item 1":           { "id": "1", "coords": [  0,  10,   156,  59], "ref": "bi"  },
		"Item 2":           { "id": "2", "coords": [164,  15,   319,  65], "ref": "bi"  },
		"Item 3":           { "id": "3", "coords": [  0,  65,   156, 121], "ref": "bi"  },
		"Item 4":           { "id": "4", "coords": [164,  71,   319, 126], "ref": "bi"  },
		"Item 5":           { "id": "5", "coords": [  0, 121,   156, 172], "ref": "bi"  },
		"Item 6":           { "id": "6", "coords": [164, 127,   319, 177], "ref": "bi"  },
		"Previous":         { "id": "j", "coords": [  0, 185,    54, 239], "ref": "bq"  }, // Unchanged?
		"Next":             { "id": "k", "coords": [ 70, 185,   119, 239], "ref": "bq"  }, // Unchanged?
		"Cancel":           { "id": "x", "coords": [250, 190,   319, 239], "ref": "bg"  }, // Unchanged?
	},
	"Item": { // Unchanged? // Done
		"id": "i",
		"Use":              { "id": "u", "coords": [  0, 160,   249, 239], "ref": "END" },
		"Cancel":           { "id": "x", "coords": [250, 185,   319, 239], "ref": "bq"  },
	},
	"Pokémon": { // Also for "use item on" // Done
		"id": "p",
		"Pokémon 1":        { "id": "1", "coords": [  0,   0,   159,  57], "ref": "bs"  },
		"Pokémon 2":        { "id": "2", "coords": [160,   8,   319,  65], "ref": "bs"  },
		"Pokémon 3":        { "id": "3", "coords": [  0,  60,   159, 117], "ref": "bs"  },
		"Pokémon 4":        { "id": "4", "coords": [160,  67,   319, 124], "ref": "bs"  },
		"Pokémon 5":        { "id": "5", "coords": [  0, 120,   159, 177], "ref": "bs"  },
		"Pokémon 6":        { "id": "6", "coords": [160, 127,   319, 184], "ref": "bs"  },
		"Cancel":           { "id": "x", "coords": [250, 190,   319, 239], "ref": "bb"  },
	},
	"Switch": { // Unchanged?
		"id": "s",
		"Switch":           { "id": "s", "coords": [  0,  40,   319, 149], "ref": "END" },
		"Restore":          { "id": "r", "coords": [  0, 160,   249, 189], "ref": "bq"  },
		"Summary":          { "id": "w", "coords": [  0, 195,   124, 224], "ref": "NEW" },
		"Check moves":      { "id": "m", "coords": [130, 195,   249, 224], "ref": "NEW" },
		"Cancel":           { "id": "x", "coords": [250, 190,   319, 239], "ref": "bp"  },
	},
	"Nickname": { // Done
		"id": "n",
		"Yes":              { "id": "y", "coords": [ 20,  85,   299, 134], "ref": "zk"  },
		"No":               { "id": "x", "coords": [ 20, 155,   299, 204], "ref": "END" },
	},
	"Delete move": { // Done
		"id": "o",
		"Forget":           { "id": "f", "coords": [ 20,  85,   299, 134], "ref": "bl"  },
		"Keep old":         { "id": "k", "coords": [ 20, 155,   299, 204], "ref": "bu"  },
	},
	"Give up move": { // Done
		"id": "u",
		"Give up":          { "id": "g", "coords": [ 20,  85,   299, 134], "ref": "END" },
		"Don't give up":    { "id": "d", "coords": [ 20, 155,   299, 204], "ref": "bo"  },
	},
	"Replace move": { // Mostly unchanged, but extra button
		"id": "l",
		"Move 1":           { "id": "1", "coords": [  0,  49,   159, 102], "ref": "be"  },
		"Move 2":           { "id": "2", "coords": [160,  49,   319, 102], "ref": "be"  },
		"Move 3":           { "id": "3", "coords": [  0, 113,   159, 166], "ref": "be"  },
		"Move 4":           { "id": "4", "coords": [160, 113,   319, 166], "ref": "be"  },
		"New move":         { "id": "m", "coords": [ 80, 175,   239, 239], "ref": "NEW" },
		"Cancel":           { "id": "x", "coords": [250, 190,   319, 239], "ref": "bo"  },
	},
	"Forget move": {
		"id": "e",
		"Forget":           { "id": "f", "coords": [ 80, 183,   246, 237], "ref": "END" },
		"Cancel":           { "id": "x", "coords": [250, 190,   319, 239], "ref": "bl"  },
	},
},
"Overworld": {
	"id": "o",
	"Overworld": {
		"id": "a",
		"Pokémon":          { "id": "p", "coords": [  0,  40,   159,  79], "ref": "op"  },
		"Pokédex":          { "id": "d", "coords": [160,  40,   319,  79], "ref": "NEW" },
		"Bag":              { "id": "b", "coords": [  0, 100,   159, 139], "ref": "ob"  },
		"Trainer card":     { "id": "c", "coords": [160, 100,   319, 139], "ref": "NEW" },
		"Save":             { "id": "s", "coords": [  0, 160,   159, 199], "ref": "NEW" },
		"Options":          { "id": "o", "coords": [160, 160,   319, 199], "ref": "oo"  },
		"Quit":             { "id": "q", "coords": [285, 210,   314, 239], "ref": "END" },
	},
	"Bag": {
		"id": "b",
		"Items":            { "id": "A", "coords": [  1,   4,    32,  35], "ref": "   " },
		"Medicine":         { "id": "B", "coords": [ 33,   4,    64,  35], "ref": "   " },
		"TMs":              { "id": "C", "coords": [ 65,   4,    96,  35], "ref": "   " },
		"Berries":          { "id": "D", "coords": [ 97,   4,   128,  35], "ref": "   " },
		"Key items":        { "id": "E", "coords": [129,   4,   160,  35], "ref": "   " },
		"Item 1":           { "id": "a", "coords": [161,  15,   312,  44], "ref": ["oi", "ok", "oh"]  },
		"Item 2":           { "id": "b", "coords": [161,  45,   312,  74], "ref": ["oi", "ok", "oh"]  },
		"Item 3":           { "id": "c", "coords": [161,  75,   312, 104], "ref": ["oi", "ok", "oh"]  },
		"Item 4":           { "id": "d", "coords": [161, 105,   312, 134], "ref": ["oi", "ok", "oh"]  },
		"Item 5":           { "id": "e", "coords": [161, 135,   312, 164], "ref": ["oi", "ok", "oh"]  },
		"Item 6":           { "id": "f", "coords": [161, 165,   312, 194], "ref": ["oi", "ok", "oh"]  },
		"Pokémon 1":        { "id": "1", "coords": [  3,  41,   154,  73], "ref": "   " },
		"Pokémon 2":        { "id": "2", "coords": [  3,  74,   154, 106], "ref": "   " },
		"Pokémon 3":        { "id": "3", "coords": [  3, 107,   154, 139], "ref": "   " },
		"Pokémon 4":        { "id": "4", "coords": [  3, 140,   154, 172], "ref": "   " },
		"Pokémon 5":        { "id": "5", "coords": [  3, 173,   154, 205], "ref": "   " },
		"Pokémon 6":        { "id": "6", "coords": [  3, 206,   154, 238], "ref": "   " },
		"Scroll":           { "id": "i", "coords": [313,  19,   319, 190], "ref": "   " },
		"Last used":        { "id": "m", "coords": [165, 210,   194, 239], "ref": "   " },
		"Sort":             { "id": "l", "coords": [205, 210,   234, 239], "ref": "NEW" },
		"Quit":             { "id": "q", "coords": [245, 210,   274, 239], "ref": "END" },
		"Cancel":           { "id": "x", "coords": [285, 210,   314, 239], "ref": "oa"  },
	},
	"Bag item": {
		"id": "i",
		"Use":              { "id": "u", "coords": [230, 120,   319, 149], "ref": "   " },
		"Give":             { "id": "g", "coords": [230, 150,   319, 179], "ref": "   " },
		"Discard":          { "id": "t", "coords": [230, 180,   319, 209], "ref": "ot"  },
		"Cancel":           { "id": "x", "coords": [230, 210,   319, 239], "ref": "ob"  },
	},
	"Key item": {
		"id": "k",
		"Use":              { "id": "u", "coords": [230, 150,   319, 179], "ref": "   " }, // "Walk" when on bike
		"Register":         { "id": "r", "coords": [230, 180,   319, 209], "ref": "   " },
		"Cancel":           { "id": "x", "coords": [230, 210,   319, 239], "ref": "ob"  },
	},
	"TM item": {
		"id": "h",
		"Use":              { "id": "u", "coords": [230, 180,   319, 209], "ref": "oH" },
		"Cancel":           { "id": "x", "coords": [230, 210,   319, 239], "ref": "ob"  },
	},
	"TM Pokémon": {
		"id": "H",
		"Pokémon 1":        { "id": "1", "coords": [  3,  41,   154,  73], "ref": "oC"  },
		"Pokémon 2":        { "id": "2", "coords": [  3,  74,   154, 106], "ref": "oC"  },
		"Pokémon 3":        { "id": "3", "coords": [  3, 107,   154, 139], "ref": "oC"  },
		"Pokémon 4":        { "id": "4", "coords": [  3, 140,   154, 172], "ref": "oC"  },
		"Pokémon 5":        { "id": "5", "coords": [  3, 173,   154, 205], "ref": "oC"  },
		"Pokémon 6":        { "id": "6", "coords": [  3, 206,   154, 238], "ref": "oC"  },
		"Cancel":           { "id": "x", "coords": [285, 210,   314, 239], "ref": "END" },
	},
	"TM teach": {
		"id": "C",
		"Yes":              { "id": "y", "coords": [230,  70,   319,  99], "ref": "oL"  },
		"No":               { "id": "x", "coords": [230, 100,   319, 129], "ref": "END" },
	},
	"TM delete": {
		"id": "L",
		"Yes":              { "id": "y", "coords": [230,  70,   319,  99], "ref": "ol"  },
		"No":               { "id": "x", "coords": [230, 100,   319, 129], "ref": "om"  },
	},
	"TM move": {
		"id": "l",
		"Move 1":           { "id": "1", "coords": [140,   0,   319,  39], "ref": "   " },
		"Move 2":           { "id": "2", "coords": [140,  40,   319,  79], "ref": "   " },
		"Move 3":           { "id": "3", "coords": [140,  80,   319, 119], "ref": "   " },
		"Move 4":           { "id": "4", "coords": [140, 120,   319, 159], "ref": "   " },
		"Forget":           { "id": "f", "coords": [140, 170,   319, 209], "ref": "END" },
		"Cancel":           { "id": "x", "coords": [280, 210,   309, 239], "ref": "END" },
	},
	"TM give up": {
		"id": "m",
		"Yes":              { "id": "y", "coords": [230,  70,   319,  99], "ref": "END" },
		"No":               { "id": "x", "coords": [230, 100,   319, 129], "ref": "oL"  },
	},
	"Trash count": {
		"id": "t",
		"Trash":            { "id": "t", "coords": [208,  87,   314, 143], "ref": "ou"  },
		"More":             { "id": "j", "coords": [208, 144,   314, 171], "ref": "   " },
		"Less":             { "id": "k", "coords": [208, 172,   314, 199], "ref": "   " },
		"Cancel":           { "id": "x", "coords": [283, 200,   312, 229], "ref": "ob"  },
	},
	"Trash confirm": {
		"id": "u",
		"Yes":              { "id": "y", "coords": [230,  70,   319,  99], "ref": "END" },
		"No":               { "id": "x", "coords": [230, 100,   319, 129], "ref": "ob"  },
	},
	"Pokémon": {
		"id": "p",
		"Pokémon 1":        { "id": "1", "coords": [  0,   0,   159,  66], "ref": "od"  },
		"Pokémon 2":        { "id": "2", "coords": [160,  15,   319,  74], "ref": "od"  },
		"Pokémon 3":        { "id": "3", "coords": [  0,  70,   159, 129], "ref": "od"  },
		"Pokémon 4":        { "id": "4", "coords": [160,  80,   319, 139], "ref": "od"  },
		"Pokémon 5":        { "id": "5", "coords": [  0, 135,   159, 194], "ref": "od"  },
		"Pokémon 6":        { "id": "6", "coords": [160, 145,   319, 204], "ref": "od"  },
		"Move Pokémon":     { "id": "m", "coords": [ 10, 210,    69, 239], "ref": "   " },
		"Move items":       { "id": "l", "coords": [ 80, 210,   139, 239], "ref": "   " },
		"Quit":             { "id": "q", "coords": [240, 210,   269, 239], "ref": "END" },
		"Cancel":           { "id": "x", "coords": [280, 210,   309, 239], "ref": "oa"  },
	},
	"Pokémon Do": {
		"id": "d",
		"Summary":          { "id": "w", "coords": [220,  60,   319,  89], "ref": "   " },
		"Use move":         { "id": "m", "coords": [220,  90,   319, 119], "ref": "   " },
		"Restore":          { "id": "r", "coords": [220, 120,   319, 149], "ref": "   " },
		"Item":             { "id": "i", "coords": [220, 150,   319, 179], "ref": "oj"  },
		"Switch":           { "id": "s", "coords": [220, 180,   319, 209], "ref": "   " },
		"Back":             { "id": "q", "coords": [220, 210,   319, 239], "ref": "op"  },
		"Move 1":           { "id": "1", "coords": [130,  90,   219, 119], "ref": "   " },
		"Move 2":           { "id": "2", "coords": [130, 120,   219, 149], "ref": "   " },
		"Move 3":           { "id": "3", "coords": [130, 150,   219, 179], "ref": "   " },
		"Move 4":           { "id": "4", "coords": [130, 180,   219, 209], "ref": "   " },
	},
	"Pokémon Item": {
		"id": "j",
		"Use/Give":         { "id": "g", "coords": [230, 120,   319, 149], "ref": "   " }, // "Read" when holding mail
		"Take":             { "id": "t", "coords": [230, 150,   319, 179], "ref": "   " },
		"Move":             { "id": "m", "coords": [230, 180,   319, 209], "ref": "   " },
		"Back":             { "id": "q", "coords": [230, 210,   319, 239], "ref": "op"  },
	},
	"Options": {
		"id": "o",
		"Speed Prev":       { "id": "A", "coords": [145,  45,   164,  74], "ref": "   " },
		"Speed Next":       { "id": "a", "coords": [295,  45,   314,  74], "ref": "   " },
		"Effects Prev":     { "id": "B", "coords": [145,  75,   164, 104], "ref": "   " },
		"Effects Next":     { "id": "b", "coords": [295,  75,   314, 104], "ref": "   " },
		"Style Prev":       { "id": "C", "coords": [145, 105,   164, 134], "ref": "   " },
		"Style Next":       { "id": "c", "coords": [295, 105,   314, 134], "ref": "   " },
		"BG Prev":          { "id": "D", "coords": [145, 135,   164, 164], "ref": "   " },
		"BG Next":          { "id": "d", "coords": [295, 135,   314, 164], "ref": "   " },
		"Button Prev":      { "id": "E", "coords": [145, 165,   164, 194], "ref": "   " },
		"Button Next":      { "id": "e", "coords": [295, 165,   314, 194], "ref": "   " },
		"Quit":             { "id": "q", "coords": [ 45, 210,    74, 239], "ref": "   " },
		"Confirm":          { "id": "u", "coords": [100, 210,   209, 239], "ref": "END" },
		"Cancel":           { "id": "x", "coords": [210, 210,   319, 239], "ref": "oO"  }, // Button label is actually "Quit"
	},
	"Options save": {
		"id": "O",
		"Yes":              { "id": "y", "coords": [190,  60,   319,  89], "ref": "END" },
		"No":               { "id": "n", "coords": [190,  90,   319, 119], "ref": "END" },
	},
},
"PSS": {
	"id": "s",
	"PSS": {
		"id": "s",
		"Pokémon":          { "id": "p", "coords": [ 30, 210,    59, 239], "ref": "op"  },
		"Pokédex":          { "id": "d", "coords": [ 76, 210,   105, 239], "ref": "NEW" },
		"Bag":              { "id": "b", "coords": [122, 210,   151, 239], "ref": "ob"  },
		"Trainer card":     { "id": "c", "coords": [168, 210,   197, 239], "ref": "NEW" },
		"Save":             { "id": "s", "coords": [214, 210,   243, 239], "ref": "NEW" },
		"Options":          { "id": "o", "coords": [260, 210,   289, 239], "ref": "oo"  },
		"Previous":         { "id": "j", "coords": [  0,   0,    34,  24], "ref": "NEW" },
		"Apps":             { "id": "a", "coords": [145,   0,   174,  29], "ref": "NEW" },
		"Internet":         { "id": "i", "coords": [215,   0,   244,  29], "ref": "NEW" },
		"Next":             { "id": "k", "coords": [285,   0,   319,  24], "ref": "NEW" },
	},
	"Apps 1": {
		"id": "a",
		"Battle":           { "id": "1", "coords": [ 70,  30,   109,  69], "ref": "NEW" },
		"Trade":            { "id": "2", "coords": [210,  30,   249,  69], "ref": "NEW" },
		"Battle Spot":      { "id": "3", "coords": [ 70, 100,   109, 139], "ref": "NEW" },
		"Wonder Trade":     { "id": "4", "coords": [210, 100,   249, 139], "ref": "NEW" },
		"Shout-Out":        { "id": "5", "coords": [ 70, 170,   109, 209], "ref": "NEW" },
		"Holo Caster":      { "id": "6", "coords": [210, 170,   249, 209], "ref": "NEW" },
		"Next":             { "id": "k", "coords": [295, 100,   319, 139], "ref": "sA"  },
		"Cancel":           { "id": "x", "coords": [290, 210,   319, 239], "ref": "ss"  },
	},
	"Apps 2": {
		"id": "A",
		"GTS":              { "id": "1", "coords": [ 70,  30,   109,  69], "ref": "NEW" },
		"Game Sync":        { "id": "2", "coords": [210,  30,   249,  69], "ref": "NEW" },
		"O-Power":          { "id": "3", "coords": [ 70, 100,   109, 139], "ref": "so"  },
		"Favorites List":   { "id": "4", "coords": [210, 100,   249, 139], "ref": "NEW" },
		"Profile":          { "id": "5", "coords": [ 70, 170,   109, 209], "ref": "NEW" },
		"PSS Settings":     { "id": "6", "coords": [210, 170,   249, 209], "ref": "NEW" },
		"Previous":         { "id": "j", "coords": [  0, 100,    24, 139], "ref": "sa"  },
		"Cancel":           { "id": "x", "coords": [290, 210,   319, 239], "ref": "ss"  },
	},
	"O-Power": {
		"id": "o",
		"Power 1":          { "id": "1", "coords": [ 65,   5,   304,  34], "ref": "sO"  },
		"Power 2":          { "id": "2", "coords": [ 65,  35,   304,  64], "ref": "sO"  },
		"Power 3":          { "id": "3", "coords": [ 65,  65,   304,  94], "ref": "sO"  },
		"Power 4":          { "id": "4", "coords": [ 65,  95,   304, 124], "ref": "sO"  },
		"Power 5":          { "id": "5", "coords": [ 65, 125,   304, 154], "ref": "sO"  },
		"Power 6":          { "id": "6", "coords": [ 65, 155,   304, 184], "ref": "sO"  },
		"Scroll":           { "id": "i", "coords": [305,  20,   319, 169], "ref": "   " },
		"Cancel":           { "id": "x", "coords": [280, 210,   309, 239], "ref": "sA"  },
	},
	"O-Power use": {
		"id": "O",
		"Use":              { "id": "y", "coords": [  0, 210,   109, 239], "ref": "END" },
		"Cancel":           { "id": "x", "coords": [220, 210,   319, 239], "ref": "so"  },
	},
},
"PC": {
	"id": "p",
	"PC": {
		"id": "p",
		"Cassius":          { "id": "c", "coords": [ 20,  35,   299,  64], "ref": "pc"  },
		"Professor":        { "id": "p", "coords": [ 20,  85,   299, 114], "ref": "   " },
		"PR Videos":        { "id": "v", "coords": [ 20, 135,   299, 164], "ref": "   " },
		"Power Off":        { "id": "q", "coords": [ 20, 185,   299, 214], "ref": "   " },
	},
	"Cassius": {
		"id": "c",
		"Deposit":          { "id": "d", "coords": [ 20,  25,   299,  54], "ref": "pd"  },
		"Withdraw":         { "id": "w", "coords": [ 20,  65,   299,  94], "ref": "pw"  },
		"Boxes":            { "id": "b", "coords": [ 20, 105,   299, 134], "ref": "   " },
		"Items":            { "id": "i", "coords": [ 20, 145,   299, 174], "ref": "   " },
		"Log Out":          { "id": "q", "coords": [ 20, 185,   299, 214], "ref": "pp"  },
	},
	"Deposit": {
		"id": "d",
		"Pokémon 1":        { "id": "1", "coords": [ 50,  45,    99,  84], "ref": "   " },
		"Pokémon 2":        { "id": "2", "coords": [100,  65,   149, 104], "ref": "   " },
		"Pokémon 3":        { "id": "3", "coords": [ 50,  85,    99, 124], "ref": "   " },
		"Pokémon 4":        { "id": "4", "coords": [100, 105,   149, 144], "ref": "   " },
		"Pokémon 5":        { "id": "5", "coords": [ 50, 125,    99, 164], "ref": "   " },
		"Pokémon 6":        { "id": "6", "coords": [100, 145,   149, 184], "ref": "   " },
		"Deposit":          { "id": "d", "coords": [210,  50,   319,  79], "ref": "   " },
		"Summary":          { "id": "w", "coords": [210,  80,   319, 109], "ref": "   " },
		"Marking":          { "id": "m", "coords": [210, 110,   319, 139], "ref": "   " },
		"Release":          { "id": "r", "coords": [210, 140,   319, 169], "ref": "pr"  },
		"Cancel":           { "id": "x", "coords": [210, 170,   319, 199], "ref": "   " },
	},
	"Withdraw": {
		"id": "w",
		"Withdraw":         { "id": "d", "coords": [210,  50,   319,  79], "ref": "   " },
		"Summary":          { "id": "w", "coords": [210,  80,   319, 109], "ref": "   " },
		"Marking":          { "id": "m", "coords": [210, 110,   319, 139], "ref": "   " },
		"Release":          { "id": "r", "coords": [210, 140,   319, 169], "ref": "pr"  },
		"Cancel":           { "id": "x", "coords": [210, 170,   319, 199], "ref": "   " },
	},
	"Release": {
		"id": "r",
		"Yes":              { "id": "y", "coords": [230, 140,   319, 169], "ref": "   " },
		"No":               { "id": "x", "coords": [230, 170,   319, 199], "ref": "   " },
	},
	"Continue": {
		"id": "q",
		"Yes":              { "id": "y", "coords": [230, 140,   319, 169], "ref": "   " },
		"No":               { "id": "x", "coords": [230, 170,   319, 199], "ref": "pc"  },
	},
	"Box": {
		"id": "b",
		"Previous box":     { "id": "j", "coords": [  0,  15,    19,  44], "ref": "   " },
		"Next box":         { "id": "k", "coords": [190,  15,   209,  44], "ref": "   " },
		"Slot 1 (1,1)":     { "id": "1", "coords": [ 15,  50,    44,  79], "ref": "   " },
		"Slot 2 (1,2)":     { "id": "2", "coords": [ 45,  50,    74,  79], "ref": "   " },
		"Slot 3 (1,3)":     { "id": "3", "coords": [ 75,  50,   104,  79], "ref": "   " },
		"Slot 4 (1,4)":     { "id": "4", "coords": [105,  50,   134,  79], "ref": "   " },
		"Slot 5 (1,5)":     { "id": "5", "coords": [135,  50,   164,  79], "ref": "   " },
		"Slot 6 (1,6)":     { "id": "6", "coords": [165,  50,   194,  79], "ref": "   " },
		"Slot 7 (2,1)":     { "id": "7", "coords": [ 15,  80,    44, 109], "ref": "   " },
		"Slot 8 (2,2)":     { "id": "8", "coords": [ 45,  80,    74, 109], "ref": "   " },
		"Slot 9 (2,3)":     { "id": "9", "coords": [ 75,  80,   104, 109], "ref": "   " },
		"Slot 10 (2,4)":    { "id": "A", "coords": [105,  80,   134, 109], "ref": "   " },
		"Slot 11 (2,5)":    { "id": "B", "coords": [135,  80,   164, 109], "ref": "   " },
		"Slot 12 (2,6)":    { "id": "C", "coords": [165,  80,   194, 109], "ref": "   " },
		"Slot 13 (3,1)":    { "id": "D", "coords": [ 15, 110,    44, 139], "ref": "   " },
		"Slot 14 (3,2)":    { "id": "E", "coords": [ 45, 110,    74, 139], "ref": "   " },
		"Slot 15 (3,3)":    { "id": "F", "coords": [ 75, 110,   104, 139], "ref": "   " },
		"Slot 16 (3,4)":    { "id": "G", "coords": [105, 110,   134, 139], "ref": "   " },
		"Slot 17 (3,5)":    { "id": "H", "coords": [135, 110,   164, 139], "ref": "   " },
		"Slot 18 (3,6)":    { "id": "I", "coords": [165, 110,   194, 139], "ref": "   " },
		"Slot 19 (4,1)":    { "id": "J", "coords": [ 15, 140,    44, 169], "ref": "   " },
		"Slot 20 (4,2)":    { "id": "K", "coords": [ 45, 140,    74, 169], "ref": "   " },
		"Slot 21 (4,3)":    { "id": "L", "coords": [ 75, 140,   104, 169], "ref": "   " },
		"Slot 22 (4,4)":    { "id": "M", "coords": [105, 140,   134, 169], "ref": "   " },
		"Slot 23 (4,5)":    { "id": "N", "coords": [135, 140,   164, 169], "ref": "   " },
		"Slot 24 (4,6)":    { "id": "O", "coords": [165, 140,   194, 169], "ref": "   " },
		"Slot 25 (5,1)":    { "id": "P", "coords": [ 15, 170,    44, 199], "ref": "   " },
		"Slot 26 (5,2)":    { "id": "Q", "coords": [ 45, 170,    74, 199], "ref": "   " },
		"Slot 27 (5,3)":    { "id": "R", "coords": [ 75, 170,   104, 199], "ref": "   " },
		"Slot 28 (5,4)":    { "id": "S", "coords": [105, 170,   134, 199], "ref": "   " },
		"Slot 29 (5,5)":    { "id": "T", "coords": [135, 170,   164, 199], "ref": "   " },
		"Slot 30 (5,6)":    { "id": "U", "coords": [165, 170,   194, 199], "ref": "   " },
		"Exit PC":          { "id": "z", "coords": [240, 210,   269, 239], "ref": "END" },
		"Quit":             { "id": "q", "coords": [280, 210,   309, 239], "ref": "pq"  },
	},
},
"Misc": { /* (nicknames, Pokéathlon, etc.) */
	"id": "z",
	"Fly": {
		"id": "f",
		"Vaniville Town":   { "id": "A", "coords": [207, 175,   216, 184], "ref": "   " },
		"Aquacorde Town":   { "id": "B", "coords": [207, 151,   216, 160], "ref": "   " },
		"Santalune City":   { "id": "C", "coords": [192, 114,   201, 123], "ref": "   " },
		"Lumiose City":     { "id": "D", "coords": [161,  73,   170,  82], "ref": "   " },
		"Camphrier Town":   { "id": "E", "coords": [126, 116,   135, 125], "ref": "   " },
		"Cyllage City":     { "id": "F", "coords": [ 51, 115,    60, 124], "ref": "   " },
		"Ambrette Town":    { "id": "G", "coords": [ 67, 154,    76, 163], "ref": "   " },
		"Geosenge Town":    { "id": "H", "coords": [ 24,  95,    33, 104], "ref": "   " },
		"Shalour City":     { "id": "I", "coords": [ 43,  71,    52,  80], "ref": "   " },
		"Coumarine City":   { "id": "J", "coords": [105,  58,   114,  67], "ref": "   " },
		"Laverre City":     { "id": "K", "coords": [160,  19,   169,  28], "ref": "   " },
		"Dendemille Town":  { "id": "L", "coords": [214,  58,   223,  67], "ref": "   " },
		"Anistar City":     { "id": "M", "coords": [276,  75,   285,  84], "ref": "   " },
		"Couriway Town":    { "id": "N", "coords": [293,  91,   302, 100], "ref": "   " },
		"Snowbelle City":   { "id": "O", "coords": [266, 112,   275, 121], "ref": "   " },
		"Pokémon League":   { "id": "P", "coords": [230,  87,   239,  96], "ref": "   " },
		"Kiloude City":     { "id": "Q", "coords": [235, 189,   244, 198], "ref": "   " },
		"Zoom":             { "id": "l", "coords": [205, 210,   234, 239], "ref": "   " },
		"Quit":             { "id": "q", "coords": [245, 210,   274, 239], "ref": "   " },
		"Cancel":           { "id": "x", "coords": [285, 210,   314, 239], "ref": "   " },
	},
	"Name lower": {
		"id": "k",
		"A":                { "id": "A", "coords": [ 30,  50,    49,  79], "ref": "   " },
		"B":                { "id": "B", "coords": [ 50,  50,    69,  79], "ref": "   " },
		"C":                { "id": "C", "coords": [ 70,  50,    89,  79], "ref": "   " },
		"D":                { "id": "D", "coords": [ 90,  50,   109,  79], "ref": "   " },
		"E":                { "id": "E", "coords": [110,  50,   129,  79], "ref": "   " },
		"F":                { "id": "F", "coords": [130,  50,   149,  79], "ref": "   " },
		"G":                { "id": "G", "coords": [150,  50,   169,  79], "ref": "   " },
		"H":                { "id": "H", "coords": [170,  50,   189,  79], "ref": "   " },
		"I":                { "id": "I", "coords": [190,  50,   209,  79], "ref": "   " },
		"J":                { "id": "J", "coords": [210,  50,   229,  79], "ref": "   " },
		",":                { "id": "c", "coords": [250,  50,   269,  79], "ref": "   " },
		".":                { "id": "d", "coords": [270,  50,   289,  79], "ref": "   " },
		"K":                { "id": "K", "coords": [ 30,  80,    49, 109], "ref": "   " },
		"L":                { "id": "L", "coords": [ 50,  80,    69, 109], "ref": "   " },
		"M":                { "id": "M", "coords": [ 70,  80,    89, 109], "ref": "   " },
		"N":                { "id": "N", "coords": [ 90,  80,   109, 109], "ref": "   " },
		"O":                { "id": "O", "coords": [110,  80,   129, 109], "ref": "   " },
		"P":                { "id": "P", "coords": [130,  80,   149, 109], "ref": "   " },
		"Q":                { "id": "Q", "coords": [150,  80,   169, 109], "ref": "   " },
		"R":                { "id": "R", "coords": [170,  80,   189, 109], "ref": "   " },
		"S":                { "id": "S", "coords": [190,  80,   209, 109], "ref": "   " },
		"T":                { "id": "T", "coords": [210,  80,   229, 109], "ref": "   " },
		"'":                { "id": "a", "coords": [250,  80,   269, 109], "ref": "   " },
		"-":                { "id": "b", "coords": [270,  80,   289, 109], "ref": "   " },
		"U":                { "id": "U", "coords": [ 30, 110,    49, 139], "ref": "   " },
		"V":                { "id": "V", "coords": [ 50, 110,    69, 139], "ref": "   " },
		"W":                { "id": "W", "coords": [ 70, 110,    89, 139], "ref": "   " },
		"X":                { "id": "X", "coords": [ 90, 110,   109, 139], "ref": "   " },
		"Y":                { "id": "Y", "coords": [110, 110,   129, 139], "ref": "   " },
		"Z":                { "id": "Z", "coords": [130, 110,   149, 139], "ref": "   " },
		"♂":                { "id": "e", "coords": [250, 110,   269, 139], "ref": "   " },
		"♀":                { "id": "f", "coords": [270, 110,   289, 139], "ref": "   " },
		"É":                { "id": "g", "coords": [ 30, 140,    49, 169], "ref": "   " },
		"!":                { "id": "h", "coords": [250, 140,   269, 169], "ref": "   " },
		"?":                { "id": "i", "coords": [270, 140,   289, 169], "ref": "   " },
		"0":                { "id": "0", "coords": [ 30, 170,    49, 199], "ref": "   " },
		"1":                { "id": "1", "coords": [ 50, 170,    69, 199], "ref": "   " },
		"2":                { "id": "2", "coords": [ 70, 170,    89, 199], "ref": "   " },
		"3":                { "id": "3", "coords": [ 90, 170,   109, 199], "ref": "   " },
		"4":                { "id": "4", "coords": [110, 170,   129, 199], "ref": "   " },
		"5":                { "id": "5", "coords": [130, 170,   149, 199], "ref": "   " },
		"6":                { "id": "6", "coords": [150, 170,   169, 199], "ref": "   " },
		"7":                { "id": "7", "coords": [170, 170,   189, 199], "ref": "   " },
		"8":                { "id": "8", "coords": [190, 170,   209, 199], "ref": "   " },
		"9":                { "id": "9", "coords": [210, 170,   229, 199], "ref": "   " },
		"Caps":             { "id": "u", "coords": [ 30, 200,    69, 229], "ref": "   " },
		"Lower":            { "id": "l", "coords": [ 70, 200,   109, 229], "ref": "   " },
		"Symbols":          { "id": "o", "coords": [110, 200,   149, 229], "ref": "   " },
		"Qwerty":           { "id": "q", "coords": [295, 120,   319, 159], "ref": "zq"  },
		"Delete":           { "id": "z", "coords": [150, 200,   209, 229], "ref": "   " },
		"OK":               { "id": "y", "coords": [210, 200,   289, 229], "ref": "   " },
	},
	"Name keyboard": {
		"id": "q",
		"!":                { "id": "h", "coords": [ 20,  60,    39,  89], "ref": "   " },
		"♂":                { "id": "e", "coords": [ 40,  60,    59,  89], "ref": "   " },
		"♀":                { "id": "f", "coords": [ 60,  60,    79,  89], "ref": "   " },
		"+":                { "id": "j", "coords": [ 80,  60,    99,  89], "ref": "   " },
		"-":                { "id": "k", "coords": [100,  60,   119,  89], "ref": "   " },
		"*":                { "id": "m", "coords": [120,  60,   139,  89], "ref": "   " },
		"/":                { "id": "n", "coords": [140,  60,   159,  89], "ref": "   " },
		"=":                { "id": "p", "coords": [160,  60,   179,  89], "ref": "   " },
		"%":                { "id": "r", "coords": [180,  60,   199,  89], "ref": "   " },
		"(":                { "id": "s", "coords": [200,  60,   219,  89], "ref": "   " },
		")":                { "id": "t", "coords": [220,  60,   239,  89], "ref": "   " },
		"Delete":           { "id": "z", "coords": [240,  60,   289,  89], "ref": "   " },
		"Q":                { "id": "Q", "coords": [ 30,  95,    49, 124], "ref": "   " },
		"W":                { "id": "W", "coords": [ 50,  95,    69, 124], "ref": "   " },
		"E":                { "id": "E", "coords": [ 70,  95,    89, 124], "ref": "   " },
		"R":                { "id": "R", "coords": [ 90,  95,   109, 124], "ref": "   " },
		"T":                { "id": "T", "coords": [110,  95,   129, 124], "ref": "   " },
		"Y":                { "id": "Y", "coords": [130,  95,   149, 124], "ref": "   " },
		"U":                { "id": "U", "coords": [150,  95,   169, 124], "ref": "   " },
		"I":                { "id": "I", "coords": [170,  95,   189, 124], "ref": "   " },
		"O":                { "id": "O", "coords": [190,  95,   209, 124], "ref": "   " },
		"P":                { "id": "P", "coords": [210,  95,   229, 124], "ref": "   " },
		"OK":               { "id": "y", "coords": [230,  95,   289, 124], "ref": "   " },
		"A":                { "id": "A", "coords": [ 40, 130,    59, 159], "ref": "   " },
		"S":                { "id": "S", "coords": [ 60, 130,    79, 159], "ref": "   " },
		"D":                { "id": "D", "coords": [ 80, 130,    99, 159], "ref": "   " },
		"F":                { "id": "F", "coords": [100, 130,   119, 159], "ref": "   " },
		"G":                { "id": "G", "coords": [120, 130,   139, 159], "ref": "   " },
		"H":                { "id": "H", "coords": [140, 130,   159, 159], "ref": "   " },
		"J":                { "id": "J", "coords": [160, 130,   179, 159], "ref": "   " },
		"K":                { "id": "K", "coords": [180, 130,   199, 159], "ref": "   " },
		"L":                { "id": "L", "coords": [200, 130,   219, 159], "ref": "   " },
		"'":                { "id": "a", "coords": [220, 130,   239, 159], "ref": "   " },
		":":                { "id": "v", "coords": [240, 130,   259, 159], "ref": "   " },
		"É":                { "id": "g", "coords": [260, 130,   279, 159], "ref": "   " },
		"Z":                { "id": "Z", "coords": [ 50, 165,    69, 194], "ref": "   " },
		"X":                { "id": "X", "coords": [ 70, 165,    89, 194], "ref": "   " },
		"C":                { "id": "C", "coords": [ 90, 165,   109, 194], "ref": "   " },
		"V":                { "id": "V", "coords": [110, 165,   129, 194], "ref": "   " },
		"B":                { "id": "B", "coords": [130, 165,   149, 194], "ref": "   " },
		"N":                { "id": "N", "coords": [150, 165,   169, 194], "ref": "   " },
		"M":                { "id": "M", "coords": [170, 165,   189, 194], "ref": "   " },
		",":                { "id": "c", "coords": [190, 165,   209, 194], "ref": "   " },
		".":                { "id": "d", "coords": [210, 165,   229, 194], "ref": "   " },
		"?":                { "id": "i", "coords": [230, 165,   249, 194], "ref": "   " },
		"\u201C":           { "id": "w", "coords": [250, 165,   269, 194], "ref": "   " },
		"\u201D":           { "id": "x", "coords": [270, 165,   289, 194], "ref": "   " },
		"Space":            { "id": "0", "coords": [ 50, 200,   229, 229], "ref": "   " },
		"Shift":            { "id": "1", "coords": [230, 200,   289, 229], "ref": "   " },
		"Grid":             { "id": "q", "coords": [  0, 120,    24, 159], "ref": "zk"  },
	},
	"Daycare store": {
		"id": "d",
		"Leave":            { "id": "s", "coords": [200, 150,   319, 179], "ref": "   " },
		"Summary":          { "id": "w", "coords": [200, 180,   319, 209], "ref": "   " },
		"Back":             { "id": "q", "coords": [200, 210,   319, 239], "ref": "   " },
	},
	"Starters": {
		"id": "s",
		"Chespin":          { "id": "A", "coords": [ 60, 115,    89, 144], "ref": "   " },
		"Fennekin":         { "id": "B", "coords": [145, 115,   174, 144], "ref": "   " },
		"Froakie":          { "id": "C", "coords": [230, 115,   259, 144], "ref": "   " },
	},
},
};
