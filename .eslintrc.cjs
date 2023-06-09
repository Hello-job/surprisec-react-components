module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'react', 'react-hooks', '@typescript-eslint/eslint-plugin', 'prettier'],
  extends: [
    // 这里使用的是第三方包的一些默认规范
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    // 这个规则用于禁止使用 JSX 扩展语法中的属性扩展
    'react/jsx-props-no-spreading': 0,
    // 此规则用于限制回调函数的嵌套深度
    'max-nested-callbacks': [2, 10],
    // 此规则用于限制模块之间的依赖关系数量。
    'import/max-dependencies': 0,
    // 此规则用于检查导入模块时是否存在未解析的引用或无法解析的路径。
    'import/no-unresolved': [
      2,
      {
        ignore: ['.'],
      },
    ],
    // 这个规则用于检查 TypeScript 代码中的非空断言（!）的使用。
    '@typescript-eslint/no-non-null-assertion': 'warn',
    // 此规则用于规范 React 函数组件的定义方式。
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: ['function-expression', 'arrow-function'],
      },
    ],
    // 此规则用于限制文件中的最大行数。
    'max-lines': [
      'warn',
      {
        max: 500,
        skipComments: true, // 跳过注释
      },
    ],
    // 此规则用于检查是否为 React 组件的 props 属性指定了正确的类型检查。
    'react/prop-types': 0,
    // 条件匹配 全等 即使在while() 和 do...while()中  https://eslint.org/docs/latest/rules/no-cond-assign
    'no-cond-assign': ['error', 'always'],
    // 构造函数不允许返回
    'no-constructor-return': 'error',
    // debugger(禁止出现)
    'no-debugger': 'error',
    // alert(禁止出现)
    'no-alert': 'error',
    // console
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    // 强制使用useState结构名称如: [xxx, setXxx] = useState
    'react/hook-use-state': 2,
    // 依赖警告
    'react-hooks/exhaustive-deps': 'warn',
  },
};
