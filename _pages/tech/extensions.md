---
title: /tech/extensions
description: DC Engine extensions
keywords: dc engine, extensions
layout: page
permalink: /tech/extensions
---

<!--
<h1 hidden>DC Engine extensions</h1>
-->

## > extensions

{% comment %} Load and sort {% endcomment %}
{% assign ext_data = site.data.release.json.extensions.extensions.extensions | sort: "name" %}

### > table

{% for ext in ext_data %}
# [{{ ext.name }}](#{{ ext.name | slugify }})
{% endfor %}

<hr>

{% for ext in ext_data %}
{% assign ext_id = ext.name | slugify %}
<h3 id="{{ ext_id }}">
  <a href="#{{ ext_id }}">{{ ext.name }}</a>
</h3>

{{ ext.description }}

<br>
{% endfor %}
