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
* [What is reassembling?](#what-is-reassembling)
* [How can reassembling affect traffic classification?](#how-can-reassembling-affect-traffic-classification)
* [What is a service?](#what-is-a-service)
* [More than one service on a single server](#more-than-one-service-on-a-sigle-server)
* [Traffic classification](#traffic-classification)
* [Methods for protocol detection](#methods-for-protocol-identification)
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
<b>This introductory section briefly covers basic networking concepts and principles. It is intended to establish a common understanding that will be referenced throughout the more in-depth technical discussions in the following parts.</b>
<hr>

&nbsp;

<hr>
<b>Inline vs. Mirroring</b>
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
<p align="center"><i>Scheme 2: OSI model</i></p>

The diagram was taken from [here](https://www.linkedin.com/pulse/what-protocol-data-unitpdu-rahima-aktar-mvp1e).

By simplifying the formal definitions of the OSI model layers, we can say the following:

* Network layer protocols are responsible for data transmission based on the IP addresses of the recipients.
* Transport layer protocols ensure that, once data reaches the destination server, the correct application can process it (based on ports). In other words, they "navigate" data not between network nodes but between applications on a device.
* Presentation layer protocols determine how the data will be transmitted (encryption, compression, etc.).
* Application layer protocols are used to structure data between the client and server applications, so both can process it. For example, in the HTTP protocol (application layer), before the actual data payload (request or response body) is transmitted, information is provided about which resource the request is for, the format of the payload, whether compression is used, and so on. In essence, application layer protocols are what programs/services on end devices process.


![](/assets/blog/what_is_dpi_engine/img/osi_data_transfer.png "Scheme 3: Data transmission according to the OSI model")
<p align="center"><i>Scheme 3: Data transmission according to the OSI model</i></p>

The diagram was taken from [here](https://www.linkedin.com/pulse/how-do-devices-talk-each-other-rahima-aktar-yhbbc).

## $ [What is a network flow?](#what-is-a-network-flow)

&nbsp;
A **network flow** (or simply **flow**) is an abstraction over network packets, used to group them. For example, consider the Internet, which can be viewed as a large number of packets being transmitted between different network participants. Packets are the smallest unit of network exchange. While a packet represents a more physical abstraction (information, a set of bytes transmitted over a communication channel), a flow is more of a logical entity that helps organize packets into groups. For instance, if the sender and receiver IP addresses are the same, that would constitute an IP flow. Another example: when both the sender and receiver IP addresses, as well as the TCP ports, match. This flow could be considered as part of a specific TCP connection. There can be several TCP connections (and not just TCP) between a sender and a receiver.

Thus, the chaos of packets within the network takes on a more structured form when the packets are divided into groups. To better understand, it is easier to imagine a flow as a pipe through which packets fly. From the sender to the receiver, they travel through one pipe (the forward flow), while the return packets go through a neighboring one (the reverse flow). In this example, the pipe represents a grouping of packets.

<hr>
<b>It is important to distinguish between a network flow and an execution thread. A network flow is referred to as flow, while an execution thread is called thread.
<hr>

![](/assets/blog/what_is_dpi_engine/img/client_server_flow.png "Scheme 4: Forward and reverse flows")
<p align="center"><i>Scheme 4: Forward and reverse flows</i></p>

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
<p align="center"><i>Scheme 5: Flow table example</i></p>

In the diagram above, the _identifier_ field is shown so that its values can be referenced later in the text. In practice, however, the key field is the only key used for lookup.

Previously, we discussed types of flows grouped by the type of key. This classification is useful for managing the flow context (buffering data, collecting statistics, etc.), but it is not the only way flows are categorized. Flows can also be divided into [Control Plane](https://en.wikipedia.org/wiki/Control_plane) and **User Plane** (or **Data Plane**) flows.

A **Control Plane** flow is a network flow where packets carry "control information."
Control information refers to data that is not related to the transmission of user content, but instead serves to negotiate transmission conditions and prepare for data transfer.

For example, consider the FTP protocol. After establishing a TCP connection, when the user enters credentials, navigates directories, or queries file sizes — all of this constitutes control information (_Control Plane_). At the same time, when the user decides to download a file, within the FTP session, a message exchange takes place announcing a socket on the server side that the client must connect to in order to retrieve the file. Then the client initiates a connection to this socket, and the file download begins — but already in a separate flow. This flow is considered part of the _User Plane_.


## $ [Flow direction](#flow-direction)

&nbsp;
Flow direction is typically divided into **Client-To-Server** (**CTS**) and **Server-To-Client** (**STC**). To determine which side is the client, it is necessary to identify who initiated the connection. For example, if a packet contains a TCP layer with only the SYN flag set, it indicates the first packet of a session, and the initiator is the _src_ip:src_port_ socket. In this case, the packet’s direction is _Client-To-Server_. By swapping the IP addresses and ports, we obtain the socket for the _Server-To-Client_ direction.

In Diagram 5, the forward and reverse flows are shown — identifiers 1 and 2. Here, the address 192.168.1.33 represents a server running an SSH service on port 22.


## $ [What is Uplink/Downlink and why it is not the same as CTS/STC?](#what-is-uplink-downlink-and-why-it-is-not-the-same-as-cts-stc)

&nbsp;
In networking, the terms **Uplink** and **Downlink** are also used in relation to network interfaces. Thus, all packets captured from the Uplink interface are considered to belong to the subscriber, while packets captured from the Downlink interface belong to the external network. At first glance, it may seem that the flow direction can always be easily determined based on which interface the packet was captured from (captured from _Uplink_ — _CTS_, captured from _Downlink_ — _STC_). However, this is not entirely correct. For example, imagine a subscriber sets up a mini-server at home (such as a media server with movies), requests a static IP address from the provider, then goes on a two-week vacation and accesses their server remotely from, say, Georgia. In this case, for the provider's DPI system, traffic from the user's server to the user (which is _STC_) will actually go through Uplink, while traffic from the user to the server (_CTS_) will go through _Downlink_.

![](/assets/blog/what_is_dpi_engine/img/uplink_downlink.png "Scheme 6: Uplink/Downlink")
<p align="center"><i>Scheme 6: Uplink/Downlink</i></p>

In Diagram 6, two devices are shown connected to an access point (a home router), which in turn is connected to the **ISP** (**I**nternet **S**ervice **P**rovider) via a wired link. All traffic coming **from** the tablet and laptop is considered **Uplink** for both the router and the ISP. Conversely, all traffic going **to** these devices is considered **Downlink**.


## $ [What is reassembling?](#what-is-reassembling)

&nbsp;
Packets in a network can be compared to freight cars carrying coal. But not everything that needs to be sent can always fit into a single car.
For example, if 180 tons of coal need to be transported from point A to point B, and each car can only hold 60 tons, three cars will be needed to deliver the full amount. The same idea applies to networks. For instance, when a user's browser forms an HTTP request to YouTube that, let's say, is 2048 bytes in size, this request is handed over to the operating system’s TCP stack. The OS kernel then takes responsibility for delivering the request to YouTube’s server. The request might be sent in a single packet or it might be split into multiple segments and sent in parts. This process is called **TCP segmentation**, and the process of putting the segments back together is called **reassembling**.

**Reassembling** is an essential part of how a DPI (Deep Packet Inspection) system operates. In order to extract domain names from packets or decrypt the payload, the DPI system must first reconstruct the full packet or message — and to do that, it needs to capture all of the segments, stitch them back together, and only then perform analysis.

**Segmentation**/**Fragmentation** can occur at different layers of the OSI model. The most common protocols where this happens are:

* IPv4/IPv6
* TCP
* DTLS
* OpenVPN
* QUIC
* HTTP/2

&nbsp;
It’s important to note that if IPv4/IPv6 fragmentation is present in the network, the task for the reassembler becomes more complex. In this case, it first has to reconstruct the message at the IP (network) layer, and only after that can it reassemble the message at the transport layer — and, if necessary (depending on the protocol), even at the application layer.

![](/assets/blog/what_is_dpi_engine/img/reassembler.png "Scheme 7: Message assembling")
<p align="center"><i>Scheme 7: Message assembling</i></p>


**Diagram 7** shows a very simplified example of message reassembly (without sequence numbers, packet sizes, acknowledgments, etc.). At **Stage 0**, you can see that the user's device sends 4 TCP segments to the **AP** (**A**ccess **P**oint), but only 3 segments leave the **AP** — one segment got delayed for some reason. Meanwhile, the **ISP** was also only able to forward two segments to the **DPI** at once, due to its own limitations. The DPI is deployed **inline**, meaning it must make real-time decisions about whether to allow traffic through. However, based on the information currently available for this flow, the DPI does not have enough data to make a decision about whether to let the packets into the external network.

At **Stage 2**, the AP sends the previously delayed first segment to the ISP, and the ISP forwards the third segment that was held back in the previous step. Again, the DPI still lacks the complete message needed to make a final decision for this flow.

At **Stage 3**, the DPI finally receives the missing first segment. With the full message now assembled, it can analyze it and make a decision. In this case, the resource is perfectly legitimate — so the flow is allowed to pass.

## $ [How can reassembling affect traffic classification?](#how-can-reassembling-affect-traffic-classification)

&nbsp;
Segmentation is one of the simplest ways to interfere with traffic classification (after tricks like changing the case in a domain name — for example, YoUTubE.COM). Why does this work? Because if a user forces their OS to set the segment size to 1 byte, and the request to a resource is 2048 bytes in size, then, in the worst case, the DPI will classify the flow only by the **2048th** packet (assuming the hostname is visible in plaintext). In practice, classification happens earlier — as soon as the DPI can extract the server_name (from the TLS protocol) or host/authority (from HTTP/HTTP2). For example, if the server name appears around the 100th byte, the DPI will classify the flow on the 100th packet.

What's happening inside the DPI: the engine gathers incoming packets, byte by byte, into a buffer and continuously checks whether a hostname has already appeared. This is very expensive for high-load systems like DPI. Not only is the final buffer size unpredictable (so it has to be stretched or preallocated generously), but the system also has to repeatedly scan the buffer after every packet, which hits performance hard. Additionally, all this buffering leads to significant memory consumption — a critical issue for DPI systems. Thus, to remain operational, a DPI engine must **self-balance**: it needs to enforce limits on buffering and the number of packets it processes before a flow is marked as **unclassified** (assigned a default policy and its buffers are dropped).

Of course, these days there are entire clusters of IP addresses reserved for large services, so sometimes classification can happen based on IP address alone without needing the hostname at all.


## $ [What is a service?](#what-is-a-service)

&nbsp;
In previous sections, the terms "service" and "protocol" have already been used. However, it is necessary to clarify these concepts to make everything completely clear.

A service is a program running on a server (or a virtual machine) that accepts incoming connections from users and sends/receives data. For example, Telegram is a service for instant messaging ([IM](https://en.wikipedia.org/wiki/Instant_messaging)), YouTube is a media service for uploading and watching video content, and so on. Unlike protocols, services do not have RFCs. In other words, a service is a program that sends and receives data, regardless of the format (JSON, XML, etc.).

If the main goal of a service is to exchange data in a way that the user can read (and vice versa), the role of **protocols** is to define how these data are delivered or presented.

For example, IPv4/IPv6 protocols are responsible for transferring data between network devices like routers and/or servers. Data is transmitted from one device to another based on IP addresses.

<hr>
<b>In addition to routers and servers, there are also switches that handle data transmission between different network segments (typically to other switches). However, switches perform this task based on VLANs (numerical identifiers) rather than IP addresses. It is important to note that VLANs are not considered during traffic classification by the DPI Engine.</b>
<hr>

&nbsp;
Transport protocols (TCP, UDP, QUIC) are responsible for delivering messages from a client to a server at the application level. The choice of transport protocol also determines how critical data loss is. For example, TCP guarantees message delivery, while UDP does not. To better understand what "delivery at the application level" means, let's consider a user (with IP address 192.168.12.22) who opens WhatsApp and YouTube on their smartphone. On the user's device, two ports are opened (let's say 4444 and 5555). Now, packets are sent from the user to the WhatsApp server from port 4444, and to the YouTube server from port 5555. When the smartphone receives a packet with destination port 4444, the operating system forwards the received data to the WhatsApp application. Similarly, packets with destination port 5555 are delivered to YouTube.

![](/assets/blog/what_is_dpi_engine/img/service_sockets.png "Scheme 8: Application ports")
<p align="center"><i>Scheme 8: Application ports</i></p>

SSL/TLS protocols are responsible for encrypting data and verifying the server (and/or the client, if necessary). In other words, they ensure the secure transmission of data.
HTTP/HTTP2 protocols (and other application-layer protocols) are directly responsible for transferring the original message. In particular, HTTP/HTTP2 handle the task of formatting the message so that both sides of the connection (the client and the server) can understand it. For example, an HTTP request includes a URI field that helps the service understand which data the user is requesting. HTTP also has a Content-Type header that indicates the type of transmitted data (text/html, audio/mpeg, image/gif, and so on).

![](/assets/blog/what_is_dpi_engine/img/packet_protocols.png "Scheme 9: Protocol layer cutting")
<p align="center"><i>Scheme 9: Protocol layer cutting</i></p>

The diagram above illustrates how packet layers are stripped off before the application receives the data. The packet first arrives at the **NIC** (**N**etwork **I**nterface **C**ard), where the Ethernet layer is removed, and the data is passed to the OS kernel. The kernel then checks the listening sockets (ip:port). If there is an application listening on the corresponding socket, the network and transport layers are also stripped, and the remaining data is delivered to the application.
In summary, a service is a program. A protocol is a method for transferring or presenting data.

## $ [More than one service on a single server](#more-than-one-service-on-a-sigle-server)

&nbsp;
It is quite common to run multiple services on a single server. For example, a user rents a virtual machine with the IPv4 address 90.156.176.56 and deploys YouTrack and GitLab on it. They purchase a domain (privatezone.com), an SSL certificate, and configure DNS records. As a result, two services are now running on the same IP address.
If the services are launched with default parameters (HTTP port 80, TLS port 443), only the first service to start will run successfully, while the second one will fail to launch (and vice versa) because the default ports are already in use.
To resolve this, the services must be started on different ports — for example, YouTrack on port 9000 and GitLab on port 9001. Now, when a user types privatezone.com into the browser, they will see an error, because no program is running on port 443 (TLS) or 80 (HTTP), which the browser uses by default to send requests.
To access YouTrack, the user would have to enter privatezone.com:9000, and for GitLab — privatezone.com:9001. This is inconvenient since it requires remembering specific ports for each service.
To improve this setup, you should add two more DNS records that point to the same IPv4 address (90.156.176.56), but make the service being accessed clear from the domain name itself. For example, in our case, the DNS records would look like this:

| domain &nbsp;&nbsp;&nbsp;&nbsp;| sub-domain &nbsp;&nbsp;&nbsp;&nbsp;   | type &nbsp;&nbsp;&nbsp;&nbsp; | address          |
| :---                           | :---                                  | :---                          | :---             |
| privatezone.com                | @                                     | A                             | 90.156.176.56    |
| privatezone.com                | git                                   | A                             | 90.156.176.56    |
| privatezone.com                | youtrack                              | A                             | 90.156.176.56    |

&nbsp;
Thus, when a user requests gitlab.privatezone.com in a browser, the browser sends a TLS request with the domain gitlab.privatezone.com specified in the server_name field (SNI). However, the server still won’t respond, because there is no program running on port 443. To route incoming connections between YouTrack and GitLab, you need to install **Nginx** (or any other web server) and configure it to forward requests for youtrack.privatezone.com to YouTrack (127.0.0.1:9000) and requests for gitlab.privatezone.com to GitLab (127.0.0.1:9001). The addresses 127.0.0.1:9000 and 127.0.0.1:9001 mean that the requests are routed locally (127.0.0.1) to ports 9000 and 9001, where they are handled by the appropriate applications.

![](/assets/blog/what_is_dpi_engine/img/vm_2_services.png "Scheme 10: 2 services on one virtual machine")
<p align="center"><i>Scheme 10: 2 services on one virtual machine</i></p>

From the example above, it becomes clear that if multiple services are running on a server/virtual machine, classification by IP address cannot be performed. Domain name checking is absolutely necessary to determine the service. This is important to understand. For example, if a hypothetical Google has a large pool of IP addresses, and there is no information (not received from the service) that, for instance, the pool 142.250.221.0/24 is reserved exclusively for the Gmail service, then IP-based classification is impossible, and additional domain name checking is required (unless, of course, Google is considered as one service). Google can deploy YouTube, Cloud, and so on within this pool without any warning, which would break IP classification.


## $ [Traffic classification](#traffic-classification)

&nbsp;
Traffic classification is the process of determining which service a network flow belongs to. Classification consists of the following steps, some of which may be skipped depending on the protocol or classification technique:

* **Protocol identification** represented in the packet
* **Field dissection** necessary for classification (IP addresses, ports, domain names, etc.)
* **Reassembling** (IPv4, TCP, QUIC, HTTP/2, etc.)
* **Field unpacking** (e.g., DNS Name consisting of labels)
* **Decryption** (e.g., QUIC Initial)
* **Application of techniques** to identify the service of the network flow
* **Application of techniques** to classify the nature of the network flow


## $ [Methods for protocol detection](#methods-for-protocol-identification)

&nbsp;
From the user's perspective, who has deployed OpenVPN and Nginx on their server, everything is simple: they know that OpenVPN operates on port 1194 and Nginx serves their website on port 443. In other words, the OpenVPN server (openvpn-server), running on the user's server on UDP port 1194, knows for sure that the data in the packet is formatted according to the OpenVPN specification. If the data does not comply with this specification, it should not be processed (an error should be reported or simply ignored). Everything is straightforward for the openvpn-server, but not for the network analyzer.

Protocols in a packet can be represented as bricks of different colors, stacked one after another. Determining the color of the next brick can be easy: for example, when the first blue brick says that the next one is red. This example applies to protocols like Ethernet, VLAN, IPv4, IPv6, etc. In one of the fields of such protocols, there is an indication of what protocol comes after it. However, difficulties arise when trying to determine the protocol following the transport layer (TCP/UDP). UDP and TCP protocols do not contain information about which protocol follows them, so identifying the next protocol is possible only heuristically.

The following methods can be used to identify the protocol in a packet:

* **Explicit** – the next protocol is explicitly known (explicit identification).
* **Port-based** – a hint indicating which protocol is most likely.
* **Patterns** – specific patterns or markers whose appearance indicates the packet belongs to a certain protocol. Examples of protocols that can be identified by patterns include HTTP, SSDP, SIP, and a few others.
* **Try-dissect** – checking the structure of the protocol (message size, field values, etc.). There may be collisions with other protocols if their message structures are similar.

&nbsp;
It might seem logical to assume that identifying a protocol is an easy task: just check the port number and, based on it, parse the corresponding protocol. For example, 80 means HTTP, 443 means TLS, and so on. In reality, this assumption is wrong — the port only serves as a hint for which protocol to check first (using patterns or structural analysis). If you rely solely on the port number, services running on non-standard ports will be misidentified. For instance, imagine QUIC traffic traveling to a server not on port 443, but on port 1194 (the default port for OpenVPN). In this case, DPI would first attempt to parse QUIC as OpenVPN, fail, and then label the protocol as unknown. Simple port spoofing would interfere with correct protocol identification and, consequently, with service classification (since the first QUIC message can be reassembled, decrypted, and used to extract the TLS layer and obtain the SNI).

An additional challenge is posed by protocols with high data entropy, such as OpenVPN or RTP/SRTP. In such protocols, only a very small portion of the bytes can be checked against the expected protocol structure. The majority of the message consists of payload, which is essentially unpredictable and useless for analysis. For these protocols, it's usually necessary to collect more than one packet to either correlate certain fields across multiple messages or verify that the structure of a subsequent packet no longer matches the protocol initially assumed by the **DPI Engine** (i.e., using the method of elimination).

Thus, for a DPI Engine, it is important not only to recognize a protocol based on a single message type (for example, TLS Client Hello), which can directly influence the final service classification. It is equally important to understand the structure of every message type supported by the protocol (such as TLS Alert, Change Cipher Spec, Application Data, and others), because the ability to correctly parse any message type reduces the risk of false positives and increases the chance of identifying the protocol from the very first packet. In other words, the more protocols are supported and the more message types a DPI Engine can accurately dissect for each protocol, the more reliable the classification will be.

There are also some edge cases where protocol identification seems straightforward at first glance, but isn't in practice. A good example is ICMP traffic with an embedded payload. ICMP is a simple and important protocol, typically allowed across most networks and usually treated as a terminal protocol (at least in an ideal world). However, ICMP packets can carry payload data. Since payload analysis in ICMP is rarely needed (and analyzing every payload would unnecessarily burden the system in 99% of cases), it is often skipped. That said, payloads can be used to establish covert ICMP tunnels.


## $ [Methods for classifying internet services](#)

&nbsp;
...


## $ [Flow type classification (workflow)](#)

&nbsp;
...


## $ [Why is it difficult?](#)

&nbsp;
...


## $ [What else is interesting about the DPI Engine?](#)

&nbsp;
...

