---
title: /dc-engine
description: DPI Engine - packet and protocols dissection, flow classification.
keywords: dpi, deep packet inspection, traffic classification, nta, network traffic analyzer, integration solution, network monitor, dpi framework, dpi library, dpi engine, industrial dpi, sl dc engine, dc engine
layout: page
permalink: /dc-engine
---

# > dc-engine

&nbsp;
**D**issection and **C**lassification Engine. Cross-platform and network independent DPI Engine. Integration solution which is written in modern C++.

[# brochure](/assets/pdf/brochure/sl-dpi-en-2024.pdf)

---

## > functionality

### # protocol detection
&nbsp;&nbsp;identifying network protocols, extracting fields, decoding values.

### # internet services classificaion
&nbsp;&nbsp;classification of services and definition of the nature of the flow (audio/video/file transfer).

### # integration into other solutions
&nbsp;&nbsp;ips/ids, siem, dlp, etc.

### # network activity logging
&nbsp;&nbsp;logging of network activity that can be used in the investigation of incidents.

### # data collection for ai
&nbsp;&nbsp;collecting an array of data for use in AI systems.

### # user control
&nbsp;&nbsp;putting users under control (saving all or selected information for certain users).

### # collecting information for billing
&nbsp;&nbsp;accumulation of information on streams for use in billing.

### # hotfix of new vulnerabilities
&nbsp;&nbsp;prevention of exploitation of new vulnerabilities, before the release of official fixes.

---

## > technical advantages

### # integration into other software solutions

&nbsp;
SL DC Engine is a DPI Engine class solution and can be integrated into third-party products. DC Engine provides the ability to dissect packets, obtain protocol fields, collect statistics on network flows, and configure classification rules. DC Engine also makes it possible to expand the basic functionality through an extension mechanism that allows users to add their code to the traffic processing pipeline and use the results of its execution in classification rules.

### # detailed package analysis

&nbsp;
Each processed packet is divided into layers which belong to a specific protocol. SL DC Engine parses each supported protocol and maps its fields, after which their values can be obtained via the API. In addition to, the DC Engine also maintains a hierarchy of fields to provide the ability to visualize a layer's structure in detail. After processing the packet, a user can obtain information about the state of each layer, and if errors occur during the dissection process, the DC Engine will report what exactly went wrong.

### # many supported protocols

&nbsp;
SL DC Engine is designed as a universal framework for processing network traffic, which does not depend on which network traffic is processed. DC Engine can process traffic from local, mobile, and industrial networks; the Internet network, and also supports protocols used by IoT devices.

### # logging system

&nbsp;
One of the main elements when monitoring a network is activity logging. The DLog module is responsible for collecting logs and allows the user to configure what data should be included in each log journal. The log may include data received from custom extensions. DLog also provides the ability to set policies for log rotation. In addition, the user can configure the count of processing threads according to the characteristics of their hardware, which will increase performance.

### # traffic filtering opportunities

&nbsp;
Traffic control allows you to solve problems such as load balancing in the network, restricting access to prohibited resources, preventing malicious network activity, and assigning quotas to individual network users. These problems are common to any type of network, from local to mobile. Solving such problems allows users to comply with regulatory requirements, ensure stable network operation, and respond in time to malicious network activity, preventing its further spread.

### # network services classification

&nbsp;
Classification tasks are typical for such areas as information security, where data is classified as malicious or malicious, system administration, where incorrect network operation is diagnosed, and in the field of mobile operators and Internet providers, where network flows are classified as popular Internet services. SL DC Engine provides functionality to classify network activity through a tagging mechanism. This means that the user can independently create any tag and describe the rule for assigning it to a packet or flow (for example, tethering, fraud, etc.). This approach implies universality in matters of classification and allows users to create their tags for any purpose.

## > technical information

&nbsp;
Technical information is available on our portal: <a href="https://wiki.slinkin.tech">wiki.slinkin.tech</a>.