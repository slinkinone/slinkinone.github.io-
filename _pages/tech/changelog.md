---
title: /tech/changelog
layout: page
permalink: /tech/changelog/
---

{% include back.html %}

## > changelog

<ul>
  {% assign changelogs = site.static_files | where_exp: "file", "file.path contains '_data/release/txt/changelog/2025/'" %}
  {% for file in changelogs %}
    <li>
      <a href="{{ file.path | relative_url }}">{{ file.basename }}</a>
    </li>
  {% endfor %}
</ul>
