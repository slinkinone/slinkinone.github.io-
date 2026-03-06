---
title: /tech/changelog
layout: page
permalink: /tech/changelog/
---

{% include back.html %}

## > changelog

{% comment %} 
  Iterate directly through the years object. 
  Jekyll naturally returns them as [key, value] pairs.
{% endcomment %}
{% for year_entry in site.data.release.txt.changelog %}
  {% assign year_name = year_entry[0] %}
  {% assign releases_in_year = year_entry[1] %}

### # {{ year_name }}

  {% comment %} 
    Iterate through the files in the year folder.
    release_entry[0] is the filename, release_entry[1] is the text content.
  {% endcomment %}
  {% for release_entry in releases_in_year %}
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
