import { h, computed, defineComponent } from 'vue'

import { _ } from '../utils'
import { useCurrentAppInstance } from '../app'
import { isAppUseMethod, _useAppConfig } from '../app/config/use-config'
import { Cmpt } from './Cmpt'

import type { VNode } from 'vue'

export const Widget = defineComponent({
  name: 'Widget',

  props: {
    schema: { type: Object, default: () => ({}) },
    contextData: { type: Object, default: () => ({}) },
    error: { type: Object, default: () => ({}) }
  },

  setup(props: any) {
    const app = useCurrentAppInstance()

    const schema = computed(() => {
      let s = props.schema?.value || props.schema
      if (_.isFunction(s)) {
        const sContext = app.useContext(props.contextData)
        s = s(sContext)
      }
      return s
    })

    // 渲染多个widgets
    function renderWidgets(ss: any[]): VNode | VNode[] {
      if (Array.isArray(ss)) {
        const ws = ss.map(s => renderWidget(s))
        return ws
      }

      return renderWidget(ss)
    }

    // 渲染组件
    function renderCmpt(c: any) {
      let cfg = c

      if (c.ctype) {
        cfg = _.omit(c, ['ctype'])
        cfg.type = c.ctype
      } else if (c.cmpt) {
        cfg = c.cmpt
      }

      return h(Cmpt, { config: cfg })
    }

    // 渲染widget
    function renderWidget(s: any): VNode {
      if (isAppUseMethod(s)) {
        s = _useAppConfig(app, s)
      }

      if (s.ctype || s.cmpt) {
        return renderCmpt(s)
      }

      if (typeof s === 'string') {
        s = { type: 'html', html: s }
      }

      const w = app.resolveWidget(s.type)

      // 执行递归
      let bodyChild: any = null
      if (s.body) {
        bodyChild = renderWidgets(s.body)
      }

      const childKeys = Object.keys(s).filter(key => {
        return s[key] && s[key].type && typeof s[key].type === 'string'
      })

      const children = childKeys.reduce((target, key) => {
        target[key] = () => renderWidgets(s[key])
        return target
      }, {} as any)

      return h(
        w,
        { schema: s, contextData: props.contextData },
        {
          default: () => bodyChild,
          ...children
        }
      )
    }

    return () => renderWidgets(schema.value)
  }
})
