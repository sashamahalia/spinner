delayTime = 100;
const animation = ['\r|   ', '\r/   ', '\r-   ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  '];


for (const char of animation) {
setTimeout(() => {
  process.stdout.write(char) ;
}, delayTime);
  delayTime += 200;
}