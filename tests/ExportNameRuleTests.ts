/// <reference path="../typings/mocha.d.ts" />
/// <reference path="../typings/chai.d.ts" />

/* tslint:disable:quotemark */
/* tslint:disable:no-multiline-string */
import TestHelper = require('./TestHelper');
import exportNameRule = require('../src/exportNameRule');

/**
 * Unit tests.
 */
describe('exportNameRule', () : void => {

    var ruleName : string = 'export-name';
    var exceptions : string[] = [];
    var original: any;

    beforeEach(() : void => {
        original = exportNameRule.Rule.getExceptions;
        exportNameRule.Rule.getExceptions = () : any => { return exceptions; };
    });

    afterEach(() : void => {
        exportNameRule.Rule.getExceptions = original;
    });

    describe('should pass', (): void => {
        it('when export equals assignment matches', () : void => {
            exceptions.length = 0;
            var inputFile : string = 'test-data/ExportNameRulePassingTestInput.ts';
            TestHelper.assertViolations(ruleName, inputFile, []);
        });

        it('for conflicting name when suppressed', () : void => {
            exceptions.push('ThisIsNot.*NameOfTheFile');
            var inputFile : string = 'test-data/ExportNameRuleFailingTestInput.ts';
            TestHelper.assertViolations(ruleName, inputFile, [ ]);
        });

        it('when single module is named same as the file', () : void => {
            // TestHelper assumes that all scripts are within file.ts
            var script : string = `
                export module file {
                }
            `;

            TestHelper.assertViolations(ruleName, script, [ ]);
        });

        it('when single module is named same as the file with nested elements', () : void => {
            // TestHelper assumes that all scripts are within file.ts
            var script : string = `
                export module file {
                    export module file2 {
                    }
                    export class file3 {
                    }
                }
            `;

            TestHelper.assertViolations(ruleName, script, [ ]);
        });

        it('when single class is named same as the file', () : void => {
            // TestHelper assumes that all scripts are within file.ts
            var script : string = `
                export class file {
                }
            `;

            TestHelper.assertViolations(ruleName, script, [ ]);
        });

        it('when single class is name same as the file with nested elements', () : void => {
            // TestHelper assumes that all scripts are within file.ts
            var script : string = `
                export class file {
                    export module file2 {
                    }
                    export class file3 {
                    }
                }
            `;

            TestHelper.assertViolations(ruleName, script, [ ]);
        });

        it('when single let is named same as the file', () : void => {
            // TestHelper assumes that all scripts are within file.ts
            var script : string = `
                export let file = [];
            `;

            TestHelper.assertViolations(ruleName, script, [ ]);
        });

        it('when single const is named same as the file', () : void => {
            // TestHelper assumes that all scripts are within file.ts
            var script : string = `
                export const file = [];
            `;

            TestHelper.assertViolations(ruleName, script, [ ]);
        });

        it('when single function is named same as the file', () : void => {
            // TestHelper assumes that all scripts are within file.ts
            var script : string = `
                export function file() {};
            `;

            TestHelper.assertViolations(ruleName, script, [ ]);
        });

        it('when anonymous Object is exported', () : void => {
            // TestHelper assumes that all scripts are within file.ts
            var script : string = `
                export {};
            `;

            TestHelper.assertViolations(ruleName, script, [ ]);
        });

        it('when multiple classes are exported', () : void => {
            // TestHelper assumes that all scripts are within file.ts
            var script : string = `
                export class file { }
                export class file2 { }
            `;

            TestHelper.assertViolations(ruleName, script, []);
        });

        it('multiple modules are exported', () : void => {
            // TestHelper assumes that all scripts are within file.ts
            var script : string = `
                export module file { }
                export module file2 { }
            `;

            TestHelper.assertViolations(ruleName, script, []);
        });

        it('multiple variables are exported', () : void => {
            // TestHelper assumes that all scripts are within file.ts
            var script : string = `
                export var x, y;
            `;

            TestHelper.assertViolations(ruleName, script, []);
        });

        it('when multiple consts are exported', () : void => {
            // TestHelper assumes that all scripts are within file.ts
            var script : string = `
                export const x = '', y = '';
            `;

            TestHelper.assertViolations(ruleName, script, []);
        });

        it('when multiple lets are exported', () : void => {
            // TestHelper assumes that all scripts are within file.ts
            var script : string = `
                export let x = '', y = '';
            `;

            TestHelper.assertViolations(ruleName, script, []);
        });

        it('when a variety of things are exported', () : void => {
            // TestHelper assumes that all scripts are within file.ts
            var script : string = `
                export let y = '';
                export module file2 { }
            `;

            TestHelper.assertViolations(ruleName, script, []);
        });
    });

    describe('should fail', (): void => {
        it('for conflicting name', () : void => {
            exceptions.length = 0;
            var inputFile : string = 'test-data/ExportNameRuleFailingTestInput.ts';
            TestHelper.assertViolations(ruleName, inputFile, [
                {
                    "failure": "The exported module or identifier name must match the file name. " +
                    "Found: test-data/ExportNameRuleFailingTestInput.ts and ThisIsNotTheNameOfTheFile",
                    "name": "test-data/ExportNameRuleFailingTestInput.ts",
                    "ruleName": "export-name",
                    "startPosition": { "character": 10, "line": 4 }
                }
            ]);
        });

        it('when mis-named module is exported', () : void => {
            // TestHelper assumes that all scripts are within file.ts
            var script : string = `
                export module Example1 {}
            `;

            TestHelper.assertViolations(ruleName, script, [
                {
                    "failure": "The exported module or identifier name must match the file name. Found: file.ts and Example1",
                    "name": "file.ts",
                    "ruleName": "export-name",
                    "startPosition": { "character": 17, "line": 2
                    }
                }
            ]);
        });

        it('when mis-named class is exported', () : void => {
            // TestHelper assumes that all scripts are within file.ts
            var script : string = `
                export class Example2 {}
            `;

            TestHelper.assertViolations(ruleName, script, [
                {
                    "failure": "The exported module or identifier name must match the file name. Found: file.ts and Example2",
                    "name": "file.ts",
                    "ruleName": "export-name",
                    "startPosition": { "character": 17, "line": 2 }
                }
            ]);
        });

        it('when mis-named function is exported', () : void => {
            // TestHelper assumes that all scripts are within file.ts
            var script : string = `
                export function Example3() {}
            `;

            TestHelper.assertViolations(ruleName, script, [
                {
                    "failure": "The exported module or identifier name must match the file name. Found: file.ts and Example3",
                    "name": "file.ts",
                    "ruleName": "export-name",
                    "startPosition": { "character": 17, "line": 2 }
                }

            ]);
        });

        it('when mis-named let defined variable is exported', () : void => {
            // TestHelper assumes that all scripts are within file.ts
            var script : string = `
                export let Example4 = [];
            `;

            TestHelper.assertViolations(ruleName, script, [
                {
                    "failure": "The exported module or identifier name must match the file name. Found: file.ts and Example4",
                    "name": "file.ts",
                    "ruleName": "export-name",
                    "startPosition": { "character": 28, "line": 2 }
                }
            ]);
        });

        it('when mis-named const is exported', () : void => {
            // TestHelper assumes that all scripts are within file.ts
            var script : string = `
                export const Example5 = [];
            `;

            TestHelper.assertViolations(ruleName, script, [
                {
                    "failure": "The exported module or identifier name must match the file name. Found: file.ts and Example5",
                    "name": "file.ts",
                    "ruleName": "export-name",
                    "startPosition": { "character": 30, "line": 2 }
                }
            ]);
        });

        it('when mis-named var defined variable is exported', () : void => {
            // TestHelper assumes that all scripts are within file.ts
            var script : string = `
                export var Example6 = [];
            `;

            TestHelper.assertViolations(ruleName, script, [
                {
                    "failure": "The exported module or identifier name must match the file name. Found: file.ts and Example6",
                    "name": "file.ts",
                    "ruleName": "export-name",
                    "startPosition": { "character": 28, "line": 2 }
                }
            ]);
        });

    });
});
/* tslint:enable:quotemark */
