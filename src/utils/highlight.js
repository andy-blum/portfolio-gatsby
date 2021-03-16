import hljs from "highlight.js"
import 'highlight.js/styles/vs2015.css'

const highlightCode = () => {
  const codes = document.querySelectorAll("pre > code");
  for (let key in codes) {
    if (typeof codes[key] === "object") {
      hljs.highlightBlock(codes[key])
    }
  }
}

const exports = { highlightCode }

export default exports
