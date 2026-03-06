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

<h3 id="{{ service.name }}">
  <a href="#{{ service.short_name }}">{{ service.name }}</a>
</h3>

* `short_name`: {{ service.short_name }}
* `categories`: {{ service.categories | join: ", " }}
* `workflow`: {{ service.workflow | join: ", " | default: "none" }}

&nbsp;
{{ service.description }}
  {% endif %}
{% endfor %}