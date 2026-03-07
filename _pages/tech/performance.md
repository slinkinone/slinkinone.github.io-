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
  
<h2 id="{{ test.test_name | slugify }}"># test: {{ test.test_name }}</h2>

* **flow_count:** {{ test.flow_count | divided_by: 1000 }}k
* **duration:** {{ test.time_ms }} ms

### // performance metrics


| metric | engine {% unless test.engine_performance == test.offload_performance %}| offload{% endunless %} |
| :--- | :--- {% unless test.engine_performance == test.offload_performance %}| :---{% endunless %} |
| packets | {{ test.engine_performance.total_packets }} {% unless test.engine_performance == test.offload_performance %}| {{ test.offload_performance.total_packets }}{% endunless %} |
| pps | {{ test.engine_performance.pps | round: 2 }} {% unless test.engine_performance == test.offload_performance %}| {{ test.offload_performance.pps | round: 2 }}{% endunless %} |
| gbps | {{ test.engine_performance.gpbs | round: 3 }} {% unless test.engine_performance == test.offload_performance %}| {{ test.offload_performance.gpbs | round: 3 }}{% endunless %} |
| mbps | {{ test.engine_performance.mpbs | round: 2 }} {% unless test.engine_performance == test.offload_performance %}| {{ test.offload_performance.mpbs | round: 2 }}{% endunless %} |

### // top 10 tags by traffic


| name | packets | bytes |
| :--- | :--- | :--- |
{%- assign sorted_tags = test.tag_stat | sort: "bytes" | reverse -%}
{%- for tag in sorted_tags limit: 10 -%}

| {{ tag.name }} | {{ tag.packets }} | {{ tag.bytes | divided_by: 1024 }} KB |
{% endfor %}

&nbsp;

{% unless forloop.last %}<hr>{% endunless %}
{% endfor %}