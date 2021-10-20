# in-string-list
>Check if a string is in a list of strings.

## Why?
I needed something to validate in the workflow-dispatch input to a Github Action

## Install

```
$ npm install in-string-list
```

## Usage

```js
import inStringList from 'in-string-list';

let inList = inStringList('major', 'major,minor', ',');
console.log(inList);
//=> true

const inList = inStringList('patch', 'major,minor', ',');
console.log(inList);
//=> false
```


## API

### inList(needle, haystack, separator)

Type: `bool`

Check if a string is in a list of strings seperated by a token.


## CLI

```
$ npx in-string-list 'major' 'major+minor' '+'
```

```
$ npx in-string-list --help

  Examples
    $ in-string-list 'major' 'major+minor' '+'
    exits with 0


    $ in-string-list 'patch' 'majorxxminor' 'xx'
    exits with 1
```
