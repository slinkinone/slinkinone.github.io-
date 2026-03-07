---
title: /tech/changelog
layout: page
permalink: /tech/changelog/
---

{% include back.html %}

## > changelog

{% assign grouped_logs = site.changelog | sort: "path" | reverse | group_by_exp: "item", "item.path | split: '/' | slice: -2, 1" %}

{% for group in grouped_logs %}
  {% assign year = group.name %}
  
### # {{ year }}

  <div class="changelog-year-section">
  {% for log in group.items %}
    <details style="margin-bottom: 12px; cursor: pointer;">
      <summary style="font-family: monospace;">
        <b>{{ log.basename }}</b>
      </summary>
      <div style="margin-top: 10px; padding: 15px; background: #111; border: 1px dashed #444; font-family: monospace; white-space: pre-wrap; color: #0f0;">
{{ log.content | strip }}
      </div>
    </details>
  {% endfor %}
  </div>

  {% unless forloop.last %}<hr style="border-top: 1px double #333;">{% endunless %}
{% endfor %}