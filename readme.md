# Hex To Uint8

The fastest function to convert a hexadecimal string to a Uint8Array.

## Install

```sh
npm install hex-to-uint8
```

## Usage

```ts
import toUint8 from 'hex-to-uint8';

// Converting a hexadecimal string to a Uint8Array

const hex = '48656c6c6f2c20776f726c6421';
const uint8 = toUint8 ( hex ); // => Uint8Array(13) [ 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33 ]
```

## License

MIT © Fabio Spampinato
