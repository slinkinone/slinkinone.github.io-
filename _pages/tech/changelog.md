---
title: /tech/changelog
layout: page
permalink: /tech/changelog/
---

{% include back.html %}

## > changelog

{% comment %} 
  Iterate through the changelog directory object.
  year_entry[0] is the year folder name (e.g., "2025").
  year_entry[1] is the object containing files inside that folder.
{% endcomment %}
{% for year_entry in site.data.release.txt.changelog %}
  {% assign year_name = year_entry[0] %}
  {% assign files_object = year_entry[1] %}

### # {{ year_name }}

  {% comment %} 
    Now iterate through the files object.
    file_entry[0] is the filename (e.g., "v1.13.0").
  {% endcomment %}
  <div class="toc-container">
  {% for file_entry in files_object %}
    # {{ file_entry[0] }}<br>
  {% endfor %}
  </div>

{% endfor %}
