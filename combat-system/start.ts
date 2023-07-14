let hero = new Hero("Superman", 180, 10, EntityType.HERO);
let monster = new Monster("Thanos", 200, 15, EntityType.MONSTER);
let battle = new Battle(hero, monster);
battle.fight();
