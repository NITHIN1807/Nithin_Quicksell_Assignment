"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minVersions = exports.default = void 0;
var _pluginSyntaxImportAssertions = require("@babel/plugin-syntax-import-assertions");
var _pluginSyntaxImportAttributes = require("@babel/plugin-syntax-import-attributes");
var _pluginTransformAsyncGeneratorFunctions = require("@babel/plugin-transform-async-generator-functions");
var _pluginTransformClassProperties = require("@babel/plugin-transform-class-properties");
var _pluginTransformClassStaticBlock = require("@babel/plugin-transform-class-static-block");
var _pluginTransformDynamicImport = require("@babel/plugin-transform-dynamic-import");
var _pluginTransformExportNamespaceFrom = require("@babel/plugin-transform-export-namespace-from");
var _pluginTransformJsonStrings = require("@babel/plugin-transform-json-strings");
var _pluginTransformLogicalAssignmentOperators = require("@babel/plugin-transform-logical-assignment-operators");
var _pluginTransformNullishCoalescingOperator = require("@babel/plugin-transform-nullish-coalescing-operator");
var _pluginTransformNumericSeparator = require("@babel/plugin-transform-numeric-separator");
var _pluginTransformObjectRestSpread = require("@babel/plugin-transform-object-rest-spread");
var _pluginTransformOptionalCatchBinding = require("@babel/plugin-transform-optional-catch-binding");
var _pluginTransformOptionalChaining = require("@babel/plugin-transform-optional-chaining");
var _pluginTransformPrivateMethods = require("@babel/plugin-transform-private-methods");
var _pluginTransformPrivatePropertyInObject = require("@babel/plugin-transform-private-property-in-object");
var _pluginTransformUnicodePropertyRegex = require("@babel/plugin-transform-unicode-property-regex");
var _pluginTransformAsyncToGenerator = require("@babel/plugin-transform-async-to-generator");
var _pluginTransformArrowFunctions = require("@babel/plugin-transform-arrow-functions");
var _pluginTransformBlockScopedFunctions = require("@babel/plugin-transform-block-scoped-functions");
var _pluginTransformBlockScoping = require("@babel/plugin-transform-block-scoping");
var _pluginTransformClasses = require("@babel/plugin-transform-classes");
var _pluginTransformComputedProperties = require("@babel/plugin-transform-computed-properties");
var _pluginTransformDestructuring = require("@babel/plugin-transform-destructuring");
var _pluginTransformDotallRegex = require("@babel/plugin-transform-dotall-regex");
var _pluginTransformDuplicateKeys = require("@babel/plugin-transform-duplicate-keys");
var _pluginTransformExponentiationOperator = require("@babel/plugin-transform-exponentiation-operator");
var _pluginTransformForOf = require("@babel/plugin-transform-for-of");
var _pluginTransformFunctionName = require("@babel/plugin-transform-function-name");
var _pluginTransformLiterals = require("@babel/plugin-transform-literals");
var _pluginTransformMemberExpressionLiterals = require("@babel/plugin-transform-member-expression-literals");
var _pluginTransformModulesAmd = require("@babel/plugin-transform-modules-amd");
var _pluginTransformModulesCommonjs = require("@babel/plugin-transform-modules-commonjs");
var _pluginTransformModulesSystemjs = require("@babel/plugin-transform-modules-systemjs");
var _pluginTransformModulesUmd = require("@babel/plugin-transform-modules-umd");
var _pluginTransformNamedCapturingGroupsRegex = require("@babel/plugin-transform-named-capturing-groups-regex");
var _pluginTransformNewTarget = require("@babel/plugin-transform-new-target");
var _pluginTransformObjectSuper = require("@babel/plugin-transform-object-super");
var _pluginTransformParameters = require("@babel/plugin-transform-parameters");
var _pluginTransformPropertyLiterals = require("@babel/plugin-transform-property-literals");
var _pluginTransformRegenerator = require("@babel/plugin-transform-regenerator");
var _pluginTransformReservedWords = require("@babel/plugin-transform-reserved-words");
var _pluginTransformShorthandProperties = require("@babel/plugin-transform-shorthand-properties");
var _pluginTransformSpread = require("@babel/plugin-transform-spread");
var _pluginTransformStickyRegex = require("@babel/plugin-transform-sticky-regex");
var _pluginTransformTemplateLiterals = require("@babel/plugin-transform-template-literals");
var _pluginTransformTypeofSymbol = require("@babel/plugin-transform-typeof-symbol");
var _pluginTransformUnicodeEscapes = require("@babel/plugin-transform-unicode-escapes");
var _pluginTransformUnicodeRegex = require("@babel/plugin-transform-unicode-regex");
var _pluginTransformUnicodeSetsRegex = require("@babel/plugin-transform-unicode-sets-regex");
var _transformAsyncArrowsInClass = require("@babel/preset-modules/lib/plugins/transform-async-arrows-in-class");
var _transformEdgeDefaultParameters = require("@babel/preset-modules/lib/plugins/transform-edge-default-parameters");
var _transformEdgeFunctionName = require("@babel/preset-modules/lib/plugins/transform-edge-function-name");
var _transformTaggedTemplateCaching = require("@babel/preset-modules/lib/plugins/transform-tagged-template-caching");
var _transformSafariBlockShadowing = require("@babel/preset-modules/lib/plugins/transform-safari-block-shadowing");
var _transformSafariForShadowing = require("@babel/preset-modules/lib/plugins/transform-safari-for-shadowing");
var _pluginBugfixSafariIdDestructuringCollisionInFunctionExpression = require("@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression");
var _pluginBugfixV8SpreadParametersInOptionalChaining = require("@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining");
const availablePlugins = {
  "bugfix/transform-async-arrows-in-class": () => _transformAsyncArrowsInClass,
  "bugfix/transform-edge-default-parameters": () => _transformEdgeDefaultParameters,
  "bugfix/transform-edge-function-name": () => _transformEdgeFunctionName,
  "bugfix/transform-safari-block-shadowing": () => _transformSafariBlockShadowing,
  "bugfix/transform-safari-for-shadowing": () => _transformSafariForShadowing,
  "bugfix/transform-safari-id-destructuring-collision-in-function-expression": () => _pluginBugfixSafariIdDestructuringCollisionInFunctionExpression.default,
  "bugfix/transform-tagged-template-caching": () => _transformTaggedTemplateCaching,
  "bugfix/transform-v8-spread-parameters-in-optional-chaining": () => _pluginBugfixV8SpreadParametersInOptionalChaining.default,
  "syntax-import-assertions": () => _pluginSyntaxImportAssertions.default,
  "syntax-import-attributes": () => _pluginSyntaxImportAttributes.default,
  "transform-arrow-functions": () => _pluginTransformArrowFunctions.default,
  "transform-async-generator-functions": () => _pluginTransformAsyncGeneratorFunctions.default,
  "transform-async-to-generator": () => _pluginTransformAsyncToGenerator.default,
  "transform-block-scoped-functions": () => _pluginTransformBlockScopedFunctions.default,
  "transform-block-scoping": () => _pluginTransformBlockScoping.default,
  "transform-class-properties": () => _pluginTransformClassProperties.default,
  "transform-class-static-block": () => _pluginTransformClassStaticBlock.default,
  "transform-classes": () => _pluginTransformClasses.default,
  "transform-computed-properties": () => _pluginTransformComputedProperties.default,
  "transform-destructuring": () => _pluginTransformDestructuring.default,
  "transform-dotall-regex": () => _pluginTransformDotallRegex.default,
  "transform-duplicate-keys": () => _pluginTransformDuplicateKeys.default,
  "transform-dynamic-import": () => _pluginTransformDynamicImport.default,
  "transform-exponentiation-operator": () => _pluginTransformExponentiationOperator.default,
  "transform-export-namespace-from": () => _pluginTransformExportNamespaceFrom.default,
  "transform-for-of": () => _pluginTransformForOf.default,
  "transform-function-name": () => _pluginTransformFunctionName.default,
  "transform-json-strings": () => _pluginTransformJsonStrings.default,
  "transform-literals": () => _pluginTransformLiterals.default,
  "transform-logical-assignment-operators": () => _pluginTransformLogicalAssignmentOperators.default,
  "transform-member-expression-literals": () => _pluginTransformMemberExpressionLiterals.default,
  "transform-modules-amd": () => _pluginTransformModulesAmd.default,
  "transform-modules-commonjs": () => _pluginTransformModulesCommonjs.default,
  "transform-modules-systemjs": () => _pluginTransformModulesSystemjs.default,
  "transform-modules-umd": () => _pluginTransformModulesUmd.default,
  "transform-named-capturing-groups-regex": () => _pluginTransformNamedCapturingGroupsRegex.default,
  "transform-new-target": () => _pluginTransformNewTarget.default,
  "transform-nullish-coalescing-operator": () => _pluginTransformNullishCoalescingOperator.default,
  "transform-numeric-separator": () => _pluginTransformNumericSeparator.default,
  "transform-object-rest-spread": () => _pluginTransformObjectRestSpread.default,
  "transform-object-super": () => _pluginTransformObjectSuper.default,
  "transform-optional-catch-binding": () => _pluginTransformOptionalCatchBinding.default,
  "transform-optional-chaining": () => _pluginTransformOptionalChaining.default,
  "transform-parameters": () => _pluginTransformParameters.default,
  "transform-private-methods": () => _pluginTransformPrivateMethods.default,
  "transform-private-property-in-object": () => _pluginTransformPrivatePropertyInObject.default,
  "transform-property-literals": () => _pluginTransformPropertyLiterals.default,
  "transform-regenerator": () => _pluginTransformRegenerator.default,
  "transform-reserved-words": () => _pluginTransformReservedWords.default,
  "transform-shorthand-properties": () => _pluginTransformShorthandProperties.default,
  "transform-spread": () => _pluginTransformSpread.default,
  "transform-sticky-regex": () => _pluginTransformStickyRegex.default,
  "transform-template-literals": () => _pluginTransformTemplateLiterals.default,
  "transform-typeof-symbol": () => _pluginTransformTypeofSymbol.default,
  "transform-unicode-escapes": () => _pluginTransformUnicodeEscapes.default,
  "transform-unicode-property-regex": () => _pluginTransformUnicodePropertyRegex.default,
  "transform-unicode-regex": () => _pluginTransformUnicodeRegex.default,
  "transform-unicode-sets-regex": () => _pluginTransformUnicodeSetsRegex.default
};
exports.default = availablePlugins;
const minVersions = {};
exports.minVersions = minVersions;
{
  Object.assign(minVersions, {
    "bugfix/transform-safari-id-destructuring-collision-in-function-expression": "7.16.0",
    "syntax-import-attributes": "7.22.0",
    "transform-class-static-block": "7.12.0",
    "transform-private-property-in-object": "7.10.0"
  });
  const emptyPlugin = () => ({});
  const babel7SyntaxPlugin = name => {
    availablePlugins[`syntax-${name}`] = () => require(`@babel/plugin-syntax-${name}`);
  };
  babel7SyntaxPlugin("async-generators");
  babel7SyntaxPlugin("class-properties");
  babel7SyntaxPlugin("class-static-block");
  babel7SyntaxPlugin("dynamic-import");
  babel7SyntaxPlugin("export-namespace-from");
  babel7SyntaxPlugin("import-meta");
  babel7SyntaxPlugin("json-strings");
  babel7SyntaxPlugin("logical-assignment-operators");
  babel7SyntaxPlugin("nullish-coalescing-operator");
  babel7SyntaxPlugin("numeric-separator");
  babel7SyntaxPlugin("object-rest-spread");
  babel7SyntaxPlugin("optional-catch-binding");
  babel7SyntaxPlugin("optional-chaining");
  babel7SyntaxPlugin("private-property-in-object");
  babel7SyntaxPlugin("top-level-await");
  babel7SyntaxPlugin("unicode-sets-regex");
}

//# sourceMappingURL=available-plugins.js.map
