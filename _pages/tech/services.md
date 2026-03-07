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

{% comment %} Filter service tags and sort them by name {% endcomment %}
{% assign filtered_services = site.data.release.json.tag_info | where_exp: "item", "item.categories contains 'protocol' == false" | where_exp: "item", "item.categories contains 'metadata' == false" | sort: "name" %}

## > services

search: [{{ filtered_services.size }} items]

<hr>


{% for service in filtered_services %}
<h3 id="{{ service.short_name }}">
  <a href="#{{ service.short_name }}">{{ service.short_name }}</a>
</h3>

<!--
* `categories`: {{ service.categories | join: ", " }}
* `workflow`: {{ service.workflow | join: ", " | default: "none" }}
-->

* `short_name`: {{ service.short_name }}
* `categories`: {% for cat in service.categories -%}
<a href="{{ '/tech/info/categories/' | relative_url }}#{{ cat | slugify }}">{{ cat }}</a>{% unless forloop.last %}, {% endunless %}
{%- endfor %}
* `workflow`: {% if service.workflow == "none" or service.workflow == nil or service.workflow.size == 0 %}none{% else -%}
  {%- for wf in service.workflow -%}
<a href="{{ '/tech/info/workflow/' | relative_url }}#{{ wf | slugify }}">{{ wf }}</a>{% unless forloop.last %}, {% endunless %}
  {%- endfor -%}
{%- endif %}

&nbsp;
{{ service.description }}
  {% endif %}
{% endfor %}