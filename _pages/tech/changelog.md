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
  1. Get years as an array of [year_name, year_content] 
{% endcomment %}
{% assign sorted_years = site.data.release.txt.changelog | sort | reverse %}

{% for year_entry in sorted_years %}
  {% assign year_name = year_entry[0] %}
  {% comment %} 
    2. Get releases as an array of [file_name, file_content]
  {% endcomment %}
  {% assign sorted_releases = year_entry[1] | sort | reverse %}

### # {{ year_name }}

  {% for release_entry in sorted_releases %}
    {% assign full_content = release_entry[1] %}
    {% comment %} 
      Jekyll reads .txt files as strings. 
      We split by newline to get the header.
    {% endcomment %}
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
