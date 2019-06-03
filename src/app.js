import { h, app } from 'hyperapp'
import marked from 'marked'
import './style.sass'

import highlight from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

const state = {
  'output': 'hello, Hyperapp'
}

const actions = {
    setOutput: (input) => state => ({ output: marked(input) })
  }

  const view = (state, actions) => (
    <main id='app'>
      <textarea id='editor' spellcheck="false" oninput={e => actions.setOutput(document.getElementById('editor').value)}　/>
      <div id='preview' innerHTML={state.output}></div>
    </main>
  )

  marked.setOptions({
    highlight: function (code, lang) {
      return highlight.highlightAuto(code, [lang]).value
    }
  })

  
  
app(state, actions, view, document.body)