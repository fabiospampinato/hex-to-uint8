
/* IMPORT */

import fc from 'fast-check';
import {describe} from 'fava';
import {Buffer} from 'node:buffer';
import toUint8 from '../dist/index.js';

/* MAIN */

describe ( 'Hex To Uint8', it => {

  it ( 'works with fc-generated strings', t => {

    const assert = str => t.is ( toUint8 ( Buffer.from ( str ).toString ( 'hex' ) ).join ( ',' ), Buffer.from ( Buffer.from ( str ).toString ( 'hex' ), 'hex' ).join ( ',' ) );
    const property = fc.property ( fc.fullUnicodeString (), assert );

    fc.assert ( property, { numRuns: 1000000 } );

  });

});
