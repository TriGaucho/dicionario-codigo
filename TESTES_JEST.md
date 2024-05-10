# Testes usando JEST
**Curso**: Master unit testing with NodeJs, Typescript, Jest and React. Write top quality Typescript and NodeJs software with Jest
**Link**: https://www.udemy.com/course/unit-testing-typescript-nodejs/

Instalação:
~~~js
npm i -D jest @types/jest ts-node ts-jest
~~~


## Estrutura de teste: 3A

- arrange: organização
- act: ações
- assert: afirma

Exemplo:

arrange
const sut = nomeFuncao
const expected = oqueesperar

act
const actual = nomeFuncao('sss')

assert
expect(actual).toBe(expected)

### in.only 
executa somente aquele teste.

## Matcher
### .toBe()
compara com um valor especifico. Não usar para comparar objetos nem ponto flutuantes.

### .toEqual()
compara um objeto e/ou array passando os lementos

### toHaveLongth()
compara o tamanho

### toContain(arg)
verifica possui o arg no array testado.  

usando genericos do typescript *.toContain<string>(arg)*

### .not.toBe() / not.toBeUndefined() / .toBeDefined() / .toBeTruthy()
são formas de validar negações e indefinidos.

### it.each
para testar arryas de objetos.