---
title: /tech/info/categories
layout: page
permalink: /tech/info/categories/
---

<!--
<h1 hidden>DC Engine tag categories</h1>
-->

{% include back.html %}

## > categories

{% assign categories = site.data.release.json.classification.categories | sort: "name" %}

{% assign total_size = categories.size %}
{% assign half_size = total_size | divided_by: 2.0 | ceil %}

<div class="toc-container">
<table>
  <tr>
    <td style="vertical-align: top; border: none;">
      {% for item in categories limit: half_size %}
        # <a href="#{{ item.name | slugify }}">{{ item.name }}</a><br>
      {% endfor %}
    </td>
    <td style="vertical-align: top; border: none;">
      {% for item in categories offset: half_size %}
        # <a href="#{{ item.name | slugify }}">{{ item.name }}</a><br>
      {% endfor %}
    </td>
  </tr>
</table>
</div>

<hr>

{% for item in categories %}
<h3 id="{{ item.name | slugify }}"># {{ item.name }}</h3>
{{ item.description }}
<hr>

{% endfor %}