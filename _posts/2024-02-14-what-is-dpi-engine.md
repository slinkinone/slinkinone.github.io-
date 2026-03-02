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
* [What is a network flow?](#what-is-a-network-flow)
* [Flow direction](#flow-direction)
* [What is Uplink/Downlink and why is it not the same as CTS/STC?](#what-is-uplink-downlink-and-why-it-is-not-the-same-as-cts-stc)
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
<p align="center"><i>Scheme 1: Protocol layers inside a packet</i></p>

## $ [OSI](#osi)

&nbsp;
[OSI](https://en.wikipedia.org/wiki/OSI_model) (**O**pen **S**ystems **I**nterconnection model) is a hierarchical, multi-layered framework for network protocols, where each layer plays a specific role in ensuring the successful transmission of data.

![](/assets/blog/what_is_dpi_engine/img/osi_pdu.png "Scheme 2: OSI model")
*Scheme 2: OSI model*

The diagram was taken from [here](https://www.linkedin.com/pulse/what-protocol-data-unitpdu-rahima-aktar-mvp1e).

By simplifying the formal definitions of the OSI model layers, we can say the following:

* Network layer protocols are responsible for data transmission based on the IP addresses of the recipients.
* Transport layer protocols ensure that, once data reaches the destination server, the correct application can process it (based on ports). In other words, they "navigate" data not between network nodes but between applications on a device.
* Presentation layer protocols determine how the data will be transmitted (encryption, compression, etc.).
* Application layer protocols are used to structure data between the client and server applications, so both can process it. For example, in the HTTP protocol (application layer), before the actual data payload (request or response body) is transmitted, information is provided about which resource the request is for, the format of the payload, whether compression is used, and so on. In essence, application layer protocols are what programs/services on end devices process.


![](/assets/blog/what_is_dpi_engine/img/osi_data_transfer.png "Scheme 3: Data transmission according to the OSI model")
*Scheme 3: Data transmission according to the OSI model*

The diagram was taken from [here](https://www.linkedin.com/pulse/how-do-devices-talk-each-other-rahima-aktar-yhbbc).

## [What is a network flow?](#what-is-a-network-flow)

&nbsp;
A **network flow** (or simply **flow**) is an abstraction over network packets, used to group them. For example, consider the Internet, which can be viewed as a large number of packets being transmitted between different network participants. Packets are the smallest unit of network exchange. While a packet represents a more physical abstraction (information, a set of bytes transmitted over a communication channel), a flow is more of a logical entity that helps organize packets into groups. For instance, if the sender and receiver IP addresses are the same, that would constitute an IP flow. Another example: when both the sender and receiver IP addresses, as well as the TCP ports, match. This flow could be considered as part of a specific TCP connection. There can be several TCP connections (and not just TCP) between a sender and a receiver.

Thus, the chaos of packets within the network takes on a more structured form when the packets are divided into groups. To better understand, it is easier to imagine a flow as a pipe through which packets fly. From the sender to the receiver, they travel through one pipe (the forward flow), while the return packets go through a neighboring one (the reverse flow). In this example, the pipe represents a grouping of packets.

<hr>
<b>IMPORTANT: It is important to distinguish between a network flow and an execution thread. A network flow is referred to as flow, while an execution thread is called thread.
<hr>

![](/assets/blog/what_is_dpi_engine/img/client_server_flow.png "Scheme 4: Forward and reverse flows")
*Scheme 4: Forward and reverse flows*

Packets need to be divided into flows for several reasons. For example, to keep statistics (such as the number of processed packets, bytes, timestamps, etc.), which can be useful for traffic classification or for [shaping](https://en.wikipedia.org/wiki/Traffic_shaping) (speed limiting).

The forward and reverse flows are linked to each other (referencing each other), forming a session. A **session** is a collection of shared information for related flows. For instance, for two TLS flows (forming a session) after the handshake is completed, parameters such as _supported_version_, _application_layer_protocol_negotiation_, _session_id_, _tls_cipher_suite_, and _compression_method_ are common to both flows.

In Diagram 4, the session context is presented as a shared entity that consolidates information characteristic of both flows.

When a packet is processed, the **DPI Engine** must associate the packet with a flow. To do this, a flow _key_/_identifier_ must be calculated based on data from the packet. The key is calculated differently depending on the structure of the packet. Flows can be of various types, but the most common ones are:

| type &nbsp;&nbsp;&nbsp;&nbsp;| Description &nbsp;&nbsp;&nbsp;&nbsp; | key  |
| :---                         | :---                                 | :--- |
| **Tuple3** | IPv4/IPv6 fragmented flow | { src_ip, dst_ip, id } |
| **Tuple5** | IPv4/IPv6 transport flow | { src_ip, src_port, dst_ip, dst_port, protocol } |
| **Tuple6** | Tunnel flow (VLAN-C-TAG, GRE, …) | { src_ip, src_port, dst_ip, dst_port, protocol, tag } |

&nbsp;

That is, to calculate the key, it is necessary to reach the IP layer, extract the IP addresses, and check that the flow is not fragmented (by verifying the offsets and the MF flag). If the IP packet is fragmented, the ID field should be used to construct a Tuple3 key. If the packet is not fragmented, the next layer after IP should be examined to extract the ports (if it is a transport layer protocol and ports are present), and a Tuple5 key should be constructed.

![](/assets/blog/what_is_dpi_engine/img/flow_table.png "Scheme 5: Flow table example")
*Scheme 5: Flow table example*

In the diagram above, the _identifier_ field is shown so that its values can be referenced later in the text. In practice, however, the key field is the only key used for lookup.

Previously, we discussed types of flows grouped by the type of key. This classification is useful for managing the flow context (buffering data, collecting statistics, etc.), but it is not the only way flows are categorized. Flows can also be divided into [Control Plane](https://en.wikipedia.org/wiki/Control_plane) and **User Plane** (or **Data Plane**) flows.

A **Control Plane** flow is a network flow where packets carry "control information."
Control information refers to data that is not related to the transmission of user content, but instead serves to negotiate transmission conditions and prepare for data transfer.

For example, consider the FTP protocol. After establishing a TCP connection, when the user enters credentials, navigates directories, or queries file sizes — all of this constitutes control information (_Control Plane_). At the same time, when the user decides to download a file, within the FTP session, a message exchange takes place announcing a socket on the server side that the client must connect to in order to retrieve the file. Then the client initiates a connection to this socket, and the file download begins — but already in a separate flow. This flow is considered part of the _User Plane_.


## [Flow direction](#flow-direction)

&nbsp;
Flow direction is typically divided into **Client-To-Server** (**CTS**) and **Server-To-Client** (**STC**). To determine which side is the client, it is necessary to identify who initiated the connection. For example, if a packet contains a TCP layer with only the SYN flag set, it indicates the first packet of a session, and the initiator is the _src_ip:src_port_ socket. In this case, the packet’s direction is _Client-To-Server_. By swapping the IP addresses and ports, we obtain the socket for the _Server-To-Client_ direction.

In Diagram 5, the forward and reverse flows are shown — identifiers 1 and 2. Here, the address 192.168.1.33 represents a server running an SSH service on port 22.


## [What is Uplink/Downlink and why it is not the same as CTS/STC?](#what-is-uplink-downlink-and-why-it-is-not-the-same-as-cts-stc)

&nbsp;
In networking, the terms **Uplink** and **Downlink** are also used in relation to network interfaces. Thus, all packets captured from the Uplink interface are considered to belong to the subscriber, while packets captured from the Downlink interface belong to the external network. At first glance, it may seem that the flow direction can always be easily determined based on which interface the packet was captured from (captured from _Uplink_ — _CTS_, captured from _Downlink_ — _STC_). However, this is not entirely correct. For example, imagine a subscriber sets up a mini-server at home (such as a media server with movies), requests a static IP address from the provider, then goes on a two-week vacation and accesses their server remotely from, say, Georgia. In this case, for the provider's DPI system, traffic from the user's server to the user (which is _STC_) will actually go through Uplink, while traffic from the user to the server (_CTS_) will go through _Downlink_.

![](/assets/blog/what_is_dpi_engine/img/uplink_downlink.png "Scheme 6: Uplink/Downlink")
*Scheme 6: Uplink/Downlink*

In Diagram 6, two devices are shown connected to an access point (a home router), which in turn is connected to the **ISP** (**I**nternet **S**ervice **P**rovider) via a wired link. All traffic coming **from** the tablet and laptop is considered **Uplink** for both the router and the ISP. Conversely, all traffic going **to** these devices is considered **Downlink**.


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

