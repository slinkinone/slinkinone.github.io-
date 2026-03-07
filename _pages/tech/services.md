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
  {% assign categories_string = item.categories | join: ',' | downcase %}
  {% unless categories_string contains 'protocol' or categories_string contains 'metadata' %}
    {% assign filtered_services = filtered_services | push: item %}
  {% endunless %}
{% endfor %}

## > services

total: [{{ filtered_services.size }} items]

\# [categories](/tech/info/categories)
\# [workflow](/tech/info/workflow)

<hr>

{% for service in filtered_services %}
<h3 id="{{ service.short_name }}">
  <a href="#{{ service.short_name }}">{{ service.short_name }}</a>
</h3>

* `name`: {{ service.name }}
* `short_name`: {{ service.short_name }}
* `categories`: {% for cat in service.categories -%}
<a href="{{ '/tech/info/categories/' | relative_url }}#{{ cat | slugify }}">{{ cat | downcase }}</a>{% unless forloop.last %}, {% endunless %}
{%- endfor %}
* `workflow`: {% if service.workflow == "none" or service.workflow == nil or service.workflow.size == 0 %}none{% else -%}
  {%- for wf in service.workflow -%}
<a href="{{ '/tech/info/workflow/' | relative_url }}#{{ wf | slugify }}">{{ wf }}</a>{% unless forloop.last %}, {% endunless %}
  {%- endfor -%}
{%- endif %}

&nbsp;
{{ service.description }}
{% endfor %}
