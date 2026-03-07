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

| name | description |
| :--- | :--- |
{%- assign metadata = site.data.release.json.classification.metadata -%}
{%- for item in metadata -%}

| {{ item.name }} | {{ item.description | replace: "|", "\|" }} |
{% endfor %}
