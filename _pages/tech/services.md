---
title: /tech/services
description: DC Engine services
keywords: dc engine, services
layout: page
permalink: /tech/services
---

<!--
<h1 hidden>DC Engine services</h1>
-->

## > services
&nbsp;

{% assign sorted_services = site.data.release.json.tag_info | sort: "name" %}

{% for service in site.data.release.json.tag_info %}  
  {% assign is_excluded = false %}
  {% if service.categories contains 'protocol' or service.categories contains 'metadata' %}
    {% assign is_excluded = true %}
  {% endif %}

  {% if is_excluded == false %}

### [{{ service.name }}](#{{ service.short_name }}) {: #{{ service.short_name }} }
&nbsp;

* `short_name`: {{ service.short_name }}
* `categories`: {{ service.categories | join: ", " }}
* `workflow`: {{ service.workflow | join: ", " | default: "none" }}

&nbsp;
{{ service.description }}
  {% endif %}
{% endfor %}