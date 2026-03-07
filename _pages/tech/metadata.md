---
title: /tech/metadata
description: DC Engine metadata
keywords: dc engine, metadata
layout: page
permalink: /tech/metadata/
---

<!--
<h1 hidden>DC Engine metadata</h1>
-->

{% include back.html %}

## > metadata

{% assign metadata = site.data.release.json.classification.metadata | sort: "name" %}

total: [**{{ metadata.size }}** items]

<!--
<div class="toc-container">
{% for item in metadata %}
  # <a href="#{{ item.name | slugify }}">{{ item.name }}</a><br>
{% endfor %}
</div>
-->

{% assign total_size = metadata.size %}
{% assign half_size = total_size | divided_by: 2.0 | ceil %}

<div class="toc-container">
<table>
  <tr>
    <td style="vertical-align: top; border: none;">
      {% for item in metadata limit: half_size %}
        # <a href="#{{ item.name | slugify }}">{{ item.name }}</a><br>
      {% endfor %}
    </td>
    <td style="vertical-align: top; border: none;">
      {% for item in metadata offset: half_size %}
        # <a href="#{{ item.name | slugify }}">{{ item.name }}</a><br>
      {% endfor %}
    </td>
  </tr>
</table>
</div>

<hr>

{% for item in metadata %}
<h3 id="{{ item.name | slugify }}"># {{ item.name }}</h3>
{{ item.description }}
<hr>

{% endfor %}