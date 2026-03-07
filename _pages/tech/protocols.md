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

{% comment %} 1. Prepare and Merge names for TOC {% endcomment %}
{% assign engine_protos = site.data.release.json.protocols.protocols.protocols %}
{% assign config_tags = "" | split: "" %}

{% for item in site.data.release.json.tag_info %}
  {% assign categories_string = item.categories | join: ',' | downcase %}
  {% if categories_string contains 'protocol' %}
    {% assign config_tags = config_tags | push: item %}
  {% endif %}
{% endfor %}

{% assign unified_toc = "" | split: "" %}
{% for p in engine_protos %}{% assign unified_toc = unified_toc | push: p.name %}{% endfor %}
{% for t in config_tags %}{% assign unified_toc = unified_toc | push: t.short_name %}{% endfor %}

{% assign sorted_toc = unified_toc | sort | uniq %}
{% assign total_size = sorted_toc.size %}

{% comment %} 2. Calculate size for 3 columns {% endcomment %}
{% assign col_size = total_size | divided_by: 3.0 | ceil %}
{% assign second_col_offset = col_size %}
{% assign third_col_offset = col_size | times: 2 %}

## > protocols

total: [{{ total_size }} items]

<div class="toc-container">
<table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
  <tr>
    <td style="vertical-align: top; width: 33%; border: none; padding-right: 10px;">
      {% for name in sorted_toc limit: col_size %}
        # <a href="#{{ name | slugify }}">{{ name | downcase }}</a><br>
      {% endfor %}
    </td>
    <td style="vertical-align: top; width: 33%; border: none; padding-right: 10px; padding-left: 10px;">
      {% for name in sorted_toc offset: second_col_offset limit: col_size %}
        # <a href="#{{ name | slugify }}">{{ name | downcase }}</a><br>
      {% endfor %}
    </td>
    <td style="vertical-align: top; width: 33%; border: none; padding-left: 10px;">
      {% for name in sorted_toc offset: third_col_offset %}
        # <a href="#{{ name | slugify }}">{{ name | downcase }}</a><br>
      {% endfor %}
    </td>
  </tr>
</table>
</div>

<hr>


## > engine

{% for proto in all_protocols %}
<h3 id="{{ proto.name | slugify }}"># {{ proto.name }}</h3>

* **osi layer**: `{{ proto.osi }}`
{% if proto.ports != "" %}* **ports**: `{{ proto.ports }}`{% endif %}
{% if proto.patterns != "" %}* **patterns**: `{{ proto.patterns }}`{% endif %}

&nbsp;

{% unless forloop.last %}
<!--<hr style="border-top: 1px dashed #333;">-->
{% endunless %}
{% endfor %}

<hr>

## > configuration

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