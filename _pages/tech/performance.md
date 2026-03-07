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

{% assign performance_files = site.data.release.json.performance %}

## > performance

total: [{{ performance_files.size }} items]

## # configuration

{% assign config = site.data.release.json.config_summary.info %}

<table style="width: 100%; border-collapse: collapse; font-family: monospace; margin-bottom: 20px;">
  <thead>
    <tr>
      <th style="text-align: left; border-bottom: 1px solid #555; padding: 8px 0;">parameter</th>
      <th style="text-align: right; border-bottom: 1px solid #555; padding: 8px 0;">value</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>active_tag_count</td><td style="text-align: right;">{{ config.active_tag_count }}</td></tr>
    <tr><td>inactive_tag_count</td><td style="text-align: right;">{{ config.inactive_tag_count }}</td></tr>
    <tr><td>expression_count</td><td style="text-align: right;">{{ config.expression_count }}</td></tr>
    <tr><td>classifier_tag_count</td><td style="text-align: right;">{{ config.classifier_tag_count }}</td></tr>
    <tr><td>domain_count</td><td style="text-align: right;">{{ config.domain_count }}</td></tr>
    <tr><td>ipv4_cidr_count</td><td style="text-align: right;">{{ config.ipv4_cidr_count }}</td></tr>
    <tr><td>ipv6_cidr_count</td><td style="text-align: right;">{{ config.ipv6_cidr_count }}</td></tr>
    <tr><td>dns_cache_tag_count</td><td style="text-align: right;">{{ config.dns_cache_tag_count }}</td></tr>
    <tr><td>longest_domain_path</td><td style="text-align: right;">{{ config.longest_domain_path }}</td></tr>
  </tbody>
</table>

## > tests

<div class="toc-container">
{% for file_entry in performance_files %}
  {% assign test = file_entry[1] %}
  # <a href="#{{ test.test_name | slugify }}">{{ test.test_name }}</a><br>
{% endfor %}
</div>

<hr>

{% for file_entry in performance_files %}
  {% assign test = file_entry[1] %}
  
<h3 id="{{ test.test_name | slugify }}"># {{ test.test_name }}</h3>

### // general

**flow_count:** {{ test.flow_count }}
**duration:** {{ test.time_ms | divided_by: 1000.0 | round: 2 }}s [{{ test.time_ms }}ms]

### // performance metrics

{% if test.engine_performance == test.offload_performance %}
| metric | engine |
| :--- | :--- |
| packets | {{ test.engine_performance.total_packets }} |
| bytes | {{ test.engine_performance.total_bytes | divided_by: 1073741824.0 | round: 2 }}GB [{{ test.engine_performance.total_bytes }}B] |
| pps | {{ test.engine_performance.pps | round: 2 }} |
| gbps | {{ test.engine_performance.gpbs | round: 3 }} |
| mbps | {{ test.engine_performance.mpbs | round: 2 }} |
{% else %}
| metric | nic |
| :--- | :--- |
| packets | {{ test.offload_performance.total_packets }} |
| bytes | {{ test.offload_performance.total_bytes | divided_by: 1073741824.0 | round: 2 }}GB [{{ test.offload_performance.total_bytes }}B] |
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
      {% comment %} 1024*1024.0 = 1048576.0 {% endcomment %}
      <td style="padding: 5px 0;">{{ tag.bytes | divided_by: 1048576.0 | round: 2 }}MB</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

&nbsp;

{% unless forloop.last %}<hr>{% endunless %}
{% endfor %}