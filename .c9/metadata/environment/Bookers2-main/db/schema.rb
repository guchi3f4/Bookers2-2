{"filter":false,"title":"schema.rb","tooltip":"/Bookers2-main/db/schema.rb","undoManager":{"mark":3,"position":2,"stack":[[{"start":{"row":12,"column":50},"end":{"row":12,"column":53},"action":"insert","lines":["493"],"id":2},{"start":{"row":12,"column":54},"end":{"row":12,"column":57},"action":"remove","lines":["711"]},{"start":{"row":123,"column":18},"end":{"row":129,"column":14},"action":"remove","lines":["name\"","    t.datetime \"created_at\", null: false","    t.datetime \"updated_at\", null: false","  end","","  create_table \"top_tags\", force: :cascade do |t|","    t.string \""]}],[{"start":{"row":12,"column":50},"end":{"row":12,"column":54},"action":"remove","lines":["4930"],"id":3,"ignore":true},{"start":{"row":12,"column":50},"end":{"row":12,"column":54},"action":"insert","lines":["5145"]},{"start":{"row":33,"column":0},"end":{"row":40,"column":0},"action":"remove","lines":["  create_table \"categorizations\", force: :cascade do |t|","    t.integer \"top_tag_id\"","    t.integer \"tag_id\"","    t.datetime \"created_at\", null: false","    t.datetime \"updated_at\", null: false","  end","",""]}],[{"start":{"row":12,"column":51},"end":{"row":12,"column":54},"action":"remove","lines":["145"],"id":4,"ignore":true},{"start":{"row":12,"column":51},"end":{"row":12,"column":54},"action":"insert","lines":["317"]},{"start":{"row":121,"column":0},"end":{"row":127,"column":0},"action":"insert","lines":["  create_table \"top_tags\", force: :cascade do |t|","    t.string \"name\"","    t.datetime \"created_at\", null: false","    t.datetime \"updated_at\", null: false","  end","",""]}],[{"start":{"row":110,"column":15},"end":{"row":110,"column":31},"action":"remove","lines":["registration_num"],"id":5},{"start":{"row":110,"column":14},"end":{"row":110,"column":16},"action":"remove","lines":["\"\""]},{"start":{"row":110,"column":13},"end":{"row":110,"column":14},"action":"remove","lines":[" "]},{"start":{"row":110,"column":12},"end":{"row":110,"column":13},"action":"remove","lines":["r"]}]]},"ace":{"folds":[],"scrolltop":175.5,"scrollleft":0,"selection":{"start":{"row":48,"column":16},"end":{"row":48,"column":25},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":11,"state":"start","mode":"ace/mode/ruby"}},"timestamp":1632986892804,"hash":"115028ddec8d6371828a9dac4e69edf5a8c63030"}