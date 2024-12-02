
// 1) import { one, two } from "./main.js"; // Импортируем сразу две переменные
// console.log(`${one} and ${two}`);

// 2) import { one as first } from "./main.js"; можно переименовать переменную (когда большое название переменной и ее неудобно читать)
// console.log(first);

// 3) import * as data from "./main"; // * - позволяет нам импортировать все что экспортируется из файла (data - по сути объект, который включает все что было экпортировано)
// import * as data from "./main"
// data.sayHi();

// import { one, two } from "./main.js"; // по сути тут просто деструктуризация объекта на one и two

// console.log(`${one} and ${two}`);

// !В модулях может быть экспорт по умолчанию. Он может быть только один т.е ЭКСПОРТ ПО УМОЛЧАНИЮ ДОЛЖЕН БЫТЬ ТОЛЬКО ОДИН:
// -export default
// import sayHi from "./main.js"; // тут функция напрямую экспортируется из main.js
// sayHi();

// 4) Атрибут typemodel - можем применить к тегу скрипт в HTML, чтобы он попытался использовать скрипты в качестве модулей.
// Порядок действий:
// 1) Настроить все необходимые экспорты и импорты
// 2) Правильно подключить на нашу страницу:
// 1 - ый файл идет тот, у которого файлы экспортируются
// 2 - ой файл
// 3 поставить type="module"
// 4 Должны правильно прописывать пути к нашим файлам т.е main.js (import { one, two } from "./main.js";)

{/* <script type="module" src="./src/js/main.js"></script>
<script type="module" src="./src/js/script.js" ></script> */}

import { one, two } from "./main.js";
import sayHi from "./main.js";

console.log(`${one} and ${two}`);
sayHi();