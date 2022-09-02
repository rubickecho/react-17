/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

// Keep in sync with https://github.com/facebook/flow/blob/master/lib/react.js
export type StatelessFunctionalComponent<
  P,
> = React$StatelessFunctionalComponent<P>;
export type ComponentType<-P> = React$ComponentType<P>;
export type AbstractComponent<
  -Config,
  +Instance = mixed,
> = React$AbstractComponent<Config, Instance>;
export type ElementType = React$ElementType;
export type Element<+C> = React$Element<C>;
export type Key = React$Key;
export type Ref<C> = React$Ref<C>;
export type Node = React$Node;
export type Context<T> = React$Context<T>;
export type Portal = React$Portal;
export type ElementProps<C> = React$ElementProps<C>;
export type ElementConfig<C> = React$ElementConfig<C>;
export type ElementRef<C> = React$ElementRef<C>;
export type Config<Props, DefaultProps> = React$Config<Props, DefaultProps>;
export type ChildrenArray<+T> = $ReadOnlyArray<ChildrenArray<T>> | T;
export type Interaction = {
  name: string,
  timestamp: number,
  ...
};

// Export all exports so that they're available in tests.
// We can't use export * from in Flow for some reason.
export {
  Children, // 用于处理 this.props.children 不透明数据结构的方法，为每个 child 执行一个函数
  createRef, // 创建一个能够通过 ref 属性附加到 React 元素的 ref
  Component, // 定义组件
  PureComponent, // 定义组件，和 Component 的区别在于 Component 并没有实现 shouldComponentUpdate()，PureComponent 中可以浅层对比 prop 和 state 的方式实现了该函数
  createContext, // 创建组件上下文
  forwardRef, // 创建一个 React 组件，这个组件能够将其接受的 ref 属性转发到其组件树下的另一个组件中
  lazy, // 定义一个动态加载的组件，有助于减小 bundle 的体积
  memo, // 为高阶组件，如果组件在相同的 props 的情况下渲染相同的结果，可以将其包装在 React.mono 中调用，通过记忆组件渲染结果的方式来提高组件的性能
  useCallback, // useCallback(fn, deps) 等同于 useMemo(() => fn, deps)
  useContext, // 组件上下文
  useEffect, // 使用 useEffect 完成副作用操作，赋值 useEffect 的函数会在组件渲染到屏幕之后执行
  useImperativeHandle, // 使用 ref 时自定义暴露给父组件的实例值
  useDebugValue, // 用于在 React 开发者工具中显示自定义 hook 的标签
  useLayoutEffect, // 与 useEffect 类似，会在所有 DOM 变更之后同步调用
  useMemo, // 把"创建"函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖改变时才重新计算 memoized 值，有助于优化每次渲染时都进行的高开销计算
  useReducer, // useState 的替代方案 (state, action) => newState
  useRef, // 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数 initialValue
  useState, // 返回一个 state， 以及更新 state 的函数
  useMutableSource,
  useMutableSource as unstable_useMutableSource,
  createMutableSource,
  createMutableSource as unstable_createMutableSource,
  Fragment, // 不额外创建 DOM 元素，让 render 返回多个元素，等同于 <></>
  Profiler,
  unstable_DebugTracingMode,
  StrictMode,
  Suspense, // 指定加载器，以防其组件树中某些子组件尚未具备渲染条件
  createElement, // 创建 React 元素
  cloneElement, // 克隆 React 元素
  isValidElement, // 验证是否为 React 元素 true OR false
  version,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  createFactory, // 创建 React 元素， 已废弃，建议使用 JSX OR createElement
  useTransition, // 返回一个状态值表示过渡任务的等待状态，以及一个启动该过渡任务的函数
  useTransition as unstable_useTransition,
  startTransition,
  startTransition as unstable_startTransition,
  useDeferredValue, // 接受一个值，并返回该值的新副本，该副本将推迟到更紧急地更新之后?
  useDeferredValue as unstable_useDeferredValue,
  SuspenseList,
  SuspenseList as unstable_SuspenseList,
  block,
  block as unstable_block,
  unstable_LegacyHidden,
  unstable_createFundamental,
  unstable_Scope,
  unstable_useOpaqueIdentifier,
} from './src/React';
