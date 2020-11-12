module.exports = {
  extends: 'stylelint-config-standard',
  plugin: ['stylelint-scss'],
  rules: {
    'block-no-empty': null,
    'declaration-colon-newline-after': null,
    'selector-pseudo-class-no-unknown': null,
    'number-leading-zero': null,
    'value-list-comma-newline-after': null,
    'function-whitespace-after': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extend',
          'at-root',
          'debug',
          'warn',
          'error',
          'if',
          'else',
          'for',
          'each',
          'while',
          'mixin',
          'include',
          'content',
          'return',
          'function'
        ]
      }
    ],
    'no-empty-source': null
  }
}
