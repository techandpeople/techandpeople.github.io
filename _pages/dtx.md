---
title: "Workshop on Digital Therapeutics Evolution: What kind of research will make the difference in this area? @ Ubicomp 2023"
layout: dtx
excerpt: "Workshop on Digital Therapeutics Evolution. What kind of research will make the difference in this area?"
sitemap: false
permalink: /dtx/
---

<h1>Workshop on Digital Therapeutics Evolution: What kind of research will make the difference in this area?</h1>

<h3>At <a href="https://www.ubicomp.org/ubicomp-iswc-2023/">Ubicomp 2023</a>, October 8th, Cancun, Mexico</h3>


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
{% for img in site.data.dtx.highlights %}
{% assign highlight = site.data.dtx[img] %}
<script>
$(".carousel-indicators").append('<li data-target="#myCarousel" data-slide-to="'+ (count++) +'"></li>');
$(".carousel-inner").append('<div class="item"><img style="width:auto; max-height: 400px; margin-left:auto; margin-right:auto;" class="img-responsive imgpub" src="{{ site.url }}{{ site.baseurl }}/images/dtx/{{highlight.photo}}" alt="{{highlight.alt}}"></div>')
$(".carousel-indicators > li:first").addClass("active");
$(".carousel-inner > div:first").addClass("active");
</script>
{% endfor %}


<p style="padding-left:20px; padding-right:20px; padding-bottom: 25px; margin-bottom:0 ">
The latest advances in technology and regulatory frameworks on healthcare enable the possibility to shift from the concept of digital medicine, in which digital technologies are used as a tool for supporting therapy (i.e. tele-monitoring), to the recently developed concept of Digital Therapeutics (DTx). In DTx the medical treatment is based on the use of software and data, or software- and data-driven solutions, in conjunction with hardware devices and traditional medical therapies such as drugs. The new era of DTx  can find an important tool in artificial intelligence through which a more personalised form of healthcare can emerge thanks to the capability to dynamically adapt to patients’ individual clinical needs, goals, and lifestyles. However, in order to achieve the full potential of DTx solutions there are still several open challenges to address.
</p>

<p style="padding-left:20px; padding-right:20px; padding-bottom: 25px; margin-bottom:0 ">
Health is one of the main applications areas of ubiquitous technology with a huge potential impact on the society. Medicine can sometimes be conservative, and while consumer devices and applications have long embraced this technology to drive applications for health management and behaviour change, DTx solutions – which can be considered their clinical counterpart – are still in their infancy. With a focus on the development and design of new DTx solutions, the present workshop aims to contribute to the dissemination and discussion of pervasive and ubiquitous computing technologies. In addition, by gathering insights and providing a space for knowledge sharing between researchers, students and other enthusiasts of DTx, we aim to contribute to the identification of practical, large-scale solutions that can be easily implemented in real-world settings. 
</p>


<h1 id="schedule">Schedule</h1>


* [09:00] Opening
* [09:15 - 10:00] Session 1: DTx Methodologies and Techniques
    1. "<strong>Digital twins in the future design of Digital Therapeutics</strong>", Silvia Gabrielli, Enrico Piras and Oscar Mayora
    2. "<strong>Digital Therapeutics with Virtual Reality and Sensors</strong>", Filipa Ferreira-Brito, Joao Ferreira, Madalena VIeira, Joao Guerreiro and Tiago Guerreiro 
    3. <strong>Focused Discussion on Session 1 </strong>
* [10:00 – 10:45] Session 2: Data capture and monitoring in DTx
    1. "<strong>Digital Phenotyping of Autoimmune Diseases Using Non-Contact Radio Frequency Sensing: A Longitudinal Study Comparing Systemic Lupus Erythematosus and Healthy Participants", Mehdi Boukhechba, Elena Reynoso, Ioannis Pandis, Kenneth Mosca, Rumen Hristov, Shichao Yue, Yuqing Ai, Hariharan Rahul, Dina Katabi, Mark Marris and Stefan Avey
    2. "<strong>Privacy-aware Human Activity Recognition with Smart Glasses for Digital Therapeutics</strong>", Borjan Sazdov and Hristijan Gjoreski
    3. <strong>Focused Discussion on Session 2 </strong>
* [10:45 – 11:00] Coffee Break
* [11:00 – 11:45] Session 3: Digital Active Ingredients and Interventions
    1. "<strong>Towards using Digital Phenotypes in Mobile Tactile Stimulation for Children with ASD</strong>, Luis Miguel Zamudio Fuentes
    2. "<strong>Designing an Intervention against Occupational Stress Based on Ubiquitous Stress and Context Detection</strong>", Mitja Luštrek, Junoš Lukan, Larissa Bolliger, Emelien Lauwerier and Els Clays
    3. <strong>Focused Discussion on Session 3 </strong>
* [11:45 – 12:15] Open Questions on the Future of DTx
* [12:15 – 12:30] Wrap-Up and Closing
* [12:30] Workshop End

<p>Each presenter will have 12 minutes to deliver their presentation</p>

<h1 id="cfp">Call For Papers</h1>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
The objective of this workshop is to address the main challenges for achieving the wider potential of future DTx, and their potential impacts to healthcare management by discussing submissions that will address the following questions: 
</p>

<ul>
    <li>Which are the main design challenges for future DTx solutions?</li>
    <li>Which are the best enabling technologies (i.e. the digital excipients) to improve the outreach of DTx? </li>
    <li>Which characteristics of digital interventions (i.e. digital active ingredients) are the key components  for achieving clinical efficacy, and for what kind of clinical conditions?</li>
    <li>How can knowledge on AI, HCI and clinical sciences be combined to  design  future DTx solutions?</li>
    <li>Which can be (and why?) the best use-cases beyond the current ones (i.e. mental health) for the wider uptake of DTx?</li>
    <li>How could these technologies be incorporated into existing clinical practice processes to maximise their uptake?</li>
    <li>What are the key sustainability aspects to consider for future DTx implementation?</li>
    <li>How much data is important in DTx? Furthermore, how to address the bias and trustworthiness in the AI algorithms?</li>
</ul>

<p style="padding-left:20px; padding-right:20px; padding-bottom: 25px; margin-bottom:0 ">
To achieve these goals and others, we hope to bring together the virtual reality, digital health, ubiquitous computing, sensor development, machine learning, digital health, clinical, HCI and accessibility communities. Through this workshop, participants will be able to share real-life deployment experiences, tools, challenges, and discuss designs and technology goals for future research.
</p>

<h1 id="submission">Submission details:</h1>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">Submitted papers must be no longer than 4 pages of content and 1 page for references in ACM sigconf template with 2 columns. ACM Template can be found here: <a href="https://www.acm.org/publications/proceedings-template">https://www.acm.org/publications/proceedings-template</a></p>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
Each submission will be reviewed by a minimum of two workshop PC members or organisers. Successful papers will have the ability to generate discussions, provide insights to other attendees, and highlight open challenges and potential solutions.  It is required that at least one author of each accepted paper registers for the conference and the workshop. During the workshop, a representative author will briefly present each paper, and there will be ample opportunity for further discussions.</p>

<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
The accepted papers will be published in the UbiComp/ISWC Adjunct Proceedings, which will be included in the ACM Digital Library as part of the UbiComp conference supplemental proceedings.</p>


<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">All papers need to be anonymised. Submissions and any questions should be mailed to <a href="mailto:dtx.workshop.ubicomp23@gmail.com">dtx.workshop.ubicomp23@gmail.com</a></p>


<h2 id="dates">Important Dates</h2>

<ul>
    <li>Submission deadline: June 15th (AoE), 2023 (EXTENDED)</li>
    <li>Notification: June 30th, 2023</li>
    <li>Workshop: October 8th, 2023</li>
</ul>


<h1 id="organizers">Organizers</h1>

<div class="row people-row">
{% for member in site.data.team_members.dtx %}
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


<h1 id="support">Support</h1>
<p style="padding-left:20px; padding-right:20px; padding-top: 25px; padding-bottom: 25px; margin-bottom:0 ">
This workshop was partially supported by the EU H2020 <a href="https://widehealth.eu/">WideHealth</a> project (grant agreement No 952279).
</p>


<script src="{{ "/js/bootstrap.min.js" | prepend: site.baseurl | prepend: site.url}}"></script>
<script src="{{ "/js/bootstrap-accessibility.min.js" | prepend: site.baseurl | prepend: site.url}}"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="{{ site.url }}{{ site.baseurl }}/js/functions.js"></script>
<script src="{{ site.url }}{{ site.baseurl }}/js/anchor_offset.js"></script>
