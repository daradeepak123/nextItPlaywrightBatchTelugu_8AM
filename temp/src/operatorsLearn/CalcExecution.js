"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CalculatorLogic_1 = require("./CalculatorLogic");
(0, CalculatorLogic_1.add)(10, 20);
(0, CalculatorLogic_1.sub)(20, 10);
(0, CalculatorLogic_1.mul)(10, 20);
(0, CalculatorLogic_1.div)(20, 10);
(0, CalculatorLogic_1.sub)(10, 5).then(result => { console.log("Subtraction :", result); });
//# sourceMappingURL=CalcExecution.js.map