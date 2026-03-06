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
<div class="toc-container">
{% for ext in ext_data %}
  # <a href="#{{ ext.name | slugify }}">{{ ext.name }}</a><br>
{% endfor %}
</div>

<hr>

{% for ext in ext_data %}
{% assign ext_id = ext.name | slugify %}
<h3 id="{{ ext_id }}">
  <a href="#{{ ext_id }}">{{ ext.name }}</a>
</h3>

{{ ext.description }}

{% comment %} Loading extension fields {% endcomment %}
{% assign ext_fields = site.data.release.json.extensions.fields.[ext.name].fields %}

{% if ext_fields %}
\# **fields**
{% for field in ext_fields %}
* **name**: `{{ field.name }}`
* **type**: `{{ field.type }}`
* **length**: `{{ field.length }}`
* **mask**: `{{ field.mask }}`
* **multiple**: `{{ field.multiple }}`
* **description**: `{{ field.description }}`

{% endfor %}
{% endif %}
<hr>
{% endfor %}