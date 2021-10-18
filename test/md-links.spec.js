import {absolutePath} from '../libs/ruta.js';
import {toReadFile} from '../libs/file.js';
// import {jest} from '@jest/globals';
// import absolutePath from './mocks'
const pathMock='./mocks';
const pathAbsolute='C:\\GitHub\\BootCamp\\CDMX011-md-links\\mocks';
const pathFileTxt='C:\\GitHub\\BootCamp\\CDMX011-md-links\\test\\mocks\\file.txt';
const pathFileMd='C:\\GitHub\\BootCamp\\CDMX011-md-links\\test\\mocks\\exampleMock.md';

describe('Absolute Path', () => {
 
  it('should return a string with an absolute path from a relative one', () => {
     expect(typeof absolutePath(pathMock)).toBe('string')
  });

  it('should return C:\\GitHub\\BootCamp\\CDMX011-md-links\\mocks from an relative path ./mocks', ()=>{
  expect(absolutePath(pathMock)).toBe('C:\\GitHub\\BootCamp\\CDMX011-md-links\\mocks')
  });
 
  it('Should return the same path if this is absolute ' ,()=>{
    expect(absolutePath(pathAbsolute)).toEqual('C:\\GitHub\\BootCamp\\CDMX011-md-links\\mocks')
  });
});

describe('Read file',()=>{
  it('Should return a message about a wrong ext', () => {
    expect(toReadFile(pathFileTxt)).toBe('Extension de archivo no valida');
  });
  //como simular o hacer el comportamiento de file read o solo hacer un string con contenido??
  // it('with this C:\\GitHub\\BootCamp\\CDMX011-md-links\\test\\mocks\\exampleMock.md path Should return a object [Markdown](https://es.wikipedia.org/wiki/Markdown) and the absolute path', () => {
    
  //   expect(toReadFile(pathFileMd)).toEqual('Extension de archivo no valida');
  // });
  // it('Should return an object', () => {
  //   expect(typeof toReadFile(pathFileMd)).toBe('object')
  // });
});