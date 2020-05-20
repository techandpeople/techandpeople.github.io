---
title: "Tech & People Lab - Join us"
layout: gridlay
excerpt: "Tech & People Lab -- Join us."
sitemap: false
permalink: /joinus/
---
<style>
  p {margin : 0;}
</style>
# Join us
<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
The <strong><a href="{{ site.url }}{{ site.baseurl }}/">Tech&People</a></strong> group is always on the lookout for enthusiastic candidate members with multidisciplinary backgrounds. In our work, we embed ourselves in the contexts we are designing for (formative studies), we design and build web, mobile, wearable, robotic, gaming, and tangible interactive systems, and we evaluate them with target users. If you join our group it is likely that you will work closely with end-users, collaborate with a multidisciplinary team (engineers, designers, data scientists, psychologists, clinicians), build novel and impactful interactive systems, eventually publish and present your work internationally, and see your project being used in real-life contexts.
</p>
<p style="margin: 20px; padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0; background-color: #343a40; color: white;">
<strong>Note about COVID-19:</strong><br><br>
The pandemic is taking a toll in everyone’s lives. At Tech&People, we regularly engage with end-users, some of them more fragile. This has obviously impacted the way we do our research. Currently, our evaluations and formative sessions with end-users are performed remotely and we have adapted all our workflows to be done remotely as well, to the extent possible. The group has regular online events (weekly project meetings, reading clubs), and an ongoing virtual laboratory using Discord. Independently of the confinement status, working remotely will always be a choice for those that prefer to do so (with continuous involvement in our virtual communication channels).
</p>
<br>
# Proposals
<br>
<div class="proposals">
{% for proposal in site.proposals %}
  {% include proposal.html prp=proposal %}
{% endfor %}
</div>
