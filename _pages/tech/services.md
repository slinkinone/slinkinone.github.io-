---
title: /tech/services
description: DC Engine services
keywords: dc engine, services
layout: page
permalink: /tech/services/
---

<!--
<h1 hidden>DC Engine services</h1>
-->

{% include back.html %}

{% assign all_tags = site.data.release.json.tag_info | sort: "name" %}
{% assign filtered_services = "" | split: "" %}

{% for item in all_tags %}
  {% unless item.categories contains 'protocol' or item.categories contains 'metadata' %}
    {% assign filtered_services = filtered_services | push: item %}
  {% endunless %}
{% endfor %}

## > services

total: [{{ filtered_services.size }} items]

<hr>

{% for service in filtered_services %}
<h3 id="{{ service.short_name }}">
  <a href="#{{ service.short_name }}">{{ service.short_name }}</a>
</h3>

* `short_name`: {{ service.short_name }}
* `categories`: {% for cat_id in service.categories -%}
  {% assign category_info = site.data.release.json.classification.categories | where: "short_name", cat_id | first %}
  <a href="{{ '/tech/info/categories/' | relative_url }}#{{ cat_id | slugify }}">
    {%- if category_info -%}
      {{ category_info.short_name }}
    {%- else -%}
      {{ cat_id }}
    {%- endif -%}
  </a>{% unless forloop.last %}, {% endunless %}
{%- endfor %}
* `workflow`: {% if service.workflow == "none" or service.workflow == nil or service.workflow.size == 0 %}none{% else -%}
  {%- for wf in service.workflow -%}
<a href="{{ '/tech/info/workflow/' | relative_url }}#{{ wf | slugify }}">{{ wf }}</a>{% unless forloop.last %}, {% endunless %}
  {%- endfor -%}
{%- endif %}

&nbsp;
{{ service.description }}
{% endfor %}
