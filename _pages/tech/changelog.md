---
title: /tech/changelog
layout: page
permalink: /tech/changelog/
---

{% include back.html %}

## > changelog debug

{% assign changelogs = site.static_files | where_exp: "file", "file.path contains 'changelog'" %}

**Total files found:** {{ changelogs.size }}

{% for file in changelogs %}
* **Path:** `{{ file.path }}`
* **Year:** `{{ file.path | split: "/" | slice: -2, 1 }}`
* **Name:** `{{ file.name }}`
<hr>
{% endfor %}
