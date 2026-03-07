---
title: /tech/changelog
layout: page
permalink: /tech/changelog/
---

{% include back.html %}

## > changelog

{% comment %} 
  Ищем файлы напрямую в папке _data. 
  Jekyll Static Files содержат полный путь от корня проекта.
{% endcomment %}
{% assign all_files = site.static_files | where_exp: "file", "file.path contains '/_data/release/txt/changelog/'" | sort: "path" | reverse %}
{% assign current_year = "" %}
{% for file in all_files %}
  {% assign path_parts = file.path | split: "/" %}
  {% comment %} 
    Path structure: /_data/release/txt/changelog/2025/v1.12.0.txt
    Year index will be 5 
  {% endcomment %}
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
      {% comment %} 
        Используем стандартный {% include %}, указывая путь относительно папки _includes 
        или абсолютный путь от корня (зависит от настроек, но обычно работает так):
      {% endcomment %}
      {% capture log_content %}{% include ../_data/release/txt/changelog/{{ log_year }}/{{ file.name }} %}{% endcapture %}
      {{ log_content | strip }}
    </div>
  </details>

  {% if forloop.last %}</div>{% endif %}
{% endfor %}
