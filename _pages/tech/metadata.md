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
| Tag | The tag which is assigned by classifier extension. |
| Tag Type | The type of tag matching (IP, Domain, Cache, etc.). |
| ECH | Encrypted Client Hello. The tag is presented only when ECH exists, but SNI doesn't exist. |
| FTP DATA | FTP data trasnmission. |
| DNS Response Name | Processed dns response name - concatenated labels, resolving offsets, etc. |
| JA3 | The fingerprinting the client's TLS handshake (Client Hello). |
| JA3S | The fingerprinting the server's response (Server Hello). |
| JA3 hash | MD5 hash of JA3. Format: TLSVersion,Ciphers,Extensions,EllipticCurves,EllipticCurvePointFormats. |
| JA3 MD5 | MD5 hash of JA3. Format: TLSVersion,Ciphers,Extensions,EllipticCurves,EllipticCurvePointFormats. |
| JA3S MD5 | MD5 hash of JA3S. Format: TLSVersion,Cipher,Extensions. |
| HTTP/2 Header | The http/2 protocol header block field: name:value. |
| HTTP/2 Push Promise header | The http/2 protocol push-promise block field: name:value. |
| HTTP/2 Continuation header | The http/2 protocol continuation block field: name:value. |
| HTTP Authorization Credentials | Base64 decoded value of Proxy-Authorization header value. |
| TLS Certificate Common name | The CommonName certificate field. |
| TLS Certificate General DNS Name | The dNSName certificate field. Belongs to extension section. |
| Protocol Path | Protocol path string (hierarchical chain of protocol that are used in a session). |
| Bitrate | The bitrate is a measure of how much data is transferred over a network in a given period of time. Measured in bits per second (bps). |
| Average packet size | Average packet size of processed packets. |
| Inter-arrival Time | Inter-arrival Time is the difference in time between the arrival of two consecutive packets at a receiver. Measured in nanoseconds. For one flow packet avg iat is 0. |
| Flow start time | Timestamp of the first flow packet.. |
| Flow last activity time | Timestamp of the last flow packet. |
| Flow duration | The flow duration time. |