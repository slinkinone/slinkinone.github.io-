---
title: /tech/changelog
layout: page
permalink: /tech/changelog/
---

{% include back.html %}

## > changelog

{% assign all_logs = site.static_files | where_exp: "item", "item.path contains '/data/changelog/'" | sort: "path" | reverse %}
{% assign current_year = "" %}

{% for log in all_logs %}
  {% assign parts = log.path | split: "/" %}
  {% comment %} Path: /data/changelog/2026/v1.13.9.txt -> index 3 is year {% endcomment %}
  {% assign log_year = parts[3] %}

  {% if log_year != current_year %}
    {% if current_year != "" %}</div>{% endif %}
    {% assign current_year = log_year %}
    <br>
    ### # {{ current_year }}
    <div class="changelog-year-section">
  {% endif %}

  <details style="margin-bottom: 12px; cursor: pointer;">
    <summary style="font-family: monospace;">
      <b>{{ log.basename }}</b>
    </summary>
    <div style="margin-top: 10px; padding: 15px; background: #111; border: 1px dashed #444; font-family: monospace; white-space: pre-wrap; color: #0f0;">
      {% capture log_path %}../data/changelog/{{ log_year }}/{{ log.name }}{% endcapture %}
      {% include {{ log_path }} %}
    </div>
  </details>

  {% if forloop.last %}</div>{% endif %}
{% endfor %}
