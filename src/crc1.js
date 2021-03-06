import {Buffer} from 'buffer';
import defineCrc from './define_crc';

module.exports = defineCrc('crc1', function (buf, previous) {
  if (!Buffer.isBuffer(buf)) buf = new Buffer(buf);

  let crc = ~~previous;
  let accum = 0;

  for (let index = 0; index < buf.length; index++) {
    const byte = buf[index];
    accum += byte
  }

  crc += accum % 256
  return crc % 256;
});
