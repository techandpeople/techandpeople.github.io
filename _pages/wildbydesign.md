---
title: "Wild By Design at UbiComp 2021 (online)"
layout: external
excerpt: "Workshop on Designing Ubiquitous Health Monitoring Technologies for Challenging Environments"
sitemap: false
permalink: /wildbydesign/
---

<h1>Workshop on Designing Ubiquitous Health Monitoring Technologies for Challenging Environments</h1>

<h3>At <a href="https://www.ubicomp.org/ubicomp2021/">UbiComp</a>, September 26th, Online</h3>


<div id="myCarousel" class="carousel slide" data-ride="carousel" data-pause="hover" data-interval="false">
  <!-- Indicators -->
  <ol class="carousel-indicators">
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner">
  </div>

  <!-- Left and right controls -->
  <a class="left carousel-control" role="button" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous slide</span>
  </a>
  <a class="right carousel-control" role="button" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next slide</span>
  </a>
</div>

<script>
let count = 0;
</script>
{% for img in site.data.wild.highlights %}
{% assign highlight = site.data.wild[img] %}
<script>
$(".carousel-indicators").append('<li data-target="#myCarousel" data-slide-to="'+ (count++) +'"></li>');
$(".carousel-inner").append('<div class="item"><img style="width:auto; max-height: 400px; margin-left:auto; margin-right:auto;" class="img-responsive imgpub" src="{{ site.url }}{{ site.baseurl }}/images/wild/{{highlight.photo}}" alt="{{highlight.alt}}"></div>')
$(".carousel-indicators > li:first").addClass("active");
$(".carousel-inner > div:first").addClass("active");
</script>
{% endfor %}


<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
There is a growing focus on monitoring health in uncontrolled (aka in-the-wild) settings. This is partially due to the limitations of occasional formal assessments, and to the increasing availability of off-the-shelf sensing devices and applications. This change of paradigm promises fine-grained monitoring of chronic and neuro-degenerative diseases, early prediction of health conditions, accessible self-management, and the enablement of more effective personalised interventions. </p>

<p style="padding-left:20px; padding-right:20px; padding-bottom: 25px; margin-bottom:0 ">
Despite this potential, there are still limited examples of ubiquitous health technologies used in practice for long periods of time. The majority of ubiquitous health technologies, although targeted at uncontrolled in-the-wild settings, are still mostly tested in the laboratory. Activity trackers are one successful example of a technology that became mainstream. However, it also faces problems with abandonment and adoption and misalignment with user requirements and goals. Although the need for longitudinal in-the-wild studies has been established, the challenges of engaging and sustaining participation has only been surfaced. Awareness and knowledge of this and other challenges for in-the-wild health monitoring is still very limited. 
</p>


<h1 id="keynote">Keynote</h1>

<div class="col-md-4">
<div class="row">
<img id="bio-photo" alt="Profile photo of Ann Blandford" src="/images/people/ann_blandford.png" class="img-responsive imgteam" />
</div>
<div class="row" style="overflow: hidden;">


</div>
</div>
<div class="col-md-8">
<h1>Ann Blandford</h1>
<h3>Understanding engagement with health tech when it goes wild</h3>
<p>Ann Blandford is Professor of Human–Computer Interaction at University College London. In the
past, she has been Director of UCL Interaction Centre (UCLIC) and of the UCL Institute of Digital
Health. She has led many research projects on the design of safety-critical systems and of systems to
help people manage their health. She works closely with healthcare engineers, clinicians and patients,
exploring new approaches to applying HCI methods to practical health technology projects. Her
current projects address a range of health and wellbeing challenges; these include helping people
manage diabetes, sexual health and Long Covid, and supporting clinicians to diagnose eye diseases
and perform surgery more safely. She has published widely on the design, evaluation and use of
interactive health technologies, and on how technology can be designed to better support people’s
needs and values, recognising that people are living complex lives and often managing complex health
conditions.</p>
</div>

<h1 id="accepted">Accepted Papers</h1>


<div class="publications">

<div class="card-home card" style="padding: 0px 0px 0px 10px;">
<div class="row row-thumb-home" style="margin-bottom: 0;">
<div class="col-sm-12">
<p class="title" style="padding-top: 0; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><a href="/downloads/cholakoska.pdf" target="_blank">Differentially Private Federated Learning for Anomaly Detection in eHealth Networks</a></p>
<p class="detail">Ana Cholakoska, Bjarne Pfitzner, Hristijan Gjoreski, Valentin Rakovic, Bert Arnrich, Marija Kalendar</p>
<p class="detail pub-links">
[<a href="/downloads/cholakoska.pdf" target="_blank">PDF</a>]
</p>
</div>
</div>
</div>

<div class="card-home card" style="padding: 0px 0px 0px 10px;">
<div class="row row-thumb-home" style="margin-bottom: 0;">
<div class="col-sm-12">
<p class="title" style="padding-top: 0; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><a href="/downloads/rodrigues.pdf" target="_blank">WildKey: A Privacy-Aware Keyboard Toolkit for Data Collection In-The-Wild</a></p>
<p class="detail">André Rodrigues, André Santos, Kyle Montague, Hugo Nicolau, Tiago Guerreiro</p>
<p class="detail pub-links">
[<a href="/downloads/rodrigues.pdf" target="_blank">PDF</a>]
</p>
</div>
</div>
</div>

<div class="card-home card" style="padding: 0px 0px 0px 10px;">
<div class="row row-thumb-home" style="margin-bottom: 0;">
<div class="col-sm-12">
<p class="title" style="padding-top: 0; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><a href="/downloads/lukan.pdf" target="_blank">Participants' Experience and Adherence in Repeated Measurement Studies Among Office-Based Workers</a></p>
<p class="detail">Junoš Lukan, Larissa Bolliger, Els Clays, Oscar Mayora, Venet Osmani, Mitja Luštrek</p>
<p class="detail pub-links">
[<a href="/downloads/lukan.pdf" target="_blank">PDF</a>]
</p>
</div>
</div>
</div>

<div class="card-home card" style="padding: 0px 0px 0px 10px;">
<div class="row row-thumb-home" style="margin-bottom: 0;">
<div class="col-sm-12">
<p class="title" style="padding-top: 0; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><a href="/downloads/peltonen.pdf" target="_blank">Challenges on Collecting Smartphone Data in Cold Environments</a></p>
<p class="detail">Ella Peltonen, Parsa Shamila</p>
<p class="detail pub-links">
[<a href="/downloads/peltonen.pdf" target="_blank">PDF</a>]
</p>
</div>
</div>
</div>

<div class="card-home card" style="padding: 0px 0px 0px 10px;">
<div class="row row-thumb-home" style="margin-bottom: 0;">
<div class="col-sm-12">
<p class="title" style="padding-top: 0; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><a href="/downloads/carvalho.pdf" target="_blank">Participatory Action Research and Open Source Hardware Appropriation for Large Scale In-The-Wild Studies</a></p>
<p class="detail">Luís Carvalho, Dan Jackson, Tiago Guerreiro, Yu Guan, Kyle Montague</p>
<p class="detail pub-links">
[<a href="/downloads/carvalho.pdf" target="_blank">PDF</a>]
</p>
</div>
</div>
</div>

<div class="card-home card" style="padding: 0px 0px 0px 10px;">
<div class="row row-thumb-home" style="margin-bottom: 0;">
<div class="col-sm-12">
<p class="title" style="padding-top: 0; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><a href="/downloads/dovgan.pdf" target="_blank">Recognition of Behaviour Patterns for People with Profound Intellectual and Multiple Disabilities</a></p>
<p class="detail">Erik Dovgan, Jakob Valic, Gašper Slapničar, Mitja Luštrek</p>
<p class="detail pub-links">
[<a href="/downloads/dovgan.pdf" target="_blank">PDF</a>]
</p>
</div>
</div>
</div>

<div class="card-home card" style="padding: 0px 0px 0px 10px;">
<div class="row row-thumb-home" style="margin-bottom: 0;">
<div class="col-sm-12">
<p class="title" style="padding-top: 0; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><a href="/downloads/rainey.pdf" target="_blank">Data Contribution Summaries for Patient Engagement in Multi-Device Health Monitoring Research</a></p>
<p class="detail">Jay Rainey, David Verweij, Colin Dodds, Johanna Graeber, Farzaneh Farhadi, Ridita Ali, Viana Zhang, Christopher Bull, Jan Smeddinck</p>
<p class="detail pub-links">
[<a href="/downloads/rainey.pdf" target="_blank">PDF</a>]
</p>
</div>
</div>
</div>

<div class="card-home card" style="padding: 0px 0px 0px 10px;">
<div class="row row-thumb-home" style="margin-bottom: 0;">
<div class="col-sm-12">
<p class="title" style="padding-top: 0; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><a href="/downloads/coulby.pdf" target="_blank">IoT in the Wild: An expedition of discovery for remote monitoring</a></p>
<p class="detail">Graham Coulby, Adrian Clear, Oliver Jones, Alan Godfrey</p>
<p class="detail pub-links">
[<a href="/downloads/coulby.pdf" target="_blank">PDF</a>]
</p>
</div>
</div>
</div>




</div>

<h1 id="schedule">Schedule</h1>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
The workshop will run on Zoom on September 26th, at 06:30-11:00 PDT / 09:30-14:00 EDT / 15:30-20:00 CEST / 22:30-03:00 JST/ 11:30-04:00 AEST. We intend to have a discussion-oriented workshop and plan to achieve that with a stimulating keynote speech, a set of panels organized around provocations, and a design fiction group activity. Roughly, the schedule will be as follows:</p>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
<ul>
<li>[15:30 CEST] Welcome and Introductions</li>
<li>[15:45 CEST] Keynote Speech and Q&A: Ann Blandford, UCL</li>

<li>[16:45 CEST] Panel I: Tools and Data 
<ul>
<li>Moderators: Julio Vega, Hristjan Gjoreski, Afsaneh Doryab</li>
<li>Seed position papers and case studies; panel members:
<ol>
  <li>Recognition of Behaviour Patterns for People with Profound Intellectual and Multiple Disabilities</li>
  <li>WildKey: A Privacy-Aware Keyboard Toolkit for Data Collection In-The-Wild</li>
  <li>Differentially Private Federated Learning for Anomaly Detection in eHealth Networks</li>
</ol>
</li>
</ul>
</li>

<li>[17:15 CEST] Panel II: People
<ul>
<li>Moderators: Alisha Pradhan, Patrick Carrington, Roisin McNaney</li>
<li>Seed position papers and case studies; panel members:
<ol>
  <li>Data Contribution Summaries for Patient Engagement in Multi-Device Health Monitoring Research</li>
  <li>Participatory Action Research and Open Source Hardware Appropriation for Large Scale In-The-Wild Studies</li>
  <li>Participants' experience and adherence in repeated measurement studies among office-based workers</li>
</ol>
</li>
</ul>
</li>

<li>[17:45 CEST] (Longer) Break (breakout rooms available for longer discussions/demonstrations)</li>

<li>[18:15 CEST] Panel III: Environments
<ul>
<li>Moderators: Silvia Del Din, Kyle Montague, Diogo Branco</li>
<li>Seed position papers and case studies; panel members:
<ol>
  <li>IoT in the Wild: An expedition of discovery for remote monitoring</li>
  <li>Challenges on Collecting Smartphone Data in Cold Environments</li>
</ol>
</li>
</ul>
</li>

<li>[18:45 CEST] Group Activity: Design Fiction</li>
<li>[19:30 CEST] Town Hall</li>
<li>[20:00 CEST] Closing </li>

</ul>
</p>





<h1 id="cfp">Call For Papers</h1>



<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
The main goal of this workshop is to bridge cross-disciplinary relationships between researchers and practitioners interested in the design, development, and deployment of ubiquitous technologies for health monitoring. Which major challenges arise in in-the-wild deployments of ubiquitous technology? How can the streams of data be manageable for end-users and health professionals? What are the best practices for engaging and sustainable participation in longitudinal deployments? Which are socio-economic, cultural and individual factors of influence?
</p>

<p style="padding-left:20px; padding-right:20px; padding-bottom: 25px; margin-bottom:0 ">
To answer these example questions and others, we hope to bring together the ubiquitous computing, sensor development, machine learning, digital health, clinical, HCI and accessibility communities. Through this workshop, participants will be able to share real-life deployment experiences, tools, challenges, and discuss designs and technology goals for future research.
</p>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 "><a href="https://docs.google.com/document/d/1KfC8B-dKLdyTOZOu-LQfvcyeNHqCfre1Yt5AogmEyVk/edit?usp=sharing">Share the CfP</a></p>

<h2>Topics</h2>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">Topics for the workshop include:</p>

<ul>
    <li>Longitudinal deployments and studies</li>
    <li>Contextual challenges of in-the-wild deployments</li>
    <li>Compliance with longitudinal studies</li>
    <li>Tools for passive and active monitoring</li>
    <li>Socio-economic and cultural factors of influence</li>
    <li>Engaging and sustaining participants in longitudinal research and practice</li>
    <li>Disruption and decay to digital infrastructures</li>
    <li>Sharing and privacy of longitudinal data</li>
    <li>Everyday Ethical Dilemmas</li>
    <li>End-user interfaces and benefits of sensing technologies</li>
    <li>Unintentional learning and consequences of ubiquitous technology deployments</li>
    <li>Dynamic diversity and adaptation</li>
    <li>Visualization of longitudinal data (e.g., clinicians and self)</li>
    <li>Conflicts between adoption and study integrity</li>
</ul>

<h2>Important Dates</h2>

<ul>
    <li>Submission deadline: June 15th, 2021</li>
    <li>Notification: July 15th, 2021</li>
    <li>Workshop: September 26th, 2021</li>
</ul>


<h1 id="submission">Submissions</h1>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
We invite submissions of case studies, position papers or provocations, and demonstrations that  describe ubiquitous health monitoring deployments, tools, and/or challenging environments. Submissions should use the <a href="https://www.acm.org/publications/proceedings-template">ACM sigconf template</a> and have a maximum of 4 pages.
</p>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">Submit your paper at <a href="https://new.precisionconference.com/~sigchi/">Precision Conference</a>. Make a new submission in the SIGCHI, Ubicomp/ISWC 2021, Workshop: Designing Ubi Health Monitoring Tech Track.</p>


<h1 id="organizers">Organizers</h1>

<div class="row people-row">
{% for member in site.data.team_members.wildbydesign %}
{% assign person = site.data.team_members[member] %}
<div class="col-sm-3">
<div id="{{member}}" class="card card-team-member">
<a href="{{ person.url }}">
<img src="{{ site.url }}{{ site.baseurl }}/images/people/{{ person.photo }}" width="100%" class="img-responsive imgteam" style="margin-top: 0; float: left" /></a>
<div class="card-body">
<p class="title">{{ person.name }}</p>
<p class="detail">{{ person.institution }}</p>
</div>
</div>
</div>
{% endfor %}
</div>




<script src="{{ "/js/bootstrap.min.js" | prepend: site.baseurl | prepend: site.url}}"></script>
<script src="{{ "/js/bootstrap-accessibility.min.js" | prepend: site.baseurl | prepend: site.url}}"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="{{ site.url }}{{ site.baseurl }}/js/functions.js"></script>
<script src="{{ site.url }}{{ site.baseurl }}/js/anchor_offset.js"></script>
