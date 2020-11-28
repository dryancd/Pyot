(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{379:function(e,t,a){"use strict";a.r(t);var r=a(42),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#models"}},[e._v("#")]),e._v(" Models")]),e._v(" "),a("p",[e._v("To import a model:")]),e._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" pyot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("models "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" val\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[e._v("RIOT")]),e._v(" "),a("Badge",{attrs:{text:"Model",type:"warning",vertical:"middle"}}),e._v(" "),a("Badge",{attrs:{text:"Global",type:"error",vertical:"middle"}})],1),e._v(" "),a("li",[a("code",[e._v("LOL")]),e._v(" "),a("Badge",{attrs:{text:"Model",type:"warning",vertical:"middle"}})],1),e._v(" "),a("li",[a("code",[e._v("TFT")]),e._v(" "),a("Badge",{attrs:{text:"Model",type:"warning",vertical:"middle"}})],1),e._v(" "),a("li",[a("code",[e._v("LOR")]),e._v(" "),a("Badge",{attrs:{text:"Model",type:"warning",vertical:"middle"}})],1),e._v(" "),a("li",[a("code",[e._v("VAL")]),e._v(" "),a("Badge",{attrs:{text:"Model",type:"warning",vertical:"middle"}})],1)]),e._v(" "),a("p",[e._v("Some model doesn't need a pipeline on startup, but needs a pipeline at run time. For example the "),a("code",[e._v("riot")]),e._v(" model.")]),e._v(" "),a("h1",{attrs:{id:"legend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#legend"}},[e._v("#")]),e._v(" Legend")]),e._v(" "),a("p",[e._v("-"),a("Badge",{attrs:{text:"Model",type:"warning",vertical:"middle"}}),e._v(": This is a Model")],1),e._v(" "),a("p",[e._v("-"),a("Badge",{attrs:{text:"Global",type:"error",vertical:"middle"}}),e._v(": This Model "),a("strong",[a("em",[e._v("does not require a pipeline")])]),e._v(" to work with, but needs a pipeline at run time.")],1),e._v(" "),a("p",[e._v("-"),a("Badge",{attrs:{text:"Pyot Core",vertical:"middle"}}),e._v(": This object is of type "),a("strong",[a("em",[e._v("Pyot Core")])]),e._v(" and can use any of the "),a("strong",[a("em",[e._v("Pyot Core")])]),e._v(" API")],1),e._v(" "),a("p",[e._v("-"),a("Badge",{attrs:{text:"Pyot Static",vertical:"middle"}}),e._v(": This object is of type "),a("strong",[a("em",[e._v("Pyot Static")])]),e._v(" and can use any of the "),a("strong",[a("em",[e._v("Pyot Static")])]),e._v(" API")],1),e._v(" "),a("p",[e._v("-"),a("Badge",{attrs:{text:"Pyot Container",vertical:"middle"}}),e._v(": This object is of type "),a("strong",[a("em",[e._v("Pyot Container")])]),e._v(" and can use any of the "),a("strong",[a("em",[e._v("Pyot Container")])]),e._v(" API")],1),e._v(" "),a("p",[e._v("-"),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(": Available params that can be passed to the Pyot Core object")],1),e._v(" "),a("p",[e._v("-"),a("Badge",{attrs:{text:"query",type:"error",vertical:"middle"}}),e._v(": This Pyot Core object can append a query to the token (e.g. a "),a("code",[e._v("begin_index")]),e._v(" to the LoL "),a("code",[e._v("MatchHistory")]),e._v(")")],1),e._v(" "),a("p",[e._v("-"),a("Badge",{attrs:{text:"body",type:"error",vertical:"middle"}}),e._v(": This Pyot Core object can append a body to the request (e.g. body passed for creating a tournament code).")],1),e._v(" "),a("p",[e._v("-"),a("Badge",{attrs:{text:"endpoint",type:"error",vertical:"middle"}}),e._v(": The endpoint that the Pyot Core object will use to make external request to gather the data. Typically a legend for manipulating the default expiration maps of Stores of type Cache.")],1),e._v(" "),a("p",[e._v("-"),a("Badge",{attrs:{text:"bridge",type:"error",vertical:"middle"}}),e._v(': A "bridge" that returns a instance of another Pyot Core object (e.g. when a '),a("code",[e._v("rune_id")]),e._v(" is available in the object, there is a high chance that a "),a("code",[e._v("rune")]),e._v(" bridge is available to return a "),a("code",[e._v("Rune")]),e._v(" object).")],1),e._v(" "),a("p",[e._v("-"),a("Badge",{attrs:{text:"method",type:"error",vertical:"middle"}}),e._v(": This is a member method of the documented object.")],1),e._v(" "),a("p",[e._v("-"),a("Badge",{attrs:{text:"Iterable",type:"warning",vertical:"middle"}}),e._v(": Flags the Pyot Object that it is iterable, meaning it can be indexed or iterated in a loop statement (e.g. "),a("code",[e._v("for mastery in champion_masteries: ...")]),e._v(" or "),a("code",[e._v("champion_masteries[0]")]),e._v(" where "),a("code",[e._v("champion_masteries")]),e._v(" is an instance of "),a("code",[e._v("ChampionMasteries")]),e._v(").")],1),e._v(" "),a("p",[e._v("-"),a("Badge",{attrs:{text:"Iterator",type:"warning",vertical:"middle"}}),e._v(": The attr of the object that is used as iterator (e.g. in the example above "),a("code",[e._v("ChampionMasteries")]),e._v(" in "),a("em",[e._v("reality")]),e._v(" is iterating through its "),a("code",[e._v("masteries")]),e._v(" attr which is a list).")],1),e._v(" "),a("p",[e._v("-"),a("Badge",{attrs:{text:"GET",vertical:"middle"}}),e._v(": This object supports the "),a("code",[e._v("get()")]),e._v(" method.")],1),e._v(" "),a("p",[e._v("-"),a("Badge",{attrs:{text:"POST",vertical:"middle"}}),e._v(": This object supports the "),a("code",[e._v("post()")]),e._v(" method.")],1),e._v(" "),a("p",[e._v("-"),a("Badge",{attrs:{text:"PUT",vertical:"middle"}}),e._v(": This object supports the "),a("code",[e._v("put()")]),e._v(" method.")],1),e._v(" "),a("p",[e._v("-"),a("Badge",{attrs:{text:"DELETE",vertical:"middle"}}),e._v(": This object supports the "),a("code",[e._v("delete()")]),e._v(" method.")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);