---
title: /tech/changelog
description: DC Engine changelog
keywords: dc engine, changelog
layout: page
permalink: /tech/changelog/
---

<!--
<h1 hidden>DC Engine changelog</h1>
-->

{% include back.html %}

## > changelog

{% comment %} 
  Year sort
{% endcomment %}
{% assign years = site.data.release.txt.changelog | sort | reverse %}

{% for year_data in years %}
  {% assign year = year_data[0] %}
  {% assign releases = year_data[1] | sort | reverse %}

### # {{ year }}

  {% for release_file in releases %}
    {% assign file_content = release_file[1] | newline_to_br | split: '<br />' %}
    {% comment %} Header: (vX.X.X [DATE]) {% endcomment %}
    {% assign header = file_content | first | strip %}
    
    {% comment %} Changelog body {% endcomment %}
    {% assign body = release_file[1] | remove_first: header | strip %}

<details markdown="1">
<summary style="display: flex; justify-content: space-between; cursor: pointer;">
  <span>{{ header | split: ' ' | first }}</span>
  <span style="color: #888;">{{ header | split: ' ' | last }}</span>
</summary>

{{ body }}

</details>
  {% endfor %}
{% endfor %}