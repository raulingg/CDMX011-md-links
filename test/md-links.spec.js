import { absolutePath } from '../libs/ruta.js';
import { toReadFile } from '../libs/file';
// import { toReadDirectory } from '../libs/directory.js';
// import fs from 'fs';
// import path from 'path';

// import absolutePath from './mocks'
let pathMock = './mocks';
let pathAbsolute = 'C:\\GitHub\\BootCamp\\CDMX011-md-links\\mocks';
let pathFileTxt = 'C:\\GitHub\\BootCamp\\CDMX011-md-links\\test\\mocks\\file.txt';
let pathFileMd = 'C:\\GitHub\\BootCamp\\CDMX011-md-links\\test\\mocks\\exampleMock.md';
// let content = fs.readFileSync(pathFileMd, 'utf8');
let objectPath = [{
  Title: "[Markdown]",
  Url: "https://es.wikipedia.org/wiki/Markdown",
  path: "C:\\GitHub\\BootCamp\\CDMX011-md-links\\test\\mocks\\exampleMock.md"
}];

describe('Absolute Path', () => {
  consoloe.log(absolutePath(pathMock))
  it('should return a string with an absolute path from a relative one', () => {
    expect(typeof absolutePath(pathMock)).toBe('string')
  });

  it('should return C:\\GitHub\\BootCamp\\CDMX011-md-links\\mocks from an relative path ./mocks', () => {
    expect(absolutePath(pathMock)).toBe('C:\\GitHub\\BootCamp\\CDMX011-md-links\\mocks')
  });

  it('Should return the same path if this is absolute ', () => {
    expect(absolutePath(pathAbsolute)).toEqual('C:\\GitHub\\BootCamp\\CDMX011-md-links\\mocks')
  });
  
});
describe('Read file', () => {
  it('Should return an object', () => {
    expect(typeof toReadFile(pathFileMd)).toEqual('object')
  });

  it('Should return a message about a wrong ext', () => {
    expect(toReadFile(pathFileTxt)).toEqual("Extension de archivo no valida");
  });
  //como simular o hacer el comportamiento de file read o solo hacer un string con contenido??
  it('with this C:\\GitHub\\BootCamp\\CDMX011-md-links\\test\\mocks\\exampleMock.md path Should return a object [Markdown](https://es.wikipedia.org/wiki/Markdown) and the absolute path', () => {
    expect(toReadFile(pathFileMd)).toEqual(objectPath);
  }); 
});

  // test('Shoul return an object', done => {
  //   const data=toReadDirectory(pathAbsolute);
  //   function callback(err, data) {
  //     try {
  //       expect(data).toBe(objectPath);
  //       done();
  //     } catch (err) {
  //       done(err);
  //     }
  //   }
  
  //   fetchData(callback);
  
  // it('Should return an object', () => {
  //   // expect(toReadDirectory('C:\\GitHub\\BootCamp\\CDMX011-md-links\\test\\mocks')).toEqual(objectPath);

  // });
// });

