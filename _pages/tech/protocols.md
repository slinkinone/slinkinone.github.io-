---
title: /tech/protocols
description: DC Engine supported protocols
layout: page
permalink: /tech/protocols/
---

{% include back.html %}

## > protocols

{% comment %} 1. Load base protocols from protocols.json {% endcomment %}
{% assign base_protocols = site.data.release.json.protocols.protocols.protocols %}

{% comment %} 2. Filter tag_info to find items with 'protocol' category {% endcomment %}
{% assign service_protocols = "" | split: "" %}
{% for item in site.data.release.json.tag_info %}
  {% if item.categories contains 'protocol' %}
    {% assign service_protocols = service_protocols | push: item %}
  {% endif %}
{% endfor %}

{% comment %} 3. Merge both arrays and sort by name {% endcomment %}
{% assign all_protocols = base_protocols | concat: service_protocols | sort: "name" | uniq %}

{% comment %} 4. Table of Contents: Two-column layout logic {% endcomment %}
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

<hr>

{% comment %} 5. Main loop to display protocol details {% endcomment %}
{% for proto in all_protocols %}
<h3 id="{{ proto.name | slugify }}"># {{ proto.name }}</h3>

{% if proto.description %}
{{ proto.description }}
{% endif %}

* **osi layer**: `{{ proto.osi | default: "application" }}`
{% if proto.ports and proto.ports != "" %}* **default ports**: `{{ proto.ports }}`{% endif %}
{% if proto.patterns and proto.patterns != "" %}* **signature patterns**: `{{ proto.patterns }}`{% endif %}
{% if proto.short_name %}* **short_name**: `{{ proto.short_name }}`{% endif %}

&nbsp;

{% unless forloop.last %}
<hr style="border-top: 1px dashed #333;">
{% endunless %}
{% endfor %}



## > protocol-tags

todo

## > protocol-fields

<!--todo-->
total: [**1157** items]

todo


## > protocol-decoders

todo


## > information-tables

todo