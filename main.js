import { HashMap } from "./HashMap.js";

const hashMap = HashMap();

hashMap.set("bk001", "The Hitchhikers Guide to the Galaxy");
hashMap.set("bk002", "The Lord of the Rings: The Two Towers");
hashMap.set("bk003", "Sharpe's Regiment");

console.log(hashMap.get("bk001"));
console.log(hashMap.get("bk002"));
console.log(hashMap.get("bk003"));
console.log(hashMap.has("bk005"));