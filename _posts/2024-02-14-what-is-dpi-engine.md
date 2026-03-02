---
layout: post
title:  "What is DPI Engine?"
description: The task of traffic classification is fundamental to a comprehensive DPI solution and falls under a separate category known as the DPI Engine.
keywords: dpi, deep packet inspection, dpi engine, reassembling, packet dissection, flow classification, network service, domain fronting, domain patterns, data patterns, ip database, data structure, dns cache, tls session cache, audio/video call classification
image: /assets/blog/what_is_dpi_engine/img/dpi_engine_cover.png
date:   2024-02-14 12:00:00 +0000
categories: article
author: Vyacheslav Slinkin
---

<center><h1>What is DPI Engine?</h1></center>

<!---
<b><center>What is DPI Engine?</center></b>
--->

&nbsp;

![](/assets/blog/what_is_dpi_engine/img/dpi_engine_cover.png "What is DPI Engine?")

---

## > Content Table

&nbsp;
* [Introduction](#introduction)
* [What is a network protocol, packet, layer?](#what-is-network-protocol-packet-and-layer)
* [OSI](#osi)
* [What is a network flow?](#)
* [Flow direction](#)
* [What is Uplink/Downlink and why is it not the same as CTS/STC?](#)
* [What is reassembling?](#)
* [How can reassembling affect traffic classification?](#)
* [What is a service?](#)
* [More than one service on a single server](#)
* [Traffic classification](#)
* [Methods for protocol detection](#)
* [Methods for classifying internet services](#)
* [Flow type classification (workflow)](#)
* [Why is it difficult?](#)
* [What else is interesting about the DPI Engine?](#)
&nbsp;

---

## $ [Introduction](#introduction)

&nbsp;
For those familiar with the term DPI (**Deep Packet Inspection**), it often evokes unpleasant associations: blocking, regulators, censorship, tightening controls, and so on. In reality, DPI is simply the name of a technology whose essence lies in the deep analysis of network traffic.

It is important to clarify from the outset that DPI examines traffic "inline" — meaning it analyzes the entire packet (across all OSI model layers), not just the payload (such as the HTTP layer, which, by the way, is almost always encrypted for an in-line analyzer unless it engages in certificate substitution).

Returning to why DPI should not be viewed negatively:

- is used, in one form or another, in all information security solutions (NTA, NGFW, Network Monitors, NPF, etc.);
- helps system administrators monitor events within a network;
- enables mobile operators to create attractive plans for subscribers (since this requires traffic classification, for instance, to exclude traffic from messengers if they are unlimited under a given plan);
- allows load balancing across the network, providing subscribers with approximately equal connection speeds in high-traffic areas (such as during football matches or concerts — heavy load on cells, where it is better to provide fair access to messaging and browsing services while limiting bandwidth for platforms like YouTube).

&nbsp;
In an operator’s network, DPI must not only classify network flows but also authenticate subscribers, retrieve policies, and monitor their enforcement (throttle speeds, block prohibited resources, restrict access to internal services when the balance is zero, etc.).

The task of traffic classification is fundamental to a full-fledged DPI solution and belongs to a distinct class known as **DPI Engine**. This is due to the constant evolution of services — names change (e.g., Twitter -> X), new domain names, CDNs, new service optimization methods are developed (such as voice or video calls), and new protocols are adopted. As a result, a separate segment of tasks arises that is independent of the type of network (Mobile Core, ISP, Wi-Fi AP, etc.), yet solving these tasks remains essential for each network type. For this reason, deep traffic analysis and network flow classification are carried out specifically by **DPI Engine** solutions.

<hr>
<b>IMPORTANT: This introductory section briefly covers basic networking concepts and principles. It is intended to establish a common understanding that will be referenced throughout the more in-depth technical discussions in the following parts.</b>
<hr>

&nbsp;

<hr>
<b>IMPORTANT: Inline vs. Mirroring</b>
&nbsp;
<b>DPI solutions typically operate in one of two modes: inline or mirroring.
Inline deployment means that the DPI system is positioned between the client and the external network and must make real-time decisions regarding traffic flow without delayed processing. In contrast, in mirroring mode, the DPI system receives a copy of the traffic rather than the actual live packets. Even when operating in mirroring mode, a DPI can still influence session behavior (for example, by terminating a session through sending a TCP-RST packet); however, such intervention does not require introducing delays to the rest of the packet flow.</b>
<hr>

## $ [What is a network protocol, packet, layer?](#what-is-network-protocol-packet-and-layer)

&nbsp;
In order to explain how traffic classification works, it is necessary to introduce some basic concepts. While these may be familiar to experienced readers, it is still worth defining them.

**Packet** — a packet is a set of bytes, structured in a specific way, that is received or transmitted over a network interface.

**Protocol** — a protocol is a set of rules that govern how data is transmitted between different nodes in a network. Protocols define how data should be formatted, processed, transmitted in order, and more. Different protocols serve different roles in data transmission and are responsible for various functions.

**Layer** — a layer refers to the portion of a network packet associated with a particular protocol. This section (__set of bytes__) cannot belong to more than one protocol at the same time.

**Field** — a field is a part of a layer (__set of bytes__) that stores information for specific, predefined purposes. For example, in an IPv4 layer, which occupies 20 bytes (without Options), the sender’s address (4 bytes) is located at byte offset 12, while the receiver’s address (also 4 bytes) is located at offset 16.


![](/assets/blog/what_is_dpi_engine/img/packet.png "Scheme 1: Protocol layers inside a packet")

## $ [OSI](#osi)

&nbsp;
[OSI](https://en.wikipedia.org/wiki/OSI_model) (**O**pen **S**ystems **I**nterconnection model) is a hierarchical, multi-layered framework for network protocols, where each layer plays a specific role in ensuring the successful transmission of data.

![](/assets/blog/what_is_dpi_engine/img/osi_pdu.png "Scheme 2: OSI model")

## [What is a network flow?](#)

&nbsp;
...

## [Flow direction](#)

&nbsp;
...


## [What is Uplink/Downlink and why is it not the same as CTS/STC?](#)

&nbsp;
...


## [What is reassembling?](#)

&nbsp;
...


## [How can reassembling affect traffic classification?](#)

&nbsp;
...


## [What is a service?](#)

&nbsp;
...


## [More than one service on a single server](#)

&nbsp;
...


## [Traffic classification](#)

&nbsp;
...


## [Methods for protocol detection](#)

&nbsp;
...


## [Methods for classifying internet services](#)

&nbsp;
...


## [Flow type classification (workflow)](#)

&nbsp;
...


## [Why is it difficult?](#)

&nbsp;
...


## [What else is interesting about the DPI Engine?](#)

&nbsp;
...

