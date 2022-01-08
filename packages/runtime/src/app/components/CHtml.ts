import { defineComponent } from 'vue'
import { renderHtml, tpl } from '../../utils'
import { useAppContext } from '../composables'

export default defineComponent({
  props: {
    html: { type: [String, Object] },
    contextData: { type: Object }
  },

  setup(props: any) {
    const context = useAppContext(props.contextData || {})

    return () => {
      if (!props.html) return ''
      const html = tpl.deepFilter(props.html, context)
      return renderHtml(html)
    }
  }
})