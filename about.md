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
  <label for="templateSelect">select_template:</label>
  <select id="templateSelect" style="display: block; width: 100%; background: transparent; color: inherit; border: 1px solid currentColor; padding: 5px; margin: 10px 0; font-family: inherit; cursor: pointer; border-radius: 0;">
    <option value="" disabled selected style="background: #000;">-- choose_type --</option>
    <option value="general" style="background: #000;">General Question</option>
    <option value="product" style="background: #000;">Product Request</option>
    <option value="bug" style="background: #000;">Bug Report</option>
    <option value="feature" style="background: #000;">Feature Request</option>
    <option value="feedback" style="background: #000;">Feedback</option>
  </select>

  <form id="emailForm" onsubmit="return false;">
    <input type="text" id="subj" placeholder="subject:" autocomplete="off">
    <textarea rows="8" id="message" placeholder="message:" autocomplete="off"></textarea>
    <input type="submit" id="sendBtn" value="[ execute_send ]">
  </form>
</div>

<script>
(function() {
    const templates = {
        general: {
            subject: "Question regarding [Topic]",
            body: "Hi Team,\n\nI have a question regarding [Topic]. Could you please clarify how this works?\n\nBest regards,\n[Your Name]"
        },
        product: {
            subject: "Product Information Request",
            body: "Hello,\n\nI am interested in your solutions and would like to request more details regarding [Product Name].\n\nThank you,\n[Your Name]"
        },
        bug: {
            subject: "Bug Report: [Issue Description]",
            body: "Steps to reproduce:\n1. Open [Context]\n2. Action [What you did]\n\nExpected Result:\nActual Result:\n\nEnvironment: [OS/Browser]"
        },
        feature: {
            subject: "Feature Request",
            body: "Hi,\n\nI suggest adding [Feature].\n\nWhy: This would help in [Scenario].\n\nIs this on your roadmap?"
        },
        feedback: {
            subject: "Feedback regarding [Service/Product]",
            body: "Hi there,\n\nI wanted to share some feedback. I really liked [Point], but [Improvement] could be better.\n\nCheers!"
        }
    };

    const select = document.getElementById('templateSelect');
    const subjInput = document.getElementById('subj');
    const messageText = document.getElementById('message');
    const sendBtn = document.getElementById('sendBtn');

    select.addEventListener('change', function() {
        const selected = templates[this.value];
        if (selected) {
            subjInput.value = selected.subject;
            messageText.value = selected.body;
        }
    });

    sendBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (!messageText.value) {
            alert("Error: Message body is empty.");
            return;
        }

        const subject = encodeURIComponent(subjInput.value || "No Subject");
        const body = encodeURIComponent(messageText.value);
        const email = "info@slinkin.tech"; 

        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
})();
</script>
