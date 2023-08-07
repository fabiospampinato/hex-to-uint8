
/* IMPORT */

import Hex from 'hex-encoding';

/* MAIN */

const toUint8 = ( hex: string ): Uint8Array => {

  return Hex.decode ( hex );

};

/* EXPORT */

export default toUint8;
