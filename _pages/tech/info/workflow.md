---
title: /tech/info/workflow
layout: page
permalink: /tech/info/workflow/
---

<!--
<h1 hidden>DC Engine tag workflows</h1>
-->

{% include double_back.html %}

## > workflow

{% assign workflow = site.data.release.json.classification.workflow | sort: "name" %}

{% assign total_size = workflow.size %}
{% assign half_size = total_size | divided_by: 2.0 | ceil %}

<div class="toc-container">
<table>
  <tr>
    <td style="vertical-align: top; border: none;">
      {% for item in workflow limit: half_size %}
        # <a href="#{{ item.short_name | slugify }}">{{ item.short_name }}</a><br>
      {% endfor %}
    </td>
    <td style="vertical-align: top; border: none;">
      {% for item in workflow offset: half_size %}
        # <a href="#{{ item.short_name | slugify }}">{{ item.short_name }}</a><br>
      {% endfor %}
    </td>
  </tr>
</table>
</div>

<hr>

{% for item in workflow %}
<h3 id="{{ item.short_name | slugify }}"># {{ item.short_name }}</h3>
{{ item.description }}

{% unless forloop.last %}
<hr>
{% endunless %}

{% endfor %}