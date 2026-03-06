---
title: /tech/changelog
layout: page
permalink: /tech/changelog/
---

{% include back.html %}

## > changelog

{% comment %} 
  Iterate through the changelog directory object.
  We use 'sort' to ensure years are in order (e.g. 2026, 2025).
{% endcomment %}
{% assign sorted_years = site.data.release.txt.changelog | sort | reverse %}

{% for year_entry in sorted_years %}
  {% assign year_name = year_entry[0] %}
  {% assign files_object = year_entry[1] %}

### # {{ year_name }}

  <div class="toc-container">
  {% comment %} 
    Now iterate through .yml files within the year folder.
    file_entry[0] is the version (filename), 
    file_entry[1] is the actual text content.
  {% endcomment %}
  {% assign sorted_files = files_object | sort | reverse %}
  {% for file_entry in sorted_files %}
    {% assign version_name = file_entry[0] %}
    # <a href="#{{ version_name | slugify }}">{{ version_name }}</a><br>
  {% endfor %}
  </div>

  <hr>

  {% for file_entry in sorted_files %}
    {% assign version_name = file_entry[0] %}
    {% assign full_text = file_entry[1] %}
    
    {% comment %} Parsing the first line (header) and the rest (body) {% endcomment %}
    {% assign lines = full_text | newline_to_br | split: '<br />' %}
    {% assign header = lines | first | strip %}
    {% assign body = full_text | remove_first: header | strip %}

<details id="{{ version_name | slugify }}" markdown="1">
<summary style="display: flex; justify-content: space-between; cursor: pointer;">
  <span>{{ header | split: ' [' | first }}</span>
  <span style="color: #888;">[{{ header | split: ' [' | last }}</span>
</summary>

{{ body }}

</details>
<br>
  {% endfor %}
{% endfor %}
