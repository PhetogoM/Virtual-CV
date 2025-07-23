import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Delete } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const CalculatorPage = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForNewValue(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "×":
        return firstValue * secondValue;
      case "÷":
        return firstValue / secondValue;
      case "=":
        return secondValue;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const clearEntry = () => {
    setDisplay("0");
    setWaitingForNewValue(false);
  };

  const inputDecimal = () => {
    if (waitingForNewValue) {
      setDisplay("0.");
      setWaitingForNewValue(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  const toggleSign = () => {
    if (display !== "0") {
      setDisplay(display.charAt(0) === "-" ? display.substr(1) : "-" + display);
    }
  };

  const percentage = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  const buttonClass = "h-16 text-lg font-semibold transition-all transform hover:scale-105 active:scale-95";
  const numberButtonClass = `${buttonClass} bg-muted/50 hover:bg-muted border border-border/50`;
  const operatorButtonClass = `${buttonClass} bg-primary hover:bg-primary/90 text-primary-foreground`;
  const functionButtonClass = `${buttonClass} bg-secondary hover:bg-secondary/80 text-secondary-foreground`;

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-md">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gradient">Calculator</h1>
              <p className="text-muted-foreground">Advanced mathematical calculator</p>
            </div>
          </div>

          {/* Calculator */}
          <Card className="card-hover p-6 space-y-6">
            {/* Display */}
            <div className="bg-muted/30 rounded-lg p-6 text-right">
              <div className="text-3xl font-mono font-bold text-primary break-all">
                {display}
              </div>
              {operation && previousValue !== null && (
                <div className="text-sm text-muted-foreground mt-2">
                  {previousValue} {operation}
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-4 gap-3">
              {/* Row 1 */}
              <Button onClick={clear} className={functionButtonClass}>
                AC
              </Button>
              <Button onClick={clearEntry} className={functionButtonClass}>
                CE
              </Button>
              <Button onClick={percentage} className={functionButtonClass}>
                %
              </Button>
              <Button onClick={() => inputOperation("÷")} className={operatorButtonClass}>
                ÷
              </Button>

              {/* Row 2 */}
              <Button onClick={() => inputNumber("7")} className={numberButtonClass}>
                7
              </Button>
              <Button onClick={() => inputNumber("8")} className={numberButtonClass}>
                8
              </Button>
              <Button onClick={() => inputNumber("9")} className={numberButtonClass}>
                9
              </Button>
              <Button onClick={() => inputOperation("×")} className={operatorButtonClass}>
                ×
              </Button>

              {/* Row 3 */}
              <Button onClick={() => inputNumber("4")} className={numberButtonClass}>
                4
              </Button>
              <Button onClick={() => inputNumber("5")} className={numberButtonClass}>
                5
              </Button>
              <Button onClick={() => inputNumber("6")} className={numberButtonClass}>
                6
              </Button>
              <Button onClick={() => inputOperation("-")} className={operatorButtonClass}>
                -
              </Button>

              {/* Row 4 */}
              <Button onClick={() => inputNumber("1")} className={numberButtonClass}>
                1
              </Button>
              <Button onClick={() => inputNumber("2")} className={numberButtonClass}>
                2
              </Button>
              <Button onClick={() => inputNumber("3")} className={numberButtonClass}>
                3
              </Button>
              <Button onClick={() => inputOperation("+")} className={operatorButtonClass}>
                +
              </Button>

              {/* Row 5 */}
              <Button onClick={toggleSign} className={functionButtonClass}>
                ±
              </Button>
              <Button onClick={() => inputNumber("0")} className={numberButtonClass}>
                0
              </Button>
              <Button onClick={inputDecimal} className={numberButtonClass}>
                .
              </Button>
              <Button onClick={performCalculation} className={`${operatorButtonClass} bg-accent hover:bg-accent/90 text-accent-foreground`}>
                =
              </Button>
            </div>

            {/* Additional Functions */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border/50">
              <Button 
                onClick={() => {
                  const value = parseFloat(display);
                  setDisplay(String(Math.sqrt(value)));
                }} 
                className={functionButtonClass}
              >
                √
              </Button>
              <Button 
                onClick={() => {
                  const value = parseFloat(display);
                  setDisplay(String(Math.pow(value, 2)));
                }} 
                className={functionButtonClass}
              >
                x²
              </Button>
            </div>

            {/* Calculator Info */}
            <div className="text-center pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                Advanced Calculator with Memory Functions
              </p>
              <div className="flex justify-center gap-4 mt-2 text-xs text-muted-foreground">
                <span>AC: All Clear</span>
                <span>CE: Clear Entry</span>
                <span>±: Toggle Sign</span>
              </div>
            </div>
          </Card>

          {/* Features Card */}
          <Card className="card-hover p-6 mt-6">
            <h3 className="text-lg font-semibold mb-4">Calculator Features</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Basic Operations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Decimal Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Percentage</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Square Root</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Square Power</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Sign Toggle</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;