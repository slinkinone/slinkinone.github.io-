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

&nbsp;

| extension | description | cache |
| :--- | :--- | :--- |
| Data structure | Checks an unrecognized protocol for various patterns, such as the first two bytes to determine the payload size. | No |
| FTP cache | IP address caching and port obtained from the FTP-CONTROL stream for subsequent classification of the FTP-DATA stream (file transfer). | Yes |
| TLS certificate | common_name and dns_name extracting from a TLS certificate. | No |
| HTTP/2 field block | Decodes HTTP/2 headers (HPACK). | Yes |
| Host name | Hostname extracting for protocols such as SSDP, HTTP, HTTP/2, TLS, DTLS. | No |
| HTTP metadata | Metadata extracting from an HTTP packet. For example: detects HTTP Pipeline, decodes the Authorization-Credentials header value, and so on. | No |
| Tree | Builds a chain of protocols.. | No |
| DNS response name | Domain names extracting from a DNS response. | No |
| Classifier | The extension classifies Internet services and allows user to configure a set of metrics and classification techniques for each individually. Also, the extension sets flags for the session, such as is_final_protocol, is_final_service, is_offload, and so on. | Yes |
| TLS Metadata | The extension extracts additional information from TLS session - JA3/JA3S hashes, and so on. | No |
| SIP Cache | The extension extracts additional information from SIP session and then classifies the child RTP/SRTP and RTCP/SRTCP flows assigning them tags of parent session. | Yes |