import http from "node:http";
import { Transform } from "node:stream";

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;

    console.log(transformed);

    callback(null, Buffer.from(String(transformed)));
  }
}

// const app = http.createServer((req, res) => {
//   return req.pipe(new InverseNumberStream()).pipe(res);
// });

const app = http.createServer(async (req, res) => {
  const buffers = [];

  for await (const chuck of req) {
    buffers.push(chuck);
  }

  const fullStreamContent = Buffer.concat(buffers).toString();
  console.log(fullStreamContent);

  return res.end(fullStreamContent);
});

app.listen(3334);
