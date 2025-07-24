import { HashMap } from "./HashMap.js";

const hashMap = HashMap();

hashMap.set("bk001", "The Hitchhikers Guide to the Galaxy");
hashMap.set("bk002", "The Lord of the Rings: The Two Towers");
hashMap.set("bk003", "Sharpe's Regiment");
hashMap.set("bk004", "Sharpe's Seige");

console.log(hashMap.length());
hashMap.clear();
console.log(hashMap.length());

console.log(hashMap.keys());