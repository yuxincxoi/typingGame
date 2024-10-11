const data = [
  // JavaScript
  "let x = 5;",
  "const arr = [1, 2, 3];",
  'function greet() { return "Hello!"; }',
  "const result = arr.map(n => n * 2);",
  'console.log("JavaScript is awesome!");',

  // TypeScript
  "let isDone: boolean = false;",
  "interface Person { name: string; age: number; }",
  'const person: Person = { name: "Alice", age: 30 };',
  "function add(a: number, b: number): number { return a + b; }",
  'let greeting: string = "Hello, TypeScript!";',

  // React
  "const element = <h1>Hello, world!</h1>;",
  "const App = () => <div>Welcome to React!</div>;",
  "const [count, setCount] = useState(0);",
  'useEffect(() => { console.log("Effect!"); }, []);',
  "return <button onClick={() => setCount(count + 1)}>Click me</button>;",

  // Node.js
  'const fs = require("fs");',
  'const http = require("http");',
  'const path = require("path");',
  'app.get("/", (req, res) => res.send("Hello, Node!"));',
  'const server = http.createServer((req, res) => res.end("Server running"));',

  // Python
  "x = 10",
  'print("Hello, Python!")',
  "def add(a, b): return a + b",
  "numbers = [1, 2, 3, 4]",
  "for num in numbers: print(num)",
];

export default data;
