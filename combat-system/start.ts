import * as b from "./battle";
import { EntityType } from "./EntityType";
let hero = new b.Hero("Superman", 180, 10, EntityType.HERO);
let monster = new b.Monster("Thanos", 200, 15, EntityType.MONSTER);
let battle = new b.Battle(hero, monster);
