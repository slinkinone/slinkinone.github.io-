---
layout: post
title:  "Why is inline traffic monitoring is important?"
date:   2024-03-24 12:00:00 +0000
categories: article
author: Vyacheslav Slinkin
---

<b><center>Why is inline traffic monitoring is important?</center></b>
&nbsp;

![](/assets/blog/why-is-inline-traffic-monitoring-important/img/inline-cover.png "Why is inline traffic monitoring is important?")

---

# > Content Table

&nbsp;
* [Introduction](#introduction)
* [Endpoint node attack](#endpoint-node-attack)
* [Endpoint hardware limitation](#endpoint-hardware-limitation)
* [Agent control](#agent-control)
* [Endpoint software limitation](#endpoint-software-limitation)
* [Conclusion](#conclusion)
&nbsp;

---

## $ [Introduction](#introduction)

&nbsp;
The article describes the advantages of using **DPI** software not on endpoint devices. It is important to note that, despite the title of the article, the described cases are not related fully to **inline** mode and it is also applicable for **asymmetric** and **mirroring** modes.

## $ [Endpoint node attack](#endpoint-node-attack)

&nbsp;
In the field of information security, no one will be surprised when an attacker gets into the local network of the company and gains access (or even root access) to some device within it. Such cases can be very costly to the company. Even more, if an attacker continues invasion by infecting other devices in the network this can lead to critical consequences.

The recommended sequence of actions in such a case:
- **Detect** invasion
- **Isolate** infected node
- **Collect** the important data from the affected device and remove malware/spyware software
- **Analyze** the incident

**DPI** system helps to detect and prevent further spreading of infection (or evil activity) inside the local network. In addition to that, it provides valuable log information for the incident analysis.

![](/assets/blog/why-is-inline-traffic-monitoring-important/img/endpoint-attack.png "Endpoint attack")
<!---
![](/assets/blog/why-is-inline-traffic-monitoring-important/img/endpoint-attack.png "Endpoint attack")
-->

## $ [Endpoint hardware limitation](#endpoint-hardware-limitation)

&nbsp;
These days, there are many **IoT** devices that operate within local networks. The main lack of using them is hardware limitation. They are invented/built to perform one task and nothing more. It is absolutely different story than PC/Laptop/etc. **IoT** devices in the most cases cannot be upgraded.

// img
<!---
![](/assets/blog/why-is-inline-traffic-monitoring-important/img/endpoint-hardware-limitation.png "Endpoint hardware limitation")
-->

In a case, when **DPI** system is presented in the network then there is no need to install security programs on each device. **DPI** collects all network activity and the network engineer can get network log information for any interested device.

## $ [Agent control](#agent-control)

&nbsp;
Another important note about event collection is a count of agents. When the network is huge enough and it contains machines with different hardware and different operating systems - it becomes difficult to manage them. Much easier to collect data when count of agents are limited by few instances.

// img
<!---
![](/assets/blog/why-is-inline-traffic-monitoring-important/img/agent-control.png "Agent control")
-->

In such cases it is more reliable to have one **DPI** system for the whole network or at least on instance per network cluster for network log collection. It will reduce the amount of work for network software debugging at endpoint devices drammaticly.

## $ [Endpoint software limitation](#endpoint-software-limitation)

&nbsp;
**IoT** devices are the part of many companies and they cannot be ignored. They are difficult to manage, not to mention difficult to install anything on them (in most cases, simply impossible). But they also need protection, because like any device on the network, it is accessible and potentially vulnerable.

// img
<!---
![](/assets/blog/why-is-inline-traffic-monitoring-important/img/endpoint-software-limitation.png "Endpoint software limitation")
-->

For such cases, **DPI** can resolve the problem just like in all previous cases - monitoring traffic on a separate node.

## $ [Conclusion](#conclusion)

&nbsp;
No one argues, it is important to have security software on endpoint devices. However, it doesn't always work and much better to have **DPI** system in your local network and also have another security solution since working together they provide the best results. In such cases, DPI solves the problem in the same way as in all the cases described above: by analyzing traffic on a separate network node, which plays not only a security role. It also provides an important information about network activity what can be used for network touble shooting and building reports of user activities or network load statistic.