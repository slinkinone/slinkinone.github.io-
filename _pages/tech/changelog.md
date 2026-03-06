---
title: /tech/changelog
layout: page
permalink: /tech/changelog/
---


<!--
<h1 hidden>DC Engine changelog</h1>
-->


{% include back.html %}

## > changelog

{% comment %} 
  Get years from the directory structure and sort them descending (e.g., 2026, 2025)
{% endcomment %}
{% assign years = site.data.release.txt.changelog | sort | reverse %}

{% for year_item in years %}
  {% assign year = year_item[0] %}
  {% comment %} Sort release files within the year folder descending {% endcomment %}
  {% assign releases = year_item[1] | sort | reverse %}

### # {{ year }}

  {% for release_item in releases %}
    {% comment %} 
      release_item[0] is the filename (e.g., v1.13.0)
      release_item[1] is the file content (text)
    {% endcomment %}
    {% assign full_content = release_item[1] %}
    
    {% comment %} Split by newline to extract the first line as header {% endcomment %}
    {% assign lines = full_content | newline_to_br | split: '<br />' %}
    {% assign header = lines | first | strip %}
    
    {% comment %} Remove the header line to get the list/description {% endcomment %}
    {% assign body = full_content | remove_first: header | strip %}

<details markdown="1">
<summary style="display: flex; justify-content: space-between; cursor: pointer;">
  {% comment %} Extract version and date from "v1.0.0" {% endcomment %}
  <span>{{ header | split: ' [' | first }}</span>
  <span style="color: #888;">[{{ header | split: ' [' | last }}</span>
</summary>

{{ body }}

</details>
  {% endfor %}
{% endfor %}
