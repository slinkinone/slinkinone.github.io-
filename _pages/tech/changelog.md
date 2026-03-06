---
title: /tech/changelog
layout: page
permalink: /tech/changelog/
---

{% include back.html %}

## > changelog

{% comment %} 
  Iterate through years in _data/release/txt/changelog/
  year_entry[0] is the year (e.g., "2025")
  year_entry[1] is the object containing all files in that year folder
{% endcomment %}
{% for year_entry in site.data.release.txt.changelog %}
  {% assign year_name = year_entry[0] %}
  {% assign releases_object = year_entry[1] %}

### # {{ year_name }}

  {% comment %} 
    Now iterate through files in the year folder
    release_entry[0] is the filename (e.g., "v1.13.0")
    release_entry[1] is the actual text content
  {% endcomment %}
  {% for release_entry in releases_object %}
    {% assign full_content = release_entry[1] %}
    
    {% comment %} Parse first line for the header {% endcomment %}
    {% assign lines = full_content | newline_to_br | split: '<br />' %}
    {% assign header = lines | first | strip %}
    
    {% comment %} Everything else is the body {% endcomment %}
    {% assign body = full_content | remove_first: header | strip %}

<details markdown="1">
<summary style="display: flex; justify-content: space-between; cursor: pointer;">
  <span>{{ header | split: ' [' | first }}</span>
  <span style="color: #888;">[{{ header | split: ' [' | last }}</span>
</summary>

{{ body }}

</details>
  {% endfor %}
{% endfor %}
