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

dissection total: [{{ all_protocols.size }} items]

{% assign total_size = all_protocols.size %}
{% assign half_size = total_size | divided_by: 2.0 | ceil %}

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

<!-- tag protocols -->

{% assign all_tags = site.data.release.json.tag_info | sort: "name" %}
{% assign filtered_protocols = "" | split: "" %}

{% for item in all_tags %}
  {% assign categories_string = item.categories | join: ',' | downcase %}
  {% if categories_string contains 'protocol' %}
    {% assign filtered_protocols = filtered_protocols | push: item %}
  {% endif %}
{% endfor %}

detection total: [{{ filtered_protocols.size }} items]

<hr>

{% for proto in all_protocols %}
<h3 id="{{ proto.name | slugify }}"># {{ proto.name }}</h3>

* **osi layer**: `{{ proto.osi }}`
{% if proto.ports != "" %}* **ports**: `{{ proto.ports }}`{% endif %}
{% if proto.patterns != "" %}* **patterns**: `{{ proto.patterns }}`{% endif %}

&nbsp;

{% unless forloop.last %}
<hr style="border-top: 1px dashed #333;">
{% endunless %}
{% endfor %}


## > protocol-tags

{% for tag in filtered_protocols %}
<h3 id="{{ tag.short_name }}">
  <a href="#{{ tag.short_name }}">{{ tag.short_name }}</a>
</h3>

* **name**: {{ tag.name }}
* **short_name**: {{ tag.short_name }}

&nbsp;
{{ tag.description }}
{% endfor %}


## > protocol-fields

<!--todo-->
total: [**1157** items]

todo


## > protocol-decoders

todo


## > information-tables

todo