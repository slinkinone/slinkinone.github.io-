const templates = {
    general: { subject: "Question regarding [Product/Service]", body: "Hi Team,\n\nI hope you're doing well. My name is [Your Name] and I have a question regarding [Topic]. Could you please clarify how [Feature/Process] works?\n\nLooking forward to your reply.\n\nBest regards,\n[Your Name]" },
    product: { subject: "Information Request: [Product Name]", body: "Hello,\n\nMy name is [Your Name] and I am interested in [Product Name] and would like to request more details regarding its pricing and availability for [Your Region/Company].\n\nThank you,\n[Your Name]" },
    bug: { subject: "Bug Report: [Short Description]", body: "Steps to reproduce:\n1. Run [App]\n2. Specify [Configuration File]\n3. Specify [Pcap/Interface] with [Type] packets/traffic\n4. Observe [Issue]\n\nExpected Result: [What should happen]\nActual Result: [What happened]\n\nEnvironment: [OS version], [Product Version]\n\nAttached files: [Configuration], [Pcap dump], [Core dump], [Logs/Trace]" },
    feature: { subject: "Feature Request: [Feature Name]", body: "Hi,\n\nMy name is [Your Name] and I've been using your product and thought it would be great to have [Feature Name].\n\nHow it helps: This would allow users to [Benefit].\n\nIs this something you are considering for your roadmap?" },
    feedback: { subject: "User Feedback: [Product/Service]", body: "Hi there,\n\nMy name is [Your Name] and I wanted to share some feedback regarding my experience with [Product]. I really appreciate [Positive Point], but I think [Improvement] could be improved.\n\nKeep up the great work!" }
};
const select = document.getElementById('templateSelect');
const textarea = document.getElementById('message');
const form = select.closest('form');
select.addEventListener('change', (e) => {
    const template = templates[e.target.value];
    if (template) { textarea.value = template.body; }
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!select.value) { alert("Please select a template!"); return; }
    if (!textarea.value.trim()) { alert("Message is empty!"); return; }
    const template = templates[select.value];
    const email = "info@slinkin.tech";
    const subject = encodeURIComponent(template.subject);
    const message = encodeURIComponent(textarea.value);
    window.location.href = `mailto:${email}?subject=${subject}&body=${message}`;
});