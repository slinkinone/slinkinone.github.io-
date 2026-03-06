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
  Iterate through years. 
  site.data.release.txt.changelog is an object.
  Sorting it returns an array of [key, value] pairs.
{% endcomment %}
{% assign sorted_years = site.data.release.txt.changelog | sort | reverse %}

{% for year_entry in sorted_years %}
  {% assign year_name = year_entry[0] %}
  {% comment %} 
    year_entry[1] is an object containing files.
    Sort files by filename (key) in descending order.
  {% endcomment %}
  {% assign sorted_releases = year_entry[1] | sort | reverse %}

### # {{ year_name }}

  {% for release_entry in sorted_releases %}
    {% comment %} 
      release_entry[0] is the filename (e.g., v1.13.0)
      release_entry[1] is the actual text content of the file
    {% endcomment %}
    {% assign full_content = release_entry[1] %}
    {% assign lines = full_content | newline_to_br | split: '<br />' %}
    {% assign header = lines | first | strip %}
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
