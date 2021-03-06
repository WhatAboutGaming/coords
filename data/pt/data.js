var game = 'pt';
var game_name = 'Platinum';
var bounds =                [  0,   0,   255, 191];
var coords = {
"Battle": {
	"id": "b",
	"Battle": {
		"id": "b",
		"Fight":            { "id": "f", "coords": [  0,  23,   253, 142], "ref": "bf"  },
		"Bag":              { "id": "b", "coords": [  0, 143,    78, 191], "ref": "bg"  },
		"Run":              { "id": "r", "coords": [ 87, 151,   166, 191], "ref": "END" },
		"Pokémon":          { "id": "p", "coords": [175, 143,   253, 191], "ref": "bp"  },
	},
	"Fight": {
		"id": "f",
		"Attack 1":         { "id": "1", "coords": [  0,  23,   126,  78], "ref": ["END", "bd"] },
		"Attack 2":         { "id": "2", "coords": [127,  23,   253,  78], "ref": ["END", "bd"] },
		"Attack 3":         { "id": "3", "coords": [  0,  87,   126, 142], "ref": ["END", "bd"] },
		"Attack 4":         { "id": "4", "coords": [127,  87,   253, 142], "ref": ["END", "bd"] },
		"Cancel":           { "id": "x", "coords": [  7, 151,   246, 191], "ref": "bb"  },
	},
	"Double battle": {
		"id": "d",
		"Foe 1":            { "id": "1", "coords": [  0,   7,   118,  78], "ref": "END" },
		"Foe 2":            { "id": "2", "coords": [135,   7,   253,  78], "ref": "END" },
		"Ally 1":           { "id": "a", "coords": [  0,  87,   118, 142], "ref": "END" },
		"Ally 2":           { "id": "b", "coords": [135,  87,   253, 142], "ref": "END" },
		"Cancel":           { "id": "x", "coords": [  7, 151,   246, 191], "ref": "bf"  },
	},
	"Bag": {
		"id": "g",
		"Restore":          { "id": "r", "coords": [  0,   7,   125,  77], "ref": "bq"  },
		"Balls":            { "id": "b", "coords": [127,   7,   253,  77], "ref": "bq"  },
		"Status":           { "id": "s", "coords": [  0,  79,   125, 149], "ref": "bq"  },
		"Battle items":     { "id": "i", "coords": [127,  79,   253, 149], "ref": "bq"  },
		"Last used":        { "id": "u", "coords": [  0, 151,   205, 189], "ref": "bi"  },
		"Cancel":           { "id": "x", "coords": [215, 151,   253, 189], "ref": "bb"  },
	},
	"Pocket": {
		"id": "q",
		"Item 1":           { "id": "1", "coords": [  0,   7,   125,  53], "ref": "bi"  },
		"Item 2":           { "id": "2", "coords": [127,   7,   253,  53], "ref": "bi"  },
		"Item 3":           { "id": "3", "coords": [  0,  55,   125, 101], "ref": "bi"  },
		"Item 4":           { "id": "4", "coords": [127,  55,   253, 101], "ref": "bi"  },
		"Item 5":           { "id": "5", "coords": [  0, 103,   125, 149], "ref": "bi"  },
		"Item 6":           { "id": "6", "coords": [127, 103,   253, 149], "ref": "bi"  },
		"Previous":         { "id": "j", "coords": [  0, 151,    37, 189], "ref": "bq"  },
		"Next":             { "id": "k", "coords": [ 39, 151,    77, 189], "ref": "bq"  },
		"Cancel":           { "id": "x", "coords": [215, 151,   253, 189], "ref": "bg"  },
	},
	"Item": {
		"id": "i",
		"Use":              { "id": "u", "coords": [  0, 151,   205, 189], "ref": "END" },
		"Cancel":           { "id": "x", "coords": [215, 151,   253, 189], "ref": "bq"  },
	},
	"Pokémon": { // Also for "use item on"
		"id": "p",
		"Pokémon 1":        { "id": "1", "coords": [  0,   0,   125,  45], "ref": "bs"  },
		"Pokémon 2":        { "id": "2", "coords": [127,   7,   253,  53], "ref": "bs"  },
		"Pokémon 3":        { "id": "3", "coords": [  0,  47,   125,  93], "ref": "bs"  },
		"Pokémon 4":        { "id": "4", "coords": [127,  55,   253, 101], "ref": "bs"  },
		"Pokémon 5":        { "id": "5", "coords": [  0,  95,   125, 141], "ref": "bs"  },
		"Pokémon 6":        { "id": "6", "coords": [127, 103,   253, 149], "ref": "bs"  },
		"Cancel":           { "id": "x", "coords": [215, 151,   253, 189], "ref": "bb"  },
	},
	"Switch": {
		"id": "s",
		"Switch":           { "id": "s", "coords": [  7,   7,   245, 141], "ref": "END" },
		"Summary":          { "id": "w", "coords": [  0, 151,   101, 189], "ref": "bw"  },
		"Check moves":      { "id": "m", "coords": [103, 151,   205, 189], "ref": "bc"  },
		"Cancel":           { "id": "x", "coords": [215, 151,   253, 189], "ref": "bp"  },
	},
	"Summary": {
		"id": "w",
		"Previous":         { "id": "j", "coords": [  0, 151,    37, 189], "ref": "bw"  },
		"Next":             { "id": "k", "coords": [ 39, 151,    77, 189], "ref": "bw"  },
		"Check moves":      { "id": "m", "coords": [ 95, 151,   197, 189], "ref": "bc"  },
		"Cancel":           { "id": "x", "coords": [215, 151,   253, 189], "ref": "bs"  },
	},
	"Check moves": {
		"id": "c",
		"Move 1":           { "id": "1", "coords": [  0,  47,   125,  93], "ref": "bm"  },
		"Move 2":           { "id": "2", "coords": [127,  47,   253,  93], "ref": "bm"  },
		"Move 3":           { "id": "3", "coords": [  0,  95,   125, 141], "ref": "bm"  },
		"Move 4":           { "id": "4", "coords": [127,  95,   253, 141], "ref": "bm"  },
		"Previous":         { "id": "j", "coords": [  0, 151,    37, 189], "ref": "bc"  },
		"Next":             { "id": "k", "coords": [ 39, 151,    77, 189], "ref": "bc"  },
		"Summary":          { "id": "w", "coords": [ 95, 151,   197, 189], "ref": "bw"  },
		"Cancel":           { "id": "x", "coords": [215, 151,   253, 189], "ref": "bs"  },
	},
	"Move": {
		"id": "m",
		"Slot 1":           { "id": "1", "coords": [ 87, 151,   125, 165], "ref": "bm"  },
		"Slot 2":           { "id": "2", "coords": [127, 151,   165, 165], "ref": "bm"  },
		"Slot 3":           { "id": "3", "coords": [ 87, 167,   125, 181], "ref": "bm"  },
		"Slot 4":           { "id": "4", "coords": [127, 167,   165, 181], "ref": "bm"  },
		"Cancel":           { "id": "x", "coords": [215, 151,   253, 189], "ref": "bc"  },
	},
	"Nickname": {
		"id": "n",
		"Yes":              { "id": "y", "coords": [  7,  39,   246,  94], "ref": "zk"  },
		"No":               { "id": "x", "coords": [  7, 111,   246, 166], "ref": "END" },
	},
	"Delete move": {
		"id": "o",
		"Forget":           { "id": "f", "coords": [  7,  39,   246,  94], "ref": "bl"  },
		"Keep old":         { "id": "k", "coords": [  7, 111,   246, 166], "ref": "bu"  },
	},
	"Give up move": {
		"id": "u",
		"Give up":          { "id": "g", "coords": [  7,  39,   246,  94], "ref": "END" },
		"Don't give up":    { "id": "d", "coords": [  7, 111,   246, 166], "ref": "bo"  },
	},
	"Replace move": {
		"id": "l",
		"Battle/Contest":   { "id": "c", "coords": [183,   0,   253,  37], "ref": "   " },
		"Move 1":           { "id": "1", "coords": [  0,  47,   126,  94], "ref": "be"  },
		"Move 2":           { "id": "2", "coords": [127,  47,   255,  94], "ref": "be"  },
		"Move 3":           { "id": "3", "coords": [  0,  95,   126, 142], "ref": "be"  },
		"Move 4":           { "id": "4", "coords": [127,  95,   255, 142], "ref": "be"  },
		"New move":         { "id": "m", "coords": [ 63, 143,   190, 191], "ref": "bv"  },
		"Cancel":           { "id": "x", "coords": [215, 151,   255, 191], "ref": "bu"  },
	},
	"Forget move": {
		"id": "e",
		"Battle/Contest":   { "id": "c", "coords": [183,   0,   253,  37], "ref": "   " },
		"Forget":           { "id": "f", "coords": [  0, 151,   206, 191], "ref": "END" },
		"Back":             { "id": "x", "coords": [215, 151,   255, 191], "ref": "bl"  },
	},
	"New move": {
		"id": "v",
		"Battle/Contest":   { "id": "c", "coords": [183,   0,   253,  37], "ref": "   " },
		"Cancel":           { "id": "u", "coords": [  0, 151,   206, 191], "ref": "bu"  },
		"Back":             { "id": "x", "coords": [215, 151,   255, 191], "ref": "bl"  },
	},
},
"Overworld": {
	"id": "o",
	"Bag": {
		"id": "b",
		"Items":            { "id": "1", "coords": [  7,  32,    45,  69], "ref": "   " },
		"Medicine":         { "id": "2", "coords": [ 15,  80,    53, 117], "ref": "   " },
		"Balls":            { "id": "3", "coords": [ 39, 120,    77, 157], "ref": "   " },
		"TMs/HMs":          { "id": "4", "coords": [ 79, 144,   117, 181], "ref": "   " },
		"Berries":          { "id": "5", "coords": [135, 144,   173, 181], "ref": "   " },
		"Mail":             { "id": "6", "coords": [175, 120,   213, 157], "ref": "   " },
		"Battle items":     { "id": "7", "coords": [199,  80,   237, 117], "ref": "   " },
		"Key items":        { "id": "8", "coords": [207,  32,   245,  69], "ref": "   " },
		"Select":           { "id": "s", "coords": [103,  55,   149, 101], "ref": "END" },
	},
	"Pokémon": {
		"id": "p",
		"Pokémon 1":        { "id": "1", "coords": [  7,  23,    45,  61], "ref": "ow"  },
		"Pokémon 2":        { "id": "2", "coords": [207,  23,   245,  61], "ref": "ow"  },
		"Pokémon 3":        { "id": "3", "coords": [  7,  79,    45, 117], "ref": "ow"  },
		"Pokémon 4":        { "id": "4", "coords": [207,  79,   245, 117], "ref": "ow"  },
		"Pokémon 5":        { "id": "5", "coords": [  7, 135,    45, 173], "ref": "ow"  },
		"Pokémon 6":        { "id": "6", "coords": [207, 135,   245, 173], "ref": "ow"  },
	},
	"Pokémon Summary": {
		"id": "w",
		"Pokémon Info":     { "id": "1", "coords": [  7,  31,    45,  69], "ref": "   " },
		"Trainer Memo":     { "id": "2", "coords": [ 15,  79,    53, 117], "ref": "   " },
		"Pokémon Skills":   { "id": "3", "coords": [ 39, 119,    77, 157], "ref": "   " },
		"Battle Moves":     { "id": "4", "coords": [ 79, 143,   117, 181], "ref": "   " },
		"Condition":        { "id": "5", "coords": [135, 143,   173, 181], "ref": "   " },
		"Contest Moves":    { "id": "6", "coords": [175, 120,   213, 157], "ref": "   " },
		"Ribbons":          { "id": "7", "coords": [199,  79,   237, 117], "ref": "   " },
		"Exit":             { "id": "x", "coords": [207,  31,   245,  69], "ref": "op"  },
	},
},
"Misc": { /* (nicknames, Pokéathlon, etc.) */
	"id": "z",
	"Pokétch": {
		"id": "y",
		"Screen":           { "id": "s", "coords": [ 15,   15,  205, 173], "ref": "   " },
		"Up":               { "id": "j", "coords": [223,   31,  253,  94], "ref": "   " },
		"Down":             { "id": "k", "coords": [223,   95,  253, 158], "ref": "   " },
	},
	"Name": {
		"id": "k",
		"A":                { "id": "A", "coords": [ 27,  87,    43, 106], "ref": "   " },
		"B":                { "id": "B", "coords": [ 44,  87,    59, 106], "ref": "   " },
		"C":                { "id": "C", "coords": [ 60,  87,    75, 106], "ref": "   " },
		"D":                { "id": "D", "coords": [ 76,  87,    91, 106], "ref": "   " },
		"E":                { "id": "E", "coords": [ 92,  87,   107, 106], "ref": "   " },
		"F":                { "id": "F", "coords": [108,  87,   123, 106], "ref": "   " },
		"G":                { "id": "G", "coords": [124,  87,   139, 106], "ref": "   " },
		"H":                { "id": "H", "coords": [140,  87,   155, 106], "ref": "   " },
		"I":                { "id": "I", "coords": [156,  87,   171, 106], "ref": "   " },
		"J":                { "id": "J", "coords": [172,  87,   187, 106], "ref": "   " },
		",":                { "id": "c", "coords": [204,  87,   219, 106], "ref": "   " },
		".":                { "id": "d", "coords": [220,  87,   235, 106], "ref": "   " },
		"K":                { "id": "K", "coords": [ 27, 107,    43, 125], "ref": "   " },
		"L":                { "id": "L", "coords": [ 44, 107,    59, 125], "ref": "   " },
		"M":                { "id": "M", "coords": [ 60, 107,    75, 125], "ref": "   " },
		"N":                { "id": "N", "coords": [ 76, 107,    91, 125], "ref": "   " },
		"O":                { "id": "O", "coords": [ 92, 107,   107, 125], "ref": "   " },
		"P":                { "id": "P", "coords": [108, 107,   123, 125], "ref": "   " },
		"Q":                { "id": "Q", "coords": [124, 107,   139, 125], "ref": "   " },
		"R":                { "id": "R", "coords": [140, 107,   155, 125], "ref": "   " },
		"S":                { "id": "S", "coords": [156, 107,   171, 125], "ref": "   " },
		"T":                { "id": "T", "coords": [172, 107,   187, 125], "ref": "   " },
		"'":                { "id": "a", "coords": [204, 107,   219, 125], "ref": "   " },
		"-":                { "id": "b", "coords": [220, 107,   235, 125], "ref": "   " },
		"U":                { "id": "U", "coords": [ 27, 126,    43, 144], "ref": "   " },
		"V":                { "id": "V", "coords": [ 44, 126,    59, 144], "ref": "   " },
		"W":                { "id": "W", "coords": [ 60, 126,    75, 144], "ref": "   " },
		"X":                { "id": "X", "coords": [ 76, 126,    91, 144], "ref": "   " },
		"Y":                { "id": "Y", "coords": [ 92, 126,   107, 144], "ref": "   " },
		"Z":                { "id": "Z", "coords": [108, 126,   123, 144], "ref": "   " },
		"♂":                { "id": "e", "coords": [204, 126,   219, 144], "ref": "   " },
		"♀":                { "id": "f", "coords": [220, 126,   235, 144], "ref": "   " },
		"0":                { "id": "0", "coords": [ 27, 164,    43, 182], "ref": "   " },
		"1":                { "id": "1", "coords": [ 44, 164,    59, 182], "ref": "   " },
		"2":                { "id": "2", "coords": [ 60, 164,    75, 182], "ref": "   " },
		"3":                { "id": "3", "coords": [ 76, 164,    91, 182], "ref": "   " },
		"4":                { "id": "4", "coords": [ 92, 164,   107, 182], "ref": "   " },
		"5":                { "id": "5", "coords": [108, 164,   123, 182], "ref": "   " },
		"6":                { "id": "6", "coords": [124, 164,   139, 182], "ref": "   " },
		"7":                { "id": "7", "coords": [140, 164,   155, 182], "ref": "   " },
		"8":                { "id": "8", "coords": [156, 164,   171, 182], "ref": "   " },
		"9":                { "id": "9", "coords": [172, 164,   187, 182], "ref": "   " },
		"Upper":            { "id": "u", "coords": [ 24,  59,    55,  81], "ref": "   " },
		"Lower":            { "id": "l", "coords": [ 56,  59,    87,  81], "ref": "   " },
		"Others":           { "id": "o", "coords": [ 88,  59,   119,  81], "ref": "   " },
		"Back":             { "id": "z", "coords": [156,  59,   188,  81], "ref": "   " },
		"OK":               { "id": "y", "coords": [196,  59,   228,  81], "ref": "   " },
	},
},
};
