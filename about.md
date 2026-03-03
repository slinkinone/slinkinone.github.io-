---
title: /about
description: Development team specializing in network traffic analysis, with an emphasis on performance and flexibility.
keywords: slinkin, slinkin technologies, slinkin tech
layout: page
permalink: /about
---

<!--
<h1 hidden>Developement profile and contact information.</h1>
-->

## > about

<img src="/assets/img/logo_black.png" width="200" alt="Slinkin Technologies">

&nbsp;
Slinkin Technologies is an independent team of networking experts. We combine deep engineering expertise with an agile approach to deliver high-performance, flexible solutions for traffic analysis, balancing, and modification.

Even though our products function deep within network infrastructures, we take extra pride in making our complex tools as intuitive, reliable, and user-friendly as possible.

---

# > contact

&nbsp;
Contact us by email <a href="mailto:info@slinkin.tech?subject=Website request&body=Hello!">info@slinkin.tech</a>.

<!--
Contact us by email <a href="mailto:info@slinkin.tech?subject=Website request&body=Hello!">info@slinkin.tech</a> or use the form bellow:

<form>
  <input type="text" id="name" name="name" placeholder="name:" autocomplete="off">
  <input type="text" id="email" name="email" placeholder="email:" autocomplete="off">
  <textarea rows="5" id="message" name="message" placeholder="message:" autocomplete="off"></textarea>
  <input type="submit" value="[ submit ]">
</form>
-->

<div class="email-tool">
    <div style="margin-bottom: 20px;">
        <label for="templateSelect"># Select_Request_Type:</label><br>
        <select id="templateSelect" style="background: transparent; color: inherit; border: 1px solid currentColor; padding: 5px; width: 100%; margin-top: 5px;">
            <option value="" disabled selected>-- Select Template --</option>
            <option value="general">General Question</option>
            <option value="product">Product Request</option>
            <option value="bug">Bug Report</option>
            <option value="feature">Feature Request</option>
            <option value="feedback">Feedback</option>
        </select>
    </div>

    <div style="margin-bottom: 20px;">
        <label for="templateText"># Message_Preview:</label><br>
        <textarea id="templateText" rows="10" style="background: transparent; color: inherit; border: 1px solid currentColor; padding: 10px; width: 100%; margin-top: 5px; font-family: monospace;"></textarea>
    </div>

    <button id="sendBtn" style="background: currentColor; color: #000; border: none; padding: 10px 20px; cursor: pointer; font-weight: bold; font-family: inherit;">
        [ EXECUTE_SEND ]
    </button>
</div>

<script>
    const templates = {
        general: {
            subject: "Question regarding [Topic]",
            body: "Hi Team,\n\nI have a question regarding [Topic]. Could you please clarify how this works?\n\nBest regards,\n[Your Name]"
        },
        product: {
            subject: "Information Request: [Product]",
            body: "Hello,\n\nI am interested in [Product Name] and would like to request more details regarding its availability.\n\nThank you,\n[Your Name]"
        },
        bug: {
            subject: "Bug Report: [Short Description]",
            body: "Steps to reproduce:\n1. Open [Page]\n2. Click on [Action]\n\nExpected Result:\nActual Result:\n\nEnvironment: [Browser/OS]"
        },
        feature: {
            subject: "Feature Request: [Feature]",
            body: "Hi,\n\nI suggest adding [Feature Name].\n\nWhy: This would allow users to [Benefit].\n\nIs this on your roadmap?"
        },
        feedback: {
            subject: "User Feedback",
            body: "Hi there,\n\nI wanted to share some feedback regarding [Product]. I really liked [Point], but [Improvement] could be better.\n\nCheers!"
        }
    };

    const select = document.getElementById('templateSelect');
    const textarea = document.getElementById('templateText');
    const btn = document.getElementById('sendBtn');

    select.addEventListener('change', () => {
        const selected = templates[select.value];
        if (selected) {
            textarea.value = selected.body;
        }
    });

    btn.addEventListener('click', () => {
        const selectedKey = select.value;
        if (!selectedKey) {
            alert('Please select a template first!');
            return;
        }

        const subject = encodeURIComponent(templates[selectedKey].subject);
        const body = encodeURIComponent(textarea.value);
        const email = "your-email@example.com"; 

        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
</script>
