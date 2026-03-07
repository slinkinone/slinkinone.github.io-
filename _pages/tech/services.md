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

## > services

search: ...

<hr>

{% assign sorted_services = site.data.release.json.tag_info | sort: "name" %}

{% for service in site.data.release.json.tag_info %}  
  {% assign is_excluded = false %}
  {% if service.categories contains 'protocol' or service.categories contains 'metadata' %}
    {% assign is_excluded = true %}
  {% endif %}

  {% if is_excluded == false %}

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