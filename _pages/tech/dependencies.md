---
title: /tech/dependencies
description: DC Engine dependencies
keywords: dc engine, dependencies
layout: page
permalink: /tech/dependencies
---

<!--
<h1 hidden>DC Engine dependencies</h1>
-->

## > dependencies

&nbsp;
| Name | Version |
| :--- | :---    |
{% for item in site.data.release.json.dependencies.dependencies %}| {{ item.name }} | &nbsp; {{ item.version }} |
{% endfor %}