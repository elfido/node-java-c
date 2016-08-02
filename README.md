# Java, NodeJS and (NodeJS & C++) benchmark
## Requires
* Java
* NodeJS
* NodeGyp

```bash
npm install -g node-gyp
```
## Compiling Java (from the java directory)
```bash
javac Fibo.java
```

## Compiling Node (from the nodejs folder)
```bash
node-gyp configure
node-gyp build
```

## Execute
```bash
cd java
java Fibo
cd ../nodejs
node index
```
