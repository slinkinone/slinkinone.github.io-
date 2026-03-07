---
title: /tech/metadata
description: DC Engine metadata
keywords: dc engine, metadata
layout: page
permalink: /tech/metadata/
---

<!--
<h1 hidden>DC Engine metadata</h1>
-->

{% include back.html %}

## > metadata

<div class="toc-container">
{% for item in metadata %}
  # <a href="#{{ item.name | slugify }}">{{ item.name }}</a><br>
{% endfor %}
</div>

<hr>

{% assign metadata = site.data.release.json.classification.metadata | sort: "name" %}

{% for item in metadata %}
<h3 id="{{ item.name | slugify }}"># {{ item.name }}</h3>
{{ item.description }}
<hr>

{% endfor %}