---
title: /tech/performance
description: DC Engine performance
keywords: dc engine, performance
layout: page
permalink: /tech/performance/
---

<!--
<h1 hidden>DC Engine performance</h1>
-->

{% include back.html %}

## > performance

## # configuration

todo

## > performance

{% assign performance_files = site.data.release.json.performance %}

<div class="toc-container">
{% for file_entry in performance_files %}
  {% assign test = file_entry[1] %}
  # <a href="#{{ test.test_name | slugify }}">{{ test.test_name }}</a><br>
{% endfor %}
</div>

<hr>

{% for file_entry in performance_files %}
  {% assign test = file_entry[1] %}
  
<h2 id="{{ test.test_name | slugify }}"># {{ test.test_name }}</h2>

* **flow_count:** {{ test.flow_count | divided_by: 1000 }}k
* **duration:** {{ test.time_ms }} ms

### // performance metrics

{% if test.engine_performance == test.offload_performance %}
| metric | engine |
| :--- | :--- |
| packets | {{ test.engine_performance.total_packets }} |
| bytes | {{ test.engine_performance.total_bytes }} |
| pps | {{ test.engine_performance.pps | round: 2 }} |
| gbps | {{ test.engine_performance.gpbs | round: 3 }} |
| mbps | {{ test.engine_performance.mpbs | round: 2 }} |
{% else %}
| metric | nic |
| :--- | :--- |
| packets | {{ test.offload_performance.total_packets }} |
| bytes | {{ test.offload_performance.total_bytes }} |
| pps | {{ test.offload_performance.pps | round: 2 }} |
| gbps | {{ test.offload_performance.gpbs | round: 3 }} |
| mbps | {{ test.offload_performance.mpbs | round: 2 }} |
{% endif %}


### // top 10 tags by traffic

<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th style="text-align: left; border-bottom: 1px solid;">name</th>
      <th style="text-align: left; border-bottom: 1px solid;">packets</th>
      <th style="text-align: left; border-bottom: 1px solid;">bytes</th>
    </tr>
  </thead>
  <tbody>
    {% assign sorted_tags = test.tag_stat | sort: "bytes" | reverse %}
    {% for tag in sorted_tags limit: 10 %}
    <tr>
      <td style="padding: 5px 0;">{{ tag.name }}</td>
      <td style="padding: 5px 0;">{{ tag.packets }}</td>
      <td style="padding: 5px 0;">{{ tag.bytes | divided_by: 1024 }} KB</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

&nbsp;

{% unless forloop.last %}<hr>{% endunless %}
{% endfor %}