---
title: /tech/changelog
layout: page
permalink: /tech/changelog/
---

{% include back.html %}

## > changelog

{% comment %} 
  1. Get the years folder object. 
  Jekyll should see it as site.data.release.txt.changelog
{% endcomment %}
{% assign changelog_data = site.data.release.txt.changelog %}

{% for year_item in changelog_data %}
  {% assign year_name = year_item[0] %}
  {% assign year_files = year_item[1] %}

### # {{ year_name }}

  {% for file_item in year_files %}
    {% comment %} 
      file_item[0] is the filename (e.g., v1.13.10)
      file_item[1] is the actual text content of the file
    {% endcomment %}
    {% assign full_text = file_item[1] %}
    
    {% comment %} Basic parsing of the first line {% endcomment %}
    {% assign lines = full_text | newline_to_br | split: '<br />' %}
    {% assign header = lines | first | strip %}
    {% assign body = full_text | remove_first: header | strip %}

<details markdown="1">
<summary style="display: flex; justify-content: space-between; cursor: pointer;">
  <span>{{ header | split: ' [' | first }}</span>
  <span style="color: #888;">[{{ header | split: ' [' | last }}</span>
</summary>

{{ body }}

</details>
  {% endfor %}
{% endfor %}
