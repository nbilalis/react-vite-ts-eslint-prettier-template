---
to: src/components/<%= name %>.tsx
unless_exists: true
---

import './<%= name %>.scoped.scss';

function <%= name %>() {
  return <>...</>;
}

export default <%= name %>;
