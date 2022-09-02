/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

// Export all exports so that they're available in tests.
// We can't use export * from in Flow for some reason.
export {
  createPortal, // 提供将子节点渲染到已 DOM 节点中的方式，该节点存在 DOM 层次之外
  unstable_batchedUpdates,
  flushSync, // 强制 React 同步刷新提供的回调函数中的任何更新，确保 DOM 会被立即更新
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  version,
  findDOMNode, // 【18 deprecated】访问底层 DOM 节点的应急方案，大多数情况不推荐使用
  hydrate, // 【18 deprecated】18中用 hydrateRoot 代替，与 render 相同，但它用于在 ReactDOMServer 渲染的容器中对 HTML 的内容进行 hydrate 操作
  render, // 【18 deprecated】在提供的 Container 里渲染一个 React 元素，并返回对该组件的引用，在 React 18 中，已经被 creatRoot 函数代替
  unmountComponentAtNode, // 【18 deprecated】被 18 root.unmount 取代，从 DOM 中卸载组件，会将其事件处理器和 state 一并清除
  createRoot,
  createRoot as unstable_createRoot,
  createBlockingRoot,
  createBlockingRoot as unstable_createBlockingRoot,
  unstable_flushControlled,
  unstable_scheduleHydration,
  unstable_runWithPriority,
  unstable_renderSubtreeIntoContainer,
  unstable_createPortal,
  unstable_createEventHandle,
  unstable_isNewReconciler,
} from './src/client/ReactDOM';
