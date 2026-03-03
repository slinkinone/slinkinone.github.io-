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

<div class="email-tool" style="margin-top: 2rem; border: 1px dashed #555; padding: 20px;">
    <div style="margin-bottom: 20px;">
        <label style="color: #00ff00;"># user@terminal: select_template --type</label><br>
        <select id="templateSelect" style="background: #000; color: #fff; border: 1px solid #fff; padding: 8px; width: 100%; margin-top: 10px; font-family: 'Courier New', Courier, monospace; appearance: auto; -webkit-appearance: auto;">
            <option value="" disabled selected style="background: #000; color: #fff;">-- [CHOOSE_REQUEST_TYPE] --</option>
            <option value="general" style="background: #000; color: #fff;">General Question</option>
            <option value="product" style="background: #000; color: #fff;">Product Request</option>
            <option value="bug" style="background: #000; color: #fff;">Bug Report</option>
            <option value="feature" style="background: #000; color: #fff;">Feature Request</option>
            <option value="feedback" style="background: #000; color: #fff;">Feedback</option>
        </select>
    </div>

    <div style="margin-bottom: 20px;">
        <label style="color: #00ff00;"># user@terminal: vim message_body.txt</label><br>
        <textarea id="templateText" rows="10" style="background: #0b0b0b; color: #00ff00; border: 1px solid #555; padding: 10px; width: 100%; margin-top: 10px; font-family: 'Courier New', Courier, monospace; outline: none;"></textarea>
    </div>

    <button id="sendBtn" style="background: #fff; color: #000; border: 1px solid #fff; padding: 10px 25px; cursor: pointer; font-weight: bold; font-family: 'Courier New', Courier, monospace; transition: all 0.2s;">
        [ EXECUTE_SEND ]
    </button>
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
        const textarea = document.getElementById('templateText');
        const btn = document.getElementById('sendBtn');

        select.addEventListener('change', function() {
            const selected = templates[this.value];
            if (selected) {
                textarea.value = selected.body;
                textarea.style.borderColor = "#00ff00";
            }
        });

        btn.addEventListener('click', function() {
            const selectedKey = select.value;
            if (!selectedKey) {
                alert('ERROR: Select template first.');
                return;
            }

            const subject = encodeURIComponent(templates[selectedKey].subject);
            const body = encodeURIComponent(textarea.value);
            const email = "info@slinkin.tech"; 

            window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + body;
        });

        btn.onmouseover = function() { this.style.background = "#00ff00"; };
        btn.onmouseout = function() { this.style.background = "#fff"; };
    })();
</script>
