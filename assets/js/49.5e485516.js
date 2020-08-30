(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{394:function(e,t,a){"use strict";a.r(t);var _=a(42),s=Object(_.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"expirations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expirations"}},[e._v("#")]),e._v(" Expirations")]),e._v(" "),a("p",[e._v("This argument is available for all the Pyot Stores of type "),a("Badge",{attrs:{text:"Pyot Cache",vertical:"middle"}})],1),e._v(" "),a("h2",{attrs:{id:"basics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[e._v("#")]),e._v(" Basics")]),e._v(" "),a("p",[e._v("Accepts a dictionary of endpoints to a timedelta object or int of seconds.")]),e._v(" "),a("p",[e._v("By passing this argument, you override the default endpoints expirations specified in the dictionary. For example:")]),e._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"EXPIRATIONS"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"summoner_v4_by_name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"league_v4_challenger_league"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" td"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("minutes"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("This will override the "),a("code",[e._v("summoner_v4_by_name")]),e._v(" endpoint NOT cache (0 seconds), and "),a("code",[e._v("league_v4_challenger_league")]),e._v(" to cache for only 10 minutes, and leaving the rest of the default expirations untouched.")]),e._v(" "),a("h2",{attrs:{id:"wildcard-endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wildcard-endpoint"}},[e._v("#")]),e._v(" Wildcard Endpoint")]),e._v(" "),a("p",[e._v("To override the rest of the settings without the need of specifying each endpoint, you can use the wildcard "),a("code",[e._v('"*"')]),e._v(". For example:")]),e._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"EXPIRATIONS"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"summoner_v4_by_id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" td"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("seconds"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("This will override the "),a("code",[e._v("summoner_v4_by_id")]),e._v(" expiration to 10 seconds, and "),a("strong",[a("em",[e._v("setting the rest of the endpoints to 0, for instance to NOT cache")])]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("A good manipulation of expirations mapping will result in a better pipeline stack, for example: "),a("code",[e._v("Omnistone")]),e._v(" takes care of short time caching like "),a("code",[e._v("ChallengerLeague")]),e._v(", while "),a("code",[e._v("DjangoCache")]),e._v(" taking care of longer caching like "),a("code",[e._v("Match")]),e._v(" and "),a("code",[e._v("Timeline")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"default-expirations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-expirations"}},[e._v("#")]),e._v(" Default Expirations")]),e._v(" "),a("p",[e._v("Supposing the following import")]),e._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" datetime "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" timedelta "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" td\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("blockquote",[a("h3",{attrs:{id:"lol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lol"}},[e._v("#")]),e._v(" "),a("code",[e._v("LOL")]),e._v(" "),a("Badge",{attrs:{text:"Model",type:"warning",vertical:"middle"}})],1),e._v(" "),a("p",[a("code",[e._v('"account_v1_by_puuid": 0')])]),e._v(" "),a("p",[a("code",[e._v('"account_v1_active_shard": 0')])]),e._v(" "),a("p",[a("code",[e._v('"champion_v3_rotation": td(hours=3)')])]),e._v(" "),a("p",[a("code",[e._v('"champion_mastery_v4_all_mastery": 0')])]),e._v(" "),a("p",[a("code",[e._v('"champion_mastery_v4_by_champion_id": 0')])]),e._v(" "),a("p",[a("code",[e._v('"clash_v1_players": 0')])]),e._v(" "),a("p",[a("code",[e._v('"clash_v1_teams": 0')])]),e._v(" "),a("p",[a("code",[e._v('"clash_v1_tournaments_by_team_id": 0')])]),e._v(" "),a("p",[a("code",[e._v('"clash_v1_toutnaments_by_tournament_id": 0')])]),e._v(" "),a("p",[a("code",[e._v('"clash_v1_tournaments_all": td(hours=3)')])]),e._v(" "),a("p",[a("code",[e._v('"league_v4_summoner_entries": 0')])]),e._v(" "),a("p",[a("code",[e._v('"league_v4_challenger_league": td(minutes=10)')])]),e._v(" "),a("p",[a("code",[e._v('"league_v4_grandmaster_league": td(minutes=10)')])]),e._v(" "),a("p",[a("code",[e._v('"league_v4_master_league": td(minutes=10)')])]),e._v(" "),a("p",[a("code",[e._v('"league_v4_entries_by_division": 0')])]),e._v(" "),a("p",[a("code",[e._v('"league_v4_league_by_league_id": 0')])]),e._v(" "),a("p",[a("code",[e._v('"status_v3_shard_data": 0')])]),e._v(" "),a("p",[a("code",[e._v('"match_v4_match": td(days=7)')])]),e._v(" "),a("p",[a("code",[e._v('"match_v4_timeline": td(days=3)')])]),e._v(" "),a("p",[a("code",[e._v('"match_v4_matchlist": 0')])]),e._v(" "),a("p",[a("code",[e._v('"spectator_v4_current_game": 0')])]),e._v(" "),a("p",[a("code",[e._v('"spectator_v4_featured_games": 0')])]),e._v(" "),a("p",[a("code",[e._v('"summoner_v4_by_name": 0')])]),e._v(" "),a("p",[a("code",[e._v('"summoner_v4_by_id": 0')])]),e._v(" "),a("p",[a("code",[e._v('"summoner_v4_by_account_id": 0')])]),e._v(" "),a("p",[a("code",[e._v('"summoner_v4_by_puuid": 0')])]),e._v(" "),a("p",[a("code",[e._v('"third_party_code_v4_code": 0')])]),e._v(" "),a("p",[a("code",[e._v('"cdragon_champion_by_id": td(hours=1)')])]),e._v(" "),a("p",[a("code",[e._v('"cdragon_item_full": td(hours=1)')])]),e._v(" "),a("p",[a("code",[e._v('"cdragon_rune_full": td(hours=1)')])]),e._v(" "),a("p",[a("code",[e._v('"cdragon_profile_icon_full": td(hours=1)')])]),e._v(" "),a("p",[a("code",[e._v('"cdragon_spells_full": td(hours=1)')])]),e._v(" "),a("p",[a("code",[e._v('"meraki_champion_by_key": td(hours=3)')])]),e._v(" "),a("p",[a("code",[e._v('"meraki_item_by_id": td(hours=3)')])])]),e._v(" "),a("blockquote",[a("h3",{attrs:{id:"tft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tft"}},[e._v("#")]),e._v(" "),a("code",[e._v("TFT")]),e._v(" "),a("Badge",{attrs:{text:"Model",type:"warning",vertical:"middle"}})],1),e._v(" "),a("p",[a("code",[e._v('"account_v1_by_puuid": 0')])]),e._v(" "),a("p",[a("code",[e._v('"account_v1_active_shard": 0')])]),e._v(" "),a("p",[a("code",[e._v('"league_v1_summoner_entries": 0')])]),e._v(" "),a("p",[a("code",[e._v('"league_v1_challenger_league": td(minutes=10)')])]),e._v(" "),a("p",[a("code",[e._v('"league_v1_grandmaster_league": td(minutes=10)')])]),e._v(" "),a("p",[a("code",[e._v('"league_v1_master_league": td(minutes=10)')])]),e._v(" "),a("p",[a("code",[e._v('"league_v1_entries_by_division": 0')])]),e._v(" "),a("p",[a("code",[e._v('"league_v1_league_by_league_id": 0')])]),e._v(" "),a("p",[a("code",[e._v('"match_v1_match": td(days=7)')])]),e._v(" "),a("p",[a("code",[e._v('"match_v1_matchlist": td(minutes=5)')])]),e._v(" "),a("p",[a("code",[e._v('"summoner_v1_by_name": 0')])]),e._v(" "),a("p",[a("code",[e._v('"summoner_v1_by_id": 0')])]),e._v(" "),a("p",[a("code",[e._v('"summoner_v1_by_account_id": 0')])]),e._v(" "),a("p",[a("code",[e._v('"summoner_v1_by_puuid": 0')])]),e._v(" "),a("p",[a("code",[e._v('"cdragon_tft_full": td(hours=1)')])]),e._v(" "),a("p",[a("code",[e._v('"cdragon_profile_icon_full": td(hours=1)')])])]),e._v(" "),a("blockquote",[a("h3",{attrs:{id:"val"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#val"}},[e._v("#")]),e._v(" "),a("code",[e._v("VAL")]),e._v(" "),a("Badge",{attrs:{text:"Model",type:"warning",vertical:"middle"}})],1),e._v(" "),a("p",[a("code",[e._v('"account_v1_by_puuid": 0')])]),e._v(" "),a("p",[a("code",[e._v('"account_v1_by_riot_id": 0')])]),e._v(" "),a("p",[a("code",[e._v('"account_v1_active_shard": 0')])]),e._v(" "),a("p",[a("code",[e._v('"match_v1_match": td(days=7)')])]),e._v(" "),a("p",[a("code",[e._v('"match_v1_matchlist": 0')])]),e._v(" "),a("p",[a("code",[e._v('"content_v1_contents": td(hours=3)')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);