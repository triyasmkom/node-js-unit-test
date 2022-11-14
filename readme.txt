Node js unit test library
- Jest : https://jestjs.io/
- Mocha : https://mochajs.org/
- Jasmine : https://jasmine.github.io/


Jest => library untuk implementasi unit test

install jest
npm install jest --save-dev

or

"devDependencies": {
    "jest": "^29.3.1"
  }

npm install

https://www.npmjs.com/package/jest

file yang perlu dijalankan ketika mau menggunakan unit test
node_module/.bin/jest

./node_modules/.bin/jest


NPX (Node Package Rynner)
menjalankan jest dengan NPX :
 npx jest

Babel library => untuk mengenali fitur java script modul
- Java Script compiler
- untuk mengkompilasi java script versi baru ke versi lama
- https://babeljs.io/
- https://babeljs.io/setup
- npm install --save-dev babel-jest
- tambahkan di package.json
    "jest": {
      "transform": {
        "^.+\\.[t|j]sx?$": "babel-jest"
      }
    },
- dependensi dev babel
  npm install @babel/preset-env --save-dev

- create babel.config.json

  {
    "presets": ["@babel/preset-env"]
  }

  output:
    triyas@triyas-ThinkPad-T420:~/data/Project/BelajarNodeJs/unit_test_nodeJs$ npx jest --init

    The following questions will help Jest to create a suitable configuration for your project

    ✔ Would you like to use Typescript for the configuration file? … no
    ✔ Choose the test environment that will be used for testing › node
    ✔ Do you want Jest to add coverage reports? … no
    ✔ Which provider should be used to instrument code for coverage? › v8
    ✔ Automatically clear mock calls, instances, contexts and results before every test? … no

    📝  Configuration file created at /home/triyas/data/Project/BelajarNodeJs/unit_test_nodeJs/jest.config.mjs


Jest Configuration
- menyimpan di file package.json
- atau jest.config.js jest.config.ts jest.config.mjs.xxx (pastikan menggunakan config ini, jangan lupa untuk memindahkan konfigurasi jest di package.json)
- jest --init
- konfigurasi jest : key-value https://jestjs.io/docs/configuration


Jest Command Line Interface
- untuk menambahkan parameter jest
  npx jest --help

- menjalankan test berdasarkan path
  npx jest --runTestsByPath test/sum.test.js

- menjalankan test name pattern
  npx jest --testNamePattern "test sum function 2"


Matchers
- https://jestjs.io/docs/using-matchers

Expect Function
- https://jestjs.io/docs/expect

