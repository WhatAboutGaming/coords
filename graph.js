var game = 'x';
function draw() {
	g = new dagreD3.Digraph();

	var category_id, menu_id, rekt_id, edge_id,
		ignore_ids = { 'id': 1, 'desc': 1, 'premium': 1 },
		from, to, edges = {};
	for (var category in coords) {
		for (var menu in coords[category]) {
			if (menu in ignore_ids)
				continue;

			menu_id = Draw._joinIds(category, menu);
			var url = 'data/' + game + '/screens/' + category + '/' + menu + '.png';

			g.addNode(menu_id, {
				label: menu,
				image: url,
			});
			for (var rekt in coords[category][menu]) {
				if (rekt in ignore_ids)
					continue;

				rekt_id = Draw._joinIds(category, menu, rekt);
				from = menu_id;
				tos = coords[category][menu][rekt].ref;

				if (typeof tos === 'string')
					tos = [tos];

				for (var i = 0; i < tos.length; i ++) {
					to = tos[i];
					edge_id = rekt_id + to;

					if (to === '   ')
						continue;

					var reverse_exists = to in edges && from in edges[to];

					if (reverse_exists &&
						((rekt ==='Cancel' && coords[category][menu][rekt].id === 'x') ||
						(rekt === 'Quit' && to !== 'END')))
						continue;

					if (to === 'END' || to === 'NEW') {
						to += '-' + menu_id;
						if (!(to in g._nodes))
							g.addNode(to);
					}

					if (to === from)
						continue;

					if (!(from in edges))
						edges[from] = {};
					if (!(to in edges[from]))
						edges[from][to] = [edge_id, from, to, { label: [rekt] }];
					else
						edges[from][to][3].label.push(rekt);
				}
			}
		}
	}
	var l, la;
	for (from in edges)
		for (to in edges[from]) {
			l = edges[from][to][3].label;

			if (l.length <= 4)
				la = l.join("\n");
			else
				la = l.slice(0, 2).join("\n") + "\n…\n" + l[l.length - 1];

			edges[from][to][3].label = la;
			g.addEdge.apply(g, edges[from][to]);
		}

	var renderer = new dagreD3.Renderer();
	var oldDrawNodes = renderer.drawNodes();
	renderer.drawNodes(myDrawNodes);
	var layout = dagreD3.layout().rankSep(60).nodeSep(20).edgeSep(20);
	renderer.layout(layout).run(g, d3.select("svg g"));
}

window.onload = draw;
