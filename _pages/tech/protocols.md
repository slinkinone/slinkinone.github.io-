---
title: /tech/protocols
description: DC Engine protocols
keywords: dc engine, protocols
layout: page
permalink: /tech/protocols/
---

<!--
<h1 hidden>DC Engine protocols</h1>
-->

{% include back.html %}

## > protocols

\# [decoders](/tech/info/decoders)
\# [tables](/tech/info/tables)

{% assign all_protocols = site.data.release.json.protocols.protocols.protocols | sort: "name" %}
{% assign total_size = all_protocols.size %}
{% assign half_size = total_size | divided_by: 2.0 | ceil %}

<!-- tag protocols -->

{% assign all_tags = site.data.release.json.tag_info | sort: "name" %}
{% assign filtered_protocols = "" | split: "" %}

{% for item in all_tags %}
  {% assign categories_string = item.categories | join: ',' | downcase %}
  {% if categories_string contains 'protocol' %}
    {% assign filtered_protocols = filtered_protocols | push: item %}
  {% endif %}
{% endfor %}

<!-- tag protocols -->

<!-- content table of engine protocols -->

total: [{{ all_protocols.size | plus: filtered_protocols.size }} items]

<div class="toc-container">
<table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
  <tr>
    <td style="vertical-align: top; width: 50%; border: none; padding-right: 20px;">
      {% for proto in all_protocols limit: half_size %}
        # <a href="#{{ proto.name | slugify }}">{{ proto.name }}</a><br>
      {% endfor %}
    </td>
    <td style="vertical-align: top; width: 50%; border: none; padding-left: 20px;">
      {% for proto in all_protocols offset: half_size %}
        # <a href="#{{ proto.name | slugify }}">{{ proto.name }}</a><br>
      {% endfor %}
    </td>
  </tr>
</table>
</div>

+++

<!-- content table of configuration protocols -->

<div style="margin-top: -4px;" class="toc-container">
<table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
  <tr>
    <td style="vertical-align: top; width: 50%; border: none; padding-right: 20px;">
      {% for proto in filtered_protocols limit: half_size %}
        # <a href="#{{ proto.short_name | slugify }}">{{ proto.short_name }}</a><br>
      {% endfor %}
    </td>
    <td style="vertical-align: top; width: 50%; border: none; padding-left: 20px;">
      {% for proto in filtered_protocols offset: half_size %}
        # <a href="#{{ proto.short_name | slugify }}">{{ proto.short_name }}</a><br>
      {% endfor %}
    </td>
  </tr>
</table>
</div>

<hr>

<!-- engine protocols -->

{% for proto in all_protocols %}
<h3 id="{{ proto.name | slugify }}"># {{ proto.name }}</h3>

* **type**: `engine`
* **fields**: `todo`
* **osi layer**: `{{ proto.osi }}`
* **ports**: `{{ proto.ports | default: "none" }}`
* **patterns**: `{{ proto.patterns | default: "none" }}`

<!--{{ proto.description }}-->
Description is absent.

{% unless forloop.last %}
<hr style="border-top: 1px dashed #333;">
{% endunless %}
{% endfor %}

<!-- configuration protocols -->

{% for tag in filtered_protocols %}
<h3 id="{{ tag.short_name }}">
  <a href="#{{ tag.short_name }}">{{ tag.short_name }}</a>
</h3>

<!--* **name**: {{ tag.name }}-->
<!--* **short_name**: {{ tag.short_name }}-->
* **type**: `configuration`
* **fields**: `absent`
* **osi layer**: `absent`
* **ports**: `{{ proto.ports | default: "none" }}`
* **patterns**: `{{ proto.patterns | default: "none" }}`

{{ tag.description }}

{% unless forloop.last %}
<hr style="border-top: 1px dashed #333;">
{% endunless %}
{% endfor %}
