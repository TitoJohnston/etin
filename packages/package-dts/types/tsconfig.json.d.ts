/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type JSONSchemaForTheTypeScriptCompilerSConfigurationFile = CompilerOptionsDefinition &
  CompileOnSaveDefinition &
  TypeAcquisitionDefinition &
  ExtendsDefinition &
  TsNodeDefinition &
  (FilesDefinition | ExcludeDefinition | IncludeDefinition | ReferencesDefinition);

export interface CompilerOptionsDefinition {
  /**
   * Instructs the TypeScript compiler how to compile .ts files.
   */
  compilerOptions?: {
    /**
     * The character set of the input files.
     */
    charset?: string;
    /**
     * Enables building for project references.
     */
    composite?: boolean;
    /**
     * Generates corresponding d.ts files.
     */
    declaration?: boolean;
    /**
     * Specify output directory for generated declaration files. Requires TypeScript version 2.0 or later.
     */
    declarationDir?: string | null;
    /**
     * Show diagnostic information.
     */
    diagnostics?: boolean;
    /**
     * Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.
     */
    emitBOM?: boolean;
    /**
     * Only emit '.d.ts' declaration files.
     */
    emitDeclarationOnly?: boolean;
    /**
     * Enable incremental compilation.
     */
    incremental?: boolean;
    /**
     * Specify file to store incremental compilation information.
     */
    tsBuildInfoFile?: string;
    /**
     * Emit a single file with source maps instead of having a separate file.
     */
    inlineSourceMap?: boolean;
    /**
     * Emit the source alongside the sourcemaps within a single file; requires --inlineSourceMap to be set.
     */
    inlineSources?: boolean;
    /**
     * Specify JSX code generation: 'preserve', 'react', or 'react-native'.
     */
    jsx?: "preserve" | "react" | "react-native";
    /**
     * Specifies the object invoked for createElement and __spread when targeting 'react' JSX emit.
     */
    reactNamespace?: string;
    /**
     * Print names of files part of the compilation.
     */
    listFiles?: boolean;
    /**
     * Specifies the location where debugger should locate map files instead of generated locations
     */
    mapRoot?: string;
    /**
     * Specify module code generation: 'None', 'CommonJS', 'AMD', 'System', 'UMD', 'ES6', 'ES2015', 'ES2020' or 'ESNext'. Only 'AMD' and 'System' can be used in conjunction with --outFile.
     */
    module?:
      | ("CommonJS" | "AMD" | "System" | "UMD" | "ES6" | "ES2015" | "ES2020" | "ESNext" | "None")
      | {
          [k: string]: unknown;
        };
    /**
     * Specifies the end of line sequence to be used when emitting files: 'crlf' (Windows) or 'lf' (Unix).
     */
    newLine?:
      | ("crlf" | "lf")
      | {
          [k: string]: unknown;
        };
    /**
     * Do not emit output.
     */
    noEmit?: boolean;
    /**
     * Do not generate custom helper functions like __extends in compiled output.
     */
    noEmitHelpers?: boolean;
    /**
     * Do not emit outputs if any type checking errors were reported.
     */
    noEmitOnError?: boolean;
    /**
     * Warn on expressions and declarations with an implied 'any' type.
     */
    noImplicitAny?: boolean;
    /**
     * Raise error on 'this' expressions with an implied any type.
     */
    noImplicitThis?: boolean;
    /**
     * Report errors on unused locals. Requires TypeScript version 2.0 or later.
     */
    noUnusedLocals?: boolean;
    /**
     * Report errors on unused parameters. Requires TypeScript version 2.0 or later.
     */
    noUnusedParameters?: boolean;
    /**
     * Do not include the default library file (lib.d.ts).
     */
    noLib?: boolean;
    /**
     * Do not add triple-slash references or module import targets to the list of compiled files.
     */
    noResolve?: boolean;
    /**
     * Disable strict checking of generic signatures in function types.
     */
    noStrictGenericChecks?: boolean;
    skipDefaultLibCheck?: boolean;
    /**
     * Skip type checking of declaration files. Requires TypeScript version 2.0 or later.
     */
    skipLibCheck?: boolean;
    /**
     * Concatenate and emit output to single file.
     */
    outFile?: string;
    /**
     * Redirect output structure to the directory.
     */
    outDir?: string;
    /**
     * Do not erase const enum declarations in generated code.
     */
    preserveConstEnums?: boolean;
    /**
     * Do not resolve symlinks to their real path; treat a symlinked file like a real one.
     */
    preserveSymlinks?: boolean;
    /**
     * Keep outdated console output in watch mode instead of clearing the screen.
     */
    preserveWatchOutput?: boolean;
    /**
     * Stylize errors and messages using color and context (experimental).
     */
    pretty?: boolean;
    /**
     * Do not emit comments to output.
     */
    removeComments?: boolean;
    /**
     * Specifies the root directory of input files. Use to control the output directory structure with --outDir.
     */
    rootDir?: string;
    /**
     * Unconditionally emit imports for unresolved files.
     */
    isolatedModules?: boolean;
    /**
     * Generates corresponding '.map' file.
     */
    sourceMap?: boolean;
    /**
     * Specifies the location where debugger should locate TypeScript files instead of source locations.
     */
    sourceRoot?: string;
    /**
     * Suppress excess property checks for object literals.
     */
    suppressExcessPropertyErrors?: boolean;
    /**
     * Suppress noImplicitAny errors for indexing objects lacking index signatures.
     */
    suppressImplicitAnyIndexErrors?: boolean;
    /**
     * Do not emit declarations for code that has an '@internal' annotation.
     */
    stripInternal?: boolean;
    /**
     * Specify ECMAScript target version: 'ES3', 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ESNext'
     */
    target?:
      | ("ES3" | "ES5" | "ES6" | "ES2015" | "ES2016" | "ES2017" | "ES2018" | "ES2019" | "ES2020" | "ESNext")
      | {
          [k: string]: unknown;
        };
    /**
     * Watch input files.
     */
    watch?: boolean;
    /**
     * Enables experimental support for ES7 decorators.
     */
    experimentalDecorators?: boolean;
    /**
     * Emit design-type metadata for decorated declarations in source.
     */
    emitDecoratorMetadata?: boolean;
    /**
     * Specifies module resolution strategy: 'node' (Node) or 'classic' (TypeScript pre 1.6) .
     */
    moduleResolution?:
      | ("Classic" | "Node")
      | {
          [k: string]: unknown;
        };
    /**
     * Do not report errors on unused labels.
     */
    allowUnusedLabels?: boolean;
    /**
     * Report error when not all code paths in function return a value.
     */
    noImplicitReturns?: boolean;
    /**
     * Report errors for fallthrough cases in switch statement.
     */
    noFallthroughCasesInSwitch?: boolean;
    /**
     * Do not report errors on unreachable code.
     */
    allowUnreachableCode?: boolean;
    /**
     * Disallow inconsistently-cased references to the same file.
     */
    forceConsistentCasingInFileNames?: boolean;
    /**
     * Base directory to resolve non-relative module names.
     */
    baseUrl?: string;
    /**
     * Specify path mapping to be computed relative to baseUrl option.
     */
    paths?: {
      [k: string]: string[];
    };
    /**
     * List of TypeScript language server plugins to load. Requires TypeScript version 2.3 or later.
     */
    plugins?: {
      /**
       * Plugin name.
       */
      name?: string;
      [k: string]: unknown;
    }[];
    /**
     * Specify list of root directories to be used when resolving modules.
     */
    rootDirs?: string[];
    /**
     * Specify list of directories for type definition files to be included. Requires TypeScript version 2.0 or later.
     */
    typeRoots?: string[];
    /**
     * Type declaration files to be included in compilation. Requires TypeScript version 2.0 or later.
     */
    types?: string[];
    /**
     * Enable tracing of the name resolution process.
     */
    traceResolution?: boolean;
    /**
     * Allow javascript files to be compiled.
     */
    allowJs?: boolean;
    /**
     * Do not truncate error messages.
     */
    noErrorTruncation?: boolean;
    /**
     * Allow default imports from modules with no default export. This does not affect code emit, just typechecking.
     */
    allowSyntheticDefaultImports?: boolean;
    /**
     * Do not emit 'use strict' directives in module output.
     */
    noImplicitUseStrict?: boolean;
    /**
     * Enable to list all emitted files. Requires TypeScript version 2.0 or later.
     */
    listEmittedFiles?: boolean;
    /**
     * Disable size limit for JavaScript project. Requires TypeScript version 2.0 or later.
     */
    disableSizeLimit?: boolean;
    /**
     * List of library files to be included in the compilation. Possible values are: 'ES5', 'ES6', 'ES2015', 'ES7', 'ES2016', 'ES2017', 'ES2018', 'ESNext', 'DOM', 'DOM.Iterable', 'WebWorker', 'ScriptHost', 'ES2015.Core', 'ES2015.Collection', 'ES2015.Generator', 'ES2015.Iterable', 'ES2015.Promise', 'ES2015.Proxy', 'ES2015.Reflect', 'ES2015.Symbol', 'ES2015.Symbol.WellKnown', 'ES2016.Array.Include', 'ES2017.object', 'ES2017.Intl', 'ES2017.SharedMemory', 'ES2017.String', 'ES2017.TypedArrays', 'ES2018.Intl', 'ES2018.Promise', 'ES2018.RegExp', 'ESNext.AsyncIterable', 'ESNext.Array', 'ESNext.Intl', 'ESNext.Symbol'. Requires TypeScript version 2.0 or later.
     */
    lib?: (
      | (
          | "ES5"
          | "ES6"
          | "ES2015"
          | "ES2015.Collection"
          | "ES2015.Core"
          | "ES2015.Generator"
          | "ES2015.Iterable"
          | "ES2015.Promise"
          | "ES2015.Proxy"
          | "ES2015.Reflect"
          | "ES2015.Symbol.WellKnown"
          | "ES2015.Symbol"
          | "ES2016"
          | "ES2016.Array.Include"
          | "ES2017"
          | "ES2017.Intl"
          | "ES2017.Object"
          | "ES2017.SharedMemory"
          | "ES2017.String"
          | "ES2017.TypedArrays"
          | "ES2018"
          | "ES2018.AsyncGenerator"
          | "ES2018.AsyncIterable"
          | "ES2018.Intl"
          | "ES2018.Promise"
          | "ES2018.Regexp"
          | "ES2019"
          | "ES2019.Array"
          | "ES2019.Object"
          | "ES2019.String"
          | "ES2019.Symbol"
          | "ES2020"
          | "ES2020.BigInt"
          | "ES2020.Promise"
          | "ES2020.String"
          | "ES2020.Symbol.WellKnown"
          | "ESNext"
          | "ESNext.Array"
          | "ESNext.AsyncIterable"
          | "ESNext.BigInt"
          | "ESNext.Intl"
          | "ESNext.Promise"
          | "ESNext.String"
          | "ESNext.Symbol"
          | "DOM"
          | "DOM.Iterable"
          | "ScriptHost"
          | "WebWorker"
          | "WebWorker.ImportScripts"
        )
      | {
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
      | {
          [k: string]: unknown;
        }
    )[];
    /**
     * Enable strict null checks. Requires TypeScript version 2.0 or later.
     */
    strictNullChecks?: boolean;
    /**
     * The maximum dependency depth to search under node_modules and load JavaScript files. Only applicable with --allowJs.
     */
    maxNodeModuleJsDepth?: number;
    /**
     * Import emit helpers (e.g. '__extends', '__rest', etc..) from tslib. Requires TypeScript version 2.1 or later.
     */
    importHelpers?: boolean;
    /**
     * Specify emit/checking behavior for imports that are only used for types
     */
    importsNotUsedAsValues?: "remove" | "preserve" | "error";
    /**
     * Specify the JSX factory function to use when targeting react JSX emit, e.g. 'React.createElement' or 'h'. Requires TypeScript version 2.1 or later.
     */
    jsxFactory?: string;
    /**
     * Specify the JSX Fragment reference to use for fragements when targeting react JSX emit, e.g. 'React.Fragment' or 'Fragment'. Requires TypeScript version 4.0 or later.
     */
    jsxFragmentFactory?: string;
    /**
     * Parse in strict mode and emit 'use strict' for each source file. Requires TypeScript version 2.1 or later.
     */
    alwaysStrict?: boolean;
    /**
     * Enable all strict type checking options. Requires TypeScript version 2.3 or later.
     */
    strict?: boolean;
    /**
     * Enable stricter checking of of the `bind`, `call`, and `apply` methods on functions.
     */
    strictBindCallApply?: boolean;
    /**
     * Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. Requires TypeScript version 2.3 or later.
     */
    downlevelIteration?: boolean;
    /**
     * Report errors in .js files. Requires TypeScript version 2.3 or later.
     */
    checkJs?: boolean;
    /**
     * Disable bivariant parameter checking for function types. Requires TypeScript version 2.6 or later.
     */
    strictFunctionTypes?: boolean;
    /**
     * Ensure non-undefined class properties are initialized in the constructor. Requires TypeScript version 2.7 or later.
     */
    strictPropertyInitialization?: boolean;
    /**
     * Emit '__importStar' and '__importDefault' helpers for runtime babel ecosystem compatibility and enable '--allowSyntheticDefaultImports' for typesystem compatibility. Requires TypeScript version 2.7 or later.
     */
    esModuleInterop?: boolean;
    /**
     * Allow accessing UMD globals from modules.
     */
    allowUmdGlobalAccess?: boolean;
    /**
     * Resolve 'keyof' to string valued property names only (no numbers or symbols). Requires TypeScript version 2.9 or later.
     */
    keyofStringsOnly?: boolean;
    /**
     * Emit ECMAScript standard class fields. Requires TypeScript version 3.7 or later.
     */
    useDefineForClassFields?: boolean;
    /**
     * Generates a sourcemap for each corresponding '.d.ts' file. Requires TypeScript version 2.9 or later.
     */
    declarationMap?: boolean;
    /**
     * Include modules imported with '.json' extension. Requires TypeScript version 2.9 or later.
     */
    resolveJsonModule?: boolean;
    /**
     * Have recompiles in '--incremental' and '--watch' assume that changes within a file will only affect files directly depending on it.
     */
    assumeChangesOnlyAffectDirectDependencies?: boolean;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface CompileOnSaveDefinition {
  /**
   * Enable Compile-on-Save for this project.
   */
  compileOnSave?: boolean;
  [k: string]: unknown;
}
export interface TypeAcquisitionDefinition {
  /**
   * Auto type (.d.ts) acquisition options for this project. Requires TypeScript version 2.1 or later.
   */
  typeAcquisition?: {
    /**
     * Enable auto type acquisition
     */
    enable?: boolean;
    /**
     * Specifies a list of type declarations to be included in auto type acquisition. Ex. ["jquery", "lodash"]
     */
    include?: string[];
    /**
     * Specifies a list of type declarations to be excluded from auto type acquisition. Ex. ["jquery", "lodash"]
     */
    exclude?: string[];
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface ExtendsDefinition {
  /**
   * Path to base configuration file to inherit from. Requires TypeScript version 2.1 or later.
   */
  extends?: string;
  [k: string]: unknown;
}
export interface TsNodeDefinition {
  /**
   * ts-node options.  See also: https://github.com/TypeStrong/ts-node#configuration-options
   *
   * ts-node offers TypeScript execution and REPL for node.js, with source map support.
   */
  "ts-node"?: {
    /**
     * Specify a custom TypeScript compiler.
     */
    compiler?: string;
    /**
     * Use TypeScript's compiler host API.
     */
    compilerHost?: boolean;
    /**
     * JSON object to merge with compiler options.
     */
    compilerOptions?: {
      /**
       * The character set of the input files.
       */
      charset?: string;
      /**
       * Enables building for project references.
       */
      composite?: boolean;
      /**
       * Generates corresponding d.ts files.
       */
      declaration?: boolean;
      /**
       * Specify output directory for generated declaration files. Requires TypeScript version 2.0 or later.
       */
      declarationDir?: string | null;
      /**
       * Show diagnostic information.
       */
      diagnostics?: boolean;
      /**
       * Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.
       */
      emitBOM?: boolean;
      /**
       * Only emit '.d.ts' declaration files.
       */
      emitDeclarationOnly?: boolean;
      /**
       * Enable incremental compilation.
       */
      incremental?: boolean;
      /**
       * Specify file to store incremental compilation information.
       */
      tsBuildInfoFile?: string;
      /**
       * Emit a single file with source maps instead of having a separate file.
       */
      inlineSourceMap?: boolean;
      /**
       * Emit the source alongside the sourcemaps within a single file; requires --inlineSourceMap to be set.
       */
      inlineSources?: boolean;
      /**
       * Specify JSX code generation: 'preserve', 'react', or 'react-native'.
       */
      jsx?: "preserve" | "react" | "react-native";
      /**
       * Specifies the object invoked for createElement and __spread when targeting 'react' JSX emit.
       */
      reactNamespace?: string;
      /**
       * Print names of files part of the compilation.
       */
      listFiles?: boolean;
      /**
       * Specifies the location where debugger should locate map files instead of generated locations
       */
      mapRoot?: string;
      /**
       * Specify module code generation: 'None', 'CommonJS', 'AMD', 'System', 'UMD', 'ES6', 'ES2015', 'ES2020' or 'ESNext'. Only 'AMD' and 'System' can be used in conjunction with --outFile.
       */
      module?:
        | ("CommonJS" | "AMD" | "System" | "UMD" | "ES6" | "ES2015" | "ES2020" | "ESNext" | "None")
        | {
            [k: string]: unknown;
          };
      /**
       * Specifies the end of line sequence to be used when emitting files: 'crlf' (Windows) or 'lf' (Unix).
       */
      newLine?:
        | ("crlf" | "lf")
        | {
            [k: string]: unknown;
          };
      /**
       * Do not emit output.
       */
      noEmit?: boolean;
      /**
       * Do not generate custom helper functions like __extends in compiled output.
       */
      noEmitHelpers?: boolean;
      /**
       * Do not emit outputs if any type checking errors were reported.
       */
      noEmitOnError?: boolean;
      /**
       * Warn on expressions and declarations with an implied 'any' type.
       */
      noImplicitAny?: boolean;
      /**
       * Raise error on 'this' expressions with an implied any type.
       */
      noImplicitThis?: boolean;
      /**
       * Report errors on unused locals. Requires TypeScript version 2.0 or later.
       */
      noUnusedLocals?: boolean;
      /**
       * Report errors on unused parameters. Requires TypeScript version 2.0 or later.
       */
      noUnusedParameters?: boolean;
      /**
       * Do not include the default library file (lib.d.ts).
       */
      noLib?: boolean;
      /**
       * Do not add triple-slash references or module import targets to the list of compiled files.
       */
      noResolve?: boolean;
      /**
       * Disable strict checking of generic signatures in function types.
       */
      noStrictGenericChecks?: boolean;
      skipDefaultLibCheck?: boolean;
      /**
       * Skip type checking of declaration files. Requires TypeScript version 2.0 or later.
       */
      skipLibCheck?: boolean;
      /**
       * Concatenate and emit output to single file.
       */
      outFile?: string;
      /**
       * Redirect output structure to the directory.
       */
      outDir?: string;
      /**
       * Do not erase const enum declarations in generated code.
       */
      preserveConstEnums?: boolean;
      /**
       * Do not resolve symlinks to their real path; treat a symlinked file like a real one.
       */
      preserveSymlinks?: boolean;
      /**
       * Keep outdated console output in watch mode instead of clearing the screen.
       */
      preserveWatchOutput?: boolean;
      /**
       * Stylize errors and messages using color and context (experimental).
       */
      pretty?: boolean;
      /**
       * Do not emit comments to output.
       */
      removeComments?: boolean;
      /**
       * Specifies the root directory of input files. Use to control the output directory structure with --outDir.
       */
      rootDir?: string;
      /**
       * Unconditionally emit imports for unresolved files.
       */
      isolatedModules?: boolean;
      /**
       * Generates corresponding '.map' file.
       */
      sourceMap?: boolean;
      /**
       * Specifies the location where debugger should locate TypeScript files instead of source locations.
       */
      sourceRoot?: string;
      /**
       * Suppress excess property checks for object literals.
       */
      suppressExcessPropertyErrors?: boolean;
      /**
       * Suppress noImplicitAny errors for indexing objects lacking index signatures.
       */
      suppressImplicitAnyIndexErrors?: boolean;
      /**
       * Do not emit declarations for code that has an '@internal' annotation.
       */
      stripInternal?: boolean;
      /**
       * Specify ECMAScript target version: 'ES3', 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ESNext'
       */
      target?:
        | ("ES3" | "ES5" | "ES6" | "ES2015" | "ES2016" | "ES2017" | "ES2018" | "ES2019" | "ES2020" | "ESNext")
        | {
            [k: string]: unknown;
          };
      /**
       * Watch input files.
       */
      watch?: boolean;
      /**
       * Enables experimental support for ES7 decorators.
       */
      experimentalDecorators?: boolean;
      /**
       * Emit design-type metadata for decorated declarations in source.
       */
      emitDecoratorMetadata?: boolean;
      /**
       * Specifies module resolution strategy: 'node' (Node) or 'classic' (TypeScript pre 1.6) .
       */
      moduleResolution?:
        | ("Classic" | "Node")
        | {
            [k: string]: unknown;
          };
      /**
       * Do not report errors on unused labels.
       */
      allowUnusedLabels?: boolean;
      /**
       * Report error when not all code paths in function return a value.
       */
      noImplicitReturns?: boolean;
      /**
       * Report errors for fallthrough cases in switch statement.
       */
      noFallthroughCasesInSwitch?: boolean;
      /**
       * Do not report errors on unreachable code.
       */
      allowUnreachableCode?: boolean;
      /**
       * Disallow inconsistently-cased references to the same file.
       */
      forceConsistentCasingInFileNames?: boolean;
      /**
       * Base directory to resolve non-relative module names.
       */
      baseUrl?: string;
      /**
       * Specify path mapping to be computed relative to baseUrl option.
       */
      paths?: {
        [k: string]: string[];
      };
      /**
       * List of TypeScript language server plugins to load. Requires TypeScript version 2.3 or later.
       */
      plugins?: {
        /**
         * Plugin name.
         */
        name?: string;
        [k: string]: unknown;
      }[];
      /**
       * Specify list of root directories to be used when resolving modules.
       */
      rootDirs?: string[];
      /**
       * Specify list of directories for type definition files to be included. Requires TypeScript version 2.0 or later.
       */
      typeRoots?: string[];
      /**
       * Type declaration files to be included in compilation. Requires TypeScript version 2.0 or later.
       */
      types?: string[];
      /**
       * Enable tracing of the name resolution process.
       */
      traceResolution?: boolean;
      /**
       * Allow javascript files to be compiled.
       */
      allowJs?: boolean;
      /**
       * Do not truncate error messages.
       */
      noErrorTruncation?: boolean;
      /**
       * Allow default imports from modules with no default export. This does not affect code emit, just typechecking.
       */
      allowSyntheticDefaultImports?: boolean;
      /**
       * Do not emit 'use strict' directives in module output.
       */
      noImplicitUseStrict?: boolean;
      /**
       * Enable to list all emitted files. Requires TypeScript version 2.0 or later.
       */
      listEmittedFiles?: boolean;
      /**
       * Disable size limit for JavaScript project. Requires TypeScript version 2.0 or later.
       */
      disableSizeLimit?: boolean;
      /**
       * List of library files to be included in the compilation. Possible values are: 'ES5', 'ES6', 'ES2015', 'ES7', 'ES2016', 'ES2017', 'ES2018', 'ESNext', 'DOM', 'DOM.Iterable', 'WebWorker', 'ScriptHost', 'ES2015.Core', 'ES2015.Collection', 'ES2015.Generator', 'ES2015.Iterable', 'ES2015.Promise', 'ES2015.Proxy', 'ES2015.Reflect', 'ES2015.Symbol', 'ES2015.Symbol.WellKnown', 'ES2016.Array.Include', 'ES2017.object', 'ES2017.Intl', 'ES2017.SharedMemory', 'ES2017.String', 'ES2017.TypedArrays', 'ES2018.Intl', 'ES2018.Promise', 'ES2018.RegExp', 'ESNext.AsyncIterable', 'ESNext.Array', 'ESNext.Intl', 'ESNext.Symbol'. Requires TypeScript version 2.0 or later.
       */
      lib?: (
        | (
            | "ES5"
            | "ES6"
            | "ES2015"
            | "ES2015.Collection"
            | "ES2015.Core"
            | "ES2015.Generator"
            | "ES2015.Iterable"
            | "ES2015.Promise"
            | "ES2015.Proxy"
            | "ES2015.Reflect"
            | "ES2015.Symbol.WellKnown"
            | "ES2015.Symbol"
            | "ES2016"
            | "ES2016.Array.Include"
            | "ES2017"
            | "ES2017.Intl"
            | "ES2017.Object"
            | "ES2017.SharedMemory"
            | "ES2017.String"
            | "ES2017.TypedArrays"
            | "ES2018"
            | "ES2018.AsyncGenerator"
            | "ES2018.AsyncIterable"
            | "ES2018.Intl"
            | "ES2018.Promise"
            | "ES2018.Regexp"
            | "ES2019"
            | "ES2019.Array"
            | "ES2019.Object"
            | "ES2019.String"
            | "ES2019.Symbol"
            | "ES2020"
            | "ES2020.BigInt"
            | "ES2020.Promise"
            | "ES2020.String"
            | "ES2020.Symbol.WellKnown"
            | "ESNext"
            | "ESNext.Array"
            | "ESNext.AsyncIterable"
            | "ESNext.BigInt"
            | "ESNext.Intl"
            | "ESNext.Promise"
            | "ESNext.String"
            | "ESNext.Symbol"
            | "DOM"
            | "DOM.Iterable"
            | "ScriptHost"
            | "WebWorker"
            | "WebWorker.ImportScripts"
          )
        | {
            [k: string]: unknown;
          }
        | {
            [k: string]: unknown;
          }
        | {
            [k: string]: unknown;
          }
        | {
            [k: string]: unknown;
          }
        | {
            [k: string]: unknown;
          }
        | {
            [k: string]: unknown;
          }
        | {
            [k: string]: unknown;
          }
        | {
            [k: string]: unknown;
          }
        | {
            [k: string]: unknown;
          }
        | {
            [k: string]: unknown;
          }
        | {
            [k: string]: unknown;
          }
      )[];
      /**
       * Enable strict null checks. Requires TypeScript version 2.0 or later.
       */
      strictNullChecks?: boolean;
      /**
       * The maximum dependency depth to search under node_modules and load JavaScript files. Only applicable with --allowJs.
       */
      maxNodeModuleJsDepth?: number;
      /**
       * Import emit helpers (e.g. '__extends', '__rest', etc..) from tslib. Requires TypeScript version 2.1 or later.
       */
      importHelpers?: boolean;
      /**
       * Specify emit/checking behavior for imports that are only used for types
       */
      importsNotUsedAsValues?: "remove" | "preserve" | "error";
      /**
       * Specify the JSX factory function to use when targeting react JSX emit, e.g. 'React.createElement' or 'h'. Requires TypeScript version 2.1 or later.
       */
      jsxFactory?: string;
      /**
       * Specify the JSX Fragment reference to use for fragements when targeting react JSX emit, e.g. 'React.Fragment' or 'Fragment'. Requires TypeScript version 4.0 or later.
       */
      jsxFragmentFactory?: string;
      /**
       * Parse in strict mode and emit 'use strict' for each source file. Requires TypeScript version 2.1 or later.
       */
      alwaysStrict?: boolean;
      /**
       * Enable all strict type checking options. Requires TypeScript version 2.3 or later.
       */
      strict?: boolean;
      /**
       * Enable stricter checking of of the `bind`, `call`, and `apply` methods on functions.
       */
      strictBindCallApply?: boolean;
      /**
       * Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. Requires TypeScript version 2.3 or later.
       */
      downlevelIteration?: boolean;
      /**
       * Report errors in .js files. Requires TypeScript version 2.3 or later.
       */
      checkJs?: boolean;
      /**
       * Disable bivariant parameter checking for function types. Requires TypeScript version 2.6 or later.
       */
      strictFunctionTypes?: boolean;
      /**
       * Ensure non-undefined class properties are initialized in the constructor. Requires TypeScript version 2.7 or later.
       */
      strictPropertyInitialization?: boolean;
      /**
       * Emit '__importStar' and '__importDefault' helpers for runtime babel ecosystem compatibility and enable '--allowSyntheticDefaultImports' for typesystem compatibility. Requires TypeScript version 2.7 or later.
       */
      esModuleInterop?: boolean;
      /**
       * Allow accessing UMD globals from modules.
       */
      allowUmdGlobalAccess?: boolean;
      /**
       * Resolve 'keyof' to string valued property names only (no numbers or symbols). Requires TypeScript version 2.9 or later.
       */
      keyofStringsOnly?: boolean;
      /**
       * Emit ECMAScript standard class fields. Requires TypeScript version 3.7 or later.
       */
      useDefineForClassFields?: boolean;
      /**
       * Generates a sourcemap for each corresponding '.d.ts' file. Requires TypeScript version 2.9 or later.
       */
      declarationMap?: boolean;
      /**
       * Include modules imported with '.json' extension. Requires TypeScript version 2.9 or later.
       */
      resolveJsonModule?: boolean;
      /**
       * Have recompiles in '--incremental' and '--watch' assume that changes within a file will only affect files directly depending on it.
       */
      assumeChangesOnlyAffectDirectDependencies?: boolean;
      [k: string]: unknown;
    };
    /**
     * Emit output files into `.ts-node` directory.
     */
    emit?: boolean;
    /**
     * Load files from `tsconfig.json` on startup.
     */
    files?: boolean;
    /**
     * Override the path patterns to skip compilation.
     */
    ignore?: string[];
    /**
     * Ignore TypeScript warnings by diagnostic code.
     */
    ignoreDiagnostics?: (string | number)[];
    /**
     * Logs TypeScript errors to stderr instead of throwing exceptions.
     */
    logError?: boolean;
    /**
     * Re-order file extensions so that TypeScript imports are preferred.
     */
    preferTsExts?: boolean;
    /**
     * Use pretty diagnostic formatter.
     */
    pretty?: boolean;
    /**
     * Scope compiler to files within `cwd`.
     */
    scope?: boolean;
    /**
     * Skip ignore check.
     */
    skipIgnore?: boolean;
    /**
     * Use TypeScript's faster `transpileModule`.
     */
    transpileOnly?: boolean;
    /**
     * **DEPRECATED** Specify type-check is enabled (e.g. `transpileOnly == false`).
     */
    typeCheck?: boolean;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface FilesDefinition {
  /**
   * If no 'files' or 'include' property is present in a tsconfig.json, the compiler defaults to including all files in the containing directory and subdirectories except those specified by 'exclude'. When a 'files' property is specified, only those files and those specified by 'include' are included.
   */
  files?: string[];
  [k: string]: unknown;
}
export interface ExcludeDefinition {
  /**
   * Specifies a list of files to be excluded from compilation. The 'exclude' property only affects the files included via the 'include' property and not the 'files' property. Glob patterns require TypeScript version 2.0 or later.
   */
  exclude?: string[];
  [k: string]: unknown;
}
export interface IncludeDefinition {
  /**
   * Specifies a list of glob patterns that match files to be included in compilation. If no 'files' or 'include' property is present in a tsconfig.json, the compiler defaults to including all files in the containing directory and subdirectories except those specified by 'exclude'. Requires TypeScript version 2.0 or later.
   */
  include?: string[];
  [k: string]: unknown;
}
export interface ReferencesDefinition {
  /**
   * Referenced projects. Requires TypeScript version 3.0 or later.
   */
  references?: {
    /**
     * Path to referenced tsconfig or to folder containing tsconfig.
     */
    path?: string;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
