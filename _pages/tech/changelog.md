---
title: /tech/changelog
layout: page
permalink: /tech/changelog/
---

{% include back.html %}

## > changelog

{% assign logs = site.static_files | where_exp: "item", "item.path contains '/tech/logs/'" | sort: "path" | reverse %}
{% assign current_year = "" %}

{% for log in logs %}
  {% assign year = log.path | split: "/" | slice: -2, 1 %}

  {% if year != current_year %}
    <br>
    ### # {{ year }}
    {% assign current_year = year %}
  {% endif %}

  <details style="margin-bottom: 10px; cursor: pointer;">
    <summary style="font-family: monospace;"><b>{{ log.basename }}</b></summary>
    <pre style="margin-top: 10px; padding: 10px; background: #111; border: 1px solid #333; color: #0f0; white-space: pre-wrap;">
      {%- capture path -%}logs/{{ year }}/{{ log.name }}{%- endcapture -%}
      {%- include_relative {{ path }} -%}
    </pre>
  </details>
{% endfor %}
