// function mark_note(item) {
//
// }


// GLOBALS
// Clicking selects
var selected = [];
// Shift-clicking extra selects
var extraselected = [];
// Load Verovio
var vrvToolkit = new verovio.toolkit();
// This is our SVG
var svg;
var orig_svg;
// And the underlying MEI
var mei;
var orig_mei;
// And the graph node in the MEI
var mei_graph;
var orig_mei_graph;
// And the MIDI
var midi;
var orig_midi;
// This is the MEI as text (pre-parse)
var data;
var orig_data;
// We need a reader
var reader = new FileReader();
var filename;
// Did we change the MEI somehow?
var changes = false;
// Our undo stack. TODO: is this being empty the same as
// changes being false?
var undo_actions = [];

var redo_actions = []; //TODO, maybe?

var rerendered_after_reduce = 0;

var non_notes_hidden = false;

var text_input = false;

var shades = false;

var format;

var zoom = 1;

// Once things are loaded, do configuration stuff
$(document).ready(function () {
        Object.keys(type_conf).forEach(init_type);
        Object.keys(meta_conf).forEach(meta_type);
        toggle_shades();
        $("#player").midiPlayer({ color: "grey", width: 250 });
});

// Configured types need a button and a color each
function init_type(type) {
        var elem = document.createElement("input");
        elem.setAttribute("type", "button");
        elem.setAttribute("class", "relationbutton");
        elem.setAttribute("id", type + "relationbutton");
        elem.setAttribute(
                "value",
                "Add " + type + " relation " + "(" + type_conf[type].key + ")"
        );
        elem.onclick = () => {
                do_relation(type);
        };
        $("#relation_buttons")[0].appendChild(elem);
        type_shades[type] = shades_array[type_conf[type].colour];
        type_keys[type_conf[type].key] = type;
        button_shades[type + "relationbutton"] =
                shades_array[type_conf[type].colour];
}

// Configured meta types need a button and a color each
function meta_type(type) {
        var elem = document.createElement("input");
        elem.setAttribute("type", "button");
        elem.setAttribute("class", "metarelationbutton");
        elem.setAttribute("id", type + "metarelationbutton");
        elem.setAttribute(
                "value",
                "Add " +
                        type +
                        " metarelation " +
                        "(" +
                        meta_conf[type].key +
                        ")"
        );
        elem.onclick = () => {
                do_metarelation(type);
        };
        $("#meta_buttons")[0].appendChild(elem);
        meta_shades[type] = shades_array[meta_conf[type].colour];
        meta_keys[meta_conf[type].key] = type;
        button_shades[type + "metarelationbutton"] =
                shades_array[meta_conf[type].colour];
}

// If we're selecting relations, we may want to change them.
function toggle_he_selected(selecting) {
        Array.from(document.getElementsByClassName("relationbutton")).forEach(
                (button) => {
                        var val = button.getAttribute("value");
                        if (selecting)
                                button.setAttribute(
                                        "value",
                                        val.replace("Add", "Set to")
                                );
                        else
                                button.setAttribute(
                                        "value",
                                        val.replace("Set to", "Add")
                                );
                }
        );
        if (selecting)
                document.getElementById("meta_buttons").style.display = "";
        else document.getElementById("meta_buttons").style.display = "none";
}

// Toggle if a thing (for now: note or relation) is selected or not.
function toggle_selected(item, extra) {
        var ci = item.getAttribute("class");
        if (selected.length > 0 || extraselected.length > 0) {
                var csel = selected
                        .concat(extraselected)[0]
                        .getAttribute("class");
                // Select only things of the same type for now - editing
                // relations to add things means deleting and re-adding
                if (ci != csel) return;
        }
        if (ci == "note") {
                // We're selecting notes.
                if (
                        selected.find((x) => x === item) ||
                        extraselected.find((x) => x === item)
                ) {
                        item.style.fill = "black";
                        selected = selected.filter((x) => x !== item);
                        extraselected = extraselected.filter((x) => x !== item);
                } else {
                        if (extra) {
                                item.style.fill = "red";
                                extraselected.push(item);
                        } else {
                                item.style.fill = "green";
                                selected.push(item);
                        }
                }
        } else if (ci == "relation" || ci == "metarelation") {
                //Relation selection
                if (selected.concat(extraselected).length == 0) {
                        // We're beginning to select relations
                        toggle_he_selected(true);
                }
                if (
                        selected.find((x) => x === item) ||
                        extraselected.find((x) => x === item)
                ) {
                        item.style.fillOpacity = 0.5;
                        item.style.strokeOpacity = 0.1;
                        selected = selected.filter((x) => x !== item);
                        extraselected = extraselected.filter((x) => x !== item);
                        item.style.transform = "";
                        item.style.filter = "";
                } else {
                        if (extra) {
                                item.style.fillOpacity = 0.9;
                                item.style.strokeOpacity = 0.8;
                                extraselected.push(item);
                                item.style.transform = "translate3d(0,0,0)";
                                item.style.filter = 'url("#extraFilter")';
                        } else {
                                item.style.fillOpacity = 0.9;
                                item.style.strokeOpacity = 0.8;
                                selected.push(item);
                                item.style.transform = "translate3d(0,0,0)";
                                item.style.filter = 'url("#selectFilter")';
                        }
                }
                if (selected.concat(extraselected).length == 0) {
                        // We're finished selecting relations
                        toggle_he_selected(false);
                }
        }
        var primaries = to_text(extraselected);
        var secondaries = to_text(selected);
        $("#selected_things").html(
                "Primaries: " + primaries + "<br/>Secondaries: " + secondaries
        );
}

// Toggle showing things other than notes in the score
function toggle_equalize() {
        var hidden = "hidden";
        if (non_notes_hidden) {
                hidden = "visible";
                non_notes_hidden = false;
        } else {
                non_notes_hidden = true;
        }
        set_non_note_visibility(hidden);
}

function set_non_note_visibility(hidden) {
        var svg_element = document.getElementById("svg_output");
        Array.from(svg_element.getElementsByClassName("beam")).forEach((x) => {
                Array.from(x.children).forEach((x) => {
                        if (x.tagName == "polygon") {
                                x.style.visibility = hidden;
                        }
                });
        });
        hide_classes.forEach((cl) => {
                Array.from(svg_element.getElementsByClassName(cl)).forEach(
                        (x) => {
                                x.style.visibility = hidden;
                        }
                );
        });
}

// Toggle the current relation having a type-dependent shade
// or not
function toggle_shade(he) {
        if (!shades && he.getAttribute("old_fill")) {
                he.setAttribute("fill", he.getAttribute("old_fill"));
                he.removeAttribute("old_fill");
        } else if (shades && type_shades[he.getAttribute("type")]) {
                he.setAttribute("old_fill", he.getAttribute("fill"));
                he.setAttribute("fill", type_shades[he.getAttribute("type")]);
        } else if (shades && meta_shades[he.getAttribute("type")]) {
                he.setAttribute("old_fill", he.getAttribute("fill"));
                he.setAttribute("fill", meta_shades[he.getAttribute("type")]);
        } else if (shades && type_synonym[he.getAttribute("type")]) {
                he.setAttribute("old_fill", he.getAttribute("fill"));
                he.setAttribute(
                        "fill",
                        type_shades[type_synonym[he.getAttribute("type")]]
                );
        }
}

function toggle_button_shade(button) {
        if (shades)
                button.style.color = button_shades[button.getAttribute("id")];
        else button.style.color = "";
}

// Toggle type-dependent shades for relations and buttons
function toggle_shades() {
        shades = !shades;
        Array.from(document.getElementsByClassName("relation")).forEach(
                toggle_shade
        );
        Array.from(document.getElementsByClassName("metarelation")).forEach(
                toggle_shade
        );
        Array.from(document.getElementsByClassName("relationbutton")).forEach(
                toggle_button_shade
        );
        Array.from(
                document.getElementsByClassName("metarelationbutton")
        ).forEach(toggle_button_shade);
}

function delete_relation(elem) {
        //Assume no meta-edges for now, meaning we only have to
        //remove the SVG elem, the MEI node, and any involved arcs
        var orig_mei_he,
                mei_he = get_by_id(mei, elem.id);
        unmark_secondaries(mei_he);

        var orig_arcs,
                arcs = Array.from(mei.getElementsByTagName("arc")).filter(
                        (arc) => {
                                return (
                                        arc.getAttribute("to") ==
                                                "#" + elem.id ||
                                        arc.getAttribute("from") ==
                                                "#" + elem.id
                                );
                        }
                );
        if (mei != orig_mei) {
                orig_mei_he = get_by_id(mei, selected[0].id);
                orig_arcs = Array.from(mei.getElementsByTagName("arc")).filter(
                        (arc) => {
                                return (
                                        arc.getAttribute("to") ==
                                                "#" + elem.id ||
                                        arc.getAttribute("from") ==
                                                "#" + elem.id
                                );
                        }
                );
        }
        var removed = arcs
                .concat(orig_arcs)
                .concat([elem, mei_he, orig_mei_he]);
        var action_removed = removed.map((x) => {
                if (x != undefined) {
                        var elems = [x, x.parentElement, x.nextSibling];
                        x.parentElement.removeChild(x);
                        return elems;
                }
        });

        return action_removed.reverse();
}

function delete_relations() {
        if (
                selected.length == 0 ||
                selected[0].getAttribute("class") != "relation"
        ) {
                console.log("No relation selected!");
                return;
        }
        var removed = selected.flatMap(delete_relation);
        undo_actions.push(["delete relation", removed, selected, []]);
        selected = [];
}

// This reduces away the relations where all the secondaries
// are not primary in any non-reduced relation. TODO: This,
// while better than before, no doubt has room for optimisation
function do_reduce() {
        // All previous reductions
        var reduce_actions = undo_actions
                .filter((x) => x[0] == "reduce")
                .map((x) => x[1]);
        // All relations in the graph
        var all_relations_nodes = Array.from(
                mei_graph.getElementsByTagName("node")
        ).filter((x) => {
                return x.getAttribute("type") == "relation";
        });
        // Remove the relations that have been removed in previous
        // reductions
        var remaining_relations = all_relations_nodes.filter((x) => {
                return !reduce_actions.flat().flat().includes(x);
        });
        var reduce_action, relations_nodes;
        // Are we doing a full reduction, or have we selected some
        // relations?
        if (
                selected.length > 0 &&
                selected[0].getAttribute("class") == "relation"
        ) {
                relations_nodes = selected.map((elem) =>
                        get_by_id(mei, elem.id)
                );
        } else {
                relations_nodes = remaining_relations;
        }
        // In any case, remember what's selected, and unselect it
        var sel = selected;
        var extra = extraselected;
        sel.concat(extra).forEach(toggle_selected);
        // No primary of a remaining relation is removed in this
        // reduction
        var remaining_nodes = remaining_relations
                .map(relation_primaries)
                .flat();
        // We know that the remaining relations that have not been
        // selected for reduction will remain
        remaining_relations = remaining_relations.filter((x) => {
                return !relations_nodes.includes(x);
        });
        // So all of their nodes should be added to the remaining
        // nodes, not just the primaries
        remaining_nodes = remaining_nodes.concat(
                remaining_relations.map(relation_secondaries).flat()
        );

        do {
                // We want to find more relations that we know need to stay
                var more_remains = relations_nodes.filter((he) => {
                        // That is, relations that have, as secondaries, nodes
                        // we know need to stay
                        return (
                                relation_secondaries(he).findIndex((x) => {
                                        return remaining_nodes.includes(x);
                                }) > -1
                        );
                });
                // Add those relations to the ones that need to stay
                remaining_relations = remaining_relations.concat(more_remains);
                // And remove them from those that may be removed
                relations_nodes = relations_nodes.filter((x) => {
                        return !more_remains.includes(x);
                });
                // And update the remaining nodes
                remaining_nodes = remaining_nodes.concat(
                        more_remains.map(relation_secondaries).flat()
                );
                // Until we reach a pass where we don't find any more
                // relations that need to stay
        } while (more_remains.length > 0);
        // Any relations that remain after this loop, we can remove,
        // including their secondaries

        reduce_action = relations_nodes;

        if (reduce_action.length == 0) {
                console.log("No reduction possible");
                return;
        }
        undo_actions.push([
                "reduce",
                reduce_action.map((he) => {
                        var secondaries = relation_secondaries(he);
                        var graphicals = [];
                        graphicals.push(secondaries.map(hide_note));
                        graphicals.push(hide_he(he));
                        return [he, secondaries, graphicals];
                }),
                sel,
                extra,
        ]);
}

// Draw a series of edges (TODO: make it much much much better)
function draw_edges() {
        var added = [];
        if (selected.includes(undefined));
        return [];
        for (var i = 1; i < selected.length; i++) {
                note1 = note_coords(selected[i - 1]);
                note2 = note_coords(selected[i]);
                //added.push(line(note1,note2));
                var elem = roundedHull([note1, note2]);
                add_to_svg_bg(elem);
                added.push(elem);
                // TODO: Add selectability on edge.
        }
        return added;
}

// Add a collection of edges to the MEI graph element
function add_edges(mei) {
        var added = [];
        for (var i = 0; i < selected.length; i++) {
                var elem = add_mei_node_for(mei, mei_graph, selected[i]);
                added.push(elem);
        }
        for (var i = 1; i < selected.length; i++) {
                // So that we can refer to the node (not the note) ID in
                // arcs/edges
                var elem = mei.createElement("arc");
                elem.setAttribute(
                        "from",
                        "#gn-" + selected[i - 1].getAttribute("id")
                );
                elem.setAttribute(
                        "to",
                        "#gn-" + selected[i].getAttribute("id")
                );
                mei_graph.appendChild(elem);
                added.push(elem);
        }
        return added;
}

// Draw a relation as a  series of edges (TODO: make it much much much better)
function draw_relation(id, type) {
        var added = [];
        var notes = selected.concat(extraselected);
        if (notes.includes(undefined)) {
                console.log("Note missing, relation not drawn");
                return [];
        }
        var secondaries = selected;
        var primaries = extraselected;

        notes.sort((a, b) => {
                var p1 = note_coords(a);
                var p2 = note_coords(b);
                return p1[0] - p2[0] ? p1[0] - p2[0] : p1[1] - p2[1];
        });

        var elem = roundedHull(notes.map(note_coords));
        elem.setAttribute("id", id);
        elem.setAttribute("class", "relation");
        elem.setAttribute("type", type);
        elem.style.fillOpacity = "0.5";
        elem.onwheel = (e) => {
                var elem1 = e.target;
                var paren = elem1.parentElement;
                paren.removeChild(elem1);
                paren.insertBefore(elem1, paren.children[0]);
                elem.onmouseout();
                return false;
        };
        if (shades) toggle_shade(elem);
        add_to_svg_bg(elem);
        added.push(elem);
        elem.onclick = function (ev) {
                toggle_selected(elem, ev.shiftKey);
        };
        elem.onmouseover = function (ev) {
                primaries.forEach((item) => {
                        if (item.style.filter == "") {
                                item.style.transform = "translate3d(0,0,0)";
                                item.style.filter = 'url("#extraFilter")';
                        }
                });
                secondaries.forEach((item) => {
                        if (item.style.filter == "") {
                                item.style.transform = "translate3d(0,0,0)";
                                item.style.filter = 'url("#selectFilter")';
                        }
                });
        };
        elem.onmouseout = function (ev) {
                primaries.forEach((item) => {
                        if (item.style.filter == 'url("#extraFilter")') {
                                item.style.transform = "";
                                item.style.filter = "";
                        }
                });
                secondaries.forEach((item) => {
                        if (item.style.filter == 'url("#selectFilter")') {
                                item.style.transform = "";
                                item.style.filter = "";
                        }
                });
        };

        return added;
}

// Add a "relation" to the MEI graph element. We model this
// with a new node.
function add_relation(mei, mei_graph, type, he_id_param) {
        var added = [];
        // Add new nodes for all notes
        for (var i = 0; i < selected.length; i++) {
                var elem = add_mei_node_for(mei, mei_graph, selected[i]);
                added.push(elem);
        }
        for (var i = 0; i < extraselected.length; i++) {
                var elem = add_mei_node_for(mei, mei_graph, extraselected[i]);
                added.push(elem);
        }
        // Add a new node for the relation
        var he_elem = mei.createElement("node");
        he_elem.setAttribute("type", "relation");
        var he_label = mei.createElement("label");
        if (typeof type != "undefined") he_label.setAttribute("type", type);
        he_elem.appendChild(he_label);
        // Who knows if this is enough
        var he_id;
        if (typeof he_id_param == "undefined")
                he_id =
                        "he-" +
                        Math.floor(Math.random() * (1 << 20)).toString(16);
        else he_id = he_id_param;
        he_elem.setAttribute("xml:id", he_id);
        mei_graph.appendChild(he_elem);
        added.push(he_elem);
        for (var i = 0; i < selected.length; i++) {
                // So that we can refer to the node (not the note) ID in
                // arcs/edges
                var elem = mei.createElement("arc");
                elem.setAttribute("from", "#" + he_id);
                elem.setAttribute("to", "#gn-" + selected[i].id);
                elem.setAttribute("type", "secondary");
                mei_graph.appendChild(elem);
                added.push(elem);
        }
        for (var i = 0; i < extraselected.length; i++) {
                // So that we can refer to the node (not the note) ID in
                // arcs/edges
                var elem = mei.createElement("arc");
                elem.setAttribute("from", "#" + he_id);
                elem.setAttribute("to", "#gn-" + extraselected[i].id);
                elem.setAttribute("type", "primary");
                mei_graph.appendChild(elem);
                added.push(elem);
        }
        return [he_id, added.reverse()];
}

// OK we've selected stuff, let's make the selection into a
// series of edges
function do_edges() {
        if (selected.length == 0 && extraselected == 0) {
                return;
        }
        changes = true;
        var added = [];
        added.push(draw_edges()); // Draw the edge
        added.push(add_edges(mei)); // Add it to the MEI
        if (mei != orig_mei) added.push(add_edges(orig_mei));

        undo_actions.push(["edges", added, selected, extraselected]);
        selected.forEach(toggle_selected); // De-select
        extraselected.forEach(toggle_selected); // De-select
}

// OK we've selected stuff, let's make the selection into a
// "relation".
function do_relation(type) {
        if (selected.length == 0 && extraselected == 0) {
                return;
        }
        changes = true;
        if (
                selected.concat(extraselected)[0].getAttribute("class") ==
                "relation"
        ) {
                var types = [];
                selected.concat(extraselected).forEach((he) => {
                        //TODO: move type_synonym application so that this
                        //is the right type == the one from the MEI
                        types.push([he.getAttribute("type"), type]);
                        he.setAttribute("type", type);
                        var mei_he = get_by_id(mei, he.id);
                        mei_he.getElementsByTagName("label")[0].setAttribute(
                                "type",
                                type
                        );
                        toggle_shade(he);
                });
                undo_actions.push([
                        "change relation type",
                        types.reverse(),
                        selected,
                        extraselected,
                ]);
        } else if (
                selected.concat(extraselected)[0].getAttribute("class") ==
                "note"
        ) {
                var added = [];
                var [he_id, mei_elems] = add_relation(mei, mei_graph, type);
                added.push(mei_elems); // Add it to the MEI
                if (mei != orig_mei) {
                        var [orig_he_id, orig_mei_elems] = add_relation(
                                orig_mei,
                                orig_mei_graph,
                                type,
                                he_id
                        );
                        added.push(orig_mei_elems); // Add it to the MEI
                }
                added.push(draw_relation(he_id, type)); // Draw the edge

                undo_actions.push(["relation", added, selected, extraselected]);
                mark_secondaries(get_by_id(mei, he_id));
                selected.concat(extraselected).forEach(toggle_selected); // De-select
        }
}

function draw_metarelation(id, type) {
        var added = [];
        var targets = selected.concat(extraselected);
        var coords = targets.map(get_metarelation_target);
        var x = average(coords.map((e) => e[0]));
        // Above
        var y =
                targets
                        .concat([document.getElementsByClassName("system")[0]])
                        .map((b) => b.getBBox().y)
                        .sort((a, b) => a > b)[0] - 500;

        //            coords.push([x,y]);
        var g_elem = g();
        //            var elem = roundedHull(coords);
        g_elem.setAttribute("id", id);
        g_elem.setAttribute("class", "metarelation");
        g_elem.setAttribute("type", type);
        g_elem.style.fillOpacity = "0.5";
        g_elem.style.strokeOpacity = "0.1";
        g_elem.onwheel = (e) => {
                var elem1 = e.target;
                var paren = elem1.parentElement;
                paren.removeChild(elem1);
                paren.insertBefore(elem1, paren.children[0]);
                return false;
        };
        coords.forEach((crds) => {
                var line_elem = line([x, y], crds);
                g_elem.appendChild(line_elem);
        });
        g_elem.appendChild(circle([x, y], 200));
        if (shades) toggle_shade(g_elem);
        add_to_svg_bg(g_elem);
        added.push(g_elem);
        g_elem.onclick = function (ev) {
                toggle_selected(g_elem, ev.shiftKey);
        };
        g_elem.onmouseover = function (ev) {
                targets.forEach((item) => {
                        if (item.style.filter == "") {
                                item.style.transform = "translate3d(0,0,0)";
                                item.style.filter = 'url("#glowFilter")';
                        }
                });
        };
        g_elem.onmouseout = function (ev) {
                targets.forEach((item) => {
                        if (item.style.filter == 'url("#glowFilter")') {
                                item.style.transform = "";
                                item.style.filter = "";
                        }
                });
        };
        return added;
}

function add_metarelation(mei, mei_graph, type, he_id_param) {
        // Add a new node for the relation
        var added = [];
        var he_elem = mei.createElement("node");
        he_elem.setAttribute("type", "metarelation");
        var he_label = mei.createElement("label");
        if (typeof type != "undefined") he_label.setAttribute("type", type);
        he_elem.appendChild(he_label);
        // Who knows if this is enough
        var he_id;
        if (typeof he_id_param == "undefined")
                he_id =
                        "he-" +
                        Math.floor(Math.random() * (1 << 20)).toString(16);
        else he_id = he_id_param;
        he_elem.setAttribute("xml:id", he_id);
        mei_graph.appendChild(he_elem);
        added.push(he_elem);
        for (var i = 0; i < selected.length; i++) {
                // So that we can refer to the node (not the note) ID in
                // arcs/edges
                var elem = mei.createElement("arc");
                elem.setAttribute("from", "#" + he_id);
                elem.setAttribute("to", "#" + selected[i].id);
                elem.setAttribute("type", "secondary");
                mei_graph.appendChild(elem);
                added.push(elem);
        }
        for (var i = 0; i < extraselected.length; i++) {
                // So that we can refer to the node (not the note) ID in
                // arcs/edges
                var elem = mei.createElement("arc");
                elem.setAttribute("from", "#" + he_id);
                elem.setAttribute("to", "#" + extraselected[i].id);
                elem.setAttribute("type", "primary");
                mei_graph.appendChild(elem);
                added.push(elem);
        }
        return [he_id, added.reverse()];
}

function do_metarelation(type) {
        if (selected.length == 0 && extraselected == 0) {
                return;
        }
        var ci = selected.concat(extraselected)[0].getAttribute("class");
        if (!(ci == "relation" || ci == "metarelation")) {
                return;
        }
        changes = true;
        var added = [];
        var [he_id, mei_elems] = add_metarelation(mei, mei_graph, type);
        added.push(mei_elems); // Add it to the MEI
        if (mei != orig_mei) {
                var [orig_he_id, orig_mei_elems] = add_metarelation(
                        orig_mei,
                        orig_mei_graph,
                        type,
                        he_id
                );
                added.push(orig_mei_elems); // Add it to the MEI
        }
        added.push(draw_metarelation(he_id, type)); // Draw the edge

        undo_actions.push(["metarelation", added, selected, extraselected]);
        selected.concat(extraselected).forEach(toggle_selected); // De-select
}

// Oops, undo whatever we did last.
function do_undo() {
        // Get latest undo_actions
        if (undo_actions.length == 0) {
                console.log("Nothing to undo");
                return;
        }
        if (undo_actions.length == rerendered_after_action) {
                console.log("Cannot undo past a rerender");
                return;
        }
        // Deselect the current selection, if any
        selected.forEach(toggle_selected);
        extraselected.forEach((x) => {
                toggle_selected(x, true);
        });

        [what, elems, sel, extra] = undo_actions.pop();
        if (what == "edges" || what == "relation" || what == "metarelation") {
                var added = elems;
                if (what == "relation")
                        added.flat().forEach((x) => {
                                if (
                                        mei.contains(x) &&
                                        x.getAttribute("type") == "relation"
                                )
                                unmark_secondaries(x);
                        });
                // Remove added elements
                added.flat().forEach((x) => {
                        if (!node_referred_to(x.getAttribute("xml:id")))
                                x.parentNode.removeChild(x);
                });
                // Select last selection
                sel.forEach((x) => {
                        toggle_selected(x);
                });
                extra.forEach((x) => {
                        toggle_selected(x, true);
                });
        } else if (what == "delete relation") {
                var removed = elems;
                removed.forEach((x) => {
                        if (x) x[1].insertBefore(x[0], x[2]);
                });
                selected = sel;
                selected.forEach(mark_secondaries);
        } else if (what == "change relation type") {
                var types = elems;
                sel.concat(extra).forEach((he) => {
                        //TODO: move type_synonym application so that this
                        //is the right type == the one from the MEI
                        var [from, to] = types.pop();
                        he.setAttribute("type", from);
                        var mei_he = get_by_id(mei, he.id);
                        mei_he.getElementsByTagName("label")[0].setAttribute(
                                "type",
                                from
                        );
                        toggle_shade(he);
                });
                sel.forEach((x) => {
                        toggle_selected(x);
                });
                extra.forEach((x) => {
                        toggle_selected(x, true);
                });
        } else if (what == "reduce") {
                var reduce_layer = elems;
                reduce_layer.forEach((action) => {
                        var [he, secondaries, graphicals] = action;
                        graphicals.flat().forEach((x) => {
                                if (x) x.style.visibility = "visible";
                        });
                });
                sel.forEach((x) => {
                        toggle_selected(x);
                });
                extra.forEach((x) => {
                        toggle_selected(x, true);
                });
        }
}

// We have keyboard commands!
function handle_keypress(ev) {
        if (text_input) return;
        if (ev.key == "Enter") {
                do_edges();
        } else if (ev.key == "u") {
                // UNDO
                do_undo();
        } else if (ev.key == "r") {
                // Reduce relations
                do_reduce();
        } else if (ev.key == "s") {
                // Show/hide ties etc.
                toggle_equalize();
        } else if (ev.key == "h") {
                // Toggle type-dependent shades
                toggle_shades();
        } else if (ev.key == "+") {
                // Select same notes in the measure
                select_samenote();
                do_relation("repeat");
        } else if (type_keys[ev.key]) {
                // Add a relation
                do_relation(type_keys[ev.key]);
        } else if (meta_keys[ev.key]) {
                // Add a relation
                do_metarelation(meta_keys[ev.key]);
        } else {
                console.log(ev);
        }
}

// Function to download data to a file
// Taken from StackOverflow answer by Kanchu at
// https://stackoverflow.com/questions/13405129/javascript-create-and-save-file
function download(data, filename, type) {
        var file = new Blob([data], { type: type });
        if (window.navigator.msSaveOrOpenBlob)
                // IE10+
                window.navigator.msSaveOrOpenBlob(file, filename);
        else {
                // Others
                var a = document.createElement("a"),
                        url = URL.createObjectURL(file);
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                setTimeout(() => {
                        document.body.removeChild(a);
                        window.URL.revokeObjectURL(url);
                }, 0);
        }
}

// If the MEI already has a graph, we add on to that. TODO:
// Check that the graph is actually our kind of graph
function add_or_fetch_graph() {
        var existing = mei.getElementsByTagName("graph");
        if (existing.length) {
                // TODO: Not just grab the first one.
                return existing[0];
        }
        var elem = mei.createElement("graph");
        elem.setAttribute("type", "directed");
        mei.getElementsByTagName("body")[0].appendChild(elem);
        return elem;
}

// An option to download the MEI with the changes we've made
function save() {
        var saved = new XMLSerializer().serializeToString(mei);
        download(saved, filename + ".mei", "text/xml");
}
function save_orig() {
        var saved = new XMLSerializer().serializeToString(orig_mei);
        download(saved, filename + ".mei", "text/xml");
}

// Download the current SVG, including graph elements
function savesvg() {
        var saved = new XMLSerializer().serializeToString($("#svg_output")[0]);
        download(saved, filename + ".svg", "text/xml");
}

// Load a new MEI
function load() {
        /* Cancel loading if changes are not saved? alert */
        selected = [];
        extraselected = [];
        upload = document.getElementById("fileupload");
        if (upload.files.length == 1) {
                reader.onload = load_finish;
                reader.readAsText(upload.files[0]);
                filename = upload.files[0].name
                        .split(".")
                        .slice(0, -1)
                        .join(".");
                if (filename == "") filename = upload.files[0].name;
        } else {
                return;
        }
}

// Draw the existing graph
function draw_graph() {
        // There's a multi-stage process to get all the info we
        // need... First we get the nodes from the graph element.
        var nodes_array = Array.from(mei_graph.getElementsByTagName("node"));
        // Get the nodes representing relations
        var relations_nodes = nodes_array.filter((x) => {
                return x.getAttribute("type") == "relation";
        });
        // Get the nodes representing metarelations
        var metarelations_nodes = nodes_array.filter((x) => {
                return x.getAttribute("type") == "metarelation";
        });
        // Next we get the note labels
        var note_ids = nodes_array
                .map((x) => {
                        try {
                                return [x, note_get_sameas(x)];
                        } catch {
                                return [];
                        }
                })
                .filter((x) => {
                        return x.length != 0;
                });
        // Now get the arcs/edges
        var arcs_array = Array.from(mei_graph.getElementsByTagName("arc"));
        var relations_arcs = [];
        var metarelations_arcs = [];
        // And draw them all.
        arcs_array.forEach((x) => {
                var n1 = get_by_id(mei, x.getAttribute("from"));
                var n2 = get_by_id(mei, x.getAttribute("to"));
                if (
                        !relations_nodes.includes(n1) &&
                        !metarelations_nodes.includes(n1)
                ) {
                        //Regular edge, just draw. TODO: Fix assumption that
                        //nodes are notes if we reach this.
                        var id1 = note_ids.find((y) => {
                                return y[0] == n1;
                        })[1];
                        var id2 = note_ids.find((y) => {
                                return y[0] == n2;
                        })[1];
                        selected = [
                                get_by_id(document, id1),
                                get_by_id(document, id2),
                        ];
                        draw_edges();
                        selected = [];
                } else if (!metarelations_nodes.includes(n1)) {
                        var id2 = note_ids.find((y) => {
                                return y[0] == n2;
                        })[1];
                        relations_arcs.push([n1, id2, x.getAttribute("type")]);
                } else {
                        metarelations_arcs.push([
                                n1,
                                n2.getAttribute("xml:id"),
                                x.getAttribute("type"),
                        ]);
                }
        });
        relations_nodes.forEach((x) => {
                var relation_nodes = relations_arcs
                        .filter((y) => {
                                return y[0] == x;
                        })
                        .map((y) => {
                                return [y[2], get_by_id(document, y[1])];
                        });
                selected = relation_nodes
                        .filter((y) => {
                                return y[0] == "secondary";
                        })
                        .map((y) => {
                                return y[1];
                        });
                extraselected = relation_nodes
                        .filter((y) => {
                                return y[0] == "primary";
                        })
                        .map((y) => {
                                return y[1];
                        });
                var he_labels = x.getElementsByTagName("label");
                var type = "";
                if (he_labels.length > 0) {
                        type = he_labels[0].getAttribute("type");
                }
                var added = draw_relation(x.getAttribute("xml:id"), type);
                if (added.length != 0) mark_secondaries(x);
                selected = [];
                extraselected = [];
        });

        metarelations_nodes.forEach((x) => {
                var metarelation_nodes = metarelations_arcs
                        .filter((y) => {
                                return y[0] == x;
                        })
                        .map((y) => {
                                return [y[2], get_by_id(document, y[1])];
                        });
                selected = metarelation_nodes
                        .filter((y) => {
                                return y[0] == "secondary";
                        })
                        .map((y) => {
                                return y[1];
                        });
                extraselected = metarelation_nodes
                        .filter((y) => {
                                return y[0] == "primary";
                        })
                        .map((y) => {
                                return y[1];
                        });
                var me_labels = x.getElementsByTagName("label");
                var type = "";
                if (me_labels.length > 0) {
                        type = me_labels[0].getAttribute("type");
                }
                var added = draw_metarelation(x.getAttribute("xml:id"), type);
                selected = [];
                extraselected = [];
        });
}

// Do all of this when we have the MEI in memory
function load_finish(e) {
        data = reader.result;
        parser = new DOMParser();
        mei = parser.parseFromString(data, "text/xml");
        format = "mei";
        if (
                mei.documentElement.namespaceURI !=
                "http://www.music-encoding.org/ns/mei"
        )
                // We didn't get a MEI? Try if it's a musicXML
                format = "musicxml";
        else mei = fix_synonyms(mei);

        svg = vrvToolkit.renderData(data, {
                pageWidth: 20000,
                pageHeight: 10000,
                breaks: "none",
                format: format,
        });
        $("#svg_output").html(svg);
        if (format == "musicxml") {
                data = vrvToolkit.getMEI();
                parser = new DOMParser();
                mei = parser.parseFromString(data, "text/xml");
        }

        mei_graph = add_or_fetch_graph();
        midi = vrvToolkit.renderToMIDI();
        orig_mei = mei;
        orig_data = data;
        orig_mei_graph = mei_graph;
        orig_svg = svg;
        orig_midi = midi;

        draw_graph();

        changes = false;
        undo_actions = [];
        redo_actions = []; //TODO, maybe?
        reduce_actions = [];

        rerendered_after_action = 0;

        for (let n of document.getElementsByClassName("note")) {
                //n.addEventListener('click', function(ev) {toggle_selected(n,ev.shiftKey) } )
                n.onclick = function (ev) {
                        toggle_selected(n, ev.shiftKey);
                };
        }
        for (let h of document.getElementsByClassName("relation")) {
                h.onclick = function (ev) {
                        toggle_selected(h, ev.shiftKey);
                };
                //h.addEventListener('click', function(ev) {toggle_selected(h,ev.shiftKey) } )
        }
        if (!shades) toggle_shades();
        document.onkeypress = function (ev) {
                handle_keypress(ev);
        };
}

function rerender_mei(replace_with_rests = false) {
        var mei2 = mei.implementation.createDocument(
                mei.documentElement.namespaceURI, //namespace to use
                null, //name of the root element (or for empty document)
                null //doctype (null for XML)
        );
        var newNode = mei2.importNode(
                mei.documentElement, //node to import
                true //clone its descendants
        );
        mei2.appendChild(newNode);

        Array.from(document.getElementsByClassName("note")).forEach((x) => {
                if (x.style.visibility == "hidden") {
                        //TODO: this is wrong
                        //
                        var y = get_by_id(mei2, x.getAttribute("id"));
                        var paren = y.parentNode;
                        // TODO: deal properly with tremolos
                        // TODO
                        if (
                                replace_with_rests &&
                                !["chord", "bTrem", "fTrem"].includes(
                                        paren.tagName
                                )
                        ) {
                                // Add a rest
                                var rest = mei2.createElementNS(
                                        "http://www.music-encoding.org/ns/mei",
                                        "rest"
                                );
                                rest.setAttribute(
                                        "xml:id",
                                        "rest-" + y.getAttribute("xml:id")
                                );
                                rest.setAttribute("dur", y.getAttribute("dur"));
                                rest.setAttribute("n", y.getAttribute("n"));
                                rest.setAttribute(
                                        "dots",
                                        y.getAttribute("dots")
                                );
                                rest.setAttribute(
                                        "when",
                                        y.getAttribute("when")
                                );
                                rest.setAttribute(
                                        "layer",
                                        y.getAttribute("layer")
                                );
                                rest.setAttribute(
                                        "staff",
                                        y.getAttribute("staff")
                                );
                                rest.setAttribute(
                                        "tstamp.ges",
                                        y.getAttribute("tstamp.ges")
                                );
                                rest.setAttribute(
                                        "tstamp.real",
                                        y.getAttribute("tstamp.real")
                                );
                                rest.setAttribute(
                                        "tstamp",
                                        y.getAttribute("tstamp")
                                );
                                rest.setAttribute("loc", y.getAttribute("loc"));
                                rest.setAttribute(
                                        "dur.ges",
                                        y.getAttribute("dur.ges")
                                );
                                rest.setAttribute(
                                        "dots.ges",
                                        y.getAttribute("dots.ges")
                                );
                                rest.setAttribute(
                                        "dur.metrical",
                                        y.getAttribute("dur.ges")
                                );
                                rest.setAttribute(
                                        "dur.ppq",
                                        y.getAttribute("dur.ppq")
                                );
                                rest.setAttribute(
                                        "dur.real",
                                        y.getAttribute("dur.real")
                                );
                                rest.setAttribute(
                                        "dur.recip",
                                        y.getAttribute("dur.recip")
                                );
                                rest.setAttribute(
                                        "beam",
                                        y.getAttribute("beam")
                                );
                                rest.setAttribute(
                                        "fermata",
                                        y.getAttribute("fermata")
                                );
                                rest.setAttribute(
                                        "tuplet",
                                        y.getAttribute("tuplet")
                                );
                                //That's all I can think of. There's probably a better
                                //way to do this..
                                paren.insertBefore(rest, y);
                        }
                        paren.removeChild(y);
                }
        });
        Array.from(mei2.getElementsByTagName("chord")).forEach((x) => {
                var paren = x.parentNode;
                if (x.getElementsByTagName("note").length == 0) {
                        x.parentNode.removeChild(x);
                }
        });

        return mei2;
}

function rerender() {
        // Create new SVG element, stack the current version on
        // it..? No I have no idea how to UI this properly.
        var mei2 = rerender_mei();
        var data2 = new XMLSerializer().serializeToString(mei2);

        var svg2 = vrvToolkit.renderData(data2, {
                pageWidth: 20000,
                pageHeight: 10000,
                breaks: "none",
                format: "mei",
        });

        $("#svg_output").html(svg2);
        svg = svg2;
        mei = mei2;
        data = data2;
        mei_graph = add_or_fetch_graph();
        for (let n of document.getElementsByClassName("note")) {
                n.onclick = function (ev) {
                        toggle_selected(n, ev.shiftKey);
                };
        }
        if (non_notes_hidden) set_non_note_visibility("hidden");
        // Need also to redraw edges and relations
        draw_graph();

        // Can't undo after a rerender.. yet, TODO: Make layers
        rerendered_after_action = undo_actions.length;
        // This is one of the ugliest hacks I've made I think
        var reduces = undo_actions.filter((x) => {
                return x[0] == "reduce";
        });
        reduces.forEach((action) => {
                selected = action[2];
                do_reduce();
        });
        undo_action = [];
}

function texton() {
        text_input = true;
}
function textoff() {
        text_input = false;
}
function show_buttons() {
        $("#load_save")[0].style.display = "";
        $("#hidden_buttons")[0].style.display = "none";
}
function hide_buttons() {
        $("#load_save")[0].style.display = "none";
        $("#hidden_buttons")[0].style.display = "";
}

function zoom_in() {
        zoom = zoom * 1.1;
        $("#svg_output")[0].style.transform = "scale(" + zoom + ")";
}
function zoom_out() {
        zoom = zoom * 0.9090909090909;
        $("#svg_output")[0].style.transform = "scale(" + zoom + ")";
}

function do_deselect() {
        selected.forEach((x) => toggle_selected(x));
        extraselected.forEach((x) => toggle_selected(x, true));
}

function play_midi() {
        $("#player").midiPlayer.play("data:audio/midi;base64," + orig_midi);
}

function play_midi_reduction() {
        var mei2 = rerender_mei(true);
        var data2 = new XMLSerializer().serializeToString(mei2);
        vrvToolkit.loadData(data2);
        $("#player").midiPlayer.play(
                "data:audio/midi;base64," + vrvToolkit.renderToMIDI()
        );
        vrvToolkit.loadData(data);
}
