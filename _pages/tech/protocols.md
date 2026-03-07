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

<!--todo-->
total: [**60** items]

{% assign all_protocols = site.data.release.json.protocols.protocols.protocols | sort: "name" %}

{% comment %} Оглавление в две колонки {% endcomment %}
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

{% for proto in all_protocols %}
<h3 id="{{ proto.name | slugify }}"># {{ proto.name }}</h3>

* **osi layer**: `{{ proto.osi }}`
{% if proto.ports != "" %}* **default ports**: `{{ proto.ports }}`{% endif %}
{% if proto.patterns != "" %}* **signature patterns**: `{{ proto.patterns }}`{% endif %}

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