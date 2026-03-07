---
title: /tech/changelog
layout: page
permalink: /tech/changelog/
---

{% include back.html %}

## > changelog

{% assign all_files = site.static_files | where_exp: "file", "file.path contains '/_data/release/txt/changelog/'" | sort: "path" | reverse %}
{% assign current_year = "" %}

{% for file in all_files %}
  {% assign path_parts = file.path | split: "/" %}
  {% assign log_year = path_parts[5] %}

  {% if log_year != current_year %}
    {% if current_year != "" %}</div>{% endif %}
    {% assign current_year = log_year %}
    <br>
    ### # {{ current_year }}
    <div class="changelog-year-section">
  {% endif %}

  <details style="margin-bottom: 12px; cursor: pointer;">
    <summary style="font-family: monospace;">
      <b>{{ file.basename }}</b>
    </summary>
    <div style="margin-top: 10px; padding: 15px; background: #111; border: 1px dashed #444; font-family: monospace; white-space: pre-wrap; color: #0f0;">
      {% capture log_content %}{% include ../_data/release/txt/changelog/{{ log_year }}/{{ file.name }} %}{% endcapture %}
      {{ log_content | strip }}
    </div>
  </details>

  {% if forloop.last %}</div>{% endif %}
{% endfor %}
